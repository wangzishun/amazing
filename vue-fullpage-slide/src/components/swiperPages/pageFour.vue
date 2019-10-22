<template>
    <div class="bg bg-four">
        <div class="title h-center">
            专属服务
        </div>
        <div class="content content1">
            <p>经纪公司</p>
            <span>自主拍摄&上传</span>
        </div>
        <div class="content content2">
            <p>平台</p>
            <span>有偿拼接3D户型</span>
        </div>
        <div class="content content3">
            <p>公司</p>
            <span>API对接，全网展示</span>
        </div>
        <div class="content content4">
            <p>平台摄影师</p>
            <span>付费拍摄效率翻倍</span>
        </div>
        <img src="../../assets/images/dynamic.png" alt="" />
    </div>
</template>
<script>
export default {
    name: 'swiperPageFour',
    data() {
        return {
            flag: true
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
.content {
    position: absolute;
    width: 100%;
    p {
        font-size: 0.28rem;
        margin-bottom: 0.16rem;
    }
    span {
        font-size: 0.22rem;
    }
}
.content1 {
    top: 33%;
    left: 10%;
}
.content2 {
    top: 33%;
    left: 70%;
}
.content3 {
    top: 63%;
    left: 10%;
}
.content4 {
    top: 63%;
    left: 70%;
}

img {
    position: absolute;
    height: 31.5%;
    left: 50%;
    top: 35.5%;
    transform: translate(-50%, 0);
}
</style>