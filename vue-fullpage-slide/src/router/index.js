import Vue from 'vue'
import Router from 'vue-router'

import total from '@/components/total'
import pageMain from '@/components/swiperPageMain'
import showTime from "@/components/showTime";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'total',
      component: total
    },
    {
      path: '/pageMain',
      name: 'pageMain',
      component: pageMain
    },
    {
      path: '/test',
      name: 'test',
      component: showTime
    }
  ]
})
