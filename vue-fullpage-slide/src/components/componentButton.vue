<template>
    <a :href="url">{{ content }}</a>
</template>

<script>
export default {
    props: ['url', 'content'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
a {
    display: inline-block;
    width: 2.62rem;
    height: 0.72rem;
    border: 0.02rem solid rgba(255, 255, 255, 1);
    border-radius: 0.35rem;
    text-align: center;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);

}
</style>