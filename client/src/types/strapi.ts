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
  avatar?: {
    data: StrapiImage | null;
  };
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
  featured_image: {
    data: StrapiImage | null;
  };
  author: {
    data: StrapiAuthor | null;
  };
  category: {
    data: StrapiCategory | null;
  };
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