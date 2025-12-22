import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function BrokerSection() {
  return (
    <section id="meet-agent" className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src="/placeholder-broker.jpg"
              alt={`${siteConfig.business.agentName} - ${siteConfig.business.name}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 border-4 border-white/50 rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  Expert Team
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Meet Your Real Estate{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                {siteConfig.business.name}
              </h3>
              <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-4 mb-4 border-l-4 border-primary">
                <p className="text-base text-neutral-700 font-medium">
                  Eugene Joseph Boyle, Real Estate Salesperson (License #02282581) & Kelly Lynn Boyle, Real Estate BROKER (License #02012693)
                </p>
              </div>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed">
              {siteConfig.business.bio}
            </p>

            <div className="space-y-4">
              <p className="text-base text-neutral-600">
                I'm a Corporate & Military Relocation Specialist, and have completed designations including 
                Commercial Real Estate Certification, 
                Certified Probate Real Estate Specialist (CPRES) & Certified Probate Expert (CPE). 
                Prior to residential sales, I specialized in land brokerage, investment, and development.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center group text-primary font-semibold hover:text-primary-dark transition-all duration-300"
              >
                <span className="mr-2">READ MORE</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

