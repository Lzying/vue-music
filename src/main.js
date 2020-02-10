import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
import router from "./router/router"

import './assets/css/common.css' 
import './assets/icon_font/iconfont.css' 
// Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
