import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '@/components/PageHeading';
import { blogPosts } from '@/lib/blogData';

export default function BlogPage() {

  const categories = ["All", "Networking", "Industry Insights", "Business Tips", "Partnerships", "Marketing", "Success Stories"];

  return (
    <main className="min-h-screen">
      <PageHeading heading="Blog" />
      
      {/* Blog Content Section */}
      <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
              Latest Insights & Updates
            </h2>
            <p className="text-lg sm:text-xl text-[#6c757d] font-['Poppins'] max-w-3xl mx-auto mb-8">
              Stay informed with the latest trends, strategies, and success stories from the world of travel trade exhibitions and B2B networking.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium font-['Poppins'] transition-all duration-300 ${
                  index === 0 
                    ? 'bg-[#264065] text-white shadow-lg' 
                    : 'bg-white text-[#6c757d] hover:bg-[#264065] hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16 sm:mb-20">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C88652] text-white px-3 py-1 rounded-full text-sm font-medium font-['Poppins']">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#264065] text-white px-3 py-1 rounded-full text-sm font-medium font-['Poppins']">
                        {post.category}
                      </span>
                      <span className="text-[#6c757d] text-sm font-['Poppins']">{post.date}</span>
                      <span className="text-[#6c757d] text-sm font-['Poppins']">•</span>
                      <span className="text-[#6c757d] text-sm font-['Poppins']">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#264065] mb-4 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[#6c757d] font-['Poppins'] text-base sm:text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <button className="bg-[#264065] hover:bg-[#C88652] text-white px-6 py-3 rounded-xl font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30 self-start">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#264065] text-white px-3 py-1 rounded-full text-xs font-medium font-['Poppins']">
                        {post.category}
                      </span>
                      <span className="text-[#6c757d] text-xs font-['Poppins']">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-3 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#264065] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold font-['Poppins']">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-[#6c757d] text-xs font-['Poppins']">{post.author.name}</span>
                      </div>
                      <span className="text-[#6c757d] text-sm font-['Poppins']">{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-[#FAF8F5] text-[#6c757d] px-2 py-1 rounded text-xs font-['Poppins']">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="text-[#264065] hover:text-[#C88652] font-medium font-['Poppins'] text-sm transition-colors duration-300 flex items-center gap-2">
                          Read More
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16 sm:mt-20">
            <button className="bg-[#264065] hover:bg-[#C88652] text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 sm:mt-24">
            <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-lg sm:text-xl font-['Poppins'] mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss important updates from the travel trade industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-[#264065] font-['Poppins'] focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
                />
                <button className="bg-[#C88652] hover:bg-[#b6743a] text-white px-8 py-4 rounded-xl font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 