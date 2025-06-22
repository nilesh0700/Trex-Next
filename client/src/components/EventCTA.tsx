"use client"

import React from 'react';
import Image from 'next/image';

const EventCTA = () => {
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
            // className="w-full h-full"
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
              {/* Event Badge */}
              <div className="inline-block">
                <span className="bg-[#264065] text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold">
                  Upcoming Event
                </span>
              </div>

              {/* Event Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                Open Exhibition - Buyers from Tier 3 Cities & Pune
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
                    Time: 10:30 - 13:00
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
                    Pune, Maharashtra
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <button className="bg-[#264065] hover:bg-[#1a2d47] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Learn more
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                {/* Main Image */}
                <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(/assets/last.png)`
                    }}
                  ></div>
                  
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#264065]/20 to-transparent"></div>
                </div>

                {/* Plus Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCTA; 