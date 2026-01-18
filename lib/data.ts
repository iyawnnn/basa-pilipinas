export interface Book {
  _id: string; // Ready for MongoDB ObjectId
  title: string;
  author: string;
  slug: string;
  originalPrice: number;
  discountedPrice: number;
  coverImage: string;
  inStock: boolean;
  platforms: {
    shopee?: string;
    lazada?: string;
    tiktok?: string;
  };
}

export const TEASER_BOOKS: Book[] = [
  {
    _id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    slug: "atomic-habits",
    originalPrice: 799,
    discountedPrice: 399,
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    inStock: true,
    platforms: { shopee: "#", tiktok: "#" }
  },
  {
    _id: "2",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    slug: "it-ends-with-us",
    originalPrice: 650,
    discountedPrice: 325,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    inStock: true,
    platforms: { lazada: "#", tiktok: "#" }
  },
  {
    _id: "3",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    slug: "psychology-of-money",
    originalPrice: 850,
    discountedPrice: 425,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    inStock: true,
    platforms: { shopee: "#" }
  },
  {
    _id: "4",
    title: "Noli Me Tángere",
    author: "José Rizal",
    slug: "noli-me-tangere",
    originalPrice: 400,
    discountedPrice: 200,
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    inStock: true,
    platforms: { shopee: "#", lazada: "#" }
  },
];