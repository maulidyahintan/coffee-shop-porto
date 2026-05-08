export interface Branch {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  lat: number;
  lng: number;
  description: string;
  heroImage: string;
  galleryImages: string[];
  videoUrl?: string;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  features: {
    liveMusic: boolean;
    workingSpace: boolean;
    indoor: boolean;
    outdoor: boolean;
    roastery: boolean;
    parking: boolean;
    wifi: boolean;
  };
  menuItemIds: string[];
  isFeatured: boolean;
}

export const branches: Branch[] = [
  {
    id: "branch-001",
    slug: "jakarta-selatan",
    name: "Coffee Shop Jakarta Selatan",
    city: "Jakarta Selatan",
    address: "Jl. Kemang Raya No. 88, Bangka, Mampang Prapatan, Jakarta Selatan 12730",
    phone: "+62 21 7199 8888",
    whatsapp: "6281111111001",
    lat: -6.2634,
    lng: 106.8166,
    description: "Cabang flagship kami di jantung Kemang dengan roastery sendiri. Nikmati atmosfer hangat dengan live music setiap Jumat malam.",
    heroImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
    ],
    videoUrl: "https://example.com/branch-jakarta-selatan.mp4",
    openingHours: {
      monday: "07.00 - 22.00",
      tuesday: "07.00 - 22.00",
      wednesday: "07.00 - 22.00",
      thursday: "07.00 - 22.00",
      friday: "07.00 - 23.00",
      saturday: "08.00 - 23.00",
      sunday: "08.00 - 22.00",
    },
    features: {
      liveMusic: true,
      workingSpace: true,
      indoor: true,
      outdoor: true,
      roastery: true,
      parking: true,
      wifi: true,
    },
    menuItemIds: [
      "esp-001", "esp-002", "esp-003", "esp-004", "esp-005",
      "man-001", "man-002", "man-003", "man-004",
      "sig-001", "sig-002", "sig-003", "sig-004",
      "non-001", "non-002", "non-003", "non-004",
      "food-001", "food-002", "food-003", "food-004", "food-005",
    ],
    isFeatured: true,
  },
  {
    id: "branch-002",
    slug: "bandung-dago",
    name: "Coffee Shop Bandung Dago",
    city: "Bandung",
    address: "Jl. Ir. H. Juanda (Dago) No. 125, Coblong, Bandung, Jawa Barat 40135",
    phone: "+62 22 2500 3333",
    whatsapp: "6281111111002",
    lat: -6.8978,
    lng: 107.6128,
    description: "Terletak di area Dago yang sejuk, cabang ini menawarkan pemandangan pegunungan dan suasana cozy untuk bekerja atau bersantai.",
    heroImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&q=80&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80&auto=format&fit=crop",
    ],
    openingHours: {
      monday: "08.00 - 21.00",
      tuesday: "08.00 - 21.00",
      wednesday: "08.00 - 21.00",
      thursday: "08.00 - 21.00",
      friday: "08.00 - 22.00",
      saturday: "08.00 - 22.00",
      sunday: "08.00 - 21.00",
    },
    features: {
      liveMusic: false,
      workingSpace: true,
      indoor: true,
      outdoor: true,
      roastery: false,
      parking: true,
      wifi: true,
    },
    menuItemIds: [
      "esp-001", "esp-002", "esp-003", "esp-005",
      "man-001", "man-002", "man-003",
      "sig-001", "sig-002", "sig-003",
      "non-001", "non-002", "non-003", "non-004",
      "food-001", "food-002", "food-005",
    ],
    isFeatured: true,
  },
  {
    id: "branch-003",
    slug: "surabaya-pakuwon",
    name: "Coffee Shop Surabaya Pakuwon",
    city: "Surabaya",
    address: "Pakuwon Mall, Lantai Ground, Jl. Puncak Indah Lontar No. 2, Surabaya, Jawa Timur 60216",
    phone: "+62 31 7345 6789",
    whatsapp: "6281111111003",
    lat: -7.2894,
    lng: 112.6789,
    description: "Lokasi strategis di Pakuwon Mall dengan konsep modern-minimalis. Sempurna untuk meeting atau me-time sambil berbelanja.",
    heroImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
    ],
    openingHours: {
      monday: "10.00 - 22.00",
      tuesday: "10.00 - 22.00",
      wednesday: "10.00 - 22.00",
      thursday: "10.00 - 22.00",
      friday: "10.00 - 22.00",
      saturday: "10.00 - 22.00",
      sunday: "10.00 - 22.00",
    },
    features: {
      liveMusic: false,
      workingSpace: true,
      indoor: true,
      outdoor: false,
      roastery: false,
      parking: true,
      wifi: true,
    },
    menuItemIds: [
      "esp-001", "esp-002", "esp-003", "esp-004",
      "man-001", "man-002",
      "sig-001", "sig-002", "sig-004",
      "non-001", "non-002", "non-003",
      "food-001", "food-003", "food-005",
    ],
    isFeatured: true,
  },
  {
    id: "branch-004",
    slug: "yogyakarta-prawirotaman",
    name: "Coffee Shop Yogyakarta Prawirotaman",
    city: "Yogyakarta",
    address: "Jl. Prawirotaman II No. 45, Mergangsan, Yogyakarta 55153",
    phone: "+62 274 388 9999",
    whatsapp: "6281111111004",
    lat: -7.8126,
    lng: 110.3776,
    description: "Berada di kawasan heritage Prawirotaman dengan bangunan bergaya Jawa kolonial. Ruang terbuka hijau yang asri untuk bersantai.",
    heroImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80&auto=format&fit=crop",
    ],
    openingHours: {
      monday: "07.00 - 21.00",
      tuesday: "07.00 - 21.00",
      wednesday: "07.00 - 21.00",
      thursday: "07.00 - 21.00",
      friday: "07.00 - 22.00",
      saturday: "07.00 - 22.00",
      sunday: "07.00 - 21.00",
    },
    features: {
      liveMusic: true,
      workingSpace: true,
      indoor: true,
      outdoor: true,
      roastery: false,
      parking: true,
      wifi: true,
    },
    menuItemIds: [
      "esp-001", "esp-002", "esp-003",
      "man-001", "man-002", "man-004",
      "sig-001", "sig-002", "sig-003",
      "non-001", "non-003", "non-004",
      "food-001", "food-002", "food-004", "food-005",
    ],
    isFeatured: false,
  },
  {
    id: "branch-005",
    slug: "bali-canggu",
    name: "Coffee Shop Bali Canggu",
    city: "Bali",
    address: "Jl. Pantai Batu Bolong No. 88X, Canggu, Kec. Kuta Utara, Badung, Bali 80351",
    phone: "+62 361 846 7777",
    whatsapp: "6281111111005",
    lat: -8.6481,
    lng: 115.1384,
    description: "Cabang tropical beachside kami dengan desain terbuka dan pemandangan sunset. Spot favorit para digital nomad dan surfer.",
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80&auto=format&fit=crop",
    ],
    openingHours: {
      monday: "06.30 - 22.00",
      tuesday: "06.30 - 22.00",
      wednesday: "06.30 - 22.00",
      thursday: "06.30 - 22.00",
      friday: "06.30 - 23.00",
      saturday: "06.30 - 23.00",
      sunday: "06.30 - 22.00",
    },
    features: {
      liveMusic: true,
      workingSpace: true,
      indoor: true,
      outdoor: true,
      roastery: false,
      parking: true,
      wifi: true,
    },
    menuItemIds: [
      "esp-001", "esp-002", "esp-003", "esp-004",
      "man-001", "man-003",
      "sig-001", "sig-003", "sig-004",
      "non-001", "non-002", "non-004",
      "food-001", "food-003", "food-005",
    ],
    isFeatured: false,
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((branch) => branch.slug === slug);
}

export function getFeaturedBranches(): Branch[] {
  return branches.filter((branch) => branch.isFeatured);
}

export function getAllBranchSlugs(): string[] {
  return branches.map((branch) => branch.slug);
}
