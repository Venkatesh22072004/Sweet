export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderStatus {
  id: string;
  status: "pending" | "confirmed" | "preparing" | "baking" | "out_for_delivery" | "delivered";
  estimatedTime: string;
  currentLocation: string;
  latitude: number;
  longitude: number;
  trackingUpdates: {
    time: string;
    status: string;
    message: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Mango Cake",
    price: 450,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
    description: "Delicious mango cake made with fresh mangoes and cream",
    category: "Cakes",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "Gulab Jamun Donut",
    price: 120,
    image: "https://images.unsplash.com/photo-1631386291646-21ffa35d3d3f?w=500&h=500&fit=crop",
    description: "Traditional gulab jamun flavored donuts with rose glaze",
    category: "Donuts",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "3",
    name: "Masala Cookies",
    price: 280,
    image: "https://images.unsplash.com/photo-1548365328-c9fa89d128fa?w=500&h=500&fit=crop",
    description: "Spiced Indian chai cookies with cardamom and ginger",
    category: "Cookies",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "4",
    name: "Chocolate Croissant",
    price: 150,
    image: "https://images.unsplash.com/photo-1589080876197-9a9ab8f5bfc1?w=500&h=500&fit=crop",
    description: "Buttery croissant with dark chocolate filling",
    category: "Pastries",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "5",
    name: "Jaggery Brownie",
    price: 200,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
    description: "Fudgy brownie sweetened with traditional jaggery",
    category: "Brownies",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "6",
    name: "Coconut Laddoo",
    price: 320,
    image: "https://images.unsplash.com/photo-1578357078519-ecf75a1ff0d5?w=500&h=500&fit=crop",
    description: "Traditional coconut laddoos with condensed milk",
    category: "Sweets",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "7",
    name: "Saffron Cheesecake",
    price: 550,
    image: "https://images.unsplash.com/photo-1605350322066-b9af5f8c2fa6?w=500&h=500&fit=crop",
    description: "Creamy cheesecake infused with saffron and cardamom",
    category: "Cakes",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "8",
    name: "Banana Bread",
    price: 180,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&h=500&fit=crop",
    description: "Moist banana bread with walnuts",
    category: "Bread",
    rating: 4.3,
    inStock: true,
  },
];

export const CATEGORIES = ["All", "Cakes", "Pastries", "Cookies", "Donuts", "Brownies", "Sweets", "Bread"];

export const SAMPLE_ORDER: OrderStatus = {
  id: "ORD-2024-001",
  status: "out_for_delivery",
  estimatedTime: "30 mins",
  currentLocation: "Bandra West, Mumbai",
  latitude: 19.056,
  longitude: 72.8295,
  trackingUpdates: [
    {
      time: "10:30 AM",
      status: "Order Confirmed",
      message: "Your order has been confirmed",
    },
    {
      time: "10:45 AM",
      status: "Preparing",
      message: "Our bakers are preparing your delicious treats",
    },
    {
      time: "11:15 AM",
      status: "Baking",
      message: "Your items are being baked to perfection",
    },
    {
      time: "11:45 AM",
      status: "Out for Delivery",
      message: "Your order is on the way! Our delivery partner is here.",
    },
  ],
};
