<template>
    <a :href="url" class="animated" :class="{ 'wobble': callYou }">
        {{ content }}
        <div class="btn-bg"></div>
    </a>
</template>

<script>
export default {
    props: ['url', 'content', 'callYou'],
}
</script>

<style lang="scss" scoped>
a {
    display: inline-block;
    width: 2.62rem;
    height: 0.72rem;
    line-height: 0.72rem;
    border: 0.02rem solid rgba(255, 255, 255, 1);
    border-radius: 0.35rem;
    text-align: center;
    position: absolute;
    top: 85%;
    left: 50%;
    margin-left: -1.31rem;
    font-size: 0.26rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    z-index: 800;
    .btn-bg {
        display: inline-block;
        width: 0.3rem;
        height: 0.15rem;
        background: url(/static/img/button.png) no-repeat;
        background-size: contain;
    }
}
</style>