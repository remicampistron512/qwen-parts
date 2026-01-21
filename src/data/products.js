export const PRODUCTS = [
    // =========================
    // Motherboards
    // =========================
    {
        id: 1,
        category: "motherboard",
        title: "ASUS B550",
        description: "AM4 ATX motherboard with PCIe 4.0",
        price: 149.99,
        img: "/img/motherboard.png",
    },
    {
        id: 2,
        category: "motherboard",
        title: "MSI B760",
        description: "Intel LGA1700 motherboard for 12th/13th gen",
        price: 169.99,
        img: "/img/motherboard2.png",
    },
    {
        id: 5,
        category: "motherboard",
        title: "Gigabyte X570 AORUS Elite",
        description: "AM4 ATX motherboard, PCIe 4.0, strong VRM cooling",
        price: 189.99,
        img: "/img/motherboard-x570.jpg",
    },
    {
        id: 6,
        category: "motherboard",
        title: "ASRock B650M Pro RS",
        description: "AM5 micro-ATX motherboard, DDR5 support, PCIe 4.0",
        price: 159.99,
        img: "/img/motherboard-b650m.jpg",
    },

    // =========================
    // CPUs
    // =========================
    {
        id: 3,
        category: "cpu",
        title: "Ryzen 7 5800X",
        description: "8 cores / 16 threads, great for gaming + productivity",
        price: 229.99,
        img: "/img/ryzen-7.jpg",
    },
    {
        id: 7,
        category: "cpu",
        title: "AMD Ryzen 5 5600",
        description: "6 cores / 12 threads, excellent value gaming CPU",
        price: 139.99,
        img: "/img/ryzen-5.jpg",
    },
    {
        id: 8,
        category: "cpu",
        title: "AMD Ryzen 7 7800X3D",
        description: "8 cores / 16 threads, top-tier gaming performance",
        price: 399.99,
        img: "/img/ryzen-7800x3d.jpg",
    },
    {
        id: 9,
        category: "cpu",
        title: "Intel Core i5-13600K",
        description: "14 cores (6P+8E), strong gaming and multitasking",
        price: 309.99,
        img: "/img/i5-13600k.jpg",
    },

    // =========================
    // GPUs
    // =========================
    {
        id: 10,
        category: "gpu",
        title: "NVIDIA GeForce RTX 4060",
        description: "8GB GDDR6, great 1080p/1440p performance",
        price: 329.99,
        img: "/img/rtx-4060.jpg",
    },
    {
        id: 11,
        category: "gpu",
        title: "NVIDIA GeForce RTX 4070 SUPER",
        description: "Excellent 1440p GPU, DLSS support, efficient power draw",
        price: 649.99,
        img: "/img/rtx-4070-super.jpg",
    },
    {
        id: 12,
        category: "gpu",
        title: "AMD Radeon RX 7800 XT",
        description: "Strong 1440p raster performance with 16GB VRAM",
        price: 519.99,
        img: "/img/rx-7800xt.jpg",
    },
    {
        id: 13,
        category: "gpu",
        title: "AMD Radeon RX 7600",
        description: "Great entry GPU for 1080p gaming",
        price: 269.99,
        img: "/img/rx-7600.jpg",
    },

    // =========================
    // RAM
    // =========================
    {
        id: 14,
        category: "ram",
        title: "Corsair Vengeance 16GB DDR4 (2x8GB)",
        description: "DDR4 3200MHz, solid performance for gaming builds",
        price: 49.99,
        img: "/img/ram-ddr4-16gb.webp",
    },
    {
        id: 15,
        category: "ram",
        title: "G.SKILL Ripjaws 32GB DDR4 (2x16GB)",
        description: "DDR4 3600MHz, ideal for multitasking and content creation",
        price: 79.99,
        img: "/img/ram-ddr4-32gb.jpg",
    },
    {
        id: 16,
        category: "ram",
        title: "Kingston Fury Beast 32GB DDR5 (2x16GB)",
        description: "DDR5 6000MHz, perfect for AM5 / modern Intel builds",
        price: 129.99,
        img: "/img/ram-ddr5-32gb.jpg",
    },

    // =========================
    // Storage
    // =========================
    {
        id: 17,
        category: "storage",
        title: "Samsung 980 1TB NVMe SSD",
        description: "PCIe 3.0 NVMe, fast boot + loading times",
        price: 79.99,
        img: "/img/ssd-samsung-980.jpg",
    },
    {
        id: 18,
        category: "storage",
        title: "WD Black SN850X 2TB NVMe SSD",
        description: "PCIe 4.0 NVMe, high-end gaming SSD performance",
        price: 169.99,
        img: "/img/ssd-sn850x-2tb.webp",
    },
    {
        id: 19,
        category: "storage",
        title: "Seagate Barracuda 2TB HDD",
        description: "7200RPM HDD, good for mass storage and backups",
        price: 54.99,
        img: "/img/hdd-2tb.jpg",
    },

    // =========================
    // Power Supplies
    // =========================
    {
        id: 4,
        category: "psu",
        title: "Corsair RM750",
        description: "750W Gold modular PSU, quiet and reliable",
        price: 119.99,
        img: "/img/power-supply.jpg",
    },
    {
        id: 20,
        category: "psu",
        title: "Seasonic Focus GX-850",
        description: "850W 80+ Gold, fully modular, premium build quality",
        price: 139.99,
        img: "/img/psu-850w.jpg",
    },

    // =========================
    // Cases
    // =========================
    {
        id: 21,
        category: "case",
        title: "NZXT H5 Flow",
        description: "Airflow-focused ATX mid tower with clean cable management",
        price: 89.99,
        img: "/img/case-nzxt-h5.jpg",
    },
    {
        id: 22,
        category: "case",
        title: "Corsair 4000D Airflow",
        description: "Excellent airflow case, great for high-performance builds",
        price: 94.99,
        img: "/img/case-4000d.webp",
    },

    // =========================
    // Coolers
    // =========================
    {
        id: 23,
        category: "cooler",
        title: "Cooler Master Hyper 212",
        description: "Legendary air cooler, solid performance for mid-range CPUs",
        price: 34.99,
        img: "/img/cooler-hyper212.jpg",
    },
    {
        id: 24,
        category: "cooler",
        title: "NZXT Kraken 240 AIO",
        description: "240mm liquid cooler, quiet operation with strong cooling",
        price: 129.99,
        img: "/img/cooler-aio-240.jpg",
    },
];
