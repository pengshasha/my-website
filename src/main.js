// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout'
import routes from './router/index'
import VueResource from 'vue-resource'
import VeeValidate,{Validator} from 'vee-validate'
import message from 'vee-validate/dist/locale/zh_CN'

Validator.addLocale(message);


const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};

Vue.use(VeeValidate,config)
Vue.use(Router)
Vue.use(VueResource)


var router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
