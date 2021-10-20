import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './assets/scss/app.scss'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
