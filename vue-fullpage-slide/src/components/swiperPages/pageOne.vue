<template>
    <div class="swiper-page-one">
        <div class="bg bg-one"></div>
    </div>
</template>
<script>
export default {
    name: 'swiperPageOne',
    data() {
        return {
            flag: true
        }
    },
    computed: {

    }
}
</script>
<style scoped>
.bg-one {
    background: url(../../assets/images/bg_one.png) no-repeat;
    background-size: contain;
}
.swiper-page-one{
    position: relative;
    background-color: brown;
    width: 100%;
    height: 100%;
}
</style>