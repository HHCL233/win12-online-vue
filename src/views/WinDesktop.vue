<script setup lang="ts">
import WinFiles from '@/components/WinFiles.vue'
</script>

<template>
  <div id="win-desktop">
    <WinFiles class="files" />
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
