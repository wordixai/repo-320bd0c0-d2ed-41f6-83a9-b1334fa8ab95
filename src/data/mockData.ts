import { Fan, Event, Track, Merchandise, Collaborator } from '../types';

export const mockFans: Fan[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1-555-0123',
    location: 'Los Angeles, CA',
    segment: 'VIP',
    totalSpent: 1250,
    lastInteraction: '2024-01-15',
    socialMedia: {
      instagram: '@sarah_music_lover',
      twitter: '@sarahj_music'
    },
    preferences: ['Rock', 'Live Shows', 'Vinyl'],
    events: ['1', '3']
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    location: 'New York, NY',
    segment: 'Regular',
    totalSpent: 450,
    lastInteraction: '2024-01-10',
    preferences: ['Indie', 'Streaming'],
    events: ['2']
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma.r@email.com',
    location: 'Austin, TX',
    segment: 'New',
    totalSpent: 75,
    lastInteraction: '2024-01-20',
    preferences: ['Alternative', 'Merchandise'],
    events: []
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Rock Festival',
    date: '2024-07-15',
    time: '19:00',
    venue: 'Madison Square Garden',
    location: 'New York, NY',
    capacity: 20000,
    ticketsSold: 18500,
    ticketPrice: 85,
    status: 'upcoming',
    description: 'Epic summer rock festival featuring multiple artists',
    revenue: 1572500
  },
  {
    id: '2',
    title: 'Acoustic Night',
    date: '2024-02-20',
    time: '20:00',
    venue: 'Blue Note',
    location: 'Chicago, IL',
    capacity: 300,
    ticketsSold: 280,
    ticketPrice: 45,
    status: 'completed',
    description: 'Intimate acoustic performance',
    revenue: 12600
  }
];

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Electric Dreams',
    artist: 'The Sound Collective',
    album: 'Neon Nights',
    duration: 245,
    genre: 'Electronic Rock',
    releaseDate: '2024-01-15',
    streamingPlatforms: {
      spotify: 'https://open.spotify.com/track/example',
      apple: 'https://music.apple.com/us/album/example',
      youtube: 'https://youtube.com/watch?v=example'
    },
    revenue: {
      streaming: 2340,
      downloads: 890
    },
    plays: 156780
  },
  {
    id: '2',
    title: 'Midnight Highway',
    artist: 'The Sound Collective',
    album: 'Road Stories',
    duration: 198,
    genre: 'Rock',
    releaseDate: '2023-11-20',
    streamingPlatforms: {
      spotify: 'https://open.spotify.com/track/example2',
      apple: 'https://music.apple.com/us/album/example2',
      youtube: 'https://youtube.com/watch?v=example2'
    },
    revenue: {
      streaming: 1890,
      downloads: 650
    },
    plays: 89450
  }
];

export const mockMerchandise: Merchandise[] = [
  {
    id: '1',
    name: 'Band Logo T-Shirt',
    category: 'apparel',
    price: 25,
    cost: 8,
    stock: 150,
    sold: 320,
    description: 'Classic black t-shirt with band logo'
  },
  {
    id: '2',
    name: 'Limited Edition Vinyl',
    category: 'vinyl',
    price: 35,
    cost: 12,
    stock: 25,
    sold: 180,
    description: 'Limited edition vinyl of latest album'
  }
];

export const mockCollaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'producer',
    email: 'alex.rivera@studio.com',
    phone: '+1-555-0456',
    skills: ['Mixing', 'Mastering', 'Production'],
    availability: 'available',
    projects: ['Neon Nights Album', 'Summer Tour']
  },
  {
    id: '2',
    name: 'Jordan Kim',
    role: 'sound-engineer',
    email: 'jordan.kim@audio.com',
    skills: ['Live Sound', 'Recording', 'Equipment Setup'],
    availability: 'busy',
    projects: ['Summer Tour']
  }
];