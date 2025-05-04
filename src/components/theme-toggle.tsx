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
    return <Button variant="ghost" size="icon" className="h-9 w-9" disabled />;
  }

  const isDarkMode = theme === 'dark';
  const Icon = isDarkMode ? Sun : Moon;
  const tooltipText = `Switch to ${isDarkMode ? 'light' : 'dark'} mode`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost" // Use ghost variant for a subtle look
          size="icon" // Standard icon button size
          onClick={toggleTheme}
          aria-label={tooltipText}
          className="h-9 w-9 rounded-full" // Ensure it's round
        >
          <Icon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out rotate-0 scale-100 hover:rotate-12 dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">{tooltipText}</span> {/* Keep for screen readers */}
           {/* Second icon for smooth transition */}
          <Icon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
