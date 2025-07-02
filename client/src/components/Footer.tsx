import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper section with call-to-action */}
      <div className="w-full bg-[#FAF8F5] py-8 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col space-y-6 lg:hidden">
                          <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src="/assets/currency.svg"
                    alt="Tourism Support"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#264065] capitalize">
                Need any support for your Tourism business?
              </span>
            </div>
            
                          <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src="/assets/flight-globe.svg"
                    alt="Travel Ready"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#264065] capitalize">
                Are you ready to get started travelling?
              </span>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:relative">
                          <div className="flex items-center space-x-4 flex-1">
                <div className="w-14 h-14 flex-shrink-0">
                  <img
                    src="/assets/currency.svg"
                    alt="Tourism Support"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Poppins'] text-lg xl:text-xl font-medium text-[#264065] capitalize">
                Bridge New Markets, Build Bigger Business
              </span>
            </div>
            
            {/* Center divider */}
            <div className="w-px h-16 bg-gray-400 mx-8"></div>
            
                          <div className="flex items-center space-x-4 flex-1">
                <div className="w-14 h-14 flex-shrink-0">
                  <img
                    src="/assets/flight-globe.svg"
                    alt="Travel Ready"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Poppins'] text-lg xl:text-xl font-medium text-[#264065] capitalize">
                Where Regional Buyers Meet Global Sellers
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="border-gray-300" />
      
      {/* Main footer section */}
      <div className="relative w-full bg-gray-100">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/footer-background.svg"
            alt=""
            fill
            className="opacity-90 object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Footer content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 pb-16 lg:pb-20">
            {/* Footer grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-6">
                  <Image
                    src="/logo.png"
                    alt="TREX"
                    width={140}
                    height={46}
                    className="h-10 w-auto"
                  />
                </div>
                
                <p className="text-[#264065] text-sm lg:text-base mb-6 leading-relaxed">
                To create India's most impactful regional B2B travel Media enterprise, focused on unlocking the potential of Tier 2 and Tier 3 cities.
                </p>
                
                <div className="flex space-x-3 mb-6">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Youtube"
                    target="_blank"
                  >
                    <FaYoutube className="text-white text-base" />
                  </a>
                  <a 
                    href="https://www.instagram.com/trex.events/" 
                    className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <FaInstagram className="text-white text-base" />
                  </a>
                  {/* <a 
                    href="#" 
                    className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-white text-base" />
                  </a> */}
                  <a 
                    href="https://www.linkedin.com/company/trex-eventss/" 
                    className="w-10 h-10 bg-[#264065] hover:bg-[#1a2d47] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-base" />
                  </a>
                </div>
              </div>

              {/* Useful Links Section */}
              <div>
                <h3 className="text-[#264065] text-lg font-semibold mb-4">
                  Useful Links
                </h3>
                <nav>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/about" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/events" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        Events
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/blog" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Legal & Support Section */}
              <div>
                <h3 className="text-[#264065] text-lg font-semibold mb-4">
                  Legal & Support
                </h3>
                <nav>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/contact" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/privacy-policy" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Image
                        src="/assets/tick.svg"
                        alt=""
                        width={14}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <a 
                        href="/terms-of-service" 
                        className="text-[#264065] text-sm lg:text-base hover:text-[#1a2d47] transition-colors duration-200"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Contact Info Section */}
              <div>
                <h3 className="text-[#264065] text-lg font-semibold mb-4">
                  Contact Info
                </h3>
                <address className="not-italic">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-[#264065] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-[#264065] text-sm lg:text-base leading-relaxed">
                      Gera Gardens Condominium
                      7 A/1, Koregaon Park, Pune, Maharashtra 411001
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#264065] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p className="text-[#264065] text-sm lg:text-base">
                        +91 8484839177
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#264065] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <p className="text-[#264065] text-sm lg:text-base break-words">
                        team.netraevents@gmail.com
                      </p>
                    </div>
                  </div>
                </address>
              </div>
            </div>
            
            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-[#264065] text-sm text-center sm:text-left">
                  © {new Date().getFullYear()} TREX Events. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="/privacy-policy" className="text-[#264065] hover:text-[#1a2d47] transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="text-[#264065] hover:text-[#1a2d47] transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="/cookies" className="text-[#264065] hover:text-[#1a2d47] transition-colors duration-200">
                    Cookie Policy
                  </a>
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