<template>
    <main>
        <h1>专属服务</h1>
        <section
            v-for="(content, i) in contentList"
            :key="i"
            :class="['animated delay-500', `section${i}`, animationCallYou(i)]"
        >
            <h6>{{ content.title }}</h6>
            <p>{{ content.detail }}</p>
        </section>
        <div class="logo"></div>
        <div class="img-content" :class="{ rotate: callYou }"></div>
    </main>
</template>
<script>
export default {
    name: 'swiperPageFour',
    props: ['callYou'],
    data() {
        return {
            animationObj: {
                0: 'fadeInDown',
                1: 'fadeInDown',
                2: 'fadeInDown',
                3: 'fadeInDown',
            },
            contentList: [
                { title: '经纪公司', detail: '自主拍摄&上传' },
                { title: '平台', detail: '有偿拼接3D户型' },
                { title: '公司', detail: 'API对接，全网展示' },
                { title: '平台摄影师', detail: '付费拍摄效率翻倍' },
            ]
        }
    },
    // methods: {
    //     animationCallYou(i) {
    //         if (!this.callYou) {
    //             return;
    //         }
    //         return this.animationObj[i];
    //     }
    // },
    computed: {
        animationCallYou(i) {
            let _this = this;
            return (i) => {
                if (_this.callYou) {
                    return _this.animationObj[i];
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
section {
    position: absolute;
    margin-top: 24.5%;
    h6 {
        font-size: 0.28rem;
        font-weight: 600;
        color: rgba(148, 255, 245, 1);
        margin-bottom: 0.16rem;
    }
    p {
        font-size: 0.22rem;
        font-weight: 300;
    }
}
.section0 {
    margin-left: 10%;
}
.section1 {
    right: 10%;
    text-align: right;
}
.section2 {
    margin-top: 82%;
    margin-left: 10%;
}
.section3 {
    margin-top: 82%;
    right: 10%;
    text-align: right;
}
.img-content {
    height: 34%;
    margin-top: 26%;
    background: url(/static/img/dynamic.png) no-repeat center;
    background-size: contain;
}
.logo{
    width: 1.18rem;
    height: 0.57rem;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 666;
    background: url(/static/img/logo2.png) no-repeat center ;
    background-size: contain;

}
.rotate {
    animation: rotating-box 1.5s ease-in-out;
}
@keyframes rotating-box {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>