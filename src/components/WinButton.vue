<script setup lang="ts"></script>

<template>
  <button class="win-button" src="/icon/logo.svg"><slot></slot></button>
</template>

<style scoped lang="scss">
.win-button {
  corner-shape: squircle;
  width: 64px;
  background-color: var(--button-bg);
  border-radius: var(--radius-3xl);
  padding: 6px 12px;
  cursor: default;
  text-align: center;
  transition: 80ms;
  color: var(--text);
  text-decoration: none;
  border: 3px transparent solid;
  height: 100%;
  line-height: 1.5;
  text-align: center;
  padding: 5.5px 8px;
  font-size: 15.8px;
  &:hover {
    border-color: var(--button-hover-border);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
}
</style>
