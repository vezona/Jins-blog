// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  experimental: {
    inlineSSRStyles: false
  },
  features: {
    inlineStyles: true
  },
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in'
    }
  }
})
