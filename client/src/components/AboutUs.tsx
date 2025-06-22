"use client"

import React from 'react';
import Image from 'next/image';

interface AboutUsProps {
  showLearnMore?: boolean;
}

export default function AboutUs({ showLearnMore = true }: AboutUsProps) {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 p-6 sm:p-8 lg:p-10 rounded-2xl" style={{backgroundColor: '#FAF8F5'}}>
            {/* Section Header */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#264065] font-['Poppins'] leading-tight animate-fadeInUp">
                About Us
              </h2>
              
              {/* Main Description */}
              <div className="space-y-4 sm:space-y-6 animate-fadeInUp animation-delay-200">
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-2xl">
                  <span className="font-semibold text-[#264065]">TREX - Travel Relations & Exhibitions</span> is India's first-of-its kind regional B2B travel trade exhibition focused on unlocking the potential of Tier 2 and Tier 3 markets.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-2xl">
                  Led by industry veterans at <span className="font-semibold text-[#264065]">Netra India LLP</span>, TREX connects regional buyers with national sellers through innovation, insights, and meaningful collaborations. More than just an event, it's a platform driving business growth and industry evolution.
                </p>
              </div>
            </div>
            
            {/* Learn More Button */}
            {showLearnMore && (
              <div className="animate-fadeInUp animation-delay-400">
                <button className="group bg-[#264065] hover:bg-[#1a2d47] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg font-['Poppins'] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#264065]/20">
                  <span className="flex items-center gap-2">
                    Learn more
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
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
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
} 