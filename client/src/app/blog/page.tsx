import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '@/components/PageHeading';
import { getBlogPosts, getBlogCategories } from '@/lib/strapi';
import { BlogPost } from '@/types/strapi';

type BlogPageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page, category, search } = await searchParams;
  
  // Fetch filtered blog posts for main content and all posts for sidebar
  const [blogData, categories, allPostsData] = await Promise.all([
    getBlogPosts({
      page: page ? parseInt(page) : 1,
      pageSize: 9,
      category,
      search,
    }),
    getBlogCategories(),
    getBlogPosts({
      page: 1,
      pageSize: 50, // Get more posts for sidebar data
    }),
  ]);

  const { data: blogPosts, meta } = blogData;
  const { data: allPosts } = allPostsData;
  const currentPage = meta.pagination?.page || 1;
  const totalPages = meta.pagination?.pageCount || 1;

  // Debug logging
  console.log('Current category filter:', category);
  console.log('Blog posts count:', blogPosts.length);
  console.log('All posts count:', allPosts.length);
  console.log('Categories:', categories.map(c => ({ name: c.name, slug: c.slug })));

  // Add "All" category for filtering
  const allCategories = [
    { id: 0, name: "All", slug: "", description: "All posts" },
    ...categories,
  ];

  // Get recent posts for sidebar (from all posts, not filtered)
  const recentPosts = allPosts.slice(0, 4);
  
  // Get popular categories (categories with most posts)
  const popularCategories = categories.slice(0, 6);

  // Featured authors - dynamically generated from ALL blog posts (not filtered)
  const authorStats = allPosts.reduce((acc, post) => {
    const authorName = post.author.name;
    if (!acc[authorName]) {
      acc[authorName] = {
        name: authorName,
        posts: 0,
        // Add role based on author name or default roles
        role: authorName === "Krishna Gopalan" ? "Travel Industry Expert" :
              authorName === "Siddharth Jain" ? "Business Development" :
              authorName === "Mehboob Shaikh" ? "Marketing Strategist" :
              "Content Writer"
      };
    }
    acc[authorName].posts++;
    return acc;
  }, {} as Record<string, { name: string; posts: number; role: string }>);

  const featuredAuthors = Object.values(authorStats)
    .filter(author => author.posts > 0)
    .sort((a, b) => b.posts - a.posts)
    .slice(0, 5); // Show top 5 authors by post count

  return (
    <main className="min-h-screen bg-white">
      <PageHeading heading="Blog" />
      
      {/* Blog Content Section */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Header Section */}
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover insights, strategies, and stories from the world of travel and business networking.
            </p>
          </div> */}

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3 mt-[-50px]">
              
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
                {/* Search Bar */}
                <div className="w-full md:w-96">
                  <form method="GET" className="relative">
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        name="search"
                        placeholder="Search articles..."
                        defaultValue={search}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264065] focus:border-transparent bg-gray-50"
                      />
                    </div>
                  </form>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {allCategories.slice(0, 5).map((cat) => (
                    <Link key={cat.id} href={cat.slug ? `/blog?category=${cat.slug}` : '/blog'}>
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          (category === cat.slug) || (!category && cat.slug === '')
                            ? 'bg-[#264065] text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* No Results Message */}
              {blogPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600">
                    {search ? `No articles match your search for "${search}"` : "No articles available in this category"}
                  </p>
                  <Link href="/blog">
                    <button className="mt-4 bg-[#264065] hover:bg-[#1a2d47] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      View All Articles
                    </button>
                  </Link>
                </div>
              )}

              {/* All Blog Posts with Consistent Styling */}
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                    <article className="group cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                        <div className="md:col-span-3">
                          <div className="flex items-center gap-3 mb-3">
                            {post.featured && (
                              <>
                                <span className="inline-block w-2 h-2 bg-[#264065] rounded-full"></span>
                                <span className="text-sm font-medium text-[#264065] uppercase tracking-wide">
                                  Featured
                                </span>
                              </>
                            )}
                            {post.category.name.toLowerCase() !== 'uncategorized' && (
                              <span className="text-sm text-[#264065] font-medium">
                                <span className="text-gray-300">•</span>
                                {post.category.name}
                              </span>
                            )}
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#264065] transition-colors duration-200 leading-tight ${
                            post.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                          }`}>
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-semibold text-gray-700">
                                    {post.author.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <span>{post.author.name}</span>
                              </div>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="md:col-span-1">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.imageAlt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 25vw"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-16">
                  {currentPage > 1 && (
                    <Link href={`/blog?page=${currentPage - 1}${category ? `&category=${category}` : ''}${search ? `&search=${search}` : ''}`}>
                      <button className="px-4 py-2 text-gray-600 hover:text-[#264065] transition-colors border border-gray-200 rounded-lg hover:border-[#264065]">
                        ← Previous
                      </button>
                    </Link>
                  )}
                  
                  <div className="flex items-center gap-2 mx-4">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        
                        <Link key={pageNum} href={`/blog?page=${pageNum}${category ? `&category=${category}` : ''}${search ? `&search=${search}` : ''}`}>
                          <button
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              currentPage === pageNum
                                ? 'bg-[#264065] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {pageNum}
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                  
                  {currentPage < totalPages && (
                    <Link href={`/blog?page=${currentPage + 1}${category ? `&category=${category}` : ''}${search ? `&search=${search}` : ''}`}>
                      <button className="px-4 py-2 text-gray-600 hover:text-[#264065] transition-colors border border-gray-200 rounded-lg hover:border-[#264065]">
                        Next →
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Newsletter Signup */}
                {/* <div className="bg-gray-50 rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest travel industry insights delivered weekly.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264065] focus:border-transparent text-sm"
                    />
                    <button className="w-full bg-[#264065] hover:bg-[#1a2d47] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                      Subscribe
                    </button>
                  </div>
                </div> */}

                {/* Recent Posts */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.imageAlt}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#264065] transition-colors duration-200 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })} • {post.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Popular Categories
                  </h3>
                  <div className="space-y-2">
                    {popularCategories.map((cat) => (
                      <Link key={cat.id} href={`/blog?category=${cat.slug}`} className="block">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#264065]">
                            {cat.name}
                          </span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#264065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Authors */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Featured Authors
                  </h3>
                  <div className="space-y-4">
                    {featuredAuthors.map((author, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#264065] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {author.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {author.role} • {author.posts} posts
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                {/* <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link href="/events" className="block">
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#264065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#264065]">
                          Upcoming Events
                        </span>
                      </div>
                    </Link>
                    <Link href="/contact" className="block">
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#264065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#264065]">
                          Contact Us
                        </span>
                      </div>
                    </Link>
                    <Link href="/about" className="block">
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#264065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#264065]">
                          About Us
                        </span>
                      </div>
                    </Link>
                  </div>
                </div> */}

              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
} 