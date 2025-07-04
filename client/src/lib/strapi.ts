import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { 
  StrapiBlogPost, 
  StrapiCollectionResponse, 
  StrapiSingleResponse,
  BlogPost,
  StrapiCategory,
  StrapiEvent,
  Event,
  TargetCity,
  PricingPackage,
  EventFlowItem,
  StrapiNewsArticle,
  NewsArticle,
  StrapiNewsContentBlock,
  NewsContentBlock,
  StrapiRegistrationConfig,
  RegistrationConfig,
  StrapiCityStatistic,
  StrapiCityAdvantage,
  CityStatistic,
  CityAdvantage,
  WhyCitySection
} from "@/types/strapi";

const BASE_URL = getStrapiURL();

// Transform functions for components
function transformTargetCity(strapiCity: any): TargetCity {
  return {
    id: strapiCity.id,
    name: strapiCity.name,
    category: strapiCity.category,
    isHost: strapiCity.is_host
  };
}

function transformPricingPackage(strapiPackage: any): PricingPackage {
  return {
    id: strapiPackage.id,
    title: strapiPackage.title,
    subtitle: strapiPackage.subtitle,
    price: strapiPackage.price,
    gst: strapiPackage.gst,
    features: Array.isArray(strapiPackage.features) ? strapiPackage.features : [],
    buttonText: strapiPackage.button_text,
    bgColor: strapiPackage.bg_color,
    isPopular: strapiPackage.is_popular,
    textColor: strapiPackage.text_color
  };
}

function transformEventFlowItem(strapiItem: any): EventFlowItem {
  return {
    id: strapiItem.id,
    time: strapiItem.time,
    title: strapiItem.title,
    description: strapiItem.description,
    day: strapiItem.day,
    icon: strapiItem.icon
  };
}

// Transform Why City Section components
function transformCityStatistic(strapiStat: StrapiCityStatistic): CityStatistic {
  const iconUrl = strapiStat.statistic_icon?.url 
    ? (strapiStat.statistic_icon.url.startsWith('http') 
        ? strapiStat.statistic_icon.url 
        : `${BASE_URL}${strapiStat.statistic_icon.url}`)
    : "/assets/globe-people.png"; // Fallback icon

  return {
    id: strapiStat.id,
    number: strapiStat.statistic_display_number,
    label: strapiStat.statistic_description_label,
    growth: strapiStat.growth_or_rank_indicator,
    icon: iconUrl,
    iconAlt: strapiStat.icon_alt_text,
    order: strapiStat.display_order
  };
}

function transformCityAdvantage(strapiAdvantage: StrapiCityAdvantage): CityAdvantage {
  const iconUrl = strapiAdvantage.advantage_icon?.url 
    ? (strapiAdvantage.advantage_icon.url.startsWith('http') 
        ? strapiAdvantage.advantage_icon.url 
        : `${BASE_URL}${strapiAdvantage.advantage_icon.url}`)
    : "/assets/globe.svg"; // Fallback icon

  return {
    id: strapiAdvantage.id,
    title: strapiAdvantage.advantage_title,
    description: strapiAdvantage.advantage_main_description,
    detailedInfo: strapiAdvantage.advantage_detailed_info,
    iconUrl: iconUrl,
    iconAlt: strapiAdvantage.icon_alt_text,
    bgColor: strapiAdvantage.card_background_color,
    category: strapiAdvantage.advantage_category_tag,
    order: strapiAdvantage.display_order
  };
}

function transformWhyCitySection(strapiEvent: StrapiEvent): WhyCitySection | undefined {
  if (!strapiEvent.why_city_section_enabled) {
    return undefined;
  }

  const cityStatistics = (strapiEvent.city_statistics || [])
    .map(transformCityStatistic)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const cityAdvantages = (strapiEvent.city_advantages || [])
    .map(transformCityAdvantage)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return {
    title: strapiEvent.why_city_section_title,
    badgeText: strapiEvent.why_city_section_badge_text,
    description: strapiEvent.why_city_section_description,
    cityStatistics,
    cityAdvantages,
    enabled: strapiEvent.why_city_section_enabled
  };
}

