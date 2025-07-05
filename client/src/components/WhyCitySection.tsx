import React from 'react';
import { WhyCitySection as WhyCitySectionType } from '@/types/strapi';

interface WhyCitySectionProps {
  cityName: string;
  data: WhyCitySectionType;
}

const WhyCitySection: React.FC<WhyCitySectionProps> = ({ cityName, data }) => {
  // Use dynamic data from CMS, sorted by display order
  const cityStats = data.cityStatistics.sort((a, b) => (a.order || 0) - (b.order || 0));
  const cityAdvantages = data.cityAdvantages.sort((a, b) => (a.order || 0) - (b.order || 0));

  // Hardcoded gradient colors for city advantage cards
  const getGradientColor = (index: number): string => {
    const gradients = [
      'bg-gradient-to-br from-blue-50 to-indigo-100',
      'bg-gradient-to-br from-green-50 to-emerald-100',
      'bg-gradient-to-br from-orange-50 to-amber-100',
      'bg-gradient-to-br from-purple-50 to-violet-100',
      'bg-gradient-to-br from-teal-50 to-cyan-100',
      'bg-gradient-to-br from-rose-50 to-pink-100',
      'bg-gradient-to-br from-yellow-50 to-orange-100',
      'bg-gradient-to-br from-cyan-50 to-blue-100'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/waves.svg)`
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <div 
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/dotted-circle.svg)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Introduction */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block bg-[#C88652] text-white px-6 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wide animate-pulse">
            {data.badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#264065] mb-6 font-['Poppins'] leading-tight">
            {data.title.replace('{city_name}', cityName).split(cityName).map((part, index) => (
              index === 0 ? part : (
                <span key={index}>
                  <span className="text-[#C88652] relative">
                    {cityName}
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C88652] to-[#264065] rounded-full"></div>
                  </span>
                  {part}
                </span>
              )
            ))}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-['Poppins'] max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Key Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {cityStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#C88652] relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${stat.icon})`
                  }}
                ></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C88652] to-[#b8753d] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div 
                      className="w-6 h-6 bg-contain bg-center bg-no-repeat brightness-0 invert"
                      style={{
                        backgroundImage: `url(${stat.icon})`
                      }}
                    ></div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    {stat.growth}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#264065] font-['Poppins'] mb-2 group-hover:text-[#C88652] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-['Poppins'] font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C88652] to-[#264065] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* City Image Section */}
        {/* <div className="relative mb-16 lg:mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-[21/9] relative">
            <img 
              src="/assets/pune.jpeg" 
              alt={`${cityName} cityscape`}
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {cityAdvantages.map((advantage, index) => (
            <div
              key={index}
              className={`group ${getGradientColor(index)} rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-[#C88652]/30 relative overflow-hidden`}
              style={{
                animationDelay: `${0.5 + index * 0.15}s`
              }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${advantage.iconUrl})`
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <div 
                      className="w-8 h-8 bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${advantage.iconUrl})`
                      }}
                    ></div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-[#264065] px-4 py-2 rounded-full text-sm font-bold capitalize">
                    {advantage.category}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#264065] mb-4 font-['Poppins'] leading-tight group-hover:text-[#C88652] transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed font-['Poppins'] mb-4 text-lg">
                  {advantage.description}
                </p>

                {/* Detailed Info - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#C88652]/20">
                    <div className="flex items-center gap-2 text-[#264065] font-semibold">
                      <svg className="w-5 h-5 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{advantage.detailedInfo}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#C88652] to-[#264065] transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold font-['Poppins'] mb-4">
              Ready to Tap into {cityName}'s Potential?
            </h3>
            <p className="text-xl text-blue-200 font-['Poppins'] mb-8 max-w-3xl mx-auto">
              Join hundreds of industry leaders who've already discovered the opportunities in India's fastest-growing business destination
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyCitySection; 