<script setup lang="ts">
import Dismiss20RegularIcon from '@iconify-vue/fluent/dismiss-20-regular'
import Maximize20RegularIcon from '@iconify-vue/fluent/maximize-20-regular'
import Minimize20RegularIcon from '@iconify-vue/fluent/minimize-20-regular'
import { computed, ref, useTemplateRef } from 'vue'

const props = defineProps<{
  icon: string
  title: string
}>()
const emit = defineEmits<{
  close: []
}>()
const lastMousePosition = {
  x: 0,
  y: 0,
}
const windowX = ref(0)
const windowY = ref(0)
// 计算窗口位置百分比
const windowXPercentage = computed(
  () => `${(windowX.value / document.documentElement.clientWidth) * 100}%`,
)
const windowYPercentage = computed(
  () => `${(windowY.value / document.documentElement.clientHeight) * 100}%`,
)
let startDrag = false
const windowTitbar = useTemplateRef('windowTitbar')

const startDragWindow = (event: PointerEvent) => {
  // 设置窗口位置和鼠标位置
  if (!windowTitbar.value) return
  windowTitbar.value.setPointerCapture(event.pointerId)
  const rect = windowTitbar.value.getBoundingClientRect()
  startDrag = true
  lastMousePosition.x = event.clientX
  lastMousePosition.y = event.clientY
  windowX.value = rect.x
  windowY.value = rect.y
}

const dragWindow = (event: PointerEvent) => {
  // 根据上一次鼠标位置修改窗口位置
  if (!startDrag || !windowTitbar.value) return
  windowX.value += event.clientX - lastMousePosition.x
  windowY.value += event.clientY - lastMousePosition.y
  lastMousePosition.x = event.clientX
  lastMousePosition.y = event.clientY
}

const endDragWindow = () => {
  startDrag = false
}
</script>

<template>
  <div class="win-window">
    <div
      class="titbar"
      ref="windowTitbar"
      @pointerup="endDragWindow"
      @pointerdown="startDragWindow"
      @pointermove="dragWindow"
    >
      <img class="icon" :src="props.icon" />
      <span class="title">{{ props.title }}</span>
      <div class="titbar-control">
        <div tabindex="1" class="titbar-btn">
          <Minimize20RegularIcon class="btn-icon" height="1em" />
        </div>
        <div tabindex="1" class="titbar-btn">
          <Maximize20RegularIcon class="btn-icon" height="1em" />
        </div>
        <div tabindex="1" class="titbar-btn close-btn" @click="emit('close')">
          <Dismiss20RegularIcon class="btn-icon" height="1em" />
        </div>
      </div>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<style scoped lang="scss">
.win-window {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 600px;
  height: 400px;
  top: v-bind(windowYPercentage);
  left: v-bind(windowXPercentage);
  background-color: #ffffffc0;
  backdrop-filter: blur(8px);
  box-shadow: 3px 3px 20px 3px #22222230;
  border-radius: 8px;
  overflow: hidden;
  .titbar {
    height: 38px;
    padding: 0 0 0 8px;
    color: black;
    display: flex;
    align-items: center;
    gap: 8px;
    .title {
      flex: 1;
      font-size: 15px;
    }
    .icon {
      height: 24px;
      width: 24px;
    }
    .titbar-control {
      display: flex;
      align-items: center;
      height: 100%;
      .titbar-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 45px;
        border-radius: 4px;
        transition: background-color 100ms;
        pointer-events: all;
        &:hover {
          background-color: #1111110f;
          &.close-btn {
            background-color: #d80d1c;
            color: white;
          }
        }
        .btn-icon {
          font-size: 16px;
        }
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
