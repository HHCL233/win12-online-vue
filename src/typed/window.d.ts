import type { Component } from 'vue'

export interface WindowData {
  name: string
  title: string
  icon: string
  component: Component
  componentProps: Record<string, unknown>
  isShow: boolean
  isDockShow: boolean
  state: 'normal' | 'minimize' | 'maximize'
  dockId: string
}

export interface WindowComponentInfo {
  title: string
  icon: string
  component: Component
  datas: string[]
}
