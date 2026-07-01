// ═══════════════════════════════════════════════════════════════════
// PHONES
// ═══════════════════════════════════════════════════════════════════

export type Phone = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  tags: string[];
  highlightTags?: string[];
  category: "budget" | "midrange" | "premium" | "flagship" | "ultra";
  type: "android" | "ios" | "kindle" | "foldable";
  benchmarks: {
    antutu: number;
    geekbenchSingle: number;
    geekbenchMulti: number;
    batteryLife: number;
    chargingSpeed: number;
  };
  specs: {
    display: string;
    displayType: "AMOLED" | "LCD" | "OLED" | "pOLED";
    displaySize: string;
    displayRefresh: number;
    processor: string;
    processorCategory: "budget" | "midrange" | "flagship" | "premium";
    ramStorage: string;
    ram: number;
    storage: number;
    camera: string;
    cameraMain: number;
    cameraOIS: boolean;
    battery: string;
    batteryMah: number;
    software: string;
    ipRating?: string;
  };
  verdict: string;
  pickFor?: "mom" | "cousin" | "gaming" | "creator" | "business";
  pickLabel?: string;
  releaseDate: string;
};

// ═══════════════════════════════════════════════════════════════════
// TABLETS
// ═══════════════════════════════════════════════════════════════════

export type Tablet = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: "budget" | "midrange" | "premium" | "flagship" | "ultra";
  type: "android" | "ios" | "windows";
  formFactor: "compact" | "standard" | "large" | "pro";
  tags: string[];
  highlightTags?: string[];
  benchmarks: {
    antutu: number;
    geekbenchSingle: number;
    geekbenchMulti: number;
    batteryLife: number;
  };
  specs: {
    display: string;
    displayType: "LCD" | "AMOLED" | "OLED" | "Mini-LED";
    displaySize: string;
    refresh: number;
    processor: string;
    ram: number;
    storage: number;
    camera: string;
    battery: string;
    software: string;
    stylusSupport: boolean;
    keyboardSupport: boolean;
  };
  verdict: string;
  pickFor?: "mom" | "cousin" | "gaming" | "creator" | "business";
  pickLabel?: string;
  releaseDate: string;
};

// ═══════════════════════════════════════════════════════════════════
// LAPTOPS
// ═══════════════════════════════════════════════════════════════════

export type Laptop = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: "budget" | "midrange" | "premium" | "flagship" | "ultra";
  type:
    | "ultrabook"
    | "gaming"
    | "creator"
    | "convertible"
    | "business"
    | "macbook";
  tags: string[];
  highlightTags?: string[];
  benchmarks: {
    pcbMark: number;
    cinebenchR23Multi: number;
    batteryLife: number;
  };
  specs: {
    display: string;
    displayType: "IPS" | "OLED" | "Mini-LED" | "Retina" | "LCD";
    displaySize: string;
    refresh: number;
    resolution: string;
    processor: string;
    cores: number;
    ram: number;
    storage: number;
    storageType: "SSD" | "NVMe" | "eMMC";
    gpu: string;
    vram?: number;
    battery: string;
    weight: string;
    software: string;
    ports: string[];
  };
  verdict: string;
  pickFor?: "mom" | "cousin" | "gaming" | "creator" | "business";
  pickLabel?: string;
  releaseDate: string;
};

// ═══════════════════════════════════════════════════════════════════
// PCS / DESKTOPS
// ═══════════════════════════════════════════════════════════════════

export type PC = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: "budget" | "midrange" | "premium" | "flagship" | "ultra";
  type: "desktop" | "mini-pc" | "workstation" | "gaming-rig" | "aio";
  tags: string[];
  highlightTags?: string[];
  benchmarks: {
    pcbMark: number;
    cinebenchR23Multi: number;
    cinebenchR23Single: number;
  };
  specs: {
    processor: string;
    cores: number;
    ram: number;
    ramType: "DDR4" | "DDR5";
    storage: number;
    storageType: "SSD" | "NVMe" | "HDD";
    gpu: string;
    vram?: number;
    psu: string;
    formFactor: string;
    operatingSystem: string;
  };
  verdict: string;
  pickFor?: "mom" | "cousin" | "gaming" | "creator" | "business";
  pickLabel?: string;
  releaseDate: string;
};

export type DeviceCategory = {
  id: string;
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: (Phone | Tablet | Laptop | PC)[];
};

// ═══════════════════════════════════════════════════════════════════
// ALL PHONES (expanded with more models)
// ═══════════════════════════════════════════════════════════════════

