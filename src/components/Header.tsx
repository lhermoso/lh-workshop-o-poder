import React from 'react';
import { CTAButton } from './CTAButton';
import { ThemeToggleButton } from './ThemeToggleButton';

export const Header: React.FC = () => {
  return (
    <header className="bg-background/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-primary/10 dark:border-gray-700/50 text-text dark:text-gray-100 py-4 sticky top-0 z-50 transition-colors duration-300">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0 flex items-center">
            <div className="w-8 h-8 relative mr-2 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
              <svg className="relative" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#header-gradient)" strokeWidth="1.5" />
                <path d="M7 11L12 6L17 11" stroke="url(#header-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18V10" stroke="url(#header-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="header-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f2fe" />
                    <stop offset="1" stopColor="#7b3fe4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="crypto-gradient-text">O Poder da</span> <span className="text-text dark:text-gray-200">Terceira Linha</span>
          </h1>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <CTAButton />
          </div>
        </div>
      </div>
    </header>
  );
};
