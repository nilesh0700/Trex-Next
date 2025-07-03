import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug, getRelatedEvents, getEvents } from '@/lib/strapi';
import { Event } from '@/types/strapi';
import RegistrationButton from '@/components/RegistrationButton';
import SmartEventButton from '@/components/SmartEventButton';
import WhyCitySection from '@/components/WhyCitySection';
import EventFlowSection from '@/components/EventFlowSection';
import FloatingShareButton from '@/components/FloatingShareButton';
import { getEventActionConfig, formatDateSimple } from '@/utils/eventUtils';

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Event Header with Heading, Subheading and Quote
function EventHeader({ event }: { event: Event }) {
  const actionConfig = getEventActionConfig(event.eventDate);
  
  return (
    <section className="relative w-full mt-25 bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#264065]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C88652]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-16">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Event Category Badge */}
            {/* {event.category && (
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse"></div>
                <span className="bg-[#C88652] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide font-['Poppins']">
                  {event.category.name}
                </span>
              </div>
            )} */}

            {/* Event Status Badge */}
            {actionConfig.badgeText && (
              <div className="flex justify-start">
                <div className={`
                  ${actionConfig.badgeColor} text-white px-5 py-2 rounded-full text-base font-semibold font-['Poppins'] 
                  shadow-lg backdrop-blur-sm bg-opacity-95 border border-white/20
                  ${actionConfig.state === 'ongoing' ? 'animate-pulse shadow-red-500/30' : ''}
                `}>
                  {actionConfig.badgeText}
                </div>
              </div>
            )}

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#264065] leading-tight font-['Poppins']">
                {event.title}
              </h1>
              
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#C88652] to-[#264065] rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-['Poppins'] max-w-2xl">
              {event.description}
            </p>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Date Card */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#C88652]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C88652]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium font-['Poppins'] uppercase tracking-wide mb-1">Event Date</p>
                  <p className="text-sm font-semibold text-slate-700 font-['Poppins']">
                    {formatDateSimple(event.eventDate)}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#264065]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#264065]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#264065]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium font-['Poppins'] uppercase tracking-wide mb-1">Event Location</p>
                  <p className="text-sm font-semibold text-slate-700 font-['Poppins']">{event.location}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center w-full">
              <SmartEventButton
                eventDate={event.eventDate}
                eventSlug={event.slug}
                registrationLink={event.registrationLink}
                showSecondaryAction={false}
                size="lg"
                className="w-full justify-center"
              />
              {/* <Link 
                href="#event-details"
                className="w-full px-6 py-3 bg-white text-[#264065] border-2 border-[#264065] rounded-xl font-semibold font-['Poppins'] text-center hover:bg-[#264065] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                View Details
              </Link> */}
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#264065] to-[#1a2d47] shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl">
                
                {/* Event Hero Image */}
                {event.heroImage ? (
                  <Image
                    src={event.heroImage}
                    alt={event.heroImageAlt || event.title}
                    fill
                    className="object-contain transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                ) : event.image ? (
                  <Image
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    fill
                    className="object-contain transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                ) : (
                  /* Fallback gradient with icon */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                      <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold font-['Poppins']">Event Visual</p>
                    </div>
                  </div>
                )}
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm text-[#264065] px-4 py-2 rounded-full text-sm font-semibold font-['Poppins'] shadow-lg">
                    Featured Event
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C88652]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#264065]/20 rounded-full blur-3xl"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium font-['Poppins']">Expected</p>
                    <p className="text-sm font-bold text-slate-700 font-['Poppins']">{event.participantsCount} Attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote Card - Bottom Center spanning both sections */}
        {/* <div className="w-full">
          <div className="bg-gradient-to-r from-[#264065]/5 to-[#C88652]/5 rounded-2xl p-8 border border-[#264065]/10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-12 h-12 bg-[#C88652]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C88652]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-lg sm:text-xl italic font-['Poppins'] text-[#264065] leading-relaxed">
                "Your Success Story Begins With The Right Connections. Let TREX Be Your Gateway To India's Next Growth Frontier."
              </blockquote>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

// 3. Why Exhibit at TREX Section (Reuse from Home)
function WhyExhibitSection() {
  const expansionHighlights = [
    {
      title: "Tap into a high-growth buyer base in emerging cities of Tier 2 & Tier 3",
      description: "Access untapped markets with high growth potential",
      bgColor: "bg-white",
      iconUrl: "/assets/graph-up.png",
      learnMoreLink: "/why-exhibit#high-growth-buyer-base"
    },
    {
      title: "Pre-scheduled Exclusive meetings with Top B2C Producers",
      description: "Connect directly with industry leaders",
      bgColor: "bg-[rgba(38,64,101,0.18)]",
      iconUrl: "/assets/globe-people.png",
      learnMoreLink: "/why-exhibit#exclusive-meetings"
    },
    {
      title: "Engage with 500+ verified decision-makers",
      description: "Network with qualified industry professionals",
      bgColor: "bg-white",
      iconUrl: "/assets/user-tick.png",
      learnMoreLink: "/why-exhibit#verified-decision-makers"
    },
    {
      title: "Position your brand in a less-saturated, yet high-potential market",
      description: "Stand out in emerging travel markets",
      bgColor: "bg-[rgba(153,195,190,0.33)]",
      iconUrl: "/assets/hand-speaker.png",
      learnMoreLink: "/why-exhibit#less-saturated-market"
    },
    {
      title: "Be part of a curated, professional event",
      description: "Join an exclusive industry gathering",
      bgColor: "bg-white",
      iconUrl: "/assets/group.png",
      learnMoreLink: "/why-exhibit#curated-professional-event"
    },
    {
      title: "Post Exhibition Support, Less said than done",
      description: "Comprehensive follow-up assistance",
      bgColor: "bg-[rgba(38,64,101,0.23)]",
      iconUrl: "/assets/hand-bond.png",
      learnMoreLink: "/why-exhibit#post-exhibition-support"
    },
    {
      title: "Extensive Social Media Campaigns with your Branding in the key regions",
      description: "Amplify your reach through targeted marketing",
      bgColor: "bg-white",
      iconUrl: "/assets/social.png",
      learnMoreLink: "/why-exhibit#social-media-campaigns"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#f5f1ed] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-90 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/waves.svg)`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C88652] mb-6 font-['Poppins']">
            Why Exhibit At Trex ?
          </h2>
          <p className="text-xl text-[#264065] font-['Poppins']">
            Expand Your Reach into High-Growth Travel Markets
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expansionHighlights.map((item, index) => (
            <div
              key={index}
              className={`group ${item.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200 hover:border-[#C88652] transform hover:-translate-y-2 h-80 flex flex-col justify-between`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-[#C88652] group-hover:scale-110 transition-transform duration-300 p-3 flex items-center justify-center">
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
                <h3 className="text-lg font-bold text-[#264065] mb-4 leading-tight group-hover:text-[#C88652] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6c757d] leading-relaxed mb-4 opacity-100 font-['Poppins']">
                  {item.description}
                </p>
                <Link href={item.learnMoreLink} className="flex items-center gap-2 text-[#264065] group-hover:text-[#C88652] transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. Target Markets Map Section
// function TargetMarketsSection({ event }: { event: Event }) {
//   // Use CMS data if available, otherwise fall back to defaults
//   const targetCities = event.targetCities.length > 0 ? event.targetCities : [
//     { id: 1, name: "Pune", category: "Host & Matchmaking Hub", isHost: true },
//     { id: 2, name: "Nashik", category: "Wine Capital & Insurance Hub", isHost: false },
//     { id: 3, name: "Kolhapur", category: "Cultural & Business Hub", isHost: false },
//     { id: 4, name: "Aurangabad", category: "Historical & Industrial", isHost: false },
//     { id: 5, name: "Nagpur", category: "Geographic Centre of India", isHost: false },
//     { id: 6, name: "Mumbai", category: "Textile & Agricultural Hub", isHost: false }
//   ];

//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-[#C88652] mb-6 font-['Poppins']">
//             {event.targetMarketsTitle}
//           </h2>
//           {event.targetMarketsDescription && (
//             <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto mb-6">
//               {event.targetMarketsDescription}
//             </p>
//           )}
//           <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - City Categories */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-[#264065] mb-8 font-['Poppins']">Key Growth Cities</h3>
            
//                          {targetCities.map((city, index) => (
//                <div key={city.id || index} className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${city.isHost ? 'bg-[#264065] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
//                  <div className="flex items-center gap-4">
//                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${city.isHost ? 'bg-[#C88652]' : 'bg-[#264065]'}`}>
//                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                      </svg>
//                    </div>
//                    <div>
//                      <h4 className={`text-lg font-bold font-['Poppins'] ${city.isHost ? 'text-white' : 'text-[#264065]'}`}>
//                        {city.name} {city.isHost && '- Host & Matchmaking Hub'}
//                      </h4>
//                      <p className={`text-sm ${city.isHost ? 'text-blue-200' : 'text-gray-600'} font-['Poppins']`}>
//                        {city.category}
//                      </p>
//                    </div>
//                  </div>
//                </div>
//              ))}
//           </div>

//           {/* Right Side - Industry Insights & Impact */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-2xl p-8 text-white relative overflow-hidden">
//               {/* Animated Background */}
//               <div className="absolute inset-0 opacity-10">
//                 <svg viewBox="0 0 200 200" className="w-full h-full">
//                   <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
//                     <animateTransform attributeName="transform" type="rotate" dur="10s" values="0 100 100;360 100 100" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3">
//                     <animateTransform attributeName="transform" type="rotate" dur="15s" values="360 100 100;0 100 100" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2">
//                     <animateTransform attributeName="transform" type="rotate" dur="8s" values="0 100 100;360 100 100" repeatCount="indefinite"/>
//                   </circle>
//                 </svg>
//               </div>
              
//               <div className="relative z-10">
//                 <div className="text-center mb-8">
//                   {/* <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div> */}
//                   <h4 className="text-3xl font-bold font-['Poppins']">TREX Impact</h4>
//                   <p className="text-blue-200 text-sm font-['Poppins']">Connecting Travel Industry Nationwide</p>
//                 </div>
                
//                 {/* Key Metrics */}
//                 <div className="grid grid-cols-2 gap-4 mb-8">
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
//                     <div className="text-2xl font-bold text-[#C88652] mb-1">500+</div>
//                     <p className="text-xs text-blue-200 font-['Poppins']">Decision Makers</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
//                     <div className="text-2xl font-bold text-[#C88652] mb-1">200+</div>
//                     <p className="text-xs text-blue-200 font-['Poppins']">Exhibitors</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
//                     <div className="text-2xl font-bold text-[#C88652] mb-1">15+</div>
//                     <p className="text-xs text-blue-200 font-['Poppins']">States Covered</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm text-center">
//                     <div className="text-2xl font-bold text-[#C88652] mb-1">85%</div>
//                     <p className="text-xs text-blue-200 font-['Poppins']">Success Rate</p>
//                   </div>
//                 </div>

//                 {/* Market Insights */}
//                 <div className="space-y-4 mb-6">
//                   <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
//                     <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse"></div>
//                     <p className="text-sm font-['Poppins']">Tier 2/3 cities showing 40% faster growth</p>
//                   </div>
//                   <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
//                     <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse animation-delay-500"></div>
//                     <p className="text-sm font-['Poppins']">Regional markets driving 60% of new bookings</p>
//                   </div>
//                   <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
//                     <div className="w-2 h-2 bg-[#C88652] rounded-full animate-pulse animation-delay-1000"></div>
//                     <p className="text-sm font-['Poppins']">B2B events generating 3x higher ROI</p>
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="text-center">
//                   {shouldShowRegistration(event.eventDate) ? (
//                     <p className="text-blue-200 text-sm font-['Poppins']">Seize your opportunity in India's emerging markets. <RegistrationButton variant="link">Register today.</RegistrationButton></p>
//                   ) : (
//                     <p className="text-blue-200 text-sm font-['Poppins']">Event completed. Stay tuned for upcoming opportunities.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 5. Who Should Exhibit Section
function WhoShouldExhibitSection() {
  const exhibitorTypes = [
    {
      title: "National & International Tourism Boards",
      icon: "🌍",
      bgColor: "bg-white"
    },
    {
      title: "DMCs",
      icon: "🎯",
      bgColor: "bg-gray-50"
    },
    {
      title: "Representation Companies",
      icon: "👥",
      bgColor: "bg-white"
    },
    {
      title: "Hotels & Resorts",
      icon: "🏨",
      bgColor: "bg-gray-50"
    },
    {
      title: "Consolidators & B2B Specialists",
      icon: "🤝",
      bgColor: "bg-white"
    },
    {
      title: "Airlines & Cruise Companies",
      icon: "✈️",
      bgColor: "bg-gray-50"
    },
    {
      title: "Travel Tech & SaaS Companies",
      icon: "💻",
      bgColor: "bg-white"
    },
    {
      title: "Rail Consolidators",
      icon: "🚄",
      bgColor: "bg-gray-50"
    },
    {
      title: "Auxiliary Services",
      icon: "🛠️",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            Who Should Exhibit ?
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto">
            Join industry leaders and innovative companies in showcasing your products and services to qualified buyers from Tier 2 & 3 cities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Exhibitor Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitorTypes.map((type, index) => (
            <div key={index} className={`${type.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#C88652] group`}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{type.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#264065] font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-['Poppins']">Ready to Connect with Your Next Business Partners?</h3>
            <p className="text-xl mb-8 text-blue-200 font-['Poppins']">
              Join 200+ exhibitors and connect with 500+ verified decision-makers
            </p>
            <button className="bg-[#C88652] hover:bg-[#b8763f] text-white px-10 py-4 rounded-full text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105">
              Book Your Exhibition Space
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

// 6. Space and Proposal Section
function SpaceProposalSection({ event }: { event: Event }) {
  // Use CMS data if available, otherwise fall back to defaults
  const packages = event.pricingPackages.length > 0 ? event.pricingPackages : [
    {
      id: 1,
      title: "Presentation",
      subtitle: "Capture Attention",
      price: "₹ 50,000",
      gst: "+ GST",
      features: [
        "30min Presentation Slot On Day 1",
        "Limited To 2 Slots (First Come First Serve)",
        "Note: Only 2 Slots Available"
      ],
      buttonText: "Book Now",
      bgColor: "bg-white",
      isPopular: false
    },
    {
      title: "Table Space (Day 2)",
      subtitle: "Single Day Presence",
      price: "₹ 75,000",
      gst: "+ GST",
      features: [
        "Single Table For Day 2 Only",
        "Single Ready Backdrop Banner",
        "1 Night Stay On Twin Sharing On The Hotel",
        "Day 1 - Networking Cocktail Dinner",
        "Hi Tea | Lunch"
      ],
      buttonText: "Book Now",
      bgColor: "bg-white",
      isPopular: false
    },
    {
      title: "Table Space (Day 1+2)",
      subtitle: "Most Popular",
      price: "₹ 1,00,000",
      gst: "+ GST",
      features: [
        "1 Table For Both Days",
        "2x Ready Backdrop Banners",
        "Pre-Fixed Meetings With Top Buyers On Day 1",
        "Day 1 - Networking Cocktail Dinner",
        "2 Table Space On Day 2 For Open Meetings",
        "1 Night Stay On Twin Sharing For 2 Persons"
      ],
      buttonText: "Book Now",
      bgColor: "bg-[#C88652]",
      isPopular: true,
      textColor: "text-white"
    },
    {
      title: "Table Space 2X (Day 1+2)",
      subtitle: "Enhanced Presence",
      gst: "+ GST",
      features: [
        "2 Tables On Both Days",
        "2 Ready Backdrop Banners",
        "Pre-Fixed Meetings With Top Buyers On Day 1",
        "Day 1 - Networking Cocktail Dinner",
        "2 Table Space On Day 2 For Open Meetings",
        "1 Night Stay On Twin Sharing For 2 Persons"
      ],
      buttonText: "Book Now",
      bgColor: "bg-white",
      isPopular: false
    },
    {
      title: "Premier Exhibitor (Day 1+2)",
      subtitle: "Premium Partner",
      gst: "+ GST",
      features: [
        "Prominent Branding On Key Spaces At All Banners",
        "2 Tables On Both Days",
        "2 Ready Backdrop Banners",
        "Pre-Fixed Meetings With Top Buyers On Day 1",
        "Day 1 - Networking Cocktail Dinner",
        "2 Table Space On Day 2 For Open Meetings",
        "1 Night Stay On Twin Sharing For 2 Persons",
        "Hi Tea | Lunch | Cocktail Dinner For 2 Persons"
      ],
      buttonText: "Book Now",
      bgColor: "bg-gradient-to-br from-[#264065] to-[#1a2d47]",
      isPopular: false,
      textColor: "text-white"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C88652] mb-6 font-['Poppins']">
            {event.pricingSectionTitle}
          </h2>
          <p className="text-xl text-[#264065] font-['Poppins']">
            {event.pricingSectionDescription}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-fr">
                     {packages.map((pkg, index) => (
             <div key={pkg.id || index} className={`${pkg.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${pkg.isPopular ? 'border-[#C88652] relative' : 'border-gray-200 hover:border-[#C88652]'} flex flex-col h-full`}>
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#264065] text-white px-6 py-2 rounded-full text-sm font-bold font-['Poppins']">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8 flex-shrink-0">
                <h3 className={`text-2xl font-bold mb-2 font-['Poppins'] ${pkg.textColor || 'text-[#264065]'}`}>
                  {pkg.title}
                </h3>
                <p className={`text-sm mb-6 font-['Poppins'] ${pkg.textColor ? 'text-blue-200' : 'text-gray-600'}`}>
                  {pkg.subtitle}
                </p>
                {pkg.price && (
                  <div className="mb-6">
                    <span className={`text-4xl font-bold font-['Poppins'] ${pkg.textColor || 'text-[#264065]'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-lg ml-2 font-['Poppins'] ${pkg.textColor ? 'text-blue-200' : 'text-gray-600'}`}>
                      {pkg.gst}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.textColor ? 'text-white' : 'text-[#C88652]'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-base font-['Poppins'] ${pkg.textColor ? 'text-blue-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 flex-shrink-0">
                <SmartEventButton
                  eventDate={event.eventDate}
                  eventSlug={event.slug}
                  registrationLink={event.registrationLink}
                  variant="pricing"
                  size="md"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Event Flow Section


// 8. Google Maps Location Section
function GoogleMapsSection({ event }: { event: Event }) {
  // Don't render if no Google Maps URL is provided
  if (!event.googleMapsEmbedUrl) {
    return null;
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Google Maps Embed */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] p-6 text-white">
            <h3 className="text-2xl font-bold font-['Poppins'] flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Interactive Map
            </h3>
            <p className="text-blue-200 mt-2 font-['Poppins']">
              Get directions and explore the venue location
            </p>
          </div>
          
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-100">
            <iframe
              src={event.googleMapsEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location of ${event.title}`}
            />
          </div>

          {/* Map Footer with Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#264065] font-['Poppins'] mb-1">Need Directions?</h4>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  Click the map to open in Google Maps for turn-by-turn navigation
                </p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={event.googleMapsEmbedUrl.replace('/embed?', '/dir/?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#264065] hover:bg-[#1a2d47] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Poppins']"
                >
                  Get Directions
                </a>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(event.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C88652] hover:bg-[#b8763f] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Poppins']"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Location Information */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF8F5] to-[#F5F3F0] rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#264065] mb-4 font-['Poppins']">
              Planning Your Visit?
            </h3>
            <p className="text-gray-600 mb-6 font-['Poppins'] max-w-3xl mx-auto">
              We recommend arriving 30 minutes early for registration and networking. 
              Parking and accessibility information will be provided upon registration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SmartEventButton
                eventDate={event.eventDate}
                eventSlug={event.slug}
                registrationLink={event.registrationLink}
                size="md"
                className="min-w-[200px]"
              />
              
              <a
                href={`/contact`}
                className="bg-white border-2 border-[#264065] text-[#264065] hover:bg-[#264065] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-['Poppins']"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Event Page Component
export default async function EventPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    // Fetch event data
    const event = await getEventBySlug(slug);
    
    if (!event) {
      notFound();
    }

    // Extract city name from location for "Why City" section
    const cityName = event.location.split(',')[0] || 'Pune';

    return (
      <main className="min-h-screen">
        {/* 1. Event Header with Quote */}
        <EventHeader event={event} />
        
        {/* 2. Why City Section */}
        <WhyCitySection cityName={cityName} />

        {/* 3. Event Flow Section */}
        <EventFlowSection event={event} />
        
        {/* 4. Why Exhibit at TREX Section */}
        <WhyExhibitSection />
        
        {/* 5. Target Markets Map Section */}
        {/* <TargetMarketsSection event={event} /> */}
        
        {/* 6. Who Should Exhibit Section */}
        <WhoShouldExhibitSection />
        
        {/* 7. Space and Proposal Section */}
        <SpaceProposalSection event={event} />
        
        
        {/* 8. Google Maps Location Section */}
        <GoogleMapsSection event={event} />
        
        {/* Floating Share Button */}
        <FloatingShareButton 
          url={`/events/${event.slug}`}
          title={event.title}
          description={event.description}
        />
      </main>
    );
  } catch (error) {
    console.error('Error fetching event:', error);
    notFound();
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | TREx Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

// Generate static params for all events
export async function generateStaticParams() {
  try {
    const { data: events } = await getEvents({ pageSize: 100 });
    return events.map((event: Event) => ({
      slug: event.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
} 