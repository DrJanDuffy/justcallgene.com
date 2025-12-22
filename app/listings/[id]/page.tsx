import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { featuredListings } from '@/lib/data';
import { Button } from '@/components/ui/Button';

type Props = {
  params: Promise<{ id: string }>;
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export async function generateStaticParams() {
  return featuredListings.map((listing) => ({ id: listing.id }));
}

export default async function ListingDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = featuredListings.find((l) => l.id === id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            {listing.status}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              href="/search"
              className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-6"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Search
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {formatPrice(listing.price)}
            </h1>
            <p className="text-2xl text-neutral-600 mb-8">
              {listing.address}, {listing.city}, {listing.state}
            </p>

            {/* Property Details */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-neutral-50 rounded-lg">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Bedrooms</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.beds}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Bathrooms</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.baths}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Square Feet</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.sqft.toLocaleString()}</p>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Property Description</h2>
              <p className="text-neutral-700 leading-relaxed">
                This beautiful property in {listing.city} offers an exceptional opportunity to own a well-maintained home 
                in a desirable location. The property features {listing.beds} bedrooms and {listing.baths} bathrooms, 
                with {listing.sqft.toLocaleString()} square feet of living space. Perfect for families or professionals 
                looking for a comfortable home in the Las Vegas area.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                The home is located in a great neighborhood with easy access to shopping, dining, and entertainment. 
                Don't miss this opportunity to make this house your home!
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Central Air Conditioning</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Garage</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Updated Kitchen</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Hardwood Floors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Interested in This Property?</h3>
              <p className="text-neutral-600 mb-6">
                Contact us to schedule a viewing or get more information about this property.
              </p>
              <Button href="/contact" variant="primary" className="w-full mb-4">
                Schedule Viewing
              </Button>
              <a
                href={`tel:702-239-8400`}
                className="block w-full text-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Call Agent
              </a>
              <div className="border-t border-neutral-200 pt-4 mt-4">
                <p className="text-sm text-neutral-600 mb-2">Property ID:</p>
                <p className="font-semibold text-neutral-900">#{listing.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

