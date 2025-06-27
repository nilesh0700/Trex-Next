import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsArticleBySlug, getRelatedNews, getNewsCategories } from '@/lib/strapi';
import { NewsArticle } from '@/types/strapi';
import NewsContentBlock from '@/components/NewsContentBlock';

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// News article page now uses Strapi CMS data

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  
  // Fetch article from Strapi
  const article = await getNewsArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Fetch related articles and categories
  const [relatedArticles, newsCategories] = await Promise.all([
    getRelatedNews(slug, article.category.slug),
    getNewsCategories()
  ]);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="w-full bg-gray-50 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-4">
            <Link href="/news" className="text-[#264065] hover:text-[#1a2d47] font-medium text-sm">
              ← Back to News
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="mb-6">
                  <span className="inline-block bg-[#264065] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {article.category.name}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins'] leading-tight">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
                    <span>By {article.author.name}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Featured Image */}
                {article.image && (
                  <div className="mb-8">
                    <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-em:text-gray-700 prose-li:text-gray-800 prose-blockquote:text-gray-700">
                  {/* Rich text content */}
                  {article.content && (
                    <div 
                      className="mb-8"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  )}
                  
                  {/* Content Blocks */}
                  {article.contentBlocks && article.contentBlocks.length > 0 && (
                    <div className="space-y-6">
                      {article.contentBlocks
                        .sort((a, b) => a.order - b.order)
                        .map((block) => (
                          <NewsContentBlock key={block.id} block={block} />
                        ))}
                    </div>
                  )}
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="bg-[#264065] hover:bg-[#1a2d47] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Share on LinkedIn
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Related Articles */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block group">
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={article.image}
                              alt={article.imageAlt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#264065] transition-colors duration-200 line-clamp-2 mb-1">
                              {article.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })} • {article.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Dynamic Categories */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Popular Topics
                  </h3>
                  <div className="space-y-2">
                    {newsCategories.map((category) => (
                      <Link key={category.id} href={`/news?category=${category.slug}`} className="block">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#264065]">
                            {category.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                              {category.count}
                            </span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-[#264065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 