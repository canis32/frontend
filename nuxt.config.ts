// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': '../app',
    '~': '../'
  },
  modules: ['@pinia/nuxt', '@primevue/nuxt-module', ['nuxt-mail', {
    message: {
      to: 'd.kireenkov32rus@yandex.ru',
    },
    smtp: {
      service: 'yandex',
      auth: {
        user: 'd.kireenkov32rus@yandex.ru',
        pass: 'fwogtrwkitvsutwq',
      },
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      requireTLS: true,
    },
  }], 'nuxt-mail'],
  serverDir: 'server',
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['Paginator ', 'InputText', 'Button']
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
  runtimeConfig: {
    apiKey: import.meta.env.NUXT_PRIVATE_KEY_FOR_STRAPI,
    public: {
      baseURL: import.meta.env.NUXT_PUBLIC_BASE_URL,
    },
  }
})