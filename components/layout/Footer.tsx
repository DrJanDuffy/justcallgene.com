import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Probate Realtor', href: '/probate' },
    { label: 'Search homes', href: '/search' },
    { label: 'map homes', href: '/search/map' },
    { label: 'Contact', href: '/contact' },
    { label: 'sitemap', href: '/sitemap.xml' },
  ];

  const resources = [
    { label: 'Newest Listings', href: '/search' },
    { label: 'Open houses', href: '/search' },
    { label: 'Advanced Search', href: '/search/advanced' },
    { label: 'Home Valuation', href: '/sellers/valuation' },
    { label: 'Mortgage Calculator', href: '/buyers/mortgage-calculator' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Local Expert</h3>
            <p className="text-sm mb-4">
              {siteConfig.business.agentName}: Las Vegas & Henderson's Top Real Estate Broker. 
              Your trusted Nevada real estate broker.
            </p>
            <Link href="/about" className="text-primary hover:text-primary-light text-sm">
              read more
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {siteConfig.business.name}
            </h3>
            <div className="space-y-2 text-sm">
              <p>License #{siteConfig.business.licenseNumber}</p>
              <p className="text-neutral-400">
                {siteConfig.business.address.streetAddress}
                <br />
                {siteConfig.business.address.addressLocality}, {siteConfig.business.address.addressRegion} {siteConfig.business.address.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.business.phoneFormatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-primary transition-colors"
                >
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

