import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// Mock article data - will be replaced with CMS data later
const getArticleData = (slug: string) => {
  const articles: Record<string, any> = {
    'prada-kolhapuri-chappal-rebrand': {
      title: "Did Prada Just Rebrand the Kolhapuri Chappal as High Fashion?",
      category: "Fashion & Business",
      publishedAt: "2024-01-15",
      author: "Fashion Industry Analyst",
      excerpt: "Exploring how luxury brands are reimagining traditional Indian craftsmanship for global markets.",
      content: [
        {
          type: 'text',
          content: "In a move that has sparked conversations across fashion and cultural circles, luxury fashion house Prada has introduced a sandal design that bears striking resemblance to the traditional Indian Kolhapuri chappal. This development raises important questions about cultural appropriation, brand positioning, and the fine line between inspiration and imitation in the global fashion industry."
        },
        {
          type: 'image',
          src: '/assets/1.png',
          alt: 'Prada sandal design comparison',
          caption: 'The Prada design alongside traditional Kolhapuri chappals'
        },
        {
          type: 'text',
          content: "The Kolhapuri chappal, originating from the town of Kolhapur in Maharashtra, has been a staple of Indian footwear for centuries. Known for its durability, comfort, and distinctive leather craftsmanship, these sandals represent more than just footwear—they embody a rich cultural heritage and traditional artisanal skills passed down through generations."
        },
        {
          type: 'text',
          content: "Prada's interpretation, priced at approximately $1,200, has been positioned as a luxury summer essential. The design maintains the basic silhouette and construction principles of the traditional Kolhapuri, but incorporates premium Italian leather and the brand's signature finishing touches."
        },
        {
          type: 'image',
          src: '/assets/2.png',
          alt: 'Traditional craftsmanship',
          caption: 'Traditional artisans crafting authentic Kolhapuri chappals'
        },
        {
          type: 'text',
          content: "This situation highlights a broader trend in luxury fashion where traditional designs from various cultures are reinterpreted for high-end markets. While some argue this brings global recognition to traditional crafts, others question whether adequate credit and compensation are given to the original creators and communities."
        },
        {
          type: 'text',
          content: "The business implications are significant. When luxury brands adopt traditional designs, they often bring substantial marketing power and global reach. However, this can also overshadow the original artisans and their communities who have been creating these designs for generations without the same level of recognition or financial benefit."
        }
      ],
      tags: ['Fashion', 'Cultural Heritage', 'Luxury Brands', 'Traditional Crafts']
    },
    'meta-whatsapp-ads-monetization': {
      title: "Meta's New Play: WhatsApp Introduces Ads & Monetization Features",
      category: "Technology & Business",
      publishedAt: "2024-01-14",
      author: "Tech Business Reporter",
      excerpt: "WhatsApp's latest update introduces advertising and monetization features, changing the landscape of messaging apps.",
      content: [
        {
          type: 'text',
          content: "Meta has officially announced the rollout of advertising and enhanced monetization features across WhatsApp, marking a significant shift in the platform's business model. This move represents one of the most substantial changes to the messaging platform since Meta's acquisition of WhatsApp in 2014."
        },
        {
          type: 'image',
          src: '/assets/social.png',
          alt: 'WhatsApp monetization features',
          caption: 'New monetization features being introduced to WhatsApp'
        },
        {
          type: 'text',
          content: "The new features include sponsored messages, business catalog ads, and premium subscription tiers for enhanced functionality. These changes are designed to help Meta monetize its massive WhatsApp user base, which exceeds 2 billion users globally."
        }
      ],
      tags: ['Meta', 'WhatsApp', 'Digital Marketing', 'Monetization']
    }
  };
  
  return articles[slug] || null;
};

// Mock related articles data
const getRelatedArticles = () => [
  {
    id: 1,
    title: "Inside Heinz's 'Ketchup Fraud' Campaign: How Fake Ketchup Becomes Real Marketing Gold",
    slug: "heinz-ketchup-fraud-campaign",
    image: "/assets/3.png"
  },
  {
    id: 2,
    title: "From Cravings to CPG Gold: How Khloé Kardashian Added Protein —and Strategy—to Popcorn",
    slug: "khloe-kardashian-popcorn-strategy",
    image: "/assets/last.png"
  },
  {
    id: 3,
    title: "The Cracks Beneath the Convenience of India's Quick Commerce Industry",
    slug: "india-quick-commerce-industry",
    image: "/assets/graph-up.png"
  },
  {
    id: 4,
    title: "The Long Game: How Virat Kohli's Patience Delivered RCB Their First IPL Title",
    slug: "virat-kohli-rcb-ipl-title",
    image: "/assets/group.png"
  }
];

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getArticleData(slug);
  const relatedArticles = getRelatedArticles();
  
  if (!article) {
    notFound();
  }
  
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
                    {article.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins'] leading-tight">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  {article.content.map((block: any, index: number) => {
                    if (block.type === 'text') {
                      return (
                        <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                          {block.content}
                        </p>
                      );
                    } else if (block.type === 'image') {
                      return (
                        <div key={index} className="my-8">
                          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={block.src}
                              alt={block.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {block.caption && (
                            <p className="text-sm text-gray-600 mt-3 text-center italic">
                              {block.caption}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Poppins']">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((article) => (
                      <Link key={article.id} href={`/news/${article.slug}`} className="block">
                        <article className="group cursor-pointer">
                          <div className="flex gap-4">
                            <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
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
                    Get the latest news and insights delivered to your inbox.
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
                
                {/* Popular Categories */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Poppins']">
                    Popular Topics
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Business Strategy', count: 12 },
                      { name: 'Technology', count: 15 },
                      { name: 'Marketing', count: 8 },
                      { name: 'Startups', count: 6 },
                      { name: 'Industry News', count: 10 }
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