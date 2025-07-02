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
  const actionConfig = getEventActionConfig(event.eventDate);
  
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
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
                    {new Date(event.eventDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
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
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#264065] to-[#1a2d47] shadow-2xl">
                
                {/* Event Image */}
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.imageAlt || event.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
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
                    <p className="text-sm font-bold text-slate-700 font-['Poppins']">{event.participantsCount}+ Attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote Card - Bottom Center spanning both sections */}
        <div className="w-full">
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
        </div>
      </div>
    </section>
  );
}

// 2. Why City Section - Completely Redesigned
function WhyCitySection({ cityName }: { cityName: string }) {
  const cityStats = [
    {
      number: "7.53M",
      label: "Population by 2025",
      growth: "+40%",
      icon: "/assets/globe-people.png"
    },
    {
      number: "6th",
      label: "Highest Per Capita Income",
      growth: "in India",
      icon: "/assets/currency.svg"
    },
    {
      number: "2nd",
      label: "Largest IT Hub",
      growth: "in India",
      icon: "/assets/graph-up.png"
    }
  ];

  const cityAdvantages = [
    {
      title: "Strategic Market Position",
      description: `${cityName} serves as the gateway to fast-rising Tier 3 hubs including Kolhapur, Satara, Nashik, Ahmednagar and Aurangabad.`,
      detailedInfo: "Connect with 15+ emerging markets within 3-hour radius",
      iconUrl: "/assets/globe.svg",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      category: "location"
    },
    {
      title: "Explosive Growth Demographics",
      description: `Projected to become India's 7th largest metro by 2031 with unprecedented 40% per decade growth rate.`,
      detailedInfo: "Young population with 65% under age 35 driving innovation",
      iconUrl: "/assets/graph-up.png",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      category: "growth"
    },
    {
      title: "Enhanced Air Connectivity",
      description: `${cityName} Airport's expanding network plus proximity to Mumbai creates unparalleled accessibility for business growth.`,
      detailedInfo: "Direct flights to 40+ domestic and 12+ international destinations",
      iconUrl: "/assets/flight-globe.svg",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
      category: "connectivity"
    },
    {
      title: "Thriving Business Ecosystem",
      description: "Strong manufacturing base in automobile and engineering sectors creates robust employment and economic foundation.",
      detailedInfo: "Home to 500+ Fortune companies and growing startup ecosystem",
      iconUrl: "/assets/hand-bond.png",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      category: "business"
    },
    {
      title: "Rising Travel Market",
      description: "Thousands of growing travel agents, tour operators, and institutional buyers with increasing disposable income.",
      detailedInfo: "Travel spend growing 25% annually with focus on premium experiences",
      iconUrl: "/assets/user-tick.png",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100",
      category: "market"
    },
    {
      title: "Infrastructure Excellence",
      description: `World-class hospitality services, exhibition infrastructure, and seamless road connectivity position ${cityName} as the ideal business destination.`,
      detailedInfo: "5-star venues, modern conference facilities, and premium accommodations",
      iconUrl: "/assets/badge.svg",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
      category: "infrastructure"
    }
  ];

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
            Market Opportunity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#264065] mb-6 font-['Poppins'] leading-tight">
            Why <span className="text-[#C88652] relative">
              {cityName}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C88652] to-[#264065] rounded-full"></div>
            </span> ?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-['Poppins'] max-w-4xl mx-auto leading-relaxed">
            Discover India's fastest-growing business destination where opportunity meets infrastructure
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

        {/* City Image Placeholder - Add your city hero image here */}
        <div className="relative mb-16 lg:mb-20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-[21/9] bg-gradient-to-r from-[#264065] via-[#1a2d47] to-[#264065] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏙️</div>
              <p className="text-xl font-['Poppins']">
                [Add stunning {cityName} cityscape or business district image here]
              </p>
              <p className="text-sm opacity-75 mt-2">
                Recommended: High-quality panoramic view of {cityName}'s business district or iconic landmarks
              </p>
            </div>
          </div>
          {/* Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {cityAdvantages.map((advantage, index) => (
            <div
              key={index}
              className={`group ${advantage.bgColor} rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-[#C88652]/30 relative overflow-hidden`}
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
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#C88652] hover:bg-[#b8753d] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Partnership Opportunities
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Download Market Report
              </button>
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
              showSecondaryAction={false}
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. Google Maps Location Section
function GoogleMapsSection({ event }: { event: Event }) {
  // Don't render if no Google Maps URL is provided
  if (!event.googleMapsEmbedUrl) {
    return null;
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            Event Location
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins'] mb-4">
            Find us at {event.location}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
        </div>

        {/* Location Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address Card */}
          <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Location</h3>
            <p className="text-blue-200 font-['Poppins']">{event.location}</p>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-[#C88652] to-[#b8763f] rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#264065] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Contact</h3>
            <p className="text-orange-100 font-['Poppins']">{event.contactEmail}</p>
          </div>

          {/* Time Card */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Timing</h3>
            <p className="text-gray-300 font-['Poppins']">{event.contactTime}</p>
          </div>
        </div>

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
        
        {/* 3. Why Exhibit at TREX Section */}
        <WhyExhibitSection />
        
        {/* 4. Target Markets Map Section */}
        {/* <TargetMarketsSection event={event} /> */}
        
        {/* 5. Who Should Exhibit Section */}
        <WhoShouldExhibitSection />
        
        {/* 6. Space and Proposal Section */}
        <SpaceProposalSection event={event} />
        
        {/* 7. Event Flow Section */}
        <EventFlowSection event={event} />
        
        {/* 8. Google Maps Location Section */}
        <GoogleMapsSection event={event} />
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