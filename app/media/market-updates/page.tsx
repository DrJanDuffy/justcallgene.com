import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Orange County Probate Real Estate Market Updates | Local Market Trends',
  description: 'Stay informed about Orange County probate real estate market trends. Market updates for Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach probate properties. Call (949) 776-3527.',
  keywords: [
    'Orange County probate real estate market',
    'Newport Beach probate market trends',
    'Irvine probate property market',
    'probate real estate Orange County CA',
    'probate property market updates',
    'Orange County probate market analysis',
  ],
  openGraph: {
    title: 'Orange County Probate Real Estate Market Updates | Local Market Trends',
    description: 'Stay informed about Orange County probate real estate market trends and local insights.',
    url: `${siteConfig.url}/media/market-updates`,
  },
  alternates: {
    canonical: `${siteConfig.url}/media/market-updates`,
  },
};

export default function MarketUpdatesPage() {
  const updates = [
    {
      id: '1',
      title: 'Orange County Probate Real Estate Market Report - December 2024',
      date: 'December 15, 2024',
      excerpt: 'Orange County probate real estate market shows strong activity with premium property values across Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach.',
      category: 'Market Analysis',
    },
    {
      id: '2',
      title: 'Newport Beach Housing Market Trends',
      date: 'December 10, 2024',
      excerpt: 'Newport Beach remains one of Orange County\'s most prestigious coastal markets, with luxury properties and waterfront estates commanding premium prices.',
      category: 'Local Market',
    },
    {
      id: '3',
      title: 'Interest Rates and Their Impact on Orange County Probate Real Estate',
      date: 'December 5, 2024',
      excerpt: 'Understanding how current interest rates affect buyer purchasing power and probate property sales in Orange County communities including Newport Beach, Irvine, and Corona Del Mar.',
      category: 'Market Analysis',
    },
    {
      id: '4',
      title: 'Luxury Probate Property Market Update - Newport Beach & Corona Del Mar',
      date: 'November 28, 2024',
      excerpt: 'The luxury probate property segment continues to perform well in Orange County, with high-end properties in coastal communities like Newport Beach and Corona Del Mar seeing strong appreciation.',
      category: 'Luxury Market',
    },
    {
      id: '5',
      title: 'Irvine Probate Real Estate Market Trends | Master-Planned Community Probate Sales',
      date: 'November 20, 2024',
      excerpt: 'Irvine probate real estate market demonstrates strong performance with master-planned community properties attracting families and professionals. Top-rated schools and extensive amenities support probate property values.',
      category: 'Local Market',
    },
    {
      id: '6',
      title: 'Corona Del Mar Probate Real Estate Market | Exclusive Coastal Probate Properties',
      date: 'November 15, 2024',
      excerpt: 'Corona Del Mar probate real estate market offers exclusive coastal properties with sophisticated homes and stunning ocean views. Luxury probate properties attract high-net-worth buyers seeking Orange County\'s finest coastal living.',
      category: 'Luxury Market',
    },
    {
      id: '7',
      title: 'Laguna Beach Probate Real Estate Market | Artistic Coastal Community Probate Sales',
      date: 'November 10, 2024',
      excerpt: 'Laguna Beach probate real estate market offers unique coastal properties with artistic community character, beautiful beaches, and distinctive architectural homes. Probate properties attract buyers seeking coastal living with artistic flair.',
      category: 'Local Market',
    },
    {
      id: '8',
      title: 'Costa Mesa Probate Real Estate Market | Diverse Property Types and Convenient Location',
      date: 'November 5, 2024',
      excerpt: 'Costa Mesa probate real estate market offers diverse property types from single-family homes to multi-unit properties. Convenient location and excellent shopping support probate property values throughout Costa Mesa.',
      category: 'Local Market',
    },
    {
      id: '9',
      title: 'Huntington Beach Probate Real Estate Market | Surf City USA Probate Properties',
      date: 'October 30, 2024',
      excerpt: 'Huntington Beach probate real estate market offers beach community properties with miles of beaches, family-friendly neighborhoods, and active lifestyle amenities. Probate properties attract buyers seeking Surf City USA lifestyle.',
      category: 'Local Market',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Orange County Probate Real Estate Market Updates
          </h1>
          <p className="text-xl text-neutral-200">
            Stay informed about probate real estate market trends in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Stay informed about Orange County probate real estate market trends and local insights. Our market updates provide comprehensive information about probate property sales, market conditions, and trends across Orange County communities including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Understanding local market dynamics is essential for successful probate property sales and maximizing estate values.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Just Call Gene provides probate real estate services throughout Orange County, California. Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618. For probate property consultations, call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a>.
            </p>
          </div>
          
          <div className="space-y-8">
            {updates.map((update) => (
              <article key={update.id} className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {update.category}
                  </span>
                  <time className="text-neutral-500 text-sm">{update.date}</time>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  {update.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {update.excerpt}
                </p>
                <Link
                  href={`/media/market-updates/${update.id}`}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  Read More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}






