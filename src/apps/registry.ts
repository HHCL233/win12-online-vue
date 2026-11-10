import { defineAsyncComponent, type Component } from 'vue'

export interface AppDefinition {
  title: string
  icon: string
  singleton?: boolean
  component: Component
}

// 应用注册表
export const appsRegistry: Record<string, AppDefinition> = {
  'about-win': {
    title: '关于 Win12 网页版',
    icon: '/icon/about.svg',
    singleton: false,
    component: defineAsyncComponent(() => import('./about/AboutWin.vue')),
  },
}