// Transform Strapi news content block to frontend-friendly format
function transformNewsContentBlock(strapiBlock: StrapiNewsContentBlock): NewsContentBlock {
  const imageUrl = strapiBlock.image?.url 
    ? (strapiBlock.image.url.startsWith('http') 
        ? strapiBlock.image.url 
        : `${BASE_URL}${strapiBlock.image.url}`)
    : undefined;

  return {
    id: strapiBlock.id,
    type: strapiBlock.type,
    content: strapiBlock.content,
    image: imageUrl,
    imageAlt: strapiBlock.image?.alternativeText || undefined,
    imageCaption: strapiBlock.image_caption,
    imagePosition: strapiBlock.image_position,
    imageSize: strapiBlock.image_size,
    quoteText: strapiBlock.quote_text,
    quoteAuthor: strapiBlock.quote_author,
    videoUrl: strapiBlock.video_url,
    order: strapiBlock.order
  };
}

// Transform Strapi news article to frontend-friendly format
function transformNewsArticle(strapiNews: StrapiNewsArticle): NewsArticle {
  const imageUrl = strapiNews.featured_image?.url 
    ? (strapiNews.featured_image.url.startsWith('http') 
        ? strapiNews.featured_image.url 
        : `${BASE_URL}${strapiNews.featured_image.url}`)
    : "/assets/networking.jpg"; // Fallback image

  const galleryImages = strapiNews.gallery_images?.map(img => 
    img.url.startsWith('http') ? img.url : `${BASE_URL}${img.url}`
  ) || [];

  return {
    id: strapiNews.id,
    documentId: strapiNews.documentId,
    title: strapiNews.title,
    slug: strapiNews.slug,
    excerpt: strapiNews.excerpt,
    content: strapiNews.content,
    featured: strapiNews.featured,
    readTime: strapiNews.readTime,
    tags: strapiNews.tags || [],
    image: imageUrl,
    imageAlt: strapiNews.featured_image?.alternativeText || strapiNews.title,
    galleryImages,
    contentBlocks: (strapiNews.content_blocks || []).map(transformNewsContentBlock),
    newsCategory: strapiNews.news_category,
    priority: strapiNews.priority,
    author: {
      name: strapiNews.author?.name || "Anonymous",
      email: strapiNews.author?.email,
      bio: strapiNews.author?.bio,
      avatar: strapiNews.author?.avatar?.url 
        ? (strapiNews.author.avatar.url.startsWith('http') 
            ? strapiNews.author.avatar.url 
            : `${BASE_URL}${strapiNews.author.avatar.url}`)
        : undefined,
    },
    category: {
      name: strapiNews.category?.name || "Uncategorized",
      slug: strapiNews.category?.slug || "uncategorized",
    },
    relatedNews: (strapiNews.related_news || []).map(transformNewsArticle),
    publishedAt: strapiNews.publishedAt,
    createdAt: strapiNews.createdAt,
    updatedAt: strapiNews.updatedAt,
  };
}

// Transform Strapi blog post to frontend-friendly format
function transformBlogPost(strapiPost: StrapiBlogPost): BlogPost {
  const imageUrl = strapiPost.featured_image?.url 
    ? (strapiPost.featured_image.url.startsWith('http') 
        ? strapiPost.featured_image.url 
        : `${BASE_URL}${strapiPost.featured_image.url}`)
    : "/assets/networking.jpg"; // Fallback image

  return {
    id: strapiPost.id,
    documentId: strapiPost.documentId,
    title: strapiPost.title,
    slug: strapiPost.slug,
    excerpt: strapiPost.excerpt,
    content: strapiPost.content,
    featured: strapiPost.featured,
    readTime: strapiPost.readTime,
    tags: strapiPost.tags || [],
    image: imageUrl,
    imageAlt: strapiPost.featured_image?.alternativeText || strapiPost.title,
    author: {
      name: strapiPost.author?.name || "Anonymous",
      email: strapiPost.author?.email,
      bio: strapiPost.author?.bio,
      avatar: strapiPost.author?.avatar?.url 
        ? (strapiPost.author.avatar.url.startsWith('http') 
            ? strapiPost.author.avatar.url 
            : `${BASE_URL}${strapiPost.author.avatar.url}`)
        : undefined,
    },
    category: {
      name: strapiPost.category?.name || "Uncategorized",
      slug: strapiPost.category?.slug || "uncategorized",
    },
    publishedAt: strapiPost.publishedAt,
    createdAt: strapiPost.createdAt,
    updatedAt: strapiPost.updatedAt,
  };
}

