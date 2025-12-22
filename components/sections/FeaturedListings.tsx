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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
              Featured LISTINGS
            </h2>
            <p className="text-neutral-600">Just Listed</p>
          </div>
          <Link
            href="/search"
            className="text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            view all Listings →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <Card key={listing.id} href={`/listings/${listing.id}`} className="cursor-pointer">
              <div className="relative aspect-video">
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {listing.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {formatPrice(listing.price)}
                </h3>
                <p className="text-neutral-600 mb-3">
                  {listing.address}, {listing.city}, {listing.state}
                </p>
                <div className="flex items-center space-x-4 text-sm text-neutral-500">
                  <span>{listing.beds} Beds</span>
                  <span>{listing.baths} Baths</span>
                  <span>{listing.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/search"
            className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            NEWEST LISTINGS →
          </Link>
        </div>
      </div>
    </section>
  );
}

