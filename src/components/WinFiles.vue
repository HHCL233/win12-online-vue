<script setup lang="ts">
import type { Files } from '@/typed/file'
import { isOverlapping } from '@/utils/intersect'
import type { ComponentPublicInstance } from 'vue'
import { ref, useTemplateRef } from 'vue'

const props = defineProps<{
  layout?: 'details' | 'mediumIcons'
  files: Files
  isColumn?: boolean
}>()
const emit = defineEmits<{
  openFile: [id: string]
}>()
let originX = 0
let originY = 0
const isSelection = ref(false)
const startX = ref(0)
const startY = ref(0)
const selectionWidth = ref(0)
const selectionHeight = ref(0)
const selectionRef = useTemplateRef('selection')
const fileElData: Record<string, HTMLDivElement> = {}
let selectId: string[] = []

const checkFileSelect = () => {
  selectId = []
  // 检测选择框内存在的文件
  for (const [id, el] of Object.entries(fileElData)) {
    const rect = el.getBoundingClientRect()
    if (
      isOverlapping(rect, {
        top: startY.value,
        left: startX.value,
        height: selectionHeight.value,
        width: selectionWidth.value,
        x: startX.value,
        y: startY.value,
        bottom: startY.value + selectionHeight.value,
        right: startX.value + selectionWidth.value,
        toJSON: () => {},
      })
    ) {
      selectId.push(id)
    }
  }
}

const onPointerDown = (event: PointerEvent) => {
  isSelection.value = true
  startX.value = event.clientX
  startY.value = event.clientY
  originX = event.clientX
  originY = event.clientY
  selectionWidth.value = 0
  selectionHeight.value = 0

  // 检测选择框内存在的文件
  checkFileSelect()
}

const onPointerMove = (event: PointerEvent) => {
  if (!isSelection.value || !selectionRef.value) {
    return
  }
  const currentX = event.clientX
  const currentY = event.clientY

  // 设置选择框开始位置和大小
  startX.value = Math.min(originX, currentX)
  startY.value = Math.min(originY, currentY)
  selectionWidth.value = Math.abs(currentX - originX)
  selectionHeight.value = Math.abs(currentY - originY)

  if (selectionWidth.value >= 10 || selectionHeight.value >= 10) {
    selectionRef.value.setPointerCapture(event.pointerId)
  }

  // 检测选择框内存在的文件
  checkFileSelect()
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

const registerPosition = (el: Element | ComponentPublicInstance | null, id: string) => {
  if (!(el instanceof HTMLDivElement)) return
  // 将元素注册到对象内
  fileElData[id] = el
}
</script>

<template>
  <div
    class="win-files"
    :class="[props.layout ?? 'details', isColumn ? 'column' : '']"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
  >
    <div
      class="win-file"
      :class="[props.layout ?? 'details', selectId.includes(file.id) ? 'select' : '']"
      v-for="file in props.files"
      :key="`${file.id}-${props.layout}`"
      :ref="(el) => registerPosition(el, file.id)"
      tabindex="1"
      @dblclick="emit(file.id)"
    >
      <img class="icon" :src="file.icon" draggable="false" />
      <span class="name">{{ file.name }}</span>
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
  overflow: hidden;
  gap: 4px;
  &.column {
    grid-auto-flow: column;
  }
  &.details {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 40px);
  }
  &.mediumIcons {
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 120px);
  }
  .win-file {
    display: flex;
    align-items: center;
    &.details {
      .icon {
        height: 100%;
        width: auto;
      }
      flex-direction: row;
    }
    &.mediumIcons {
      .icon {
        width: 100%;
        height: auto;
      }
      text-align: center;
      flex-direction: column;
    }
    &.select {
      border: 2px solid #2983ccbd;
      background-color: #2983cc67;
    }
    .icon {
      aspect-ratio: 1/1;
    }
    .name {
      font-size: 14px;
    }
    border: 2px solid transparent;
    height: 100%;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    gap: 4px;
    border-radius: 6px;
  }
  .files-selection {
    border: 2px solid #2983cc;
    background-color: #ffffff20;
    border-radius: var(--radius-sm);
    position: fixed;
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
