import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FAF8F5'}}>
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-[#264065] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#264065] mb-4 font-['Poppins']">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#264065] mb-6 font-['Poppins']">
              Blog Post Not Found
            </h2>
            <p className="text-lg text-[#6c757d] font-['Poppins'] mb-8 leading-relaxed">
              Sorry, we couldn't find the blog post you're looking for. It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <button className="bg-[#264065] hover:bg-[#C88652] text-white px-8 py-4 rounded-xl font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30 shadow-lg hover:shadow-xl">
                ← Back to Blog
              </button>
            </Link>
            <Link href="/">
              <button className="bg-white hover:bg-[#FAF8F5] text-[#264065] border-2 border-[#264065] px-8 py-4 rounded-xl font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30 shadow-lg hover:shadow-xl">
                Go to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 