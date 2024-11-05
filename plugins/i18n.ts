// plugins/i18n.ts
import { createI18n } from "vue-i18n";

import ru from "~/locales/ru.json";
import uz from "~/locales/uz.json";

const i18n = createI18n({
  legacy: false,
  locale:"ru",
  fallbackLocale: "ru",
  messages: {
    ru,
    uz,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
  if (import.meta.client) {
    const savedLocale = localStorage.getItem("lang") || "ru";
    i18n.global.locale.value = savedLocale;
  }
});
