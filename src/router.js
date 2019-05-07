import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './views/layout/MainLayout.vue'

Vue.use(Router)

export const RouterMap = [
  {
    path: '/',
    name: 'main-layout',
    component: MainLayout
  }, {
    path: '/component',
    name: 'component',
    component: MainLayout,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About')
      }, {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home')
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouterMap
})
