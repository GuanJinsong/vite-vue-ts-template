import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'app',
    component: () => import('@/views/helloworld.vue'),
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import('@/views/temp.vue'),
  },
]

export default routes
