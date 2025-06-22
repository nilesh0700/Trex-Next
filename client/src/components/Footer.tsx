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
          <div className="text-left max-w-[300px]">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer; 