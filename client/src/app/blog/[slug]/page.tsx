import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== params.slug && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Blog Post Header */}
      <div className="w-full py-16 sm:py-20 md:py-24 mt-20" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-['Poppins'] mb-8">
            <Link href="/" className="text-[#6c757d] hover:text-[#264065] transition-colors">
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="/blog" className="text-[#6c757d] hover:text-[#264065] transition-colors">
              Blog
            </Link>
            <span className="text-[#6c757d]">/</span>
            <span className="text-[#264065] font-medium">{post.title}</span>
          </nav>

          {/* Post Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#264065] text-white px-4 py-2 rounded-full text-sm font-medium font-['Poppins']">
              {post.category}
            </span>
            <span className="text-[#6c757d] text-sm font-['Poppins']">{post.date}</span>
            <span className="text-[#6c757d] text-sm font-['Poppins']">•</span>
            <span className="text-[#6c757d] text-sm font-['Poppins']">{post.readTime}</span>
          </div>

          {/* Post Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#264065] mb-8 font-['Poppins'] leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#264065] rounded-full flex items-center justify-center">
              <span className="text-white font-bold font-['Poppins']">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-[#264065] font-semibold font-['Poppins']">{post.author.name}</p>
              <p className="text-[#6c757d] text-sm font-['Poppins']">Published on {post.date}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="w-full py-12 sm:py-16 md:py-20" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <div className="text-[#6c757d] font-['Poppins'] text-lg leading-relaxed space-y-6">
              {post.content}
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#264065] mb-4 font-['Poppins']">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#FAF8F5] text-[#6c757d] px-3 py-2 rounded-full text-sm font-['Poppins'] hover:bg-[#264065] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#264065] mb-4 font-['Poppins']">Share this article</h3>
            <div className="flex gap-4">
              <button className="bg-[#1877f2] text-white px-4 py-2 rounded-lg font-['Poppins'] text-sm hover:bg-[#166fe5] transition-colors">
                Facebook
              </button>
              <button className="bg-[#1da1f2] text-white px-4 py-2 rounded-lg font-['Poppins'] text-sm hover:bg-[#1a91da] transition-colors">
                Twitter
              </button>
              <button className="bg-[#0077b5] text-white px-4 py-2 rounded-lg font-['Poppins'] text-sm hover:bg-[#006aa1] transition-colors">
                LinkedIn
              </button>
              <button className="bg-[#25d366] text-white px-4 py-2 rounded-lg font-['Poppins'] text-sm hover:bg-[#22c55e] transition-colors">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#264065] mb-12 font-['Poppins'] text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-[#264065] text-white px-3 py-1 rounded-full text-xs font-medium font-['Poppins']">
                            {relatedPost.category}
                          </span>
                          <span className="text-[#6c757d] text-xs font-['Poppins']">{relatedPost.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#264065] mb-3 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[#6c757d] font-['Poppins'] text-sm leading-relaxed line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="w-full py-8" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Link href="/blog">
            <button className="bg-[#264065] hover:bg-[#C88652] text-white px-8 py-4 rounded-xl font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30 shadow-lg hover:shadow-xl">
              ← Back to All Articles
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 