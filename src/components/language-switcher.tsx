'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip
import { useLanguage, type Language } from '@/contexts/language-context';

const languageLabels: Record<Language, string> = {
  en: 'English',
  pt: 'Português',
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder to prevent layout shift
    return <div className="flex items-center space-x-1"><Button variant="ghost" size="sm" disabled className="w-10 h-9">EN</Button><Button variant="ghost" size="sm" disabled className="w-10 h-9">PT</Button></div>;
  }

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-1 rounded-md bg-muted p-1"> {/* Slightly increased padding */}
      {(['en', 'pt'] as Language[]).map((lang) => (
        <Tooltip key={lang}>
          <TooltipTrigger asChild>
            <Button
              variant={language === lang ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => handleLanguageChange(lang)}
              aria-pressed={language === lang}
              className={`w-10 h-9 transition-all duration-200 ease-in-out ${language === lang ? 'shadow-inner bg-background' : 'hover:bg-accent/80'}`} // Adjusted size, transition, and active/hover styles
            >
              {lang.toUpperCase()}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mudar para {languageLabels[lang]}</p> {/* Adjusted tooltip text */}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
