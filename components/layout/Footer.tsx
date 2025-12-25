import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Probate Realtor', href: '/probate' },
    { label: 'Probate Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'sitemap', href: '/sitemap.xml' },
  ];

  const resources = [
    { label: 'Probate Property Valuation', href: '/sellers/valuation' },
    { label: 'Probate Process Guide', href: '/probate' },
    { label: 'Our Services', href: '/services' },
    { label: 'Communities', href: '/communities' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-300 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Local Expert
              </span>
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Eugene Joseph Boyle (Salesperson #02282581) & Kelly Lynn Boyle (BROKER #02012693): Orange County's Top Real Estate Team. 
              Your trusted California real estate professionals.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary hover:text-primary-light text-sm font-medium group transition-colors">
              <span>read more</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {siteConfig.business.name}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-neutral-300">License #{siteConfig.business.licenseNumber}</p>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-neutral-400">
                  {siteConfig.business.address.streetAddress}
                  <br />
                  {siteConfig.business.address.addressLocality}, {siteConfig.business.address.addressRegion} {siteConfig.business.address.postalCode}
                </p>
              </div>
              <p>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.business.phoneFormatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-primary transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.business.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              Disclaimer: All information contained on this website is deemed reliable but not guaranteed. 
              All properties are subject to prior sale, change or withdrawal notice. 
              {siteConfig.url} believes all information to be correct but assumes no legal responsibility for accuracy.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/terms" className="hover:text-primary transition-colors">
                TERMS OF USE
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-neutral-500">
            <p>
              Protected by The Digital Millennium Copyright Act of 1998
            </p>
            <p className="mt-2">
              Copyright © {new Date().getFullYear()} {siteConfig.business.name}. All Rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

