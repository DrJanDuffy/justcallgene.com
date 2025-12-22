import Image from 'next/image';
import Link from 'next/link';
import { featuredListings } from '@/lib/data';
import { Card } from '@/components/ui/Card';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function FeaturedListings() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12 animate-fade-in-up">
          <div>
            <div className="inline-block mb-3">
              <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Featured Properties
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                LISTINGS
              </span>
            </h2>
            <p className="text-neutral-600">Just Listed</p>
          </div>
          <Link
            href="/search"
            className="group text-primary font-semibold hover:text-primary-dark transition-all duration-300 flex items-center"
          >
            <span>view all Listings</span>
            <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing, index) => (
            <Card key={listing.id} href={`/listings/${listing.id}`} className="cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative aspect-video overflow-hidden group">
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {listing.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                  {formatPrice(listing.price)}
                </h3>
                <p className="text-neutral-600 mb-4 font-medium">
                  {listing.address}, {listing.city}, {listing.state}
                </p>
                <div className="flex items-center space-x-4 text-sm text-neutral-500 border-t border-neutral-100 pt-3">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {listing.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    {listing.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    {listing.sqft.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/search"
            className="group inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-all duration-300"
          >
            <span>NEWEST LISTINGS</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

