"use client"

import React, { createContext, useContext, useState } from 'react';

interface RegistrationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export const RegistrationModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RegistrationModalContext.Provider>
  );
};

export const useRegistrationModal = () => {
  const context = useContext(RegistrationModalContext);
  if (context === undefined) {
    throw new Error('useRegistrationModal must be used within a RegistrationModalProvider');
  }
  return context;
}; 