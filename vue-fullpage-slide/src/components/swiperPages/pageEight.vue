<template>
    <div class="bg bg-eight">
        <div class="title">
            合作伙伴
        </div>
        <div class="content">
            <p>点击下方“免费报名”，即可享受体验全景临感的机会</p>
            <p>帮您增加房源曝光量，精准获客，提升看房效率</p>
        </div>
        <componentBtn
            url=""
            content="免费报名"
            :call="addAnimation"
            :style="btnStyle"
        ></componentBtn>
    </div>
</template>
<script>
import componentBtn from '@/components/componentButton'
export default {
    name: 'swiperPageEight',
    data() {
        return {
            flag: true,
            btnStyle: {
                top: '80%',
                backgroundColor: 'rgba(69, 135, 255, 0.8)',
                borderColor: 'rgba(69, 135, 255, 0.8)',
                boxShadow: '0rem 0.05rem 0.3rem rgba(69,135,255,1)',
            }
        }
    },
    computed: {
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 7) {
                return true;
            }
            return false;
        }
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
    font-size: 0.22rem;
    font-weight: 300;
    p {
        margin-bottom: 0.19rem;
    }
}
</style>