<script setup lang="ts"></script>

<template>
  <div class="win-dock">
    <div class="dock-zone">
      <div class="dock-btn" tabindex="1">
        <img src="/icon/logo.svg" class="icon" :draggable="false" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.win-dock {
  height: 40px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  .dock-zone {
    outline: 1px solid #99999950;
    box-shadow:
      0 1px 2px #44444460,
      0px 3px 25px 1px #22222230;
    display: flex;
    background-color: #f7f7f7bb;
    border-radius: 10px;
    backdrop-filter: blur(20px) saturate(2);
    align-items: center;
    pointer-events: all;
    transition: background-color 0.3s;
    &:hover {
      background-color: #ebebebbb;
    }
    .dock-btn {
      padding: 4px;
      box-sizing: border-box;
      aspect-ratio: 1/1;
      height: 100%;
      transition: transform 150ms;
      &:active {
        transform: scale(0.8);
      }
      .icon {
        user-select: none;
      }
    }
  }
}
</style>
