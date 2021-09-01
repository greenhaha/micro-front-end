import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import startQiankun from './micro/index'
// 为 Angular 微应用所做的 zone 包注入
import 'zone.js/dist/zone'
Vue.config.productionTip = false
Vue.use(Antd)
startQiankun()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main-app')
