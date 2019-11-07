; (function () {
    let faker;
    let vueDAD = {}
    vueDAD.install = function (Vue) {
        Vue.directive('dragDrop', {
            bind: function (el, binding, vnode) {
                faker.handleDragStart = function (e) {
                    e.target.classList.add('dragging');
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text', '*');
                    vnode.context.$emit('drag-start');
                }.bind(faker);

                faker.handleDragOver = function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    e.dataTransfer.dropEffect = 'move';
                    e.target.classList.add('drag-over');
                    vnode.context.$emit('drag-over');

                    return false;
                }.bind(faker);

                faker.handleDragEnter = function (e) {
                    vnode.context.$emit('drag-enter');
                    e.target.classList.add('drag-enter');
                }.bind(faker);

                faker.handleDragLeave = function (e) {
                    vnode.context.$emit('drag-leave');
                    e.target.classList.remove('drag-enter', 'drag-over');
                }.bind(faker);

                faker.handleDrag = function () {
                    vnode.context.$emit('drag');
                }.bind(faker);

                faker.handleDragEnd = function (e) {
                    e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
                    vnode.context.$emit('drag-end');
                }.bind(faker);

                faker.handleDrop = function (e) {
                    e.preventDefault();
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    vnode.context.$emit('drop');
                    return false;
                }.bind(faker);

                el.setAttribute('draggable', 'true');
                el.addEventListener('dragstart', faker.handleDragStart, false);
                el.addEventListener('dragenter', faker.handleDragEnter, false);
                el.addEventListener('dragover', faker.handleDragOver, false);
                el.addEventListener('drag', faker.handleDrag, false);
                el.addEventListener('dragleave', faker.handleDragLeave, false);
                el.addEventListener('dragend', faker.handleDragEnd, false);
                el.addEventListener('drop', faker.handleDrop, false);
            },
            unbind: function (el) {
                el.classList.remove('dragging', 'dragover', 'dragenter');
                el.removeAttribute('draggable');
                el.removeEventListener('dragstart', faker.handleDragStart);
                el.removeEventListener('dragenter', faker.handleDragEnter);
                el.removeEventListener('dragover', faker.handleDragOver);
                el.removeEventListener('dragleave', faker.handleDragLeave);
                el.removeEventListener('drag', faker.handleDrag);
            }
        });
    }
    module.exports = vueDAD;
    // if (typeof exports == "object") {
    //     module.exports = vueTouch
    // } else if (typeof define == "function" && define.amd) {
    //     define([], function () { return vueTouch })
    // } else if (window.Vue) {
    //     window.VueTouch = vueTouch
    //     Vue.use(vueTouch)
    // }
})()