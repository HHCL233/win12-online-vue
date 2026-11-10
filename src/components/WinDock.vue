<script setup lang="ts">
import { computed } from 'vue'
import { useWindowStore } from '@/stores/window'
import type { WindowRecord } from '@/typed/window'

interface DockItem {
  appId: string
  title: string
  icon: string
  count: number
  isActive: boolean
}

const windowStore = useWindowStore()

// Dock 完全由窗口状态派生
const dockItems = computed(() => {
  const items = new Map<string, DockItem>()
  for (const win of Object.values(windowStore.windowDatas)) {
    if (!win.isDockShow) continue
    const item = items.get(win.appId)
    if (item) {
      item.count++
      item.isActive ||= win.id === windowStore.activeWindow
    } else {
      items.set(win.appId, {
        appId: win.appId,
        title: win.title,
        icon: win.icon,
        count: 1,
        isActive: win.id === windowStore.activeWindow,
      })
    }
  }
  return [...items.values()]
})

const focusApp = (appId: string) => {
  const topWindow = Object.values(windowStore.windowDatas)
    .filter((win) => win.appId === appId)
    .reduce<WindowRecord | undefined>((top, win) => (!top || win.z > top.z ? win : top), undefined)
  if (topWindow) windowStore.focusWindow(topWindow.id)
}
</script>

<template>
  <div class="win-dock">
    <div class="dock-zone">
      <div class="dock-btn" tabindex="1">
        <img src="/icon/logo.svg" class="icon" :draggable="false" />
      </div>
      <div
        v-for="item in dockItems"
        :key="item.appId"
        class="dock-btn"
        :class="{ active: item.isActive }"
        tabindex="1"
        :title="item.title"
        @click="focusApp(item.appId)"
      >
        <img :src="item.icon" class="icon" :draggable="false" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/config.scss' as config;

.win-dock {
  @include config.useTheme('dock');
  height: 40px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  .dock-zone {
    outline: 1px solid var(--outlineColor);
    box-shadow:
      0 1px 2px var(--shadowColor1),
      0px 3px 25px 1px var(--shadowColor2);
    display: flex;
    background-color: var(--bg);
    border-radius: 10px;
    backdrop-filter: blur(20px) saturate(2);
    align-items: center;
    pointer-events: all;
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--hoverBg);
    }
    .dock-btn {
      padding: 4px;
      box-sizing: border-box;
      aspect-ratio: 1/1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: transform 150ms;
      &:active {
        transform: scale(0.8);
      }
      &.active::after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--outlineColor);
        transform: translateX(-50%);
      }
      .icon {
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }
  }
}
</style>
