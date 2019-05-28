import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import { routes } from './routes'
import VueRouter from 'vue-router';
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://vue-stock-trader-ca338.firebaseio.com"

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
