<template>
    <div class="bg bg-seven">
        <div class="title h-center">
            拍摄流程
        </div>
        <div class="content-container h-center">
            <div class="content content1">
                <p>移动经纪人app</p>
                <div>登陆后进入发现&lt;全景管理</div>
            </div>
            <div class="content content2">
                <p>拍摄全景</p>
                <div>上传至后台并且关联房源</div>
            </div>
            <div class="content content3">
                <p>付费3D拼接</p>
                <div>购买拼接券进行3D户型拼接</div>
            </div>
            <div class="content content4">
                <p>前台展示</p>
                <div>【安居客&58】展示3D全景房源</div>
            </div>
        </div>
        <componentBtn url="#" content="查看拍摄教程"></componentBtn>
    </div>
</template>
<script>
import componentBtn from '@/components/componentButton'
export default {
    name: 'swiperPageSeven',
    data() {
        return {
            flag: true
        }
    },
    computed: {

    },
    components: {
        componentBtn,
    }
}
</script>
<style lang="scss" scoped>
.bg-seven {

    background: url(../../assets/images/bg_seven.png) no-repeat center;
    background-size: contain;
    background-color: darkslategray;
    .content-container {
        top: 38%;
        height: 38%;
        width: 100%;

        .content {
            position: absolute;
            line-height: 0.44rem;
            p {
                text-align: center;
                font-size: 0.26rem;
            }
            div{
                text-align: center;
                font-size: 0.22rem;
            }
        }
        .content1 {
            width: 48%;
        }
        .content2 {
            left: 61%;
        }
        .content3 {
            left: 4%;
            top: 85%;
        }
        .content4 {
            top: 85%;
            left: 56%;
        }
        img {
            position: absolute;
            width: 200px;
            height: 200px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>