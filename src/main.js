// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 全局样式
import './assets/css/main.scss'
import './assets/css/normalize.css'

// import mui from 'mui'
// Vue.use('mui')
// import '../lib/mui/css/mui.min.css'
// import '../lib/mui/css/icons-extra.css'
 

// 引入vuex
import store from './vuex/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
