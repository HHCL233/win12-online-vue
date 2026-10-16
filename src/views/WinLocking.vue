<script setup lang="ts">
import WinButton from '@/components/WinButton.vue'
</script>

<template>
  <div id="win-locking">
    <div id="login-items">
      <img src="/icon/user.svg" class="user" />
      <span class="name">Administrator</span>
      <WinButton class="button">登录</WinButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
#win-locking {
  width: 100%;
  height: 100%;
  background-image: url('/img/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: 12px;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  #login-items {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    .button {
      height: 40px;
      width: 100px;
    }
    .user {
      width: 150px;
      height: 150px;
      background-color: #ddd;
      padding: 24px;
      box-sizing: border-box;
      border-radius: var(--radius-circle);
    }
    .name {
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 30px;
    }
  }
}
</style>
