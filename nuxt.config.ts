// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  devtools: { enabled: true },
  serverMiddleware: [
    // Add server middleware for handling API routes
    { path: '/api', handler: '~/api/apps/index.get.ts' },
    { path: '/api', handler: '~/api/apps/[id].get.ts' },
    { path: '/api', handler: '~/api/products/index.get.ts' },
    { path: '/api', handler: '~/api/products/[id].get.ts' }
  ],
  build: {
    rollupOptions: {
      external: ['nuxt3']
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/apps': { prerender: true },
    '/apps/**': { prerender: true },
    '/products': { swr: 3600 },
    '/products/**': { swr: 3600 },
    '/api/*': { cache: { maxAge: 300 } },
    '/api/apps/*': { cache: { maxAge: 300 } },
    '/api/products/*': { cache: { maxAge: 300 } },
  },
})
