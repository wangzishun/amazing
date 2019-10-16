import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        swiperPageIndex: 0,
        hasAnimated: {
            hasAnimats: true,
            name: ""
        }
    },
    mutations: {
        switchPageIndex(state, item) {
            state.swiperPageIndex = item.swiperPageIndex
        },
        showAnimation(state, n) {
            state.hasAnimated.hasAnimats = n.hasAnimats;
            state.hasAnimated.name = n.name
        }
    }
})

export default store