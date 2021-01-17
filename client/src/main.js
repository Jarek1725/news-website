import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/base';
import VueStickyDirective from '@renatodeleao/vue-sticky-directive'

Vue.config.productionTip = false
Vue.use(VueStickyDirective);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
