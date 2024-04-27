// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  devtools: { enabled: true },
  serverMiddleware: [
    // Add server middleware for handling API routes
    { path: '/api', handler: '~/api/apps.get.ts' } // Adjust the path and handler as needed
  ],
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