export const phones: Phone[] = [
  // ─── BUDGET: UNDER ₹15,000 ───
  {
    id: "lava-bold-n2",
    brand: "Lava",
    name: "Bold N2 5G",
    price: 7499,
    priceFormatted: "₹7,499",
    image: "https://fdn2.gsmarena.com/vv/bigpic/lava-blaze-3-5g.jpg",
    tags: ["5G", "Android 14", "50MP", "5000mAh"],
    highlightTags: ["5G"],
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 285000,
      geekbenchSingle: 480,
      geekbenchMulti: 1450,
      batteryLife: 18,
      chargingSpeed: 18,
    },
    specs: {
      display: '6.56" HD+ 90Hz IPS LCD',
      displayType: "LCD",
      displaySize: "6.56",
      displayRefresh: 90,
      processor: "MediaTek Dimensity 6300",
      processorCategory: "budget",
      ramStorage: "4GB / 128GB",
      ram: 4,
      storage: 128,
      camera: "50MP + 2MP depth",
      cameraMain: 50,
      cameraOIS: false,
      battery: "5000mAh, 18W",
      batteryMah: 5000,
      software: "Android 14, near-stock",
    },
    verdict:
      "The cheapest entry into 5G in India. Lava's clean software and decent build make this a no-brainer for anyone on a tight budget.",
    releaseDate: "2025-11",
  },
  {
    id: "poco-c75",
    brand: "POCO",
    name: "C75 5G",
    price: 8499,
    priceFormatted: "₹8,499",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75.jpg",
    tags: ["5G", "Android 14", "50MP", "5160mAh"],
    highlightTags: ["5G"],
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 320000,
      geekbenchSingle: 540,
      geekbenchMulti: 1620,
      batteryLife: 19,
      chargingSpeed: 18,
    },
    specs: {
      display: '6.88" HD+ 120Hz IPS LCD',
      displayType: "LCD",
      displaySize: "6.88",
      displayRefresh: 120,
      processor: "MediaTek Dimensity 6100+",
      processorCategory: "budget",
      ramStorage: "4GB / 128GB",
      ram: 4,
      storage: 128,
      camera: "50MP AI + AI lens",
      cameraMain: 50,
      cameraOIS: false,
      battery: "5160mAh, 18W",
      batteryMah: 5160,
      software: "HyperOS, Android 14",
    },
    verdict:
      "Big display, big battery, big value. POCO continues to dominate the sub-10K space with practical specs that don't cut corners where it matters.",
    releaseDate: "2025-10",
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
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 385000,
      geekbenchSingle: 720,
      geekbenchMulti: 2100,
      batteryLife: 22,
      chargingSpeed: 33,
    },
    specs: {
      display: '6.72" FHD+ 120Hz IPS LCD',
      displayType: "LCD",
      displaySize: "6.72",
      displayRefresh: 120,
      processor: "MediaTek Dimensity 7025",
      processorCategory: "budget",
      ramStorage: "6GB / 128GB",
      ram: 6,
      storage: 128,
      camera: "50MP AI + 2MP depth",
      cameraMain: 50,
      cameraOIS: false,
      battery: "6000mAh, 33W SUPERVOOC",
      batteryMah: 6000,
      software: "Realme UI 5.0, Android 14",
    },
    verdict:
      "The battery king of the budget segment. 6000mAh with 33W fast charging means you'll forget what a charger looks like. FHD+ 120Hz at this price is wild.",
    releaseDate: "2025-12",
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
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 290000,
      geekbenchSingle: 490,
      geekbenchMulti: 1480,
      batteryLife: 20,
      chargingSpeed: 25,
    },
    specs: {
      display: '6.7" FHD+ Super AMOLED 90Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 90,
      processor: "MediaTek Dimensity 6300",
      processorCategory: "budget",
      ramStorage: "6GB / 128GB",
      ram: 6,
      storage: 128,
      camera: "50MP + 5MP UW + 2MP macro",
      cameraMain: 50,
      cameraOIS: false,
      battery: "6000mAh, 25W",
      batteryMah: 6000,
      software: "One UI 7, 4 years of OS updates",
    },
    verdict:
      "Samsung's update promise is unmatched at this price. AMOLED display, 4 years of OS updates, and Samsung's ecosystem — this is the smart budget pick.",
    releaseDate: "2026-01",
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
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 295000,
      geekbenchSingle: 495,
      geekbenchMulti: 1500,
      batteryLife: 17,
      chargingSpeed: 15,
    },
    specs: {
      display: '6.56" HD+ 90Hz IPS LCD',
      displayType: "LCD",
      displaySize: "6.56",
      displayRefresh: 90,
      processor: "MediaTek Dimensity 6300",
      processorCategory: "budget",
      ramStorage: "6GB / 128GB",
      ram: 6,
      storage: 128,
      camera: "50MP + 0.08MP depth",
      cameraMain: 50,
      cameraOIS: false,
      battery: "5000mAh, 15W",
      batteryMah: 5000,
      software: "Funtouch OS 14, Android 14",
    },
    verdict:
      "Slim, lightweight, and reliable. vivo's cameras punch above their class with neat processing. A solid pick for someone who wants a clean, non-flashy phone.",
    releaseDate: "2026-02",
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
    category: "budget",
    type: "android",
    benchmarks: {
      antutu: 425000,
      geekbenchSingle: 850,
      geekbenchMulti: 2200,
      batteryLife: 19,
      chargingSpeed: 33,
    },
    specs: {
      display: '6.7" FHD+ pOLED 120Hz',
      displayType: "pOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 6s Gen 3",
      processorCategory: "budget",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 8MP UW",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5000mAh, 33W TurboPower",
      batteryMah: 5000,
      software: "Stock Android 14",
    },
    verdict:
      "The best phone for mom. Stock Android means no bloat, no confusion. pOLED display is bright and easy to read. 8GB RAM ensures it stays smooth for years. OIS camera takes great family photos.",
    pickFor: "mom",
    pickLabel: "♥ Mom's Pick",
    releaseDate: "2026-02",
  },

  // ─── MID-RANGE: ₹15,000–₹25,000 ───
  {
    id: "redmi-note-14-pro-plus",
    brand: "Redmi",
    name: "Note 14 Pro+ 5G",
    price: 15999,
    priceFormatted: "₹15,999",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-plus.jpg",
    tags: ["5G", "HyperOS", "200MP", "6200mAh"],
    highlightTags: ["5G", "200MP"],
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 850000,
      geekbenchSingle: 1350,
      geekbenchMulti: 3800,
      batteryLife: 21,
      chargingSpeed: 90,
    },
    specs: {
      display: '6.67" 1.5K AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.67",
      displayRefresh: 120,
      processor: "MediaTek Dimensity 7300 Ultra",
      processorCategory: "midrange",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "200MP OIS + 8MP UW + 2MP macro",
      cameraMain: 200,
      cameraOIS: true,
      battery: "6200mAh, 90W HyperCharge",
      batteryMah: 6200,
      software: "HyperOS, Android 14",
      ipRating: "IP68",
    },
    verdict:
      "200MP camera and IP68 under 16K is wild. 6200mAh with 90W charging means 0-100 in 35 minutes. The new value king of the mid-range.",
    releaseDate: "2025-12",
  },
  {
    id: "oneplus-nord-ce5",
    brand: "OnePlus",
    name: "Nord CE5 5G",
    price: 17999,
    priceFormatted: "₹17,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce5-5g.jpg",
    tags: ["5G", "OxygenOS 15", "50MP OIS", "5500mAh"],
    highlightTags: ["5G"],
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 720000,
      geekbenchSingle: 1180,
      geekbenchMulti: 3200,
      batteryLife: 20,
      chargingSpeed: 80,
    },
    specs: {
      display: '6.7" FHD+ AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 7s Gen 3",
      processorCategory: "midrange",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 8MP UW",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5500mAh, 80W SUPERVOOC",
      batteryMah: 5500,
      software: "OxygenOS 15, 3 years updates",
    },
    verdict:
      "80W fast charging at this price is insane. OxygenOS is still one of the cleanest Android experiences. The Snapdragon 7s Gen 3 handles gaming and multitasking with ease.",
    releaseDate: "2026-03",
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
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 685000,
      geekbenchSingle: 1050,
      geekbenchMulti: 2950,
      batteryLife: 17,
      chargingSpeed: 45,
    },
    specs: {
      display: '6.7" FHD+ AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "MediaTek Dimensity 7300 Pro",
      processorCategory: "midrange",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP + 2MP depth",
      cameraMain: 50,
      cameraOIS: false,
      battery: "5000mAh, 45W",
      batteryMah: 5000,
      software: "Nothing OS 3.5, 3 years updates",
    },
    verdict:
      "The most unique-looking phone under 20K. Glyph interface is actually useful for silent notifications. Nothing OS is bloat-free and gets regular updates. Pure vibes.",
    releaseDate: "2026-01",
  },
  {
    id: "poco-f7",
    brand: "POCO",
    name: "F7 5G",
    price: 20999,
    priceFormatted: "₹20,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7.jpg",
    tags: ["5G", "HyperOS", "50MP OIS", "6500mAh"],
    highlightTags: ["5G", "Gaming"],
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 1900000,
      geekbenchSingle: 2050,
      geekbenchMulti: 5600,
      batteryLife: 22,
      chargingSpeed: 90,
    },
    specs: {
      display: '6.83" 1.5K AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.83",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8s Gen 3",
      processorCategory: "premium",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "50MP OIS + 8MP UW",
      cameraMain: 50,
      cameraOIS: true,
      battery: "6500mAh, 90W HyperCharge",
      batteryMah: 6500,
      software: "HyperOS, Android 15",
    },
    verdict:
      "Flagship Snapdragon chip with 6500mAh under 21K. POCO F-series is the gaming enthusiast's choice and the F7 doubles down on battery and thermals.",
    releaseDate: "2026-04",
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
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 305000,
      geekbenchSingle: 510,
      geekbenchMulti: 1550,
      batteryLife: 18,
      chargingSpeed: 25,
    },
    specs: {
      display: '6.7" FHD+ Super AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "MediaTek Dimensity 6300",
      processorCategory: "budget",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 5MP UW + 2MP macro",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5000mAh, 25W",
      batteryMah: 5000,
      software: "One UI 7, 6 years of updates!",
    },
    verdict:
      "6 years of updates is bonkers at this price. Samsung's ecosystem (Galaxy Buds, Watch, SmartTag) is the real value add here. AMOLED display is gorgeous.",
    releaseDate: "2026-03",
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
    category: "midrange",
    type: "android",
    benchmarks: {
      antutu: 745000,
      geekbenchSingle: 1200,
      geekbenchMulti: 3300,
      batteryLife: 24,
      chargingSpeed: 80,
    },
    specs: {
      display: '6.78" FHD+ AMOLED 144Hz',
      displayType: "AMOLED",
      displaySize: "6.78",
      displayRefresh: 144,
      processor: "Qualcomm Snapdragon 7s Gen 3",
      processorCategory: "midrange",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 2MP depth",
      cameraMain: 50,
      cameraOIS: true,
      battery: "7000mAh, 80W FlashCharge",
      batteryMah: 7000,
      software: "Funtouch 15, Android 14",
    },
    verdict:
      "7000mAh. 144Hz. 80W. This thing is a gaming monster with endurance that defies physics. If you game on your phone, this is the pick.",
    pickFor: "gaming",
    pickLabel: "🎮 Gaming Pick",
    releaseDate: "2026-02",
  },

  // ─── PREMIUM: ₹25,000–₹40,000 ───
  {
    id: "oneplus-n6",
    brand: "OnePlus",
    name: "N6 5G",
    price: 29999,
    priceFormatted: "₹29,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-n6-5g.jpg",
    tags: ["5G", "OxygenOS 15", "50MP OIS", "5800mAh"],
    highlightTags: ["5G", "Flagship Chip"],
    category: "premium",
    type: "android",
    benchmarks: {
      antutu: 1850000,
      geekbenchSingle: 1980,
      geekbenchMulti: 5400,
      batteryLife: 21,
      chargingSpeed: 100,
    },
    specs: {
      display: '6.78" FHD+ LTPO AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.78",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8s Gen 4",
      processorCategory: "premium",
      ramStorage: "8GB / 256GB",
      ram: 8,
      storage: 256,
      camera: "50MP OIS (IMX890) + 8MP UW",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5800mAh, 100W SUPERVOOC",
      batteryMah: 5800,
      software: "OxygenOS 15, 4 years updates",
    },
    verdict:
      "The cousin's dream phone. Flagship Snapdragon chip under 30K is insane. LTPO display, 100W charging (full in ~25 mins), flagship camera sensor. This is the phone that makes you question why anyone would spend more.",
    pickFor: "cousin",
    pickLabel: "★ Cousin's Pick",
    releaseDate: "2026-04",
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
    category: "premium",
    type: "android",
    benchmarks: {
      antutu: 1820000,
      geekbenchSingle: 1950,
      geekbenchMulti: 5300,
      batteryLife: 22,
      chargingSpeed: 90,
    },
    specs: {
      display: '6.8" FHD+ pOLED 144Hz',
      displayType: "pOLED",
      displaySize: "6.8",
      displayRefresh: 144,
      processor: "Qualcomm Snapdragon 8s Gen 4",
      processorCategory: "premium",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "50MP OIS + 50MP UW + 10MP Tele",
      cameraMain: 50,
      cameraOIS: true,
      battery: "6000mAh, 90W + 15W wireless",
      batteryMah: 6000,
      software: "Hello UI, stock-like Android",
      ipRating: "IP68",
    },
    verdict:
      "Triple camera with telephoto at this price. IP68 water resistance. Wireless charging. Motorola's clean software. This is a proper flagship for less.",
    releaseDate: "2026-04",
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
    category: "premium",
    type: "android",
    benchmarks: {
      antutu: 2100000,
      geekbenchSingle: 2150,
      geekbenchMulti: 6800,
      batteryLife: 23,
      chargingSpeed: 120,
    },
    specs: {
      display: '6.83" FHD+ LTPO AMOLED 144Hz',
      displayType: "AMOLED",
      displaySize: "6.83",
      displayRefresh: 144,
      processor: "Qualcomm Snapdragon 8 Gen 3",
      processorCategory: "flagship",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "50MP OIS (IMX906) + 8MP UW",
      cameraMain: 50,
      cameraOIS: true,
      battery: "6500mAh, 120W SUPERVOOC",
      batteryMah: 6500,
      software: "OxygenOS 15, Android 14",
    },
    verdict:
      "120W charging. Full charge in under 20 minutes. Last year's flagship Snapdragon chip still destroys everything. 144Hz LTPO display is buttery smooth.",
    releaseDate: "2026-03",
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
    category: "premium",
    type: "android",
    benchmarks: {
      antutu: 850000,
      geekbenchSingle: 1350,
      geekbenchMulti: 3800,
      batteryLife: 18,
      chargingSpeed: 25,
    },
    specs: {
      display: '6.6" FHD+ Super AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.6",
      displayRefresh: 120,
      processor: "Samsung Exynos 1580",
      processorCategory: "premium",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 8MP UW + 5MP Macro",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5000mAh, 25W",
      batteryMah: 5000,
      software: "One UI 7, 6 years of updates",
    },
    verdict:
      "Galaxy AI features at a more accessible price. Samsung's display quality is best-in-class. 6 years of updates means this phone will outlast most relationships.",
    releaseDate: "2026-01",
  },

  // ─── FLAGSHIP: ₹40,000–₹80,000 ───
  {
    id: "asus-rog-9",
    brand: "ASUS",
    name: "ROG Phone 9",
    price: 42999,
    priceFormatted: "₹42,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-9.jpg",
    tags: ["5G", "ROG UI", "50MP OIS", "5800mAh"],
    highlightTags: ["5G", "Gaming"],
    category: "flagship",
    type: "android",
    benchmarks: {
      antutu: 2850000,
      geekbenchSingle: 3050,
      geekbenchMulti: 9700,
      batteryLife: 17,
      chargingSpeed: 65,
    },
    specs: {
      display: '6.78" FHD+ LTPO AMOLED 165Hz',
      displayType: "AMOLED",
      displaySize: "6.78",
      displayRefresh: 165,
      processor: "Qualcomm Snapdragon 8 Elite Gen 2",
      processorCategory: "flagship",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "50MP OIS + 13MP UW + 5MP macro",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5800mAh, 65W HyperCharge",
      batteryMah: 5800,
      software: "ROG UI, Android 15",
      ipRating: "IP68",
    },
    verdict:
      "165Hz display, dedicated cooling, shoulder triggers, RGB — this is the gaming phone to beat. If mobile gaming is your religion, ROG Phone 9 is the church.",
    releaseDate: "2026-04",
  },
  {
    id: "samsung-s25-fe",
    brand: "Samsung",
    name: "Galaxy S25 FE",
    price: 44999,
    priceFormatted: "₹44,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-fe.jpg",
    tags: ["5G", "One UI 7", "50MP OIS", "Galaxy AI"],
    highlightTags: ["5G", "Flagship"],
    category: "flagship",
    type: "android",
    benchmarks: {
      antutu: 1680000,
      geekbenchSingle: 1880,
      geekbenchMulti: 4900,
      batteryLife: 16,
      chargingSpeed: 25,
    },
    specs: {
      display: '6.7" FHD+ Dynamic AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Samsung Exynos 2400e",
      processorCategory: "flagship",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "50MP OIS + 12MP UW + 8MP Tele",
      cameraMain: 50,
      cameraOIS: true,
      battery: "4700mAh, 25W",
      batteryMah: 4700,
      software: "One UI 7, 7 years of updates",
      ipRating: "IP68",
    },
    verdict:
      "Samsung's Fan Edition delivers flagship Galaxy AI features, premium build, and 7 years of updates. The triple camera with telephoto is seriously capable.",
    releaseDate: "2026-01",
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
    category: "flagship",
    type: "android",
    benchmarks: {
      antutu: 1880000,
      geekbenchSingle: 2000,
      geekbenchMulti: 5500,
      batteryLife: 18,
      chargingSpeed: 65,
    },
    specs: {
      display: '6.7" FHD+ LTPO AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8s Gen 4",
      processorCategory: "premium",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "50MP OIS + 50MP UW + 50MP Tele",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5150mAh, 65W",
      batteryMah: 5150,
      software: "Nothing OS 3.5, 4 years updates",
    },
    verdict:
      "The most design-forward flagship of 2026. Triple 50MP cameras, unique Glyph system, and Nothing's signature transparent aesthetic. This is for people who want to stand out.",
    releaseDate: "2026-05",
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
    category: "flagship",
    type: "android",
    benchmarks: {
      antutu: 870000,
      geekbenchSingle: 1380,
      geekbenchMulti: 3900,
      batteryLife: 19,
      chargingSpeed: 45,
    },
    specs: {
      display: '6.7" FHD+ Super AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Samsung Exynos 1580",
      processorCategory: "premium",
      ramStorage: "8GB / 256GB",
      ram: 8,
      storage: 256,
      camera: "50MP OIS + 12MP UW + 5MP Macro",
      cameraMain: 50,
      cameraOIS: true,
      battery: "5000mAh, 45W",
      batteryMah: 5000,
      software: "One UI 7, 6 years of updates",
      ipRating: "IP67",
    },
    verdict:
      "Samsung's mid-premium champion. IP67, 45W charging, and the full Galaxy AI suite. The A-series has never been this close to flagship territory.",
    releaseDate: "2026-02",
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
    category: "flagship",
    type: "ios",
    benchmarks: {
      antutu: 1850000,
      geekbenchSingle: 2580,
      geekbenchMulti: 6800,
      batteryLife: 14,
      chargingSpeed: 20,
    },
    specs: {
      display: '6.1" OLED 60Hz',
      displayType: "OLED",
      displaySize: "6.1",
      displayRefresh: 60,
      processor: "Apple A18 Bionic",
      processorCategory: "flagship",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "48MP single camera",
      cameraMain: 48,
      cameraOIS: true,
      battery: "3279mAh, 20W",
      batteryMah: 3279,
      software: "iOS 19, 6+ years of updates",
      ipRating: "IP68",
    },
    verdict:
      "The cheapest way into Apple Intelligence. A18 chip is a beast. Face ID, OLED, USB-C — the SE finally feels modern. If you want iOS, this is the entry point.",
    releaseDate: "2026-03",
  },
  {
    id: "google-pixel-10-pro",
    brand: "Google",
    name: "Pixel 10 Pro",
    price: 79999,
    priceFormatted: "₹79,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10-pro.jpg",
    tags: ["5G", "Android 16", "50MP", "Tensor G4"],
    highlightTags: ["5G", "AI Camera"],
    category: "flagship",
    type: "android",
    benchmarks: {
      antutu: 1650000,
      geekbenchSingle: 2150,
      geekbenchMulti: 5200,
      batteryLife: 17,
      chargingSpeed: 27,
    },
    specs: {
      display: '6.3" QHD+ LTPO OLED 120Hz',
      displayType: "OLED",
      displaySize: "6.3",
      displayRefresh: 120,
      processor: "Google Tensor G4",
      processorCategory: "flagship",
      ramStorage: "12GB / 128GB",
      ram: 12,
      storage: 128,
      camera: "50MP OIS + 48MP UW + 48MP Tele 5x",
      cameraMain: 50,
      cameraOIS: true,
      battery: "4700mAh, 27W + 15W wireless",
      batteryMah: 4700,
      software: "Stock Android 16, 7 years updates",
      ipRating: "IP68",
    },
    verdict:
      "The AI phone. Gemini Nano runs on-device for instant translation, smart reply, and computational photography that still beats everyone. Cleanest Android experience, period.",
    releaseDate: "2025-10",
  },

  // ─── ULTRA: ₹80,000+ ───
  {
    id: "samsung-s26-plus",
    brand: "Samsung",
    name: "Galaxy S26+",
    price: 94999,
    priceFormatted: "₹94,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-plus.jpg",
    tags: ["5G", "One UI 8", "200MP", "Galaxy AI+"],
    highlightTags: ["5G", "IP68"],
    category: "ultra",
    type: "android",
    benchmarks: {
      antutu: 2780000,
      geekbenchSingle: 2980,
      geekbenchMulti: 9400,
      batteryLife: 17,
      chargingSpeed: 45,
    },
    specs: {
      display: '6.7" QHD+ Dynamic AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.7",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8 Elite Gen 2",
      processorCategory: "flagship",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "200MP OIS + 12MP UW + 10MP Tele 3x",
      cameraMain: 200,
      cameraOIS: true,
      battery: "4900mAh, 45W + 15W wireless",
      batteryMah: 4900,
      software: "One UI 8, 7 years of updates",
      ipRating: "IP68",
    },
    verdict:
      "200MP sensor captures insane detail. QHD+ display is jaw-dropping. Galaxy AI features are genuinely useful now — Circle to Search, Live Translate, Generative Edit.",
    releaseDate: "2026-05",
  },
  {
    id: "samsung-z-fold-8",
    brand: "Samsung",
    name: "Galaxy Z Fold 8 Wide",
    price: 159999,
    priceFormatted: "₹1,59,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold-8.jpg",
    tags: ["5G", "One UI 8", "200MP", "Foldable"],
    highlightTags: ["5G", "Foldable"],
    category: "ultra",
    type: "foldable",
    benchmarks: {
      antutu: 2820000,
      geekbenchSingle: 3010,
      geekbenchMulti: 9550,
      batteryLife: 16,
      chargingSpeed: 45,
    },
    specs: {
      display: '7.6" QHD+ Dynamic AMOLED 120Hz (main) + 6.3" AMOLED (cover)',
      displayType: "AMOLED",
      displaySize: "7.6",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8 Elite Gen 2",
      processorCategory: "flagship",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "200MP OIS + 12MP UW + 10MP Tele 3x",
      cameraMain: 200,
      cameraOIS: true,
      battery: "4400mAh, 45W + 15W wireless",
      batteryMah: 4400,
      software: "One UI 8, 7 years of updates",
      ipRating: "IP48",
    },
    verdict:
      "The foldable that finally feels normal to use. Crease is almost invisible, the cover screen is usable, and multitasking on the inner display is genuinely productive.",
    releaseDate: "2026-06",
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
    category: "ultra",
    type: "ios",
    benchmarks: {
      antutu: 2050000,
      geekbenchSingle: 2780,
      geekbenchMulti: 7800,
      batteryLife: 15,
      chargingSpeed: 20,
    },
    specs: {
      display: '6.3" Super Retina XDR 120Hz ProMotion',
      displayType: "OLED",
      displaySize: "6.3",
      displayRefresh: 120,
      processor: "Apple A18 Pro",
      processorCategory: "flagship",
      ramStorage: "8GB / 128GB",
      ram: 8,
      storage: 128,
      camera: "48MP Fusion + 48MP UW + 12MP Tele 5x",
      cameraMain: 48,
      cameraOIS: true,
      battery: "3582mAh, 20W + 25W MagSafe",
      batteryMah: 3582,
      software: "iOS 19, 6+ years of updates",
      ipRating: "IP68",
    },
    verdict:
      "The iPhone that defined the titanium era. Apple Intelligence makes Siri actually useful. Camera Control button is a game-changer. ProRes video for content creators.",
    releaseDate: "2025-09",
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
    category: "ultra",
    type: "ios",
    benchmarks: {
      antutu: 2080000,
      geekbenchSingle: 2790,
      geekbenchMulti: 7850,
      batteryLife: 18,
      chargingSpeed: 20,
    },
    specs: {
      display: '6.9" Super Retina XDR 120Hz ProMotion',
      displayType: "OLED",
      displaySize: "6.9",
      displayRefresh: 120,
      processor: "Apple A18 Pro",
      processorCategory: "flagship",
      ramStorage: "8GB / 256GB",
      ram: 8,
      storage: 256,
      camera: "48MP Fusion + 48MP UW + 12MP Tele 5x",
      cameraMain: 48,
      cameraOIS: true,
      battery: "4685mAh, 20W + 25W MagSafe",
      batteryMah: 4685,
      software: "iOS 19, 6+ years of updates",
      ipRating: "IP68",
    },
    verdict:
      'The biggest, baddest iPhone. Best battery life ever in an iPhone. 6.9" display is immersive. If you want the absolute best Apple has to offer, this is it.',
    releaseDate: "2025-09",
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
    category: "ultra",
    type: "android",
    benchmarks: {
      antutu: 2820000,
      geekbenchSingle: 3010,
      geekbenchMulti: 9550,
      batteryLife: 19,
      chargingSpeed: 45,
    },
    specs: {
      display: '6.9" QHD+ Dynamic AMOLED 120Hz',
      displayType: "AMOLED",
      displaySize: "6.9",
      displayRefresh: 120,
      processor: "Qualcomm Snapdragon 8 Elite Gen 2",
      processorCategory: "flagship",
      ramStorage: "12GB / 256GB",
      ram: 12,
      storage: 256,
      camera: "200MP OIS + 12MP UW + 10MP 3x + 50MP 5x",
      cameraMain: 200,
      cameraOIS: true,
      battery: "5000mAh, 45W + 15W wireless",
      batteryMah: 5000,
      software: "One UI 8, 7 years of updates",
      ipRating: "IP68",
    },
    verdict:
      "The ultimate Android phone. Quad camera with 200MP main, S Pen for productivity, titanium build, and Galaxy AI that actually works. This is the phone that does everything.",
    releaseDate: "2026-02",
  },
];

