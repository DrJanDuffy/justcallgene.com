import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

const updates: Record<string, {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
}> = {
  '1': {
    id: '1',
    title: 'Las Vegas Real Estate Market Report - December 2024',
    date: 'December 15, 2024',
    excerpt: 'The Las Vegas market continues to show strong activity with median home prices reaching new heights.',
    category: 'Market Analysis',
    content: `The Las Vegas real estate market closed out 2024 with strong momentum, showing resilience and continued growth despite broader economic uncertainties.

**Key Market Indicators:**

- **Median Home Price**: $450,000 (up 5% from last quarter)
- **Days on Market**: Average 28 days (down from 35 days)
- **Inventory Levels**: 2.1 months supply (slightly below balanced market)
- **Sales Volume**: Up 8% compared to same period last year

**Neighborhood Highlights:**

- **Summerlin**: Continues to lead with luxury home sales, median price $750,000
- **Henderson**: Strong family market, median price $525,000
- **Green Valley**: Steady appreciation, median price $480,000
- **Las Vegas Core**: Affordable options remain, median price $380,000

**What This Means for Buyers:**

The market remains competitive, but opportunities exist for well-prepared buyers. Pre-approval and quick decision-making are essential in this environment.

**What This Means for Sellers:**

Homes priced correctly and in good condition are selling quickly. Proper staging and marketing can make a significant difference.

**Looking Ahead:**

We expect the market to remain active in early 2025, with continued demand driven by population growth and economic development in the region.`,
  },
  '2': {
    id: '2',
    title: 'Henderson Housing Market Trends',
    date: 'December 10, 2024',
    excerpt: 'Henderson remains one of the most sought-after areas in the valley.',
    category: 'Local Market',
    content: `Henderson continues to be a top choice for families and professionals moving to the Las Vegas area.

**Market Overview:**

- Strong demand across all price points
- Excellent school districts driving interest
- Master-planned communities performing well
- New construction activity remains high

**Popular Areas:**

- Green Valley: Established community with great amenities
- Anthem: Luxury homes and resort-style living
- Seven Hills: Family-friendly with excellent schools
- MacDonald Ranch: Newer development with modern features

**Investment Potential:**

Henderson's strong fundamentals make it attractive for both primary residence buyers and investors. The area's continued growth and development support long-term appreciation.`,
  },
  '3': {
    id: '3',
    title: 'Interest Rates and Their Impact on Las Vegas Real Estate',
    date: 'December 5, 2024',
    excerpt: 'Understanding how current interest rates affect buyer purchasing power.',
    category: 'Market Analysis',
    content: `Interest rates play a crucial role in the Las Vegas real estate market. Here's what current rates mean for buyers and sellers.

**Current Rate Environment:**

- 30-year fixed mortgages averaging around 6.5%
- Rate stability providing market confidence
- Refinancing activity picking up

**Impact on Buyers:**

Higher rates reduce purchasing power, but Las Vegas remains relatively affordable compared to other major markets. Buyers are adjusting expectations and focusing on value.

**Impact on Sellers:**

While rates have moderated demand slightly, well-priced homes continue to sell. Sellers need to be realistic about pricing in the current environment.

**Future Outlook:**

Rate movements will continue to influence the market, but Las Vegas's affordability and growth prospects provide a strong foundation.`,
  },
  '4': {
    id: '4',
    title: 'Luxury Home Market Update - Summerlin & Anthem',
    date: 'November 28, 2024',
    excerpt: 'The luxury segment continues to perform well.',
    category: 'Luxury Market',
    content: `The luxury home market in Las Vegas remains strong, with Summerlin and Anthem leading the way.

**Luxury Market Performance:**

- Homes over $1M showing strong sales
- Average days on market: 45 days
- Price per square foot: $350-$450
- International buyer interest increasing

**What's Driving Demand:**

- Quality of life and amenities
- Tax advantages
- Strong job market
- Resort-style living

**Key Features Buyers Want:**

- Modern kitchens and open floor plans
- Outdoor living spaces
- Energy efficiency
- Smart home technology
- Privacy and security

The luxury market continues to attract buyers seeking the best Las Vegas has to offer.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(updates).map((id) => ({ id }));
}

export default async function MarketUpdatePage({ params }: Props) {
  const { id } = await params;
  const update = updates[id];

  if (!update) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/media/market-updates"
          className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-6"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Market Updates
        </Link>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {update.category}
            </span>
            <time className="text-neutral-500">{update.date}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {update.title}
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
            {update.content}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-neutral-100">
            Subscribe to receive the latest market updates and insights.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get Market Updates
          </Link>
        </div>
      </article>
    </div>
  );
}

