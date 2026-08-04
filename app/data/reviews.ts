export type CustomerReview = {
  author: string;
  date: string;
  dateLabel: string;
  rating: 5;
  category: "repair" | "catalog";
  text: string;
  sourceUrl: string;
};

// Краткие пересказы опубликованных отзывов. У каждой карточки есть ссылка на
// первоисточник, чтобы посетитель мог сверить полный текст на Яндекс Картах.
export const customerReviews: CustomerReview[] = [
  {
    author: "Виталий С.",
    date: "2024-04-15",
    dateLabel: "15 апреля 2024",
    rating: 5,
    category: "repair",
    text: "Быстрый выезд и ремонт водонагревателя — работа заняла меньше часа.",
    sourceUrl: "https://yandex.ru/maps/user/h998puph9bdr3qzubb06g4jxu4",
  },
  {
    author: "Сергей С.",
    date: "2024-09-26",
    dateLabel: "26 сентября 2024",
    rating: 5,
    category: "repair",
    text: "После рекомендации проверить насос тёплый пол снова начал прогреваться.",
    sourceUrl:
      "https://yandex.ru/maps/org/165084897107/reviews?reviews%5BpublicId%5D=0gzh517au8kdmxda5djtanxy5m&si=g4azw244dmexmpbdbhh69wx7dg&utm_source=review",
  },
  {
    author: "Екатерина",
    date: "2024-07-09",
    dateLabel: "9 июля 2024",
    rating: 5,
    category: "repair",
    text: "Обращается повторно: отмечает вежливость мастеров и аккуратную работу.",
    sourceUrl:
      "https://yandex.ru/maps/org/165084897107/reviews?reviews%5BpublicId%5D=t2x5157xhk77wqyrfgx8hmxvh0&si=g4azw244dmexmpbdbhh69wx7dg&utm_source=review",
  },
  {
    author: "Виктория Б.",
    date: "2024-08-19",
    dateLabel: "19 августа 2024",
    rating: 5,
    category: "catalog",
    text: "Отмечает широкий ассортимент отопительного оборудования и понятную подачу каталога.",
    sourceUrl:
      "https://yandex.ru/maps/org/165084897107/reviews?reviews%5BpublicId%5D=cjwwmgw5xnmy7162rd3hftam50&si=g4azw244dmexmpbdbhh69wx7dg&utm_source=review",
  },
];

export const yandexMapsReviewsUrl =
  "https://yandex.ru/maps/org/gazmaster/165084897107/reviews/";
