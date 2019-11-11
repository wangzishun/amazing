<template>
    <article>
        <div
            v-for="(m, key) in msg"
            :key="key"
            :class="['test', `box-${key}`]"
            v-dragDrop
            @dragover.prevent
            @dragstart="handleDragStart($event, m)"
            @dragenter="handleDragEnter($event, m)"
            @drop.prevent="handleDrop($event, m)"
        >
            {{ m }}
        </div>
        <hr />
        <br />
        <div v-for="(m, key) in msg" :key="m" :class="['test', `b-${key}`]">
            {{ m }}
        </div>
    </article>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: [
                '11111111111',
                '22222222222',
                '33333333333',
                '44444444444',
                '55555555555',
                '66666666666',
                '77777777777',
                '88888888888',
            ],
        }

    },
    methods: {

        handleDragStart(e, m) {
            console.log('handleDragStart', e, m);
        },
        handleDragEnter(e, m) {
            console.log('test', e, m);
        },
        handleDrop(e, m) {
            console.log('Drop', e, m);
        },
    },
    directives: {
        dragDrop: {
            bind: function (el) {
                el.setAttribute('draggable', 'true');

                el.addEventListener('dragstart', (e) => {
                    e.target.classList.add('dragging');
                    e.dataTransfer.setData('text', '*');
                }, false);

                el.addEventListener('dragenter', (e) => {
                    e.target.classList.add('drag-enter');
                }, false);

                el.addEventListener('dragleave', (e) => {
                    e.target.classList.remove('drag-enter');
                }, false);

                el.addEventListener('dragend', (e) => {
                    e.target.classList.remove('dragging');
                }, false);

                el.addEventListener('drop', (e) => {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    e.target.classList.remove('drag-enter');
                }, false);

                if (navigator.userAgent.indexOf("MSIE 9.0") != -1) {
                    el.addEventListener('mousedown', (e) => {
                        e.target.dragDrop();
                    }, false)
                    if (!("classList" in document.documentElement)) {
                        Object.defineProperty(HTMLElement.prototype, 'classList', {
                            get: function () {
                                let self = this;
                                function update(fn) {
                                    return value => {
                                        let classes = self.className.split(/\s+/g),
                                            index = classes.indexOf(value);

                                        fn(classes, index, value);
                                        self.className = classes.join(" ");
                                    }
                                }
                                return {
                                    add: update((classes, index, value) => {
                                        if (!~index) classes.push(value);
                                    }),
                                    remove: update((classes, index) => {
                                        if (~index) classes.splice(index, 1);
                                    }),
                                };
                            }
                        });
                    }
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
    width: 100px;
    height: 100px;
    background: brown;
    border: double burlywood 2px;
    float: left;
    margin-left: 20px;
}
</style>
