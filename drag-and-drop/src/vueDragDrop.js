(function () {
    // let this;
    let vueDragDrop = {}
    vueDragDrop.install = function (Vue) {
        Vue.directive('dragDrop', {
            bind: function (el, binding, vnode) {
                this.handleDragStart = function (e) {
                    e.target.classList.add('dragging');
                    // e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text', '*');
                    vnode.context.$emit('dragStart');
                }.bind(this);

                this.handleDragOver = function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    // e.dataTransfer.dropEffect = 'move';
                    e.target.classList.add('drag-over');
                    vnode.context.$emit('dragOver');

                    return false;
                }.bind(this);

                this.handleDragEnter = function (e) {
                    e.target.classList.add('drag-enter');
                    vnode.context.$emit('dragEnter');
                }.bind(this);

                this.handleDragLeave = function (e) {
                    e.target.classList.remove('drag-enter', 'drag-over');
                    vnode.context.$emit('dragLeave');
                }.bind(this);

                this.handleDrag = function () {
                    vnode.context.$emit('drag');
                }.bind(this);

                this.handleDragEnd = function (e) {
                    e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
                    vnode.context.$emit('drag-end');
                }.bind(this);

                this.handleDrop = function (e) {
                    e.preventDefault();
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    vnode.context.$emit('drop');
                    return false;
                }.bind(this);

                el.setAttribute('draggable', 'true');
                el.addEventListener('dragstart', this.handleDragStart, false);
                el.addEventListener('dragenter', this.handleDragEnter, false);
                el.addEventListener('dragover', this.handleDragOver, false);
                el.addEventListener('drag', this.handleDrag, false);
                el.addEventListener('dragleave', this.handleDragLeave, false);
                el.addEventListener('dragend', this.handleDragEnd, false);
                el.addEventListener('drop', this.handleDrop, false);
            },
            unbind: function (el) {
                el.classList.remove('dragging', 'dragover', 'dragenter');
                el.removeAttribute('draggable');
                el.removeEventListener('dragstart', this.handleDragStart);
                el.removeEventListener('dragenter', this.handleDragEnter);
                el.removeEventListener('dragover', this.handleDragOver);
                el.removeEventListener('dragleave', this.handleDragLeave);
                el.removeEventListener('drag', this.handleDrag);
            }
        });
    }
    module.exports = vueDragDrop;
    // if (typeof exports == "object") {
    //     module.exports = vueTouch
    // } else if (typeof define == "function" && define.amd) {
    //     define([], function () { return vueTouch })
    // } else if (window.Vue) {
    //     window.VueTouch = vueTouch
    //     Vue.use(vueTouch)
    // }
})()