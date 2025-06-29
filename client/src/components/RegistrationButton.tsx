"use client"

import React from 'react';
import { useRegistrationModal } from '@/contexts/RegistrationModalContext';

interface RegistrationButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
  onClick?: (e: React.MouseEvent) => void;
}

const RegistrationButton: React.FC<RegistrationButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick 
}) => {
  const { isOpen, openModal, closeModal } = useRegistrationModal();

  const getButtonStyles = () => {
    // If custom className is provided, don't apply default styles
    if (className && variant === 'primary') {
      return '';
    }
    
    switch (variant) {
      case 'secondary':
        return 'border-2 border-white text-white hover:bg-white hover:text-[#264065] px-8 py-4 rounded-full text-lg font-bold font-["Poppins"] transition-all duration-300';
      case 'link':
        return 'font-medium text-blue-200 hover:text-white transition-colors duration-300';
      default:
        return 'bg-[#C88652] hover:bg-[#b8763f] text-white px-10 py-4 rounded-full text-lg font-bold font-["Poppins"] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl';
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Prevent multiple modals if event was handled
    if (e.defaultPrevented) {
      return;
    }
    
    // Open the registration modal
    openModal();
  };

  return (
    <button
      onClick={handleClick}
      className={`${getButtonStyles()} ${className}`}
    >
      {children}
    </button>
  );
};

export default RegistrationButton; 