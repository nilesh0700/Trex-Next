'use client';

import React from 'react';
import { FaLinkedin, FaWhatsapp, FaLink } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareText = `Check out this article: ${title}`;
  
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={shareOnTwitter}
        className="bg-[#000000] text-white p-3 rounded-lg font-['Poppins'] text-sm hover:bg-[#333333] transition-colors flex items-center justify-center"
        aria-label="Share on X"
      >
        <FaXTwitter size={18} />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="bg-[#0077b5] text-white p-3 rounded-lg font-['Poppins'] text-sm hover:bg-[#006aa1] transition-colors flex items-center justify-center"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin size={18} />
      </button>
      <button
        onClick={shareOnWhatsApp}
        className="bg-[#25d366] text-white p-3 rounded-lg font-['Poppins'] text-sm hover:bg-[#22c55e] transition-colors flex items-center justify-center"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp size={18} />
      </button>
      <button
        onClick={copyToClipboard}
        className="bg-[#6c757d] text-white p-3 rounded-lg font-['Poppins'] text-sm hover:bg-[#5a6268] transition-colors flex items-center justify-center"
        aria-label="Copy link"
      >
        <FaLink size={18} />
      </button>
    </div>
  );
} 