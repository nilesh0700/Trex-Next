import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug, getRelatedEvents, getEvents } from '@/lib/strapi';
import { Event } from '@/types/strapi';
import RegistrationButton from '@/components/RegistrationButton';
import SmartEventButton from '@/components/SmartEventButton';
import { shouldShowRegistration, getEventActionConfig } from '@/utils/eventUtils';

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Event Header with Heading, Subheading and Quote
function EventHeader({ event }: { event: Event }) {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#264065] to-[#1a2d47] mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex items-center min-h-screen">
        <div className="w-full text-center text-white">
          {/* Event Category Badge */}
          {event.category && (
            <div className="inline-block bg-[#C88652] text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wide">
              {event.category.name}
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Poppins'] leading-tight">
            {event.title}
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-blue-200 font-['Poppins'] leading-relaxed max-w-4xl mx-auto">
            {event.description}
          </p>

          {/* Inspirational Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#C88652]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="text-lg sm:text-xl italic font-['Poppins'] text-center">
              "Your Success Story Begins With The Right Connections. Let TREX Be Your Gateway To India's Next Growth Frontier."
            </blockquote>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <svg className="w-6 h-6 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-['Poppins']">
                {new Date(event.eventDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
              <svg className="w-6 h-6 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-['Poppins']">{event.location}</span>
            </div>
          </div>

          {/* Premium Smart CTA Button */}
          <SmartEventButton
            eventDate={event.eventDate}
            eventSlug={event.slug}
            registrationLink={event.registrationLink}
            variant="hero"
            size="xl"
          />
        </div>
      </div>
    </div>
  );
}

// 2. Why City Section
function WhyCitySection({ cityName }: { cityName: string }) {
  const cityBenefits = [
    {
      title: "Strategic Location",
      description: `${cityName} A Tier 2 city with proximity to fast-rising Tier 3 hubs like Kolhapur, Satara, Nashik, Ahmednagar and Aurangabad.`,
      icon: "📍"
    },
    {
      title: "Untapped Potential Market",
      description: "Thousands of growing travel agents, tour operators, and institutional buyers",
      icon: "📈"
    },
    {
      title: "Infrastructure Ready", 
      description: `${cityName} offers strong hospitality services, excellent air and road connectivity, and well-developed exhibition infrastructure ideal for business, events, and tourism growth.`,
      icon: "🏗️"
    },
    {
      title: "Enhanced Connectivity",
      description: `Proximity to Mumbai Exitlisting and New airports and ${cityName} Airport's expanding domestic and international network positions the city for explosive air connectivity growth.`,
      icon: "✈️"
    },
    {
      title: `${cityName}'s Growth and Demographics`,
      description: `${cityName}'s 2025 population is 7.53 million, growing 40% per decade, projected to become India's 7th largest metro by 2031.`,
      icon: "📊"
    },
    {
      title: "Rising Buying Power",
      description: `${cityName}, with India's 6th highest per capita income, sees rising disposable incomes fueling frequent, diverse travel driven by strong industries.`,
      icon: "💰"
    },
    {
      title: "Economic and Industrial Drivers",
      description: `${cityName} is the second-largest IT hub in India and has a strong manufacturing base, especially in automobile and engineering sectors, which fuels employment and economic growth.`,
      icon: "🏭"
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            WHY {cityName.toUpperCase()} ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C88652] rounded-full flex items-center justify-center text-white text-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#C88652] font-['Poppins']">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-['Poppins']">{benefit.description}</p>
            </div>
          ))}
        </div>
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
function TargetMarketsSection({ event }: { event: Event }) {
  // Use CMS data if available, otherwise fall back to defaults
  const targetCities = event.targetCities.length > 0 ? event.targetCities : [
    { id: 1, name: "Pune", category: "Host & Matchmaking Hub", isHost: true },
    { id: 2, name: "Nashik", category: "Wine Capital & Insurance Hub", isHost: false },
    { id: 3, name: "Kolhapur", category: "Cultural & Business Hub", isHost: false },
    { id: 4, name: "Aurangabad", category: "Historical & Industrial", isHost: false },
    { id: 5, name: "Nagpur", category: "Geographic Centre of India", isHost: false },
    { id: 6, name: "Mumbai", category: "Textile & Agricultural Hub", isHost: false }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C88652] mb-6 font-['Poppins']">
            {event.targetMarketsTitle}
          </h2>
          {event.targetMarketsDescription && (
            <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto mb-6">
              {event.targetMarketsDescription}
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - City Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#264065] mb-8 font-['Poppins']">Key Growth Cities</h3>
            
                         {targetCities.map((city, index) => (
               <div key={city.id || index} className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${city.isHost ? 'bg-[#264065] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
                 <div className="flex items-center gap-4">
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center ${city.isHost ? 'bg-[#C88652]' : 'bg-[#264065]'}`}>
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <div>
                     <h4 className={`text-lg font-bold font-['Poppins'] ${city.isHost ? 'text-white' : 'text-[#264065]'}`}>
                       {city.name} {city.isHost && '- Host & Matchmaking Hub'}
                     </h4>
                     <p className={`text-sm ${city.isHost ? 'text-blue-200' : 'text-gray-600'} font-['Poppins']`}>
                       {city.category}
                     </p>
                   </div>
                 </div>
               </div>
             ))}
          </div>

          {/* Right Side - Industry Insights & Impact */}
          <div className="relative">
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
                  {/* <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div> */}
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
                  {shouldShowRegistration(event.eventDate) ? (
                    <p className="text-blue-200 text-sm font-['Poppins']">Seize your opportunity in India's emerging markets. <RegistrationButton variant="link">Register today.</RegistrationButton></p>
                  ) : (
                    <p className="text-blue-200 text-sm font-['Poppins']">Event completed. Stay tuned for upcoming opportunities.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      price: "₹ 1,90,000",
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
      price: "₹ 2,75,000",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                     {packages.map((pkg, index) => (
             <div key={pkg.id || index} className={`${pkg.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${pkg.isPopular ? 'border-[#C88652] relative' : 'border-gray-200 hover:border-[#C88652]'}`}>
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#264065] text-white px-6 py-2 rounded-full text-sm font-bold font-['Poppins']">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 font-['Poppins'] ${pkg.textColor || 'text-[#264065]'}`}>
                  {pkg.title}
                </h3>
                <p className={`text-sm mb-6 font-['Poppins'] ${pkg.textColor ? 'text-blue-200' : 'text-gray-600'}`}>
                  {pkg.subtitle}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold font-['Poppins'] ${pkg.textColor || 'text-[#264065]'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ml-2 font-['Poppins'] ${pkg.textColor ? 'text-blue-200' : 'text-gray-600'}`}>
                    {pkg.gst}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.textColor ? 'text-white' : 'text-[#C88652]'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm font-['Poppins'] ${pkg.textColor ? 'text-blue-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <SmartEventButton
                eventDate={event.eventDate}
                eventSlug={event.slug}
                registrationLink={event.registrationLink}
                variant="pricing"
                size="md"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Event Flow Section
function EventFlowSection({ event }: { event: Event }) {
  // Use CMS data if available, otherwise fall back to defaults
  const eventFlow = event.eventFlowItems.length > 0 ? event.eventFlowItems : [
    {
      id: 1,
      time: "13:00 - 15:00 Hrs",
      title: "Registration & Welcome",
      description: "Check-In, Networking Breakfast, And Welcome Reception",
      day: 1,
      icon: "📝"
    },
    {
      time: "15:00 - 15:30 Hrs",
      title: "Tea Coffee Break",
      description: "Networking Refreshments For All Attendees",
      day: 1,
      icon: "☕"
    },
    {
      time: "15:30 - 16:30 Hrs",
      title: "Presentation Showcase",
      description: "Featured Presentations From Key Industry Leaders",
      day: 1,
      icon: "🎤"
    },
    {
      time: "16:30 - 19:00 Hrs",
      title: "Rotational Table Meetings",
      description: "1:1 B2B Buyers From Tier 3 Cities",
      day: 1,
      icon: "🤝"
    },
    {
      time: "19:00 - 20:00 Hrs",
      title: "Dinner Preparation",
      description: "Break To Get Ready For Dinner",
      day: 1,
      icon: "🍽️"
    },
    {
      time: "20:00 - 22:00 Hrs",
      title: "Networking Lounge",
      description: "Cocktails, Dinner, And Informal Networking Opportunities",
      day: 1,
      icon: "🥂"
    },
    {
      time: "17:00 - 20:00 Hrs",
      title: "Day 2 Registration",
      description: "Check In For Day 2 Exhibitors",
      day: 2,
      icon: "📋"
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            {event.eventFlowTitle}
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins']">
            {event.eventFlowDescription}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#264065] to-[#C88652] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
                         {eventFlow.map((item, index) => (
               <div key={item.id || index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#C88652]">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${index % 2 !== 0 ? 'order-first' : ''}`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="bg-[#C88652] text-white px-4 py-2 rounded-full text-sm font-bold font-['Poppins'] inline-block mb-2">
                          Day {item.day}
                        </div>
                        <div className="text-[#264065] font-semibold font-['Poppins']">
                          {item.time}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#264065] mb-3 font-['Poppins']">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-['Poppins']">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#C88652] border-4 border-white rounded-full shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-['Poppins']">Ready to Join This Exclusive Event?</h3>
            <p className="text-xl mb-8 text-blue-200 font-['Poppins']">
              Secure your spot at India's premier regional travel networking summit
            </p>
            <SmartEventButton
              eventDate={event.eventDate}
              eventSlug={event.slug}
              registrationLink={event.registrationLink}
              showSecondaryAction={true}
              size="lg"
            />
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
        
        {/* 3. Why Exhibit at TREX Section */}
        <WhyExhibitSection />
        
        {/* 4. Target Markets Map Section */}
        <TargetMarketsSection event={event} />
        
        {/* 5. Who Should Exhibit Section */}
        <WhoShouldExhibitSection />
        
        {/* 6. Space and Proposal Section */}
        <SpaceProposalSection event={event} />
        
        {/* 7. Event Flow Section */}
        <EventFlowSection event={event} />
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