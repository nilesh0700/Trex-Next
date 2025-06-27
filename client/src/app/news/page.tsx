import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '@/components/PageHeading';

// Mock data for now - will be replaced with CMS data later
const newsData = {
  pulseFromCommunity: [
    {
      id: 1,
      title: "Did Prada Just Rebrand the Kolhapuri Chappal as High Fashion?",
      image: "/assets/1.png",
      slug: "prada-kolhapuri-chappal-rebrand"
    },
    {
      id: 2,
      title: "Meta's New Play: WhatsApp Introduces Ads & Monetization Features",
      image: "/assets/2.png",
      slug: "meta-whatsapp-ads-monetization"
    },
    {
      id: 3,
      title: "Inside Heinz's 'Ketchup Fraud' Campaign: How Fake Ketchup Becomes Real Marketing Gold",
      image: "/assets/3.png",
      slug: "heinz-ketchup-fraud-campaign"
    },
    {
      id: 4,
      title: "From Cravings to CPG Gold: How Khloé Kardashian Added Protein —and Strategy—to Popcorn",
      image: "/assets/last.png",
      slug: "khloe-kardashian-popcorn-strategy"
    },
    {
      id: 5,
      title: "The Cracks Beneath the Convenience of India's Quick Commerce Industry",
      image: "/assets/graph-up.png",
      slug: "india-quick-commerce-industry"
    },
    {
      id: 6,
      title: "The Long Game: How Virat Kohli's Patience Delivered RCB Their First IPL Title",
      image: "/assets/group.png",
      slug: "virat-kohli-rcb-ipl-title"
    }
  ],
  learnFromCommunity: [
    {
      id: 7,
      title: "Why Coupl Is More Than a Fintech App—It's a Cultural Reset for Modern Relationships",
      image: "/assets/people.png",
      slug: "coupl-fintech-cultural-reset"
    },
    {
      id: 8,
      title: "Beyond the Buzz: How Coffee-Raves Signal the Future of Social, Sober, and Scalable Experiences",
      image: "/assets/social.png",
      slug: "coffee-raves-social-experiences"
    },
    {
      id: 9,
      title: "How Bare Necessities Makes 'Zero Waste Living' The Norm",
      image: "/assets/hand-bond.png",
      slug: "bare-necessities-zero-waste"
    },
    {
      id: 10,
      title: "Beyond the Board: Myntra's Marketing Checkmate with Chess Grandmasters",
      image: "/assets/hand-speaker.png",
      slug: "myntra-chess-grandmasters"
    },
    {
      id: 11,
      title: "How Poshan Is Reclaiming Skincare The Desi Way",
      image: "/assets/globe-people.png",
      slug: "poshan-skincare-desi-way"
    },
    {
      id: 12,
      title: "How Bonomi Isn't Just Selling Coffee. It's Building Culture.",
      image: "/assets/user-tick.png",
      slug: "bonomi-coffee-culture"
    }
  ],
  featuredNews: [
    {
      id: 13,
      title: "What Zero Tax on ₹12L Means for Middle-Class Shopping Trends",
      image: "/assets/event.png",
      slug: "zero-tax-middle-class-shopping"
    },
    {
      id: 14,
      title: "What the 2025 Budget Changed for MSME Founders: ₹75Cr Cap & ₹10K Cr Fund",
      image: "/assets/globe.png",
      slug: "2025-budget-msme-founders"
    },
    {
      id: 15,
      title: "How Did China's Deepseek & Qwen 2.5 Max Dethroned ChatGPT",
      image: "/assets/currency.svg",
      slug: "china-deepseek-qwen-chatgpt"
    },
    {
      id: 16,
      title: "Masterclass Recap: Navigating Legal Waters for Startups | Ft. Jenisha Parikh",
      image: "/assets/badge.svg",
      slug: "legal-waters-startups-jenisha-parikh"
    }
  ]
};

export default function NewsPage() {
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
              
              {/* Latest News Section */}
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
                  {newsData.pulseFromCommunity.map((article) => (
                    <Link key={article.id} href={`/news/${article.slug}`} className="block">
                      <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                        <div className="flex h-32">
                          <div className="relative w-32 flex-shrink-0 bg-gray-100">
                            <Image
                              src={article.image}
                              alt={article.title}
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
              
              {/* Business Insights Section */}
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
                  {newsData.learnFromCommunity.map((article) => (
                    <Link key={article.id} href={`/news/${article.slug}`} className="block">
                      <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                        <div className="flex h-32">
                          <div className="relative w-32 flex-shrink-0 bg-gray-100">
                            <Image
                              src={article.image}
                              alt={article.title}
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
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Featured News */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Poppins']">
                    Featured News
                  </h3>
                  <div className="space-y-6">
                    {newsData.featuredNews.map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block">
                        <article className="group cursor-pointer">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#264065] transition-colors duration-200 leading-tight line-clamp-3">
                                {article.title}
                              </h4>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 font-['Poppins']">
                    Stay Updated
                  </h3>
                  <p className="text-sm mb-6 opacity-90">
                    Subscribe to our newsletter for the latest news and insights from the community.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-[#264065] py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Poppins']">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Business Strategy', count: 12 },
                      { name: 'Marketing', count: 8 },
                      { name: 'Technology', count: 15 },
                      { name: 'Startups', count: 6 },
                      { name: 'Industry News', count: 10 },
                      { name: 'Leadership', count: 4 }
                    ].map((category) => (
                      <Link key={category.name} href={`/news?category=${category.name.toLowerCase().replace(' ', '-')}`}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                          <span className="text-gray-700 group-hover:text-[#264065] font-medium">
                            {category.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {category.count}
                          </span>
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