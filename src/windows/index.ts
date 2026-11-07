import type { WindowComponentInfo } from '@/typed/window.js'
import { defineAsyncComponent } from 'vue'

export const windowsMap: Record<string, WindowComponentInfo> = {
  'about-win': {
    title: '关于 Win12 网页版',
    icon: '/icon/about.svg',
    component: defineAsyncComponent(() => import('./AboutWin.vue')),
    datas: [],
  },
} as const
