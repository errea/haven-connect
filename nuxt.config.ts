// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: true,
  tailwindcss: {
    // Options
  },
  plugins: ['~/plugins/lucide.ts', '~/plugins/supabase.client.ts'],
})
