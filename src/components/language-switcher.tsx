'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from '@/contexts/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or a placeholder on the server and initial client render
    return <div className="w-16 h-8" />; // Placeholder size
  }

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </Button>
      <Button
        variant={language === 'pt' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('pt')}
        aria-pressed={language === 'pt'}
      >
        PT
      </Button>
    </div>
  );
}
