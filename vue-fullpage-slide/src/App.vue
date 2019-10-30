<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
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
</style>
