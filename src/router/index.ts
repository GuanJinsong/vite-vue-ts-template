import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes: routes,
})

export default router
