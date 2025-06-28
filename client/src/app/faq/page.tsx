import React from 'react';
import PageHeading from '../../components/PageHeading';
import FAQ from '../../components/FAQ';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Page Heading */}
      <PageHeading heading="Frequently Asked Questions" />
      
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
} 