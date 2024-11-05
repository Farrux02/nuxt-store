export default defineEventHandler(() => {
  const categories = [
    {
      id: 1,
      name: "Для мужчин",
      adCount: 1000,
      icon: "/images/woman_icon.svg",
      subcategories: [
        { id: 1, name: "Ремень" },
        { id: 2, name: "Часы" },
        { id: 3, name: "Обувь" },
        { id: 4, name: "Куртки" },
        { id: 5, name: "Костюмы" },
      ],
    },
    {
      id: 2,
      name: "Для женщин",
      adCount: 1500,
      icon: "/images/beauty_icon.svg",
      subcategories: [
        { id: 1, name: "Сумки" },
        { id: 2, name: "Обувь" },
        { id: 3, name: "Платья" },
        { id: 4, name: "Аксессуары" },
        { id: 5, name: "Ювелирные изделия" },
      ],
    },
    {
      id: 3,
      name: "Электроника",
      adCount: 2000,
      icon: "/images/woman_icon.svg",
      subcategories: [
        { id: 1, name: "Смартфоны" },
        { id: 2, name: "Ноутбуки" },
        { id: 3, name: "Наушники" },
        { id: 4, name: "Телевизоры" },
        { id: 5, name: "Камеры" },
      ],
    },
    {
      id: 4,
      name: "Для детей",
      adCount: 800,
      icon: "/images/beauty_icon.svg",
      subcategories: [
        { id: 1, name: "Игрушки" },
        { id: 2, name: "Одежда" },
        { id: 3, name: "Обувь" },
        { id: 4, name: "Книги" },
        { id: 5, name: "Рюкзаки" },
      ],
    },
    {
      id: 5,
      name: "Дом и сад",
      adCount: 1200,
      icon: "/images/woman_icon.svg",
      subcategories: [
        { id: 1, name: "Мебель" },
        { id: 2, name: "Садовые инструменты" },
        { id: 3, name: "Посуда" },
        { id: 4, name: "Декор" },
        { id: 5, name: "Освещение" },
      ],
    },
    {
      id: 6,
      name: "Авто",
      adCount: 1800,
      icon: "/images/beauty_icon.svg",
      subcategories: [
        { id: 1, name: "Шины" },
        { id: 2, name: "Аксессуары" },
        { id: 3, name: "Масла и жидкости" },
        { id: 4, name: "Автоэлектроника" },
        { id: 5, name: "Салон" },
      ],
    },
    {
      id: 7,
      name: "Здоровье и красота",
      adCount: 900,
      icon: "/images/woman_icon.svg",
      subcategories: [
        { id: 1, name: "Косметика" },
        { id: 2, name: "Парфюмерия" },
        { id: 3, name: "Средства для волос" },
        { id: 4, name: "Средства для ухода" },
        { id: 5, name: "Массаж" },
      ],
    },
    {
      id: 8,
      name: "Спорт и отдых",
      adCount: 1100,
      icon: "/images/beauty_icon.svg",
      subcategories: [
        { id: 1, name: "Фитнес" },
        { id: 2, name: "Охота и рыбалка" },
        { id: 3, name: "Туризм" },
        { id: 4, name: "Велоспорт" },
        { id: 5, name: "Спортивная одежда" },
      ],
    },
  ];

  return { categories };
});
