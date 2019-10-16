<template>
    <div class="swiper-page-Main">
        <swiper :options="swiperOption" ref="swiperPageMain">
            <!-- <swiper-slide>I'm Slide 1
            <div style='width:100%;height:100%;background-color:red;'></div>
        </swiper-slide> -->
            <swiper-slide v-for="(val, index) in swiperPageList" :key="index">
                <component :is="val" :style="{}" :ref="`swiperPage${index}`">
                </component>
            </swiper-slide>
            <!-- <component v-for='(val,index) in swiperPageList'
                        :key='index'
                        :is='val'
                        :style="{

                        }"
                        :ref="`swiperPage${index}`"
        >
        </component> -->
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
            swiperOption: {
                notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                direction: 'vertical',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                slidesPerView: 1,
                mousewheel: true,
                mousewheelControl: true,
                // height: window.innerHeight,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                resistanceRatio: 0,
                observeParents: true
            }
        };
    },
    methods: {
        nextPage(e) {
            e.preventDefault();
            this.swiper.slideNext();
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperPageMain.swiper;
        }
    },
    mounted() {
        // current swiper instance
        console.log('追星启动');
        var w=window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth;
        var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;　　
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
<style>
.bg {
    /* width: 2.81rem; */
    /* height: 6rem; */
    position: absolute;
    margin-left: 50%;
    left: -1.4rem;

    /* margin-top: -0.4rem; */
    /* top: -1rem; */
}
.touch-btn {
    position: fixed;
    width: 30px;
    height: 30px;
    margin: -20% 0 0 50%;
    left: -15px;
    background: url(../assets/images/music.png) no-repeat;
    background-size: 100%;
    z-index: 999;
}
</style>