// Transform Strapi event to frontend-friendly format
function transformEvent(strapiEvent: StrapiEvent): Event {
  const imageUrl = strapiEvent.featured_image?.url 
    ? (strapiEvent.featured_image.url.startsWith('http') 
        ? strapiEvent.featured_image.url 
        : `${BASE_URL}${strapiEvent.featured_image.url}`)
    : "/assets/event.png"; // Fallback image

  const heroImageUrl = strapiEvent.event_hero_image?.url 
    ? (strapiEvent.event_hero_image.url.startsWith('http') 
        ? strapiEvent.event_hero_image.url 
        : `${BASE_URL}${strapiEvent.event_hero_image.url}`)
    : undefined; // No fallback for hero image

  // Extract YouTube video ID from URL for video_url type
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Process video URL for YouTube
  const processVideoUrl = (url?: string): string | undefined => {
    if (!url) return undefined;
    
    if (strapiEvent.media_type === 'video_url') {
      const videoId = getYouTubeVideoId(url);
      if (videoId) {
        // Return YouTube embed URL with autoplay and loop parameters
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`;
      }
    }
    return url;
  };

  return {
    id: strapiEvent.id,
    documentId: strapiEvent.documentId,
    title: strapiEvent.title,
    slug: strapiEvent.slug,
    description: strapiEvent.description,
    content: strapiEvent.content,
    featured: strapiEvent.featured,
    eventStatus: strapiEvent.event_status,
    eventDate: strapiEvent.event_date,
    location: strapiEvent.location,
    participantsCount: strapiEvent.participants_count,
    registrationLink: strapiEvent.registration_link,
    image: imageUrl,
    imageAlt: strapiEvent.featured_image?.alternativeText || strapiEvent.title,
    heroImage: heroImageUrl,
    heroImageAlt: strapiEvent.event_hero_image?.alternativeText || strapiEvent.title,
    videoUrl: processVideoUrl(strapiEvent.featured_video_url),
    mediaType: strapiEvent.media_type || 'image',
    overlayText: strapiEvent.overlay_text,
    contactEmail: strapiEvent.contact_email,
    contactTime: strapiEvent.contact_time,
    contactLocation: strapiEvent.contact_location,
    eventHeading: strapiEvent.event_heading,
    eventSubheading: strapiEvent.event_subheading,
    category: {
      name: strapiEvent.category?.name || "Uncategorized",
      slug: strapiEvent.category?.slug || "uncategorized",
    },
    organizer: {
      name: strapiEvent.organizer?.name || "Anonymous",
      email: strapiEvent.organizer?.email || "",
      bio: strapiEvent.organizer?.bio,
      avatar: strapiEvent.organizer?.avatar?.url 
        ? (strapiEvent.organizer.avatar.url.startsWith('http') 
            ? strapiEvent.organizer.avatar.url 
            : `${BASE_URL}${strapiEvent.organizer.avatar.url}`)
        : undefined,
    },
    // Transform new component fields
    targetCities: (strapiEvent.target_cities || []).map(transformTargetCity),
    targetMarketsTitle: strapiEvent.target_markets_title || "Target Markets Across India",
    targetMarketsDescription: strapiEvent.target_markets_description,
    pricingPackages: (strapiEvent.pricing_packages || []).map(transformPricingPackage),
    pricingSectionTitle: strapiEvent.pricing_section_title || "Space And Proposal",
    pricingSectionDescription: strapiEvent.pricing_section_description || "Choose The Perfect Package For Your Networking Goals",
    eventFlowItems: (strapiEvent.event_flow_items || []).map(transformEventFlowItem),
    eventFlowTitle: strapiEvent.event_flow_title || "Event Flow",
    eventFlowDescription: strapiEvent.event_flow_description || "Two Days of Intensive Networking and Business Development",
    googleMapsEmbedUrl: strapiEvent.google_maps_embed_url,
    whyCitySection: transformWhyCitySection(strapiEvent),
    publishedAt: strapiEvent.publishedAt,
    createdAt: strapiEvent.createdAt,
    updatedAt: strapiEvent.updatedAt,
  };
}

// Get all blog posts with pagination and filtering
export async function getBlogPosts(options: {
  page?: number;
  pageSize?: number;
  featured?: boolean;
  category?: string;
  search?: string;
  sort?: string;
} = {}) {
  const {
    page = 1,
    pageSize = 10,
    featured,
    category,
    search,
    sort = "publishedAt:desc"
  } = options;

  const url = new URL("/api/blogs", BASE_URL);

  const queryParams = {
    sort: [sort],
    pagination: {
      page,
      pageSize,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      author: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      category: {
        fields: ["name", "slug"],
      },
    },
    filters: {} as any,
  };

  // Add filters
  if (featured !== undefined) {
    queryParams.filters.featured = { $eq: featured };
  }

  if (category) {
    queryParams.filters.category = {
      slug: { $eq: category }
    };
  }

  if (search) {
    queryParams.filters.$or = [
      { title: { $containsi: search } },
      { excerpt: { $containsi: search } },
      { content: { $containsi: search } },
    ];
  }

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 } // Revalidate every minute
    }) as StrapiCollectionResponse<StrapiBlogPost>;

    return {
      data: response.data.map(transformBlogPost),
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      data: [],
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    };
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = new URL("/api/blogs", BASE_URL);

  const queryParams = {
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      author: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      category: {
        fields: ["name", "slug"],
      },
    },
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiBlogPost>;

    if (response.data.length === 0) {
      return null;
    }

    return transformBlogPost(response.data[0]);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Get all blog categories
export async function getBlogCategories() {
  const url = new URL("/api/categories", BASE_URL);

  const queryParams = {
    sort: ["name:asc"],
    fields: ["name", "slug"],
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 300 } // Revalidate every 5 minutes
    }) as StrapiCollectionResponse<StrapiCategory>;

    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Get related blog posts
export async function getRelatedBlogPosts(
  currentSlug: string, 
  categorySlug?: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const url = new URL("/api/blogs", BASE_URL);

  const queryParams = {
    sort: ["publishedAt:desc"],
    pagination: {
      page: 1,
      pageSize: limit,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      author: {
        fields: ["name", "email"],
      },
      category: {
        fields: ["name", "slug"],
      },
    },
    filters: {
      slug: { $ne: currentSlug }, // Exclude current post
      ...(categorySlug && {
        category: {
          slug: { $eq: categorySlug }
        }
      })
    } as any,
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiBlogPost>;

    return response.data.map(transformBlogPost);
  } catch (error) {
    console.error("Error fetching related blog posts:", error);
    return [];
  }
}

// Get all events with pagination and filtering
export async function getEvents(options: {
  page?: number;
  pageSize?: number;
  featured?: boolean;
  category?: string;
  search?: string;
  sort?: string;
} = {}) {
  const {
    page = 1,
    pageSize = 10,
    featured,
    category,
    search,
    sort = "event_date:desc"
  } = options;

  const url = new URL("/api/events", BASE_URL);

  const queryParams = {
    sort: [sort],
    pagination: {
      page,
      pageSize,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name", "mime"],
      },
      event_hero_image: {
        fields: ["url", "alternativeText", "name", "mime"],
      },
      category: {
        fields: ["name", "slug"],
      },
      organizer: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      target_cities: "*",
      pricing_packages: "*",
      event_flow_items: "*",
    },
    fields: ["id", "documentId", "title", "slug", "description", "content", "featured", "event_date", "location", "participants_count", "registration_link", "contact_email", "contact_time", "contact_location", "event_heading", "event_subheading", "media_type", "featured_video_url", "overlay_text", "event_status"],
    filters: {} as any,
  };

  // Add filters
  if (featured !== undefined) {
    queryParams.filters.featured = { $eq: featured };
  }

  if (category) {
    queryParams.filters.category = {
      slug: { $eq: category }
    };
  }

  if (search) {
    queryParams.filters.$or = [
      { title: { $containsi: search } },
      { description: { $containsi: search } },
      { location: { $containsi: search } },
    ];
  }

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiEvent>;

    return {
      data: response.data.map(transformEvent),
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      data: [],
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    };
  }
}

// Get a single event by slug
export async function getEventBySlug(slug: string): Promise<Event | null> {
  const url = new URL("/api/events", BASE_URL);

  const queryParams = {
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name", "mime"],
      },
      event_hero_image: {
        fields: ["url", "alternativeText", "name", "mime"],
      },
      category: {
        fields: ["name", "slug"],
      },
      organizer: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      target_cities: "*",
      pricing_packages: "*",
      event_flow_items: "*",
      city_statistics: {
        populate: {
          statistic_icon: {
            fields: ["url", "alternativeText", "name"],
          },
        },
      },
      city_advantages: {
        populate: {
          advantage_icon: {
            fields: ["url", "alternativeText", "name"],
          },
        },
      },
    },
    fields: ["id", "documentId", "title", "slug", "description", "content", "featured", "event_date", "location", "participants_count", "registration_link", "contact_email", "contact_time", "contact_location", "event_heading", "event_subheading", "media_type", "featured_video_url", "overlay_text", "event_status", "why_city_section_title", "why_city_section_badge_text", "why_city_section_description", "why_city_section_enabled"],
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiEvent>;

    if (response.data.length === 0) {
      return null;
    }

    return transformEvent(response.data[0]);
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

// Get featured events
export async function getFeaturedEvents(limit: number = 1) {
  return getEvents({ featured: true, pageSize: limit });
}

// Get regular events (not featured)
export async function getRegularEvents(options: {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
  sort?: string;
} = {}) {
  return getEvents({ ...options, featured: false });
}

// Get related events
export async function getRelatedEvents(
  currentSlug: string, 
  categorySlug?: string,
  limit: number = 3
): Promise<Event[]> {
  const url = new URL("/api/events", BASE_URL);

  const queryParams = {
    sort: ["event_date:desc"],
    pagination: {
      page: 1,
      pageSize: limit,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name", "mime"],
      },
      category: {
        fields: ["name", "slug"],
      },
      organizer: {
        fields: ["name", "email"],
      },
    },
    fields: ["id", "documentId", "title", "slug", "description", "content", "featured", "event_date", "location", "participants_count", "registration_link", "contact_email", "contact_time", "contact_location", "event_heading", "event_subheading", "media_type", "featured_video_url", "overlay_text", "event_status"],
    filters: {
      slug: { $ne: currentSlug }, // Exclude current event
      ...(categorySlug && {
        category: {
          slug: { $eq: categorySlug }
        }
      })
    } as any,
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiEvent>;

    return response.data.map(transformEvent);
  } catch (error) {
    console.error("Error fetching related events:", error);
    return [];
  }
} 

// ============= NEWS FUNCTIONS =============

// Get all news articles with pagination and filtering
export async function getNewsArticles(options: {
  page?: number;
  pageSize?: number;
  featured?: boolean;
  category?: string;
  newsCategory?: 'latest-news' | 'business-insights' | 'featured';
  search?: string;
  sort?: string;
} = {}) {
  const {
    page = 1,
    pageSize = 10,
    featured,
    category,
    newsCategory,
    search,
    sort = "publishedAt:desc"
  } = options;

  const url = new URL("/api/news-articles", BASE_URL);

  const queryParams = {
    sort: [sort],
    pagination: {
      page,
      pageSize,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      author: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      category: {
        fields: ["name", "slug"],
      },
      content_blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      gallery_images: {
        fields: ["url", "alternativeText"],
      },
      related_news: {
        populate: {
          featured_image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
    filters: {} as any,
  };

  // Add filters
  if (featured !== undefined) {
    queryParams.filters.featured = { $eq: featured };
  }

  if (category) {
    queryParams.filters.category = {
      slug: { $eq: category }
    };
  }

  if (newsCategory) {
    queryParams.filters.news_category = { $eq: newsCategory };
  }

  if (search) {
    queryParams.filters.$or = [
      { title: { $containsi: search } },
      { excerpt: { $containsi: search } },
      { content: { $containsi: search } },
    ];
  }

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiNewsArticle>;

    return {
      data: response.data.map(transformNewsArticle),
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return {
      data: [],
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    };
  }
}

// Get a single news article by slug
export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const url = new URL("/api/news-articles", BASE_URL);

  const queryParams = {
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      author: {
        fields: ["name", "email", "bio"],
        populate: {
          avatar: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      category: {
        fields: ["name", "slug"],
      },
      content_blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      gallery_images: {
        fields: ["url", "alternativeText"],
      },
      related_news: {
        populate: {
          featured_image: {
            fields: ["url", "alternativeText"],
          },
          author: {
            fields: ["name"],
          },
          category: {
            fields: ["name", "slug"],
          },
        },
      },
    },
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiNewsArticle>;

    if (response.data.length === 0) {
      return null;
    }

    return transformNewsArticle(response.data[0]);
  } catch (error) {
    console.error("Error fetching news article:", error);
    return null;
  }
}

// Get news articles by category
export async function getNewsByCategory(category: 'latest-news' | 'business-insights' | 'featured', limit: number = 6) {
  return getNewsArticles({ newsCategory: category, pageSize: limit });
}

// Get featured news articles
export async function getFeaturedNews(limit: number = 4) {
  return getNewsArticles({ featured: true, pageSize: limit });
}

// Get related news articles
export async function getRelatedNews(
  currentSlug: string, 
  categorySlug?: string,
  limit: number = 4
): Promise<NewsArticle[]> {
  const url = new URL("/api/news-articles", BASE_URL);

  const queryParams = {
    sort: ["publishedAt:desc"],
    pagination: {
      page: 1,
      pageSize: limit,
    },
    populate: {
      featured_image: {
        fields: ["url", "alternativeText", "name"],
      },
      category: {
        fields: ["name", "slug"],
      },
      author: {
        fields: ["name"],
      },
    },
    filters: {
      slug: { $ne: currentSlug }, // Exclude current article
      ...(categorySlug && {
        category: {
          slug: { $eq: categorySlug }
        }
      })
    } as any,
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiNewsArticle>;

    return response.data.map(transformNewsArticle);
  } catch (error) {
    console.error("Error fetching related news:", error);
    return [];
  }
}

// Get news categories with article counts
export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function getNewsCategories(): Promise<NewsCategory[]> {
  try {
    // First get all categories
    const categoriesQuery = qs.stringify({
      populate: "*",
      sort: ["name:asc"],
    });

    const categoriesResponse = await fetchAPI(
      `/categories?${categoriesQuery}`,
      { method: "GET" }
    );

    if (!categoriesResponse.data) {
      return [];
    }

    // Get category counts from news articles
    const categoriesWithCounts = await Promise.all(
      categoriesResponse.data.map(async (category: StrapiCategory) => {
        const countQuery = qs.stringify({
          filters: {
            category: {
              slug: { $eq: category.slug }
            }
          },
          pagination: {
            page: 1,
            pageSize: 1
          }
        });

        const countResponse = await fetchAPI(
          `/news-articles?${countQuery}`,
          { method: "GET" }
        );

        return {
          id: category.id,
          name: category.name,
          slug: category.slug,
          count: countResponse.meta?.pagination?.total || 0
        };
      })
    );

    // Filter out categories with 0 news articles and sort by count
    return categoriesWithCounts
      .filter(cat => cat.count > 0)
      .sort((a, b) => b.count - a.count);

  } catch (error) {
    console.error("Error fetching news categories:", error);
    return [];
  }
}

// Transform Strapi registration config to frontend-friendly format
function transformRegistrationConfig(strapiConfig: StrapiRegistrationConfig): RegistrationConfig {
  return {
    id: strapiConfig.id,
    documentId: strapiConfig.documentId,
    sellerRegistrationUrl: strapiConfig.sellerRegistrationUrl,
    buyerRegistrationUrl: strapiConfig.buyerRegistrationUrl,
    sellerRegistrationText: strapiConfig.sellerRegistrationText,
    buyerRegistrationText: strapiConfig.buyerRegistrationText,
    modalTitle: strapiConfig.modalTitle,
    modalDescription: strapiConfig.modalDescription,
    publishedAt: strapiConfig.publishedAt,
    createdAt: strapiConfig.createdAt,
    updatedAt: strapiConfig.updatedAt,
  };
}

// Get registration configuration
export async function getRegistrationConfig(): Promise<RegistrationConfig | null> {
  const url = new URL("/api/registration-config", BASE_URL);

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 300 } // Cache for 5 minutes
    }) as StrapiSingleResponse<StrapiRegistrationConfig>;

    if (!response.data) {
      return null;
    }

    return transformRegistrationConfig(response.data);
  } catch (error) {
    console.error("Error fetching registration config:", error);
    return null;
  }
}