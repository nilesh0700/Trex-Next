"use client"

import React from 'react';

const KeyEventHighlights = () => {
  const eventHighlights = [
    {
      title: "Hosted Buyer Program",
      description: "Connect with qualified international buyers",
      backgroundImage: "/assets/buyer-program.jpg",
    },
    {
      title: "TREx Networking Lounge",
      description: "Professional networking opportunities",
      backgroundImage: "/assets/networking.jpg"
    },
    {
      title: "Business Matchmaking Program",
      description: "Strategic business partnerships",
      backgroundImage: "/assets/business-matchmaking.webp",
    },
    {
      title: "Product Showcases & Presentation",
      description: "Display your latest innovations",
      backgroundImage: "/assets/product-display.jpg",
    },
    {
      title: "Innovation & Knowledge Sessions",
      description: "Industry insights and expertise",
      backgroundImage: "/assets/knowledge-sharing.jpeg",
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#264065] mb-4 animate-fadeInUp"
            style={{
              animationDelay: '0.1s',
              animationFillMode: 'both'
            }}
          >
            Key Event Highlights
          </h2>
          <div 
            className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto animate-slideInLeft"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}
          ></div>
        </div>

        {/* Event Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {eventHighlights.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#C88652] transform hover:-translate-y-2 animate-fadeInUp overflow-hidden h-64 sm:h-72 lg:h-80"
              style={{
                animationDelay: `${0.5 + index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${event.backgroundImage})`
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500"></div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white">
                {/* Bottom Section - Title and Description */}
                <div className="text-left">
                  {/* Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 leading-tight text-white group-hover:text-[#C88652] transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Description - Shows on Hover */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {event.description}
                  </p>

                  {/* Bottom Line Indicator */}
                  <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#C88652] to-white transition-all duration-500"></div>
                </div>
              </div>

              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <button 
            className="bg-gradient-to-r from-[#264065] to-[#1a2d47] hover:from-[#C88652] hover:to-[#b8763f] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounceIn"
            style={{
              animationDelay: '1s',
              animationFillMode: 'both'
            }}
          >
            Learn More About Our Events
          </button>
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default KeyEventHighlights; 