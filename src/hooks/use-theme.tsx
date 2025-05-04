// src/hooks/use-theme.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light'); // Default to light initially

  // Effect to read initial theme from localStorage and system preference on mount (client-side only)
  useEffect(() => {
    let initialTheme: Theme = 'light'; // Default theme
    try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (storedTheme === 'dark' || storedTheme === 'light') {
            initialTheme = storedTheme;
        } else {
            // Fallback to system preference if no stored theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            initialTheme = prefersDark ? 'dark' : 'light';
        }
    } catch (error) {
        console.warn('Could not access localStorage for theme:', error);
        // Fallback to system preference if localStorage fails
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        initialTheme = prefersDark ? 'dark' : 'light';
    }
    setThemeState(initialTheme); // Set the theme state after checking storage/system
  }, []);

  // Effect to apply theme class to HTML element and save to localStorage
  useEffect(() => {
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
