import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DockBtnPositionData, DockBtnData } from '@/typed/dock'
import type { Component } from 'vue'

export const useDockStore = defineStore('dock', () => {
  const dockDatas = ref<Record<string, DockBtnData>>({})
  const dockPositionData = ref<Record<string, DockBtnPositionData>>({})

  function registryBtn(title: string, icon: string, component: Component, isDockShow: boolean) {
    const dockId = crypto.randomUUID()
    dockDatas.value[dockId] = {
      icon,
      title,
      component,
      isDockShow,
    }
    dockPositionData.value[dockId] = {
      x: 0,
      y: 0,
    }
    return dockId
  }

  return { dockDatas, registryBtn }
})
