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
                            width: visibleWidth + 'px',
                            background: `url(/static/img/bg_${index}.png) no-repeat center`,
                            backgroundSize: 'cover',
                            backgroundColor: 'darkslategray'
                        }"
                        :ref="`swiperPage${index}`"
                    >
                    </component>
                </div>
            </swiper-slide>
        </swiper>
        <div v-show="isHome" class="dialog">
            <p>了解更多</p>
            <div class="touch-btn" @click="nextPage"></div>
        </div>
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
            isHome: true,
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
                on: {
                    slideChangeTransitionEnd: () => {
                        this.storeSwitchPageIndex(this.swiper.activeIndex);
                        console.log(1);
                    },
                }
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
        storeSwitchPageIndex(pageIndex) { // 更改页面索引
            this.$store.commit('switchPageIndex', { swiperPageIndex: pageIndex })
        },
        nextPage(e) {
            e.preventDefault();
            this.swiper.slideNext();
            // this.storeSwitchPageIndex(this.swiper.activeIndex);
        },
    },
    watch: {
        swiperPageIndex(val) {
            console.log(val);
            this.isHome = (val == 0) ? true : false;
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
        console.log(this.visibleHeight)
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
.swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.page-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
.dialog {
    position: fixed;
    margin-top: -18%;
    margin-left: -1rem;
    left: 50%;
    text-align: center;
    width: 2rem;
    height: 10%;
    z-index: 888;
    p {
        font-size: 0.28rem;
        line-height: 0.56rem;
    }
    .touch-btn {
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        margin-left: -0.15rem;
        left: 50%;
        background: url(/static/img/touch_btn.png) no-repeat;
        background-size: contain;
    }
}

.title {
    font-size: 0.4rem;
    text-align: center;
    height: 20%;
    line-height: 3.5rem;
}
</style>