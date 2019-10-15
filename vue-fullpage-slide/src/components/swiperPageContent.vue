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
<style>
.bg-one {
    
    background: url(../assets/images/bg_one.png) no-repeat;
    background-size: 6rem 12.8rem;
    /* background-size: 80% 80%; */

}
</style>