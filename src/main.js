import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast/index.js'
import LazyLoad from "vue-lazyload"
import FastClick from "fastclick"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Toast)

FastClick.attach(document.body)

Vue.use(LazyLoad,{
  loading: require("assets/images/common/placeholder.png")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
