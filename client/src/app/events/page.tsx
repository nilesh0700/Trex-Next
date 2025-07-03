import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '../../components/PageHeading';
import RegistrationButton from '@/components/RegistrationButton';
import SmartEventButton from '@/components/SmartEventButton';
import { getFeaturedEvents, getRegularEvents } from '@/lib/strapi';
import { Event } from '@/types/strapi';
import { getEventStateStyles, getEventActionConfig, formatEventDate } from '@/utils/eventUtils';

// Featured Event Component
function FeaturedEventSection({ event }: { event: Event }) {
  const stateStyles = getEventStateStyles(event.eventDate);
  const actionConfig = getEventActionConfig(event.eventDate);
  
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Container - Single Frame Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side - Contact Cards (Less than half width) */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center space-y-4 lg:space-y-6">
            
            {/* Location Card */}
            <div className="w-full h-[70px] rounded-xl border-2 border-[#264065] bg-white flex items-center gap-3 px-3 hover:shadow-md transition-shadow duration-300">
              <Image src="/assets/location-orange.jpg" alt="Location" width={32} height={32} unoptimized className="w-8 h-8 flex-shrink-0"/>
              <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#034833] truncate">
                {event.location || event.contactLocation}
              </span>
            </div>

            {/* Date Card */}
            <div className="w-full h-[70px] rounded-xl border-2 border-[#264065] bg-white flex items-center gap-3 px-3 hover:shadow-md transition-shadow duration-300">
              <div className="w-8 h-8 bg-[#C88652] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#034833] truncate">
                {formatEventDate(event.eventDate)}
              </span>
            </div>

            {/* Time Card */}
            <div className="w-full h-[70px] rounded-xl border-2 border-[#264065] bg-white flex items-center gap-3 px-3 hover:shadow-md transition-shadow duration-300">
              <Image src="/assets/clock-orange.jpg" alt="Time" width={32} height={32} unoptimized className="w-8 h-8 flex-shrink-0"/>
              <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#034833] truncate">
                {event.contactTime || 'TBA'}
              </span>
            </div>

            {/* Participants Card */}
            <div className="w-full h-[70px] rounded-xl border-2 border-[#264065] bg-white flex items-center gap-3 px-3 hover:shadow-md transition-shadow duration-300">
              <div className="w-8 h-8 bg-[#264065] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#034833] truncate">
                {event.participantsCount || '200+'} Attendees
              </span>
            </div>

          </div>

          {/* Right Side - Media (More than half width) */}
          <div className="w-full lg:w-[80%]">
            <div className={`relative w-full h-[300px] sm:h-[300px] lg:h-[300px] xl:h-[450px] rounded-2xl overflow-hidden bg-black ${stateStyles.container}`}>
              {/* Media Content - Images, Videos, or YouTube */}
              {event.mediaType === 'video' && event.image ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover ${stateStyles.image}`}
                >
                  <source src={event.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : event.mediaType === 'video_url' && event.videoUrl ? (
                <iframe
                  src={event.videoUrl}
                  className={`absolute inset-0 w-full h-full border-0 scale-125 ${stateStyles.image}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className={`object-cover ${stateStyles.image}`}
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              )}
              
              {/* Premium Event State Badge */}
              {actionConfig.badgeText && (
                <div className="absolute top-6 left-6 z-20">
                  <div className={`
                    ${actionConfig.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold font-['Inter'] 
                    shadow-lg backdrop-blur-sm bg-opacity-90 border border-white/20
                    ${actionConfig.state === 'ongoing' ? 'animate-pulse shadow-red-500/30' : ''}
                  `}>
                    {actionConfig.badgeText}
                  </div>
                </div>
              )}
              
              {/* Optional Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          </div>

        </div>

        {/* Section Header - Commented out as requested */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C88652] mb-6 sm:mb-8 font-['Poppins']">
            {event.eventHeading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-5xl mx-auto mb-8 sm:mb-10">
            {event.eventSubheading}
          </p>
        </div>

        {/* Bottom Buttons Section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <SmartEventButton
            eventDate={event.eventDate}
            eventSlug={event.slug}
            registrationLink={event.registrationLink}
            showSecondaryAction={true}
            size="lg"
            className="mb-10 sm:mb-12 md:mb-14"
          />
          
          <div className="w-full h-[1px] bg-gray-400 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

// Contact Section is no longer needed as it's integrated into FeaturedEventSection
// function ContactSection({ event }: { event: Event }) {
//   return (
//     <div className="w-full py-16 sm:py-20 md:py-24">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           
//           {/* Email Block */}
//                       <div className="main-container w-full h-[10vh] relative mx-auto my-0">
//               <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
//                 <Image src="/assets/mail-orange.svg" alt="Email" width={40} height={40} unoptimized className="w-10 h-10"/>
//                 <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
//                   {event.contactEmail}
//               </span>
//             </div>
//           </div>

//           {/* Time Block */}
//                       <div className="main-container w-full h-[10vh] relative mx-auto my-0">
//               <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
//                 <Image src="/assets/clock-orange.jpg" alt="Time" width={40} height={40} unoptimized className="w-10 h-10"/>
//                 <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
//                   {event.contactTime}
//               </span>
//             </div>
//           </div>

//           {/* Location Block */}
//                       <div className="main-container w-full h-[10vh] relative mx-auto my-0">
//               <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
//                 <Image src="/assets/location-orange.jpg" alt="Location" width={40} height={40} unoptimized className="w-10 h-10"/>
//                 <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
//                   {event.contactLocation}
//               </span>
//             </div>
//           </div>

//         </div>

//         {/* Section Header */}
//         <div className="text-center mt-12 sm:mt-16 md:mt-20">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C88652] mb-6 sm:mb-8 font-['Poppins']">
//             {event.eventHeading}
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-5xl mx-auto mb-8 sm:mb-10">
//             {event.eventSubheading}
//           </p>
//           
//           {/* Premium Smart CTA Buttons */}
//           <SmartEventButton
//             eventDate={event.eventDate}
//             eventSlug={event.slug}
//             registrationLink={event.registrationLink}
//             showSecondaryAction={true}
//             size="lg"
//             className="mb-10 sm:mb-12 md:mb-14"
//           />
//           
//           <div className="w-full h-[1px] bg-gray-400 mx-auto"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Premium Professional Event Card Component
function EventCard({ event }: { event: Event }) {
  const stateStyles = getEventStateStyles(event.eventDate);
  const actionConfig = getEventActionConfig(event.eventDate);

  return (
    <Link href={`/events/${event.slug}`} className={`block group ${stateStyles.container}`}>
      <div className="relative w-full h-[300px] sm:h-[350px] rounded-2xl overflow-hidden bg-black">
        {/* Media Content */}
        {event.mediaType === 'video' && event.image ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover ${stateStyles.image}`}
          >
            <source src={event.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : event.mediaType === 'video_url' && event.videoUrl ? (
          <iframe
            src={event.videoUrl}
            className={`absolute inset-0 w-full h-full border-0 scale-125 ${stateStyles.image}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className={`object-cover ${stateStyles.image}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Event State Badge */}
        {actionConfig.badgeText && (
          <div className="absolute top-4 left-4 z-20">
            <div className={`
              ${actionConfig.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold font-['Inter'] 
              shadow-lg backdrop-blur-sm bg-opacity-90 border border-white/20
              ${actionConfig.state === 'ongoing' ? 'animate-pulse shadow-red-500/30' : ''}
            `}>
              {actionConfig.badgeText}
            </div>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity group-hover:opacity-75"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{formatEventDate(event.eventDate)}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] leading-tight group-hover:text-[#C88652] transition-colors">
              {event.title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// To Be Announced Card Component
function ToBeAnnouncedCard() {
  return (
    <div className="group relative h-full">
      {/* Premium Card Container with Consistent Height */}
      <div className={`
        h-full bg-white rounded-2xl overflow-hidden 
        shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        border border-slate-200/60 hover:border-slate-300/60
        transition-all duration-500 ease-out
        transform hover:-translate-y-1 hover:scale-[1.02]
        flex flex-col
      `}>
        
        {/* Media Section with Fixed Aspect Ratio */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#264065] to-[#1a2d47] flex-shrink-0">
          {/* Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium font-['Poppins'] opacity-70">Event Details</p>
              <p className="text-xs font-['Poppins'] opacity-50 mt-1">Coming Soon</p>
            </div>
          </div>
          
          {/* Premium State Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`
              bg-[#C88652] text-white px-3 py-1.5 rounded-lg text-xs font-semibold font-['Poppins'] 
              shadow-lg backdrop-blur-sm bg-opacity-95 border border-white/20
              transform transition-all duration-300 animate-pulse
            `}>
              Coming Soon
            </div>
          </div>
        </div>
        
        {/* Content Section with Flexible Structure */}
        <div className="p-6 flex flex-col flex-grow min-h-0">
          
          {/* Title Section */}
          <div className="mb-4 flex-shrink-0">
            <h3 className={`
              text-xl font-bold font-['Poppins'] leading-tight mb-2
              transition-colors duration-300 line-clamp-2
              text-[#264065] group-hover:text-[#C88652]
            `}>
              To Be Announced
            </h3>
          </div>

          {/* Event Details - Flexible Space */}
          <div className="space-y-3 mb-4 flex-grow">
            {/* Date */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#C88652]/10">
                <svg className="w-4 h-4 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium font-['Poppins'] text-slate-500">
                Date TBA
              </span>
            </div>
            
            {/* Participants */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#264065]/10">
                <svg className="w-4 h-4 text-[#264065]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className="text-sm font-medium font-['Poppins'] text-slate-500">
                Registration Opening Soon
              </span>
            </div>
          </div>
          
          {/* CTA Section - Always at Bottom */}
          <div className="mt-auto pt-4 border-t border-slate-100 flex-shrink-0">
            <button
              disabled
              className={`
                w-full px-4 py-3 rounded-xl font-semibold font-['Poppins'] text-sm
                bg-slate-100 text-slate-400 cursor-not-allowed
                transition-all duration-300
              `}
            >
              Stay Tuned
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Events Page Component
export default async function EventsPage() {
  // Fetch data
  const [featuredEventsData, regularEventsData] = await Promise.all([
    getFeaturedEvents(1),
    getRegularEvents({ pageSize: 20 })
  ]);

  const featuredEvent = featuredEventsData.data[0];
  const regularEvents = regularEventsData.data;

  // Calculate number of "To Be Announced" cards to show
  // Start with 4, reduce by 1 for each regular event, minimum 0
  const toBeAnnouncedCount = Math.max(0, 4 - regularEvents.length);

  return (
    <main className="min-h-screen bg-white pt-30 sm:pt-40 lg:pt-37">
      {/* Page Heading */}
      {/* <PageHeading heading="Events" /> */}
      
      {/* Featured Event Section */}
      {featuredEvent && (
        <>
          <FeaturedEventSection event={featuredEvent} />
        </>
      )}
      
      {/* Past/Regular Events Section */}
      {(regularEvents.length > 0 || toBeAnnouncedCount > 0) && (
        <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
                Our Events
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
            </div>

            {/* Premium Events Grid with Consistent Heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 auto-rows-fr">
              {/* Regular Events from CMS */}
              {regularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
              
              {/* To Be Announced Cards */}
              {Array.from({ length: toBeAnnouncedCount }, (_, index) => (
                <ToBeAnnouncedCard key={`tba-${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Events Message */}
      {!featuredEvent && regularEvents.length === 0 && toBeAnnouncedCount === 0 && (
        <div className="w-full py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#264065] mb-4 font-['Poppins']">
              No Events Available
            </h2>
            <p className="text-lg text-[#6c757d] font-['Poppins']">
              Check back soon for upcoming events!
            </p>
          </div>
        </div>
      )}
    </main>
  );
} 