import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
  ]
})
