<template>
  <article>
    <swiper :options="swiperOption" ref="swiperPageMain">
      <swiper-slide class="home-swiper-slied" v-for="(page, index) in swiperPageList" :key="index">
        <section class="swiper-section">
          <component
            :is="page"
            :style="{
                width: vw + 'px',
                height: vh + 'px',
                background: `url(/static/img/bg_${index}.png) no-repeat center`,
                backgroundSize: 'contain',
                backgroundColor: '#051031'
            }"
            :callYou="pageIndex == index"
            :ref="`swiperPage${index}`"
          ></component>
        </section>
      </swiper-slide>
    </swiper>
    <div :class="['homeBtn', 'animated', isHome ? 'heartBeat' : 'zoomOut']">
      <p>了解更多</p>
      <i @click="nextPage"></i>
    </div>
  </article>
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
  props: [
    'vw',
    'vh'
  ],
  data() {
    return {
      isHome: true,
      flag: false,
      pageIndex: 0,
      swiperPageList: ['pageOne', 'pageTwo', 'pageThree', 'pageFour', 'pageFive', 'pageSix', 'pageSeven', 'pageEight'],
      swiperOption: { // swiper选项
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
        speed: 500,
        direction: 'vertical',
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        resistanceRatio: 0,
        observeParents: true,
        on: {
          slideChangeTransitionStart: () => {
            this.storeSwitchPageIndex(this.swiper.activeIndex);
          },
        }
      },

    };
  },
  methods: {
    storeSwitchPageIndex(i) { // 更改页面索引
      this.pageIndex = i;
      this.isHome = (i == 0) ? true : false;
      // this.$store.commit('switchPageIndex', { swiperPageIndex: i })
    },
    nextPage(e) {
      e.preventDefault();
      this.swiper.slideNext();
    },
  },
  watch: {
    swiperPageIndex(val) {
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
.home-swiper-slied {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .swiper-section {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.homeBtn {
  position: fixed;
  bottom: 5%;
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
  i {
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: -0.15rem;
    left: 50%;
    background: url(/static/img/touch_btn.png) no-repeat;
    background-size: contain;
  }
  &.hidden {
    transition: 2s;
    display: none;
  }
}

h1 {
  font-size: 0.4rem;
  text-align: center;
  height: 20%;
  line-height: 3.5rem;
}
</style>