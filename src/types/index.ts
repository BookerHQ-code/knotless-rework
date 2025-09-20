// Basic types for frontend styling
export interface Stylist {
  id: string;
  name: string;
  image?: string;
  bio?: string;
  location: string;
  rating?: number;
  reviewCount?: number;
  specialties: string[];
  priceRange?: string;
  verified?: boolean;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  publishedDate: string;
  slug: string;
}

export interface ServiceType {
  name: string;
  icon: string;
  description?: string;
}
