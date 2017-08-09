import Vue from 'vue'
import Tippy from 'v-tippy'
import 'typeface-nunito/index.css'
import App from './App.vue'

Vue.use(Tippy, {
  position: 'right',
  theme: 'light',
  size: 'small',
  animation: 'perspective',
  performance: true,
  arrow: true,
  trigger: 'click'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
