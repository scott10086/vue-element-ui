
import Vue from 'vue'
import Router from 'vue-router'
import Home from '_l/main/Home'
import Login from '_l/main/Login'
import PageNotFound from '_l/main/PageNotFound'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/404',
      name: '登录',
      component: PageNotFound
    }
  ]
})

export default router
