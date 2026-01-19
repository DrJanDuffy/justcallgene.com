'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function FloatingCTA() {
  // Fallback for browsers without scroll-triggered animation support
  const [isVisible, setIsVisible] = useState(false);
  const supportsScrollTimeline = typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'view()');

  useEffect(() => {
    if (!supportsScrollTimeline) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // CSS handles it, always visible
      setIsVisible(true);
    }
  }, [supportsScrollTimeline]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print scroll-triggered-cta">
      <Link
        href={`tel:${siteConfig.business.phone}`}
        className="group flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={`Call ${siteConfig.business.phoneFormatted}`}
      >
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-semibold text-lg hidden sm:inline">
          {siteConfig.business.phoneFormatted}
        </span>
        <span className="font-semibold text-lg sm:hidden">
          Call Now
        </span>
      </Link>
    </div>
  );
}

