<template>
    <div class="bg bg-six">
        <div class="title">
            全景拍摄
        </div>
        <div class="content-title title1">理光相机型号</div>
        <div class="feature feature1">
            <span>Theta Z1</span>
            <span>Theta SC</span>
            <span>Theta V</span>
        </div>
        <div class="detail detail1">
            <p>【理光相机支持型号】</p>
            <span>Theta Z1、Theta SC、Theta V</span>
            <p>【相机建议购买地址】</p>
            <span>打开京东&gt;搜索店铺“理光映像旗舰店”</span>
            <span>搜索“Theta SC”&gt;颜色自选</span>
        </div>
        <div class="content-title title2">三脚架设备</div>
        <div class="feature feature2">
            <span>希迅三脚架</span>
            <span>含黄色底座</span>
            <span>搭配相机使用</span>
        </div>
        <div class="detail detail2">
            <p>【三脚架支持类型】</p>
            <span>希迅三脚架</span>
            <p>【支架建议购买地址】</p>
            <span>打开京东&gt;搜索店铺“亦我数码”</span>
            <span>选择“三脚架”</span>
        </div>
        <span class="note"
            >注：经纪人/公司自行购买专业理光相机设备自主完成拍摄并上传</span
        >
    </div>
</template>
<script>
export default {
    name: 'swiperPageSix',
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
.content-title {
    position: absolute;
    font-size: 0.28rem;
    width: 40%;
    text-align: center;
    &.title1 {
        margin-top: 4%;
    }
    &.title2 {
        margin-top: 66%;
        right: 0;
    }
}
.detail {
    position: absolute;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
        display: block;
    }
    p {
        font-size: 0.24rem;
        margin-top: 5%;
    }
    span {
        font-size: 0.2rem;
    }
    &.detail1 {
        width: 50%;
        right: 0%;
        margin-top: 15%;
    }
    &.detail2 {
        width: 45%;
        margin-top: 78%;
        margin-top: 78%;
        text-align: right;
    }
}
.feature {
    position: absolute;
    width: 50%;
    span {
        display: block;
        font-size: 0.2rem;
        margin-bottom: 12.5%;
        &::before {
            content: "";
            display: inline-block;
            width: 0.1rem;
            height: 0.1rem;
            margin: 0.1rem 0 0 0.1rem;
            transform-origin: 0 100%;
            transform: rotate(-45deg);
            background: #94fff5;
        }
    }
    &.feature1 {
        margin-top: 21%;
        margin-left: 10%;
    }
    &.feature2 {
        margin-left: 67%;
        margin-top: 83.5%;
    }
}
.note {
    position: absolute;
    margin-top: 125%;
    width: 100%;
    text-align: center;
}

p {
    font-size: 20px;
}
</style>