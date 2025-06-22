import React from 'react';

export default function Statistics() {
  const statisticsData = [
    {
      number: "150+",
      label: "Pan-India Exhibiters",
      accent: "from-[#264065] to-[#1a2d47]"
    },
    {
      number: "500+",
      label: "verified B2B buyers",
      accent: "from-[#264065] to-[#1a2d47]"
    },
    {
      number: "100%",
      label: "Cities covered",
      accent: "from-[#264065] to-[#1a2d47]"
    },
    {
      number: "98%",
      label: "happy exhibitors",
      accent: "from-[#264065] to-[#1a2d47]"
    }
  ];

  return (
    <div className="w-full py-[80px] relative mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-white to-gray-100/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {statisticsData.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background with Hover Effects */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 sm:p-6 md:p-8 lg:p-6 xl:p-8 min-h-[200px] sm:min-h-[180px] md:min-h-[200px]">
                {/* Number */}
                <div className="relative mb-4 sm:mb-3 md:mb-4">
                  <span className="block text-5xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-[#264065] group-hover:text-[#C88652] leading-none font-['Inter'] tracking-tight transition-all duration-500 ease-out transform group-hover:scale-105">
                    {stat.number}
                  </span>
                  {/* Animated underline */}
                  <div className="w-0 h-1 bg-[#C88652] mx-auto mt-2 rounded-full group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                
                {/* Label */}
                <p className="text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-normal text-[#6c757d] leading-relaxed max-w-[200px] group-hover:text-[#264065] transition-colors duration-300 font-['Poppins']">
                  {stat.label}
                </p>
                
                {/* Hover Glow Effect with C88652 */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C88652]/10 to-[#C88652]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        {/* <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-[#909090] font-['Poppins']">
            <div className="w-2 h-2 bg-[#264065] rounded-full animate-pulse"></div>
            <span className="font-medium">Trusted by businesses across India</span>
            <div className="w-2 h-2 bg-[#264065] rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
} 