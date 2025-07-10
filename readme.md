# TREX - Travel Trade Exhibition Platform

![TREX Logo](client/public/logo.png)

## 🌟 Overview

**TREX** is a comprehensive B2B travel trade exhibition platform designed to connect regional markets (Tier 2 and Tier 3 cities) with national suppliers in India's travel industry. The platform facilitates business networking, pre-fixed meetings, and market expansion opportunities through a modern, user-friendly interface.

### Mission
To create India's most impactful regional B2B travel trade exhibition, focused on unlocking the potential of Tier 2 and Tier 3 markets.

## 🏗️ Architecture

This is a full-stack application with a clear separation of concerns:

- **Frontend**: Next.js 15 with React 19 and TypeScript
- **Backend**: Strapi 5.16 CMS with SQLite database
- **Styling**: Tailwind CSS with responsive design
- **Content Management**: Headless CMS approach with Strapi

```
TREX-Next/
├── client/           # Next.js Frontend Application
│   ├── src/
│   │   ├── app/      # Next.js App Router pages
│   │   ├── components/  # Reusable UI components
│   │   ├── lib/      # Data fetching and utilities
│   │   ├── types/    # TypeScript type definitions
│   │   └── utils/    # Helper functions
│   └── public/       # Static assets
├── server/           # Strapi Backend Application
│   ├── src/api/      # API endpoints and content types
│   ├── config/       # Server configuration
│   └── database/     # Database files and migrations
└── docs/            # Documentation files
```

## 🚀 Features

### Core Features
- **Event Management**: Complete event lifecycle management with dynamic content
- **User Registration**: Streamlined registration process with modal integration
- **Content Management**: Blog posts, news articles, and dynamic content via Strapi CMS
- **Testimonials System**: Client testimonials with display order management
- **Author Management**: Author profiles with bio and avatar support
- **Category System**: Organize content with hierarchical categories
- **SEO Optimization**: Server-side rendering with proper metadata
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### Business Features
- **Pre-Fixed Meetings**: Scheduled business meetings system
- **Networking Lounge**: Digital networking capabilities
- **Exhibition Setup**: Open exhibition management
- **Market Expansion**: Tools for reaching regional markets
- **Testimonials Showcase**: Client success stories and feedback
- **Multi-City Events**: Support for events across different cities

### Technical Features
- **Content Blocks**: Flexible content layout with multiple block types
- **Image Management**: Multiple image handling with positioning and sizing
- **Search & Filtering**: Advanced search across blog posts and news
- **Pagination**: Efficient data loading with pagination support
- **Dynamic Routing**: SEO-friendly URLs with slug generation
- **Form Handling**: Contact forms and registration management

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React & React Icons
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Content Rendering**: React Markdown with syntax highlighting

### Backend
- **CMS**: Strapi 5.16.0
- **Database**: SQLite (Better SQLite3)
- **Authentication**: Strapi Users & Permissions
- **File Storage**: Local file system
- **API**: RESTful API with GraphQL support

### Development Tools
- **Package Manager**: npm
- **Process Manager**: Concurrently for running both servers
- **Code Quality**: ESLint, TypeScript strict mode
- **Build Tools**: Next.js built-in bundler, Strapi build system

## 📋 Prerequisites

- **Node.js**: Version 18.0.0 or higher (≤ 22.x.x)
- **npm**: Version 6.0.0 or higher
- **Git**: For version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Trex-Next
```

### 2. Install Dependencies
```bash
# Install all dependencies (root, client, and server)
npm run install:all
```

### 3. Environment Setup

#### Backend Environment (.env in /server)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

#### Frontend Environment (.env.local in /client)
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### 4. Start Development Servers
```bash
# Start both client and server simultaneously
npm run dev

# Or start individually
npm run dev:client    # Frontend on http://localhost:3000
npm run dev:server    # Backend on http://localhost:1337
```

### 5. Initial Setup

1. **Access Strapi Admin**: Visit `http://localhost:1337/admin`
2. **Create Admin User**: Follow the setup wizard
3. **Configure Permissions**: 
   - Go to Settings → Users & Permissions Plugin → Roles → Public
   - Enable `find` and `findOne` permissions for all content types
4. **Start Adding Content**: Create events, blog posts, testimonials, etc.

## 📁 Project Structure

### Frontend Structure (`/client`)
```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact page
│   ├── events/            # Events listing and details
│   ├── news/              # News articles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/                # Base UI components
│   ├── Hero.tsx           # Hero section
│   ├── NavBar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── ...               # Other components
├── lib/                   # Data fetching and utilities
│   ├── strapi.ts          # Strapi API functions
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript definitions
└── utils/                 # Utility functions
```

