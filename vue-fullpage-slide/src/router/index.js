import Vue from 'vue'
import Router from 'vue-router'

import total from '@/components/total'
import swiper from '@/components/swiperMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'total',
      component: total
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
  ]
})
