# News Integration with Strapi CMS

This document explains the complete integration of the news pages with Strapi CMS, including multiple image handling and flexible content positioning.

## 🏗️ Architecture Overview

### Frontend (Next.js)
- **News Listing Page**: `/news` - Displays categorized news articles
- **Individual News Page**: `/news/[slug]` - Shows full article with rich content
- **Components**: 
  - `NewsContentBlock` - Renders different content types with positioning
  - Existing UI components (PageHeading, etc.)

### Backend (Strapi CMS)
- **News Content Type**: Flexible news articles with multiple images
- **News Content Block Component**: Supports text, images, quotes, and videos
- **Custom API Routes**: Category-based and featured news endpoints

## 📊 Content Type Schema

### News Article (`api::news.news`)
```json
{
  "title": "string (required)",
  "slug": "uid (auto-generated from title)",
  "excerpt": "text (500 chars max)",
  "content": "richtext (main content)",
  "featured": "boolean (default: false)",
  "readTime": "string (default: '5 min read')",
  "tags": "json (array of strings)",
  "featured_image": "media (single image)",
  "gallery_images": "media (multiple images)",
  "content_blocks": "component (repeatable news-content-block)",
  "news_category": "enum ['latest-news', 'business-insights', 'featured']",
  "priority": "integer (1-100, for ordering)",
  "author": "relation (many-to-one with author)",
  "category": "relation (many-to-one with category)",
  "related_news": "relation (many-to-many self-relation)"
}
```

### News Content Block Component (`content.news-content-block`)
```json
{
  "type": "enum ['text', 'image', 'quote', 'video']",
  "content": "richtext (for text blocks)",
  "image": "media (single image)",
  "image_caption": "text",
  "image_position": "enum ['left', 'right', 'center', 'full-width']",
  "image_size": "enum ['small', 'medium', 'large', 'full']",
  "quote_text": "text",
  "quote_author": "string",
  "video_url": "string",
  "order": "integer (for sorting)"
}
```

## 🎨 Multiple Image Handling

### Image Types Supported:
1. **Featured Image**: Main article image (shown at top)
2. **Gallery Images**: Collection of images for the article
3. **Content Block Images**: Images positioned within content blocks

### Image Positioning Options:
- **Left**: `float-left mr-6 mb-4 max-w-sm`
- **Right**: `float-right ml-6 mb-4 max-w-sm`
- **Center**: `mx-auto` (centered)
- **Full Width**: `w-full` (spans full width)

### Image Sizes:
- **Small**: `h-48 md:h-64`
- **Medium**: `h-64 md:h-80` (default)
- **Large**: `h-80 md:h-96`
- **Full**: `h-96 md:h-[500px]`

## 🔌 API Integration

### Available Functions (`lib/strapi.ts`)

```typescript
// Get news by category
getNewsByCategory(category: 'latest-news' | 'business-insights' | 'featured', limit?: number)

// Get all news with filters
getNewsArticles(options: {
  page?: number;
  pageSize?: number;
  featured?: boolean;
  category?: string;
  newsCategory?: string;
  search?: string;
  sort?: string;
})

// Get single news article
getNewsArticleBySlug(slug: string): Promise<NewsArticle | null>

// Get featured news
getFeaturedNews(limit?: number)

// Get related news
getRelatedNews(currentSlug: string, categorySlug?: string, limit?: number)
```

### Custom API Endpoints

```
GET /api/news                    // All news with filters
GET /api/news/:id               // Single news by ID
GET /api/news/category/:category // News by category
GET /api/news/featured          // Featured news only
```

## 🎯 Content Block Types

### 1. Text Block
```typescript
{
  type: 'text',
  content: '<p>Rich text content...</p>',
  order: 1
}
```

### 2. Image Block
```typescript
{
  type: 'image',
  image: 'https://example.com/image.jpg',
  imageCaption: 'Image description',
  imagePosition: 'center',
  imageSize: 'medium',
  order: 2
}
```

### 3. Quote Block
```typescript
{
  type: 'quote',
  quoteText: 'This is a meaningful quote',
  quoteAuthor: 'John Doe',
  order: 3
}
```

### 4. Video Block
```typescript
{
  type: 'video',
  videoUrl: 'https://youtube.com/watch?v=...',
  order: 4
}
```

## 🚀 Setup Instructions

### 1. Server Setup (Strapi)

```bash
cd server
npm install
npm run develop
```

### 2. Create Content in Strapi Admin
1. Go to `http://localhost:1337/admin`
2. Navigate to **Content Manager > News**
3. Create new news articles with:
   - Basic info (title, excerpt, content)
   - Featured image
   - Gallery images (optional)
   - Content blocks for rich layout
   - Categories and tags

### 3. Content Block Usage

When creating content blocks:
1. **Order**: Set order for proper sequencing
2. **Text Blocks**: Use rich text editor
3. **Image Blocks**: 
   - Upload image
   - Set position (left/right for text wrapping)
   - Choose appropriate size
   - Add caption if needed
4. **Quote Blocks**: Add inspiring quotes with attribution
5. **Video Blocks**: Embed YouTube or direct video URLs

### 4. Frontend Testing

```bash
cd client
npm install
npm run dev
```

Visit:
- `http://localhost:3000/news` - News listing
- `http://localhost:3000/news/[article-slug]` - Individual articles

## 📱 Responsive Design

### Mobile Considerations:
- Images automatically adjust to screen size
- Text wrapping works responsively
- Touch-friendly navigation
- Optimized loading with Next.js Image component

### Desktop Features:
- Advanced image positioning
- Sidebar with related articles
- Smooth hover transitions
- Print-friendly layouts

## 🔧 Customization

### Adding New Content Block Types:
1. Update the component schema in Strapi
2. Add new type to TypeScript interfaces
3. Extend `NewsContentBlock` component
4. Update transformation functions

### Styling Customizations:
- Modify `NewsContentBlock.tsx` for different layouts
- Update Tailwind classes for custom positioning
- Add new image size variants as needed

### SEO Optimization:
- Articles include proper meta tags
- Image alt texts are properly handled
- Structured data can be added to individual articles

## 🌟 Features Implemented

✅ **Multiple Image Support**
- Featured images
- Gallery collections  
- Content block images with positioning

✅ **Flexible Content Layout**
- Text blocks with rich formatting
- Images with multiple positioning options
- Quote blocks for highlights
- Video embedding support

✅ **Content Management**
- Easy-to-use Strapi admin interface
- Drag-and-drop image uploads
- WYSIWYG content editing
- Preview functionality

✅ **Performance Optimized**
- Next.js Image optimization
- Lazy loading for images
- Efficient data fetching with caching

✅ **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

## 🔍 Troubleshooting

### Common Issues:

1. **Images not showing**: Check Strapi media library permissions
2. **Content blocks not ordered**: Ensure `order` field is set properly
3. **API connection issues**: Verify Strapi server is running on port 1337
4. **TypeScript errors**: Run `npm run type-check` to verify types

### Development Tips:

- Use Strapi's preview feature to test content before publishing
- Test different image sizes and positions in content blocks
- Verify responsive behavior on multiple devices
- Use browser dev tools to debug image loading issues

## 🎉 Success!

Your news integration is now complete with:
- Full CMS integration
- Multiple image handling with positioning
- Rich content blocks
- Responsive design
- SEO optimization

The system is ready for content creators to start publishing engaging news articles with sophisticated layouts and multimedia content! 