// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxt/icon",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  icon: {
    serverBundle: {
      collections: ["tabler"],
    },
  },
  nitro: {
    preset: process.env.NETLIFY ? "netlify" : "node",
    externals: {
      inline: [
        "nitropack/dist/presets/netlify/legacy/runtime/_deno-env-polyfill",
      ],
    },
  },
  app: {
    baseURL: "/",
  },
  ssr: false,
});
