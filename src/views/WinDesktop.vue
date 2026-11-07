<script setup lang="ts">
import WinDock from '@/components/WinDock.vue'
import WinFiles from '@/components/WinFiles.vue'
import WinWindow from '@/components/WinWindow.vue'
import { useConfigStore } from '@/stores/config'
import { useWindowStore } from '@/stores/window'
import { computed } from 'vue'

const configStore = useConfigStore()
const windowStore = useWindowStore()
const bgUrl = computed(() => `url(${configStore.config.bgUrl})`)
</script>

<template>
  <div id="win-desktop">
    <WinFiles
      class="files"
      layout="mediumIcons"
      isColumn
      :files="[
        {
          name: '关于',
          size: 0,
          icon: '/icon/folder.svg',
          type: 'file',
          child: [],
          id: 'about-win',
        },
      ]"
      @openFile="windowStore.openNewWindow"
    />
    <WinDock class="dock" />
    <WinWindow
      v-for="(window, id) in windowStore.windowDatas"
      :key="id"
      :title="window.title"
      :icon="window.icon"
      :id="id"
    >
      <component :is="window.component" :props="window.componentProps"></component>
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
}
</style>
