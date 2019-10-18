<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        // flexible(window, document) {
        //     let docEl = document.documentElement
        //     let dpr = window.devicePixelRatio || 1

        //     // adjust body font size
        //     function setBodyFontSize() {
        //         if (document.body) {
        //             document.body.style.fontSize = (12 * dpr) + 'px'
        //         }
        //         else {
        //             document.addEventListener('DOMContentLoaded', setBodyFontSize)
        //         }
        //     }
        //     setBodyFontSize();

        //     // set 1rem = viewWidth / 10
        //     function setRemUnit() {
        //         let visibleWidth = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        //         let rem = visibleWidth / 10
        //         docEl.style.fontSize = rem + 'px'
        //     }

        //     setRemUnit()

        //     // reset rem unit on page resize
        //     window.addEventListener('resize', setRemUnit)
        //     window.addEventListener('pageshow', function (e) {
        //         if (e.persisted) {
        //             setRemUnit()
        //         }
        //     })

        //     // detect 0.5px supports
        //     if (dpr >= 2) {
        //         let fakeBody = document.createElement('body')
        //         let testElement = document.createElement('div')
        //         testElement.style.border = '.5px solid transparent'
        //         fakeBody.appendChild(testElement)
        //         docEl.appendChild(fakeBody)
        //         if (testElement.offsetHeight === 1) {
        //             docEl.classList.add('hairlines')
        //         }
        //         docEl.removeChild(fakeBody)
        //     }
        // }
    },
    mounted() {
        // this.flexible(document, window);
    }
}
</script>

<style>
body,
html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
}
</style>
<style lang="scss" scoped>
#app {
    height: 100%;
}
.icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./assets/images/music.png) no-repeat;
    background-size: 100%;
    margin: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
}
</style>
