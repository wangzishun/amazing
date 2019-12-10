<template>
  <main>
    <h1>拍摄流程</h1>
    <article
      v-for="(content, i) in contentList"
      :key="i"
      :class="[`animated article${i} delay-${i * 500}`, animationCallYou(i)]"
    >
      <div
        :style="{
          width: '100%',
          height: '1.80rem',
          background: `url(/static/img/t${i}.png) no-repeat center`,
          backgroundSize: 'contain'
        }"
      ></div>
      <h6>{{ content.title }}</h6>
      <p>{{ content.detail }}</p>
    </article>
    <div
      v-for="i in 3"
      :key="`c${i}`"
      :style="{
        background: `url(/static/img/c${i}.png) no-repeat center`,
        backgroundSize: 'contain'
      }"
      :class="[`c${i}`, 'animated', `delay-${i*600}`, call()]"
    ></div>
    <componentBtn
      url="https://h5.anjuke.com/mweb/#/guide-quanjing"
      content="查看拍摄教程"
      :callYou="callYou"
    ></componentBtn>
  </main>
</template>
<script>
import componentBtn from "@/components/componentButton";
export default {
  name: "swiperPageSeven",
  props: ['callYou'],
  data() {
    return {
      contentList: [
        { title: '登录移动经纪人app', detail: '首页 (底部工具箱) < 全景管理' },
        { title: '拍摄全景', detail: '上传至后台并且关联房源' },
        { title: '付费3D拼接', detail: '购买拼接券进行3D户型拼接' },
        { title: '前台展示', detail: '【安居客&58】展示3D全景房源' },
      ]
    };
  },
  methods: {
    animationCallYou(i) {
      if (this.callYou) {
        return (i == 0 || i == 3) ? 'fadeInLeftBig' : 'fadeInRightBig';
      }
    },
    call() {
      if (this.callYou) {
        return 'fadeIn'
      }
    }
  },
  components: {
    componentBtn
  }
};
</script>
<style lang="scss" scoped>
article {
  position: absolute;
  width: 46%;
  h6 {
    text-align: center;
    font-size: 0.26rem;
    font-weight: 600;
    margin-top: 0.29rem;
    margin-bottom: 0.23rem;
  }
  p {
    text-align: center;
    font-size: 0.22rem;
    font-weight: 300;
    color: #FFFFFF;
  }
}
.article0 {
  margin-top: 6%;
  left: 0;
  width: 48%;
}
.article1 {
  margin-top: 6%;
  right: 0;
}
.article2 {
  margin-top: 64%;
  right: 0;
}
.article3 {
  margin-top: 64%;
  left: 0;
}
.c1 {
  position: absolute;
  width: 1.58rem;
  height: 0.09rem;
  left: 3rem;
  top: 3.94rem;
}
.c2 {
  position: absolute;
  width: 0.09rem;
  height: 0.83rem;
  left: 5.75rem;
  top: 6.37rem;
}
.c3 {
  position: absolute;
  width: 1.58rem;
  height: 0.09rem;
  left: 3rem;
  top: 8.3rem;
}
</style>