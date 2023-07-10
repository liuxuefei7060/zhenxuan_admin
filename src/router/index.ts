// 通过vue.router插件实现路由模版配置

import { createRouter, createWebHashHistory } from 'vue-router'

import { constantRouter } from './routers'
let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  // 滚动行为
  scrollBehavior() {
    return {
      length: 0,
      top: 0,
    }
  },
})

export default router
