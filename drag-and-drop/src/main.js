import Vue from 'vue'
import App from './App.vue'
// import vueDragDrop from './vueDragDrop.js'
// Vue.use(vueDragDrop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
