// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Utils from './utils/utils'
import Vuetify from 'vuetify'
import Vant from 'vant'
import 'vuetify/dist/vuetify.min.css'
import 'vant/lib/vant-css/index.css'
// import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(Vant)
const utils = new Utils()
Vue.prototype.$utils = utils
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
