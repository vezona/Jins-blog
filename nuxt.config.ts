// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirect: false,
    // 暫時不使用 database types，避免警告
    types: false
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css'
  ],
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in'
    }
  },
  devServer: {
    port: 3000
  }
})
