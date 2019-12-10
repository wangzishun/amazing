<template>
  <main>
    <h1>全景拍摄</h1>
    <header>
      <p><span>*</span>经纪人/公司自行购买配套（相机+三脚架）设备</p>
      <p>自主完成拍摄并上传  <a class="view" href="">查看全景相机品牌介绍></a></p>
    </header>
    <article>
      <section class="swiper-btn-wrapper">
        <ul>
          <li
            :class="{ active: directiveActive == 0 }"
            @click="changeContent(0)"
          >
            希迅相机
          </li>
          <li
            :class="{ active: directiveActive == 1 }"
            @click="changeContent(1)"
          >
            理光相机
          </li>
          <li
            :class="{ active: directiveActive == 2 }"
            @click="changeContent(2)"
          >
            Insta360
          </li>
        </ul>
      </section>
      <swiper :options="swiperOption" ref="swiperMini">
        <swiper-slide v-for="(content, index) in contentList" :key="index">
          <div
            class="exhibit"
            :style="{
              background: `url(/static/img/${content.img}.png) center center / contain no-repeat`
            }"
          />
          <div class="title">{{ content.title }}</div>
          <p class="feature">
            <span>推荐指数：</span>
            <img
              class="hot"
              v-for="(i, k) in content.hot"
              :key="k"
              src="/static/img/hot.png"
            />
          </p>
          <span class="suggetion">相机建议购买地址</span>
          <p class="step">{{ content.step }}</p>
        </swiper-slide>
      </swiper>
    </article>
  </main>
</template>
<script>
export default {
  name: 'swiperPageSix',
  props: ['callYou'],
  data() {
    return {
      directiveActive: 0,
      contentList: [
        {
          title: '希迅3D-X1相机',
          hot: 4,
          img: 'camera1-1',
          step: '京东 > 搜索店铺“亦我数码” > 搜索“希迅3D-X1”',
          feature: ['高像素'],
        },
      ],
      contentListOne: [
        {
          title: '希迅3D-X1相机',
          hot: 4,
          img: 'camera1-1',
          step: '京东 > 搜索店铺“亦我数码” > 搜索“希迅3D-X1”',
          feature: ['高像素'],
        },
      ],
      contentListTwo: [
        {
          title: 'Theta SC',
          hot: 3,
          img: 'camera2-1',
          step: '京东 > 搜索店铺“理光映像旗舰店” > 搜索“Theta SC”',
          feature: [],
        },
        {
          title: 'Theta Z1',
          hot: 2,
          img: 'camera2-2',
          step: '京东 > 搜索店铺“理光映像旗舰店” > 搜索“Theta Z1”',
          feature: [],
        },
        {
          title: 'Theta V',
          hot: 1,
          img: 'camera2-3',
          step: '京东 > 搜索店铺“理光映像旗舰店” > 搜索“Theta V”',
          feature: [],
        },
      ],
      contentListThree: [
        {
          title: 'Insta360 ONE X',
          hot: 4,
          img: 'camera3-1',
          step: '京东 > 搜索店铺“Insta 360 京东自营旗舰店” > 搜索“ONE X”',
          feature: ['高像素', '大内存'],
        },
        {
          title: 'Insta360 Nano S',
          hot: 2,
          img: 'camera3-2',
          step: '京东 > 搜索店铺“Insta 360 京东自营旗舰店” > 搜索“Nano S”',
          feature: [],
        },
      ],
      contentListMap: { 1: 'contentListOne', 2: 'contentListTwo', 3: 'contentListThree' },
      swiperOption: { // swiper选项
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象
        // autoplay: true,
        speed: 500,
        setWrapperSize: true,
        slidesPerView: 1,
        height: '60%',
        resistanceRatio: 0,
        observeParents: true,
        on: {
          slideChange: () => {
            // this.swiperMiniChange(this.swiper.activeIndex);
          },
        }
      },
    }
  },
  swiper() {
    return this.$refs.swiperMini.swiper;
  },
  methods: {
    changeContent(index) {
      this.directiveActive = index
      this.contentList = this[this.contentListMap[index + 1]]
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  font-size: 0.22rem;
  text-align: center;
  p {
    margin-bottom: 0.13rem;
  }
  .view{
    color: #94FFF6;
    text-decoration:underline;
  }
}
.swiper-btn-wrapper {
  height: 1rem;
  margin-top: 0.6rem;

  ul {
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  li {
    display: inline-block;
    width: 1.65rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    border-radius: 0.3rem;
    &.active {
      background-color: rgba(69, 135, 255, 1);
      box-shadow: 0rem 0.05rem 0.3rem rgba(69, 135, 255, 0.6);
    }
  }
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  .exhibit {
    background-color: brown;

    width: 4.5rem;
    height: 4.5rem;
  }
  .title {
    width: 3rem;
    height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    background: url(/static/img/icon_title_2.png) center no-repeat;
    background-size: contain;
  }

  .feature {
    font-size: 0.24rem;
    margin-top: 0.5rem;
    .hot {
      width: 0.2rem;
      height: 0.25rem;
      margin-right: 0.12rem;
      margin-bottom: -0.04rem;
    }
  }

  .suggetion {
    font-size: 0.22rem;
    color: #94fff6;
    margin-top: 0.4rem;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 0.1rem;
      height: 0.1rem;
      transform: rotate(-45deg);
      background: #94fff5;
      margin: 0 0.12rem 0.04rem 0;
    }
    &::after {
      margin: 0 0 0.04rem 0.12rem;
    }
  }
  .step {
    font-size: 0.24rem;
    margin-top: 0.2rem;
  }
}
</style>