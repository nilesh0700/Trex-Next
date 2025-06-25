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
  CityStatistic,
  PricingPackage,
  EventFlowItem
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

function transformCityStatistic(strapiStat: any): CityStatistic {
  return {
    id: strapiStat.id,
    city: strapiStat.city,
    population: strapiStat.population,
    count: strapiStat.count
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

// Transform Strapi blog post to frontend-friendly format
function transformBlogPost(strapiPost: StrapiBlogPost): BlogPost {
  const imageUrl = strapiPost.featured_image?.url 
    ? `${BASE_URL}${strapiPost.featured_image.url}`
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
        ? `${BASE_URL}${strapiPost.author.avatar.url}`
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
    ? `${BASE_URL}${strapiEvent.featured_image.url}`
    : "/assets/event.png"; // Fallback image

  return {
    id: strapiEvent.id,
    documentId: strapiEvent.documentId,
    title: strapiEvent.title,
    slug: strapiEvent.slug,
    description: strapiEvent.description,
    content: strapiEvent.content,
    featured: strapiEvent.featured,
    eventDate: strapiEvent.event_date,
    location: strapiEvent.location,
    participantsCount: strapiEvent.participants_count,
    registrationLink: strapiEvent.registration_link,
    image: imageUrl,
    imageAlt: strapiEvent.featured_image?.alternativeText || strapiEvent.title,
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
        ? `${BASE_URL}${strapiEvent.organizer.avatar.url}`
        : undefined,
    },
    // Transform new component fields
    targetCities: (strapiEvent.target_cities || []).map(transformTargetCity),
    cityStatistics: (strapiEvent.city_statistics || []).map(transformCityStatistic),
    targetMarketsTitle: strapiEvent.target_markets_title || "Target Markets Across India",
    targetMarketsDescription: strapiEvent.target_markets_description,
    pricingPackages: (strapiEvent.pricing_packages || []).map(transformPricingPackage),
    pricingSectionTitle: strapiEvent.pricing_section_title || "Space And Proposal",
    pricingSectionDescription: strapiEvent.pricing_section_description || "Choose The Perfect Package For Your Networking Goals",
    eventFlowItems: (strapiEvent.event_flow_items || []).map(transformEventFlowItem),
    eventFlowTitle: strapiEvent.event_flow_title || "Event Flow",
    eventFlowDescription: strapiEvent.event_flow_description || "Two Days of Intensive Networking and Business Development",
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
        fields: ["url", "alternativeText", "name"],
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
      city_statistics: "*",
      pricing_packages: "*",
      event_flow_items: "*",
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
        fields: ["url", "alternativeText", "name"],
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
      city_statistics: "*",
      pricing_packages: "*",
      event_flow_items: "*",
    },
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
        fields: ["url", "alternativeText", "name"],
      },
      category: {
        fields: ["name", "slug"],
      },
      organizer: {
        fields: ["name", "email"],
      },
    },
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