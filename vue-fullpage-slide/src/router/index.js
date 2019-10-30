import Vue from 'vue'
import Router from 'vue-router'

import example from '@/components/example'
import showTime from "@/pages/showTime";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/',
      name: 'show',
      component: showTime
    }
  ]
})
