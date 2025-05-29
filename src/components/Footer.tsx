import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-10 relative overflow-hidden border-t border-primary/10 dark:border-gray-700/50 transition-colors duration-300">
      <div className="absolute inset-0 blockchain-grid opacity-10 dark:opacity-5"></div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="w-12 h-12 relative mb-4 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
              <svg className="relative w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#footer-gradient)" strokeWidth="1.5" />
                <path d="M7 11L12 6L17 11" stroke="url(#footer-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18V10" stroke="url(#footer-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="footer-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f2fe" />
                    <stop offset="1" stopColor="#7b3fe4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-center font-medium crypto-gradient-text">
              O Poder da Terceira Linha
            </p>
          </div>

          <p className="text-center text-sm mb-4 text-gray-500 dark:text-gray-400">
            Copyright {currentYear} © Léo Hemoso · Todos os direitos Reservados
          </p>

          <div className="flex gap-4 text-xs text-gray-400 dark:text-gray-500 mb-6">
            <Link href="/termos" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/lgpd" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
              LGPD
            </Link>
          </div>

          <div className="py-3 px-5 rounded-full glass-effect text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Atualizado em {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;