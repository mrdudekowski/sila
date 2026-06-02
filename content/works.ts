export type WorkCategory = "Сайты" | "Магазины" | "Приложения" | "Брендинг";

export type Work = {
  slug: string;
  title: string;
  category: WorkCategory;
  shortDescription: string;
  fullDescription: string;
  task: string;
  solution: string;
  result: string;
  image: string;
  gallery: string[];
  featured: boolean;
  href?: string;
};

export const workCategories: Array<WorkCategory | "Все"> = [
  "Все",
  "Сайты",
  "Магазины",
  "Приложения",
  "Брендинг",
];

export const works: Work[] = [
  {
    slug: "bizon",
    title: "BIZON",
    category: "Брендинг",
    shortDescription:
      "Цифровая оболочка бренда большегрузных шин: айдентика, продуктовая подача и структура каталога.",
    fullDescription:
      "Комплексная цифровая среда для промышленного бренда: от визуального языка до e-commerce логики.",
    task: "Собрать доверие к технологичному продукту и упростить путь к покупке.",
    solution:
      "Айдентика, каталог, продуктовые карточки и контентная иерархия в единой системе.",
    result: "Цельная оболочка бренда с ясной структурой каталога.",
    image: "/images/works/bizon-placeholder.svg",
    gallery: [
      "/images/works/bizon-placeholder.svg",
      "/images/works/placeholder-2.svg",
      "/images/works/placeholder-3.svg",
    ],
    featured: true,
    href: "/portfolio#bizon",
  },
  {
    slug: "sever",
    title: "Север",
    category: "Сайты",
    shortDescription: "Корпоративный сайт с акцентом на структуру и спокойную подачу. [placeholder]",
    fullDescription: "Временный кейс для демонстрации сетки портфолио.",
    task: "Представить компанию без визуального шума.",
    solution: "Модульная типографика и контурная сетка.",
    result: "Собранный digital-образ.",
    image: "/images/works/placeholder-1.svg",
    gallery: ["/images/works/placeholder-1.svg"],
    featured: true,
  },
  {
    slug: "kontur",
    title: "Контур",
    category: "Приложения",
    shortDescription: "Интерфейсная система для внутренних процессов. [placeholder]",
    fullDescription: "Временный кейс — заменить реальными материалами.",
    task: "Упростить рабочие сценарии команды.",
    solution: "UI-система с ясной иерархией.",
    result: "Понятный инструмент без перегруза.",
    image: "/images/works/placeholder-2.svg",
    gallery: ["/images/works/placeholder-2.svg"],
    featured: true,
  },
  {
    slug: "vkraynosti",
    title: "Вкрайности",
    category: "Магазины",
    shortDescription: "E-commerce с акцентом на продукт и доверие. [placeholder]",
    fullDescription: "Временный кейс — заменить реальными материалами.",
    task: "Связать эстетику и продажу.",
    solution: "Каталог, карточки, фильтры.",
    result: "Магазин с характером бренда.",
    image: "/images/works/placeholder-3.svg",
    gallery: ["/images/works/placeholder-3.svg"],
    featured: false,
  },
  {
    slug: "mera",
    title: "Мера",
    category: "Брендинг",
    shortDescription: "Айдентика и цифровая оболочка сервиса. [placeholder]",
    fullDescription: "Временный кейс — заменить реальными материалами.",
    task: "Сформировать узнаваемый характер.",
    solution: "Визуальная система и интерфейсные правила.",
    result: "Собранный бренд в digital.",
    image: "/images/works/placeholder-4.svg",
    gallery: ["/images/works/placeholder-4.svg"],
    featured: false,
  },
  {
    slug: "osnova",
    title: "Основа",
    category: "Сайты",
    shortDescription: "Лендинг с фокусом на смысл и конверсию. [placeholder]",
    fullDescription: "Временный кейс — заменить реальными материалами.",
    task: "Донести ценность продукта быстро.",
    solution: "Сценарная структура и точные акценты.",
    result: "Ясная точка входа для клиента.",
    image: "/images/works/placeholder-5.svg",
    gallery: ["/images/works/placeholder-5.svg"],
    featured: false,
  },
];

export const featuredWorks = works.filter((w) => w.featured);
