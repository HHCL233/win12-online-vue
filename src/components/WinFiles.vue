<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const props = defineProps<{
  layout?: 'details' | 'mediumIcons'
}>()
let originX = 0
let originY = 0
const isSelection = ref(false)
const startX = ref(0)
const startY = ref(0)
const selectionWidth = ref(0)
const selectionHeight = ref(0)
const selectionRef = useTemplateRef('selection')

const onPointerDown = (event: PointerEvent) => {
  isSelection.value = true
  startX.value = event.clientX
  startY.value = event.clientY
  originX = event.clientX
  originY = event.clientY
  selectionWidth.value = 0
  selectionHeight.value = 0
}

const onPointerMove = (event: PointerEvent) => {
  if (!isSelection.value || !selectionRef.value) {
    return
  }
  const currentX = event.clientX
  const currentY = event.clientY

  startX.value = Math.min(originX, currentX)
  startY.value = Math.min(originY, currentY)
  selectionWidth.value = Math.abs(currentX - originX)
  selectionHeight.value = Math.abs(currentY - originY)

  if (selectionWidth.value >= 10 || selectionHeight.value >= 10) {
    selectionRef.value.setPointerCapture(event.pointerId)
  }
}

const onPointerUp = () => {
  if (!selectionRef.value) return

  isSelection.value = false
  startX.value = 0
  startY.value = 0
  originY = 0
  originX = 0
  selectionWidth.value = 0
  selectionHeight.value = 0
}
</script>

<template>
  <div
    class="win-files"
    :class="props.layout ?? 'details'"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
  >
    <div class="win-file" :class="props.layout ?? 'details'" v-for="value in 5" :key="value">
      <div class="icon" />
      <span class="name">Program Files</span>
    </div>
    <div
      class="files-selection"
      ref="selection"
      :style="{
        '--start-x': `${startY}px`,
        '--start-y': `${startX}px`,
        '--selection-width': `${selectionWidth}px`,
        '--selection-heigh': `${selectionHeight}px`,
        '--opacity': isSelection ? 1 : 0,
      }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/config.scss' as config;

.win-files {
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
  grid-auto-flow: column;
  &.details {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 36px);
  }
  &.mediumIcons {
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 80px);
  }
  .win-file {
    display: flex;
    align-items: center;
    &.details {
      flex-direction: row;
    }
    &.mediumIcons {
      text-align: center;
      flex-direction: column;
    }
    height: 100%;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    gap: 4px;
    .icon {
      height: 100%;
      aspect-ratio: 1/1;
      background-image: url('/icon/folder.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
    .name {
      font-size: 14px;
    }
  }
  .files-selection {
    border: 2px solid #2983cc;
    background-color: #ffffff20;
    border-radius: var(--radius-sm);
    position: absolute;
    top: var(--start-x);
    left: var(--start-y);
    width: var(--selection-width);
    height: var(--selection-heigh);
    z-index: 1;
    pointer-events: none;
    opacity: var(--opacity);
  }
}
</style>
