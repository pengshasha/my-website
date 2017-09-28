// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout'
import Index from './pages/index'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
