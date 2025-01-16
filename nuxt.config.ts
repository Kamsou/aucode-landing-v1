export default defineNuxtConfig({
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/augalo/image/upload/",
    },
  },

  devtools: { enabled: false },
  ssr: true,

  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/image",
    "@vue-email/nuxt",
  ],
  supabase: {
    redirect: false,
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_ANON_KEY,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      title: "Aucode - Teste tes acquis de développeur·se avant de postuler",
      meta: [
        {
          name: "description",
          content: "Découvre nos Quiz dès maintenant gratuitement !",
        },
        {
          name: "og:title",
          content: "Teste tes acquis de développeur(se) avant de postuler",
        },
        {
          name: "og:description",
          content: "Découvre nos Quiz dès maintenant gratuitement !",
        },
        {
          name: "og:image",
          content:
            "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
        },
      ],
    },
  },

  compatibilityDate: "2025-01-16",
});