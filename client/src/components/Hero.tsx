import React from 'react';
import RegistrationButton from './RegistrationButton';

export default function Hero() {
  return (
    <div className="main-container w-full max-w-[1920px] relative mx-auto my-0 bg-white">
      {/* Mobile Hero Design */}
      <div className="lg:hidden bg-[#F5F1E8] relative overflow-hidden pt-20 pb-12">
        {/* Decorative Orange Circles for Mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Circle - Top Left */}
          <div className="absolute -top-10 -left-12 w-24 h-24 bg-[#D2956F] rounded-full opacity-90"></div>
          {/* Small Circle - Top Left area */}
          <div className="absolute top-28 left-6 w-5 h-5 bg-[#D2956F] rounded-full opacity-70"></div>
          {/* Large Circle - Bottom Right */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#D2956F] rounded-full opacity-80"></div>
          {/* Medium Circle - Bottom Left */}
          <div className="absolute bottom-8 left-0 w-10 h-10 bg-[#D2956F] rounded-full opacity-60"></div>
        </div>

        {/* Mobile Content */}
        <div className="relative z-10 px-6 pt-10">
          <div className="text-center max-w-sm mx-auto">
            <h1 className="text-[26px] font-bold text-[#264065] leading-tight mb-4">
              where regional market meets<br />
              National potential
            </h1>
            
            <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8 px-2">
              To create India's most impactful regional B2B travel trade exhibition, 
              focused on unlocking the potential of Tier 2 and Tier 3 markets.
            </p>

            {/* Mobile Buttons - Row Layout */}
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <RegistrationButton className="bg-[#264065] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a2d47] transition-colors">
                Register
              </RegistrationButton>
              
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="#264065"/>
                  </svg>
                </div>
                <span className="text-[#264065] text-sm font-medium">Watch Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Desktop Hero Design - Restored Original Structure */}
      <div className="hidden lg:flex flex-col min-h-[100vh]">
         <div className="flex flex-row h-full">
          {/* Left Section - Desktop */}
                     <div className="w-full lg:w-[70%] min-h-[80vh] bg-[#f8f9fa] flex items-center">
            <div className="px-6 md:px-8 lg:px-12 xl:pl-[163px] xl:pr-[100px] py-8 md:py-12 lg:py-12 xl:py-0 w-full text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[64px] font-bold text-[#264065] leading-tight md:leading-tight lg:leading-tight xl:leading-[76px] mb-6 md:mb-8 lg:mb-6">
                Where regional buyers<br />
                <span>meet worldwide sellers</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[18px] text-[#6c757d] leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-[28px] mb-8 md:mb-10 lg:mb-8 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[500px]">
              Creating India's most impactful regional travel Trade Show, focused on unlocking the potential of Tier 2 and Tier 3 cities.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-5 md:gap-6 lg:gap-6 mb-8 md:mb-8 lg:mb-8">
                <RegistrationButton className="bg-[#264065] text-white px-8 sm:px-7 md:px-8 lg:px-8 py-4 sm:py-3 md:py-4 rounded-[32px] text-base md:text-lg font-medium hover:bg-[#1a2d47] transition-colors">
                  Register Now
                </RegistrationButton>
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
              className="w-[25vw] min-w-[45vw] max-w-[80vw] h-auto object-contain max-h-[70vh]"
            />
          </div>

          {/* Key Features Section - Redesigned to Match Website Theme */}
          <div className="hidden sm:block absolute top-[73vh] left-1/2 lg:left-[35vw] transform -translate-x-1/2 lg:transform-none w-[90%] sm:w-[85%] md:w-[80%] lg:w-[50vw] xl:w-[52vw] 2xl:w-[48vw] z-20">
            <div className="relative">
              {/* Decorative Orange Circles - Following Mobile Hero Pattern */}
              {/* <div className="absolute -top-6 -left-8 w-16 h-16 bg-[#D2956F] rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-6 w-10 h-10 bg-[#D2956F] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-[#D2956F] rounded-full opacity-50"></div> */}
              
                             {/* Main Features Container */}
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-5 lg:gap-[1.5vw] xl:gap-[1.2vw] 2xl:gap-6 relative z-10">
                
                                 {/* Pre Fixed Meetings */}
                 <div className="group flex-1 bg-[rgba(255,255,255,0.92)] backdrop-blur-sm rounded-2xl lg:rounded-[1.2vw] p-5 sm:p-4 md:p-5 lg:p-[1.4vw] xl:p-[1.2vw] 2xl:p-6 shadow-lg hover:shadow-2xl hover:bg-[rgba(255,255,255,0.98)] transition-all duration-500 hover:-translate-y-2 border border-white/30 relative overflow-hidden">
                   {/* Gradient Overlay on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#D2956F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-[1.2vw]"></div>
                   
                   <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:space-y-[0.8vw] xl:space-y-[0.6vw] 2xl:space-y-4">
                     {/* Icon Circle */}
                     <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[3.5vw] lg:h-[3.5vw] xl:w-[3vw] xl:h-[3vw] 2xl:w-[60px] 2xl:h-[60px] lg:min-w-[50px] lg:min-h-[50px] lg:max-w-[70px] lg:max-h-[70px] bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-full flex items-center justify-center group-hover:from-[#D2956F] group-hover:to-[#C88652] transition-all duration-500 group-hover:scale-110 shadow-lg">
                       <svg className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[1.8vw] lg:h-[1.8vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[30px] 2xl:h-[30px] lg:min-w-[24px] lg:min-h-[24px] lg:max-w-[35px] lg:max-h-[35px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                       </svg>
                     </div>
                     
                     {/* Text */}
                     <span className="text-base sm:text-sm md:text-base lg:text-[clamp(14px,1.1vw,18px)] xl:text-[clamp(14px,1vw,16px)] 2xl:text-base font-semibold text-[#264065] leading-tight font-['Poppins'] group-hover:text-[#D2956F] transition-colors duration-300">
                       Pre Fixed Meetings
                     </span>
                   </div>
                  
                  {/* Subtle decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#D2956F]/30 rounded-full group-hover:bg-[#D2956F]/60 transition-colors duration-300"></div>
                </div>

                {/* Networking Lounge */}
                <div className="group flex-1 bg-[rgba(255,255,255,0.92)] backdrop-blur-sm rounded-2xl lg:rounded-[1.2vw] p-5 sm:p-4 md:p-5 lg:p-[1.4vw] xl:p-[1.2vw] 2xl:p-6 shadow-lg hover:shadow-2xl hover:bg-[rgba(255,255,255,0.98)] transition-all duration-500 hover:-translate-y-2 border border-white/30 relative overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2956F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-[1.2vw]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:space-y-[0.8vw] xl:space-y-[0.6vw] 2xl:space-y-4">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[3.5vw] lg:h-[3.5vw] xl:w-[3vw] xl:h-[3vw] 2xl:w-[60px] 2xl:h-[60px] lg:min-w-[50px] lg:min-h-[50px] lg:max-w-[70px] lg:max-h-[70px] bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-full flex items-center justify-center group-hover:from-[#D2956F] group-hover:to-[#C88652] transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <svg className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[1.8vw] lg:h-[1.8vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[30px] 2xl:h-[30px] lg:min-w-[24px] lg:min-h-[24px] lg:max-w-[35px] lg:max-h-[35px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    
                    {/* Text */}
                    <span className="text-base sm:text-sm md:text-base lg:text-[clamp(14px,1.1vw,18px)] xl:text-[clamp(14px,1vw,16px)] 2xl:text-base font-semibold text-[#264065] leading-tight font-['Poppins'] group-hover:text-[#D2956F] transition-colors duration-300">
                      Networking Lounge
                    </span>
                  </div>
                  
                  {/* Subtle decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#D2956F]/30 rounded-full group-hover:bg-[#D2956F]/60 transition-colors duration-300"></div>
                </div>

                {/* Open Exhibition Setup */}
                <div className="group flex-1 bg-[rgba(255,255,255,0.92)] backdrop-blur-sm rounded-2xl lg:rounded-[1.2vw] p-5 sm:p-4 md:p-5 lg:p-[1.4vw] xl:p-[1.2vw] 2xl:p-6 shadow-lg hover:shadow-2xl hover:bg-[rgba(255,255,255,0.98)] transition-all duration-500 hover:-translate-y-2 border border-white/30 relative overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2956F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-[1.2vw]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 lg:space-y-[0.8vw] xl:space-y-[0.6vw] 2xl:space-y-4">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[3.5vw] lg:h-[3.5vw] xl:w-[3vw] xl:h-[3vw] 2xl:w-[60px] 2xl:h-[60px] lg:min-w-[50px] lg:min-h-[50px] lg:max-w-[70px] lg:max-h-[70px] bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-full flex items-center justify-center group-hover:from-[#D2956F] group-hover:to-[#C88652] transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <svg className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[1.8vw] lg:h-[1.8vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[30px] 2xl:h-[30px] lg:min-w-[24px] lg:min-h-[24px] lg:max-w-[35px] lg:max-h-[35px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    {/* Text */}
                    <span className="text-base sm:text-sm md:text-base lg:text-[clamp(14px,1.1vw,18px)] xl:text-[clamp(14px,1vw,16px)] 2xl:text-base font-semibold text-[#264065] leading-tight font-['Poppins'] group-hover:text-[#D2956F] transition-colors duration-300">
                      Open Exhibition Setup
                    </span>
                  </div>
                  
                  {/* Subtle decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#D2956F]/30 rounded-full group-hover:bg-[#D2956F]/60 transition-colors duration-300"></div>
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