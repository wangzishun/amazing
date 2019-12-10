<template>
    <main>
        <h1>全景拍摄</h1>
        <article
            v-for="(item, i) in content"
            :key="i"
            :class="[
                `animated delay-${i * 1000} article${i}`,
                { 'fadeIn slower': callYou }
            ]"
        >
            <h3>{{ item.title }}</h3>
            <section
                :class="[
                    `animated delay-${(i + 1) * 500} article${i}`,
                    { 'fadeIn slower': callYou }
                ]"
            >
                <ul>
                    <li v-for="fe in item.feature" :key="fe">{{ fe }}</li>
                </ul>
                <img :src="`/static/img/${item.img}.png`" />
                <div class="detail" v-html="item.detail"></div>
            </section>
        </article>
        <footer>
            注：经纪人/公司自行购买专业理光相机设备自主完成拍摄并上传
        </footer>
    </main>
</template>
<script>
export default {
    name: 'swiperPageSix',
    props: ['callYou'],
    data() {
        return {
            content: [
                {
                    title: '理光相机型号',
                    feature: ['Theta Z1', 'Theta SC', 'Theta V'],
                    img: 'camera',
                    detail: `
                            <h6>【理光相机支持型号】</h6>
                            <p>&emsp;Theta Z1、Theta SC、Theta V</p>
                            <h6>【相机建议购买地址】</h6>
                            <p>&emsp;打开京东&gt;搜索店铺“理光映像旗舰店”</p>
                            <p>&emsp;搜索“Theta SC”&gt;颜色自选</p>
                            `
                },
                {
                    title: '三脚架设备',
                    feature: ['希迅三脚架', '含黄色底座', '搭配相机使用'],
                    img: 'tripod',
                    detail: `
                            <h6>【三脚架支持类型】</h6>
                            <p>希迅三脚架&emsp;</p>
                            <h6>【支架建议购买地址】</h6>
                            <p>打开京东&gt;搜索店铺“亦我数码”&emsp;</p>
                            <p>选择“三脚架”&emsp;</p>
                            `
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
article {
    height: 35%;

    h3 {
        // position: absolute;
        width: 30%;
        height: 0.65rem;
        line-height: 0.9rem;

        font-size: 0.28rem;
        font-weight: 600;
    }
    section {
        height: 100%;
        margin-top: 0.39rem;
        display: flex;
        ul {
            // width: 1.78rem;
            height: 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            li {
                margin-bottom: 0.54rem;
                font-size: 0.2rem;
                font-weight: 400;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 0.1rem;
                    height: 0.1rem;
                    margin-right: 0.15rem;
                    transform: rotate(-45deg);
                    background: #94fff5;
                }
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 2.5rem;
            >>> h6 {
                margin-top: 0.49rem;
                font-size: 0.24rem;
            }
            >>> p {
                margin-top: 0.27rem;
                font-size: 0.2rem;
                color: #a5d3ff;
            }
        }
    }
}
.article0 {
    h3 {
        margin-left: 0.65rem;
    }
    ul {
        margin: 0rem 0.4rem 0rem 0.8rem;
    }
    img {
        // position: absolute;
        width: 0.95rem;
        height: 3.04rem;
        margin-right: 0.5rem;
    }
}
.article1 {
    h3 {
        margin-left: 5.22rem;
    }
    section {
        flex-direction: row-reverse;
        ul {
            margin: 0rem 1.11rem 0rem 0.07rem;
        }
    }
    img {
        // position: absolute;
        width: 1rem;
        height: 3.01rem;
        margin-left: 0.52rem;
    }
    .detail {
        text-align: end;
    }
}

footer {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 0.22rem;
    font-weight: 400;
}
</style>