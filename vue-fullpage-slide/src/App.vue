<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {

    },
    beforeCreate() {
        // window.resize = {};

        // var timer = null;
        // var rem = 12;
        // var doc = window.document;
        // var docEl = doc.documentElement;

        // /**
        //  * 刷新页面REM值
        //  */
        // function refreshRem() {
        //     var width = docEl.getBoundingClientRect().width;
        //     width = width > 768 ? 640 : width;
        //     rem = width / 7.5;
        //     docEl.style.fontSize = rem + 'px';
        // }

        // /**
        //  * 页面缩放或重载时刷新REM
        //  */
        // window.addEventListener('resize', function () {
        //     clearTimeout(timer);
        //     timer = setTimeout(refreshRem, 300);
        // }, false);
        // window.addEventListener('pageshow', function (e) {
        //     if (e.persisted) {
        //         clearTimeout(timer);
        //         timer = setTimeout(refreshRem, 300);
        //     }
        // }, false);

        // refreshRem();
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
