import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Probate Real Estate Guides | Orange County Probate Property Resources',
  description: 'Comprehensive probate real estate guides for Orange County. Learn about probate property types, probate process timelines, and probate property sales in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Call (949) 776-3527.',
  keywords: [
    'probate real estate guides',
    'probate property types Orange County',
    'probate process timeline',
    'probate property sales guide',
    'Orange County probate resources',
    'probate real estate near me',
  ],
  openGraph: {
    title: 'Probate Real Estate Guides | Orange County Probate Property Resources',
    description: 'Comprehensive probate real estate guides and resources for Orange County communities.',
    url: `${siteConfig.url}/media/probate-guides`,
  },
  alternates: {
    canonical: `${siteConfig.url}/media/probate-guides`,
  },
};

const guides = [
  {
    id: 'coastal-probate-properties',
    title: 'Coastal Probate Properties in Orange County',
    description: 'Complete guide to selling coastal probate properties in Newport Beach, Corona Del Mar, and Laguna Beach. Learn about oceanfront probate properties, beach access considerations, and luxury probate property sales.',
    category: 'Property Types',
    href: '/media/probate-guides/coastal-probate-properties',
  },
  {
    id: 'probate-process-timeline',
    title: 'Probate Process Timeline for Real Estate',
    description: 'Step-by-step timeline for probate real estate sales in Orange County. Understand court procedures, timelines, and requirements for probate property sales in California.',
    category: 'Process Guide',
    href: '/media/probate-guides/probate-process-timeline',
  },
  {
    id: 'luxury-probate-properties',
    title: 'Luxury Probate Property Sales Guide',
    description: 'Expert guide to selling luxury probate properties in Orange County. Learn about high-value probate estates, luxury market dynamics, and maximizing probate property values.',
    category: 'Property Types',
    href: '/media/probate-guides/luxury-probate-properties',
  },
  {
    id: 'master-planned-community-probate',
    title: 'Master-Planned Community Probate Properties',
    description: 'Guide to probate property sales in master-planned communities like Irvine. Understand HOA requirements, community regulations, and probate property positioning in planned communities.',
    category: 'Property Types',
    href: '/media/probate-guides/master-planned-community-probate',
  },
];

export default function ProbateGuidesPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Media', url: '/media' },
          { name: 'Probate Guides', url: '/media/probate-guides' },
        ]}
        includeFAQ={true}
        includeReviews={true}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Guides & Resources</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Comprehensive guides for probate property sales in Orange County communities including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Navigating probate property sales in Orange County requires understanding probate court procedures, local market dynamics, and property-specific considerations. Our comprehensive probate real estate guides provide essential information for families dealing with inherited properties throughout Orange County communities including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Whether you're dealing with a coastal probate property in Newport Beach, a master-planned community property in Irvine, or a luxury probate estate in Corona Del Mar, our guides offer detailed information about probate property types, probate process timelines, and probate property sales strategies. Understanding these aspects is essential for successful probate transactions that maximize estate values while ensuring court compliance.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Just Call Gene provides probate real estate services throughout Orange County, California. Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618. For probate property consultations, call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Probate Real Estate <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Guides</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {guides.map((guide) => (
              <Link key={guide.id} href={guide.href} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {guide.description}
                    </p>
                    <div className="text-primary font-semibold group-hover:underline">
                      Read Guide →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Additional Probate Real Estate <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Resources</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Market Updates</h3>
              <p className="text-neutral-600 mb-4">
                Stay informed about Orange County probate real estate market trends and local insights.
              </p>
              <Button href="/media/market-updates" variant="outline" size="sm">
                View Updates
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Probate Videos</h3>
              <p className="text-neutral-600 mb-4">
                Educational videos about probate real estate, community insights, and market analysis.
              </p>
              <Button href="/media/videos" variant="outline" size="sm">
                Watch Videos
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Probate Services</h3>
              <p className="text-neutral-600 mb-4">
                Comprehensive probate real estate services throughout Orange County communities.
              </p>
              <Button href="/services" variant="outline" size="sm">
                View Services
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Probate Property in Orange County?
          </h2>
          <p className="text-xl text-neutral-100 mb-8">
            Our probate real estate specialists serve all Orange County communities including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Call <a href="tel:949-776-3527" className="font-semibold underline hover:text-white/90">(949) 776-3527</a> for a free probate consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Free Consultation
            </Button>
            <Button href="/media/market-updates" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-primary">
              View Market Updates
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

