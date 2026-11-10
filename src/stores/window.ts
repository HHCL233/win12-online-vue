import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { WindowCreateData, WindowRecord } from '@/typed/window'

export const useWindowStore = defineStore('window', () => {
  const windowDatas = ref<Record<string, WindowRecord>>({})
  const activeWindow = ref('')
  // 递增的层级序号
  let zSeed = 0

  function createWindow(data: WindowCreateData) {
    const id = crypto.randomUUID()
    windowDatas.value[id] = { ...data, id, z: ++zSeed }
    activeWindow.value = id
    return id
  }

  function focusWindow(id: string) {
    const win = windowDatas.value[id]
    if (!win) return false
    win.z = ++zSeed
    activeWindow.value = id
    return true
  }

  function closeWindow(id: string) {
    if (!(id in windowDatas.value)) return false
    delete windowDatas.value[id]
    if (activeWindow.value === id) activeWindow.value = ''
    return true
  }

  function findWindowByApp(appId: string) {
    return Object.values(windowDatas.value).find((win) => win.appId === appId)
  }

  return { windowDatas, activeWindow, createWindow, focusWindow, closeWindow, findWindowByApp }
})
