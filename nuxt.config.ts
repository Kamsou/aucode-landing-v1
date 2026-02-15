export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/augalo/image/upload/",
    },
  },

  devtools: { enabled: false },
  ssr: true,

  css: ["~/assets/css/tailwind.css"],

  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
  supabase: {
    redirect: false,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Aucode | Prepare tes entretiens dev en confiance",
      meta: [
        {
          name: "description",
          content:
            "Les entretiens te stressent ? Prepare-toi a ton rythme avec des quiz tech et soft skills conçus pour les devs juniors. +32 quiz gratuits, front-end, back-end et culture tech.",
        },
        {
          name: "keywords",
          content:
            "aucode, quiz dev, entretien developpeur, confiance en soi, syndrome imposteur, dev junior, soft skills, front-end, back-end, preparation entretien",
        },
        { name: "author", content: "Aucode" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#F2F2F2" },
        { "http-equiv": "content-language", content: "fr" },
        { name: "geo.region", content: "FR" },
        { name: "geo.placename", content: "France" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://aucode.tech" },
        { property: "og:site_name", content: "Aucode" },
        { property: "og:locale", content: "fr_FR" },
        {
          property: "og:title",
          content: "Aucode | Prepare tes entretiens dev en confiance",
        },
        {
          property: "og:description",
          content:
            "Quiz tech et soft skills pour les devs qui veulent gagner en confiance. +32 quiz gratuits pour preparer tes entretiens.",
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@aucode_app" },
        {
          name: "twitter:title",
          content: "Aucode | Prepare tes entretiens dev en confiance",
        },
        {
          name: "twitter:description",
          content:
            "Quiz tech et soft skills pour les devs qui veulent gagner en confiance. +32 quiz gratuits pour preparer tes entretiens.",
        },
        {
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
        },
      ],
      link: [
        { rel: "canonical", href: "https://aucode.tech" },
        { rel: "alternate", hreflang: "fr", href: "https://aucode.tech" },
        { rel: "alternate", hreflang: "x-default", href: "https://aucode.tech" },
      ],
    },
  },

  compatibilityDate: "2026-02-15",
});
