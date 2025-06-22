"use client"

import React from 'react';

const MarketExpansion = () => {
  const expansionHighlights = [
    {
      title: "Tap into a high-growth buyer base in emerging cities of Tier 2 & Tier 3",
      description: "Access untapped markets with high growth potential",
      bgColor: "bg-white",
      iconUrl: "/assets/graph-up.png"
    },
    {
      title: "Pre-scheduled Exclusive meetings with Top B2C Producers",
      description: "Connect directly with industry leaders",
      bgColor: "bg-[rgba(38,64,101,0.18)]",
      iconUrl: "/assets/globe-people.png"
    },
    {
      title: "Engage with 500+ verified decision-makers",
      description: "Network with qualified industry professionals",
      bgColor: "bg-white",
      iconUrl: "/assets/user-tick.png"
    },
    {
      title: "Position your brand in a less-saturated, yet high-potential market",
      description: "Stand out in emerging travel markets",
      bgColor: "bg-[rgba(153,195,190,0.33)]",
      iconUrl: "/assets/hand-speaker.png"
    },
    {
      title: "Be part of a curated, professional event",
      description: "Join an exclusive industry gathering",
      bgColor: "bg-white",
      iconUrl: "/assets/group.png"
    },
    {
      title: "Post Exhibition Support, Less said than done",
      description: "Comprehensive follow-up assistance",
      bgColor: "bg-[rgba(38,64,101,0.23)]",
      iconUrl: "/assets/hand-bond.png"
    },
    {
      title: "Extensive Social Media Campaigns with your Branding in the key regions",
      description: "Amplify your reach through targeted marketing",
      bgColor: "bg-white",
      iconUrl: "/assets/social.png"
    },
    {
      title: "",
      description: "",
      bgColor: "",
      iconUrl: "",
      isImageCard: true,
      imageUrl: "/assets/last.png"
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#f5f1ed] relative overflow-hidden">
      {/* Waves SVG Background Overlay */}
      <div 
        className="absolute inset-0 opacity-90 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/waves.svg)`
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Market Expansion Grid with Title as First Item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Title positioned as first grid item */}
          <div className="flex items-center justify-start h-64 sm:h-72 lg:h-80">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#C88652] leading-tight animate-fadeInUp"
              style={{
                animationDelay: '0.1s',
                animationFillMode: 'both'
              }}
            >
              Expand Your Reach into High-Growth Travel Markets
            </h2>
          </div>

          {/* Market Expansion Cards */}
          {expansionHighlights.map((item, index) => (
            <div
              key={index}
              className={`group ${item.isImageCard ? 'bg-cover bg-center bg-no-repeat' : item.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${item.isImageCard ? '' : 'p-6 sm:p-8'} border border-gray-200 hover:border-[#C88652] transform hover:-translate-y-2 animate-fadeInUp h-64 sm:h-72 lg:h-80 ${item.isImageCard ? '' : 'flex flex-col justify-between'} overflow-hidden`}
              style={{
                animationDelay: `${0.3 + (index + 1) * 0.1}s`,
                animationFillMode: 'both',
                ...(item.isImageCard && { backgroundImage: `url(${item.imageUrl})` })
              }}
            >
              {!item.isImageCard && (
                <>
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#C88652] group-hover:scale-110 transition-transform duration-300 p-2 sm:p-2.5 lg:p-3 flex items-center justify-center">
                      <div 
                        className="w-full h-full bg-contain bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${item.iconUrl})`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-end">
                    {/* Title */}
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#264065] mb-3 sm:mb-4 leading-tight group-hover:text-[#C88652] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description - Shows on Hover */}
                    <p className="text-xs sm:text-sm text-[#6c757d] leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="flex items-center gap-2 text-[#264065] group-hover:text-[#C88652] transition-colors duration-300 cursor-pointer">
                      <span className="text-sm font-semibold">Learn More</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Bottom Indicator Line */}
                    <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#264065] to-[#C88652] transition-all duration-500"></div>
                  </div>
                </>
              )}
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
            Explore Market Opportunities
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

        .animate-bounceIn {
          animation: bounceIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MarketExpansion; 