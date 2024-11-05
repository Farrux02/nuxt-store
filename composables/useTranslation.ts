export function useTranslation() {
  const { locale } = useI18n();

  const availableLangs = [
    { name: "Русский", code: "ru", icon: "/images/russian_flag.svg" },
    { name: "O'zbekcha", code: "uz", icon: "/images/uzb_flag.svg" },
  ];

  const changeLang = (lang: string) => {
    locale.value = lang;
    localStorage.setItem("lang", lang);
  };

  return { changeLang, availableLangs, locale };
}
