// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "nuxt-swiper"],
  supabase: {
    redirect: false,
  },
});
