"use client"

import React from 'react';
import Image from 'next/image';

export default function AboutUsDetailed() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center mb-16">
          
          {/* Left Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Main Description */}
            <div className="space-y-6 animate-fadeInUp">
              <p className="text-lg md:text-xl text-[#6c757d] leading-relaxed font-['Poppins']">
                <span className="font-semibold text-[#264065]">TREX - Travel Relations & Exhibitions</span> is India's first-of-its kind regional B2B travel trade exhibition focused on unlocking the potential of Tier 2 and Tier 3 markets.
              </p>
              
              <p className="text-lg md:text-xl text-[#6c757d] leading-relaxed font-['Poppins']">
                Led by industry veterans at <span className="font-semibold text-[#264065]">Netra India LLP</span>, TREX connects regional buyers with national sellers through innovation, insights, and meaningful collaborations.
              </p>
              
              <p className="text-lg md:text-xl text-[#6c757d] leading-relaxed font-['Poppins']">
                More than just an event, TREX is a platform driving business growth and industry evolution, creating lasting partnerships that transform the travel and tourism landscape across India.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4 animate-fadeInUp animation-delay-200">
              <h3 className="text-2xl font-bold text-[#264065] font-['Poppins'] mb-6">
                What Makes TREX Unique
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6c757d] font-['Poppins']">Regional Market Focus</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6c757d] font-['Poppins']">B2B Networking</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6c757d] font-['Poppins']">Industry Innovation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6c757d] font-['Poppins']">Strategic Partnerships</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            {/* Experience Badge */}
            <div className="absolute -top-4 sm:-top-6 right-4 sm:right-8 lg:-top-8 lg:-right-4 xl:-top-6 xl:-right-8 z-20 animate-bounceIn animation-delay-600">
              <div className="bg-gradient-to-br from-[#C88652] to-[#b8763f] text-white p-4 sm:p-6 lg:p-5 xl:p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300 group">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold font-['Poppins'] mb-1">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-xs xl:text-sm font-medium opacity-90 leading-tight">
                    Years Of<br />Experience
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/15 rounded-full"></div>
              </div>
            </div>
            
            {/* Main Image Container */}
            <div className="relative group animate-slideInRight animation-delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                {/* Image */}
                <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative">
                  <Image
                    src="/assets/buyer-program.jpg"
                    alt="Professional business team - TREX Travel Relations & Exhibitions"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                  
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#264065]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#C88652]/10 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#264065]/10 rounded-full blur-sm animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#FAF8F5] to-white p-8 rounded-2xl shadow-sm animate-fadeInUp animation-delay-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#264065] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#264065] font-['Poppins']">
                Our Mission
              </h3>
            </div>
            <p className="text-[#6c757d] leading-relaxed font-['Poppins']">
              To bridge the gap between regional markets and national opportunities, empowering Tier 2 and Tier 3 cities to participate meaningfully in India's growing travel and tourism economy through strategic connections and innovative platforms.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#FAF8F5] to-white p-8 rounded-2xl shadow-sm animate-fadeInUp animation-delay-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#C88652] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#264065] font-['Poppins']">
                Our Vision
              </h3>
            </div>
            <p className="text-[#6c757d] leading-relaxed font-['Poppins']">
              To become the leading catalyst for regional travel trade development in India, creating an ecosystem where every city, regardless of its tier, has equal access to growth opportunities and can contribute to the nation's tourism success story.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border animate-fadeInUp animation-delay-600">
            <div className="text-3xl font-bold text-[#264065] font-['Poppins'] mb-2">50+</div>
            <div className="text-[#6c757d] text-sm font-['Poppins']">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border animate-fadeInUp animation-delay-700">
            <div className="text-3xl font-bold text-[#264065] font-['Poppins'] mb-2">1000+</div>
            <div className="text-[#6c757d] text-sm font-['Poppins']">Business Connections</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border animate-fadeInUp animation-delay-800">
            <div className="text-3xl font-bold text-[#264065] font-['Poppins'] mb-2">200+</div>
            <div className="text-[#6c757d] text-sm font-['Poppins']">Industry Partners</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border animate-fadeInUp animation-delay-900">
            <div className="text-3xl font-bold text-[#264065] font-['Poppins'] mb-2">95%</div>
            <div className="text-[#6c757d] text-sm font-['Poppins']">Satisfaction Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-2xl p-8 lg:p-12 animate-fadeInUp animation-delay-1000">
          <h3 className="text-2xl lg:text-3xl font-bold text-white font-['Poppins'] mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-['Poppins']">
            Join thousands of travel professionals who have already discovered the power of regional market connections through TREX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-[#264065] px-8 py-4 rounded-xl font-medium text-lg font-['Poppins'] transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#264065] px-8 py-4 rounded-xl font-medium text-lg font-['Poppins'] transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div> */}
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(3deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(3deg);
          }
          70% {
            transform: scale(0.9) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(3deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
} 