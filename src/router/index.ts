import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/WinStartupLoading.vue'),
      name: 'loading',
    },
    {
      path: '/login',
      component: () => import('@/views/WinLocking.vue'),
      name: 'login',
    },
  ],
})

export default router
