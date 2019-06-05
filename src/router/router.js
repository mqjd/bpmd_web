import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/main-layout/main-layout'

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
        component: () => import('@/views/sheet')
      }, {
        path: 'form',
        name: 'form',
        meta: {
          title: '表单',
          icon: 'el-icon-s-cooperation'
        },
        component: () => import('@/views/form')
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouterMap
})
