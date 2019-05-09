import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/MainLayout/MainLayout.vue'

Vue.use(Router)

export const RouterMap = [
  {
    path: '/',
    name: 'main-layout',
    meta: {
      title: '主页',
      icon: 'el-icon-s-home'
    },
    component: MainLayout
  }, {
    path: '/component',
    name: 'component',
    meta: {
      title: '组件',
      icon: 'el-icon-s-order'
    },
    component: MainLayout,
    children: [
      {
        path: 'sheet',
        name: 'sheet',
        meta: {
          title: '表格',
          icon: 'el-icon-s-cooperation'
        },
        component: () => import('@/views/Sheet')
      }, {
        path: 'home',
        name: 'home',
        meta: {
          title: '组件2',
          icon: 'el-icon-s-cooperation'
        },
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
