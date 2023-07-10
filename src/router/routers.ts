// 常量路由
export const constantRouter = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    //登录成功展示数据
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    //
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
    redirect: '/404',
    name: 'any',
  },
]
