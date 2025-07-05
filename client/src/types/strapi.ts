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

// Component interfaces
export interface StrapiTargetCity {
  id: number;
  name: string;
  category: string;
  is_host: boolean;
}

export interface StrapiPricingPackage {
  id: number;
  title: string;
  subtitle?: string;
  price?: string;
  gst: string;
  features: string[];
  button_text: string;
  bg_color: string;
  is_popular: boolean;
  text_color?: string;
}

export interface StrapiEventFlowItem {
  id: number;
  time: string;
  title: string;
  description: string;
  day: number;
  icon: string;
}

// Why City Section component interfaces
export interface StrapiCityStatistic {
  id: number;
  statistic_display_number: string;
  statistic_description_label: string;
  growth_or_rank_indicator: string;
  statistic_icon: StrapiImage | null;
  icon_alt_text?: string;
  display_order?: number;
}

export interface StrapiCityAdvantage {
  id: number;
  advantage_title: string;
  advantage_main_description: string;
  advantage_detailed_info: string;
  advantage_icon: StrapiImage | null;
  icon_alt_text?: string;
  advantage_category_tag: string;
  display_order?: number;
}

export interface StrapiEvent {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured: boolean;
  event_status: 'upcoming' | 'live' | 'completed';
  event_date: string;
  location: string;
  participants_count: string;
  registration_link: string;
  featured_image: StrapiImage | null;
  event_hero_image: StrapiImage | null;
  featured_video_url?: string;
  media_type: 'image' | 'video' | 'video_url';
  overlay_text: string;
  contact_email: string;
  contact_time: string;
  contact_location: string;
  event_heading: string;
  event_subheading: string;
  category: StrapiEventCategory | null;
  organizer: StrapiOrganizer | null;
  target_cities: StrapiTargetCity[];
  target_markets_title: string;
  target_markets_description?: string;
  pricing_packages: StrapiPricingPackage[];
  pricing_section_title: string;
  pricing_section_description: string;
  event_flow_items: StrapiEventFlowItem[];
  event_flow_title: string;
  event_flow_description: string;
  google_maps_embed_url?: string;
  why_city_section_title: string;
  why_city_section_badge_text: string;
  why_city_section_description: string;
  city_statistics: StrapiCityStatistic[];
  city_advantages: StrapiCityAdvantage[];
  why_city_section_enabled: boolean;
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

// News Content Block interface
export interface StrapiNewsContentBlock {
  id: number;
  type: 'text' | 'image' | 'quote' | 'video';
  content?: string;
  image?: StrapiImage | null;
  image_caption?: string;
  image_position?: 'left' | 'right' | 'center' | 'full-width';
  image_size?: 'small' | 'medium' | 'large' | 'full';
  quote_text?: string;
  quote_author?: string;
  video_url?: string;
  order: number;
}

export interface StrapiNewsArticle {
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
  gallery_images: StrapiImage[];
  content_blocks: StrapiNewsContentBlock[];
  news_category: 'latest-news' | 'business-insights' | 'featured';
  priority: number;
  author: StrapiAuthor | null;
  category: StrapiCategory | null;
  related_news: StrapiNewsArticle[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiRegistrationConfig {
  id: number;
  documentId: string;
  sellerRegistrationUrl: string;
  buyerRegistrationUrl: string;
  sellerRegistrationText: string;
  buyerRegistrationText: string;
  modalTitle: string;
  modalDescription?: string;
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
export interface TargetCity {
  id: number;
  name: string;
  category: string;
  isHost: boolean;
}

export interface PricingPackage {
  id: number;
  title: string;
  subtitle?: string;
  price?: string;
  gst: string;
  features: string[];
  buttonText: string;
  bgColor: string;
  isPopular: boolean;
  textColor?: string;
}

export interface EventFlowItem {
  id: number;
  time: string;
  title: string;
  description: string;
  day: number;
  icon: string;
}

// Why City Section frontend interfaces  
export interface CityStatistic {
  id: number;
  number: string;
  label: string;
  growth: string;
  icon: string;
  iconAlt?: string;
  order?: number;
}

export interface CityAdvantage {
  id: number;
  title: string;
  description: string;
  detailedInfo: string;
  iconUrl: string;
  iconAlt?: string;
  category: string;
  order?: number;
}

export interface WhyCitySection {
  title: string;
  badgeText: string;
  description: string;
  cityStatistics: CityStatistic[];
  cityAdvantages: CityAdvantage[];
  enabled: boolean;
}

export interface Event {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured: boolean;
  eventStatus: 'upcoming' | 'live' | 'completed';
  eventDate: string;
  location: string;
  participantsCount: string;
  registrationLink: string;
  image: string;
  imageAlt: string;
  heroImage?: string;
  heroImageAlt?: string;
  videoUrl?: string;
  mediaType: 'image' | 'video' | 'video_url';
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
  targetCities: TargetCity[];
  targetMarketsTitle: string;
  targetMarketsDescription?: string;
  pricingPackages: PricingPackage[];
  pricingSectionTitle: string;
  pricingSectionDescription: string;
  eventFlowItems: EventFlowItem[];
  eventFlowTitle: string;
  eventFlowDescription: string;
  googleMapsEmbedUrl?: string;
  whyCitySection?: WhyCitySection;
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

// Frontend-friendly news interfaces
export interface NewsContentBlock {
  id: number;
  type: 'text' | 'image' | 'quote' | 'video';
  content?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imagePosition?: 'left' | 'right' | 'center' | 'full-width';
  imageSize?: 'small' | 'medium' | 'large' | 'full';
  quoteText?: string;
  quoteAuthor?: string;
  videoUrl?: string;
  order: number;
}

export interface NewsArticle {
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
  galleryImages: string[];
  contentBlocks: NewsContentBlock[];
  newsCategory: 'latest-news' | 'business-insights' | 'featured';
  priority: number;
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
  relatedNews: NewsArticle[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegistrationConfig {
  id: number;
  documentId: string;
  sellerRegistrationUrl: string;
  buyerRegistrationUrl: string;
  sellerRegistrationText: string;
  buyerRegistrationText: string;
  modalTitle: string;
  modalDescription?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}