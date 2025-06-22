import React from 'react';
import Image from 'next/image';
import PageHeading from '../../components/PageHeading';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="Events" />
      
      {/* Event Exhibition Section */}
      <div className="w-full mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
            {/* Main Background Image */}
            <Image
              src="/assets/event.png"
              alt="TREx Event Exhibition"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            
            {/* Overlay Text Section */}
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 z-10">
              <div className="relative bg-gradient-to-br from-[#264065]/90 to-[#1a2d47]/90 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md sm:max-w-lg md:max-w-xl backdrop-blur-sm">
                <h2 className="font-['Poppins'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white">
                  Open Exhibition - Buyers<br />
                  from Tier 3 Cities & Pune
                </h2>
              </div>
            </div>
            
            {/* Optional Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Contact Blocks Section */}
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                        {/* Email Block */}
            <div className="main-container w-full h-[10vh] relative mx-auto my-0">
              <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
                <Image src="/assets/mail-orange.svg" alt="Email" width={40} height={40}/>
                <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                  team@trexevents.in
                </span>
              </div>
            </div>

            {/* Time Block */}
            <div className="main-container w-full h-[10vh] relative mx-auto my-0">
              <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
                <Image src="/assets/clock-orange.svg" alt="Time" width={40} height={40}/>
                <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                  10:30 AM - 01:30 PM
                </span>
              </div>
            </div>

            {/* Location Block */}
            <div className="main-container w-full h-[10vh] relative mx-auto my-0">
              <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
                <Image src="/assets/location-orange.svg" alt="Location" width={40} height={40}/>
                <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                  www.trexevents.com
                </span>
              </div>
            </div>

          </div>

          {/* Section Header */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C88652] mb-6 sm:mb-8 font-['Poppins']">
              TREX Business Networking Summit 2025
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-5xl mx-auto mb-8 sm:mb-10">
              TREX - India's Top Travel Networking Event. In Just Two Days, Connect With 500+ Verified Buyers From Tier 3 Cities Like Pune, Kolhapur, Nashik, And Aurangabad. Grow Your Business Through Curated, High-Value Partnerships.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 md:mb-14">
              <button className="bg-[#C88652] hover:bg-[#264065] text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C88652] focus:ring-opacity-30 shadow-lg hover:shadow-xl">
                Register Now
              </button>
              <button className="bg-transparent border-2 border-[#264065] text-[#264065] hover:bg-[#264065] hover:text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30">
                View Event Details
              </button>
            </div>
            
            <div className="w-full h-[1px] bg-gray-400 mx-auto"></div>
                     </div>
         </div>
       </div>
       
       {/* Past Events Section */}
       <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
           
           {/* Section Header */}
           <div className="text-center mb-12 sm:mb-16 md:mb-20">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
               Our Past Events
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
           </div>

           {/* Events Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
             
             {/* Event 1 - Pune */}
             <div className="group relative">
               <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
                 <div className="aspect-[4/3] relative">
                   <Image
                     src="/assets/networking.jpg"
                     alt="TREX Pune Event"
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-2 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                     TREX Pune
                   </h3>
                   <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base mb-3">
                     October 2024
                   </p>
                   <div className="flex items-center text-[#C88652] text-sm font-medium">
                     <span>500+ Participants</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Event 2 - Kolhapur */}
             <div className="group relative">
               <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
                 <div className="aspect-[4/3] relative">
                   <Image
                     src="/assets/buyer-program.jpg"
                     alt="TREX Kolhapur Event"
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-2 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                     TREX Kolhapur
                   </h3>
                   <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base mb-3">
                     November 2024
                   </p>
                   <div className="flex items-center text-[#C88652] text-sm font-medium">
                     <span>350+ Participants</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Event 3 - Nashik */}
             <div className="group relative">
               <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
                 <div className="aspect-[4/3] relative">
                   <Image
                     src="/assets/knowledge-sharing.jpeg"
                     alt="TREX Nashik Event"
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-2 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                     TREX Nashik
                   </h3>
                   <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base mb-3">
                     December 2024
                   </p>
                   <div className="flex items-center text-[#C88652] text-sm font-medium">
                     <span>400+ Participants</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Event 4 - Aurangabad */}
             <div className="group relative">
               <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
                 <div className="aspect-[4/3] relative">
                   <Image
                     src="/assets/product-display.jpg"
                     alt="TREX Aurangabad Event"
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-2 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                     TREX Aurangabad
                   </h3>
                   <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base mb-3">
                     January 2024
                   </p>
                   <div className="flex items-center text-[#C88652] text-sm font-medium">
                     <span>300+ Participants</span>
                   </div>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
    </main>
  );
} 