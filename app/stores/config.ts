import { defineStore } from 'pinia'

interface Res {
  [key: string]: any
}

export const useConfigStore = defineStore('config', () => {
  const env = ref<Res>({})

  async function getEnv() {
      const resp: Res = await useFetch('/api/config')
      env.value = resp.data.value
  }

  return {
      env,
      getEnv
  }
})