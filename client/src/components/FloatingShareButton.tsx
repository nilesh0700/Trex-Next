'use client';

import React, { useState, useEffect } from 'react';
import { FaShareAlt, FaWhatsapp, FaLinkedinIn, FaCopy } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface FloatingShareButtonProps {
  url: string;
  title: string;
  description?: string;
}

export default function FloatingShareButton({ url, title, description }: FloatingShareButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
  const shareText = description || title;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(false);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      color: 'bg-green-500 hover:bg-green-600',
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${fullUrl}`)}`,
      position: { x: 0, y: -70 }, // Straight up - first
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      color: 'bg-black hover:bg-gray-800',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`,
      position: { x: 0, y: -130 }, // Straight up - second
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      position: { x: 0, y: -190 }, // Straight up - third
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        {/* Social Media Links - Straight Up Animation */}
        {shareLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                absolute w-12 h-12 rounded-full ${link.color} text-white flex items-center justify-center
                shadow-lg transition-all duration-500 ease-out
                hover:shadow-2xl
                ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
              style={{
                transform: isExpanded 
                  ? `translate(${link.position.x}px, ${link.position.y}px) scale(1)` 
                  : 'translate(0px, 0px) scale(0.3)',
                transitionDelay: isExpanded ? `${index * 100}ms` : `${(shareLinks.length - index - 1) * 50}ms`,
                top: '50%',
                left: '50%',
                marginTop: '-24px',
                marginLeft: '-24px',
              }}
              title={`Share on ${link.name}`}
              onMouseEnter={handleMouseEnter}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          onMouseEnter={handleMouseEnter}
          className={`
            absolute w-12 h-12 rounded-full bg-slate-600 hover:bg-slate-700 text-white flex items-center justify-center
            shadow-lg transition-all duration-500 ease-out
            hover:shadow-2xl
            ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            ${copied ? 'bg-green-500 hover:bg-green-600' : ''}
          `}
          style={{
            transform: isExpanded 
              ? 'translate(0px, -250px) scale(1)' 
              : 'translate(0px, 0px) scale(0.3)',
            transitionDelay: isExpanded ? `${shareLinks.length * 100}ms` : '0ms',
            top: '50%',
            left: '50%',
            marginTop: '-24px',
            marginLeft: '-24px',
          }}
          title={copied ? 'Link copied!' : 'Copy link'}
        >
          <FaCopy className={`w-4 h-4 transition-transform duration-200 ${copied ? 'scale-110' : ''}`} />
          
          {/* Copied Notification */}
          <div className={`
            absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-lg
            transition-all duration-300 pointer-events-none whitespace-nowrap
            ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            Link copied!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
          </div>
        </button>

        {/* Main Share Button */}
        <button
          className={`
            w-14 h-14 bg-[#264065] hover:bg-[#1a2d47] text-white rounded-full
            shadow-xl hover:shadow-2xl transition-all duration-500 ease-out
            flex items-center justify-center group relative z-10
            transform hover:scale-110 active:scale-95
            ${isExpanded ? 'bg-[#C88652] hover:bg-[#b8763d]' : ''}
          `}
          title="Share this event"
        >
          <FaShareAlt className={`
            w-5 h-5 transition-all duration-300
            group-hover:scale-110
          `} />
        </button>

        {/* Pulsing Ring Animation */}
        <div className={`
          absolute inset-0 rounded-full border-2 border-[#264065]/30
          animate-ping transition-opacity duration-300
          ${isExpanded ? 'opacity-0' : 'opacity-100'}
        `}></div>
      </div>
    </div>
  );
} 