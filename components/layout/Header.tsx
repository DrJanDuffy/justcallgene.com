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
        { label: 'Las Vegas', href: '/communities/las-vegas' },
        { label: 'Henderson', href: '/communities/henderson' },
        { label: 'Green Valley', href: '/communities/green-valley' },
        { label: 'Summerlin', href: '/communities/summerlin' },
        { label: 'Anthem', href: '/communities/anthem' },
        { label: 'Southern Highlands', href: '/communities/southern-highlands' },
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
                  onMouseEnter={() => item.dropdown && setSearchDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setSearchDropdownOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${
                      searchDropdownOpen ? 'block' : 'hidden'
                    } group-hover:block`}
                    onMouseEnter={() => setSearchDropdownOpen(true)}
                    onMouseLeave={() => setSearchDropdownOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
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
              className="text-lg font-semibold text-primary hover:text-primary-dark"
            >
              {siteConfig.business.phoneFormatted}
            </a>
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
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="block px-3 py-2 text-lg font-semibold text-primary"
                >
                  {siteConfig.business.phoneFormatted}
                </a>
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

