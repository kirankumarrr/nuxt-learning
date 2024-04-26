// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/apps': { swr: true },
    '/apps/**': { swr: true },
    '/products': { swr: 3600 },
    '/products/**': { swr: 3600 },
  }
})
