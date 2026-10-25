import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const config = reactive({
    bgUrl: '/img/bg.webp',
  })

  return { config }
})
