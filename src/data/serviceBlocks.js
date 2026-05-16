// Detailed service blocks shown on the Services / Category pages.
// `categories` lists which category slugs the block belongs to.
export const serviceBlocks = [
  {
    id: "block-hardware",
    icon: "Wrench",
    categories: ["laptop", "aksessuar"],
    translations: {
      uz: {
        title: "Uskuna ta'miri",
        items: [
          "Ekran almashtirish (LCD/LED)",
          "Klaviatura va touchpad ta'miri",
          "Batareya almashtirish va kalibrovka",
          "Quvvat porti va zaryad zanjiri ta'miri",
        ],
      },
      ru: {
        title: "Ремонт оборудования",
        items: [
          "Замена экрана (LCD/LED)",
          "Ремонт клавиатуры и тачпада",
          "Замена и калибровка батареи",
          "Ремонт разъёма питания и цепи зарядки",
        ],
      },
      en: {
        title: "Hardware repair",
        items: [
          "Screen replacement (LCD/LED)",
          "Keyboard and touchpad repair",
          "Battery replacement and calibration",
          "Power port and charging circuit repair",
        ],
      },
    },
  },
  {
    id: "block-board",
    icon: "Cpu",
    categories: ["laptop"],
    translations: {
      uz: {
        title: "Plata darajasida diagnostika",
        items: [
          "Quvvat bermaslik va qizib ketish holatlari",
          "Suyuqlikdan tozalash va tiklash",
          "BIOS va firmware sozlash",
          "Ta'mirdan oldin ma'lumot xavfsizligi tekshiruvi",
        ],
      },
      ru: {
        title: "Диагностика на уровне платы",
        items: [
          "Случаи отсутствия питания и перегрева",
          "Чистка после жидкости и восстановление",
          "Настройка BIOS и прошивки",
          "Проверка безопасности данных перед ремонтом",
        ],
      },
      en: {
        title: "Board-level diagnostics",
        items: [
          "No-power and overheating cases",
          "Liquid cleaning and recovery",
          "BIOS and firmware configuration",
          "Data safety check before repair",
        ],
      },
    },
  },
  {
    id: "block-software",
    icon: "Settings",
    categories: ["soft"],
    translations: {
      uz: {
        title: "Dasturiy yordam",
        items: [
          "OS qayta o'rnatish va optimizatsiya",
          "Virus va zararli dasturlarni tozalash",
          "Drayver va unumdorlik sozlamalari",
          "Zaxiralash va tiklash sozlamasi",
        ],
      },
      ru: {
        title: "Программная помощь",
        items: [
          "Переустановка ОС и оптимизация",
          "Очистка от вирусов и вредоносных программ",
          "Настройка драйверов и производительности",
          "Настройка резервного копирования и восстановления",
        ],
      },
      en: {
        title: "Software support",
        items: [
          "OS reinstall and optimization",
          "Virus and malware cleanup",
          "Driver and performance tuning",
          "Backup and recovery setup",
        ],
      },
    },
  },
  {
    id: "block-business",
    icon: "Briefcase",
    categories: ["laptop", "soft", "batareya", "aksessuar"],
    translations: {
      uz: {
        title: "Biznes qo'llab-quvvatlash",
        items: [
          "Kichik ofislar uchun texnik xizmat rejasi",
          "Tezkor javob va olib ketish xizmati",
          "Oylik profilaktik tekshiruvlar",
          "Ta'mir hisobotlari va hujjatlar",
        ],
      },
      ru: {
        title: "Бизнес-поддержка",
        items: [
          "План техобслуживания для малых офисов",
          "Быстрый ответ и услуга вывоза",
          "Ежемесячные профилактические проверки",
          "Отчёты о ремонте и документация",
        ],
      },
      en: {
        title: "Business support",
        items: [
          "Maintenance plan for small offices",
          "Fast response and pickup service",
          "Monthly preventive checks",
          "Repair reports and documentation",
        ],
      },
    },
  },
  {
    id: "block-battery",
    icon: "BatteryCharging",
    categories: ["batareya"],
    translations: {
      uz: {
        title: "Batareya va quvvat",
        items: [
          "Original batareya almashtirish",
          "Zaryadlovchi va adapter diagnostikasi",
          "Quvvat porti payvandlash",
          "Tok zanjiri va kontroller ta'miri",
        ],
      },
      ru: {
        title: "Батарея и питание",
        items: [
          "Замена оригинальной батареи",
          "Диагностика зарядки и адаптера",
          "Пайка разъёма питания",
          "Ремонт цепи питания и контроллера",
        ],
      },
      en: {
        title: "Battery & power",
        items: [
          "Original battery replacement",
          "Charger and adapter diagnostics",
          "Power port soldering",
          "Power circuit and controller repair",
        ],
      },
    },
  },
  {
    id: "block-accessory",
    icon: "Mouse",
    categories: ["aksessuar"],
    translations: {
      uz: {
        title: "Aksessuar va ehtiyot qismlar",
        items: [
          "Sumka, sichqoncha va klaviatura",
          "Adapter va kabellar",
          "SSD, RAM va ehtiyot qismlar",
          "O'rnatish va sozlash xizmati",
        ],
      },
      ru: {
        title: "Аксессуары и запчасти",
        items: [
          "Сумки, мыши и клавиатуры",
          "Адаптеры и кабели",
          "SSD, ОЗУ и запчасти",
          "Услуга установки и настройки",
        ],
      },
      en: {
        title: "Accessories & spare parts",
        items: [
          "Bags, mice and keyboards",
          "Adapters and cables",
          "SSD, RAM and spare parts",
          "Installation and setup service",
        ],
      },
    },
  },
];

export const getBlocksForCategory = (slug) =>
  serviceBlocks.filter((b) => b.categories.includes(slug));
