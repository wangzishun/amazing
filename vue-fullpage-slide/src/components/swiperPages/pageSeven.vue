<template>
    <div class="bg bg-seven">
        <div class="title">拍摄流程</div>
        <div
            v-for="(el, i) in contentList"
            :key="i"
            class="animated"
            :class="[
                `content${i}`,
                `delay-${i}s`,
                addAnimation
                    ? i == 0 || i == 3
                        ? 'slideInLeft'
                        : 'slideInRight'
                    : ''
            ]"
        >
            <h6>{{ el.title }}</h6>
            <p>{{ el.detail }}</p>
        </div>
        <componentBtn
            url="#"
            content="查看拍摄教程"
            :call="flag"
        ></componentBtn>
    </div>
</template>
<script>
import componentBtn from "@/components/componentButton";
export default {
    name: "swiperPageSeven",
    data() {
        return {
            flag: true,
            contentList: [
                { title: '移动经纪人app', detail: '登陆后进入发现 > 全景管理' },
                { title: '拍摄全景', detail: '上传至后台并且关联房源' },
                { title: '前台展示', detail: '【安居客&58】展示3D全景房源' },
                { title: '付费3D拼接', detail: '购买拼接券进行3D户型拼接' },
            ]
        };
    },
    computed: {
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 6) {
                this.flag = true;
                return true;
            }
            this.flag = false;
            return false;
        }
    },
    components: {
        componentBtn
    }
};
</script>
<style lang="scss" scoped>
.content0,
.content1,
.content2,
.content3 {
    position: absolute;
    width: 46%;
    h6 {
        text-align: center;
        font-size: 0.26rem;
        font-weight: 600;
        margin-bottom: 0.23rem;
    }
    p {
        text-align: center;
        font-size: 0.22rem;
        font-weight: 300;
    }
}
.content0 {
    margin-top: 32%;
    left: 0;
    width: 48%;
}
.content1 {
    margin-top: 32%;
    right: 0;
}
.content2 {
    margin-top: 90%;
    right: 0;
}
.content3 {
    margin-top: 90%;
    left: 0;
}
</style>