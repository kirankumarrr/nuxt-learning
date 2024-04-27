
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    rollupOptions: {
      external: ['nuxt3']
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/apps': { swr: 3600 },
    '/apps/**': { swr: 3600 },
    '/products': { swr: 3600 },
    '/products/**': { swr: 3600 },
    '/api/*': { cache: { maxAge: 300 } },
  },
})
