"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { getEventActionConfig, shouldShowRegistration } from '@/utils/eventUtils';
import RegistrationButton from './RegistrationButton';

interface SmartEventButtonProps {
  eventDate: string;
  eventSlug: string;
  registrationLink?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'card' | 'hero' | 'pricing';
  showSecondaryAction?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customText?: string;
  forceDisabled?: boolean;
  eventStatus?: 'upcoming' | 'live' | 'completed';
}

const SmartEventButton: React.FC<SmartEventButtonProps> = ({
  eventDate,
  eventSlug,
  registrationLink,
  className = '',
  variant = 'primary',
  showSecondaryAction = false,
  size = 'md',
  customText,
  forceDisabled = false,
  eventStatus
}) => {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const actionConfig = getEventActionConfig(eventDate, eventStatus);
  const showRegistration = shouldShowRegistration(eventDate, eventStatus);

  const handlePrimaryAction = (e?: React.MouseEvent) => {
    // Prevent event propagation to avoid multiple modals
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Don't handle action if disabled
    if (forceDisabled || (variant === 'pricing' && actionConfig.state !== 'upcoming')) {
      return;
    }

    // For pricing variant, don't handle here - let RegistrationButton handle it
    if (variant === 'pricing') {
      return;
    }

    switch (actionConfig.primaryAction.variant) {
      case 'register':
        // This will be handled by RegistrationButton component
        break;
      case 'live':
        if (registrationLink) {
          window.open(registrationLink, '_blank');
        }
        break;
      case 'archive':
        // Navigate to event highlights/summary page
        window.location.href = `/events/${eventSlug}#highlights`;
        break;
    }
  };

  const handleSecondaryAction = () => {
    switch (actionConfig.secondaryAction?.variant) {
      case 'details':
        window.location.href = `/events/${eventSlug}`;
        break;
      case 'notify':
        setIsNotifyModalOpen(true);
        break;
      case 'download':
        // Handle download action
        break;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-5 py-2.5 text-sm';
      case 'md':
        return 'px-6 py-3.5 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3.5 text-base';
    }
  };

  const getButtonStyles = (isPrimary: boolean = true) => {
    const sizeClasses = getSizeClasses();
    const variantStyles = getVariantStyles();
    const isDisabled = forceDisabled || (variant === 'pricing' && actionConfig.state !== 'upcoming');
    
    const baseStyles = `
      relative overflow-hidden font-semibold font-['Poppins'] 
      transition-all duration-500 ease-out
      focus:outline-none focus:ring-4 focus:ring-offset-2
      disabled:opacity-60 disabled:cursor-not-allowed
      group inline-flex items-center justify-center
      border border-transparent
      shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
      active:shadow-[0_2px_10px_rgba(0,0,0,0.1)]
      before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-15
      transform hover:scale-[1.02] active:scale-[0.98]
      backdrop-blur-sm
      ${isDisabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}
    `;

    // Special handling for pricing variant
    if (variant === 'pricing') {
      if (actionConfig.state === 'upcoming') {
        return `
          ${baseStyles} ${sizeClasses} ${variantStyles}
          bg-gradient-to-r from-[#C88652] via-[#d4925a] to-[#C88652] 
          hover:from-[#b8753d] hover:via-[#c2854f] hover:to-[#b8753d]
          text-white rounded-xl
          focus:ring-[#C88652]/40 focus:ring-offset-2
          before:from-white before:to-white
          shadow-[0_4px_20px_rgba(200,134,82,0.25)] hover:shadow-[0_8px_30px_rgba(200,134,82,0.35)]
          border border-[#C88652]/20 hover:border-[#C88652]/30
        `;
      } else {
        return `
          ${baseStyles} ${sizeClasses} ${variantStyles}
          bg-gradient-to-r from-slate-100 to-slate-200 
          border-slate-300 text-slate-500 rounded-xl
          cursor-not-allowed
          shadow-[0_2px_10px_rgba(148,163,184,0.2)]
        `;
      }
    }
    
    if (actionConfig.state === 'upcoming' && isPrimary) {
      return `
        ${baseStyles} ${sizeClasses} ${variantStyles}
        bg-gradient-to-r from-[#C88652] via-[#d4925a] to-[#C88652] 
        hover:from-[#b8753d] hover:via-[#c2854f] hover:to-[#b8753d]
        text-white ${variant === 'hero' ? 'rounded-2xl' : 'rounded-xl'}
        focus:ring-[#C88652]/40 focus:ring-offset-2
        before:from-white before:to-white
        shadow-[0_4px_20px_rgba(200,134,82,0.25)] hover:shadow-[0_8px_30px_rgba(200,134,82,0.35)]
        border border-[#C88652]/20 hover:border-[#C88652]/30
        ${variant === 'hero' ? 'shadow-[0_8px_40px_rgba(200,134,82,0.3)]' : ''}
      `;
    } else if (actionConfig.state === 'live' && isPrimary) {
      return `
        ${baseStyles} ${sizeClasses} ${variantStyles}
        bg-gradient-to-r from-red-500 via-red-600 to-red-500
        hover:from-red-600 hover:via-red-700 hover:to-red-600
        text-white ${variant === 'hero' ? 'rounded-2xl' : 'rounded-xl'}
        focus:ring-red-500/40 focus:ring-offset-2
        before:from-white before:to-white
        shadow-[0_4px_20px_rgba(239,68,68,0.25)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.35)]
        border border-red-500/20 hover:border-red-500/30
        animate-pulse ${variant === 'hero' ? 'shadow-[0_8px_40px_rgba(239,68,68,0.3)]' : ''}
      `;
    } else if (actionConfig.state === 'completed' && isPrimary) {
      return `
        ${baseStyles} ${sizeClasses} ${variantStyles}
        bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600
        hover:from-slate-700 hover:via-slate-800 hover:to-slate-700
        text-white ${variant === 'hero' ? 'rounded-2xl' : 'rounded-xl'}
        focus:ring-slate-600/40 focus:ring-offset-2
        before:from-white before:to-white
        shadow-[0_4px_20px_rgba(71,85,105,0.25)] hover:shadow-[0_8px_30px_rgba(71,85,105,0.35)]
        border border-slate-600/20 hover:border-slate-600/30
        ${variant === 'hero' ? 'shadow-[0_8px_40px_rgba(71,85,105,0.3)]' : ''}
      `;
    } else {
      return `
        ${baseStyles} ${sizeClasses} ${variantStyles}
        bg-white border-slate-300 
        hover:bg-slate-50 hover:border-slate-400
        text-slate-700 hover:text-slate-900 
        ${variant === 'hero' ? 'rounded-2xl' : 'rounded-xl'}
        focus:ring-slate-500/40 focus:ring-offset-2
        before:from-slate-900 before:to-slate-900
        shadow-[0_4px_20px_rgba(148,163,184,0.15)] hover:shadow-[0_8px_30px_rgba(148,163,184,0.25)]
        ${variant === 'hero' ? 'shadow-[0_8px_40px_rgba(148,163,184,0.2)]' : ''}
      `;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'backdrop-blur-sm border-white/20';
      case 'card':
        return 'w-full justify-center';
      case 'pricing':
        return 'w-full justify-center';
      case 'primary':
      case 'secondary':
      default:
        return '';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-5 h-5';
      case 'lg': return 'w-6 h-6';
      case 'xl': return 'w-7 h-7';
      default: return 'w-5 h-5';
    }
  };

  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    const iconSize = getIconSize();
    const iconProps = {
      className: `${iconSize} transition-all duration-300 group-hover:scale-110 group-hover:rotate-1`,
      fill: "currentColor",
      viewBox: "0 0 24 24"
    };

    switch (iconName) {
      case 'user-plus':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            <path d="M17.5 8.5a.5.5 0 00-1 0V10H15a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V11H19a.5.5 0 000-1h-1.5V8.5z" />
          </svg>
        );
      case 'play':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        );
      case 'document':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'bell':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'arrow-right':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'eye':
        return (
          <svg {...iconProps} viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`${variant === 'card' ? 'w-full' : 'flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'} ${variant === 'card' ? '' : className}`}>
        {/* Primary Action */}
        {(variant === 'pricing' && actionConfig.state === 'upcoming') || (showRegistration && actionConfig.primaryAction.variant === 'register' && variant !== 'pricing') ? (
          <RegistrationButton className={variant === 'card' ? `${getButtonStyles(true)} ${className}` : getButtonStyles(true)}>
            <span className="font-medium tracking-wide">
              {customText || (variant === 'pricing' ? 'Enquire' : actionConfig.primaryAction.text)}
            </span>
          </RegistrationButton>
        ) : (
          <button
            onClick={handlePrimaryAction}
            className={variant === 'card' ? `${getButtonStyles(true)} ${className}` : getButtonStyles(true)}
            disabled={forceDisabled || (variant === 'pricing' && actionConfig.state !== 'upcoming')}
          >
            <span className="font-medium tracking-wide">
              {customText || (variant === 'pricing' ? 'Enquire' : actionConfig.primaryAction.text)}
            </span>
          </button>
        )}

        {/* Secondary Action */}
        {showSecondaryAction && actionConfig.secondaryAction && (
          <button
            onClick={handleSecondaryAction}
            className={getButtonStyles(false)}
          >
            <span className="font-medium tracking-wide">
              {actionConfig.secondaryAction.text}
            </span>
          </button>
        )}
      </div>

      {/* Premium Professional Notification Modal */}
      {isNotifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-lg"
            onClick={() => setIsNotifyModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] max-w-lg w-full mx-4 overflow-hidden border border-slate-200/50">
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 px-8 py-8 border-b border-slate-200/60">
              <button
                onClick={() => setIsNotifyModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-all duration-200 p-2 rounded-xl hover:bg-slate-100 group"
              >
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C88652] via-[#d4925a] to-[#C88652] rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(200,134,82,0.3)] border border-[#C88652]/20">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#264065] font-['Poppins'] mb-1">Stay Updated</h3>
                  <p className="text-sm text-slate-600 font-['Poppins'] font-medium">Get notified about similar premium events</p>
                </div>
              </div>
            </div>
            
            {/* Premium Content */}
            <div className="px-8 py-8 bg-gradient-to-b from-white to-slate-50/30">
              <p className="text-slate-700 mb-8 leading-relaxed font-['Poppins'] text-[15px]">
                Join our exclusive network and receive priority invitations to upcoming events, early-bird pricing, and VIP access to premium networking opportunities.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-3 font-['Poppins']">
                    Professional Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#C88652]/20 focus:border-[#C88652] transition-all duration-300 font-['Poppins'] text-slate-900 placeholder-slate-500 text-[15px] shadow-sm hover:shadow-md bg-white"
                  />
                </div>
                
                <div className="flex items-center gap-3 text-sm text-slate-600 bg-green-50 p-4 rounded-xl border border-green-200/60">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['Poppins'] font-medium text-green-700">Premium notifications only • Unsubscribe anytime</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#C88652] via-[#d4925a] to-[#C88652] hover:from-[#b8753d] hover:via-[#c2854f] hover:to-[#b8753d] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(200,134,82,0.25)] hover:shadow-[0_8px_30px_rgba(200,134,82,0.35)] transform hover:scale-[1.02] font-['Poppins'] text-[15px] tracking-wide border border-[#C88652]/20">
                  Get Premium Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartEventButton; 