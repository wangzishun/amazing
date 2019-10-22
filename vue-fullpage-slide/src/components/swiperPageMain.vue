<template>
    <div class="swiper-page-main">
        <swiper :options="swiperOption" ref="swiperPageMain">
            <swiper-slide v-for="(val, index) in swiperPageList" :key="index">
                <div :class="`page-container swiper-page-${index}`" :style="{}">
                    <component
                        class="delay-1s"
                        :class="{ animated: flag, fadeIn: flag, slower: flag }"
                        :is="val"
                        :style="{
                            height: visibleHeight + 'px',
                            width: visibleWidth + 'px'
                        }"
                        :ref="`swiperPage${index}`"
                    >
                    </component>
                    <!-- <div
                        class="test h-center"
                        style="background-color:brown;height:100px;width:100px;z-index:10;"
                    ></div> -->
                </div>
            </swiper-slide>
        </swiper>
        <i class="touch-btn" @click="nextPage"></i>
    </div>
</template>
 
<script>
import pageOne from '@/components/swiperPages/pageOne';
import pageTwo from '@/components/swiperPages/pageTwo';
import pageThree from '@/components/swiperPages/pageThree';
import pageFour from '@/components/swiperPages/pageFour';
import pageFive from '@/components/swiperPages/pageFive';
import pageSix from '@/components/swiperPages/pageSix';
import pageSeven from '@/components/swiperPages/pageSeven';
import pageEight from '@/components/swiperPages/pageEight';

export default {
    name: 'swiperPageMain',
    data() {
        return {
            swiperPageList: ['pageOne', 'pageTwo', 'pageThree', 'pageFour', 'pageFive', 'pageSix', 'pageSeven', 'pageEight'],
            // swiperPageList: ['pageOne', 'pageOne'],
            visibleHeight: 0,
            visibleWidth: 0,
            swiperOption: { // swiper选项
                notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                // speed: 500,
                direction: 'vertical',
                setWrapperSize: true,
                autoHeight: true,
                slidesPerView: 1,
                mousewheel: true,
                mousewheelControl: true,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                resistanceRatio: 0,
                observeParents: true,
                // effect: 'flip',
                // zoom: true,
                // effect: 'coverflow',
                // coverflowEffect: {
                //     rotate: 80,
                //     stretch: 100,
                //     depth: 100,
                //     modifier: 1,
                //     // slideShadows: true
                // },


            },
            flag: false,

        };
    },
    methods: {
        nextPage(e) {
            e.preventDefault();
            this.swiper.slideNext();
        },
    },
    watch: {
        swiperPageIndex(val) {
            console.log(val);
            this.swiper.slideTo(val);
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperPageMain.swiper;
        },
        swiperPageIndex() {
            return this.$store.state.swiperPageIndex;
        },
    },
    mounted() {
        // current swiper instance
        console.log('追星启动...');
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let flag = (w / h) > (750 / 1334);
        if (flag) {
            this.visibleHeight = h;
            this.visibleWidth = h / 1334 * 750;
        } else {
            this.visibleWidth = w;
            this.visibleHeight = w / 750 * 1334;
        }
        // this.visibleHeight = h;
        // this.visibleWidth = this.visibleHeight / 1334 * 750;
        // this.visibleWidth = w;
        // this.visibleHeight = this.visibleWidth / 750 * 1334;
        console.log(this.visibleHeight)
        // alert(w +"+"+ h+"\n"+window.innerHeight)

    },
    components: {
        pageOne,
        pageTwo,
        pageThree,
        pageFour,
        pageFive,
        pageSix,
        pageSeven,
        pageEight
    },
};
</script>
<style lang="scss">
.swiper-page-main {
    // display: flex;
    // justify-content: center;
}
.page-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    .bg {
        // position: absolute;
        // left: 50%;
        // transform: translate(-50%, 0);
        &.bg-one {
            background: url(../assets/images/bg_one.png) no-repeat center;
            background-size: cover;
        }
        &.bg-two {
            background: url(../assets/images/bg_two.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-three {
            background: url(../assets/images/bg_three.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-four {
            background: url(../assets/images/bg_four.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-five {
            background: url(../assets/images/bg_five.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-six {
            background: url(../assets/images/bg_six.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-seven {
            background: url(../assets/images/bg_seven.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
        &.bg-eight {
            background: url(../assets/images/bg_eight.png) no-repeat center;
            background-size: cover;
            background-color: darkslategray;
        }
    }
}

/* 水平居中 */
.h-center {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

.title {
    font-size: 0.4rem;
    text-align: center;
    height: 38%;
    line-height: 3.5rem;
}
.touch-btn {
    position: fixed;
    width: 0.3rem;
    height: 0.3rem;
    margin: -20% 0 0 50%;
    left: -0.15rem;
    background: url(../assets/images/music.png) no-repeat;
    background-size: contain;
    z-index: 999;
}
</style>