// src/hooks/use-theme.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

function useTheme() {
  // Initialize state based on client-side checks only
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light'; // Default for SSR
    }
    try {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      // Fallback to system preference if no stored theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    } catch (error) {
      console.warn('Could not access localStorage or matchMedia for theme:', error);
      return 'light'; // Fallback theme
    }
  });

  // Effect to apply theme class to HTML element and save to localStorage (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Don't run on server
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn('Could not save theme to localStorage:', error);
    }
  }, [theme]); // Re-run when theme state changes

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
}

export default useTheme;
