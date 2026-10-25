<script setup lang="ts">
import WinDock from '@/components/WinDock.vue'
import WinFiles from '@/components/WinFiles.vue'
import WinWindow from '@/components/WinWindow.vue'
import { useConfigStore } from '@/stores/config'
import { computed } from 'vue'

const config = useConfigStore()
const bgUrl = computed(() => `url(${config.config.bgUrl})`)
</script>

<template>
  <div id="win-desktop">
    <WinFiles
      class="files"
      layout="mediumIcons"
      isColumn
      :files="[
        {
          name: '此电脑',
          size: 0,
          icon: '/icon/thispc.svg',
          type: 'file',
          child: [],
          id: '1',
        },
        {
          name: '关于',
          size: 0,
          icon: '/icon/folder.svg',
          type: 'file',
          child: [],
          id: '2',
        },
      ]"
    />
    <WinDock class="dock" />
    <WinWindow />
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
