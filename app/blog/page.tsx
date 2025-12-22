import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate Blog
          </h1>
          <p className="text-xl text-neutral-200">
            Insights, tips, and updates about Las Vegas real estate
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-neutral-500">{post.date}</time>
                  <h2 className="text-xl font-bold text-neutral-900 mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

