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

import pageContent from '@/components/swiperPageContent';
export default {
    name: 'swiperPageMain',
    data() {
        return {
            swiperPageList: ['pageOne', 'pageTwo', 'pageThree', 'pageFour'],
            swiperOption: {
                notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                direction: 'vertical',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                slidesPerView: 1,
                mousewheel: true,
                mousewheelControl: true,
                height: window.innerHeight,
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
    },
    components: {
        pageOne,
        pageTwo,
        pageThree,
        pageFour,
        pageContent
    },
};
</script>
<style>
.bg {
    width: 6rem;
    height: 12.8rem;
    /* width: 100vw; */
    /* height: 100vh; */

    margin-left: 50%;
    position: absolute;
    left: -3rem;
    /* margin-top: 50%; */
    top: 0rem;
    background-size: 6rem 12.8rem;
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