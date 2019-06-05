import Vue from 'vue'

import './assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './app.scss'
import App from './App.vue'
import router from './router/router'
import store from './model/store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
