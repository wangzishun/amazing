<template>
    <div class="swiper-page-three">
        <img class="delay-1s" :class="{animated:flag, fadeIn:flag, slower :flag}" src="@/assets/images/picture3.jpg" alt="" srcset="">

    </div>
</template>
<script>
export default {
    name: 'swiperPageThree',
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