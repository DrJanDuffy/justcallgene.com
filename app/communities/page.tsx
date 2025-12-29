import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { communities } from '@/lib/data';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Orange County Communities We Serve | Probate Real Estate Specialist',
  description: 'Probate property sales in premier Orange County communities: Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Certified Probate Real Estate Specialists serving California\'s most desirable coastal communities.',
  keywords: [
    'Orange County probate communities',
    'Newport Beach probate real estate',
    'Irvine probate sales',
    'Corona Del Mar probate properties',
    'Laguna Beach probate homes',
    'Costa Mesa probate real estate',
    'Huntington Beach probate sales',
  ],
  openGraph: {
    title: 'Orange County Communities We Serve | Probate Real Estate Specialist',
    description: 'Probate property sales in premier Orange County communities with expert probate real estate guidance.',
    url: `${siteConfig.url}/communities`,
  },
  alternates: {
    canonical: `${siteConfig.url}/communities`,
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Communities', url: '/communities' },
];

export default function CommunitiesPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={breadcrumbItems}
        includeFAQ={true}
        includeReviews={true}
      />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Orange County <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Communities</span>
            </h1>
            <p className="text-xl md:text-2xl text-center text-neutral-100 max-w-3xl mx-auto">
              Probate Property Sales Throughout Orange County's Premier Markets
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Orange County, California, is home to some of the most desirable communities in the United States. From world-class beaches and luxury coastal estates to master-planned cities with top-rated schools, Orange County offers diverse property types that often become part of probate estates. Our probate real estate services span all of Orange County's premier communities.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At Just Call Gene, we specialize in probate property sales throughout Orange County's premier communities, bringing deep local knowledge, probate expertise, and compassionate service to every transaction. Whether you're selling an inherited beachfront property in Newport Beach, a family home in Irvine, or a luxury estate in Corona Del Mar, we understand what makes each community unique and can help maximize property values while ensuring compliance with probate court requirements.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Probate Property Sales Throughout Orange County</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Orange County's diverse communities mean probate properties can range from coastal estates to master-planned family homes. Our probate real estate expertise spans all of Orange County's markets, ensuring we understand the unique characteristics, pricing dynamics, and court requirements for each community. Whether the probate property is in a coastal community, master-planned city, or established neighborhood, we provide specialized probate services tailored to each area's market.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Coastal Probate Properties</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Orange County's coastal communities, including Newport Beach, Corona Del Mar, and Laguna Beach, often include high-value probate properties. These properties may include beachfront estates, coastal condominiums, or properties with ocean views. Our probate expertise in these premium markets helps ensure proper valuation, court compliance, and maximum value realization for estates. We understand the unique requirements and market dynamics of coastal probate sales.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Master-Planned Community Probate Sales</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Communities like Irvine represent master-planned developments with carefully designed neighborhoods, extensive amenities, top-rated schools, and thriving business districts. Probate properties in these communities often include family homes, condominiums, and townhomes. Our probate services in master-planned communities ensure proper handling of HOA requirements, community regulations, and market positioning for successful probate sales.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Probate Property Value Maximization</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Orange County's real estate markets have demonstrated strong long-term appreciation, which can benefit probate estates. Our probate real estate services help maximize property values through accurate valuations, strategic marketing, and expert negotiation. We understand each community's market dynamics and can help ensure probate properties achieve optimal sale prices while meeting all court requirements and timelines.
              </p>
            </div>
          </div>
        </section>

        {/* Communities Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Explore Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Communities</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communities.map((community) => (
                <Link
                  key={community.id}
                  href={`/communities/${community.slug}`}
                  className="group"
                >
                  <Card variant="elevated" className="overflow-hidden hover:shadow-lg transition-all h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={community.image}
                        alt={community.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                          {community.name}
                        </h3>
                        <p className="text-sm text-neutral-200 mb-3">{community.description}</p>
                        <div className="flex items-center text-primary-light text-sm font-medium">
                          <span>Explore Area</span>
                          <svg
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community Highlights */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              What Makes Orange County <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Special</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">World-Class Beaches</h3>
                <p className="text-neutral-700">
                  Orange County boasts 42 miles of pristine coastline with some of the most beautiful beaches in California. From the iconic surf breaks of Huntington Beach to the secluded coves of Laguna Beach, the coastal lifestyle is a major draw for residents and visitors alike.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Top-Rated Schools</h3>
                <p className="text-neutral-700">
                  Orange County is home to some of the best public and private schools in California. Communities like Irvine consistently rank among the top school districts in the nation, making Orange County an ideal choice for families prioritizing education.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Thriving Economy</h3>
                <p className="text-neutral-700">
                  Orange County's diverse economy includes technology, healthcare, finance, tourism, and manufacturing. The region's strong job market and business-friendly environment attract professionals and entrepreneurs from around the world.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Cultural Attractions</h3>
                <p className="text-neutral-700">
                  From world-class museums and performing arts centers to professional sports teams and entertainment venues, Orange County offers a rich cultural scene. The region's diverse communities celebrate art, music, food, and culture in unique and vibrant ways.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Outdoor Recreation</h3>
                <p className="text-neutral-700">
                  Orange County's Mediterranean climate and diverse geography provide endless opportunities for outdoor recreation. From surfing and sailing to hiking and golf, residents enjoy an active lifestyle year-round.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Diverse Probate Properties</h3>
                <p className="text-neutral-700">
                  Orange County probate estates include diverse property types, from luxury beachfront estates to family-friendly suburban homes, from modern condominiums to historic properties. Our probate expertise spans all property types, ensuring proper handling regardless of the property's characteristics or location.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Orange County <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Market Insights</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Understanding Orange County's real estate markets is crucial for probate property sales. Each community has its own unique characteristics, price points, and market dynamics. Our deep knowledge of these markets allows us to provide accurate probate property valuations, strategic marketing, and expert negotiation to maximize estate values while ensuring compliance with court requirements.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Coastal Probate Markets</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Coastal communities like Newport Beach, Corona Del Mar, and Laguna Beach represent some of Orange County's most premium real estate markets. Probate properties in these areas often include high-value estates, beachfront properties, and luxury condominiums. Our probate expertise in these premium markets helps ensure proper valuation, court compliance, and maximum value realization for estates. These markets command higher prices due to desirable locations and limited inventory, which can benefit probate estates.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Master-Planned Community Probate Sales</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Communities like Irvine offer master-planned developments with excellent schools, planned amenities, and strong community infrastructure. Probate properties in these communities often include family homes, condominiums, and townhomes. Our probate services ensure proper handling of HOA requirements, community regulations, and market positioning for successful probate sales. These areas have demonstrated strong long-term appreciation, which benefits probate estates.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Probate Market Trends</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Orange County's real estate markets have demonstrated resilience and long-term appreciation, which benefits probate estates. Understanding current market conditions, trends, and forecasts is crucial for probate property sales. Our probate real estate services leverage this market knowledge to help maximize property values while meeting court requirements and timelines. The region's desirable location, strong economy, and limited land availability contribute to property values that consistently perform well, which can benefit probate estates.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Selling a Probate Property in Orange County?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for expert probate real estate services throughout Orange County's premier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us About Probate Properties
              </Button>
              <Button
                href="/probate"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn About Probate Process
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
