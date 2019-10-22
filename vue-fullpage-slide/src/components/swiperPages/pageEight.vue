<template>
    <div class="bg bg-eight">
        <div class="title h-center">
            合作伙伴
        </div>
        <div class="content h-center">
            <span>点击下方“免费报名”，即可享受体验全景临感的机会</span>
            <span>帮您增加房源曝光量，精准获客，提升看房效率</span>
        </div>
        <componentBtn url="" content="免费报名"></componentBtn>
    </div>
</template>
<script>
import componentBtn from '@/components/componentButton'
export default {
    name: 'swiperPageEight',
    data() {
        return {
            flag: true,
        }
    },
    computed: {

    },
    components: {
        componentBtn,
    }
}
</script>
<style lang="scss" scoped>
.bg-eight {

    background: url(../../assets/images/bg_eight.png) no-repeat center;
    background-size: contain;
    background-color: darkslategray;
    .content {
        position: absolute;
        top: 60%;
        width: 7rem;
        span {
            display: block;
            text-align: center;
        }
    }
}
</style>