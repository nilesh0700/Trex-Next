"use client"

import React from 'react';
import { useRegistrationModal } from '@/contexts/RegistrationModalContext';
import RegistrationModal from './RegistrationModal';

const GlobalRegistrationModal: React.FC = () => {
  const { isOpen, closeModal } = useRegistrationModal();
  return <RegistrationModal isOpen={isOpen} onClose={closeModal} />;
};

export default GlobalRegistrationModal; 