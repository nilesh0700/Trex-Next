import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import AboutUs from '../components/AboutUs';
import KeyEventHighlights from '../components/KeyEventHighlights';
import MarketExpansion from '../components/MarketExpansion';
import TestimonialsSection from '../components/TestimonialsSection';
import EventCTA from '../components/EventCTA';
import { getFeaturedEvents, getTestimonials } from '@/lib/strapi';
import LogoMarquee from '@/components/LogoMarquee';
export default async function Home() {
  // Fetch featured events and testimonials data
  const [featuredEventsData, testimonialsData] = await Promise.all([
    getFeaturedEvents(1),
    getTestimonials({ pageSize: 10, sort: "display_order:asc" }) // Fetch all testimonials, not just featured ones
  ]);
  
  const featuredEvent = featuredEventsData.data[0];
  const testimonials = testimonialsData.data;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* <LogoMarquee /> */}
      {/* Statistics Section */}
      <section className="bg-white">
        <Statistics />
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Key Event Highlights Section */}
      <KeyEventHighlights />

      {/* Market Expansion Section */}
      <MarketExpansion />

      {/* Testimonials Section */}
      <TestimonialsSection
        data={{
          title: "What Our Clients Say",
          description: "Hear from industry leaders who have experienced the power of our platform",
          testimonials,
          enabled: true
        }}
      />

      {/* Event CTA Section - Only show if there's a featured event */}
      {featuredEvent && <EventCTA event={featuredEvent} />}
      
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