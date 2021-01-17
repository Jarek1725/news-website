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
    ],
    socialMedia: [
      {text: "Facebook", icon: "facebook", to: "#/facebook.com/user/novvac", color: "#4267B2"},
      {text: "Youtube", icon: "youtube", to: "#/youtube.com/user/novvac", color: "#ff0000"},
      {text: "Twitter", icon: "twitter", to: "#/facebook.com/user/novvac", color: "#1DA1F2"},
      {text: "Messenger", icon: "facebook-messenger", to: "#/facebook.com/user/novvac", color: "#00B2FF"},
      {text: "Telegram", icon: "telegram", to: "#/facebook.com/user/novvac", color: "#0088cc"},
      {text: "Github", icon: "github", to: "#/facebook.com/user/novvac", color: "#333"},
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
