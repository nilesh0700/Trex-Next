import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { 
  StrapiBlogPost, 
  StrapiCollectionResponse, 
  StrapiSingleResponse,
  BlogPost,
  StrapiCategory
} from "@/types/strapi";

const BASE_URL = getStrapiURL();

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

// Get blog categories
export async function getBlogCategories() {
  const url = new URL("/api/categories", BASE_URL);

  const queryParams = {
    sort: ["name:asc"],
    populate: {
      blogs: {
        fields: ["id"], // Just count the blogs
      },
    },
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 300 } // Revalidate every 5 minutes
    }) as StrapiCollectionResponse<StrapiCategory>;

    return response.data.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
    }));
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
      pageSize: limit + 1, // Get one extra to filter out current post
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
      }),
    },
  };

  url.search = qs.stringify(queryParams, { encodeValuesOnly: true });

  try {
    const response = await fetchAPI(url.href, { 
      method: "GET",
      next: { revalidate: 60 }
    }) as StrapiCollectionResponse<StrapiBlogPost>;

    return response.data.slice(0, limit).map(transformBlogPost);
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
} 