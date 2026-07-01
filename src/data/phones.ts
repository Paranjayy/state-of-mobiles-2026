export type Phone = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  tags: string[];
  highlightTags?: string[];
  specs: {
    display: string;
    processor: string;
    ramStorage: string;
    camera: string;
    battery: string;
    software: string;
  };
  verdict: string;
  pickFor?: "mom" | "cousin";
  pickLabel?: string;
};

export type PhoneCategory = {
  id: string;
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  phones: Phone[];
};

export const categories: PhoneCategory[] = [
  {
    id: "budget",
    tag: "Under ₹15,000",
    title: "Budget ",
    titleHighlight: "Kings",
    description:
      "5G has officially trickled down to the entry level. These phones punch way above their weight — big batteries, clean software, and future-proof connectivity.",
    phones: [
      {
        id: "lava-bold-n2",
        brand: "Lava",
        name: "Bold N2 5G",
        price: 7499,
        priceFormatted: "₹7,499",
        image: "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-3-5g.jpg",
        tags: ["5G", "Android 14", "50MP", "5000mAh"],
        highlightTags: ["5G"],
        specs: {
          display: '6.56" HD+ 90Hz IPS LCD',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "4GB / 128GB",
          camera: "50MP + 2MP depth",
          battery: "5000mAh, 18W",
          software: "Android 14, near-stock",
        },
        verdict:
          "The cheapest entry into 5G in India. Lava's clean software and decent build make this a no-brainer for anyone on a tight budget.",
      },
      {
        id: "realme-p4-power",
        brand: "realme",
        name: "P4 Power",
        price: 9999,
        priceFormatted: "₹9,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-p4-power.jpg",
        tags: ["5G", "Android 14", "50MP", "6000mAh"],
        highlightTags: ["5G"],
        specs: {
          display: '6.72" FHD+ 120Hz IPS LCD',
          processor: "MediaTek Dimensity 7025",
          ramStorage: "6GB / 128GB",
          camera: "50MP AI + 2MP depth",
          battery: "6000mAh, 33W SUPERVOOC",
          software: "Realme UI 5.0, Android 14",
        },
        verdict:
          "The battery king of the budget segment. 6000mAh with 33W fast charging means you'll forget what a charger looks like. FHD+ 120Hz at this price is wild.",
      },
      {
        id: "samsung-m16",
        brand: "Samsung",
        name: "Galaxy M16 5G",
        price: 11999,
        priceFormatted: "₹11,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m16-5g.jpg",
        tags: ["5G", "One UI 7", "50MP", "6000mAh"],
        highlightTags: ["5G", "4yr updates"],
        specs: {
          display: '6.7" FHD+ Super AMOLED 90Hz',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "6GB / 128GB",
          camera: "50MP + 5MP UW + 2MP macro",
          battery: "6000mAh, 25W",
          software: "One UI 7, 4 years of OS updates",
        },
        verdict:
          "Samsung's update promise is unmatched at this price. AMOLED display, 4 years of OS updates, and Samsung's ecosystem — this is the smart budget pick.",
      },
      {
        id: "vivo-y6a",
        brand: "vivo",
        name: "Y6a",
        price: 12999,
        priceFormatted: "₹12,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-y6a.jpg",
        tags: ["5G", "Android 14", "50MP", "5000mAh"],
        highlightTags: ["5G"],
        specs: {
          display: '6.56" HD+ 90Hz IPS LCD',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "6GB / 128GB",
          camera: "50MP + 0.08MP depth",
          battery: "5000mAh, 15W",
          software: "Funtouch OS 14, Android 14",
        },
        verdict:
          "Slim, lightweight, and reliable. vivo's cameras punch above their class with neat processing. A solid pick for someone who wants a clean, non-flashy phone.",
      },
      {
        id: "moto-g36",
        brand: "Motorola",
        name: "Moto G36 5G",
        price: 12999,
        priceFormatted: "₹12,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/moto-g36-5g.jpg",
        tags: ["5G", "Android 14", "50MP OIS", "5000mAh"],
        highlightTags: ["5G", "Stock Android"],
        specs: {
          display: '6.7" FHD+ pOLED 120Hz',
          processor: "Qualcomm Snapdragon 6s Gen 3",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 8MP UW",
          battery: "5000mAh, 33W TurboPower",
          software: "Stock Android 14",
        },
        verdict:
          "The best phone for mom. Stock Android means no bloat, no confusion. pOLED display is bright and easy to read. 8GB RAM ensures it stays smooth for years. OIS camera takes great family photos.",
        pickFor: "mom",
        pickLabel: "♥ Mom's Pick",
      },
    ],
  },
  {
    id: "midrange",
    tag: "₹15,000 – ₹25,000",
    title: "The ",
    titleHighlight: "Sweet Spot",
    description:
      "This is where the magic happens. Flagship-grade displays, capable cameras, and processors that'll handle anything you throw at them.",
    phones: [
      {
        id: "oneplus-nord-ce5",
        brand: "OnePlus",
        name: "Nord CE5 5G",
        price: 17999,
        priceFormatted: "₹17,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce5-5g.jpg",
        tags: ["5G", "OxygenOS 15", "50MP OIS", "5500mAh"],
        highlightTags: ["5G"],
        specs: {
          display: '6.7" FHD+ AMOLED 120Hz',
          processor: "Qualcomm Snapdragon 7s Gen 3",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 8MP UW",
          battery: "5500mAh, 80W SUPERVOOC",
          software: "OxygenOS 15, 3 years updates",
        },
        verdict:
          "80W fast charging at this price is insane. OxygenOS is still one of the cleanest Android experiences. The Snapdragon 7s Gen 3 handles gaming and multitasking with ease.",
      },
      {
        id: "nothing-phone-4b",
        brand: "Nothing",
        name: "Phone 4b",
        price: 19999,
        priceFormatted: "₹19,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-4b.jpg",
        tags: ["5G", "Nothing OS 3.5", "50MP", "Glyph"],
        highlightTags: ["5G"],
        specs: {
          display: '6.7" FHD+ AMOLED 120Hz',
          processor: "MediaTek Dimensity 7300 Pro",
          ramStorage: "8GB / 128GB",
          camera: "50MP + 2MP depth",
          battery: "5000mAh, 45W",
          software: "Nothing OS 3.5, 3 years updates",
        },
        verdict:
          "The most unique-looking phone under 20K. Glyph interface is actually useful for silent notifications. Nothing OS is bloat-free and gets regular updates. Pure vibes.",
      },
      {
        id: "samsung-a17",
        brand: "Samsung",
        name: "Galaxy A17 5G",
        price: 21999,
        priceFormatted: "₹21,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a17-5g.jpg",
        tags: ["5G", "One UI 7", "50MP OIS", "5000mAh"],
        highlightTags: ["5G", "6yr updates"],
        specs: {
          display: '6.7" FHD+ Super AMOLED 120Hz',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 5MP UW + 2MP macro",
          battery: "5000mAh, 25W",
          software: "One UI 7, 6 years of updates!",
        },
        verdict:
          "6 years of updates is bonkers at this price. Samsung's ecosystem (Galaxy Buds, Watch, SmartTag) is the real value add here. AMOLED display is gorgeous.",
      },
      {
        id: "iqoo-z10",
        brand: "iQOO",
        name: "Z10 5G",
        price: 22999,
        priceFormatted: "₹22,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/iqoo-z10-5g.jpg",
        tags: ["5G", "Funtouch 15", "50MP OIS", "7000mAh"],
        highlightTags: ["5G", "Gaming"],
        specs: {
          display: '6.78" FHD+ AMOLED 144Hz',
          processor: "Qualcomm Snapdragon 7s Gen 3",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 2MP depth",
          battery: "7000mAh, 80W FlashCharge",
          software: "Funtouch 15, Android 14",
        },
        verdict:
          "7000mAh. 144Hz. 80W. This thing is a gaming monster with endurance that defies physics. If you game on your phone, this is the pick.",
      },
    ],
  },
  {
    id: "premium",
    tag: "₹25,000 – ₹40,000",
    title: "Premium ",
    titleHighlight: "Territory",
    description:
      "Where mid-range ends and flagship begins to blur. These phones have flagship processors, stunning cameras, and build quality that rivals phones twice their price.",
    phones: [
      {
        id: "oneplus-n6",
        brand: "OnePlus",
        name: "N6 5G",
        price: 29999,
        priceFormatted: "₹29,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-n6-5g.jpg",
        tags: ["5G", "OxygenOS 15", "50MP OIS", "5800mAh"],
        highlightTags: ["5G", "Flagship Chip"],
        specs: {
          display: '6.78" FHD+ LTPO AMOLED 120Hz',
          processor: "Qualcomm Snapdragon 8s Gen 4",
          ramStorage: "8GB / 256GB",
          camera: "50MP OIS (IMX890) + 8MP UW",
          battery: "5800mAh, 100W SUPERVOOC",
          software: "OxygenOS 15, 4 years updates",
        },
        verdict:
          "The cousin's dream phone. Flagship Snapdragon chip under 30K is insane. LTPO display, 100W charging (full in ~25 mins), flagship camera sensor. This is the phone that makes you question why anyone would spend more.",
        pickFor: "cousin",
        pickLabel: "★ Cousin's Pick",
      },
      {
        id: "moto-edge-60-pro",
        brand: "Motorola",
        name: "Edge 60 Pro",
        price: 32999,
        priceFormatted: "₹32,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/moto-edge-60-pro.jpg",
        tags: ["5G", "Hello UI", "50MP OIS", "6000mAh"],
        highlightTags: ["5G", "IP68"],
        specs: {
          display: '6.8" FHD+ pOLED 144Hz',
          processor: "Qualcomm Snapdragon 8s Gen 4",
          ramStorage: "12GB / 256GB",
          camera: "50MP OIS + 50MP UW + 10MP Tele",
          battery: "6000mAh, 90W + 15W wireless",
          software: "Hello UI, stock-like Android",
        },
        verdict:
          "Triple camera with telephoto at this price. IP68 water resistance. Wireless charging. Motorola's clean software. This is a proper flagship for less.",
      },
      {
        id: "oneplus-turbo-6x",
        brand: "OnePlus",
        name: "Turbo 6X 5G",
        price: 34999,
        priceFormatted: "₹34,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-turbo-6x.jpg",
        tags: ["5G", "OxygenOS 15", "50MP OIS", "6500mAh"],
        highlightTags: ["5G", "120W"],
        specs: {
          display: '6.83" FHD+ LTPO AMOLED 144Hz',
          processor: "Qualcomm Snapdragon 8 Gen 3",
          ramStorage: "12GB / 256GB",
          camera: "50MP OIS (IMX906) + 8MP UW",
          battery: "6500mAh, 120W SUPERVOOC",
          software: "OxygenOS 15, Android 14",
        },
        verdict:
          "120W charging. Full charge in under 20 minutes. Last year's flagship Snapdragon chip still destroys everything. 144Hz LTPO display is buttery smooth.",
      },
      {
        id: "samsung-a37",
        brand: "Samsung",
        name: "Galaxy A37 5G",
        price: 37990,
        priceFormatted: "₹37,990",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a37-5g.jpg",
        tags: ["5G", "One UI 7", "50MP OIS", "5000mAh"],
        highlightTags: ["5G", "Galaxy AI"],
        specs: {
          display: '6.6" FHD+ Super AMOLED 120Hz',
          processor: "Samsung Exynos 1580",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 8MP UW + 5MP Macro",
          battery: "5000mAh, 25W",
          software: "One UI 7, 6 years of updates",
        },
        verdict:
          "Galaxy AI features at a more accessible price. Samsung's display quality is best-in-class. 6 years of updates means this phone will outlast most relationships.",
      },
    ],
  },
  {
    id: "flagship",
    tag: "₹40,000 – ₹80,000",
    title: "True ",
    titleHighlight: "Flagships",
    description:
      "No compromises. The best cameras, the fastest processors, the most refined experiences. These are the phones that define 2026.",
    phones: [
      {
        id: "samsung-s25-fe",
        brand: "Samsung",
        name: "Galaxy S25 FE",
        price: 44999,
        priceFormatted: "₹44,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-fe.jpg",
        tags: ["5G", "One UI 7", "50MP OIS", "Galaxy AI"],
        highlightTags: ["5G", "Flagship"],
        specs: {
          display: '6.7" FHD+ Dynamic AMOLED 120Hz',
          processor: "Samsung Exynos 2400e",
          ramStorage: "8GB / 128GB",
          camera: "50MP OIS + 12MP UW + 8MP Tele",
          battery: "4700mAh, 25W",
          software: "One UI 7, 7 years of updates",
        },
        verdict:
          "Samsung's Fan Edition delivers flagship Galaxy AI features, premium build, and 7 years of updates. The triple camera with telephoto is seriously capable.",
      },
      {
        id: "nothing-phone-3",
        brand: "Nothing",
        name: "Phone 3",
        price: 49999,
        priceFormatted: "₹49,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3.jpg",
        tags: ["5G", "Nothing OS 3.5", "50MP OIS", "Glyph"],
        highlightTags: ["5G", "Unique Design"],
        specs: {
          display: '6.7" FHD+ LTPO AMOLED 120Hz',
          processor: "Qualcomm Snapdragon 8s Gen 4",
          ramStorage: "12GB / 256GB",
          camera: "50MP OIS + 50MP UW + 50MP Tele",
          battery: "5150mAh, 65W",
          software: "Nothing OS 3.5, 4 years updates",
        },
        verdict:
          "The most design-forward flagship of 2026. Triple 50MP cameras, unique Glyph system, and Nothing's signature transparent aesthetic. This is for people who want to stand out.",
      },
      {
        id: "samsung-a57",
        brand: "Samsung",
        name: "Galaxy A57 5G",
        price: 53599,
        priceFormatted: "₹53,599",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a57-5g.jpg",
        tags: ["5G", "One UI 7", "50MP OIS", "Galaxy AI"],
        highlightTags: ["5G", "IP67"],
        specs: {
          display: '6.7" FHD+ Super AMOLED 120Hz',
          processor: "Samsung Exynos 1580",
          ramStorage: "8GB / 256GB",
          camera: "50MP OIS + 12MP UW + 5MP Macro",
          battery: "5000mAh, 45W",
          software: "One UI 7, 6 years of updates",
        },
        verdict:
          "Samsung's mid-premium champion. IP67, 45W charging, and the full Galaxy AI suite. The A-series has never been this close to flagship territory.",
      },
      {
        id: "iphone-se-4",
        brand: "Apple",
        name: "iPhone SE 4",
        price: 59900,
        priceFormatted: "₹59,900",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-4.jpg",
        tags: ["5G", "iOS 19", "48MP", "Apple Intelligence"],
        highlightTags: ["5G", "Apple Intelligence"],
        specs: {
          display: '6.1" OLED 60Hz',
          processor: "Apple A18 Bionic",
          ramStorage: "8GB / 128GB",
          camera: "48MP single camera",
          battery: "3279mAh, 20W",
          software: "iOS 19, 6+ years of updates",
        },
        verdict:
          "The cheapest way into Apple Intelligence. A18 chip is a beast. Face ID, OLED, USB-C — the SE finally feels modern. If you want iOS, this is the entry point.",
      },
    ],
  },
  {
    id: "ultra",
    tag: "₹80,000+",
    title: "The ",
    titleHighlight: "Ultra Tier",
    description:
      "Money is no object. The absolute best of the best — cutting-edge cameras, titanium builds, and features that won't trickled down for years.",
    phones: [
      {
        id: "samsung-s26-plus",
        brand: "Samsung",
        name: "Galaxy S26+",
        price: 94999,
        priceFormatted: "₹94,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-plus.jpg",
        tags: ["5G", "One UI 8", "200MP", "Galaxy AI+"],
        highlightTags: ["5G", "IP68"],
        specs: {
          display: '6.7" QHD+ Dynamic AMOLED 120Hz',
          processor: "Qualcomm Snapdragon 8 Elite Gen 2",
          ramStorage: "12GB / 256GB",
          camera: "200MP OIS + 12MP UW + 10MP Tele 3x",
          battery: "4900mAh, 45W + 15W wireless",
          software: "One UI 8, 7 years of updates",
        },
        verdict:
          "200MP sensor captures insane detail. QHD+ display is jaw-dropping. Galaxy AI features are genuinely useful now — Circle to Search, Live Translate, Generative Edit.",
      },
      {
        id: "iphone-16-pro",
        brand: "Apple",
        name: "iPhone 16 Pro",
        price: 119900,
        priceFormatted: "₹1,19,900",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
        tags: ["5G", "iOS 19", "48MP Pro", "Titanium"],
        highlightTags: ["5G", "Apple Intelligence", "Titanium"],
        specs: {
          display: '6.3" Super Retina XDR 120Hz ProMotion',
          processor: "Apple A18 Pro",
          ramStorage: "8GB / 128GB",
          camera: "48MP Fusion + 48MP UW + 12MP Tele 5x",
          battery: "3582mAh, 20W + 25W MagSafe",
          software: "iOS 19, 6+ years of updates",
        },
        verdict:
          "The iPhone that defined the titanium era. Apple Intelligence makes Siri actually useful. Camera Control button is a game-changer. ProRes video for content creators.",
      },
      {
        id: "iphone-16-pro-max",
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        price: 144900,
        priceFormatted: "₹1,44,900",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
        tags: ["5G", "iOS 19", "48MP Pro", "Titanium"],
        highlightTags: ["5G", "Apple Intelligence", "Max Battery"],
        specs: {
          display: '6.9" Super Retina XDR 120Hz ProMotion',
          processor: "Apple A18 Pro",
          ramStorage: "8GB / 256GB",
          camera: "48MP Fusion + 48MP UW + 12MP Tele 5x",
          battery: "4685mAh, 20W + 25W MagSafe",
          software: "iOS 19, 6+ years of updates",
        },
        verdict:
          "The biggest, baddest iPhone. Best battery life ever in an iPhone. 6.9\" display is immersive. If you want the absolute best Apple has to offer, this is it.",
      },
      {
        id: "samsung-s26-ultra",
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        price: 139999,
        priceFormatted: "₹1,39,999",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-ultra.jpg",
        tags: ["5G", "One UI 8", "200MP", "S Pen"],
        highlightTags: ["5G", "Titanium", "Galaxy AI+"],
        specs: {
          display: '6.9" QHD+ Dynamic AMOLED 120Hz',
          processor: "Qualcomm Snapdragon 8 Elite Gen 2",
          ramStorage: "12GB / 256GB",
          camera: "200MP OIS + 12MP UW + 10MP 3x + 50MP 5x",
          battery: "5000mAh, 45W + 15W wireless",
          software: "One UI 8, 7 years of updates",
        },
        verdict:
          "The ultimate Android phone. Quad camera with 200MP main, S Pen for productivity, titanium build, and Galaxy AI that actually works. This is the phone that does everything.",
      },
    ],
  },
];

