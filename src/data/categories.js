// Each category has accessories/items, every item has a price (in so'm / UZS).
export const categories = [
  {
    slug: "aksessuar",
    icon: "Mouse",
    translations: {
      uz: {
        title: "Akksessuar va texnikalar",
        description: "Sumka, sichqoncha, klaviatura, adapter va kundalik texnika aksessuarlari.",
      },
      ru: {
        title: "Аксессуары и техника",
        description: "Сумки, мыши, клавиатуры, адаптеры и повседневные технические аксессуары.",
      },
      en: {
        title: "Accessories & gadgets",
        description: "Bags, mice, keyboards, adapters and everyday tech accessories.",
      },
    },
    items: [
      {
        id: "acc-mouse",
        price: 80000,
        translations: {
          uz: { name: "Simsiz sichqoncha" },
          ru: { name: "Беспроводная мышь" },
          en: { name: "Wireless mouse" },
        },
      },
      {
        id: "acc-keyboard",
        price: 120000,
        translations: {
          uz: { name: "Klaviatura" },
          ru: { name: "Клавиатура" },
          en: { name: "Keyboard" },
        },
      },
      {
        id: "acc-bag",
        price: 150000,
        translations: {
          uz: { name: "Noutbuk sumkasi" },
          ru: { name: "Сумка для ноутбука" },
          en: { name: "Laptop bag" },
        },
      },
      {
        id: "acc-adapter",
        price: 200000,
        translations: {
          uz: { name: "Quvvat adapteri" },
          ru: { name: "Адаптер питания" },
          en: { name: "Power adapter" },
        },
      },
    ],
  },
  {
    slug: "laptop",
    icon: "Laptop",
    translations: {
      uz: {
        title: "Laptop PC",
        description: "Noutbuk, kompyuter va ularning asosiy ehtiyot qismlari bo'yicha xizmatlar.",
      },
      ru: {
        title: "Laptop PC",
        description: "Услуги по ноутбукам, компьютерам и их основным комплектующим.",
      },
      en: {
        title: "Laptop PC",
        description: "Services for laptops, computers and their core components.",
      },
    },
    items: [
      {
        id: "lap-ssd",
        price: 450000,
        translations: {
          uz: { name: "SSD 256GB o'rnatish" },
          ru: { name: "Установка SSD 256GB" },
          en: { name: "SSD 256GB install" },
        },
      },
      {
        id: "lap-ram",
        price: 350000,
        translations: {
          uz: { name: "RAM 8GB o'rnatish" },
          ru: { name: "Установка ОЗУ 8GB" },
          en: { name: "RAM 8GB install" },
        },
      },
      {
        id: "lap-screen",
        price: 900000,
        translations: {
          uz: { name: "Ekran (matritsa) almashtirish" },
          ru: { name: "Замена экрана (матрицы)" },
          en: { name: "Screen (matrix) replacement" },
        },
      },
      {
        id: "lap-keyboard",
        price: 250000,
        translations: {
          uz: { name: "Klaviatura almashtirish" },
          ru: { name: "Замена клавиатуры" },
          en: { name: "Keyboard replacement" },
        },
      },
    ],
  },
  {
    slug: "soft",
    icon: "Settings",
    translations: {
      uz: {
        title: "Soft",
        description: "Windows, drayverlar, antivirus, dasturlar va tizim sozlamalari.",
      },
      ru: {
        title: "Soft",
        description: "Windows, драйверы, антивирус, программы и настройки системы.",
      },
      en: {
        title: "Software",
        description: "Windows, drivers, antivirus, programs and system setup.",
      },
    },
    items: [
      {
        id: "soft-win",
        price: 100000,
        translations: {
          uz: { name: "Windows o'rnatish" },
          ru: { name: "Установка Windows" },
          en: { name: "Windows installation" },
        },
      },
      {
        id: "soft-antivirus",
        price: 80000,
        translations: {
          uz: { name: "Antivirus o'rnatish" },
          ru: { name: "Установка антивируса" },
          en: { name: "Antivirus installation" },
        },
      },
      {
        id: "soft-drivers",
        price: 60000,
        translations: {
          uz: { name: "Drayverlarni sozlash" },
          ru: { name: "Настройка драйверов" },
          en: { name: "Driver setup" },
        },
      },
      {
        id: "soft-optimize",
        price: 150000,
        translations: {
          uz: { name: "To'liq optimizatsiya" },
          ru: { name: "Полная оптимизация" },
          en: { name: "Full optimization" },
        },
      },
    ],
  },
  {
    slug: "batareya",
    icon: "BatteryCharging",
    translations: {
      uz: {
        title: "Batareya zaryadlagichlar",
        description: "Batareya, zaryadlovchi, quvvat porti va tok zanjiri muammolari.",
      },
      ru: {
        title: "Батареи и зарядки",
        description: "Батареи, зарядные устройства, разъёмы питания и проблемы цепи питания.",
      },
      en: {
        title: "Batteries & chargers",
        description: "Batteries, chargers, power ports and power-circuit issues.",
      },
    },
    items: [
      {
        id: "bat-replace",
        price: 400000,
        translations: {
          uz: { name: "Batareya almashtirish" },
          ru: { name: "Замена батареи" },
          en: { name: "Battery replacement" },
        },
      },
      {
        id: "bat-charger",
        price: 220000,
        translations: {
          uz: { name: "Original zaryadlovchi" },
          ru: { name: "Оригинальное зарядное" },
          en: { name: "Original charger" },
        },
      },
      {
        id: "bat-port",
        price: 180000,
        translations: {
          uz: { name: "Quvvat porti ta'miri" },
          ru: { name: "Ремонт разъёма питания" },
          en: { name: "Power port repair" },
        },
      },
      {
        id: "bat-circuit",
        price: 300000,
        translations: {
          uz: { name: "Tok zanjiri ta'miri" },
          ru: { name: "Ремонт цепи питания" },
          en: { name: "Power circuit repair" },
        },
      },
    ],
  },
];

export const getCategory = (slug) =>
  categories.find((c) => c.slug === slug) || null;
