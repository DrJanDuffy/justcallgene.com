import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ id: string }>;
};

const blogPosts: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string;
}> = {
  '1': {
    id: '1',
    title: '10 Things to Know Before Buying a Home in Las Vegas',
    excerpt: 'Essential tips for first-time and experienced buyers navigating the Las Vegas real estate market.',
    image: '/placeholder-blog.jpg',
    date: 'December 20, 2024',
    category: 'Buying',
    content: `Buying a home in Las Vegas can be an exciting journey, but it's important to be well-prepared. Here are 10 essential things every buyer should know:

1. **Market Research is Key**: The Las Vegas real estate market is dynamic. Prices can vary significantly by neighborhood, so thorough research is essential.

2. **Get Pre-Approved**: Before you start house hunting, get pre-approved for a mortgage. This shows sellers you're serious and helps you understand your budget.

3. **Understand HOA Fees**: Many Las Vegas communities have Homeowners Associations (HOAs). Make sure you understand the monthly fees and what they cover.

4. **Consider the Climate**: Las Vegas has a desert climate with hot summers. Consider energy-efficient homes and landscaping that can handle the heat.

5. **School Districts Matter**: Even if you don't have children, good school districts can significantly impact property values.

6. **Water Rights and Utilities**: Understand water rights and utility costs, which can be higher in desert climates.

7. **Property Taxes**: Nevada has relatively low property taxes, but it's still important to factor them into your budget.

8. **Home Inspections**: Always get a professional home inspection, especially for older properties or homes with pools.

9. **Work with a Local Expert**: A knowledgeable local real estate agent can help you navigate the market and find the best deals.

10. **Be Patient**: The right home is out there. Don't rush into a decision you might regret later.`,
  },
  '2': {
    id: '2',
    title: 'How to Stage Your Home for a Quick Sale',
    excerpt: 'Professional staging tips that can help your home sell faster and for a higher price.',
    image: '/placeholder-blog.jpg',
    date: 'December 18, 2024',
    category: 'Selling',
    content: `Staging your home effectively can make the difference between a quick sale and a property that sits on the market. Here's how to stage your Las Vegas home for success:

**Declutter and Depersonalize**: Remove personal items and excess clutter. Buyers need to envision themselves living in the space.

**Maximize Curb Appeal**: First impressions matter. Ensure your landscaping is well-maintained, paint is fresh, and the entryway is welcoming.

**Lighting is Everything**: Open all curtains and blinds. Add extra lighting where needed. Bright, airy spaces feel larger and more inviting.

**Neutral Color Palette**: While you might love bold colors, neutral tones appeal to more buyers and make spaces feel larger.

**Focus on Key Rooms**: Prioritize staging the living room, master bedroom, and kitchen - these are the rooms buyers care about most.

**Professional Photography**: Invest in professional photos. Most buyers start their search online, and great photos can make all the difference.

**Fix Minor Repairs**: Address small issues like leaky faucets, squeaky doors, or chipped paint. These small details can turn buyers away.

**Create a Welcoming Atmosphere**: Consider adding fresh flowers, pleasant scents, and soft background music during showings.`,
  },
  '3': {
    id: '3',
    title: 'Best Neighborhoods for Families in Henderson',
    excerpt: 'A comprehensive guide to family-friendly communities with great schools and amenities.',
    image: '/placeholder-blog.jpg',
    date: 'December 15, 2024',
    category: 'Communities',
    content: `Henderson is consistently ranked as one of the best places to raise a family in Nevada. Here are the top neighborhoods for families:

**Green Valley**: This master-planned community offers excellent schools, numerous parks, and family-friendly amenities. The area has a strong sense of community and is known for its safety.

**Anthem**: A premier community with luxury homes, top-rated schools, and resort-style amenities. The area features beautiful parks, trails, and recreational facilities.

**Seven Hills**: Known for its excellent school district and family-oriented atmosphere. The community offers a variety of housing options and great amenities.

**MacDonald Ranch**: This newer development offers modern homes with energy-efficient features, excellent schools, and beautiful parks.

**Lake Las Vegas**: While known for luxury, this area also offers family-friendly neighborhoods with access to the lake, golf courses, and excellent schools.

Each of these neighborhoods offers something unique, but they all share common traits: excellent schools, safe communities, and family-friendly amenities.`,
  },
  '4': {
    id: '4',
    title: 'Understanding Probate Real Estate: A Complete Guide',
    excerpt: 'Everything you need to know about buying or selling probate properties in Nevada.',
    image: '/placeholder-blog.jpg',
    date: 'December 12, 2024',
    category: 'Probate',
    content: `Probate real estate transactions require special knowledge and expertise. Here's what you need to know:

**What is Probate?**: Probate is the legal process of distributing a deceased person's assets, including real estate, according to their will or state law.

**Why Probate Properties are Different**: These transactions involve court oversight, specific timelines, and unique legal requirements that differ from standard real estate sales.

**Working with Executors**: Executors or administrators handle the estate. They may not be familiar with real estate, so patience and clear communication are essential.

**Court Approval Required**: Most probate sales require court approval, which can add time to the transaction process.

**As-Is Sales**: Probate properties are typically sold "as-is," meaning the estate won't make repairs. Buyers should factor this into their offers.

**Opportunities for Buyers**: Probate sales can sometimes offer good value, as executors may prioritize a quick sale over maximum price.

**Professional Help is Essential**: Working with a Certified Probate Real Estate Specialist ensures the process goes smoothly and all legal requirements are met.`,
  },
  '5': {
    id: '5',
    title: 'Las Vegas Real Estate Investment Opportunities',
    excerpt: 'Exploring the potential for real estate investment in the growing Las Vegas market.',
    image: '/placeholder-blog.jpg',
    date: 'December 10, 2024',
    category: 'Investing',
    content: `Las Vegas offers unique opportunities for real estate investors. Here's what you should know:

**Growing Population**: Las Vegas continues to attract new residents, creating consistent demand for housing.

**Tourism Industry**: The strong tourism sector provides opportunities for short-term rental investments.

**Diversified Economy**: Beyond tourism, Las Vegas has a growing tech sector, healthcare industry, and business services.

**Affordable Entry Point**: Compared to other major markets, Las Vegas offers relatively affordable entry points for investors.

**Rental Market**: Strong rental demand makes Las Vegas attractive for buy-and-hold investors.

**Tax Benefits**: Nevada's tax-friendly environment benefits investors with no state income tax.

**Market Cycles**: Understanding Las Vegas market cycles is crucial for timing your investments.

**Location Matters**: Focus on areas with strong fundamentals: good schools, employment centers, and amenities.

**Due Diligence**: Always conduct thorough research on neighborhoods, property conditions, and market trends before investing.`,
  },
  '6': {
    id: '6',
    title: 'Mortgage Pre-Approval: Your First Step to Homeownership',
    excerpt: 'Why getting pre-approved is crucial and how to navigate the mortgage process.',
    image: '/placeholder-blog.jpg',
    date: 'December 8, 2024',
    category: 'Buying',
    content: `Getting pre-approved for a mortgage is one of the most important steps in the home buying process. Here's why:

**Know Your Budget**: Pre-approval tells you exactly how much you can afford, preventing you from falling in love with homes outside your price range.

**Show Sellers You're Serious**: In competitive markets, pre-approval makes your offer stand out and shows sellers you're a qualified buyer.

**Faster Closing**: The mortgage process is already underway, which can speed up your closing timeline.

**Identify Issues Early**: Pre-approval can reveal credit or financial issues that need to be addressed before you start house hunting.

**What You'll Need**: Be prepared to provide income documentation, tax returns, bank statements, and information about your debts.

**Shop Around**: Different lenders offer different rates and terms. Get pre-approved with multiple lenders to find the best deal.

**Pre-Approval vs. Pre-Qualification**: Pre-approval is more thorough and carries more weight with sellers than pre-qualification.

**Keep It Current**: Pre-approvals typically last 60-90 days. You may need to renew if your house search takes longer.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      'real estate tips',
      'Orange County real estate',
      'home buying advice',
      'home selling tips',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${id}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-4"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <time className="text-neutral-500">{post.date}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-6 text-neutral-100">
            Let's discuss your real estate goals and how we can help you achieve them.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </article>
    </div>
  );
}



