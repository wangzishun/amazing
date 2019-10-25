<template>
    <div class="bg bg-two">
        <div class="title">
            品牌优势
        </div>
        <div
            v-for="(el, i) in contentList"
            :key="i"
            class="content animated"
            :class="[`content${i}`, addAnimation ? 'fadeInDown' : '']"
        >
            <div v-html="el.title"></div>
            <p v-html="el.detail1"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiperPageTwo',
    data() {
        return {
            contentList: [
                { title: '全适用', detail1: '人尽所用，房尽所拍，<br/>任一经纪人均可轻松上手拍摄' },
                { title: '全高效', detail1: '自动量房，智能拼接，<br />房源标尺及空间信息一目了然' },
                { title: '全智能', detail1: '闪电拍摄，一键上传，<br />平均拍摄一套100㎡房源约10分钟' },
            ]
        }
    },
    computed: {
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 1) {
                return true;
            }
            return false;
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    margin-left: 48%;
    width: 50%;
    & > div {
        font-size: 0.28rem;
        line-height: 0.9rem;
        background: url(/static/img/icon_title.png) no-repeat;
        background-size: contain;
        height: 0.9rem;
        width: 2rem;
        text-align: center;
        font-weight: 600;
        margin-bottom: 4%;
    }
    p {
        display: inline-block;
        font-size: 0.29rem;
        font-weight: 300;
        color: #a5d3ff;
        line-height: 0.4rem;
    }
    &.content0 {
        margin-top: 10%;
    }
    &.content1 {
        margin-top: 56%;
    }
    &.content2 {
        margin-top: 102%;
    }
}
</style>