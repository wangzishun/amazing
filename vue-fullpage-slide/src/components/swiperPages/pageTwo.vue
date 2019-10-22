<template>
    <div class="bg bg-two">
        <div class="title h-center">
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
.bg-two {
    background: url(../../assets/images/bg_two.png) no-repeat center;
    background-size: contain;
    background-color: darkslategray;
}
.content {
    position: absolute;
    margin-left: 50%;
    width: 5rem;
    height: 5rem;
    background-color: rgba(238, 130, 238, 0.185);
    p {
        font-size: 0.28rem;
        padding-left: 0.4rem;
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
}
.content1 {
    position: absolute;
    top: 32%;
}
.content2 {
    position: absolute;
    top: 53%;
}
.content3 {
    position: absolute;
    top: 75%;
}
.brackets {
    // margin: 50px auto;
    // position: relative;
    // width: 400px;
    // height: 400px;
    // background: white;
    // box-sizing: border-box;
    // border: 53.33333px solid #308ac9;
    /* remember box-sizing was border-box */
}
// .brackets:after,
.brackets:before {
    content: "";
    display: block;
    position: absolute;
    // box-sizing: border-box;
}
.brackets:before {
    width: 240px;
    height: 240px;
    margin: 26.66667px;
    border: 53.33333px solid #343432;
    /* remember box-sizing was border-box */
}
.brackets:after {
    width: 26.66667px;
    height: 240px;
    background: white;
    margin: 26.66667px 133.33333px;
}
</style>