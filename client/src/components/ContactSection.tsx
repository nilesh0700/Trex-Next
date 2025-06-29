'use client'

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Company office information
  const officeInfo = {
    address: "4-12-872, Sandesh Nagar, Vishalnagar, Nyay Nagar, Chhatrapati Sambhajinagar, Maharashtra 431001",
    phone: "+91 98113 30099",
    email: "team@trexevents.in",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM IST"
  };

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.5189082644324!2d75.35199565257594!3d19.869443282958947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba28584d492d1%3A0x4933039b70e84bf3!2s4-12-872%2C%20Sandesh%20Nagar%2C%20Vishalnagar%2C%20Nyay%20Nagar%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431001!5e0!3m2!1sen!2sin!4v1751094298107!5m2!1sen!2sin";

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#264065] mb-6 font-['Poppins']">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto leading-relaxed mb-4">
            Ready to expand your travel business? Connect with industry leaders at TREx events.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Visit Our Office</h3>
            <p className="text-blue-200 font-['Poppins'] text-sm leading-relaxed">{officeInfo.address}</p>
          </div>

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-[#C88652] to-[#b8763f] rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#264065] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Call Us</h3>
            <p className="text-orange-100 font-['Poppins']">{officeInfo.phone}</p>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#C88652] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-['Poppins']">Email Us</h3>
            <p className="text-gray-300 font-['Poppins']">{officeInfo.email}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#264065] font-['Poppins'] mb-4">
                Send us a Message
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#264065] font-['Poppins'] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#264065] focus:border-transparent transition-all duration-300 font-['Poppins']"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#264065] font-['Poppins'] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#264065] focus:border-transparent transition-all duration-300 font-['Poppins']"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#264065] font-['Poppins'] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#264065] focus:border-transparent transition-all duration-300 font-['Poppins']"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="exhibitor">Exhibitor Information</option>
                  <option value="visitor">Visitor Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#264065] font-['Poppins'] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#264065] focus:border-transparent transition-all duration-300 font-['Poppins'] resize-vertical"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#264065] to-[#1a2d47] hover:from-[#1a2d47] hover:to-[#264065] text-white px-8 py-4 rounded-xl font-semibold text-lg font-['Poppins'] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Business Information */}
          <div className="space-y-8">
            
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins'] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Business Hours & Response Times
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-['Poppins'] text-gray-600">Monday - Friday</span>
                  <span className="font-['Poppins'] font-semibold text-[#264065]">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-['Poppins'] text-gray-600">Saturday</span>
                  <span className="font-['Poppins'] font-semibold text-[#264065]">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-['Poppins'] text-gray-600">Sunday</span>
                  <span className="font-['Poppins'] font-semibold text-gray-500">Closed</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl mt-4">
                  <p className="text-sm font-['Poppins'] text-gray-600">
                    <span className="font-semibold text-[#264065]">Response Time:</span> We typically respond to emails within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins'] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Direct Team Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-[#264065] font-['Poppins']">Siddharth Jain</h4>
                    <p className="text-sm text-gray-600 font-['Poppins']">Director</p>
                  </div>
                  <a
                    href="tel:+919811330099"
                    className="text-[#C88652] hover:text-[#b8763f] font-semibold font-['Poppins'] transition-colors duration-300"
                  >
                    +91 9811330099
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-[#264065] font-['Poppins']">Mehboob Shaikh</h4>
                    <p className="text-sm text-gray-600 font-['Poppins']">Operations Head</p>
                  </div>
                  <a
                    href="tel:+919850080120"
                    className="text-[#C88652] hover:text-[#b8763f] font-semibold font-['Poppins'] transition-colors duration-300"
                  >
                    +91 9850080120
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-[#264065] font-['Poppins']">Krishna Gopalan</h4>
                    <p className="text-sm text-gray-600 font-['Poppins']">Business Development</p>
                  </div>
                  <a
                    href="tel:+919822030908"
                    className="text-[#C88652] hover:text-[#b8763f] font-semibold font-['Poppins'] transition-colors duration-300"
                  >
                    +91 9822030908
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Google Maps Section - Same as Event Page */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#264065] to-[#1a2d47] p-6 text-white">
            <h3 className="text-2xl font-bold font-['Poppins'] flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Find Our Office
            </h3>
            <p className="text-blue-200 mt-2 font-['Poppins']">
              Get directions to our office and explore the surrounding area
            </p>
          </div>
          
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-100">
            <iframe
              src={googleMapsEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TREx Office Location Map"
            />
          </div>

          {/* Map Footer with Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#264065] font-['Poppins'] mb-1">Need Directions?</h4>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  Click the map to open in Google Maps for turn-by-turn navigation
                </p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={googleMapsEmbedUrl.replace('/embed?', '/dir/?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#264065] hover:bg-[#1a2d47] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Poppins']"
                >
                  Get Directions
                </a>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(officeInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C88652] hover:bg-[#b8763f] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-['Poppins']"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        {/* <div className="mt-12 bg-gradient-to-r from-[#FAF8F5] to-[#F5F3F0] rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#264065] mb-4 font-['Poppins']">
              Ready to Connect?
            </h3>
            <p className="text-gray-600 mb-6 font-['Poppins'] max-w-3xl mx-auto">
              Whether you're looking to exhibit, visit, or partner with us, we're here to help you succeed in the travel industry. 
              Reach out today and let's discuss how TREx can accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${officeInfo.phone}`}
                className="bg-[#264065] hover:bg-[#1a2d47] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-['Poppins'] min-w-[200px]"
              >
                Call Us Now
              </a>
              
              <a
                href={`mailto:${officeInfo.email}?subject=Business Inquiry - TREx Events`}
                className="bg-white border-2 border-[#264065] text-[#264065] hover:bg-[#264065] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-['Poppins']"
              >
                Send Email
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 