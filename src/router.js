import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Login from './views/login'
import RegisterPostPlanSelect from './views/register-post-plan-select'
import RegisterPlanSelect from './views/register-plan-select'
import LoginPostLogin from './views/login-post-login'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login,
    },
    {
      name: 'Register-PostPlanSelect',
      path: '/register-post-plan-select',
      component: RegisterPostPlanSelect,
    },
    {
      name: 'Register-PlanSelect',
      path: '/register-plan-select',
      component: RegisterPlanSelect,
    },
    {
      name: 'Login-PostLogin',
      path: '/login-post-login',
      component: LoginPostLogin,
    },
  ],
})
