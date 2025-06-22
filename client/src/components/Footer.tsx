import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full pt-4 pb-12 h-[10vh]">
      {/* Upper section background - entire top part */}
      <div className="w-full py-4 opacity-100 relative z-10" style={{backgroundColor: '#FAF8F5'}}>
        {/* Upper section with responsive styling */}
        <div className="main-container w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden space-y-4 py-4">
          {/* First section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/assets/currency.svg"
                alt="Tourism Support"
                width={40}
                height={38}
                className="w-full h-full"
              />
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-semibold leading-tight text-[#264065] capitalize">
              Need any support for your Tourism business?
            </span>
          </div>
          
          {/* Second section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/assets/flight-globe.svg"
                alt="Travel Ready"
                width={40}
                height={38}
                className="w-full h-full"
              />
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-semibold leading-tight text-[#264065] capitalize">
              are you ready for get started travelling?
            </span>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:block relative h-[60px]">
          {/* Center divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[60px] w-[1px] bg-gray-400 z-[7]" />
          
                    {/* Left section */}
          <div className="absolute top-[2px] left-0 flex items-center space-x-4">
            <div className="w-[60px] h-[55px] flex items-center justify-center">
              <Image
                src="/assets/currency.svg"
                alt="Tourism Support"
                width={40}
                height={38}
                className="w-full h-full"
              />
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-lg xl:text-xl font-semibold leading-tight text-[#264065] capitalize max-w-[280px]">
              Need any support for your Tourism business?
            </span>
          </div>
          
          {/* Right section */}
          <div className="absolute top-[2px] right-0 flex items-center space-x-4">
            <div className="w-[60px] h-[55px] flex items-center justify-center">
              <Image
                src="/assets/flight-globe.svg"
                alt="Travel Ready"
                width={40}
                height={38}
                className="w-full h-full"
              />
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-lg xl:text-xl font-semibold leading-tight text-[#264065] capitalize max-w-[290px]">
              are you ready for get started travelling?
            </span>
          </div>
        </div>
        </div>
      </div>
      
      {/* Horizontal divider line */}
      <div className="w-full">
        <hr className="border-t border-gray-300" />
      </div>
      
      {/* Lower footer section - completely separate */}
      <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] max-h-[400px] overflow-hidden">
        {/* Background SVG with full coverage */}
        <div className="absolute inset-0 flex items-center justify-center z-0 left-[10%]">
          <Image
            src="/assets/footer-background.svg"
            alt=""
            width={1000}
            height={600}
            className="w-full h-full opacity-90"
            style={{
              minWidth: '100vw',
              minHeight: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Lower footer content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Company Info Section */}
            <div className="text-left">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="TREX"
                  width={120}
                  height={40}
                />
              </div>
              
              {/* Company Description */}
              <p className="text-[#264065] text-sm sm:text-base mb-8 leading-relaxed">
                Corporate business typically refers to large-scale financial enterprises or organizations
              </p>
              
              {/* Social Media Icons */}
              <div className="flex justify-start space-x-4 mb-8">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-white text-lg" />
                </a>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="text-left">
              <h3 className="text-[#264065] text-lg sm:text-xl font-semibold mb-6">
                Useful Links
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/about" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/events" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    Events
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/blog" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Support Section */}
            <div className="text-left">
              <h3 className="text-[#264065] text-lg sm:text-xl font-semibold mb-6">
                Legal & Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/contact" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/privacy-policy" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/assets/tick.svg"
                    alt=""
                    width={16}
                    height={11}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="/terms-of-service" 
                    className="text-[#264065] text-sm sm:text-base hover:text-[#1a2d47] transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="text-left">
              <h3 className="text-[#264065] text-lg sm:text-xl font-semibold mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#264065] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#264065] text-sm sm:text-base">
                    123 Business Street, City, State 12345
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#264065] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="text-[#264065] text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#264065] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p className="text-[#264065] text-sm sm:text-base">
                    info@trexbusiness.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 