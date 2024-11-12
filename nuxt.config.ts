// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
    preset: process.env.NETLIFY ? "netlify" : process.env.VERCEL ? "vercel" : "node"
  },
  app: {
    baseURL: "/",

    head: {
      title: "Бесплатные объявления - Покупка, продажа, аренда товаров и услуг",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "На нашем сайте вы найдете тысячи объявлений о покупке, продаже и аренде товаров и услуг по всей стране. Удобный поиск, актуальные предложения и возможность легко подать свое объявление!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "объявления, продажа, покупка, аренда, услуги, товары, автомобили, недвижимость, работа, электроника, мода, детские товары",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Бесплатные объявления - Покупка, продажа, аренда товаров и услуг",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "На нашем сайте вы найдете тысячи объявлений о покупке, продаже и аренде товаров и услуг по всей стране. Удобный поиск, актуальные предложения и возможность легко подать свое объявление!",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            "Бесплатные объявления - Покупка, продажа, аренда товаров и услуг",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "На нашем сайте вы найдете тысячи объявлений о покупке, продаже и аренде товаров и услуг по всей стране. Удобный поиск, актуальные предложения и возможность легко подать свое объявление!",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/default-main-image.jpg",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          hid: "author",
          name: "author",
          content: "77.uz",
        },
      ],
    },
  },
  ssr: true,
});
