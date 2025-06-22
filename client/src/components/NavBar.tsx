'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-14 sm:h-16 lg:h-20 bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-28 h-8 sm:w-32 sm:h-9 lg:w-40 lg:h-11 relative">
              {/* Replace with your actual logo */}
              <Image 
                src="/logo.png" 
                alt="logo" 
                width={160} 
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link 
              href="/" 
              className="font-['Poppins'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-['Poppins'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/events" 
              className="font-['Poppins'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
            >
              Events
            </Link>
            <Link 
              href="/blog" 
              className="font-['Poppins'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className="font-['Poppins'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
            >
              Contact
            </Link>
            {/* <div className="relative group">
              <button className="flex items-center font-['Nunito_Sans'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] transition-colors duration-200">
                More
                <svg 
                  className="ml-1 w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Search and Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Search Icon */}
            <button className="w-6 h-6 lg:w-7 lg:h-7 text-[#264065] hover:text-[#1a2d47] transition-colors duration-200">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign In */}
            <Link 
              href="/signin" 
              className="px-3 py-1.5 font-['Nunito_Sans'] text-sm lg:text-base font-medium text-[#264065] hover:text-[#1a2d47] underline transition-colors duration-200"
            >
              Sign In
            </Link>

            {/* Sign Up */}
            <Link 
              href="/signup" 
              className="px-4 py-2 lg:px-5 lg:py-2.5 bg-[#264065] text-white font-['Poppins'] text-sm lg:text-base font-medium rounded-2xl lg:rounded-3xl hover:bg-[#1a2d47] transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-[#264065] hover:text-[#1a2d47] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block font-['Poppins'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block font-['Poppins'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block font-['Poppins'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/facilities" 
                className="block font-['Poppins'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <button className="block font-['Nunito_Sans'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] py-2 text-left">
                More
              </button>
              
              <div className="border-t pt-4 space-y-4">
                <Link 
                  href="/signin" 
                  className="block font-['Nunito_Sans'] text-[18px] font-normal text-[#264065] hover:text-[#1a2d47] underline py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-fit px-6 py-3 bg-[#264065] text-white font-['Poppins'] text-[18px] font-normal rounded-[32px] hover:bg-[#1a2d47] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 