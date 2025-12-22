import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function BrokerSection() {
  return (
    <section id="meet-broker" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder-broker.jpg"
              alt={`${siteConfig.business.agentName} - ${siteConfig.business.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Meet Your Real Estate Broker
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                {siteConfig.business.name}
              </h3>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed">
              {siteConfig.business.bio}
            </p>

            <div className="space-y-4">
              <p className="text-base text-neutral-600">
                I'm a Corporate & Military Relocation Specialist, and have completed designations including 
                UNLV Lied Institute for Real Estate Studies Commercial Certification, 
                Certified Probate Real Estate Specialist (CPRES) & Certified Probate Expert (CPE). 
                Prior to residential sales, I specialized in land brokerage, investment, and development.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                READ MORE
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

