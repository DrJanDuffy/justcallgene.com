import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Offering The{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Just Call Gene's Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Probate Property Valuation Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-depth overflow-hidden group hover:shadow-glow transition-modern border border-neutral-100/50 hover:border-primary/30 hover-lift">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <Image
                src="/placeholder-service-sell-home.jpg"
                alt="Probate Property Valuation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                NEED A VALUATION FOR
              </h3>
              <h4 className="text-3xl font-bold gradient-text-modern bg-clip-text text-transparent mb-4">
                Probate Property?
              </h4>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Get an accurate probate property valuation that meets court requirements. Professional valuations for estate tax purposes, distribution planning, and establishing sale prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/sellers/valuation" variant="primary" className="flex-1">
                  Get Probate Valuation
                </Button>
              </div>
            </div>
          </div>

          {/* Probate Sale Services Section */}
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden group hover:shadow-soft-lg transition-all duration-300 border border-neutral-100 hover:border-primary/20 hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <Image
                src="/placeholder-service-new-home.jpg"
                alt="Probate Sale Services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                NEED TO SELL AN
              </h3>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
                Inherited Property?
              </h4>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Expert probate real estate services for inherited property sales. Court compliance, compassionate support, and proven results. Certified Probate Real Estate Specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/probate" variant="primary" className="flex-1">
                  Learn About Probate Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

