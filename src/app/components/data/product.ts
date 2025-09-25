export interface Product {
  id: number;
  title: string;
  image: string;
  description?: string;
  category: string;
  price?: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Fresh Apples",
    image: "/assets/products/product-1.png",
    description: "Crisp and juicy red apples",
    category: "Citrus & Apples",
    price: 2.99
  },
  {
    id: 2,
    title: "Sweet Bananas",
    image: "/assets/products/product-2.png",
    description: "Perfectly ripe yellow bananas",
    category: "Tropical",
    price: 1.99
  },
  {
    id: 3,
    title: "Citrus Oranges",
    image: "/assets/products/product-3.png",
    description: "Vitamin C rich oranges",
    category: "Citrus & Apples",
    price: 3.49
  },
  {
    id: 4,
    title: "Red Grapes",
    image: "/assets/products/product-4.png",
    description: "Sweet and seedless grapes",
    category: "Berries & Grapes",
    price: 4.99
  },
  {
    id: 5,
    title: "Fresh Strawberries",
    image: "/assets/products/product-5.png",
    description: "Sweet and aromatic strawberries",
    category: "Berries & Grapes",
    price: 3.99
  },
  {
    id: 6,
    title: "Green Kiwi",
    image: "/assets/products/product-5.png",
    description: "Tropical and tangy kiwi fruit",
    category: "Tropical",
    price: 2.49
  },
  {
    id: 7,
    title: "Fresh Pineapple",
    image: "/assets/products/product-1.png",
    description: "Sweet and juicy pineapple",
    category: "Tropical",
    price: 4.49
  },
  {
    id: 8,
    title: "Green Grapes",
    image: "/assets/products/product-2.png",
    description: "Crisp and refreshing green grapes",
    category: "Berries & Grapes",
    price: 3.99
  },
  {
    id: 9,
    title: "Blueberries",
    image: "/assets/products/product-3.png",
    description: "Antioxidant-rich blueberries",
    category: "Berries & Grapes",
    price: 5.99
  },
  {
    id: 10,
    title: "Green Apples",
    image: "/assets/products/product-4.png",
    description: "Tart and crisp green apples",
    category: "Citrus & Apples",
    price: 2.79
  },
  {
    id: 11,
    title: "Mango",
    image: "/assets/products/product-5.png",
    description: "Sweet and tropical mango",
    category: "Tropical",
    price: 3.99
  },
  {
    id: 12,
    title: "Raspberries",
    image: "/assets/products/product-1.png",
    description: "Delicate and sweet raspberries",
    category: "Berries & Grapes",
    price: 6.99
  },
  {
    id: 13,
    title: "Lemon",
    image: "/assets/products/product-2.png",
    description: "Fresh and zesty lemons",
    category: "Citrus & Apples",
    price: 1.99
  },
  {
    id: 14,
    title: "Papaya",
    image: "/assets/products/product-3.png",
    description: "Sweet tropical papaya",
    category: "Tropical",
    price: 3.49
  },
  {
    id: 15,
    title: "Blackberries",
    image: "/assets/products/product-4.png",
    description: "Rich and flavorful blackberries",
    category: "Berries & Grapes",
    price: 4.99
  },
  {
    id: 16,
    title: "Grapefruit",
    image: "/assets/products/product-5.png",
    description: "Refreshing pink grapefruit",
    category: "Citrus & Apples",
    price: 2.99
  },
  {
    id: 17,
    title: "Coconut",
    image: "/assets/products/product-1.png",
    description: "Fresh tropical coconut",
    category: "Tropical",
    price: 3.99
  },
  {
    id: 18,
    title: "Cranberries",
    image: "/assets/products/product-2.png",
    description: "Tart and tangy cranberries",
    category: "Berries & Grapes",
    price: 3.49
  },
  {
    id: 19,
    title: "Lime",
    image: "/assets/products/product-3.png",
    description: "Fresh green limes",
    category: "Citrus & Apples",
    price: 1.49
  },
  {
    id: 20,
    title: "Passion Fruit",
    image: "/assets/products/product-4.png",
    description: "Exotic passion fruit",
    category: "Tropical",
    price: 4.99
  },
  {
    id: 21,
    title: "Gooseberries",
    image: "/assets/products/product-5.png",
    description: "Sweet and tart gooseberries",
    category: "Berries & Grapes",
    price: 5.49
  },
  {
    id: 22,
    title: "Tangerine",
    image: "/assets/products/product-1.png",
    description: "Sweet and easy to peel tangerines",
    category: "Citrus & Apples",
    price: 2.49
  },
  {
    id: 23,
    title: "Dragon Fruit",
    image: "/assets/products/product-2.png",
    description: "Exotic pink dragon fruit",
    category: "Tropical",
    price: 6.99
  },
  {
    id: 24,
    title: "Elderberries",
    image: "/assets/products/product-3.png",
    description: "Small but powerful elderberries",
    category: "Berries & Grapes",
    price: 7.99
  }
];

export const categories = [
  "All",
  "Citrus & Apples",
  "Tropical", 
  "Berries & Grapes"
];
