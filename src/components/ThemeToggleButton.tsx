"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Using Heroicons for modern icons

export const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
                <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
        </button>
    );
}; 