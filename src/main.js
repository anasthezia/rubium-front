import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import './assets/styles/styles.scss'

Vue.config.productionTip = false
// Vue.use(VueMaterial)

new Vue({
  data: {},
  render: h => h(App, this), store, router
}).$mount('#app')
