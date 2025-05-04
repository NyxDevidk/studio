'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import useTheme from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or a placeholder on the server and initial client render
    return null;
  }

  const isDarkMode = theme === 'dark';

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 transition-opacity ${isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
      <Switch
        id="theme-toggle-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      />
      <Moon className={`h-5 w-5 transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-50'}`} />
      {/* Hidden label for accessibility */}
      <Label htmlFor="theme-toggle-switch" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}
