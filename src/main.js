import 'babel-polyfill'
import Vue from 'vue'
import VueSession from 'vue-session'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueSession, {
  persist: true
})
axios.defaults.baseURL = 'http://localhost:3000'
Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
