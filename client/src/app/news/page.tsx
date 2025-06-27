import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '@/components/PageHeading';
import { getNewsByCategory, getFeaturedNews, getNewsCategories } from '@/lib/strapi';
import { NewsArticle } from '@/types/strapi';

// News page now uses Strapi CMS data

export default async function NewsPage() {
  // Fetch data from Strapi
  const [latestNewsResult, businessInsightsResult, featuredNewsResult, newsCategories] = await Promise.all([
    getNewsByCategory('latest-news', 6),
    getNewsByCategory('business-insights', 6),
    getFeaturedNews(4),
    getNewsCategories()
  ]);

  const latestNews = latestNewsResult.data;
  const businessInsights = businessInsightsResult.data;
  const featuredNews = featuredNewsResult.data;

  return (
    <main className="min-h-screen bg-white">
      <PageHeading heading="News" />
      
      {/* News Content Section */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3 mt-[-50px]">
              
              {/* Latest News Section - Only show if there are articles */}
              {latestNews.length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-semibold font-['Poppins'] text-[#264065]">
                        Latest News
                      </h2>
                      <button className="bg-[#264065] text-white p-2 rounded-full hover:bg-[#1a2d47] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestNews.map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block">
                        <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                          <div className="flex h-32">
                            <div className="relative w-32 flex-shrink-0 bg-gray-100">
                              <Image
                                src={article.image}
                                alt={article.imageAlt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 p-4 flex items-center">
                              <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#264065] transition-colors duration-200 leading-tight line-clamp-3">
                                {article.title}
                              </h3>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Business Insights Section - Only show if there are articles */}
              {businessInsights.length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-semibold font-['Poppins'] text-[#264065]">
                        Business Insights
                      </h2>
                      <button className="bg-[#264065] text-white p-2 rounded-full hover:bg-[#1a2d47] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessInsights.map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block">
                        <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                          <div className="flex h-32">
                            <div className="relative w-32 flex-shrink-0 bg-gray-100">
                              <Image
                                src={article.image}
                                alt={article.imageAlt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 p-4 flex items-center">
                              <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#264065] transition-colors duration-200 leading-tight line-clamp-3">
                                {article.title}
                              </h3>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Show message if no articles in any category */}
              {latestNews.length === 0 && businessInsights.length === 0 && (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No news articles available
                    </h3>
                    <p className="text-gray-600">
                      Check back later for the latest news and insights.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Featured News */}
                <div className="bg-white rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Featured News
                  </h3>
                  <div className="space-y-4">
                    {featuredNews.map((article) => (
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
                    Categories
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