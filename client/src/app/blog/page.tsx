import React from 'react';
import PageHeading from '@/components/PageHeading';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <PageHeading heading="Blog" />
      
      {/* Blog Content Section */}
      <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
              Latest Updates & Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 sm:p-16 md:p-20">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#264065] to-[#C88652] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#264065] mb-4 font-['Poppins']">
                  Blog Coming Soon
                </h3>
                <p className="text-lg sm:text-xl text-[#6c757d] font-['Poppins'] leading-relaxed max-w-3xl mx-auto mb-8">
                  We're working on bringing you the latest insights, industry updates, and success stories from the world of travel trade exhibitions. Stay tuned for valuable content that will help grow your business.
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-xl p-8 sm:p-10">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Poppins']">
                  Get Notified When We Launch
                </h4>
                <p className="text-white/80 mb-6 font-['Poppins']">
                  Be the first to read our latest articles and industry insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#C88652] font-['Poppins']"
                  />
                  <button className="bg-[#C88652] hover:bg-[#a67142] text-white px-6 py-3 rounded-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C88652] focus:ring-opacity-50 whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
} 