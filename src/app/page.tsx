"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfilesSection } from '@/components/ProfilesSection';
import { WorkshopContent } from '@/components/WorkshopContent';
import { WorkshopDetails } from '@/components/WorkshopDetails';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  // Analytics and optimization setup
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track conversion events
    const setupConversionTracking = () => {
      const ctaButtons = document.querySelectorAll('.btn-cta');
      ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'cta_click', {
              event_category: 'engagement',
              event_label: 'CTA Button Click',
            });
          }
        });
      });
    };

    // Optimize load speed
    const lazyLoadImages = () => {
      if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              const src = img.getAttribute('data-src');
              if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                imgObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imgObserver.observe(img);
        });
      }
    };

    trackPageView();
    setupConversionTracking();
    lazyLoadImages();

    // Exit intent detection for conversion optimization
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY < 50 && !localStorage.getItem('exitShown')) {
        // Would show exit popup in production
        localStorage.setItem('exitShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);

  return (
    <main className="antialiased">
      <Header />
      <Hero />
      <ProfilesSection />
      <WorkshopContent />
      <WorkshopDetails />
      <GuaranteeSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