export const tablets = [
  {
    id: "tab-a9-plus",
    brand: "Samsung",
    name: "Galaxy Tab A9+ 5G",
    price: 22999,
    priceFormatted: "₹22,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a9-plus-5g.jpg",
    specs: {
      display: '11" TFT LCD 90Hz',
      processor: "Qualcomm Snapdragon 695",
      ramStorage: "8GB / 128GB",
      battery: "7040mAh, 15W",
    },
    verdict: "Best budget 5G tablet. Great for media consumption and light productivity.",
  },
  {
    id: "ipad-11",
    brand: "Apple",
    name: "iPad 11th Gen",
    price: 34900,
    priceFormatted: "₹34,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-11th-gen.jpg",
    specs: {
      display: '11" Liquid Retina',
      processor: "Apple A16 Bionic",
      ramStorage: "6GB / 128GB",
      battery: "28.93Wh, ~10 hours",
    },
    verdict: "The default tablet recommendation. Apple Pencil support, great app ecosystem, years of updates.",
  },
  {
    id: "ipad-air-m3",
    brand: "Apple",
    name: "iPad Air M3",
    price: 59900,
    priceFormatted: "₹59,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-m3.jpg",
    specs: {
      display: '11" Liquid Retina P3',
      processor: "Apple M3",
      ramStorage: "8GB / 128GB",
      battery: "28.93Wh, ~10 hours",
    },
    verdict: "M3 chip in a tablet is overkill in the best way. Handles video editing, 3D rendering, and heavy multitasking.",
  },
  {
    id: "ipad-pro-m4",
    brand: "Apple",
    name: "iPad Pro M4",
    price: 129900,
    priceFormatted: "₹1,29,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-m4-11.jpg",
    specs: {
      display: '11" Ultra Retina XDR OLED',
      processor: "Apple M4",
      ramStorage: "8GB / 256GB",
      battery: "31.49Wh, ~10 hours",
    },
    verdict: "The most powerful tablet ever made. Tandem OLED display is the best screen on any device.",
  },
];
