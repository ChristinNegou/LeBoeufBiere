export type MenuCategory =
  | "entrees"
  | "plats"
  | "grillades"
  | "bieres"
  | "desserts"
  | "boissons";

export interface MenuItem {
  id: string;
  name_fr: string;
  name_en?: string;
  description_fr?: string;
  description_en?: string;
  category: MenuCategory;
  price: number;
  image_url?: string;
  is_vegetarian: boolean;
  is_gluten_free: boolean;
  is_popular: boolean;
  is_new: boolean;
  is_available: boolean;
  sort_order: number;
  created_at: string;
}

export interface Reservation {
  id: string;
  confirmation_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  party_size: number;
  special_occasion?: string;
  message?: string;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
}

export interface ReservationFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  party_size: number;
  special_occasion?: string;
  message?: string;
}
