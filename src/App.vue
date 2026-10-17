<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { sleep } from './utils/time'

const router = useRouter()

onMounted(async () => {
  await sleep(400)
  router.push('/login')
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="pages">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
.pages-enter-active,
.pages-leave-active {
  transition: opacity 0.5s ease;
}

.pages-enter-from,
.pages-leave-to {
  opacity: 0;
}
</style>
