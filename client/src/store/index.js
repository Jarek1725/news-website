import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {
        text: "Home",
        to: "/"
      },
    ]
  },
  mutations: {
  },
  getters: {
    links: state => {
      return state.links;
    }
  },
  actions: {
  },
  modules: {
  }
})
