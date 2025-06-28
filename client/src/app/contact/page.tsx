import React from 'react';
import PageHeading from '../../components/PageHeading';
import ContactSection from '../../components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="Contact Us" />
      
      {/* Contact Information & CTA */}
      <ContactSection />
    </main>
  );
} 