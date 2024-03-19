import { title } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "nuxt-swiper"],
  supabase: {
    redirect: false,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Teste tes acquis de développeur(se) avant de postuler",
      meta: [
        {
          name: "description",
          content: "Découvre les 16 Quiz dès maintenant gratuitement !",
        },
        {
          name: "og:title",
          content: "Teste tes acquis de développeur(se) avant de postuler",
        },
        {
          name: "og:description",
          content: "Découvre les 16 Quiz dès maintenant gratuitement !",
        },
        {
          name: "og:image",
          content:
            "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
        },
      ],
    },
  },
});
