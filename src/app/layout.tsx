import type { Metadata } from "next";
import { Inter, Montserrat, Orbitron } from "next/font/google";
import "./globals.css";
import React from 'react';
import { GoogleAnalytics, FacebookPixel, StructuredData } from '@/components/ScriptHead';

// Google Analytics ID - replace with your actual ID in production
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// Facebook Pixel ID - replace with your actual ID in production
const FB_PIXEL_ID = 'XXXXXXXXXX';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

// Adding Orbitron for futuristic crypto headings
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "O Poder da Terceira Linha | Workshop Crypto",
  description: "Aprenda, em detalhes, a estratégia alternativa, pouca explorada do mercado cripto, e que dá ganhos diários entre US$3 a US$25/dia a cada 1.000 dólares investidos.",
  keywords: ["crypto", "workshop", "investimento", "bitcoin", "Léo Hermoso", "terceira linha", "pool de liquidez", "ethereum", "defi", "yield farming", "staking", "blockchain"],
  authors: [{ name: "Léo Hermoso" }],
  openGraph: {
    title: "O Poder da Terceira Linha | Workshop Crypto",
    description: "Estratégia alternativa do mercado cripto com ganhos entre US$3 a US$25/dia a cada 1.000 dólares investidos.",
    images: ["/images/og-image.jpg"],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Poder da Terceira Linha | Workshop Crypto',
    description: 'Estratégia alternativa do mercado cripto com ganhos entre US$3 a US$25/dia a cada 1.000 dólares investidos.',
    images: ['/images/og-image.jpg'],
  },
  metadataBase: new URL('https://workshop.leohermoso.com.br'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} ${orbitron.variable}`}>
      <head>
        <GoogleAnalytics id={GA_MEASUREMENT_ID} />
        <FacebookPixel id={FB_PIXEL_ID} />
        <StructuredData />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/workshop-crypto.png" as="image" />
        <link rel="preload" href="/images/leo-hermoso.png" as="image" />
        <link rel="preload" href="/images/crypto-pattern.svg" as="image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Meta tags for crypto audience */}
        <meta name="theme-color" content="#0f1221" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
