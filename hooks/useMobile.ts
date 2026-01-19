/**
 * Custom hook to detect mobile devices and screen sizes
 */

'use client';

import { useState, useEffect } from 'react';

export interface Breakpoint {
  sm: number; // 640px
  md: number; // 768px
  lg: number; // 1024px
  xl: number; // 1280px
  '2xl': number; // 1536px
}

export const breakpoints: Breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useMobile(breakpoint: keyof Breakpoint = 'md') {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < breakpoints[breakpoint]);
    };

    // Check initial size
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return { isMobile, windowWidth };
}

/**
 * Hook to get current breakpoint
 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<keyof Breakpoint>('sm');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= breakpoints['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setBreakpoint('md');
      } else {
        setBreakpoint('sm');
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return breakpoint;
}
