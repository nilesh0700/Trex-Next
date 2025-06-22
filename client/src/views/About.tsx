import React from 'react';
import PageHeading from '../components/PageHeading';
import AboutUs from '@/components/AboutUs';
import Teams from '@/components/Teams';

export default function About() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="About Us" />
      
      <AboutUs showLearnMore={false} />
      
      <Teams />
    </main>
  );
} 