import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';
import { siteConfig } from '@/lib/config';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Contact Probate Real Estate Specialists | Orange County, CA',
  description: `Contact ${siteConfig.business.name} at ${siteConfig.business.phoneFormatted}. Certified Probate Real Estate Specialists (PRES) serving Newport Beach, Irvine, and Corona Del Mar. Free probate consultation.`,
  keywords: [
    'contact probate real estate specialist',
    'Orange County probate realtor contact',
    'Newport Beach probate specialist',
    'probate consultation',
    'probate property valuation request',
    siteConfig.business.phone,
  ],
  openGraph: {
    title: 'Contact Just Call Gene - Probate Real Estate Specialists',
    description: `Get in touch with our probate real estate specialists. Call ${siteConfig.business.phoneFormatted} or email ${siteConfig.business.email} for your free probate consultation.`,
    url: `${siteConfig.url}/contact`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]} />
      <section className="relative bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-primary-light text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto animate-fade-in-up">
            Contact our probate real estate specialists for your free consultation
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

