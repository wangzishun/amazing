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
    width: 262px;
    height: 72px;
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 35px;
    text-align: center;
}
</style>