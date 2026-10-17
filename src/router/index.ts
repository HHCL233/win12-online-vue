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
    {
      path: '/desktop',
      component: () => import('@/views/WinDesktop.vue'),
      name: 'desktop',
    },
  ],
})

export default router
