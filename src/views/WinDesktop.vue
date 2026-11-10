<script setup lang="ts">
import WinDock from '@/components/WinDock.vue'
import WinFiles from '@/components/WinFiles.vue'
import WinWindow from '@/components/WinWindow.vue'
import { appsRegistry } from '@/apps/registry'
import { useLauncher } from '@/services/launcher'
import { useConfigStore } from '@/stores/config'
import { useFilesStore } from '@/stores/files'
import { useWindowStore } from '@/stores/window'
import { computed } from 'vue'

const configStore = useConfigStore()
const windowStore = useWindowStore()
const filesStore = useFilesStore()
const launcher = useLauncher()

const desktopFiles = computed(() => {
  const path = `C:/Users/Administrator/Desktop`
  const tempFiles = filesStore.directory2Files(path)
  if (!tempFiles.success || !tempFiles.files) return []
  return tempFiles.files
})
const bgUrl = computed(() => `url(${configStore.config.bgUrl})`)

const openFile = (id: string) => {
  const file = desktopFiles.value.find((item) => item.id === id)
  if (!file) return
  launcher.openFile(file)
}
</script>

<template>
  <div id="win-desktop">
    <WinFiles
      class="files"
      layout="mediumIcons"
      isColumn
      :files="desktopFiles"
      @openFile="openFile"
    />
    <WinDock class="dock" />
    <WinWindow
      v-for="win in windowStore.windowDatas"
      :key="win.id"
      :title="win.title"
      :icon="win.icon"
      :style="{
        '--zIndex': win.z,
      }"
      class="window"
      @pointerdown="windowStore.focusWindow(win.id)"
      @close="windowStore.closeWindow(win.id)"
    >
      <component :is="appsRegistry[win.appId]?.component" v-bind="win.props" />
    </WinWindow>
  </div>
</template>

<style scoped lang="scss">
#win-desktop {
  width: 100%;
  height: 100%;
  background-image: v-bind(bgUrl);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .files {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .dock {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 10px;
  }
  .window {
    z-index: var(--zIndex);
  }
}
</style>
