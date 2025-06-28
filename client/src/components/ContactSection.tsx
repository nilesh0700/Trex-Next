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

  const handleEmailClick = () => {
    window.location.href = 'mailto:team@trexevents.in?subject=Inquiry about TREx&body=Hello, I would like to know more about TREx Travel Relations & Exhibitions.';
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Speak directly with our team",
      details: "+91 98113XXXXX",
      action: "Call Now",
      href: "tel:+919811330099"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email Support",
      description: "Send us a detailed message",
      details: "team@trexevents.in",
      action: "Send Email",
      href: "mailto:team@trexevents.in"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Live Chat",
      description: "Chat with our support team",
      details: "Available 9 AM - 6 PM IST",
      action: "Start Chat",
      href: "#chat"
    }
  ];

  const teamMembers = [
    { name: "Siddharth Jain", role: "Director", phone: "+91 9811330099" },
    { name: "Mehboob Shaikh", role: "Operations Head", phone: "+91 9850080120" },
    { name: "Krishna Gopalan", role: "Business Development", phone: "+91 9822030908" }
  ];

  const faqs = [
    {
      question: "What types of events does TREx organize?",
      answer: "TREx specializes in travel exhibitions, business matchmaking events, and travel trade shows that connect buyers and sellers in the travel industry."
    },
    {
      question: "How can I participate as an exhibitor?",
      answer: "You can register as an exhibitor through our website or contact our sales team directly. We offer various package options to suit different business needs."
    },
    {
      question: "What are the benefits of attending TREx events?",
      answer: "Our events provide networking opportunities, business matchmaking, market expansion possibilities, and access to verified decision-makers in the travel industry."
    },
    {
      question: "Do you provide post-event support?",
      answer: "Yes, we offer comprehensive post-event support including follow-up assistance, lead management, and ongoing marketing support to help maximize your ROI."
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#264065] font-['Poppins'] mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto leading-relaxed">
            Have questions about TREx events? Need support with your participation? 
            Our team is here to help you make the most of your travel industry connections.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#264065] to-[#1a2d47] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins'] mb-3 text-center">
                {method.title}
              </h3>
              <p className="text-gray-600 font-['Poppins'] mb-4 text-center">
                {method.description}
              </p>
              <p className="text-[#C88652] font-semibold font-['Poppins'] mb-6 text-center">
                {method.details}
              </p>
              <div className="text-center">
                <a
                  href={method.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#264065] to-[#1a2d47] text-white font-semibold font-['Poppins'] rounded-xl hover:from-[#1a2d47] hover:to-[#264065] transition-all duration-300 transform hover:scale-105"
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
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

          {/* Contact Information & FAQ */}
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
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-[#264065] font-['Poppins']">{member.name}</h4>
                      <p className="text-sm text-gray-600 font-['Poppins']">{member.role}</p>
                    </div>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-[#C88652] hover:text-[#b8763f] font-semibold font-['Poppins'] transition-colors duration-300"
                    >
                      {member.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Links */}
            {/* <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-[#264065] font-['Poppins'] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#C88652]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                Connect With Us
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://linkedin.com/company/trex-events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-[#0077B5] text-white rounded-xl hover:bg-[#005582] transition-colors duration-300 font-['Poppins'] font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:team@trexevents.in"
                    className="flex items-center justify-center px-4 py-3 bg-[#C88652] text-white rounded-xl hover:bg-[#b8763f] transition-colors duration-300 font-['Poppins'] font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email
                  </a>
                </div>
                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 font-['Poppins'] mb-2">Website:</p>
                  <a
                    href="https://www.trexevents.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#264065] hover:text-[#C88652] font-semibold font-['Poppins'] transition-colors duration-300"
                  >
                    www.trexevents.com
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#264065] font-['Poppins'] mb-4">
              Visit Our Office
            </h3>
            <p className="text-lg text-gray-600 font-['Poppins'] max-w-2xl mx-auto">
              Come meet us in person! Our team is ready to discuss your travel exhibition needs face-to-face.
            </p>
          </div>

          {/* Google Map - Full Viewport Width */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white p-4 shadow-xl border border-gray-100">
            <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.5189082644324!2d75.35199565257594!3d19.869443282958947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba28584d492d1%3A0x4933039b70e84bf3!2s4-12-872%2C%20Sandesh%20Nagar%2C%20Vishalnagar%2C%20Nyay%20Nagar%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431001!5e0!3m2!1sen!2sin!4v1751094298107!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '80vh' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
              
              {/* Map Overlay Info */}
              {/* <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-gray-200">
                <h5 className="font-bold text-[#264065] font-['Poppins'] mb-2">TREx Office</h5>
                <p className="text-sm text-gray-600 font-['Poppins']">
                  Business Hub, Sector 18<br />
                  Gurugram, Haryana
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-semibold font-['Poppins']">Currently Open</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#264065] font-['Poppins'] mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 font-['Poppins'] max-w-2xl mx-auto">
              Quick answers to common questions about TREx events and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-[#264065] font-['Poppins'] mb-4">
                  {faq.question}
                </h4>
                <p className="text-gray-600 font-['Poppins'] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-['Poppins'] mb-6">
              Don't see your question here? We're happy to help!
            </p>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C88652] to-[#b8763f] hover:from-[#b8763f] hover:to-[#C88652] text-white font-semibold font-['Poppins'] rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Ask Your Question
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
} 