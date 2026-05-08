export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "espresso" | "manual-brew" | "signature" | "non-coffee" | "food";
  image: string;
  isSignature?: boolean;
}

export const menuItems: MenuItem[] = [
  // Espresso Drinks
  {
    id: "esp-001",
    name: "Espresso",
    description: "Single shot espresso dari biji arabica pilihan",
    price: 25000,
    category: "espresso",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format",
  },
  {
    id: "esp-002",
    name: "Cappuccino",
    description: "Espresso dengan susu steamed dan foam lembut",
    price: 35000,
    category: "espresso",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format",
  },
  {
    id: "esp-003",
    name: "Flat White",
    description: "Ristretto shot dengan microfoam susu premium",
    price: 38000,
    category: "espresso",
    image: "https://images.unsplash.com/photo-1547825407-6b83a9e8b7f6?w=800&auto=format",
  },
  {
    id: "esp-004",
    name: "Caramel Macchiato",
    description: "Espresso, vanilla, susu, dan caramel sauce",
    price: 42000,
    category: "espresso",
    image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&auto=format",
  },
  {
    id: "esp-005",
    name: "Piccolo Latte",
    description: "Ristretto dalam gelas piccolo dengan susu steamed",
    price: 32000,
    category: "espresso",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format",
  },

  // Manual Brew
  {
    id: "man-001",
    name: "V60 Pour Over",
    description: "Single origin dengan metode V60, rasa clean dan bright",
    price: 35000,
    category: "manual-brew",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format",
  },
  {
    id: "man-002",
    name: "Aeropress",
    description: "Kopi medium body dengan acidity seimbang",
    price: 33000,
    category: "manual-brew",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format",
  },
  {
    id: "man-003",
    name: "French Press",
    description: "Full body coffee dengan rasa kaya dan bold",
    price: 38000,
    category: "manual-brew",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&auto=format",
  },
  {
    id: "man-004",
    name: "Siphon Coffee",
    description: "Metode teatrikal dengan rasa clean dan kompleks",
    price: 45000,
    category: "manual-brew",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format",
  },

  // Signature Drinks
  {
    id: "sig-001",
    name: "Insight Special",
    description: "House blend espresso, gula aren, dan cold foam pandan",
    price: 48000,
    category: "signature",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format",
    isSignature: true,
  },
  {
    id: "sig-002",
    name: "Kopi Susu Gula Aren",
    description: "Espresso dengan susu fresh dan gula aren asli",
    price: 38000,
    category: "signature",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&auto=format",
    isSignature: true,
  },
  {
    id: "sig-003",
    name: "Es Kopi Kelapa",
    description: "Cold brew dengan santan kelapa dan gula merah",
    price: 42000,
    category: "signature",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format",
    isSignature: true,
  },
  {
    id: "sig-004",
    name: "Affogato Nusantara",
    description: "Es krim kelapa dengan double shot espresso",
    price: 45000,
    category: "signature",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format",
    isSignature: true,
  },

  // Non-Coffee
  {
    id: "non-001",
    name: "Matcha Latte",
    description: "Premium matcha Jepang dengan susu steamed",
    price: 40000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1536013266877-59950c2e8c7b?w=800&auto=format",
  },
  {
    id: "non-002",
    name: "Chocolate Hazelnut",
    description: "Cokelat premium dengan hazelnut dan susu",
    price: 42000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&auto=format",
  },
  {
    id: "non-003",
    name: "Teh Tarik",
    description: "Teh hitam dengan susu kental manis, disajikan panas",
    price: 28000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format",
  },
  {
    id: "non-004",
    name: "Lemon Tea",
    description: "Teh hitam segar dengan perasan lemon asli",
    price: 25000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1556881286-fcb8ac27e806?w=800&auto=format",
  },

  // Food
  {
    id: "food-001",
    name: "Croissant Butter",
    description: "Croissant klasik dengan lapisan butter premium",
    price: 28000,
    category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format",
  },
  {
    id: "food-002",
    name: "Pisang Bakar Cokelat",
    description: "Pisang bakar dengan lelehan cokelat dan keju",
    price: 32000,
    category: "food",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&auto=format",
  },
  {
    id: "food-003",
    name: "Sandwich Tuna Melt",
    description: "Tuna salad dengan keju mozzarella panggang",
    price: 45000,
    category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format",
  },
  {
    id: "food-004",
    name: "Nasi Goreng Kampung",
    description: "Nasi goreng dengan telur, ayam suwir, dan kerupuk",
    price: 38000,
    category: "food",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format",
  },
  {
    id: "food-005",
    name: "Tiramisu",
    description: "Dessert klasik Italia dengan sentuhan kopi espresso",
    price: 42000,
    category: "food",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format",
  },
];

export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

export function getMenuItemsByCategory(category: MenuItem["category"]): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getMenuItemsByIds(ids: string[]): MenuItem[] {
  return ids.map((id) => getMenuItemById(id)).filter((item): item is MenuItem => item !== undefined);
}
