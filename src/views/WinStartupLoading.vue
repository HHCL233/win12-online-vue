<script setup lang="ts">
import WinLoading from '@/components/WinLoading.vue'
import WinLogo from '@/components/WinLogo.vue'
</script>

<template>
  <div id="win-startuup-loading">
    <WinLogo class="win-startup-logo" />
    <WinLoading />
  </div>
</template>

<style scoped lang="scss">
#win-startuup-loading {
  width: 100%;
  height: 100%;
  background-color: black;
  cursor: none;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 128px;
  .win-startup-logo {
    width: 25%;
  }
}
</style>
