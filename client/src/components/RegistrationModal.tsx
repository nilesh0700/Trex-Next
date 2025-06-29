"use client"

import React, { useEffect, useState } from 'react';
import { getRegistrationConfig, RegistrationConfig } from '@/lib/strapi';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<RegistrationConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const registrationConfig = await getRegistrationConfig();
        setConfig(registrationConfig);
      } catch (error) {
        console.error('Error fetching registration config:', error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchConfig();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSellerRegistration = () => {
    if (config?.sellerRegistrationUrl) {
      window.open(config.sellerRegistrationUrl, '_blank');
      onClose();
    }
  };

  const handleBuyerRegistration = () => {
    if (config?.buyerRegistrationUrl) {
      window.open(config.buyerRegistrationUrl, '_blank');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium Backdrop with subtle blur */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full transform transition-all duration-500 scale-100 border border-slate-200/50">
        {/* Subtle top accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#264065] to-[#C88652] rounded-b-full"></div>
        
        {/* Close Button - Minimalist */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 group"
        >
          <svg className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {loading ? (
          <div className="px-8 py-16 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-6">
              <div className="animate-spin w-6 h-6 border-2 border-slate-300 border-t-[#264065] rounded-full"></div>
            </div>
            <p className="text-slate-600 font-medium">Loading registration options...</p>
          </div>
        ) : config ? (
          <div className="px-8 py-10">
            {/* Header Section */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {config.modalTitle}
              </h2>
              {config.modalDescription && (
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {config.modalDescription}
                </p>
              )}
            </div>

            {/* Registration Options */}
            <div className="space-y-4 mb-8">
              {/* Seller Registration */}
              <button
                onClick={handleSellerRegistration}
                onMouseEnter={() => setHoveredOption('seller')}
                onMouseLeave={() => setHoveredOption(null)}
                className={`group relative w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  hoveredOption === 'seller' 
                    ? 'border-[#264065] bg-[#264065]/5 shadow-lg shadow-[#264065]/10' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                      hoveredOption === 'seller' ? 'text-[#264065]' : 'text-slate-900'
                    }`}>
                      {config.sellerRegistrationText}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Join as an exhibitor and showcase your products to qualified buyers across India's emerging markets.
                    </p>
                  </div>
                  <div className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    hoveredOption === 'seller' 
                      ? 'border-[#264065] bg-[#264065]' 
                      : 'border-slate-300 group-hover:border-slate-400'
                  }`}>
                    <svg 
                      className={`w-3 h-3 text-white transition-all duration-200 ${
                        hoveredOption === 'seller' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Buyer Registration */}
              <button
                onClick={handleBuyerRegistration}
                onMouseEnter={() => setHoveredOption('buyer')}
                onMouseLeave={() => setHoveredOption(null)}
                className={`group relative w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  hoveredOption === 'buyer' 
                    ? 'border-[#C88652] bg-[#C88652]/5 shadow-lg shadow-[#C88652]/10' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                      hoveredOption === 'buyer' ? 'text-[#C88652]' : 'text-slate-900'
                    }`}>
                      {config.buyerRegistrationText}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Register as a buyer to discover new products and connect with leading travel industry suppliers.
                    </p>
                  </div>
                  <div className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    hoveredOption === 'buyer' 
                      ? 'border-[#C88652] bg-[#C88652]' 
                      : 'border-slate-300 group-hover:border-slate-400'
                  }`}>
                    <svg 
                      className={`w-3 h-3 text-white transition-all duration-200 ${
                        hoveredOption === 'buyer' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed">
                Secure registration powered by TREX Events Platform
              </p>
            </div>
          </div>
        ) : (
          <div className="px-8 py-16 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Service Temporarily Unavailable
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Registration options are currently unavailable. Please try again in a few moments.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal; 