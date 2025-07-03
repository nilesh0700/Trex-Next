import React from "react";
import { Event } from "@/types/strapi";
import SmartEventButton from "./SmartEventButton";

// Custom CSS for animations
const customStyles = `
  @keyframes scaleX {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

interface EventFlowSectionProps {
  event: Event;
}

export default function EventFlowSection({ event }: EventFlowSectionProps) {
  // Use CMS data if available, otherwise fall back to defaults
  const eventFlow =
    event.eventFlowItems.length > 0
      ? event.eventFlowItems
      : [
          {
            id: 1,
            time: "13:00 - 15:00 Hrs",
            title: "Registration & Welcome",
            description:
              "Check-In, Networking Breakfast, And Welcome Reception",
            day: 1,
            icon: "📝",
          },
          {
            time: "15:00 - 15:30 Hrs",
            title: "Tea Coffee Break",
            description: "Networking Refreshments For All Attendees",
            day: 1,
            icon: "☕",
          },
          {
            time: "15:30 - 16:30 Hrs",
            title: "Presentation Showcase",
            description: "Featured Presentations From Key Industry Leaders",
            day: 1,
            icon: "🎤",
          },
          {
            time: "16:30 - 19:00 Hrs",
            title: "Rotational Table Meetings",
            description: "1:1 B2B Buyers From Tier 3 Cities",
            day: 1,
            icon: "🤝",
          },
          {
            time: "19:00 - 20:00 Hrs",
            title: "Dinner Preparation",
            description: "Break To Get Ready For Dinner",
            day: 1,
            icon: "🍽️",
          },
          {
            time: "20:00 - 22:00 Hrs",
            title: "Networking Lounge",
            description:
              "Cocktails, Dinner, And Informal Networking Opportunities",
            day: 1,
            icon: "🥂",
          },
          {
            time: "17:00 - 20:00 Hrs",
            title: "Day 2 Registration",
            description: "Check In For Day 2 Exhibitors",
            day: 2,
            icon: "📋",
          },
        ];

  // Group events by day
  const day1Events = eventFlow.filter((item) => item.day === 1);
  const day2Events = eventFlow.filter((item) => item.day === 2);

  return (
    <>
      {/* Inject custom CSS */}
      <style>{customStyles}</style>

      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                  {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            Event Flow
          </h2>
          <p className="text-xl text-[#264065] font-['Poppins']">
            Your journey through two exciting days of networking, learning, and business opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full mt-6"></div>
        </div>

                  {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Day 1 Column */}
          <div>
            {/* Day Header with Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-['Poppins']">
                  1
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#264065] font-['Poppins']">
                DAY 01
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#264065] to-transparent"></div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#264065] via-[#C88652] to-[#264065] opacity-30"></div>

              {/* Timeline items */}
              <div className="space-y-6">
                {day1Events.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="relative pl-12 group/item cursor-pointer transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-[#C88652] rounded-full shadow-lg relative z-10 group-hover/item:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 bg-[#C88652] rounded-full animate-ping opacity-25"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border-l-4 border-[#C88652] group-hover/item:border-[#264065] group-hover/item:shadow-md transition-all duration-300">
                      <div className="text-lg font-bold text-[#264065] mb-2 font-['Poppins'] group-hover/item:text-[#C88652] transition-colors duration-300">
                        {item.time}
                      </div>
                      <div className="text-gray-700 font-['Poppins'] leading-relaxed text-sm md:text-base">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 Column */}
          <div>
            {/* Day Header with Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C88652] to-[#b8763f] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-['Poppins']">
                  2
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#264065] font-['Poppins']">
                DAY 02
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C88652] to-transparent"></div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C88652] via-[#264065] to-[#C88652] opacity-30"></div>

              {/* Timeline items */}
              <div className="space-y-6">
                {day2Events.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="relative pl-12 group/item cursor-pointer transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-[#264065] rounded-full shadow-lg relative z-10 group-hover/item:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 bg-[#264065] rounded-full animate-ping opacity-25"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border-l-4 border-[#264065] group-hover/item:border-[#C88652] group-hover/item:shadow-md transition-all duration-300">
                      <div className="text-lg font-bold text-[#264065] mb-2 font-['Poppins'] group-hover/item:text-[#C88652] transition-colors duration-300">
                        {item.time}
                      </div>
                      <div className="text-gray-700 font-['Poppins'] leading-relaxed text-sm md:text-base">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
