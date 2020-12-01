import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        updateNumber(contex) {
            contex.commit('increment',)
        }
    },
    mutations: {
        increment(state) {
            state.clicks++;
        }
    },
    state: {
        clicks: 0
    },
    getters: {
        getClicks(state){
            return state.clicks
        }
    },
})
