'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<string>>(new Set());
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  const navItems = [
    {
      id: 'probate-realtor',
      label: 'Probate Realtor',
      href: '/probate',
    },
    {
      id: 'probate-services',
      label: 'Probate Services',
      href: '#',
      dropdown: [
        { label: 'Probate Property Valuation', href: '/sellers/valuation' },
        { label: 'Probate Process Guide', href: '/probate' },
      ],
    },
    {
      id: 'communities',
      label: 'Communities',
      href: '#',
      dropdown: [
        { label: 'Newport Beach', href: '/communities/newport-beach' },
        { label: 'Irvine', href: '/communities/irvine' },
        { label: 'Corona Del Mar', href: '/communities/corona-del-mar' },
        { label: 'Laguna Beach', href: '/communities/laguna-beach' },
        { label: 'Costa Mesa', href: '/communities/costa-mesa' },
        { label: 'Huntington Beach', href: '/communities/huntington-beach' },
      ],
    },
    {
      id: 'media',
      label: 'Media',
      href: '#',
      dropdown: [
        { label: 'Probate Videos', href: '/media/videos' },
        { label: 'Market Updates', href: '/media/market-updates' },
      ],
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
    },
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openDropdown]);

  // Handle dropdown hover with delay
  const handleMouseEnter = (itemId: string) => {
    // Clear any existing timeout
    if (timeoutRefs.current[itemId]) {
      clearTimeout(timeoutRefs.current[itemId]!);
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = (itemId: string) => {
    // Add delay before closing
    timeoutRefs.current[itemId] = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemId: string) => {
    setMobileOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, itemId: string, hasDropdown: boolean) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (hasDropdown) {
        setOpenDropdown(openDropdown === itemId ? null : itemId);
      }
    } else if (event.key === 'ArrowDown' && hasDropdown) {
      event.preventDefault();
      setOpenDropdown(itemId);
      // Focus first dropdown item
      const firstLink = dropdownRefs.current[itemId]?.querySelector('a');
      firstLink?.focus();
    } else if (event.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft-lg sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:from-primary-dark group-hover:to-primary transition-all duration-300">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 flex-1 justify-center mx-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isOpen = openDropdown === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.id)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave(item.id)}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className="px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary transition-modern relative group/item flex items-center whitespace-nowrap"
                      onClick={() => setOpenDropdown(isOpen ? null : item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id, hasDropdown)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`dropdown-${item.id}`}
                    >
                      {item.label}
                      <svg 
                        className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover/item:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary transition-modern relative group/item whitespace-nowrap"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover/item:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                  
                  {hasDropdown && (
                    <div
                      ref={(el) => {
                        dropdownRefs.current[item.id] = el;
                      }}
                      id={`dropdown-${item.id}`}
                      className={`absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-depth-lg py-2 border border-neutral-100/50 transition-modern ${
                        isOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                      role="menu"
                      aria-labelledby={`menu-${item.id}`}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={() => handleMouseLeave(item.id)}
                    >
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          role="menuitem"
                          tabIndex={isOpen ? 0 : -1}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-modern rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowDown') {
                              e.preventDefault();
                              const nextItem = item.dropdown?.[index + 1];
                              if (nextItem) {
                                const nextLink = dropdownRefs.current[item.id]?.querySelector(`a[href="${nextItem.href}"]`) as HTMLElement;
                                nextLink?.focus();
                              }
                            } else if (e.key === 'ArrowUp') {
                              e.preventDefault();
                              const prevItem = item.dropdown?.[index - 1];
                              if (prevItem) {
                                const prevLink = dropdownRefs.current[item.id]?.querySelector(`a[href="${prevItem.href}"]`) as HTMLElement;
                                prevLink?.focus();
                              } else {
                                // Focus back on button
                                const button = document.querySelector(`button[aria-controls="dropdown-${item.id}"]`) as HTMLElement;
                                button?.focus();
                              }
                            }
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="text-base font-semibold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:from-primary-dark hover:to-primary transition-all duration-300 flex items-center group whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.business.phoneFormatted}
            </a>
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors whitespace-nowrap"
            >
              Login
            </Link>
            <Button href="/contact" size="sm" className="whitespace-nowrap">
              Probate Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-modern"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setMobileOpenDropdowns(new Set());
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-neutral-200 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isMobileOpen = mobileOpenDropdowns.has(item.id);
              
              return (
                <div key={item.id}>
                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-modern"
                        onClick={() => toggleMobileDropdown(item.id)}
                        aria-expanded={isMobileOpen}
                        aria-controls={`mobile-dropdown-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${isMobileOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        id={`mobile-dropdown-${item.id}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        role="region"
                        aria-labelledby={`mobile-menu-${item.id}`}
                      >
                        <div className="pl-6 space-y-1 pt-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-lg transition-modern"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-modern"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="pt-4 border-t border-neutral-200 space-y-2">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="block px-3 py-2 text-lg font-semibold text-primary hover:bg-neutral-50 rounded-lg transition-modern"
              >
                {siteConfig.business.phoneFormatted}
              </a>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-modern"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-modern"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Button href="/contact" className="mt-2 ml-3" size="sm" onClick={() => setMobileMenuOpen(false)}>
                Probate Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

