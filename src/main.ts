import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Vue.config.productionTip = false

var elId = 'app'
var el = document.getElementById(elId)
var d = el ? el.getAttribute("vendor") : ''

new Vue({
  router,
  render: h => h(App, {props:{vendor:d}}),
}).$mount('#'+elId)
