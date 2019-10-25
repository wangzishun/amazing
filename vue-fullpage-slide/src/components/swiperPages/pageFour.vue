<template>
    <div class="bg bg-four">
        <div class="title">
            专属服务
        </div>
        <div
            v-for="(el, i) in contentList"
            :key="i"
            class="content animated"
            :class="[`content${i}`, flag ? 'bounceInDown' : '']"
        >
            <p>{{ el.title }}</p>
            <span>{{ el.detail }}</span>
        </div>
        <div
            class="img-content"
            :class="{ rotate: addAnimation }"
        ></div>
    </div>
</template>
<script>
export default {
    name: 'swiperPageFour',
    data() {
        return {
            flag: false,
            contentList: [
                { title: '经纪公司', detail: '自主拍摄&上传' },
                { title: '平台', detail: '有偿拼接3D户型' },
                { title: '公司', detail: 'API对接，全网展示' },
                { title: '平台摄影师', detail: '付费拍摄效率翻倍' },
            ]
        }
    },
    computed: {
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 3) {
                this.flag = true;
                return true;
            }
            this.flag = false;
            return false;
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    position: absolute;
    width: 100%;
    p {
        font-size: 0.28rem;
        font-weight: 600;
        color: rgba(148, 255, 245, 1);
        margin-bottom: 0.16rem;
    }
    span {
        font-size: 0.22rem;
        font-weight: 300;
    }
    &.content0 {
        margin-top: 22%;
        margin-left: 10%;
    }
    &.content1 {
        margin-top: 22%;
        right: 10%;
        text-align: right;
    }
    &.content2 {
        margin-top: 81%;
        margin-left: 10%;
    }
    &.content3 {
        margin-top: 81%;
        right: 10%;
        text-align: right;
    }
}
.img-content {
    height: 34%;
    margin-top: 26%;
    background: url(/static/img/dynamic.png) no-repeat center;
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