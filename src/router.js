import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Static from './views/Static.vue'
import Dynamic from './views/Dynamic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/static',
      name: 'static',
      component: Static
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
  ]
})
