import Link from 'next/link';

export default function MarketUpdatesPage() {
  const updates = [
    {
      id: '1',
      title: 'Las Vegas Real Estate Market Report - December 2024',
      date: 'December 15, 2024',
      excerpt: 'The Las Vegas market continues to show strong activity with median home prices reaching new heights. Inventory levels remain tight, creating a competitive environment for buyers.',
      category: 'Market Analysis',
    },
    {
      id: '2',
      title: 'Henderson Housing Market Trends',
      date: 'December 10, 2024',
      excerpt: 'Henderson remains one of the most sought-after areas in the valley, with family-friendly neighborhoods and excellent schools driving demand.',
      category: 'Local Market',
    },
    {
      id: '3',
      title: 'Interest Rates and Their Impact on Las Vegas Real Estate',
      date: 'December 5, 2024',
      excerpt: 'Understanding how current interest rates affect buyer purchasing power and market dynamics in the Las Vegas area.',
      category: 'Market Analysis',
    },
    {
      id: '4',
      title: 'Luxury Home Market Update - Summerlin & Anthem',
      date: 'November 28, 2024',
      excerpt: 'The luxury segment continues to perform well, with high-end properties in master-planned communities seeing strong appreciation.',
      category: 'Luxury Market',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Market Updates
          </h1>
          <p className="text-xl text-neutral-200">
            Stay informed about the Las Vegas real estate market
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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




