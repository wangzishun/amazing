<template>
    <div class="bg bg-three">
        <div class="title">
            全景效果
        </div>
        <div
            class="number-container"
            v-for="(number, i) in numberList"
            :key="i"
            :class="`containerer${i}`"
        >
            <div
                class="number"
                v-for="(item, j) in number"
                :key="j"
                :class="`number${j}`"
            >
                <div><img :src="item.src" />{{ item.num }}</div>
                <span>{{ item.detail }}</span>
            </div>
        </div>
        <!-- <div class="number-container container1">
            <div class="number number1">
                <div><img src="/static/img/rise.png" alt="" />350%</div>
                <span>房均点击量</span>
            </div>
            <div class="number number2">
                <div><img src="/static/img/rise.png" alt="" />130%</div>
                <span>房均停留时长</span>
            </div>
            <div class="number number3">
                <div><img src="/static/img/rise.png" alt="" />40%</div>
                <span>用户返回率</span>
            </div>
        </div>
        <div class="number-container container2">
            <div class="number number4">
                <div>500+</div>
                <span>覆盖城市</span>
            </div>

            <div class="number number5">
                <div>34000+</div>
                <span>覆盖经纪门店</span>
            </div>
        </div>
        <div class="number-container container3">
            <div class="number number6">
                <div>10000+</div>
                <span>合作经济公司</span>
            </div>
            <div class="number number7">
                <div>400000+</div>
                <span>服务经纪人量</span>
            </div>
        </div> -->
        <div v-for="el in 4" :key="el" class="ripple" :class="{}"></div>
    </div>
</template>
<script>
export default {
    name: 'swiperPageThree',
    data() {
        return {
            // flag: true
            numberList: [
                [{ num: '350%', detail: '房均点击量', src: '/static/img/rise.png' }, { num: '130%', detail: '房均停留时长', src: '/static/img/rise.png' }, { num: '40%', detail: '用户返回率', src: '/static/img/rise.png' }],
                [{ num: '500+', detail: '覆盖城市', src: '' }, { num: '34000+', detail: '覆盖经纪门店', src: '' },],
                [, { num: '10000+', detail: '合作经济公司', src: '' }, { num: '400000+', detail: '服务经纪人量', src: '' }],
            ]
        }
    },
    computed: {

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
            font-size: 0.44rem;
            img {
                width: 0.31rem;
                height: 0.33rem;
            }
        }

        span {
            font-size: 0.22rem;
            width: 100%;
        }
    }

    &.container1 {
        height: 30%;

        .number {
            width: 30%;
            text-align: center;
        }
    }
    &.container2 {
        .number {
            width: 45%;
        }
        .number4 {
            margin-top: 5%;
        }
        .number5 {
            margin-top: 20%;
        }
    }
    &.container3 {
        justify-content: flex-end;
        .number {
            height: 20%;
        }
        .number6 {
            width: 48%;
            margin-top: -15%;
        }
        .number7 {
            width: 32%;
        }
    }
}

.ripple {
    margin: auto;
    margin-top: 5rem;
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

@keyframes ripple {
    0% {
        box-shadow: 0 0 0 0.2rem rgba(148, 255, 245, 0.2);
    }

    100% {
        box-shadow: 0 0 0 1rem rgba(148, 255, 245, 0);
    }
}
</style>