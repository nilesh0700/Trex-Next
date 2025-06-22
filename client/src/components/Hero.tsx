import React from 'react';

export default function Hero() {
  return (
    <div className="main-container w-full max-w-[1920px] min-h-screen relative mx-auto my-0 bg-white">
      {/* Unified Responsive Layout */}
      <div className="flex flex-col min-h-screen">
         <div className="flex flex-row h-full">
           {/* Left Section - Responsive Background */}
           <div className="w-full lg:w-[70%] min-h-[80vh] bg-[#C88652] lg:bg-[#f8f9fa] flex items-center">
             <div className="px-6 md:px-8 lg:px-12 xl:pl-[163px] xl:pr-[100px] py-8 md:py-12 lg:py-12 xl:py-0 w-full text-center lg:text-left">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[64px] font-bold text-[#264065] leading-tight md:leading-tight lg:leading-tight xl:leading-[76px] mb-6 md:mb-8 lg:mb-6">
                 where regional market<br />
                 <span> meets National potential</span>
               </h1>
               <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[18px] text-[#6c757d] leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-[28px] mb-8 md:mb-10 lg:mb-8 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[500px] mx-auto lg:mx-0">
                 To create India's most impactful regional B2B travel Media 
                 enterprise, focused on unlocking the potential of Tier 2 and Tier 
                 3 cities.
               </p>
               <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-5 md:gap-6 lg:gap-6 mb-8 md:mb-8 lg:mb-8">
                 <button className="bg-[#264065] text-white px-8 sm:px-7 md:px-8 lg:px-8 py-4 sm:py-3 md:py-4 rounded-[32px] text-base md:text-lg font-medium hover:bg-[#1a2d47] transition-colors">
                   Get Now
                 </button>
                 <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                   <div className="w-[44px] h-[44px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] bg-white rounded-full flex items-center justify-center shadow-md">
                     <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                       <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="#264065"/>
                     </svg>
                   </div>
                   <span className="text-[#264065] text-base md:text-lg font-medium">Watch Video</span>
                 </div>
               </div>
             </div>
           </div>
          
                     {/* Right Section - Background Image - Only show on large screens */}
           <div 
             className="hidden lg:block w-[30%] min-h-[80vh] bg-cover bg-left justify-end bg-no-repeat"
             style={{backgroundImage: "url('/assets/right background.svg')"}}
           >
           </div>

           {/* People Image - Only show on large screens */}
           <div className="hidden lg:block absolute top-[80vh] left-[73vw] transform -translate-x-1/2 -translate-y-full z-15">
             <img 
               src="/assets/people.png" 
               alt="Professional Business Team" 
               className="w-[25vw] min-w-[45vw] max-w-[80vw] h-auto object-contain"
             />
           </div>

                      {/* Stats Section - Hidden on mobile */}
           <div className="hidden sm:block absolute top-[70vh] left-1/2 lg:left-[35vw] transform -translate-x-1/2 lg:transform-none w-[95%] sm:w-[90%] md:w-[80%] lg:w-[40vw] z-20">
             <div className="flex w-full p-3 sm:p-4 md:p-6 lg:pt-[1.5vw] lg:pr-[1.5vw] lg:pb-[1.5vw] lg:pl-[1.5vw] gap-2 sm:gap-3 md:gap-6 lg:gap-[2.5vw] justify-center items-start bg-[rgba(255,255,255,0.8)] rounded-[12px] relative mx-auto">
               <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-[1vw] justify-center items-center flex-1 min-w-0">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[3vw] lg:h-[3vw] lg:min-w-[40px] lg:min-h-[40px] lg:max-w-[60px] lg:max-h-[60px] flex items-center justify-center">
                   <img src="/assets/globe.svg" alt="Cities" className="w-full h-full object-contain" />
                 </div>
                 <div className="flex flex-col gap-1 md:gap-2 lg:gap-[0.5vw] items-center text-center">
                   <span className="text-sm sm:text-base md:text-2xl lg:text-xl xl:text-[clamp(18px,1.5vw,28px)] font-medium text-[#264065]">
                     15+
                   </span>
                   <span className="text-xs sm:text-xs md:text-base lg:text-[clamp(12px,0.9vw,16px)] font-normal text-[#909090] leading-tight">
                     high-growth Tire 2 & 3 cities
                   </span>
                 </div>
               </div>
               <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-[1vw] justify-center items-center flex-1 min-w-0">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[3vw] lg:h-[3vw] lg:min-w-[40px] lg:min-h-[40px] lg:max-w-[60px] lg:max-h-[60px] flex items-center justify-center">
                   <img src="/assets/badge.svg" alt="Decision Makers" className="w-full h-full object-contain" />
                 </div>
                 <div className="flex flex-col gap-1 md:gap-2 lg:gap-[0.5vw] items-center text-center">
                   <span className="text-sm sm:text-base md:text-2xl lg:text-xl xl:text-[clamp(18px,1.5vw,28px)] font-medium text-[#264065]">
                     500+
                   </span>
                   <span className="text-xs sm:text-xs md:text-base lg:text-[clamp(12px,0.9vw,16px)] font-normal text-[#909090] leading-tight">
                     verified decision-makers
                   </span>
                 </div>
               </div>
               <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-[1vw] justify-center items-center flex-1 min-w-0">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[3vw] lg:h-[3vw] lg:min-w-[40px] lg:min-h-[40px] lg:max-w-[60px] lg:max-h-[60px] flex items-center justify-center">
                   <img src="/assets/user.svg" alt="Quality" className="w-full h-full object-contain" />
                 </div>
                 <div className="flex flex-col gap-1 md:gap-2 lg:gap-[0.5vw] items-center text-center">
                   <span className="text-sm sm:text-base md:text-2xl lg:text-xl xl:text-[clamp(18px,1.5vw,28px)] font-medium text-[#264065]">
                     100%
                   </span>
                   <span className="text-xs sm:text-xs md:text-base lg:text-[clamp(12px,0.9vw,16px)] font-medium text-[#909090] leading-tight">
                     happy customers
                   </span>
                 </div>
               </div>
             </div>
           </div>

                     {/* Testimonials Section - Desktop */}
           <div className="hidden lg:block absolute top-[50vh] right-[3vw] w-[18vw] min-w-[200px] max-w-[350px] z-20">
            <div className="main-container w-full h-auto rounded-[12px] relative mx-auto my-0">
              <div className="flex w-full h-auto pt-[0.8vw] pr-[0.8vw] pb-[0.8vw] pl-[0.8vw] flex-col gap-[0.4vw] items-start flex-nowrap bg-[rgba(255,255,255,0.5)] rounded-[12px] relative mt-0 mr-0 mb-0 ml-[2.5vw]">
                <div className="w-[1.2vw] h-[0.8vw] min-w-[16px] min-h-[10px] max-w-[28px] max-h-[18px] shrink-0 flex items-center justify-center relative">
                  <img src="/assets/quotes.svg" alt="Quote" className="w-full h-full object-contain" />
                </div>
                <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Poppins'] text-[clamp(10px,0.8vw,16px)] font-normal leading-[1.2vw] text-[#070d15] relative text-left">
                  I have a regular schedule to take treatment from GlowQueen, they gave
                  me the best service and treatment ever to maintain the beauty and
                  health of my skin
                </span>
                <span className="h-[1.2vw] min-h-[12px] max-h-[20px] shrink-0 basis-auto font-['Poppins'] text-[clamp(9px,0.7vw,14px)] font-bold leading-[1.2vw] text-[#264065] relative text-left whitespace-nowrap">
                  Sophia Princeton
                </span>
              </div>
              <div className="flex w-full h-auto p-[0.8vw] flex-col gap-[0.4vw] items-start flex-nowrap bg-[rgba(255,255,255,0.5)] rounded-[12px] relative mt-[1.5vw] mr-0 mb-0 ml-[-4vw]">
                <div className="w-[1.2vw] h-[0.8vw] min-w-[16px] min-h-[10px] max-w-[28px] max-h-[18px] shrink-0 flex items-center justify-center relative">
                  <img src="/assets/quotes.svg" alt="Quote" className="w-full h-full object-contain" />
                </div>
                <span className="flex w-full h-auto justify-start items-start shrink-0 font-['Poppins'] text-[clamp(10px,0.8vw,16px)] font-normal leading-[1.2vw] text-[#070d15] relative text-left">
                  For the past few years, I've had a hard time finding the right place
                  for skin care to deal with my complicated skin condition, thank God I
                  found GlowQueen to treat my skin
                </span>
                <span className="h-[1.2vw] min-h-[12px] max-h-[20px] shrink-0 basis-auto font-['Poppins'] text-[clamp(9px,0.7vw,14px)] font-bold leading-[1.2vw] text-[#264065] relative text-left whitespace-nowrap">
                  Tamara Jules
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 