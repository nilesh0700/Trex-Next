import React from 'react';
import Link from 'next/link';
import PageHeading from '@/components/PageHeading';

export default function NewsNotFound() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeading heading="News Article Not Found" />
      
      <div className="w-full py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
              Article Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The news article you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/news">
                <button className="bg-[#264065] hover:bg-[#1a2d47] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Back to News
                </button>
              </Link>
              <Link href="/">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 