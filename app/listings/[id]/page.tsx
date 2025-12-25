import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { featuredListings } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const listing = featuredListings.find((l) => l.id === id);

  if (!listing) {
    return {
      title: 'Listing Not Found',
    };
  }

  const title = `${formatPrice(listing.price)} - Probate Property ${listing.address}, ${listing.city}, ${listing.state}`;
  const description = `Probate property: ${listing.beds} bed, ${listing.baths} bath, ${listing.sqft.toLocaleString()} sqft in ${listing.city}, ${listing.state}. ${listing.status}. Probate real estate sale. Contact ${siteConfig.business.name} for probate property information.`;

  return {
    title,
    description,
    keywords: [
      `probate properties ${listing.city}`,
      `probate real estate ${listing.city}`,
      `${listing.address} probate ${listing.city}`,
      `probate property ${listing.city} CA`,
      'Orange County probate real estate',
    ],
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/listings/${id}`,
      images: [
        {
          url: listing.image,
          width: 1200,
          height: 630,
          alt: `${listing.address}, ${listing.city}`,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/listings/${id}`,
    },
  };
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
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.address}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {listing.status}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link
              href="/contact"
              className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-6"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Contact Us About Probate Properties
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {formatPrice(listing.price)}
            </h1>
            <p className="text-2xl text-neutral-600 mb-8">
              {listing.address}, {listing.city}, {listing.state}
            </p>

            {/* Property Details */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-100 shadow-soft">
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-3 inline-block mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 mb-1 font-medium">Bedrooms</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.beds}</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-3 inline-block mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 mb-1 font-medium">Bathrooms</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.baths}</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-3 inline-block mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 mb-1 font-medium">Square Feet</p>
                <p className="text-2xl font-bold text-neutral-900">{listing.sqft.toLocaleString()}</p>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Property Description</h2>
              <p className="text-neutral-700 leading-relaxed">
                This probate property in {listing.city}, Orange County offers an opportunity to purchase an inherited property 
                in a desirable location. The property features {listing.beds} bedrooms and {listing.baths} bathrooms, 
                with {listing.sqft.toLocaleString()} square feet of living space. This property is being sold as part of 
                probate proceedings in Orange County, California.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                The property is located in a great Orange County neighborhood with easy access to shopping, dining, and entertainment. 
                Contact us for more information about this probate property sale.
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
            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 sticky top-24 border border-neutral-100 shadow-soft-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Interested in This{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Property?
                </span>
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Contact us to schedule a viewing or get more information about this property.
              </p>
              <Button href="/contact" variant="primary" className="w-full mb-4">
                Schedule Viewing
              </Button>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="flex items-center justify-center w-full px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
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

