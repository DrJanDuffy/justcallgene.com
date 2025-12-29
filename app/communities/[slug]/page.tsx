import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { communities } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { siteConfig } from '@/lib/config';
import { PageSchemas } from '@/components/schema/PageSchemas';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);

  if (!community) {
    return {
      title: 'Community Not Found',
    };
  }

  return {
    title: `Probate Properties in ${community.name}, CA | Probate Real Estate Specialist`,
    description: `${community.description} Probate property sales and probate real estate services in ${community.name}, Orange County, CA. Certified Probate Real Estate Specialists.`,
    keywords: [
      `probate properties ${community.name}`,
      `probate real estate ${community.name}`,
      `${community.name} probate sales`,
      `probate homes ${community.name} CA`,
      `Orange County probate ${community.name}`,
      'Orange County probate real estate',
    ],
    openGraph: {
      title: `Probate Properties in ${community.name}, CA`,
      description: `${community.description} Expert probate real estate services in ${community.name}, Orange County.`,
      url: `${siteConfig.url}/communities/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/communities/${slug}`,
    },
  };
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);

  if (!community) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: community.name, url: `/communities/${slug}` },
        ]}
        includeFAQ={true}
        includeReviews={true}
      />
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src={community.image}
          alt={community.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {community.name}
            </h1>
            <p className="text-xl text-neutral-200 max-w-2xl">
              {community.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              About {community.name}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              {community.description}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed mb-8">
              {community.name} is one of Orange County's premier communities, and we specialize in probate property sales throughout this area. 
              If you're an executor, administrator, or family member needing to sell an inherited property in {community.name}, 
              we provide expert probate real estate services with deep knowledge of this community's market dynamics and court requirements.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-white rounded-2xl p-8 mb-8 border border-primary/20 shadow-soft">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Probate Property Sales in{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {community.name}
                </span>
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                We handle probate property sales throughout {community.name} with expertise in court-ordered sales, 
                property valuation, and estate transactions. Our deep knowledge of this community's market helps 
                maximize property values while ensuring compliance with all probate court requirements.
              </p>
              <Button href="/contact" variant="primary">
                Contact Us About Probate Properties
              </Button>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <Link
                href="/communities"
                className="text-primary hover:text-primary-dark font-semibold"
              >
                ← Back to All Communities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InternalLinks
            title="Related Resources"
            links={[
              {
                href: '/probate',
                text: 'Probate Real Estate Process',
                description: 'Learn about probate property sales and court procedures',
              },
              {
                href: '/services',
                text: 'Our Probate Services',
                description: 'Comprehensive probate real estate services in Orange County',
              },
              {
                href: '/sellers/valuation',
                text: 'Property Valuation',
                description: 'Get a free probate property valuation',
              },
              {
                href: '/contact',
                text: 'Contact Us',
                description: 'Get in touch for a free consultation',
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

