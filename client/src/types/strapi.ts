// Strapi base interfaces
export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: StrapiImage | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiEventCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiOrganizer {
  id: number;
  documentId: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: StrapiImage | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiEvent {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured: boolean;
  event_date: string;
  location: string;
  participants_count: string;
  registration_link: string;
  featured_image: StrapiImage | null;
  overlay_text: string;
  contact_email: string;
  contact_time: string;
  contact_location: string;
  event_heading: string;
  event_subheading: string;
  category: StrapiEventCategory | null;
  organizer: StrapiOrganizer | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  readTime: string;
  tags: string[];
  featured_image: StrapiImage | null;
  author: StrapiAuthor | null;
  category: StrapiCategory | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// API Response interfaces
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> extends StrapiResponse<T[]> {}
export interface StrapiSingleResponse<T> extends StrapiResponse<T> {}

// Frontend-friendly interfaces (transformed from Strapi)
export interface Event {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured: boolean;
  eventDate: string;
  location: string;
  participantsCount: string;
  registrationLink: string;
  image: string;
  imageAlt: string;
  overlayText: string;
  contactEmail: string;
  contactTime: string;
  contactLocation: string;
  eventHeading: string;
  eventSubheading: string;
  category: {
    name: string;
    slug: string;
  };
  organizer: {
    name: string;
    email: string;
    bio?: string;
    avatar?: string;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  readTime: string;
  tags: string[];
  image: string;
  imageAlt: string;
  author: {
    name: string;
    email?: string;
    bio?: string;
    avatar?: string;
  };
  category: {
    name: string;
    slug: string;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
} 