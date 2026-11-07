import { ref, markRaw } from 'vue'
import { defineStore } from 'pinia'
import type { WindowData } from '@/typed/window'
import type { Component } from 'vue'
import { useDockStore } from './dock'
import { windowsMap } from '@/windows'

export const useWindowStore = defineStore('window', () => {
  const dockStore = useDockStore()
  const windowDatas = ref<Record<string, WindowData>>({})

  function registryWindow(
    name: string,
    title: string,
    icon: string,
    component: Component,
    isDockShow: boolean,
    isShow: boolean,
    componentProps: Record<string, unknown>,
  ) {
    const dockId = dockStore.registryBtn(title, icon, component, isDockShow)
    const id = crypto.randomUUID()
    windowDatas.value[id] = {
      name,
      title,
      icon,
      isDockShow,
      isShow,
      dockId,
      componentProps,
      component: markRaw(component),
      state: 'normal',
    }
    return { success: true }
  }

  function openNewWindow(
    id: string,
    props?: Record<string, unknown>,
    title?: string,
    icon?: string,
    isDockShow?: boolean,
    isShow?: boolean,
  ) {
    if (!(id in windowsMap)) return { success: false }
    const windowInfo = windowsMap[id]
    if (!windowInfo) return { success: false }
    title = title ?? windowInfo?.title
    icon = icon ?? windowInfo?.icon
    registryWindow(
      id,
      title,
      icon,
      windowInfo?.component,
      isDockShow ?? true,
      isShow ?? true,
      props ?? {},
    )
    return { success: true }
  }

  return { windowDatas, registryWindow, openNewWindow }
})
