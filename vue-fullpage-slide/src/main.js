import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/animate.css'

Vue.config.productionTip = false

//vue awesome swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
