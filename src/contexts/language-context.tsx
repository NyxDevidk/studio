'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en'); // Default to English

  // Effect to read initial language from localStorage on mount (client-side only)
  useEffect(() => {
    let initialLanguage: Language = 'en'; // Default language
    try {
      const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (storedLanguage === 'pt') {
        initialLanguage = 'pt';
      }
    } catch (error) {
      console.warn('Could not access localStorage for language:', error);
    }
    setLanguageState(initialLanguage); // Set the language state after checking storage
  }, []);

  // Function to update language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    } catch (error) {
      console.warn('Could not save language to localStorage:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
