<template>
    <div class="bg bg-eight">
        <div class="title">
            合作伙伴
        </div>
        <div class="content">
            <p>点击下方“免费报名”，即可享受体验全景临感的机会</p>
            <p>帮您增加房源曝光量，精准获客，提升看房效率</p>
        </div>
        <componentBtn url="" content="免费报名" style="top:80%;"></componentBtn>
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
.content {
    position: absolute;
    top: 65%;
    width: 100%;
    text-align: center;
}
</style>