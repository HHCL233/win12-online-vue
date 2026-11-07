import type { Component } from 'vue'

export interface DockBtnData {
  icon: string
  title: string
  isDockShow: boolean
  component: Component
}

export interface DockBtnPositionData {
  x: number
  y: number
}
