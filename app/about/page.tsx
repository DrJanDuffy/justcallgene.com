import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'About Us - Real Estate Team in Orange County, CA',
  description: 'Meet Eugene Joseph Boyle (Real Estate Salesperson #02282581) and Kelly Lynn Boyle (Real Estate Broker #02012693). Expert real estate professionals serving Newport Beach, Irvine, and Corona Del Mar with over 20 years of combined experience.',
  keywords: [
    'real estate agent Orange County',
    'real estate broker California',
    'Eugene Boyle realtor',
    'Kelly Boyle broker',
    'Newport Beach real estate agent',
    'Irvine real estate',
    'Corona Del Mar real estate',
    'probate real estate specialist',
  ],
  openGraph: {
    title: 'About Just Call Gene - Real Estate Team in Orange County, CA',
    description: 'Meet our expert real estate team serving Newport Beach, Irvine, and Corona Del Mar with over 20 years of combined experience.',
    url: `${siteConfig.url}/about`,
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-primary-light text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">
              {siteConfig.business.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl animate-fade-in-up">
            Your Trusted Real Estate Agents & Broker in Orange County, CA
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eugene Boyle - Agent */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 animate-fade-in-up">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/placeholder-broker.jpg"
                alt="Eugene Boyle - Real Estate Agent"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-4 border-white/50 rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                  Eugene "Gene" Boyle
                </h2>
                <p className="text-lg text-neutral-600 mb-4">
                  Real Estate Salesperson | License #02282581 | CFO | JD/MBA | Investment Strategist
                </p>
              </div>
              {siteConfig.business.agents?.[0] && (
                <>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {siteConfig.business.agents[0].bio}
                  </p>
                  {siteConfig.business.agents[0].extendedBio && (
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {siteConfig.business.agents[0].extendedBio}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Kelly Boyle - Broker */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12 animate-fade-in-up">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg group lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/placeholder-broker.jpg"
                alt="Kelly Lynn Boyle - Real Estate Broker"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-4 border-white/50 rounded-2xl"></div>
            </div>

            <div className="space-y-6 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                  Kelly Lynn Boyle
                </h2>
                <p className="text-lg text-neutral-600 mb-4">
                  Real Estate BROKER | License #02012693 | Licensed since 2017
                </p>
              </div>
              {siteConfig.business.agents?.[1] && (
                <>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {siteConfig.business.agents[1].bio}
                  </p>
                  {siteConfig.business.agents[1].extendedBio && (
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {siteConfig.business.agents[1].extendedBio}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Education & Background - Eugene */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Eugene Boyle - Education &{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Professional Background
              </span>
            </h2>
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 space-y-4 border border-neutral-100 shadow-soft">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Education</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>PhD, Clinical Psychology (Forensic Focus) - Fielding Graduate University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>JD/MBA in Entrepreneurship - Purdue Global Law School & Babson F.W. Olin Graduate School of Business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>BS, Applied Mathematics & Computer Engineering - Tulane University</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Notable Experience</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Chief Financial Officer, Samaritan Pharmaceuticals (AMEX-listed) - Led successful IPO and SEC compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Investment Strategist - Portfolio optimization for family offices in Irvine Tech Corridor & Orange County markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Navy Veteran - Surface Warfare Officer, Lieutenant (1987-1991)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Credentials - Eugene */}
          {siteConfig.business.agents?.[0] && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Eugene Boyle - Credentials & Certifications</h2>
              <ul className="space-y-3">
                {siteConfig.business.agents[0].credentials.map((credential, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-neutral-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Credentials - Kelly */}
          {siteConfig.business.agents?.[1] && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Kelly Lynn Boyle - Credentials & Certifications</h2>
              <ul className="space-y-3">
                {siteConfig.business.agents[1].credentials.map((credential, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-neutral-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Professional Highlights */}
          {siteConfig.business.professionalHighlights && (
            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Our Team?
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteConfig.business.professionalHighlights.map((highlight, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-r from-primary to-primary-dark p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">{highlight.title}</h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Services{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Offered
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.business.services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-5 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-2 rounded-lg mr-3 group-hover:from-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-700 font-medium group-hover:text-primary transition-colors">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-10 shadow-glow-lg animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="mb-8 text-lg text-blue-100">Let's discuss your real estate goals</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

