# Connecting Strapi Backend to Next.js Frontend - Complete Guide

This guide explains how to establish a connection between a Strapi CMS backend and a Next.js frontend, based on the analysis of a working project.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Server Setup (Strapi)](#server-setup-strapi)
3. [Client Setup (Next.js)](#client-setup-nextjs)
4. [Connection Layer](#connection-layer)
5. [Data Fetching Patterns](#data-fetching-patterns)
6. [Environment Configuration](#environment-configuration)
7. [Complete Example](#complete-example)

## Project Structure

```
your-project/
├── server/          # Strapi backend
│   ├── config/      # Server configuration
│   ├── src/api/     # API endpoints
│   └── ...
├── client/          # Next.js frontend
│   ├── src/
│   │   ├── app/     # Next.js app router
│   │   ├── components/
│   │   ├── data/    # Data fetching layer
│   │   ├── utils/   # Utility functions
│   │   └── types.ts # TypeScript definitions
│   └── ...
```

## Server Setup (Strapi)

### 1. Basic Server Configuration

**`server/config/server.ts`**
```typescript
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
```

### 2. Middleware Configuration

**`server/config/middlewares.ts`**
```typescript
export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',        // Important for frontend connections
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 3. API Routes Structure

**`server/src/api/article/routes/article.ts`**
```typescript
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article');
```

This creates standard REST endpoints:
- `GET /api/articles` - List articles
- `GET /api/articles/:id` - Get single article
- `POST /api/articles` - Create article
- `PUT /api/articles/:id` - Update article
- `DELETE /api/articles/:id` - Delete article

## Client Setup (Next.js)

### 1. Next.js Configuration

**`client/next.config.ts`**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",  // Allow Strapi media files
      },
    ],
  },
};

export default nextConfig;
```

### 2. TypeScript Definitions

**`client/src/types.ts`**
```typescript
export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

// Define other types as needed...
```

## Connection Layer

### 1. Base URL Configuration

**`client/src/utils/get-strapi-url.ts`**
```typescript
export function getStrapiURL() {
  return process.env.STRAPI_API_URL ?? "http://localhost:1337";
}
```

### 2. Generic API Fetching Utility

**`client/src/utils/fetch-api.ts`**
```typescript
type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  authToken?: string;
  body?: Record<string, unknown>;
  next?: NextFetchRequestConfig;
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
  const { method, authToken, body, next } = options;

  const headers: RequestInit & { next?: NextFetchRequestConfig } = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json") && response.ok) {
      return await response.json();
    } else {
      return { status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error);
    throw error;
  }
}
```

## Data Fetching Patterns

### 1. Data Loaders

**`client/src/data/loaders.ts`**
```typescript
import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();

// Example: Get articles with pagination and search
export async function getContent(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: query } },
        { description: { $containsi: query } },
      ],
      ...(featured && { featured: { $eq: featured } }),
    },
    pagination: {
      pageSize: 3,
      page: parseInt(page || "1"),
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

// Example: Get single content by slug
export async function getContentBySlug(slug: string, path: string) {
  const url = new URL(path, BASE_URL);
  
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      // Add other relations you need to populate
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}
```

### 2. Service Functions for Forms

**`client/src/data/services.ts`**
```typescript
const BASE_URL = process.env.PUBLIC_API_URL ?? "http://localhost:1337";

export async function subscribeService(email: string) {
  const url = new URL("/api/newsletter-signups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });

    return response.json();
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}
```

### 3. Server Actions

**`client/src/data/actions.ts`**
```typescript
"use server";
import { z } from "zod";
import { subscribeService } from "./services";

const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get("email");

  const validatedFields = subscribeSchema.safeParse({
    email: email
  });

  if (!validatedFields.success) {    
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }

  const responseData = await subscribeService(validatedFields.data.email);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      errorMessage: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      errorMessage: "Failed to Subscribe.",
    };
  }

  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Successfully Subscribed!",
  };
}
```

## Environment Configuration

### 1. Strapi Environment Variables

**`server/.env`**
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

### 2. Next.js Environment Variables

**`client/.env.local`**
```bash
STRAPI_API_URL=http://localhost:1337
PUBLIC_API_URL=http://localhost:1337
```

## Complete Example

### 1. Using Data in a Page Component

**`client/src/app/blog/page.tsx`**
```typescript
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string }>
}

export default async function BlogRoute({ searchParams }: PageProps) {
  const { page, query } = await searchParams;
  const { blocks } = await loader("blog");
  
  return (
    <div className="blog-page">
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={BlogCard}
        showSearch
        query={query}
        showPagination
        page={page}
      />
    </div>
  );
}
```

### 2. Content List Component

**`client/src/components/ContentList.tsx`**
```typescript
import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
}

async function loader(path: string, featured?: boolean, query?: string, page?: string) {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    articles: (data as ArticleProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  component,
  showSearch,
  query,
  page,
  showPagination,
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;

  return (
    <section className="content-items container">
      <h3 className="content-items__headline">
        {headline || "Featured Articles"}
      </h3>
      {showSearch && <Search />}
      <div className="content-items__container--card">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
      {showPagination && <PaginationComponent pageCount={pageCount} />}
    </section>
  );
}
```

## Key Points to Remember

1. **Environment Variables**: Always use environment variables for API URLs
2. **CORS**: Ensure Strapi's CORS middleware is enabled for frontend connections
3. **Image Configuration**: Configure Next.js to allow images from your Strapi domain
4. **Query Building**: Use `qs` library for complex Strapi queries with population and filtering
5. **Error Handling**: Implement proper error handling in your API calls
6. **Type Safety**: Define TypeScript interfaces that match your Strapi content types
7. **Server Actions**: Use Next.js server actions for form submissions to Strapi
8. **Caching**: Leverage Next.js caching with the `next` option in fetch requests

## Getting Started Checklist

- [ ] Set up Strapi backend with required content types
- [ ] Configure CORS in Strapi middlewares
- [ ] Set up Next.js frontend with image domain configuration
- [ ] Create utility functions for API connections
- [ ] Define TypeScript types matching your Strapi schema
- [ ] Create data loader functions for fetching content
- [ ] Set up environment variables for both frontend and backend
- [ ] Test the connection between frontend and backend
- [ ] Implement error handling and loading states
- [ ] Add form handling with server actions if needed

This setup provides a robust, type-safe connection between your Strapi CMS and Next.js frontend, enabling you to build dynamic, content-driven applications. 