"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/types/strapi';
import { formatEventDate, formatDateSimple } from '@/utils/eventUtils';

interface EventCTAProps {
  event: Event;
}

const EventCTA = ({ event }: EventCTAProps) => {

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top-left dotted circle - positioned outside the card */}
        <div className="absolute -top-8 sm:-top-10 lg:-top-12 -left-1 sm:-left-2 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-90 z-0">
          <Image
            src="/assets/dotted-circle.svg"
            alt=""
            width={140}
            height={140}
          />
        </div>
        
        {/* Event CTA Card */}
        <div className="relative bg-gradient-to-r from-[#C88652] to-[#b8763f] rounded-3xl overflow-hidden shadow-2xl z-10">

          {/* Dotted Pattern */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#264065]/40 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Curved Divider */}
          <div className="absolute top-0 right-0 w-full h-full">
            <svg
              className="absolute top-0 right-0 w-1/2 h-full"
              viewBox="0 0 400 300"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M100 0 Q200 150 100 300 L400 300 L400 0 Z"
                fill="#264065"
                opacity="0.8"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Event Badge - Made more professional */}
              <div className="inline-block">
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-[#264065] px-4 py-2 rounded-lg text-sm font-medium tracking-wide">
                  Upcoming Event
                </span>
              </div>

              {/* Event Title - Use overlay text if available, otherwise use title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                {event.overlayText || event.title}
              </h2>

              {/* Event Details */}
              <div className="space-y-3 sm:space-y-4">
                {/* Time */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#264065] font-semibold text-sm sm:text-base lg:text-lg">
                    Time: {event.contactTime}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                    {event.location}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#264065] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                    {formatDateSimple(event.eventDate)}
                  </span>
                </div>
              </div>

              {/* CTA Button - Made more professional */}
              <div className="pt-2 sm:pt-4">
                <Link 
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-[#264065] px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 group"
                >
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                {/* Main Media Content */}
                <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative bg-black">
                  {event.mediaType === 'video' && event.image ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                      <source src={event.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : event.mediaType === 'video_url' && event.videoUrl ? (
                    <iframe
                      src={event.videoUrl}
                      className="absolute -inset-x-8 inset-y-0 w-[calc(100%+4rem)] h-full border-0 scale-150"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  )}
                  
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#264065]/20 to-transparent"></div>
                </div>

                {/* Plus Icon Overlay */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCTA; 