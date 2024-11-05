// server/api/ads.ts

import { IAd } from "~/types/ad";

export default defineEventHandler(() => {
  const ads: IAd[] = [
    {
      id: 1,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Corneliani Diamond for him edition.",
      date: "Вчера, 19:20",
      phoneNumber: "+998 71 200 70 07",
      price: 2599000,
      currency: "UZS",
    },
    {
      id: 2,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Armani для мужчин",
      date: "Вчера, 18:00",
      phoneNumber: "+998 71 200 80 08",
      price: 1800000,
      currency: "UZS",
    },
    {
      id: 3,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Шляпа Gucci летняя коллекция",
      date: "Сегодня, 10:30",
      phoneNumber: "+998 71 200 90 09",
      price: 3200000,
      currency: "UZS",
    },
    {
      id: 4,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Самарканд",
      title: "Кепка Adidas для занятий спортом",
      date: "Сегодня, 08:20",
      phoneNumber: "+998 71 200 10 10",
      price: 1200000,
      currency: "UZS",
    },
    {
      id: 5,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Бухара",
      title: "Шляпа Fendi стильная модель",
      date: "Позавчера, 15:30",
      phoneNumber: "+998 71 200 20 20",
      price: 2800000,
      currency: "UZS",
    },
    {
      id: 6,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Шляпа Versace классическая",
      date: "Позавчера, 14:15",
      phoneNumber: "+998 71 200 30 30",
      price: 3500000,
      currency: "UZS",
    },
    {
      id: 7,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Polo Ralph Lauren",
      date: "Вчера, 12:40",
      phoneNumber: "+998 71 200 40 40",
      price: 2300000,
      currency: "UZS",
    },
    {
      id: 8,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Nike для активного отдыха",
      date: "Сегодня, 09:15",
      phoneNumber: "+998 71 200 50 50",
      price: 2100000,
      currency: "UZS",
    },
    {
      id: 9,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Lacoste премиум-класса",
      date: "Сегодня, 11:00",
      phoneNumber: "+998 71 200 60 60",
      price: 2700000,
      currency: "UZS",
    },
    {
      id: 10,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Шляпа Chanel эксклюзивная модель",
      date: "Позавчера, 16:30",
      phoneNumber: "+998 71 200 70 70",
      price: 3800000,
      currency: "UZS",
    },
    {
      id: 11,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Шляпа Dior летняя коллекция",
      date: "Вчера, 14:20",
      phoneNumber: "+998 71 200 80 80",
      price: 3400000,
      currency: "UZS",
    },
    {
      id: 12,
      imageUrl:
        "https://images.prom.ua/2579830244_w1280_h640_bejsbolka-blajzer-kepka.jpg",
      location: "г. Ташкент",
      title: "Кепка Balenciaga с логотипом",
      date: "Сегодня, 08:45",
      phoneNumber: "+998 71 200 90 90",
      price: 3000000,
      currency: "UZS",
    },
  ];

  return { ads };
});
