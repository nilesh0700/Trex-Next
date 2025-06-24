import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '../../components/PageHeading';
import { getFeaturedEvents, getRegularEvents } from '@/lib/strapi';
import { Event } from '@/types/strapi';

// Featured Event Component
function FeaturedEventSection({ event }: { event: Event }) {
  return (
    <div className="w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
          {/* Main Background Image */}
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          
          {/* Overlay Text Section */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 z-10">
            <div className="relative bg-gradient-to-br from-[#264065]/90 to-[#1a2d47]/90 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md sm:max-w-lg md:max-w-xl backdrop-blur-sm">
              <h2 className="font-['Poppins'] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white">
                {event.overlayText}
              </h2>
            </div>
          </div>
          
          {/* Optional Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

// Contact Blocks Component
function ContactSection({ event }: { event: Event }) {
  return (
    <div className="w-full py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Email Block */}
          <div className="main-container w-full h-[10vh] relative mx-auto my-0">
            <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
              <Image src="/assets/mail-orange.svg" alt="Email" width={40} height={40}/>
              <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                {event.contactEmail}
              </span>
            </div>
          </div>

          {/* Time Block */}
          <div className="main-container w-full h-[10vh] relative mx-auto my-0">
            <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
              <Image src="/assets/clock-orange.svg" alt="Time" width={40} height={40}/>
              <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                {event.contactTime}
              </span>
            </div>
          </div>

          {/* Location Block */}
          <div className="main-container w-full h-[10vh] relative mx-auto my-0">
            <div className="w-full h-[10vh] rounded-[10px] border-solid border-2 border-[#264065] relative bg-white flex justify-center items-center gap-4 px-4">
              <Image src="/assets/location-orange.svg" alt="Location" width={40} height={40}/>
              <span className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-bold text-[#034833]">
                {event.contactLocation}
              </span>
            </div>
          </div>

        </div>

        {/* Section Header */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C88652] mb-6 sm:mb-8 font-['Poppins']">
            {event.eventHeading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6c757d] leading-relaxed font-['Poppins'] max-w-5xl mx-auto mb-8 sm:mb-10">
            {event.eventSubheading}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 md:mb-14">
            {event.registrationLink && (
              <a 
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C88652] hover:bg-[#264065] text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C88652] focus:ring-opacity-30 shadow-lg hover:shadow-xl"
              >
                Register Now
              </a>
            )}
            <Link 
              href={`/events/${event.slug}`}
              className="bg-transparent border-2 border-[#264065] text-[#264065] hover:bg-[#264065] hover:text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#264065] focus:ring-opacity-30"
            >
              View Event Details
            </Link>
          </div>
          
          <div className="w-full h-[1px] bg-gray-400 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

// Regular Event Card Component
function EventCard({ event }: { event: Event }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="aspect-[4/3] relative">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-2 font-['Poppins'] group-hover:text-[#C88652] transition-colors duration-300">
            <Link href={`/events/${event.slug}`}>
              {event.title}
            </Link>
          </h3>
          <p className="text-[#6c757d] font-['Poppins'] text-sm sm:text-base mb-3">
            {formatDate(event.eventDate)}
          </p>
          <div className="flex items-center text-[#C88652] text-sm font-medium">
            <span>{event.participantsCount}</span>
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

  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="Events" />
      
      {/* Featured Event Section */}
      {featuredEvent && (
        <>
          <FeaturedEventSection event={featuredEvent} />
          <ContactSection event={featuredEvent} />
        </>
      )}
      
      {/* Past/Regular Events Section */}
      {regularEvents.length > 0 && (
        <div className="w-full py-16 sm:py-20 md:py-24" style={{backgroundColor: '#FAF8F5'}}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
                Our Events
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {regularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Events Message */}
      {!featuredEvent && regularEvents.length === 0 && (
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