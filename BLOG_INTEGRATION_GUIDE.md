# Blog Integration Guide - Strapi + Next.js

This document explains how the blog functionality has been integrated between the Strapi CMS backend and Next.js frontend.

## 🚀 Overview

This integration replaces the hardcoded blog data with dynamic content from Strapi CMS, providing:

- **Dynamic Content Management**: Blog posts can be created, edited, and published through Strapi's admin panel
- **SEO Optimization**: Server-side rendering with proper metadata
- **Search & Filtering**: Search functionality and category-based filtering
- **Pagination**: Proper pagination for large numbers of blog posts
- **Related Posts**: Automatic related post suggestions
- **Image Management**: Media handling through Strapi

## 📁 Project Structure

```
├── server/                         # Strapi Backend
│   ├── src/api/
│   │   ├── blog/                  # Blog content type
│   │   │   ├── content-types/blog/schema.json
│   │   │   ├── controllers/blog.ts
│   │   │   ├── routes/blog.ts
│   │   │   └── services/blog.ts
│   │   ├── author/                # Author content type
│   │   └── category/              # Category content type
│   └── ...
├── client/                        # Next.js Frontend
│   ├── src/
│   │   ├── app/blog/             # Blog pages
│   │   ├── lib/strapi.ts         # Strapi data fetchers
│   │   ├── types/strapi.ts       # TypeScript types
│   │   └── utils/                # Utility functions
│   ├── .env.local                # Environment variables
│   └── next.config.ts            # Next.js configuration
```

## 🔧 Setup Instructions

### 1. Environment Configuration

**Backend (.env)**
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

**Frontend (.env.local)**
```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### 2. Start the Servers

**Backend (Strapi)**
```bash
cd server
npm run develop
```

**Frontend (Next.js)**
```bash
cd client
npm run dev
```

### 3. Set Up Content Types in Strapi

1. Access Strapi admin panel at `http://localhost:1337/admin`
2. The content types (Blog, Author, Category) should be automatically available
3. Go to Settings > Users & Permissions Plugin > Roles > Public
4. Enable permissions for:
   - Blog: `find` and `findOne`
   - Author: `find` and `findOne`
   - Category: `find` and `findOne`

## 📝 Content Management

### Creating Content

1. **Authors**: Create authors first
   - Name, email, bio, avatar (optional)

2. **Categories**: Create categories
   - Name, slug (auto-generated), description

3. **Blog Posts**: Create blog posts
   - Title, slug (auto-generated)
   - Excerpt, content (rich text)
   - Featured image, featured flag
   - Read time, tags
   - Author and category relationships

### Content Structure

**Blog Post Fields:**
- `title`: String (required)
- `slug`: UID (auto-generated from title)
- `excerpt`: Text (required, max 500 chars)
- `content`: Rich text (required)
- `featured`: Boolean (default: false)
- `readTime`: String (e.g., "5 min read")
- `tags`: JSON array of strings
- `featured_image`: Media (images only)
- `author`: Relation to Author
- `category`: Relation to Category

## 🔗 API Endpoints

The following Strapi API endpoints are used:

- `GET /api/blogs` - Get all blog posts with pagination/filtering
- `GET /api/blogs?filters[slug][$eq]=slug-name` - Get specific blog post
- `GET /api/categories` - Get all categories
- `GET /api/authors` - Get all authors

## 🎨 Frontend Features

### Blog Listing Page (`/blog`)
- Search functionality
- Category filtering
- Pagination
- Featured post display
- Newsletter subscription

### Individual Blog Post (`/blog/[slug]`)
- Full blog content rendering
- Author information
- Related posts
- Social sharing buttons
- Breadcrumb navigation

### Key Features
- **Server-Side Rendering**: All pages are server-rendered for SEO
- **Static Generation**: Blog posts use `generateStaticParams` for better performance
- **Error Handling**: Graceful fallbacks for missing content
- **Loading States**: Proper loading and error states
- **Responsive Design**: Mobile-first responsive design
- **SEO Optimized**: Proper metadata and structured data

## 🔍 Technical Implementation

### Data Fetching Pattern

```typescript
// Fetch with caching and error handling
const { data: blogPosts, meta } = await getBlogPosts({
  page: 1,
  pageSize: 10,
  category: "networking",
  search: "travel"
});
```

### Type Safety

All data is properly typed with TypeScript interfaces:
- `StrapiBlogPost` - Raw Strapi response
- `BlogPost` - Frontend-friendly format
- `StrapiResponse<T>` - Generic API response wrapper

### Image Handling

- Next.js Image component with proper optimization
- Remote patterns configured for Strapi media
- Fallback images for missing content

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS is enabled in Strapi middlewares
   - Check if API URL is correct in environment variables

2. **Image Loading Issues**
   - Verify `next.config.ts` has correct image domains
   - Check if images are published in Strapi

3. **Content Not Showing**
   - Ensure content is published (not draft)
   - Check API permissions in Strapi
   - Verify environment variables

4. **Build Errors**
   - Check TypeScript errors
   - Ensure all required fields are present in content

### Debug Mode

To enable debug logging, add to your data fetching functions:
```typescript
console.log('API Response:', response);
```

## 🔄 Migration from Hardcoded Data

The previous implementation used hardcoded data in `/lib/blogData.ts`. This has been replaced with:

1. **Dynamic Data Fetching**: Real-time data from Strapi
2. **Better Performance**: Server-side rendering and caching
3. **Content Management**: Easy content updates through Strapi admin
4. **Scalability**: No code changes needed for new posts

## 📈 Performance Considerations

- **Caching**: API responses are cached with `next.revalidate`
- **Image Optimization**: Next.js Image component handles optimization
- **Static Generation**: Blog posts are statically generated at build time
- **Pagination**: Large datasets are paginated to avoid performance issues

## 🛡️ Security

- API tokens should be kept secure
- Public API permissions are restricted to read-only operations
- Input validation is handled by Strapi
- Environment variables are properly configured

## 🚀 Deployment

1. **Backend**: Deploy Strapi to your preferred hosting (Railway, Heroku, etc.)
2. **Frontend**: Deploy Next.js to Vercel, Netlify, or similar
3. **Environment Variables**: Update production URLs
4. **Database**: Ensure production database is configured
5. **Media**: Configure production media storage

## 📚 Additional Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi + Next.js Guide](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi)

---

This integration provides a robust, scalable, and maintainable blog system that can grow with your content needs. 