<template>
    <div class="bg bg-eight">
        <componentBtn url="www.baidu.com" content=""></componentBtn>
    </div>
</template>
<script>
import componentBtn from '@/components/componentButton'
export default {
    name: 'swiperPageEight',
    data() {
        return {
            flag: true,
            url: 'www.baidu.com'
        }
    },
    computed: {

    },
    components: {
        componentBtn,
    }
}
</script>
<style scoped>
.bg-eight {
    background: url(../../assets/images/bg_eight.png) no-repeat;
    background-size: contain;
}
</style>