// ═══════════════════════════════════════════════════════════════════
// TABLETS (expanded)
// ═══════════════════════════════════════════════════════════════════

export const tablets: Tablet[] = [
  {
    id: "tab-a9-plus",
    brand: "Samsung",
    name: "Galaxy Tab A9+ 5G",
    price: 22999,
    priceFormatted: "₹22,999",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a9-plus-5g.jpg",
    category: "budget",
    type: "android",
    formFactor: "standard",
    tags: ["5G", '11"', "Tab"],
    benchmarks: {
      antutu: 410000,
      geekbenchSingle: 850,
      geekbenchMulti: 2100,
      batteryLife: 13,
    },
    specs: {
      display: '11" TFT LCD 90Hz',
      displayType: "LCD",
      displaySize: "11",
      refresh: 90,
      processor: "Qualcomm Snapdragon 695",
      ram: 8,
      storage: 128,
      camera: "8MP rear / 5MP front",
      battery: "7040mAh, 15W",
      software: "One UI 6, Android 14",
      stylusSupport: false,
      keyboardSupport: false,
    },
    verdict:
      "Best budget 5G tablet. Great for media consumption and light productivity. Samsung's tablet software is well-optimized.",
    releaseDate: "2025-09",
  },
  {
    id: "redmi-pad-pro",
    brand: "Redmi",
    name: "Pad Pro 5G",
    price: 26999,
    priceFormatted: "₹26,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-pad-pro.jpg",
    category: "midrange",
    type: "android",
    formFactor: "standard",
    tags: ["5G", '12.1"', "Tab"],
    benchmarks: {
      antutu: 920000,
      geekbenchSingle: 1450,
      geekbenchMulti: 4200,
      batteryLife: 14,
    },
    specs: {
      display: '12.1" 2.5K LCD 120Hz',
      displayType: "LCD",
      displaySize: "12.1",
      refresh: 120,
      processor: "Qualcomm Snapdragon 7s Gen 2",
      ram: 8,
      storage: 256,
      camera: "8MP rear / 8MP front",
      battery: "10000mAh, 33W",
      software: "HyperOS, Android 14",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "The iPad Air killer. 2.5K 120Hz display, Snapdragon 7s Gen 2, and 10000mAh battery. Comes with stylus support at half the price.",
    releaseDate: "2025-11",
  },
  {
    id: "oneplus-pad-3",
    brand: "OnePlus",
    name: "Pad 3 5G",
    price: 32999,
    priceFormatted: "₹32,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-pad-3.jpg",
    category: "midrange",
    type: "android",
    formFactor: "standard",
    tags: ["5G", '13.2"', "Tab"],
    benchmarks: {
      antutu: 1620000,
      geekbenchSingle: 1880,
      geekbenchMulti: 5100,
      batteryLife: 15,
    },
    specs: {
      display: '13.2" 3.4K LTPO LCD 144Hz',
      displayType: "LCD",
      displaySize: "13.2",
      refresh: 144,
      processor: "Qualcomm Snapdragon 8 Gen 3",
      ram: 12,
      storage: 256,
      camera: "13MP rear / 8MP front",
      battery: "9520mAh, 67W",
      software: "OxygenOS 15, Android 15",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "Flagship chip in a tablet. 144Hz LTPO display, 67W charging, and 13.2\" screen makes this a creator's dream without the creator price.",
    releaseDate: "2026-03",
  },
  {
    id: "ipad-11",
    brand: "Apple",
    name: "iPad 11th Gen",
    price: 34900,
    priceFormatted: "₹34,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-11th-gen.jpg",
    category: "midrange",
    type: "ios",
    formFactor: "standard",
    tags: ["5G", '11"', "iPad"],
    benchmarks: {
      antutu: 1380000,
      geekbenchSingle: 1880,
      geekbenchMulti: 4800,
      batteryLife: 10,
    },
    specs: {
      display: '11" Liquid Retina',
      displayType: "LCD",
      displaySize: "11",
      refresh: 60,
      processor: "Apple A16 Bionic",
      ram: 6,
      storage: 128,
      camera: "12MP rear / 12MP front",
      battery: "28.93Wh, ~10 hours",
      software: "iPadOS 19, 6+ yr updates",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "The default tablet recommendation. Apple Pencil support, great app ecosystem, and years of updates. Perfect for students and casual creators.",
    releaseDate: "2025-10",
  },
  {
    id: "galaxy-tab-s10-fe",
    brand: "Samsung",
    name: "Galaxy Tab S10 FE 5G",
    price: 39999,
    priceFormatted: "₹39,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s10-fe.jpg",
    category: "premium",
    type: "android",
    formFactor: "standard",
    tags: ["5G", '11"', "S Pen", "IP68"],
    benchmarks: {
      antutu: 1350000,
      geekbenchSingle: 1820,
      geekbenchMulti: 4700,
      batteryLife: 14,
    },
    specs: {
      display: '11" 2.5K AMOLED 90Hz',
      displayType: "AMOLED",
      displaySize: "11",
      refresh: 90,
      processor: "Samsung Exynos 1580",
      ram: 8,
      storage: 128,
      camera: "13MP rear / 12MP UW front",
      battery: "8000mAh, 45W",
      software: "One UI 7, Android 15",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "AMOLED, S Pen included, IP68. Samsung's mid-premium tablet is the best Android tab for note-taking and content consumption.",
    releaseDate: "2026-02",
  },
  {
    id: "ipad-air-m3",
    brand: "Apple",
    name: "iPad Air M3",
    price: 59900,
    priceFormatted: "₹59,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-m3.jpg",
    category: "premium",
    type: "ios",
    formFactor: "standard",
    tags: ["5G", '11"', "iPad", "M3"],
    benchmarks: {
      antutu: 1850000,
      geekbenchSingle: 2980,
      geekbenchMulti: 9400,
      batteryLife: 10,
    },
    specs: {
      display: '11" Liquid Retina P3',
      displayType: "LCD",
      displaySize: "11",
      refresh: 60,
      processor: "Apple M3",
      ram: 8,
      storage: 128,
      camera: "12MP rear / 12MP front",
      battery: "28.93Wh, ~10 hours",
      software: "iPadOS 19",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "M3 chip in a tablet is overkill in the best way. Handles video editing, 3D rendering, and heavy multitasking. The sweet spot between base iPad and Pro.",
    releaseDate: "2025-04",
  },
  {
    id: "ipad-pro-m4-13",
    brand: "Apple",
    name: 'iPad Pro M4 (13")',
    price: 149900,
    priceFormatted: "₹1,49,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-m4-13.jpg",
    category: "ultra",
    type: "ios",
    formFactor: "pro",
    tags: ["5G", '13"', "iPad", "M4", "OLED"],
    benchmarks: {
      antutu: 2780000,
      geekbenchSingle: 3950,
      geekbenchMulti: 14800,
      batteryLife: 10,
    },
    specs: {
      display: '13" Ultra Retina XDR Tandem OLED 120Hz',
      displayType: "OLED",
      displaySize: "13",
      refresh: 120,
      processor: "Apple M4",
      ram: 16,
      storage: 256,
      camera: "12MP rear / 12MP front",
      battery: "38.99Wh, ~10 hours",
      software: "iPadOS 19",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      "The most powerful tablet ever made. Tandem OLED display is the best screen on any device. M4 chip can replace a laptop for most creative work.",
    pickFor: "creator",
    pickLabel: "✦ Creator Pick",
    releaseDate: "2025-05",
  },
  {
    id: "ipad-pro-m4",
    brand: "Apple",
    name: 'iPad Pro M4 (11")',
    price: 129900,
    priceFormatted: "₹1,29,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-m4-11.jpg",
    category: "ultra",
    type: "ios",
    formFactor: "pro",
    tags: ["5G", '11"', "iPad", "M4", "OLED"],
    benchmarks: {
      antutu: 2780000,
      geekbenchSingle: 3950,
      geekbenchMulti: 14800,
      batteryLife: 10,
    },
    specs: {
      display: '11" Ultra Retina XDR OLED',
      displayType: "OLED",
      displaySize: "11",
      refresh: 120,
      processor: "Apple M4",
      ram: 8,
      storage: 256,
      camera: "12MP rear / 12MP front",
      battery: "31.49Wh, ~10 hours",
      software: "iPadOS 19",
      stylusSupport: true,
      keyboardSupport: true,
    },
    verdict:
      'The most powerful 11" tablet ever made. Tandem OLED display is the best screen on any device this size.',
    releaseDate: "2025-05",
  },
];

// ═══════════════════════════════════════════════════════════════════
// LAPTOPS (new!)
// ═══════════════════════════════════════════════════════════════════

export const laptops: Laptop[] = [
  // BUDGET
  {
    id: "acer-aspire-3",
    brand: "Acer",
    name: "Aspire 3 A315",
    price: 29990,
    priceFormatted: "₹29,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-acer-aspire-3.jpg",
    category: "budget",
    type: "ultrabook",
    tags: ['15.6"', "i3", "Budget"],
    benchmarks: { pcbMark: 8500, cinebenchR23Multi: 4500, batteryLife: 6 },
    specs: {
      display: '15.6" FHD IPS',
      displayType: "IPS",
      displaySize: "15.6",
      refresh: 60,
      resolution: "1920x1080",
      processor: "Intel Core i3-1215U",
      cores: 6,
      ram: 8,
      storage: 512,
      storageType: "SSD",
      gpu: "Intel UHD Graphics",
      battery: "45Wh, ~6 hours",
      weight: "1.8 kg",
      software: "Windows 11 Home",
      ports: ["USB-C", "USB-A x2", "HDMI", "3.5mm"],
    },
    verdict:
      "Honest budget laptop for students. Won't win any benchmarks but handles Office, browser tabs, and Netflix just fine. 512GB SSD is generous at this price.",
    releaseDate: "2025-12",
  },
  {
    id: "lenovo-ideapad-slim-3",
    brand: "Lenovo",
    name: "IdeaPad Slim 3",
    price: 38990,
    priceFormatted: "₹38,990",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/laptop-lenovo-ideapad-slim-3.jpg",
    category: "budget",
    type: "ultrabook",
    tags: ['15.6"', "Ryzen 5", "Budget"],
    benchmarks: { pcbMark: 11200, cinebenchR23Multi: 7800, batteryLife: 8 },
    specs: {
      display: '15.6" FHD IPS',
      displayType: "IPS",
      displaySize: "15.6",
      refresh: 60,
      resolution: "1920x1080",
      processor: "AMD Ryzen 5 7530U",
      cores: 6,
      ram: 8,
      storage: 512,
      storageType: "SSD",
      gpu: "AMD Radeon Graphics",
      battery: "47Wh, ~8 hours",
      weight: "1.6 kg",
      software: "Windows 11 Home",
      ports: ["USB-C", "USB-A x2", "HDMI", "SD", "3.5mm"],
    },
    verdict:
      "Best bang-for-buck laptop in India. Ryzen 5 7530U handles everything except gaming. Build quality punches way above its weight.",
    releaseDate: "2025-10",
  },
  // MIDRANGE
  {
    id: "asus-vivobook-s-15",
    brand: "ASUS",
    name: "Vivobook S 15 OLED",
    price: 62990,
    priceFormatted: "₹62,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-asus-vivobook-s-15.jpg",
    category: "midrange",
    type: "ultrabook",
    tags: ['15.6"', "OLED", "Ryzen 7"],
    benchmarks: { pcbMark: 14500, cinebenchR23Multi: 12000, batteryLife: 9 },
    specs: {
      display: '15.6" 2.8K OLED 120Hz',
      displayType: "OLED",
      displaySize: "15.6",
      refresh: 120,
      resolution: "2880x1620",
      processor: "AMD Ryzen 7 8845HS",
      cores: 8,
      ram: 16,
      storage: 512,
      storageType: "SSD",
      gpu: "AMD Radeon 780M",
      battery: "75Wh, ~9 hours",
      weight: "1.7 kg",
      software: "Windows 11 Home",
      ports: ["USB-C x2", "USB-A", "HDMI", "3.5mm"],
    },
    verdict:
      "OLED at 63K. The display alone is worth it. Ryzen 7 8845HS with Radeon 780M can actually game at 1080p. Crazy good value.",
    pickFor: "creator",
    pickLabel: "✦ Creator Pick",
    releaseDate: "2025-11",
  },
  {
    id: "macbook-air-m3-13",
    brand: "Apple",
    name: 'MacBook Air M3 (13")',
    price: 99900,
    priceFormatted: "₹99,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-macbook-air-m3-13.jpg",
    category: "premium",
    type: "macbook",
    tags: ['13"', "M3", "MacBook"],
    benchmarks: { pcbMark: 15800, cinebenchR23Multi: 10500, batteryLife: 18 },
    specs: {
      display: '13.6" Liquid Retina',
      displayType: "Retina",
      displaySize: "13.6",
      refresh: 60,
      resolution: "2560x1664",
      processor: "Apple M3",
      cores: 8,
      ram: 8,
      storage: 256,
      storageType: "SSD",
      gpu: "Apple M3 GPU (8-core)",
      battery: "52.6Wh, ~18 hours",
      weight: "1.24 kg",
      software: "macOS Sequoia",
      ports: ["USB-C x2 (Thunderbolt)", "MagSafe", "3.5mm"],
    },
    verdict:
      "The laptop most people should buy. 18 hours of battery, silent fanless design, and the M3 chip handles anything short of gaming. macOS is just chef's kiss.",
    releaseDate: "2024-03",
  },
  {
    id: "lenovo-yoga-slim-7",
    brand: "Lenovo",
    name: "Yoga Slim 7i Carbon",
    price: 94990,
    priceFormatted: "₹94,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-lenovo-yoga-slim-7i.jpg",
    category: "premium",
    type: "ultrabook",
    tags: ['14.5"', "OLED", "Ultra 7"],
    benchmarks: { pcbMark: 16800, cinebenchR23Multi: 13200, batteryLife: 13 },
    specs: {
      display: '14.5" 2.8K OLED 120Hz',
      displayType: "OLED",
      displaySize: "14.5",
      refresh: 120,
      resolution: "2880x1800",
      processor: "Intel Core Ultra 7 155H",
      cores: 16,
      ram: 16,
      storage: 1024,
      storageType: "NVMe",
      gpu: "Intel Arc Graphics",
      battery: "70Wh, ~13 hours",
      weight: "1.1 kg",
      software: "Windows 11 Home",
      ports: ["USB-C x2 (Thunderbolt)", "USB-A", "HDMI", "3.5mm"],
    },
    verdict:
      "Premium Windows ultrabook. 1.1 kg feels like nothing, OLED display is gorgeous, and the Ultra 7 chip is a beast. The XPS-killer.",
    releaseDate: "2026-01",
  },
  // FLAGSHIP
  {
    id: "asus-rog-zephyrus-g14",
    brand: "ASUS",
    name: "ROG Zephyrus G14",
    price: 149990,
    priceFormatted: "₹1,49,990",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/laptop-asus-rog-zephyrus-g14.jpg",
    category: "flagship",
    type: "gaming",
    tags: ['14"', "RTX 4070", "OLED", "Gaming"],
    benchmarks: { pcbMark: 19200, cinebenchR23Multi: 18500, batteryLife: 7 },
    specs: {
      display: '14" 2.8K OLED 120Hz',
      displayType: "OLED",
      displaySize: "14",
      refresh: 120,
      resolution: "2880x1800",
      processor: "AMD Ryzen 9 8945HS",
      cores: 8,
      ram: 16,
      storage: 1024,
      storageType: "NVMe",
      gpu: "NVIDIA RTX 4070 Laptop",
      vram: 8,
      battery: "76Wh, ~7 hours",
      weight: "1.5 kg",
      software: "Windows 11 Home",
      ports: ["USB-C", "USB-A x2", "HDMI", "SD", "3.5mm"],
    },
    verdict:
      'The 14" gaming laptop perfected. RTX 4070 in a 1.5kg chassis with an OLED display. AAA gaming on the go without breaking your back.',
    pickFor: "gaming",
    pickLabel: "🎮 Gaming Pick",
    releaseDate: "2026-02",
  },
  {
    id: "macbook-pro-m4-14",
    brand: "Apple",
    name: 'MacBook Pro M4 Pro (14")',
    price: 199900,
    priceFormatted: "₹1,99,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-macbook-pro-m4-14.jpg",
    category: "flagship",
    type: "macbook",
    tags: ['14"', "M4 Pro", "XDR"],
    benchmarks: { pcbMark: 28500, cinebenchR23Multi: 22500, batteryLife: 22 },
    specs: {
      display: '14.2" Liquid Retina XDR mini-LED 120Hz',
      displayType: "Mini-LED",
      displaySize: "14.2",
      refresh: 120,
      resolution: "3024x1964",
      processor: "Apple M4 Pro",
      cores: 12,
      ram: 24,
      storage: 512,
      storageType: "NVMe",
      gpu: "Apple M4 Pro GPU (16-core)",
      battery: "72.4Wh, ~22 hours",
      weight: "1.55 kg",
      software: "macOS Sequoia",
      ports: ["USB-C x3 (Thunderbolt 5)", "HDMI", "SDXC", "MagSafe", "3.5mm"],
    },
    verdict:
      "The Pro laptop that does it all. M4 Pro handles 4K video editing, 3D rendering, and software development without breaking a sweat. 22 hours of battery. The reference.",
    pickFor: "business",
    pickLabel: "💼 Business Pick",
    releaseDate: "2025-11",
  },
  // ULTRA
  {
    id: "macbook-pro-m4-max-16",
    brand: "Apple",
    name: 'MacBook Pro M4 Max (16")',
    price: 349900,
    priceFormatted: "₹3,49,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/laptop-macbook-pro-m4-16.jpg",
    category: "ultra",
    type: "macbook",
    tags: ['16"', "M4 Max", "XDR", "Creator"],
    benchmarks: { pcbMark: 38500, cinebenchR23Multi: 32000, batteryLife: 21 },
    specs: {
      display: '16.2" Liquid Retina XDR mini-LED 120Hz',
      displayType: "Mini-LED",
      displaySize: "16.2",
      refresh: 120,
      resolution: "3456x2234",
      processor: "Apple M4 Max",
      cores: 16,
      ram: 36,
      storage: 1024,
      storageType: "NVMe",
      gpu: "Apple M4 Max GPU (40-core)",
      battery: "100Wh, ~21 hours",
      weight: "2.14 kg",
      software: "macOS Sequoia",
      ports: ["USB-C x3 (Thunderbolt 5)", "HDMI", "SDXC", "MagSafe", "3.5mm"],
    },
    verdict:
      "Mobile workstation. M4 Max with 40-core GPU and 36GB unified memory. Edit 8K, render in Blender, compile huge codebases — all on battery for hours.",
    releaseDate: "2025-11",
  },
  {
    id: "asus-rog-strix-scar-18",
    brand: "ASUS",
    name: "ROG Strix SCAR 18",
    price: 399990,
    priceFormatted: "₹3,99,990",
    image:
      "https://fdn2.gsmarena.com/vv/bigpic/laptop-asus-rog-strix-scar-18.jpg",
    category: "ultra",
    type: "gaming",
    tags: ['18"', "RTX 5090", "240Hz", "Gaming"],
    benchmarks: { pcbMark: 35000, cinebenchR23Multi: 28000, batteryLife: 4 },
    specs: {
      display: '18" QHD+ Mini-LED 240Hz',
      displayType: "Mini-LED",
      displaySize: "18",
      refresh: 240,
      resolution: "2560x1600",
      processor: "Intel Core Ultra 9 285HX",
      cores: 24,
      ram: 64,
      storage: 2048,
      storageType: "NVMe",
      gpu: "NVIDIA RTX 5090 Laptop",
      vram: 16,
      battery: "90Wh, ~4 hours",
      weight: "3.2 kg",
      software: "Windows 11 Pro",
      ports: [
        "USB-C x2 (Thunderbolt)",
        "USB-A x3",
        "HDMI 2.1",
        "RJ45",
        "SD",
        "3.5mm",
      ],
    },
    verdict:
      "A desktop replacement that goes to LAN parties. RTX 5090 mobile, 64GB RAM, and a 240Hz mini-LED display. Pure unapologetic gaming power.",
    releaseDate: "2026-03",
  },
];

// ═══════════════════════════════════════════════════════════════════
// DESKTOPS / PCS (new!)
// ═══════════════════════════════════════════════════════════════════

export const pcs: PC[] = [
  {
    id: "mac-mini-m4",
    brand: "Apple",
    name: "Mac mini M4",
    price: 49900,
    priceFormatted: "₹49,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/pc-mac-mini-m4.jpg",
    category: "midrange",
    type: "mini-pc",
    tags: ["Mini", "M4", "Apple"],
    benchmarks: {
      pcbMark: 21500,
      cinebenchR23Multi: 11000,
      cinebenchR23Single: 1750,
    },
    specs: {
      processor: "Apple M4",
      cores: 10,
      ram: 16,
      ramType: "DDR5",
      storage: 256,
      storageType: "SSD",
      gpu: "Apple M4 GPU (10-core)",
      psu: "Built-in",
      formFactor: 'Mini PC (7.7" square)',
      operatingSystem: "macOS Sequoia",
    },
    verdict:
      'The cheapest Mac ever. 10-core M4 in a 7.7" square. Silent, fast, and the perfect living-room PC or dev workstation. Bring your own monitor.',
    releaseDate: "2024-11",
  },
  {
    id: "intel-nuc-13",
    brand: "Intel",
    name: "NUC 13 Pro",
    price: 38990,
    priceFormatted: "₹38,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/pc-intel-nuc-13.jpg",
    category: "budget",
    type: "mini-pc",
    tags: ["Mini", "NUC"],
    benchmarks: {
      pcbMark: 11800,
      cinebenchR23Multi: 8500,
      cinebenchR23Single: 1750,
    },
    specs: {
      processor: "Intel Core i5-1340P",
      cores: 12,
      ram: 16,
      ramType: "DDR4",
      storage: 512,
      storageType: "NVMe",
      gpu: "Intel Iris Xe",
      psu: "External 120W",
      formFactor: 'Mini PC (4.6" square)',
      operatingSystem: "Windows 11 Pro",
    },
    verdict:
      "Tiny office PC that fits behind a monitor. i5-1340P handles Office, browser, and light creative work. Great for digital signage and kiosks too.",
    releaseDate: "2024-04",
  },
  {
    id: "asus-rog-strix-g16",
    brand: "ASUS",
    name: "ROG Strix G16 (Desktop)",
    price: 149990,
    priceFormatted: "₹1,49,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/pc-asus-rog-strix-g16.jpg",
    category: "flagship",
    type: "gaming-rig",
    tags: ["Gaming", "RTX 4070", "i7"],
    benchmarks: {
      pcbMark: 22500,
      cinebenchR23Multi: 19500,
      cinebenchR23Single: 2050,
    },
    specs: {
      processor: "Intel Core i7-14700KF",
      cores: 20,
      ram: 32,
      ramType: "DDR5",
      storage: 1024,
      storageType: "NVMe",
      gpu: "NVIDIA RTX 4070 Super",
      vram: 12,
      psu: "850W Gold",
      formFactor: "Mid Tower",
      operatingSystem: "Windows 11 Home",
    },
    verdict:
      "Plug-and-play gaming PC. RTX 4070 Super handles every game at 1440p. 32GB DDR5 and a 14th-gen i7 for streaming and editing on the side.",
    pickFor: "gaming",
    pickLabel: "🎮 Gaming Pick",
    releaseDate: "2026-01",
  },
  {
    id: "mac-studio-m4-max",
    brand: "Apple",
    name: "Mac Studio M4 Max",
    price: 249900,
    priceFormatted: "₹2,49,900",
    image: "https://fdn2.gsmarena.com/vv/bigpic/pc-mac-studio-m4-max.jpg",
    category: "ultra",
    type: "workstation",
    tags: ["Workstation", "M4 Max", "Creator"],
    benchmarks: {
      pcbMark: 42000,
      cinebenchR23Multi: 33500,
      cinebenchR23Single: 2780,
    },
    specs: {
      processor: "Apple M4 Max",
      cores: 16,
      ram: 36,
      ramType: "DDR5",
      storage: 512,
      storageType: "NVMe",
      gpu: "Apple M4 Max GPU (40-core)",
      psu: "Built-in 480W",
      formFactor: 'Compact Tower (7.7" x 7.7" x 3.7")',
      operatingSystem: "macOS Sequoia",
    },
    verdict:
      "The desktop for creators who don't want a tower. Silent, ridiculously fast, and fits on your desk. Render farms in a Mac Studio box.",
    pickFor: "creator",
    pickLabel: "✦ Creator Pick",
    releaseDate: "2025-11",
  },
  {
    id: "alienware-aurora-r16",
    brand: "Alienware",
    name: "Aurora R16 RTX 4090",
    price: 399990,
    priceFormatted: "₹3,99,990",
    image: "https://fdn2.gsmarena.com/vv/bigpic/pc-alienware-aurora-r16.jpg",
    category: "ultra",
    type: "gaming-rig",
    tags: ["Gaming", "RTX 4090", "i9"],
    benchmarks: {
      pcbMark: 38500,
      cinebenchR23Multi: 35000,
      cinebenchR23Single: 2350,
    },
    specs: {
      processor: "Intel Core i9-14900KF",
      cores: 24,
      ram: 64,
      ramType: "DDR5",
      storage: 2048,
      storageType: "NVMe",
      gpu: "NVIDIA RTX 4090",
      vram: 24,
      psu: "1000W Platinum",
      formFactor: "Mid Tower (Legend 2.0 design)",
      operatingSystem: "Windows 11 Home",
    },
    verdict:
      "The no-compromise gaming rig. RTX 4090 + i9-14900KF + 64GB DDR5. Runs every game at 4K max settings, every tool at full speed. The dream machine.",
    releaseDate: "2025-12",
  },
];

// ═══════════════════════════════════════════════════════════════════
// LEGACY EXPORTS (backward compat)
// ═══════════════════════════════════════════════════════════════════

// For old code paths that imported categories from phones.ts
export const categories = [
  {
    id: "phones",
    tag: "Phones",
    title: "Every ",
    titleHighlight: "Phone",
    description: "Browse all phones by budget tier.",
    phones,
  },
];

export const allPhones = phones;
