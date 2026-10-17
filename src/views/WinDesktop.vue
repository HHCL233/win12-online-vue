<script setup lang="ts">
import WinFiles from '@/components/WinFiles.vue'
</script>

<template>
  <div id="win-desktop">
    <WinFiles
      class="files"
      layout="details"
      :files="[
        {
          name: 'Program Files',
          size: 0,
          icon: '/icon/folder.svg',
          type: 'folder',
          child: [],
          id: '1',
        },
        {
          name: 'Program Files',
          size: 0,
          icon: '/icon/folder.svg',
          type: 'folder',
          child: [],
          id: '2',
        },
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
#win-desktop {
  width: 100%;
  height: 100%;
  background-color: white;
  .files {
    width: 100%;
    height: 100%;
    position: fixed;
  }
}
</style>
