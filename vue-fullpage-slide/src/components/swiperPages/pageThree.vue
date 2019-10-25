<template>
    <div class="bg bg-three">
        <div class="title">
            全景效果
        </div>
        <div
            class="number-container"
            v-for="(number, i) in numberList"
            :key="`container${i}`"
            :class="`container${i}`"
        >
            <div
                class="number"
                v-for="(item, j) in number"
                :key="`number${j}`"
                :class="`number${j}`"
            >
                <div>
                    <img v-if="item.showImg" src="/static/img/rise.png" />
                    <numberRun
                        :value="item.num"
                        :sign="item.sign"
                        :run="addAnimation"
                    ></numberRun>
                </div>
                <span>{{ item.detail }}</span>
            </div>
        </div>
        <div v-for="el in 4" :key="el" class="" :class="[`ripple${el}`]"></div>
    </div>
</template>
<script>
import numberRun from "@/components/componentNumberRun";

export default {
    name: 'swiperPageThree',
    data() {
        return {
            numberList: [
                [{ num: 350, detail: '房均点击量', sign: '%', showImg: true }, { num: 130, detail: '房均停留时长', sign: '%', showImg: true }, { num: 40, detail: '用户返回率', sign: '%', showImg: true }],
                [{ num: 500, detail: '覆盖城市', sign: '+', showImg: false }, { num: 34000, detail: '覆盖经纪门店', sign: '+', showImg: false },],
                [{ num: 10000, detail: '合作经济公司', sign: '+', showImg: false }, { num: 400000, detail: '服务经纪人量', sign: '+', showImg: false }],
            ]
        }
    },
    computed: {
        addAnimation() {
            if (this.$store.state.swiperPageIndex == 2) {
                return true;
            }
            return false;
        }
    },
    components: {
        numberRun,
    }
}
</script>
<style lang="scss" scoped>
.number-container {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    .number {
        display: inline-block;
        & > div {
            margin-bottom: 5%;
            img {
                width: 0.31rem;
                height: 0.33rem;
            }
            span {
                font-family: Avenir;
                font-weight: 900;
                font-size: 0.44rem;
            }
        }

        span {
            font-weight: 300;
            font-size: 0.22rem;
            width: 100%;
        }
    }

    &.container0 {
        height: 30%;

        .number {
            width: 30%;
            text-align: center;
        }
    }
    &.container1 {
        .number {
            width: 45%;
        }
        .number0 {
            margin-top: 5%;
        }
        .number1 {
            margin-top: 20%;
        }
    }
    &.container2 {
        justify-content: flex-end;
        .number {
            height: 20%;
        }
        .number0 {
            width: 48%;
            margin-top: -15%;
        }
        .number1 {
            width: 32%;
        }
    }
}

.ripple1,
.ripple2,
.ripple3,
.ripple4 {
    background-color: #94fff5;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    position: absolute;
    animation: ripple 2s linear infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        animation: ripple 2s linear infinite 0.5s;
    }

    &::after {
        animation: ripple 2s linear infinite 1s;
    }
}
.ripple1 {
    margin-top: -30%;
    margin-left: 6%;
}
.ripple2 {
    margin-top: -43%;
    margin-left: 33%;
}
.ripple3 {
    margin-top: -27%;
    margin-left: 59%;
}
.ripple4 {
    margin-top: -42%;
    margin-left: 87%;
}
@keyframes ripple {
    0% {
        box-shadow: 0 0 0 0.2rem rgba(148, 255, 245, 0.2);
    }

    100% {
        box-shadow: 0 0 0 1rem rgba(148, 255, 245, 0);
    }
}
</style>