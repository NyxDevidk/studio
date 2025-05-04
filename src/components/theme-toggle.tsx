'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Use Button for better accessibility and styling
import useTheme from '@/hooks/use-theme';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder button matching the final size to prevent layout shift
    return <Button variant="ghost" size="icon" className="h-10 w-10" disabled />;
  }

  const isDarkMode = theme === 'dark';
  const Icon = isDarkMode ? Sun : Moon;
  const tooltipText = `Mudar para tema ${isDarkMode ? 'claro' : 'escuro'}`; // Adjusted tooltip text

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost" // Use ghost variant for a subtle look
          size="icon" // Standard icon button size
          onClick={toggleTheme}
          aria-label={tooltipText}
          className="h-10 w-10 rounded-full hover:bg-accent/80 transition-all duration-200 ease-in-out" // Ensure it's round, adjusted size and hover
        >
          <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> {/* Adjusted icon size */}
          <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> {/* Adjusted icon size */}
          <span className="sr-only">{tooltipText}</span> {/* Keep for screen readers */}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
