import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Statistics Section */}
      <section className="bg-white">
        <Statistics />
      </section>

      {/* About Us Section */}
      <AboutUs />
      
      {/* Future sections can be added here */}
      {/* 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#264065] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your journey with TREX begins here. Explore our features and discover what makes us different.
            </p>
          </div>
        </div>
      </section>
      */}
    </main>
  );
} 