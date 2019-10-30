import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        swiperPageIndex: 0,
    },
    mutations: {
        switchPageIndex(state, item) {
            state.swiperPageIndex = item.swiperPageIndex
        },
    }
})

export default store