import React from 'react';
import PageHeading from '../components/PageHeading';
import AboutUsDetailed from '@/components/AboutUsDetailed';
import Teams from '@/components/Teams';

export default function About() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="About Us" />
      
      <AboutUsDetailed />
      
      <Teams />
    </main>
  );
} 