### Backend Structure (`/server`)
```
src/
├── api/                   # API endpoints
│   ├── blog/             # Blog content type
│   ├── event/            # Event content type
│   ├── news/             # News content type
│   ├── author/           # Author content type
│   ├── category/         # Category content type
│   ├── testimonial/      # Testimonial content type
│   └── ...              # Other content types
├── components/           # Reusable content components
└── extensions/          # Custom extensions
```

## 🎯 Content Types

### Events
- **Fields**: Title, slug, description, content, featured status, dates, location, registration links
- **Relations**: Category, organizer
- **Components**: Target cities, pricing packages, event flow items, city advantages
- **Media**: Featured image, hero image, video support

### Blog Posts
- **Fields**: Title, slug, excerpt, content, featured status, read time, tags
- **Relations**: Author, category
- **Media**: Featured image
- **Features**: Rich text content, SEO optimization

### News Articles
- **Fields**: Title, slug, excerpt, content, news category, priority
- **Relations**: Author, category, related news
- **Components**: Content blocks (text, image, quote, video)
- **Media**: Featured image, gallery images

### Authors
- **Fields**: Name, email, bio, avatar
- **Relations**: Blog posts, news articles

### Testimonials
- **Fields**: Content, author name, company, display order
- **Media**: Author image

## 🔧 Configuration

### Next.js Configuration
The `next.config.ts` file is configured to:
- Enable Turbopack for faster development
- Handle remote images from Strapi
- Optimize build output

### Strapi Configuration
- **Database**: SQLite for development, easily configurable for production
- **Media**: Local file storage with configurable upload paths
- **CORS**: Configured for frontend connection
- **API**: RESTful endpoints with optional GraphQL

## 🎨 Styling Guide

### Design System
- **Primary Colors**: 
  - Navy Blue: `#264065`
  - Orange: `#D2956F`
  - Background: `#F5F1E8`
- **Typography**: Poppins and Nunito Sans fonts
- **Spacing**: Consistent spacing scale with Tailwind CSS
- **Breakpoints**: Mobile-first responsive design

### Component Patterns
- **Cards**: Hover effects with subtle shadows
- **Buttons**: Rounded corners with hover states
- **Forms**: Clean input styling with validation
- **Navigation**: Sticky header with smooth scrolling

## 🔒 Security

### Authentication
- Strapi built-in authentication system
- JWT tokens for secure API access
- Role-based permissions

### Data Validation
- Input validation on both frontend and backend
- Content sanitization for rich text
- File upload restrictions

## 🚀 Deployment

### Frontend Deployment
```bash
cd client
npm run build
npm run start
```

### Backend Deployment
```bash
cd server
npm run build
npm run start
```

### Production Considerations
- Configure proper environment variables
- Set up database (PostgreSQL/MySQL for production)
- Configure file storage (AWS S3, Cloudinary)
- Set up SSL certificates
- Configure domain and DNS

## 📊 API Documentation

### Key Endpoints
- `GET /api/events` - List all events
- `GET /api/events/:id` - Get single event
- `GET /api/blogs` - List blog posts
- `GET /api/blogs/:id` - Get single blog post
- `GET /api/news` - List news articles
- `GET /api/testimonials` - List testimonials

### Query Parameters
- `populate` - Include related data
- `filters` - Filter results
- `sort` - Sort results
- `pagination` - Paginate results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Documentation

- [Blog Integration Guide](BLOG_INTEGRATION_GUIDE.md)
- [News Integration Guide](NEWS_INTEGRATION_README.md)
- [Strapi-Next.js Connection Guide](STRAPI_NEXTJS_CONNECTION_GUIDE.md)

## 🛠️ Available Scripts

### Root Directory
```bash
npm run dev          # Start both client and server
npm run build        # Build both applications
npm run start        # Start both applications in production
npm run install:all  # Install all dependencies
```

### Client Directory
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Server Directory
```bash
npm run develop      # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure Strapi CORS is properly configured
2. **Image Loading**: Check `next.config.ts` remote patterns
3. **Environment Variables**: Verify all required env vars are set
4. **Database Issues**: Check SQLite file permissions
5. **Port Conflicts**: Ensure ports 3000 and 1337 are available

### Debug Mode
Add `console.log` statements in data fetching functions to debug API responses.

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Team

- **Development Team**: [Your Team Name]
- **Project Manager**: [PM Name]
- **Design Team**: [Design Team Name]

## 📞 Support

For support and questions:
- **Email**: [support@trex.com]
- **Documentation**: Check the additional documentation files
- **Issues**: Create an issue in the repository

---

**Built with ❤️ for India's travel industry**
