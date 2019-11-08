<template>
  <div class="show-time" :style="[bgStyle]">
    <pageNavigation></pageNavigation>
    <pageMain :vw="visibleWidth" :vh="visibleHeight"></pageMain>
  </div>
</template>

<script>
import pageMain from "@/components/swiperPageMain.vue";
import pageNavigation from "@/components/swiperPageNavigation.vue";

export default {
  name: 'showTime',
  data() {
    return {
      visibleWidth: 0,
      visibleHeight: 0,
      bgStyle: {        
        backgroundColor: '#051031',
      }
    }
  },
  methods: {
    flexible(window, document) {
      let _this = this;
      let docEl = document.documentElement
      let dpr = window.devicePixelRatio || 1

      // adjust body font size
      function setBodyFontSize() {
        if (document.body) {
          document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
          document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
      }
      setBodyFontSize();

      // set 1rem = viewWidth / 7.5
      function setRemUnit() {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let aspectRatio = 750 / 1334; //宽高比
        if ((w / h) > aspectRatio) {
          w = h * aspectRatio;
        } else {
          h = w / aspectRatio;
        }
        // let rem = docEl.clientWidth / 7.5;
        docEl.style.fontSize = w / 7.5 + 'px';
        _this.visibleWidth = w;
        _this.visibleHeight = h;
        console.log(w, h);
      }

      setRemUnit()

      // reset rem unit on page resize
      window.addEventListener('resize', setRemUnit)
      window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
          setRemUnit()
        }
      })

      // detect 0.5px supports
      // if (dpr >= 2) {
      //     let fakeBody = document.createElement('body')
      //     let testElement = document.createElement('div')
      //     testElement.style.border = '.5px solid transparent'
      //     fakeBody.appendChild(testElement)
      //     docEl.appendChild(fakeBody)
      //     if (testElement.offsetHeight === 1) {
      //         docEl.classList.add('hairlines')
      //     }
      //     docEl.removeChild(fakeBody)
      // }
    },
  },
  watch: {
    swiperPageIndex(val) {
      //   if (val != 0) {
      //     console.log(this.bgStyle);
      //     this.bgStyle.backgroundColor = '#051031'
      //   }
      // this.bgStyle.backgroundColor = val ? '#051031' : '#030b29'
    }
  },
  computed: {
    swiperPageIndex() {
      return this.$store.state.swiperPageIndex;
    },
  },
  created() {
    this.flexible(window, document);
    // this.rem(window, window.lib || (window.lib = {}))
  },
  components: {
    pageMain,
    pageNavigation,
  }
}
</script>

<style>
html {
}
.show-time {
  /* background-color: #051031; */
  transition: 0.5s;
}
</style>