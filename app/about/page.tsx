import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About {siteConfig.business.name}
          </h1>
          <p className="text-xl text-neutral-200">
            Your Trusted Real Estate Broker in Newport Beach, Irvine & Corona Del Mar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder-broker.jpg"
                alt={`${siteConfig.business.agentName} - ${siteConfig.business.name}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                  Meet Eugene "Gene" Boyle
                </h2>
                <p className="text-lg text-neutral-600 mb-4">
                  CFO | JD/MBA | Real Estate Broker | Investment Strategist
                </p>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {siteConfig.business.bio}
              </p>
              {siteConfig.business.extendedBio && (
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {siteConfig.business.extendedBio}
                </p>
              )}
            </div>
          </div>

          {/* Education & Background */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Education & Professional Background</h2>
            <div className="bg-neutral-50 rounded-lg p-6 space-y-4">
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

          {/* Credentials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Credentials & Certifications</h2>
            <ul className="space-y-3">
              {siteConfig.business.credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-neutral-700">{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Highlights */}
          {siteConfig.business.professionalHighlights && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Why Choose Gene?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteConfig.business.professionalHighlights.map((highlight, index) => (
                  <div key={index} className="bg-gradient-to-br from-neutral-50 to-white rounded-lg p-6 border border-neutral-200 shadow-sm">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{highlight.title}</h3>
                    <p className="text-neutral-700 leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.business.services.map((service, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="mb-6">Let's discuss your real estate goals</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

