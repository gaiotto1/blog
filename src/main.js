// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import BootstrapVue from 'bootstrap-vue'
// import './bootstrap/dist/css/bootstrap.css'
// import './bootstrap-vue/dist/css/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuetify)
// Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
