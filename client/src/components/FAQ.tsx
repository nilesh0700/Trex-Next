'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Who can attend TREx?",
      answer: "TREx is designed for travel industry professionals including tour operators, travel agents, destination management companies, hotels, resorts, airlines, and other travel service providers looking to expand their business network and explore new opportunities in regional markets."
    },
    {
      id: 2,
      question: "Is TREx open to the public?",
      answer: "TREx is a B2B (Business-to-Business) trade exhibition exclusively for travel industry professionals. It is not open to the general public. Attendees must be registered travel industry professionals with valid business credentials."
    },
    {
      id: 3,
      question: "What cities will buyers be coming from?",
      answer: "TREx focuses on connecting Tier 2 and Tier 3 cities across India. Buyers will be coming from various regional markets including emerging destinations and growing business centers that represent significant untapped potential in the travel industry."
    },
    {
      id: 4,
      question: "Will there be a hosted buyer program?",
      answer: "Yes, TREx features a comprehensive hosted buyer program designed to bring qualified buyers from target markets. The program includes pre-scheduled appointments, networking sessions, and facilitated meetings to maximize business opportunities for exhibitors."
    },
    {
      id: 5,
      question: "What networking opportunities are available?",
      answer: "TREx offers extensive networking opportunities including structured B2B meetings, networking sessions, panel discussions, cocktail receptions, and informal meeting spaces. The event is designed to facilitate meaningful connections and business collaborations between exhibitors and buyers."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#264065] mb-4 sm:mb-6 font-['Poppins']">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#1a2d47] mx-auto rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#C88652] font-['Poppins'] pr-4 group-hover:text-[#b8763f] transition-colors duration-200">
                  {item.question}
                </h3>
                
                {/* Plus/Minus Icon */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e8f4f8] flex items-center justify-center transition-all duration-300 group-hover:bg-[#d1e7f0]">
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#264065] transition-transform duration-300 ${
                      openItems.includes(item.id) ? 'rotate-45' : 'rotate-0'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 sm:px-8 sm:pb-6 pt-0">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-sm sm:text-base md:text-lg text-[#6c757d] leading-relaxed font-['Poppins']">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 