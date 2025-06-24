import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEventBySlug, getRelatedEvents, getEvents } from '@/lib/strapi';
import { Event } from '@/types/strapi';

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// Event Hero Section
function EventHero({ event }: { event: Event }) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mt-20">
      <Image
        src={event.image}
        alt={event.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Poppins']">
            {event.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-['Poppins'] leading-relaxed">
            {event.description}
          </p>
          
          {/* Date and Location */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">
                {new Date(event.eventDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">{event.location}</span>
            </div>
          </div>
          
          {/* CTA Button */}
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C88652] hover:bg-[#264065] text-white px-8 py-4 rounded-xl text-lg font-bold font-['Poppins'] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#C88652] focus:ring-opacity-30 shadow-lg hover:shadow-xl"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Event Details Section
function EventDetails({ event }: { event: Event }) {
  return (
    <div className="w-full py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Date Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#C88652] rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins']">Event Date</h3>
            </div>
            <p className="text-gray-600 font-['Poppins']">
              {new Date(event.eventDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          
          {/* Location Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#C88652] rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins']">Location</h3>
            </div>
            <p className="text-gray-600 font-['Poppins']">{event.location}</p>
          </div>
          
          {/* Participants Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#C88652] rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins']">Expected</h3>
            </div>
            <p className="text-gray-600 font-['Poppins']">{event.participantsCount}</p>
          </div>
          
        </div>

        {/* Event Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#264065] mb-6 font-['Poppins']">
            About This Event
          </h2>
          <div 
            className="prose prose-lg max-w-none text-gray-600 font-['Poppins']"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>

        {/* Organizer Info */}
        <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-2xl p-8 mt-8 text-white">
          <h3 className="text-2xl font-bold mb-4 font-['Poppins']">Event Organizer</h3>
          <div className="flex items-center gap-4">
            {event.organizer.avatar && (
              <Image
                src={event.organizer.avatar}
                alt={event.organizer.name}
                width={60}
                height={60}
                className="rounded-full"
              />
            )}
            <div>
              <h4 className="text-xl font-bold mb-1 font-['Poppins']">{event.organizer.name}</h4>
              <p className="text-blue-200 mb-2">{event.organizer.email}</p>
              {event.organizer.bio && (
                <p className="text-gray-200 font-['Poppins']">{event.organizer.bio}</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Related Events Section
function RelatedEvents({ events }: { events: Event[] }) {
  if (events.length === 0) return null;

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#264065] mb-4 font-['Poppins']">
            Related Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[16/10] relative">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#264065] mb-2 font-['Poppins']">
                  <Link href={`/events/${event.slug}`} className="hover:text-[#C88652] transition-colors">
                    {event.title}
                  </Link>
                </h3>
                <p className="text-gray-600 font-['Poppins'] text-sm mb-3">
                  {new Date(event.eventDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-500 font-['Poppins'] mb-4 line-clamp-2">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-block bg-[#C88652] hover:bg-[#264065] text-white px-4 py-2 rounded-lg text-sm font-bold font-['Poppins'] transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Event Page Component
export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  // Fetch event data
  const event = await getEventBySlug(slug);
  
  if (!event) {
    notFound();
  }

  // Fetch related events
  const relatedEvents = await getRelatedEvents(slug, event.category.slug, 3);

  return (
    <main className="min-h-screen bg-white">
      
      {/* Event Hero */}
      <EventHero event={event} />
      
      {/* Event Details */}
      <EventDetails event={event} />
      
      {/* Related Events */}
      <RelatedEvents events={relatedEvents} />
      
    </main>
  );
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