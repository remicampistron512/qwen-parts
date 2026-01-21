export const PRODUCTS = [
    // =========================
    // Motherboards
    // =========================
    {
        id: 1,
        category: "motherboard",
        title: "ASUS B550",
        shortDescription: "AM4 ATX motherboard with PCIe 4.0",
        longDescription:
            "The ASUS B550 platform is a great foundation for AM4 builds, offering PCIe 4.0 support for modern GPUs and NVMe SSDs. With solid power delivery and a feature-rich BIOS, it’s designed for stable everyday gaming and productivity while keeping upgrade paths open within the AM4 ecosystem.",
        price: 149.99,
        img: "/img/motherboard.png",
        details: {
            formFactor: "ATX",
            socket: "AM4",
            chipset: "B550",
            memoryType: "DDR4",
            memorySlots: 4,
            maxMemory: "128GB",
            pciExpress: "PCIe 4.0",
            m2Slots: 2,
            sataPorts: 6,
            wifi: "No (model dependent)",
            notes: "PCIe 4.0 support requires a compatible Ryzen CPU.",
        },
    },
    {
        id: 2,
        category: "motherboard",
        title: "MSI B760",
        shortDescription: "Intel LGA1700 motherboard for 12th/13th gen",
        longDescription:
            "The MSI B760 motherboard is built for Intel LGA1700 processors, providing a balanced mix of performance and connectivity. It’s a strong choice for modern Intel gaming PCs, with efficient layout design, fast storage support, and stable power delivery for long-term reliability.",
        price: 169.99,
        img: "/img/motherboard2.png",
        details: {
            formFactor: "ATX (varies by model)",
            socket: "LGA1700",
            chipset: "B760",
            memoryType: "DDR4 or DDR5 (model dependent)",
            memorySlots: 4,
            maxMemory: "128GB",
            pciExpress: "PCIe 4.0 / PCIe 5.0 (slot dependent)",
            m2Slots: 2,
            sataPorts: 4,
            wifi: "Optional (model dependent)",
            notes: "Check DDR4 vs DDR5 version before purchasing.",
        },
    },
    {
        id: 5,
        category: "motherboard",
        title: "Gigabyte X570 AORUS Elite",
        shortDescription: "AM4 ATX motherboard, PCIe 4.0, strong VRM cooling",
        longDescription:
            "The Gigabyte X570 AORUS Elite is a performance-focused AM4 motherboard designed for higher-end Ryzen builds. It features PCIe 4.0 lanes, robust VRM cooling, and excellent expansion potential, making it ideal for gamers and creators who want fast NVMe storage and strong platform stability.",
        price: 189.99,
        img: "/img/motherboard-x570.jpg",
        details: {
            formFactor: "ATX",
            socket: "AM4",
            chipset: "X570",
            memoryType: "DDR4",
            memorySlots: 4,
            maxMemory: "128GB",
            pciExpress: "PCIe 4.0",
            m2Slots: 2,
            sataPorts: 6,
            wifi: "No (WiFi version exists on some variants)",
            notes: "X570 boards may require chipset fan cooling.",
        },
    },
    {
        id: 6,
        category: "motherboard",
        title: "ASRock B650M Pro RS",
        shortDescription: "AM5 micro-ATX motherboard, DDR5 support, PCIe 4.0",
        longDescription:
            "The ASRock B650M Pro RS is a compact AM5 motherboard that brings DDR5 and PCIe 4.0 support to modern Ryzen 7000 builds. It’s engineered for high efficiency and feature balance, providing a strong base for gaming and productivity in micro-ATX builds without unnecessary extras.",
        price: 159.99,
        img: "/img/motherboard-b650m.jpg",
        details: {
            formFactor: "Micro-ATX",
            socket: "AM5",
            chipset: "B650",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemory: "128GB",
            pciExpress: "PCIe 4.0",
            m2Slots: 2,
            sataPorts: 4,
            wifi: "No (WiFi via add-on card)",
            notes: "Ideal for AM5 + DDR5 value builds.",
        },
    },

    // =========================
    // CPUs
    // =========================
    {
        id: 3,
        category: "cpu",
        title: "Ryzen 7 5800X",
        shortDescription: "8 cores / 16 threads, great for gaming + productivity",
        longDescription:
            "The Ryzen 7 5800X is a high-performance AM4 processor with 8 cores and 16 threads, offering excellent gaming results and strong productivity performance. It’s a great upgrade for existing AM4 systems and remains a solid option for balanced gaming and content creation workloads.",
        price: 229.99,
        img: "/img/ryzen-7.jpg",
        details: {
            brand: "AMD",
            socket: "AM4",
            cores: 8,
            threads: 16,
            baseClock: "3.8 GHz",
            boostClock: "Up to 4.7 GHz",
            tdp: "105W",
            integratedGraphics: "No",
            coolerIncluded: "No",
            notes: "Pair with a good air/AIO cooler for best thermals.",
        },
    },
    {
        id: 7,
        category: "cpu",
        title: "AMD Ryzen 5 5600",
        shortDescription: "6 cores / 12 threads, excellent value gaming CPU",
        longDescription:
            "The Ryzen 5 5600 is one of the best value AM4 gaming CPUs, combining 6 cores and 12 threads with strong single-core performance. It’s an excellent choice for mid-range gaming builds and pairs well with GPUs up to the upper-mid range at 1080p and 1440p.",
        price: 139.99,
        img: "/img/ryzen-5.jpg",
        details: {
            brand: "AMD",
            socket: "AM4",
            cores: 6,
            threads: 12,
            baseClock: "3.5 GHz",
            boostClock: "Up to 4.4 GHz",
            tdp: "65W",
            integratedGraphics: "No",
            coolerIncluded: "Yes (varies by region/bundle)",
            notes: "Great choice for budget + performance builds.",
        },
    },
    {
        id: 8,
        category: "cpu",
        title: "AMD Ryzen 7 7800X3D",
        shortDescription: "8 cores / 16 threads, top-tier gaming performance",
        longDescription:
            "The Ryzen 7 7800X3D is a top-tier gaming processor for AM5 platforms, featuring 3D V-Cache for exceptional gaming performance in CPU-heavy titles. It’s designed for enthusiasts who want maximum FPS and smooth frame times, especially when paired with high-end GPUs.",
        price: 399.99,
        img: "/img/ryzen-7800x3d.jpg",
        details: {
            brand: "AMD",
            socket: "AM5",
            cores: 8,
            threads: 16,
            baseClock: "4.2 GHz",
            boostClock: "Up to 5.0 GHz",
            tdp: "120W",
            integratedGraphics: "Yes (basic iGPU)",
            coolerIncluded: "No",
            notes: "Best paired with DDR5 6000 for optimal gaming performance.",
        },
    },
    {
        id: 9,
        category: "cpu",
        title: "Intel Core i5-13600K",
        shortDescription: "14 cores (6P+8E), strong gaming and multitasking",
        longDescription:
            "The Intel Core i5-13600K delivers excellent gaming performance and strong multi-threaded capabilities thanks to its hybrid core design. With powerful single-core speed and efficient cores for background tasks, it’s a strong option for high-refresh gaming and creative workflows.",
        price: 309.99,
        img: "/img/i5-13600k.jpg",
        details: {
            brand: "Intel",
            socket: "LGA1700",
            cores: 14,
            threads: 20,
            coreLayout: "6 Performance-cores + 8 Efficient-cores",
            baseClock: "3.5 GHz (P-core)",
            boostClock: "Up to 5.1 GHz",
            tdp: "125W (base)",
            integratedGraphics: "Yes (Intel UHD)",
            coolerIncluded: "No",
            notes: "Unlocked CPU—best used with Z-series chipset for overclocking.",
        },
    },

    // =========================
    // GPUs
    // =========================
    {
        id: 10,
        category: "gpu",
        title: "NVIDIA GeForce RTX 4060",
        shortDescription: "8GB GDDR6, great 1080p/1440p performance",
        longDescription:
            "The RTX 4060 is a modern GPU designed for efficient 1080p gaming and entry-level 1440p performance. With support for DLSS, ray tracing, and excellent power efficiency, it’s a strong choice for compact builds and gamers who want smooth performance without high power draw.",
        price: 329.99,
        img: "/img/rtx-4060.jpg",
        details: {
            brand: "NVIDIA",
            vram: "8GB GDDR6",
            recommendedResolution: "1080p / 1440p",
            rayTracing: "Yes",
            dlss: "Yes",
            powerConnector: "1x 8-pin (varies by model)",
            recommendedPSU: "550W",
            notes: "DLSS can significantly improve FPS in supported games.",
        },
    },
    {
        id: 11,
        category: "gpu",
        title: "NVIDIA GeForce RTX 4070 SUPER",
        shortDescription: "Excellent 1440p GPU, DLSS support, efficient power draw",
        longDescription:
            "The RTX 4070 SUPER is a premium 1440p gaming GPU with excellent ray tracing performance and strong efficiency. It’s ideal for high refresh-rate gaming and content creation workflows that benefit from CUDA acceleration, delivering a great balance between power and performance.",
        price: 649.99,
        img: "/img/rtx-4070-super.jpg",
        details: {
            brand: "NVIDIA",
            vram: "12GB GDDR6X",
            recommendedResolution: "1440p / Entry 4K",
            rayTracing: "Yes",
            dlss: "Yes",
            powerConnector: "16-pin (12VHPWR) or adapter (varies)",
            recommendedPSU: "650W",
            notes: "Great for 1440p ultra settings + ray tracing.",
        },
    },
    {
        id: 12,
        category: "gpu",
        title: "AMD Radeon RX 7800 XT",
        shortDescription: "Strong 1440p raster performance with 16GB VRAM",
        longDescription:
            "The RX 7800 XT is an excellent 1440p GPU focused on high raster performance and generous VRAM capacity. With 16GB of memory, it’s well-suited for modern high-texture games and delivers strong value for gamers prioritizing raw performance over heavy ray tracing workloads.",
        price: 519.99,
        img: "/img/rx-7800xt.jpg",
        details: {
            brand: "AMD",
            vram: "16GB GDDR6",
            recommendedResolution: "1440p",
            rayTracing: "Yes",
            upscaling: "FSR",
            powerConnector: "2x 8-pin (varies by model)",
            recommendedPSU: "700W",
            notes: "Excellent VRAM headroom for future-proofing at 1440p.",
        },
    },
    {
        id: 13,
        category: "gpu",
        title: "AMD Radeon RX 7600",
        shortDescription: "Great entry GPU for 1080p gaming",
        longDescription:
            "The RX 7600 is a value-focused GPU that targets smooth 1080p gaming. It provides good performance-per-euro and is a solid upgrade for older systems, offering modern encoder support and efficient operation in mainstream gaming builds.",
        price: 269.99,
        img: "/img/rx-7600.jpg",
        details: {
            brand: "AMD",
            vram: "8GB GDDR6",
            recommendedResolution: "1080p",
            rayTracing: "Yes",
            upscaling: "FSR",
            powerConnector: "1x 8-pin (varies by model)",
            recommendedPSU: "550W",
            notes: "Best paired with mid-range CPUs for balanced builds.",
        },
    },

    // =========================
    // RAM
    // =========================
    {
        id: 14,
        category: "ram",
        title: "Corsair Vengeance 16GB DDR4 (2x8GB)",
        shortDescription: "DDR4 3200MHz, solid performance for gaming builds",
        longDescription:
            "Corsair Vengeance DDR4 memory is a trusted choice for stable gaming performance and everyday productivity. With a balanced speed profile and wide compatibility, it’s a great match for mainstream builds aiming for smooth multitasking and responsive gameplay.",
        price: 49.99,
        img: "/img/ram-ddr4-16gb.webp",
        details: {
            capacity: "16GB (2x8GB)",
            type: "DDR4",
            speed: "3200MHz",
            latency: "CL16 (varies by kit)",
            voltage: "1.35V",
            profileSupport: "XMP",
            notes: "Perfect baseline for modern gaming at 1080p/1440p.",
        },
    },
    {
        id: 15,
        category: "ram",
        title: "G.SKILL Ripjaws 32GB DDR4 (2x16GB)",
        shortDescription: "DDR4 3600MHz, ideal for multitasking and content creation",
        longDescription:
            "G.SKILL Ripjaws DDR4 offers higher capacity and speed, making it ideal for users who multitask heavily or run memory-hungry applications. 32GB is a sweet spot for creative work, streaming, and modern games that benefit from extra headroom.",
        price: 79.99,
        img: "/img/ram-ddr4-32gb.jpg",
        details: {
            capacity: "32GB (2x16GB)",
            type: "DDR4",
            speed: "3600MHz",
            latency: "CL18 (varies by kit)",
            voltage: "1.35V",
            profileSupport: "XMP",
            notes: "Excellent for productivity + gaming builds.",
        },
    },
    {
        id: 16,
        category: "ram",
        title: "Kingston Fury Beast 32GB DDR5 (2x16GB)",
        shortDescription: "DDR5 6000MHz, perfect for AM5 / modern Intel builds",
        longDescription:
            "Kingston Fury Beast DDR5 provides high bandwidth and modern performance for the latest platforms. DDR5 6000MHz is a strong target for many builds, offering a great balance of speed and stability for gaming and productivity workloads.",
        price: 129.99,
        img: "/img/ram-ddr5-32gb.jpg",
        details: {
            capacity: "32GB (2x16GB)",
            type: "DDR5",
            speed: "6000MHz",
            latency: "CL36 (varies by kit)",
            voltage: "1.35V",
            profileSupport: "EXPO / XMP (varies by kit)",
            notes: "Great pairing for Ryzen 7000 and new Intel platforms.",
        },
    },

    // =========================
    // Storage
    // =========================
    {
        id: 17,
        category: "storage",
        title: "Samsung 980 1TB NVMe SSD",
        shortDescription: "PCIe 3.0 NVMe, fast boot + loading times",
        longDescription:
            "The Samsung 980 NVMe SSD provides fast system responsiveness and improved loading times compared to SATA drives. It’s a great option for OS + games storage, delivering a strong combination of performance, reliability, and value for mainstream builds.",
        price: 79.99,
        img: "/img/ssd-samsung-980.jpg",
        details: {
            capacity: "1TB",
            interface: "NVMe PCIe 3.0",
            formFactor: "M.2 2280",
            sequentialRead: "Up to 3500 MB/s",
            sequentialWrite: "Up to 3000 MB/s",
            endurance: "600 TBW (approx.)",
            notes: "Excellent boot drive for gaming PCs.",
        },
    },
    {
        id: 18,
        category: "storage",
        title: "WD Black SN850X 2TB NVMe SSD",
        shortDescription: "PCIe 4.0 NVMe, high-end gaming SSD performance",
        longDescription:
            "The WD Black SN850X is a high-performance PCIe 4.0 NVMe SSD built for demanding workloads and fast game loading. With excellent throughput and high capacity, it’s ideal for enthusiasts who want top-tier storage performance for large game libraries and creative projects.",
        price: 169.99,
        img: "/img/ssd-sn850x-2tb.webp",
        details: {
            capacity: "2TB",
            interface: "NVMe PCIe 4.0",
            formFactor: "M.2 2280",
            sequentialRead: "Up to 7300 MB/s",
            sequentialWrite: "Up to 6600 MB/s",
            endurance: "1200 TBW (approx.)",
            notes: "Great choice for high-end gaming + content creation.",
        },
    },
    {
        id: 19,
        category: "storage",
        title: "Seagate Barracuda 2TB HDD",
        shortDescription: "7200RPM HDD, good for mass storage and backups",
        longDescription:
            "The Seagate Barracuda 2TB HDD is a cost-effective storage option for large files, backups, and general data storage. While SSDs are recommended for OS and applications, a high-capacity HDD is still useful for bulk storage needs at a lower cost per gigabyte.",
        price: 54.99,
        img: "/img/hdd-2tb.jpg",
        details: {
            capacity: "2TB",
            type: "HDD",
            rpm: "7200 RPM",
            cache: "256MB (varies by model)",
            interface: "SATA III",
            usage: "Mass storage / backups",
            notes: "Use SSD for OS + apps, HDD for large file storage.",
        },
    },

    // =========================
    // Power Supplies
    // =========================
    {
        id: 4,
        category: "psu",
        title: "Corsair RM750",
        shortDescription: "750W Gold modular PSU, quiet and reliable",
        longDescription:
            "The Corsair RM750 is a high-quality power supply designed for stable operation and quiet performance. With 80+ Gold efficiency and modular cabling, it helps keep power delivery clean while simplifying cable management for a tidy, professional build.",
        price: 119.99,
        img: "/img/power-supply.jpg",
        details: {
            wattage: "750W",
            efficiency: "80+ Gold",
            modular: "Fully modular",
            fan: "135mm low-noise fan",
            protections: "OVP/UVP/OCP/OPP/SCP/OTP",
            recommendedBuild: "Mid-high range gaming PCs",
            notes: "Reliable choice for GPUs up to RTX 4070 class (varies by system).",
        },
    },
    {
        id: 20,
        category: "psu",
        title: "Seasonic Focus GX-850",
        shortDescription: "850W 80+ Gold, fully modular, premium build quality",
        longDescription:
            "The Seasonic Focus GX-850 is a premium PSU offering high efficiency, strong electrical performance, and fully modular cabling. It’s an excellent option for high-performance builds and upgrades, giving extra headroom for power-hungry GPUs and future expansions.",
        price: 139.99,
        img: "/img/psu-850w.jpg",
        details: {
            wattage: "850W",
            efficiency: "80+ Gold",
            modular: "Fully modular",
            fan: "120mm fluid dynamic bearing fan",
            protections: "OVP/UVP/OCP/OPP/SCP/OTP",
            recommendedBuild: "High-end gaming / workstation PCs",
            notes: "Plenty of headroom for powerful GPUs and upgrades.",
        },
    },

    // =========================
    // Cases
    // =========================
    {
        id: 21,
        category: "case",
        title: "NZXT H5 Flow",
        shortDescription: "Airflow-focused ATX mid tower with clean cable management",
        longDescription:
            "The NZXT H5 Flow is designed for modern airflow-focused builds, with a clean interior layout and excellent cable management options. It supports a wide range of cooling configurations and provides a premium building experience with a minimalist aesthetic.",
        price: 89.99,
        img: "/img/case-nzxt-h5.jpg",
        details: {
            type: "ATX Mid Tower",
            airflow: "High airflow front panel",
            radiatorSupport: "Up to 240/280mm (varies by placement)",
            gpuClearance: "Up to ~365mm (varies by config)",
            includedFans: "Varies by bundle",
            storage: "SSD/HDD mounts available",
            notes: "Great balance between thermals and clean design.",
        },
    },
    {
        id: 22,
        category: "case",
        title: "Corsair 4000D Airflow",
        shortDescription: "Excellent airflow case, great for high-performance builds",
        longDescription:
            "The Corsair 4000D Airflow is a popular mid tower case known for outstanding cooling potential and build quality. Its airflow front panel, smart cable management channels, and wide hardware compatibility make it ideal for performance-oriented gaming PCs.",
        price: 94.99,
        img: "/img/case-4000d.webp",
        details: {
            type: "ATX Mid Tower",
            airflow: "Airflow optimized front panel",
            radiatorSupport: "Up to 360mm front / 280mm top (varies by setup)",
            gpuClearance: "Up to ~360mm (varies by config)",
            includedFans: "Typically 2x 120mm",
            storage: "SSD/HDD mounts available",
            notes: "Excellent choice for high-end air or AIO builds.",
        },
    },

    // =========================
    // Coolers
    // =========================
    {
        id: 23,
        category: "cooler",
        title: "Cooler Master Hyper 212",
        shortDescription: "Legendary air cooler, solid performance for mid-range CPUs",
        longDescription:
            "The Cooler Master Hyper 212 is a classic air cooler that delivers reliable cooling performance at an accessible price. It’s well-suited for mid-range CPUs and offers a strong upgrade over stock coolers, improving temperatures and lowering noise.",
        price: 34.99,
        img: "/img/cooler-hyper212.jpg",
        details: {
            type: "Air cooler",
            fanSize: "120mm",
            height: "Approx. 155mm (varies by version)",
            compatibility: "Intel + AMD (mounting hardware included)",
            coolingTier: "Mid-range",
            notes: "Great value cooler for gaming builds.",
        },
    },
    {
        id: 24,
        category: "cooler",
        title: "NZXT Kraken 240 AIO",
        shortDescription: "240mm liquid cooler, quiet operation with strong cooling",
        longDescription:
            "The NZXT Kraken 240 is a premium 240mm AIO liquid cooler designed for strong cooling performance and refined acoustics. It’s a great match for modern CPUs and builds that prioritize both thermals and aesthetics, especially in cases with good radiator support.",
        price: 129.99,
        img: "/img/cooler-aio-240.jpg",
        details: {
            type: "AIO liquid cooler",
            radiatorSize: "240mm",
            fans: "2x 120mm",
            compatibility: "Intel + AMD (mounting hardware included)",
            coolingTier: "High performance",
            notes: "Ideal for high-performance CPUs and quieter operation.",
        },
    },
];
