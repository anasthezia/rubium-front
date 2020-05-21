import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/styles/styles.scss'

Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  render: h => h(App, this),
}).$mount('#app')
