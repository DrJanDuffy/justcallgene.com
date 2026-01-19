import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { siteConfig } from '@/lib/config';
import { PageSchemas } from '@/components/schema/PageSchemas';

export const metadata: Metadata = {
  title: 'Probate Real Estate Blog - Orange County Probate Insights & Tips',
  description: 'Expert probate real estate insights, tips, and updates for Orange County, CA. Learn about probate property sales, court procedures, and probate real estate in Newport Beach, Irvine, and Corona Del Mar.',
  keywords: [
    'probate real estate blog',
    'Orange County probate news',
    'probate property tips',
    'probate sale advice',
    'probate market updates',
    'Newport Beach probate real estate',
    'Irvine probate trends',
  ],
  openGraph: {
    title: 'Probate Real Estate Blog - Orange County Probate Insights',
    description: 'Expert insights and tips for probate property sales in Orange County.',
    url: `${siteConfig.url}/blog`,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
        includeFAQ={true}
        includeReviews={true}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-center text-neutral-100 max-w-3xl mx-auto">
              Expert insights and tips for probate property sales in Orange County
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {(() => {
            const posts = [
    {
      id: '1',
      title: '10 Things to Know Before Buying a Home in Las Vegas',
      excerpt: 'Essential tips for first-time and experienced buyers navigating the Las Vegas real estate market.',
      image: '/placeholder-blog.jpg',
      date: 'December 20, 2024',
      category: 'Buying',
    },
    {
      id: '2',
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Professional staging tips that can help your home sell faster and for a higher price.',
      image: '/placeholder-blog.jpg',
      date: 'December 18, 2024',
      category: 'Selling',
    },
    {
      id: '3',
      title: 'Best Neighborhoods for Families in Henderson',
      excerpt: 'A comprehensive guide to family-friendly communities with great schools and amenities.',
      image: '/placeholder-blog.jpg',
      date: 'December 15, 2024',
      category: 'Communities',
    },
    {
      id: '4',
      title: 'Understanding Probate Real Estate: A Complete Guide',
      excerpt: 'Everything you need to know about buying or selling probate properties in Nevada.',
      image: '/placeholder-blog.jpg',
      date: 'December 12, 2024',
      category: 'Probate',
    },
    {
      id: '5',
      title: 'Las Vegas Real Estate Investment Opportunities',
      excerpt: 'Exploring the potential for real estate investment in the growing Las Vegas market.',
      image: '/placeholder-blog.jpg',
      date: 'December 10, 2024',
      category: 'Investing',
    },
    {
      id: '6',
      title: 'Mortgage Pre-Approval: Your First Step to Homeownership',
      excerpt: 'Why getting pre-approved is crucial and how to navigate the mortgage process.',
      image: '/placeholder-blog.jpg',
      date: 'December 8, 2024',
      category: 'Buying',
    },
    {
      id: '7',
      title: 'How Long Does Probate Take in Orange County? A Complete Timeline Guide',
      excerpt: 'Understanding probate timelines in Orange County, CA. Learn what factors affect probate duration and how to navigate the process efficiently.',
      image: '/placeholder-blog.jpg',
      date: 'January 20, 2026',
      category: 'Probate',
    },
    {
      id: '8',
      title: 'Selling Inherited Property in California: Tax Implications and Strategies',
      excerpt: 'Complete guide to California tax implications when selling inherited property. Learn about step-up basis, capital gains, and tax-saving strategies.',
      image: '/placeholder-blog.jpg',
      date: 'January 22, 2026',
      category: 'Probate',
    },
    {
      id: '9',
      title: 'Orange County Probate Court Forms: Complete Guide for Executors and Administrators',
      excerpt: 'Essential Orange County probate court forms explained. Learn which forms you need, when to file them, and how to navigate the probate process.',
      image: '/placeholder-blog.jpg',
      date: 'January 24, 2026',
      category: 'Probate',
    },
    {
      id: '10',
      title: 'Do I Need to Go Through Probate to Sell an Inherited House in California?',
      excerpt: 'Learn when probate is required to sell inherited property in California and when you can avoid it. Understand your options and legal requirements.',
      image: '/placeholder-blog.jpg',
      date: 'January 26, 2026',
      category: 'Probate',
    },
  ];

            return (
              <>
      <section className="relative bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-primary-light text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Blog & Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Probate Real Estate{' '}
            <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto animate-fade-in-up">
            Insights, tips, and updates about probate property sales in Orange County
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article key={post.id} className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 border border-neutral-100 hover:-translate-y-1 group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-neutral-500 font-medium">{post.date}</time>
                  <h2 className="text-xl font-bold text-neutral-900 mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary font-semibold hover:text-primary-dark transition-all duration-300 inline-flex items-center group/link"
                  >
                    Read More
                    <svg className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InternalLinks
            title="Explore Our Services"
            links={[
              {
                href: '/probate',
                text: 'Probate Real Estate Process',
                description: 'Learn about probate property sales and court procedures',
              },
              {
                href: '/services',
                text: 'Our Probate Services',
                description: 'Comprehensive probate real estate services',
              },
              {
                href: '/sellers/valuation',
                text: 'Property Valuation',
                description: 'Get a free probate property valuation',
              },
              {
                href: '/about',
                text: 'About Our Team',
                description: 'Meet our certified Probate Real Estate Specialists',
              },
            ]}
          />
        </div>
      </section>
              </>
            );
          })()}
        </div>
      </main>
    </>
  );
}

