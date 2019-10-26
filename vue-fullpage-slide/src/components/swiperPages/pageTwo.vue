<template>
    <main>
        <h1>品牌优势</h1>
        <section
            v-for="(el, i) in contentList"
            :key="i"
            :class="[`animated delay-500 section${i}`, { fadeInDown: callYou }]"
        >
            <h3 v-html="el.title"></h3>
            <p v-html="el.detail1"></p>
        </section>
    </main>
</template>

<script>
export default {
    name: 'swiperPageTwo',
    props: ['callYou'],
    data() {
        return {
            contentList: [
                { title: '全适用', detail1: '人尽所用，房尽所拍，<br/>任一经纪人均可轻松上手拍摄' },
                { title: '全高效', detail1: '自动量房，智能拼接，<br />房源标尺及空间信息一目了然' },
                { title: '全智能', detail1: '闪电拍摄，一键上传，<br />平均拍摄一套100㎡房源10分钟' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    position: absolute;
    right: 0;
    width: 54%;
    h3 {
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
        line-height: 0.43rem;
    }
}
.section0 {
    margin-top: 10%;
}
.section1 {
    margin-top: 56%;
}
.section2 {
    margin-top: 102%;
}
</style>