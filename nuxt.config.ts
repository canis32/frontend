// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': '../app',
    '~': '../'
  },
  modules: [
    '@pinia/nuxt'
  ],
  serverDir: 'server',
  runtimeConfig: {
    apiKey: import.meta.env.NUXT_PRIVATE_KEY_FOR_STRAPI,
    public: {
      baseURL: import.meta.env.NUXT_PUBLIC_BASE_URL,
    },
  }
})
