<template>
    <div class="bg bg-two">
        <div class="title">
            品牌优势
        </div>
        <div class="content content1">
            <p>全适用</p>
            <span>人尽所用，房尽所拍，<br />任一经纪人均可轻松上手拍摄</span>
        </div>
        <div class="content content2">
            <p>全高效</p>
            <span>自动量房，智能拼接，<br />房源标尺及空间信息一目了然</span>
        </div>
        <div class="content content3">
            <p>全智能</p>
            <span>闪电拍摄，一键上传，<br />平均拍摄一套100㎡房源约10分钟</span>
        </div>
        <!-- <div class="brackets">asdfasdf</div> -->
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
    margin-left: 50%;
    // margin-bottom: 20%;
    // width: 5rem;
    // height: 5rem;
    // background-color: rgba(238, 130, 238, 0.185);
    p {
        font-size: 0.28rem;
        line-height: 0.38rem;
    }
    span {
        display: inline-block;
        font-size: 0.29rem;
        font-family: PingFang SC;
        font-weight: 300;
        color: rgba(165, 211, 255, 1);
        line-height: 0.5rem;
        overflow: hidden;
    }
    &.content1 {
        // position: absolute;
        margin-top: -16%;
    }
    &.content2 {
        // position: absolute;
        margin-top: 29.2%;
    }
    &.content3 {
        // position: absolute;
        margin-top: 75.5%;
    }
}
</style>