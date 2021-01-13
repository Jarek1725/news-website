import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    links: [
      {
        text: "Home",
        to: "/"
      },
    ]
  },
  mutations: {
    toggleDrawer: state => {
      state.drawer = !state.drawer;
    }
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
