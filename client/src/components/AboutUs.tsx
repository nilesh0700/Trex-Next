"use client"

import React from 'react';
import RegistrationButton from './RegistrationButton';

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
          
          {/* Right Side - TREX Impact Animated Card */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                    <animateTransform attributeName="transform" type="rotate" dur="10s" values="0 100 100;360 100 100" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3">
                    <animateTransform attributeName="transform" type="rotate" dur="15s" values="360 100 100;0 100 100" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2">
                    <animateTransform attributeName="transform" type="rotate" dur="8s" values="0 100 100;360 100 100" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h4 className="text-3xl font-bold font-['Poppins']">TREX Impact</h4>
                  <p className="text-blue-200 text-sm font-['Poppins']">Connecting Travel Industry Nationwide</p>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
                    <div className="text-2xl font-bold text-[#C88652] mb-1">500+</div>
                    <p className="text-xs text-blue-200 font-['Poppins']">Decision Makers</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
                    <div className="text-2xl font-bold text-[#C88652] mb-1">200+</div>
                    <p className="text-xs text-blue-200 font-['Poppins']">Exhibitors</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
                    <div className="text-2xl font-bold text-[#C88652] mb-1">15+</div>
                    <p className="text-xs text-blue-200 font-['Poppins']">States Covered</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
                    <div className="text-2xl font-bold text-[#C88652] mb-1">85%</div>
                    <p className="text-xs text-blue-200 font-['Poppins']">Success Rate</p>
                  </div>
                </div>

                {/* Market Insights */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse"></div>
                    <p className="text-sm font-['Poppins']">Tier 2/3 cities showing 40% faster growth</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse animation-delay-500"></div>
                    <p className="text-sm font-['Poppins']">Regional markets driving 60% of new bookings</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse animation-delay-1000"></div>
                    <p className="text-sm font-['Poppins']">B2B events generating 3x higher ROI</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-blue-200 text-sm font-['Poppins']">Seize your opportunity in India's emerging markets. <RegistrationButton variant="link">Register today.</RegistrationButton></p>
                </div>
              </div>
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
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
} 