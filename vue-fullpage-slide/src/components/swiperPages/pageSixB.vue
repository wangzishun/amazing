<template>
  <main>
    <h1>全景拍摄</h1>
    <header>
      <p><span>*</span>经纪人/公司自行购买配套（相机+三脚架）设备</p>
      <p>
        自主完成拍摄并上传 <a class="view" href="">查看全景相机品牌介绍></a>
      </p>
    </header>
    <article>
      <section class="swiper-btn-wrapper">
        <p class="tips">【三脚架：需搭配全景相机使用】</p>
      </section>
      <div
        class="exhibit"
        :style="{
          background: `url(/static/img/tripodB.png) center center / contain no-repeat`
        }"
      />
      <div class="title">希迅三脚架</div>
      <span class="suggetion">购买注意事项</span>
      <p class="step">含黄色底座、需搭配全景相机使用</p>
      <span class="suggetion">相机建议购买地址</span>
      <p class="step">京东 > 搜索店铺“亦我数码” > 选择“三脚架”</p>
    </article>
  </main>
</template>
<script>
export default {
  name: 'swiperPageSix',
  props: ['callYou'],
}
</script>
<style lang="scss" scoped>
header {
  font-size: 0.22rem;
  text-align: center;
  p {
    margin-bottom: 0.13rem;
  }
  .view {
    color: #94fff6;
    text-decoration: underline;
  }
}
.swiper-btn-wrapper {
  height: 0.4rem;
  margin-top: 0.8rem;
  .tips {
    text-align: center;
    font-size: 0.3rem;
  }
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  .exhibit {
    width: 2rem;
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