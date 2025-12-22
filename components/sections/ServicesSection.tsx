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
          {/* New Home Section */}
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden group hover:shadow-soft-lg transition-all duration-300 border border-neutral-100 hover:border-primary/20 hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <Image
                src="/placeholder-service-new-home.jpg"
                alt="Find Your Dream Home"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                ARE YOU LOOKING FOR
              </h3>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
                NEW HOME?
              </h4>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Find your dream home with Gene. Expert guidance, local insights, and personalized service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/search" variant="primary" className="flex-1">
                  view all Listings
                </Button>
              </div>
            </div>
          </div>

          {/* Sell Home Section */}
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden group hover:shadow-soft-lg transition-all duration-300 border border-neutral-100 hover:border-primary/20 hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <Image
                src="/placeholder-service-sell-home.jpg"
                alt="Sell Your Home"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                WANT TO SELL
              </h3>
              <h4 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
                Your Home?
              </h4>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Sell your home fast with Gene. Benefit from market expertise, dedicated approach, and strategic marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/sellers/valuation" variant="primary" className="flex-1">
                  home valuation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

