<template>
    <div class="bg bg-two">
        <div class="title">
            品牌优势
        </div>
        <div class="content content1">
            <div>全适用</div>
            <p>人尽所用，房尽所拍，<br />任一经纪人均可轻松上手拍摄</p>
        </div>
        <div class="content content2">
            <div>全高效</div>
            <p>自动量房，智能拼接，<br />房源标尺及空间信息一目了然</p>
        </div>
        <div class="content content3">
            <div>全智能</div>
            <p>闪电拍摄，一键上传，<br />平均拍摄一套100㎡房源约10分钟</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiperPageTwo',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    // margin-left: 52%;
    right: 0;
    width: 52%;
    & > div {
        font-size: 0.28rem;
        line-height: 0.9rem;
        background: url(/static/img/icon_title.png) no-repeat;
        background-size: contain;
        height: 0.9rem;
        width: 2rem;
        text-align: center;
        font-weight: 600;
    }
    p {
        display: inline-block;
        margin-top: 3%;
        width: 10rem;
        font-size: 0.29rem;
        font-weight: 300;
        color: rgba(165, 211, 255, 1);
        line-height: 0.5rem;
    }
    &.content1 {
        margin-top: 12%;
    }
    &.content2 {
        margin-top: 58%;
    }
    &.content3 {
        margin-top: 104%;
    }
}
</style>