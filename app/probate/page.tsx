import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Probate Real Estate Specialist in Orange County, CA',
  description: 'Probate Real Estate Specialist (CPRES) and Probate Expert (CPE) serving Orange County. Expert guidance for probate property sales in Newport Beach, Irvine, and Corona Del Mar.',
  keywords: [
    'probate real estate',
    'probate realtor Orange County',
    'probate property sales',
    'CPRES',
    'probate real estate specialist',
    'Orange County probate',
    'California probate real estate',
    'probate home sales',
  ],
  openGraph: {
    title: 'Probate Real Estate Specialist - Orange County, CA',
    description: 'Probate Real Estate Specialist helping families navigate probate property sales in Orange County with expertise and compassion.',
    url: `${siteConfig.url}/probate`,
  },
  alternates: {
    canonical: `${siteConfig.url}/probate`,
  },
};

export default function ProbatePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Probate Realtor', url: '/probate' },
      ]} />
      {/* Hero Section */}
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
              Probate Specialist
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Need to Sell a Probate Property in{' '}
            <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">
              Orange County?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Expert probate real estate services to help you navigate the process
          </p>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-glow hover:shadow-glow-lg"
          >
            Book Free Probate Consultation
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Probate Real Estate Specialist
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Selling a probate property can be complex and emotionally challenging. 
              As a Probate Real Estate Specialist (CPRES) and Probate Expert (CPE), 
              I have the expertise and compassion to guide you through every step of the process.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">
              Why Choose a Probate Specialist?
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Understanding of probate court requirements and timelines</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Experience working with executors and administrators</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Knowledge of property valuation for probate purposes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700">Compassionate approach during difficult times</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 mt-12 shadow-glow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-lg text-blue-100">
                Contact me today for a free consultation to discuss your probate property needs.
              </p>
              <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <a
                  href={`mailto:${siteConfig.business.probateEmail}`}
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{siteConfig.business.probateEmail}</span>
                </a>
                <a
                  href={`tel:${siteConfig.business.phone.replace(/-/g, '')}`}
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">{siteConfig.business.phoneFormatted}</span>
                </a>
              </div>
              <Button
                href="/contact"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

