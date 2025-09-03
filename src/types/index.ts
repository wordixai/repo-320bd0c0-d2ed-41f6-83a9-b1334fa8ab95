export interface Fan {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location: string;
  segment: 'VIP' | 'Regular' | 'New' | 'Inactive';
  totalSpent: number;
  lastInteraction: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  preferences: string[];
  events: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  capacity: number;
  ticketsSold: number;
  ticketPrice: number;
  status: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  description: string;
  poster?: string;
  revenue: number;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  genre: string;
  releaseDate: string;
  streamingPlatforms: {
    spotify: string;
    apple: string;
    youtube: string;
  };
  revenue: {
    streaming: number;
    downloads: number;
  };
  plays: number;
}

export interface Merchandise {
  id: string;
  name: string;
  category: 'apparel' | 'accessories' | 'vinyl' | 'digital' | 'other';
  price: number;
  cost: number;
  stock: number;
  sold: number;
  description: string;
  image?: string;
}

export interface Collaborator {
  id: string;
  name: string;
  role: 'band-member' | 'producer' | 'manager' | 'sound-engineer' | 'other';
  email: string;
  phone?: string;
  skills: string[];
  availability: 'available' | 'busy' | 'unavailable';
  projects: string[];
}

export interface RevenueData {
  streaming: number;
  merchandise: number;
  events: number;
  total: number;
  period: string;
}