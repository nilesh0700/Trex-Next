import React from 'react';

interface PageHeadingProps {
  heading: string;
}

export default function PageHeading({ heading }: PageHeadingProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
          {heading}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
      </div>
    </div>
  );
} 