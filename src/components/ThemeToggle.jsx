import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed top-4 left-1/2 transform -translate-x-1/9 z-50 p-2 rounded-full transition-colors duration-300',
        'focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700',
        'sm:top-5' // Slightly larger gap on larger screens
      )}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900 dark:text-blue-300" />
      )}
    </button>
  );
};