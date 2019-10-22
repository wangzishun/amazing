<template>
    <div class="bg bg-six">
        <div class="title h-center">
            全景拍摄
        </div>
        <div class="content-container1">
            <div class="content-title">理光相机型号</div>
            <div class="feature">
                <span>Theta Z1</span>
                <span>Theta SC</span>
                <span>Theta V</span>
            </div>
            <div class="detail">
                <p>【理光相机支持型号】</p>
                <span>Theta Z1、Theta SC、Theta V</span>
                <p>相机建议购买地址</p>
                <span>打开京东&gt;搜索店铺“理光映像旗舰店”</span>
                <span>搜索“Theta SC”&gt;颜色自选</span>
            </div>
        </div>
        <div class="content-container2">
            <div class="content-title"></div>
            <div class="feature">
                <span>希迅三脚架</span>
                <span>含黄色底座</span>
                <span>搭配相机使用</span>
            </div>
            <div class="detail">
                <p>【三脚架支持类型】</p>
                <span>希迅三脚架</span>
                <p>【支架建议购买地址】</p>
                <span>打开京东&gt;搜索店铺“亦我数码”</span>
                <span>选择“三脚架”</span>
            </div>
        </div>
        <span>注：经纪人/公司自行购买专业理光相机设备自主完成拍摄并上传</span>
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
.bg-six {
    background: url(../../assets/images/bg_six.png) no-repeat center;
    background-size: contain;
    background-color: darkslategray;
    .content-container1 {
        position: absolute;
        top: 20%;
        width: 7rem;
        .feature {
            position: absolute;
            span {
                display: block;
            }
        }
        .detail {
            position: absolute;
            left: 50%;
            span {
                display: block;
            }
        }
    }
    .content-container2 {
        position: absolute;
        top: 50%;
        width: 7rem;
        .detail {
            position: absolute;
            span {
                display: block;
            }
        }
        .feature {
            position: absolute;
            left: 50%;
            span {
                display: block;
            }
        }
    }
    & > span {
        position: absolute;
        top: 80%;
    }
    p {
        font-size: 20px;
    }
}
</style>