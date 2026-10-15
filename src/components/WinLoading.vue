<script setup lang="ts"></script>

<template>
  <svg class="win-loading" width="50px" height="50px" viewBox="0 0 16 16">
    <circle class="win-loading-circle" cx="8px" cy="8px" r="6px"></circle>
  </svg>
</template>

<style scoped lang="scss">
.win-loading {
  .win-loading-circle {
    stroke: #fff;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    animation: spin-infinite 2.5s linear 0s infinite normal none running;
    transform-origin: 50% 50%;
    transition: all 0.2s ease-in-out 0s;
    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0px, 44px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 22px, 22px;
        transform: rotate(450deg);
      }
      to {
        stroke-dasharray: 0px, 44px;
        transform: rotate(3turn);
      }
    }
  }
}
</style>
