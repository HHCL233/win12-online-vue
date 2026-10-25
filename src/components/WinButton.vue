<script setup lang="ts"></script>

<template>
  <button class="win-button" src="/icon/logo.svg"><slot></slot></button>
</template>

<style scoped lang="scss">
@use '@/styles/config.scss' as config;

.win-button {
  @include config.useTheme('button');
  corner-shape: squircle;
  width: 64px;
  padding: 6px 12px;
  cursor: default;
  text-align: center;
  transition: 80ms;
  text-decoration: none;
  border: 3px transparent solid;
  height: 100%;
  line-height: 1.5;
  text-align: center;
  padding: 5.5px 8px;
  font-size: 15.8px;
  border-radius: var(--radius);
  background-color: var(--bg);
  color: var(--textColor);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 2px var(--shadowColor);
  &:hover {
    background-color: var(--hoverBg);
  }
  &:active {
    background-color: var(--activeBg);
  }
}
</style>
