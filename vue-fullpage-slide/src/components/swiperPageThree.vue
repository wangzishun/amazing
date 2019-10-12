<template>
    <swiper-slide>
        <img class="delay-1s" :class="{animated:flag, fadeIn:flag, slower :flag}" src="@/assets/images/picture3.jpg" alt="" srcset="">
    </swiper-slide>
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
<style></style>