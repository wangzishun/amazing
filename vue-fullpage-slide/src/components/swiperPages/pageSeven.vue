<template>
    <main>
        <h1>拍摄流程</h1>
        <article
            v-for="(content, i) in contentList"
            :key="i"
            :class="[
                `animated article${i} delay-${i * 500}`,
                animationCallYou(i)
            ]"
        >
            <h6>{{ content.title }}</h6>
            <p>{{ content.detail }}</p>
        </article>
        <componentBtn
            url="#"
            content="查看拍摄教程"
            :callYou="callYou"
        ></componentBtn>
    </main>
</template>
<script>
import componentBtn from "@/components/componentButton";
export default {
    name: "swiperPageSeven",
    props: ['callYou'],
    data() {
        return {
            contentList: [
                { title: '移动经纪人app', detail: '登陆后进入发现 > 全景管理' },
                { title: '拍摄全景', detail: '上传至后台并且关联房源' },
                { title: '前台展示', detail: '【安居客&58】展示3D全景房源' },
                { title: '付费3D拼接', detail: '购买拼接券进行3D户型拼接' },
            ]
        };
    },
    methods: {
        animationCallYou(i) {
            if (this.callYou) {
                return (i == 0 || i == 3) ? 'fadeInLeftBig' : 'fadeInRightBig';
            }
        }
    },
    components: {
        componentBtn
    }
};
</script>
<style lang="scss" scoped>
article {
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
.article0 {
    margin-top: 32%;
    left: 0;
    width: 48%;
}
.article1 {
    margin-top: 32%;
    right: 0;
}
.article2 {
    margin-top: 90%;
    right: 0;
}
.article3 {
    margin-top: 90%;
    left: 0;
}
</style>