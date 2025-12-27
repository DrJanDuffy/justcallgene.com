import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { fetchRSSFeed } from '@/lib/rss-feed';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Real Estate Market Insights | Graphs & Videos | Orange County',
  description: 'Latest real estate market insights, graphs, and videos from Simplifying the Market. Stay informed about Orange County probate real estate trends and market analysis.',
  keywords: [
    'real estate market insights',
    'housing market graphs',
    'real estate videos',
    'market trends Orange County',
    'probate real estate insights',
  ],
  openGraph: {
    title: 'Real Estate Market Insights | Graphs & Videos',
    description: 'Latest real estate market insights, graphs, and videos.',
    url: `${siteConfig.url}/media/market-insights`,
  },
  alternates: {
    canonical: `${siteConfig.url}/media/market-insights`,
  },
};

export default async function MarketInsightsPage() {
  const feedItems = await fetchRSSFeed();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate Market <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Latest graphs, videos, and insights from Simplifying the Market
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Stay informed about real estate market trends with the latest insights, graphs, and videos from Simplifying the Market. These resources provide valuable information about housing market conditions, mortgage rates, and real estate trends that can help inform your probate property decisions in Orange County.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Just Call Gene provides probate real estate services throughout Orange County, California. Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618. For probate property consultations, call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            Latest Market <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Insights</span>
          </h2>

          {feedItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600">No insights available at this time. Please check back later.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {feedItems.map((item, index) => (
                <Card key={index} className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        {item.category.map((cat, i) => (
                          <span key={i} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            {cat}
                          </span>
                        ))}
                        {item.pubDate && (
                          <time className="text-neutral-500 text-sm">
                            {new Date(item.pubDate).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </time>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                        {item.title}
                      </h3>
                      
                      <div 
                        className="text-neutral-700 prose prose-sm max-w-none mb-4"
                        dangerouslySetInnerHTML={{ 
                          __html: item.description.replace(/<img[^>]*>/g, '') // Remove images from description
                        }} 
                      />
                      
                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold hover:underline inline-flex items-center"
                        >
                          Read Full Article
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>

                    {/* Images/Graphs */}
                    {(item.graphs.length > 0 || item.images.length > 0) && (
                      <div className="md:w-1/3 space-y-4">
                        {item.graphs.map((graph, i) => (
                          <div key={i} className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                            <Image
                              src={graph}
                              alt={`${item.title} - Market Graph`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              unoptimized
                            />
                          </div>
                        ))}
                        {item.images.slice(0, 1).map((img, i) => (
                          <div key={i} className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                            <Image
                              src={img}
                              alt={`${item.title} - Header Image`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Videos */}
                  {item.videos.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">Videos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.videos.map((video, i) => {
                          const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');
                          const isVimeo = video.includes('vimeo.com');
                          
                          let embedUrl = '';
                          if (isYouTube) {
                            const videoId = video.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];
                            if (videoId) {
                              embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            }
                          } else if (isVimeo) {
                            const videoId = video.match(/vimeo\.com\/(\d+)/)?.[1];
                            if (videoId) {
                              embedUrl = `https://player.vimeo.com/video/${videoId}`;
                            }
                          }
                          
                          if (!embedUrl) return null;
                          
                          return (
                            <div key={i} className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden">
                              <iframe
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`${item.title} - Video ${i + 1}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* All Graphs Section */}
                  {item.graphs.length > 1 && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <h4 className="text-lg font-bold text-neutral-900 mb-4">Market Graphs & Charts</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.graphs.map((graph, i) => (
                          <div key={i} className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                            <Image
                              src={graph}
                              alt={`${item.title} - Market Graph ${i + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Probate Property in Orange County?
          </h2>
          <p className="text-xl text-neutral-100 mb-8">
            Our probate real estate specialists serve all Orange County communities. Call <a href="tel:949-776-3527" className="font-semibold underline hover:text-white/90">(949) 776-3527</a> for a free probate consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

