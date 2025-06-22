'use client'

import React from 'react';

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:team@trexevents.in?subject=Inquiry about TREx&body=Hello, I would like to know more about TREx Travel Relations & Exhibitions.';
  };

  const contactInfo = {
    phones: [
      { number: "+91 98113XXXXX", label: "Sales", isMain: true },
      { number: "+91 9811330099", label: "Siddharth Jain", isMain: false },
      { number: "+91 9850080120", label: "Mehboob Shaikh", isMain: false },
      { number: "+91 9822030908", label: "Krishna Gopalan", isMain: false }
    ],
    email: "team@trexevents.in",
    website: "www.trexevents.com"
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Phone Numbers Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#264065] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#264065] font-['Poppins']">Phone Numbers</h3>
                </div>
              </div>
              
              <div className="pl-16 space-y-3">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg text-[#264065] font-medium font-['Poppins']">
                      {phone.number}
                    </span>
                    <span className="text-sm sm:text-base text-[#6c757d] font-['Poppins']">
                      - {phone.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#264065] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#264065] font-['Poppins']">Email</h3>
                </div>
              </div>
              
              <div className="pl-16">
                <span className="text-base sm:text-lg text-[#264065] font-medium font-['Poppins']">
                  {contactInfo.email}
                </span>
              </div>
            </div>

            {/* Website Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#264065] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#264065] font-['Poppins']">Website</h3>
                </div>
              </div>
              
              <div className="pl-16">
                <span className="text-base sm:text-lg text-[#264065] font-medium font-['Poppins']">
                  {contactInfo.website}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Section */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C88652] to-[#b8763f] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#264065] font-['Poppins']">
                  Ready to Connect?
                </h3>
                <p className="text-base sm:text-lg text-[#6c757d] leading-relaxed font-['Poppins'] max-w-md mx-auto">
                  Have questions about TREx? We're here to help! Click below to send us an email and we'll get back to you promptly.
                </p>
              </div>

              <button
                onClick={handleEmailClick}
                className="group bg-gradient-to-r from-[#264065] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#264065] text-white px-8 py-4 rounded-xl font-semibold text-lg font-['Poppins'] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#264065]/20"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Us an Email
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <p className="text-sm text-[#6c757d] font-['Poppins']">
                This will open your default email client with our address pre-filled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 