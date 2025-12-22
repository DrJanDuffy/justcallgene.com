'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);

  const navItems = [
    {
      label: 'Probate Realtor',
      href: '/probate',
    },
    {
      label: 'Search',
      href: '#',
      dropdown: [
        { label: 'Advanced Search', href: '/search/advanced' },
        { label: 'Address Search', href: '/search' },
        { label: 'Map Search', href: '/search/map' },
        { label: 'Listing ID', href: '/search' },
      ],
    },
    {
      label: 'Buyers',
      href: '#',
      dropdown: [
        { label: 'Mortgage Calculator', href: '/buyers/mortgage-calculator' },
      ],
    },
    {
      label: 'Sellers',
      href: '#',
      dropdown: [
        { label: 'Relocation Guide', href: '/sellers/relocation' },
        { label: 'Home Valuation', href: '/sellers/valuation' },
      ],
    },
      {
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
      label: 'Media',
      href: '#',
      dropdown: [
        { label: 'Probate Videos', href: '/media/videos' },
        { label: 'Market Updates', href: '/media/market-updates' },
      ],
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft-lg sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:from-primary-dark group-hover:to-primary transition-all duration-300">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-all duration-300 relative group/item"
                  onMouseEnter={() => item.dropdown && setSearchDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setSearchDropdownOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover/item:w-full transition-all duration-300"></span>
                </Link>
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-soft-lg py-2 border border-neutral-100 ${
                      searchDropdownOpen ? 'block' : 'hidden'
                    } group-hover:block animate-fade-in`}
                    onMouseEnter={() => setSearchDropdownOpen(true)}
                    onMouseLeave={() => setSearchDropdownOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-50 hover:text-primary transition-all duration-300 rounded-lg mx-2"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:from-primary-dark hover:to-primary transition-all duration-300 flex items-center group"
            >
              <svg className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.business.phoneFormatted}
            </a>
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Button href="/contact" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="block px-3 py-2 text-lg font-semibold text-primary"
                >
                  {siteConfig.business.phoneFormatted}
                </a>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
                <Button href="/contact" className="mt-2 ml-3" size="sm">
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

