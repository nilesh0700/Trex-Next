import React from 'react';

interface PageHeadingProps {
  heading: string;
}

export default function PageHeading({ heading }: PageHeadingProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
      <div className="bg-[#264065] text-white px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-2xl h-[25vh] flex items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-left">
          {heading}
        </h1>
      </div>
    </div>
  );
} 