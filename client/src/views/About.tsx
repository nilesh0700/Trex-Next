import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#264065] mb-6">
            About TREX
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission to connect regional markets with national potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#264065] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To create India's most impactful regional B2B travel Media enterprise, 
              focused on unlocking the potential of Tier 2 and Tier 3 cities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in connecting businesses across India, bridging the gap between 
              regional markets and national opportunities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#264065] mb-4">
              Why Choose TREX?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#264065] mr-2">•</span>
                Pan-India reach with 150+ exhibitors
              </li>
              <li className="flex items-start">
                <span className="text-[#264065] mr-2">•</span>
                500+ verified B2B buyers network
              </li>
              <li className="flex items-start">
                <span className="text-[#264065] mr-2">•</span>
                100% cities coverage across India
              </li>
              <li className="flex items-start">
                <span className="text-[#264065] mr-2">•</span>
                98% happy exhibitor satisfaction rate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 