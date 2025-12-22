import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Offering The Best
          </h2>
          <p className="text-lg text-neutral-600">
            Just Call Gene's Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* New Home Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder-service-new-home.jpg"
                alt="Find Your Dream Home"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ARE YOU LOOKING FOR
              </h3>
              <h4 className="text-3xl font-bold text-primary mb-4">
                NEW HOME?
              </h4>
              <p className="text-neutral-700 mb-6">
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder-service-sell-home.jpg"
                alt="Sell Your Home"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                WANT TO SELL
              </h3>
              <h4 className="text-3xl font-bold text-primary mb-4">
                Your Home?
              </h4>
              <p className="text-neutral-700 mb-6">
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

