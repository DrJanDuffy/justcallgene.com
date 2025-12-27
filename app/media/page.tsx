import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { communities } from '@/lib/data';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Orange County Probate Real Estate | Local Community Insights & Market Updates',
  description: 'Expert probate real estate services in Orange County, CA. Market updates and insights for Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Call (949) 776-3527 for probate property sales.',
  keywords: [
    'probate real estate Orange County',
    'probate realtor Newport Beach',
    'probate property sales Irvine',
    'probate real estate Corona Del Mar',
    'probate homes Laguna Beach',
    'probate real estate Costa Mesa',
    'probate property Huntington Beach',
    'Orange County probate specialist',
    'probate real estate near me',
    'probate property valuation Orange County',
    'court-ordered property sales CA',
    'inherited property sales Orange County',
  ],
  openGraph: {
    title: 'Orange County Probate Real Estate | Local Community Insights & Market Updates',
    description: 'Expert probate real estate services throughout Orange County communities. Market updates and local insights.',
    url: `${siteConfig.url}/media`,
  },
  alternates: {
    canonical: `${siteConfig.url}/media`,
  },
};

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Orange County Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Community Insights</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Expert probate real estate services serving Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Market updates, local insights, and probate property expertise throughout Orange County, California.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Orange County, California, is home to some of the most desirable communities in Southern California, and probate properties in these premier markets require specialized expertise. From world-class beaches and luxury coastal estates in Newport Beach and Corona Del Mar to master-planned cities like Irvine with top-rated schools, each Orange County community offers unique characteristics and market dynamics that impact probate property sales. At Just Call Gene, located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618, we provide comprehensive probate real estate services throughout Orange County, helping families navigate inherited property sales with expertise and compassion.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Whether you're dealing with a probate property in coastal communities like Newport Beach, Laguna Beach, or Corona Del Mar, master-planned cities like Irvine, or vibrant communities like Costa Mesa and Huntington Beach, our market updates and videos offer comprehensive information about local real estate trends, community features, and probate market conditions. Our probate real estate specialists understand the unique requirements of court-ordered sales, estate property valuations, and probate transaction compliance across all Orange County markets.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Serving Orange County since 2004, Just Call Gene has helped hundreds of families with probate property sales throughout Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our team, led by licensed Real Estate Broker Kelly Lynn Boyle (License #02012693) and Real Estate Salesperson Gene Boyle (License #02282581), brings deep local knowledge and probate expertise to every transaction. Call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> for a free probate consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Probate Real Estate Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Probate Real Estate Services Throughout <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Orange County</span>
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              When dealing with probate properties in Orange County, understanding local market conditions is essential for successful court-ordered sales. Each community in Orange County has distinct characteristics that affect probate property values, marketing strategies, and buyer interest. Our probate real estate services are tailored to each Orange County market, ensuring maximum value realization while maintaining strict compliance with probate court requirements.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Coastal Probate Properties in Orange County</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Coastal communities like Newport Beach, Corona Del Mar, and Laguna Beach represent Orange County's most premium probate real estate markets. These areas often include high-value estates, beachfront properties, and luxury condominiums that require specialized probate expertise. Properties in Newport Beach, particularly in areas like Balboa Peninsula, Newport Coast, and Lido Isle, command premium prices due to ocean views, yacht access, and exclusive locations. Our probate real estate specialists understand the unique valuation requirements, marketing strategies, and buyer profiles for coastal probate properties throughout Orange County.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Master-Planned Community Probate Sales</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Irvine, one of Orange County's largest master-planned communities, offers probate properties ranging from family homes to luxury condominiums. With top-rated schools, extensive parks, and thriving business districts, Irvine probate properties attract diverse buyer interest. Our probate services in Irvine ensure proper handling of HOA requirements, community regulations, and market positioning for successful probate sales. Similarly, Costa Mesa and Huntington Beach offer diverse probate property types, from single-family homes to multi-unit properties, each requiring specialized probate real estate expertise.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Probate Property Valuation and Market Analysis</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Accurate probate property valuation is critical for court-ordered sales in Orange County. Our probate real estate specialists provide comprehensive property valuations that consider local market conditions, comparable sales, property condition, and unique community characteristics. Whether the probate property is in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, or Huntington Beach, we ensure valuations meet probate court requirements while maximizing estate value. Our market updates provide current insights into Orange County probate property trends, helping families understand what to expect during the probate sale process.
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Explore Orange County <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Communities We Serve</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {communities.map((community) => (
              <Link
                key={community.id}
                href={`/communities/${community.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-video bg-neutral-200 rounded-t-lg overflow-hidden">
                    <Image
                      src={community.image}
                      alt={`${community.name} - Orange County Community`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-neutral-600">
                      {community.description}
                    </p>
                    <div className="mt-4 text-primary font-semibold group-hover:underline">
                      Learn More →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Orange County for Probate Properties */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Why Orange County Probate Properties <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Maintain Strong Value</span>
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Orange County's real estate markets have demonstrated exceptional long-term appreciation and stability, making probate properties in this region valuable assets for estates. The combination of desirable locations, strong economic fundamentals, and limited land availability supports property values across all Orange County communities. Whether the probate property is a coastal estate in Newport Beach, a family home in Irvine, or a luxury property in Corona Del Mar, Orange County probate properties typically attract qualified buyers and achieve strong sale prices.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Coastal Location Advantages</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Probate properties in Orange County's coastal communities like Newport Beach, Corona Del Mar, and Laguna Beach benefit from world-class beaches, ocean views, and luxury amenities. These factors create consistent demand from high-net-worth buyers seeking primary residences, vacation homes, or investment properties. The limited supply of coastal properties in Orange County further supports property values, making probate sales in these areas particularly strong. Our probate real estate specialists understand how to market coastal probate properties to maximize buyer interest and sale prices.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Master-Planned Community Benefits</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Communities like Irvine offer probate properties in carefully planned neighborhoods with top-rated schools, extensive parks, and thriving business districts. These factors attract families and professionals, creating strong demand for probate properties in master-planned communities. Irvine's reputation for excellent schools, safe neighborhoods, and convenient location makes probate properties here particularly attractive to buyers. Our probate services in Irvine ensure properties are positioned to attract the right buyers and achieve optimal sale prices.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Economic Stability and Growth</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Orange County's diverse economy, including technology, finance, healthcare, and tourism sectors, provides economic stability that supports real estate values. This economic diversity benefits probate property sales by ensuring consistent buyer demand across different market conditions. Whether the probate property is in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, or Huntington Beach, Orange County's economic fundamentals support property values and buyer interest.
            </p>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Orange County Probate Real Estate <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Media Resources</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Updates */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Market Updates</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Stay informed about probate real estate trends and market conditions across Orange County's premier communities including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our market updates provide insights into pricing trends, inventory levels, probate property sales, and local market dynamics specific to Orange County probate transactions.
              </p>
              <Button href="/media/market-updates" variant="primary">
                View Market Updates
              </Button>
            </Card>

            {/* Videos */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Probate Videos</h3>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Educational videos about probate real estate, Orange County community insights, and probate market analysis. Learn about the probate process, court-ordered property sales, probate property valuation, and what makes each Orange County community unique for probate transactions.
              </p>
              <Button href="/media/videos" variant="primary">
                Watch Videos
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Probate Process and Local Expertise */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Probate Real Estate Expertise in <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Orange County Communities</span>
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Navigating probate property sales in Orange County requires specialized knowledge of both probate court procedures and local real estate markets. Our probate real estate specialists combine probate expertise with deep Orange County market knowledge to ensure successful probate transactions. Whether you're dealing with an inherited property in Newport Beach, a family estate in Irvine, or a coastal property in Corona Del Mar, our team understands the unique requirements of probate sales in each Orange County community.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court Compliance and Documentation</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Probate property sales in Orange County require strict compliance with California probate court requirements. Our probate real estate specialists ensure all documentation, disclosures, and procedures meet court standards while maximizing property values. From initial property valuation through court confirmation and closing, we handle all aspects of probate transactions in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Local Market Knowledge</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Understanding Orange County's diverse real estate markets is essential for successful probate property sales. Each community has unique characteristics, buyer profiles, and market dynamics that affect probate sales. Our probate real estate specialists have extensive experience with probate properties throughout Orange County, from luxury coastal estates in Newport Beach to family homes in Irvine, ensuring optimal positioning and marketing for each probate property.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Family Support and Communication</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Probate property sales can be emotionally challenging for families dealing with loss. Our probate real estate specialists provide compassionate support throughout the process, ensuring families understand each step and feel confident in their decisions. We maintain clear communication with all parties, including estate administrators, beneficiaries, and probate attorneys, ensuring smooth probate transactions in Orange County.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Communities Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Why Orange County <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Communities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Coastal Living in Orange County</h3>
              <p className="text-neutral-600">
                World-class beaches, ocean views, and luxury coastal estates in communities like Newport Beach, Corona Del Mar, and Laguna Beach make Orange County probate properties highly desirable. Coastal probate properties in Orange County attract qualified buyers seeking premium locations and lifestyle amenities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Top-Rated Schools in Orange County</h3>
              <p className="text-neutral-600">
                Excellent educational opportunities in master-planned communities like Irvine, with top-rated schools and extensive amenities, make Orange County probate properties attractive to families. School quality significantly impacts probate property values and buyer interest throughout Orange County.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Strong Orange County Markets</h3>
              <p className="text-neutral-600">
                Orange County's real estate markets have demonstrated strong long-term appreciation and stability across all communities, supporting probate property values. This market strength benefits probate estates throughout Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Service Area */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Probate Real Estate Services Throughout <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Orange County, California</span>
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Just Call Gene provides comprehensive probate real estate services throughout Orange County, California. Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618, centrally positioned to serve all Orange County communities. We specialize exclusively in probate property sales, court-ordered transactions, and inherited property sales throughout Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Service Areas in Orange County</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our probate real estate specialists serve all Orange County communities, including Newport Beach probate properties, Irvine probate sales, Corona Del Mar probate real estate, Laguna Beach probate homes, Costa Mesa probate properties, and Huntington Beach probate sales. Whether you're dealing with a probate property in coastal Orange County communities or inland areas, we provide expert probate real estate services tailored to each market's unique characteristics.
            </p>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Free Probate Consultation</h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              If you're dealing with a probate property in Orange County, contact Just Call Gene for a free probate consultation. Our probate real estate specialists will review your situation, explain the probate process, and provide guidance on maximizing your probate property value. Call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email us at <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a>. We're here to help families throughout Orange County navigate probate property sales with expertise and compassion.
            </p>
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
            <Button href="/communities" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-primary">
              Explore Communities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

