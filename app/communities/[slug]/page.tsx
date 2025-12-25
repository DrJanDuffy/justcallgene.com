import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { communities } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

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
    title: `Homes for Sale in ${community.name}, CA - Real Estate Guide`,
    description: `${community.description} Find homes for sale, market insights, and neighborhood information for ${community.name}, Orange County, CA.`,
    keywords: [
      `homes for sale ${community.name}`,
      `${community.name} real estate`,
      `${community.name} homes`,
      `real estate ${community.name} CA`,
      `Orange County ${community.name}`,
      'Orange County real estate',
    ],
    openGraph: {
      title: `Homes for Sale in ${community.name}, CA`,
      description: `${community.description} Expert real estate services in ${community.name}, Orange County.`,
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Communities', url: '/communities' },
        { name: community.name, url: `/communities/${slug}` },
      ]} />
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
              Discover the unique charm and opportunities that {community.name} has to offer. 
              Whether you're looking for a family home, investment property, or luxury estate, 
              this community provides an exceptional living experience in the Las Vegas area.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-white rounded-2xl p-8 mb-8 border border-primary/20 shadow-soft">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Explore Properties in{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {community.name}
                </span>
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Browse available listings and find your perfect home in this beautiful community.
              </p>
              <Button href="/search" variant="primary">
                Search Properties
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
    </div>
  );
}

