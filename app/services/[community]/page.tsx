import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { ServiceSchema } from '@/components/schema/ServiceSchema';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { communities } from '@/lib/data';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ community: string }>;
};

export async function generateStaticParams() {
  return communities.map((community) => ({
    community: community.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { community } = await params;
  const communityData = communities.find((c) => c.slug === community);

  if (!communityData) {
    return {
      title: 'Probate Real Estate Services',
    };
  }

  return {
    title: `Probate Real Estate Services in ${communityData.name} | Orange County, CA`,
    description: `Expert probate real estate services in ${communityData.name}, Orange County. Probate property sales, court-ordered sales, and probate property valuation in ${communityData.name}. Call (949) 776-3527.`,
    keywords: [
      `probate real estate ${communityData.name}`,
      `probate property sales ${communityData.name}`,
      `probate realtor ${communityData.name}`,
      `probate property ${communityData.name} Orange County`,
      `court-ordered sale ${communityData.name}`,
      `probate real estate near me ${communityData.name}`,
    ],
    openGraph: {
      title: `Probate Real Estate Services in ${communityData.name} | Orange County, CA`,
      description: `Expert probate real estate services in ${communityData.name}, Orange County.`,
      url: `${siteConfig.url}/services/${community}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${community}`,
    },
  };
}

export default async function CommunityServicePage({ params }: Props) {
  const { community } = await params;
  const communityData = communities.find((c) => c.slug === community);

  if (!communityData) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: `${communityData.name} Services`, url: `/services/${community}` },
  ];

  return (
    <>
      <ServiceSchema
        name={`Probate Real Estate Services in ${communityData.name}`}
        description={`Comprehensive probate real estate services including probate property sales, court-ordered sales, property valuation, estate management, and probate transaction support in ${communityData.name}, Orange County, California.`}
        serviceType="Probate Real Estate Services"
        areaServed={[communityData.name, 'Orange County', 'California']}
      />
      <PageSchemas
        breadcrumbs={breadcrumbItems}
        includeFAQ={true}
        includeReviews={true}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Probate Real Estate Services in <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">{communityData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-center text-neutral-100 max-w-3xl mx-auto">
              Expert probate property sales and court-ordered transactions in {communityData.name}, Orange County
            </p>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Solving {communityData.name} Probate Property <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Challenges</span>
            </h2>

            <div className="space-y-6 mb-12">
              <Card className="p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Problem: {communityData.name} Market Knowledge Required</h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Challenge:</strong> Probate properties in {communityData.name} require understanding of local market dynamics, buyer profiles, and community-specific characteristics. Without this knowledge, probate properties may be priced incorrectly or marketed ineffectively, resulting in lower sale prices and extended timelines.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                  <p className="text-green-800">
                    Our probate real estate specialists have extensive experience with {communityData.name} probate properties, understanding local market dynamics, buyer preferences, and community characteristics. We ensure probate properties in {communityData.name} are positioned optimally for successful sales that maximize estate values.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Problem: Court Compliance for {communityData.name} Properties</h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Challenge:</strong> Probate properties in {communityData.name} must comply with California probate court requirements while maximizing estate values. Court procedures can be complex, and mistakes can delay probate sales or reduce estate values.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                  <p className="text-green-800">
                    Our probate real estate specialists ensure all court requirements are met for {communityData.name} probate properties, handling documentation, court filings, and compliance procedures. We coordinate with probate attorneys and court systems to ensure smooth probate transactions that maximize estate values while maintaining court compliance.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Problem: Finding Qualified Buyers for {communityData.name} Properties</h3>
                <p className="text-neutral-700 mb-3">
                  <strong>The Challenge:</strong> Probate properties in {communityData.name} require reaching qualified buyers who understand probate timelines and are interested in {communityData.name} properties. Without proper marketing and buyer outreach, probate properties may sit on the market longer, reducing estate values.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                  <p className="text-green-800">
                    We develop comprehensive marketing strategies tailored to {communityData.name}'s market, ensuring probate properties reach qualified buyers seeking properties in {communityData.name}. Our probate real estate specialists understand buyer profiles and preferences in {communityData.name}, ensuring probate properties are marketed effectively to achieve optimal sale prices.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {communityData.name} represents one of Orange County's premier communities, and probate properties in {communityData.name} require specialized expertise to solve probate challenges and ensure successful court-ordered sales. Our probate real estate specialists at Just Call Gene provide comprehensive probate services throughout {communityData.name}, helping families navigate inherited property sales with expertise and compassion.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Whether you're dealing with a probate property in {communityData.name} that's a coastal estate, family home, or luxury property, our probate real estate specialists understand {communityData.name}'s unique market dynamics, buyer profiles, and probate court requirements. We solve probate challenges and ensure probate properties in {communityData.name} achieve optimal sale prices while maintaining strict compliance with California probate court procedures.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618, centrally positioned to serve {communityData.name} and all Orange County communities. For probate property consultations in {communityData.name}, call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Probate Real Estate Services in <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">{communityData.name}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Probate Property Valuation</h3>
                <p className="text-neutral-600 mb-4">
                  Accurate probate property valuations for {communityData.name} properties that meet court requirements while maximizing estate values.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Court-Ordered Sales</h3>
                <p className="text-neutral-600 mb-4">
                  Expert handling of court-ordered probate property sales in {communityData.name}, ensuring compliance with all court requirements.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Market Analysis</h3>
                <p className="text-neutral-600 mb-4">
                  Comprehensive market analysis for {communityData.name} probate properties, ensuring optimal positioning and pricing strategies.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Timeline Management</h3>
                <p className="text-neutral-600 mb-4">
                  Efficient probate timeline management for {communityData.name} properties, ensuring court deadlines are met.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Court Compliance</h3>
                <p className="text-neutral-600 mb-4">
                  Strict compliance with California probate court requirements for {communityData.name} probate property sales.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Family Support</h3>
                <p className="text-neutral-600 mb-4">
                  Compassionate support for families dealing with probate properties in {communityData.name}, ensuring clear communication throughout the process.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us for {communityData.name} */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Why Choose Just Call Gene for {communityData.name} Probate Properties
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Just Call Gene specializes exclusively in probate real estate, providing unmatched expertise for probate properties in {communityData.name}. Our probate real estate specialists understand {communityData.name}'s unique market characteristics, buyer profiles, and probate court requirements, ensuring successful probate transactions that maximize estate values.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Deep {communityData.name} Market Knowledge</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our probate real estate specialists have extensive experience with probate properties in {communityData.name}, understanding local market dynamics, property values, and buyer preferences. This deep market knowledge ensures probate properties in {communityData.name} are positioned optimally for successful sales.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Probate Court Expertise</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                California probate courts require specific procedures and documentation for probate property sales. Our probate real estate specialists ensure all court requirements are met for {communityData.name} probate properties, ensuring smooth probate transactions that comply with all legal requirements.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Compassionate Family Support</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate property sales can be emotionally challenging for families. Our probate real estate specialists provide compassionate support throughout the process, ensuring families dealing with probate properties in {communityData.name} understand each step and feel confident in their decisions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with Probate Property in {communityData.name}?
            </h2>
            <p className="text-xl text-neutral-100 mb-8">
              Our probate real estate specialists serve {communityData.name} and all Orange County communities. Call <a href="tel:949-776-3527" className="font-semibold underline hover:text-white/90">(949) 776-3527</a> for a free probate consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </Button>
              <Button href={`/communities/${community}`} variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-primary">
                Learn About {communityData.name}
              </Button>
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
                  href: '/services',
                  text: 'All Probate Services',
                  description: 'Comprehensive probate real estate services throughout Orange County',
                },
                {
                  href: `/communities/${community}`,
                  text: `${communityData.name} Community Information`,
                  description: `Learn more about ${communityData.name} and probate properties in this community`,
                },
                {
                  href: '/probate',
                  text: 'Understanding Probate Real Estate',
                  description: 'Learn about the probate process and court procedures',
                },
                {
                  href: '/contact',
                  text: 'Contact Us',
                  description: 'Get in touch for a free probate consultation',
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}

