import Vue from 'vue'
import App from './App.vue'
import { MdCard, MdButton, MdRadio, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdField)
Vue.use(MdRadio)
Vue.use(MdCard)
Vue.use(MdButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
