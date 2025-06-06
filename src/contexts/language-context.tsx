
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AppTranslations, Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface LanguageContextType {
  language: Locale;
  setLanguage: Dispatch<SetStateAction<Locale>>;
  t: AppTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('vn'); // Default to Vietnamese
  // The 'mounted' state can be used for client-side specific effects,
  // like loading language from localStorage, but the provider itself must always render.
  // const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // setMounted(true); // No longer strictly needed for the provider to function
    // Example: Load saved language from localStorage
    // const savedLanguage = localStorage.getItem('language') as Locale | null;
    // if (savedLanguage && translations[savedLanguage]) {
    //   setLanguage(savedLanguage);
    // }
  }, []);

  const currentTranslations = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
