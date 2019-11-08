<template>
  <main>
    <h1>合作伙伴</h1>
    <article>
      <p>点击下方“免费报名”，即可享受体验全景临感的机会</p>
      <p>帮您增加房源曝光量，精准获客，提升看房效率</p>
    </article>
    <img src="/static/img/bg8.png" :style="[imgStyle]" :class="imgs" />
    <componentBtn
      url="https://survey.58.com/?id=1005981&hash=of41"
      content="免费报名"
      :callYou="callYou"
      :style="btnStyle"
    ></componentBtn>
  </main>
</template>
<script>
import componentBtn from '@/components/componentButton'
export default {
  name: 'swiperPageEight',
  props: ['callYou'],
  data() {
    return {
      btnStyle: {
        top: '80%',
        backgroundColor: 'rgba(69, 135, 255, 0.8)',
        borderColor: 'rgba(69, 135, 255, 0.8)',
        boxShadow: '0rem 0.05rem 0.3rem rgba(69,135,255,1)',
      },
      imgStyle: {
        width: '0',
        marginTop: '0.8rem',
        marginLeft: '0'
      }
    }
  },
  computed: {
    imgs() {
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.imgStyle.width = w + 'px';
    //   this.imgStyle.height = w / 750 * 854 + 'px';
      let aspectRatio = 750 / 1334; //宽高比
      if ((w / h) > aspectRatio) {
        let tmp = h * aspectRatio
        this.imgStyle.marginLeft = (tmp - w) / 2 + 'px'
      }
    }
  },
  components: {
    componentBtn,
  }
}
</script>
<style lang="scss" scoped>
article {
  position: absolute;
  top: 68%;
  width: 100%;
  p {
    margin-bottom: 0.19rem;
    text-align: center;
    font-size: 0.22rem;
    font-weight: 300;
  }
}
</style>