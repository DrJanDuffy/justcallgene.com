import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { VideoSchema } from '@/components/schema/VideoSchema';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ id: string }>;
};

const videos: Record<string, {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl?: string;
  content: string;
}> = {
  '1': {
    id: '1',
    title: 'Understanding Probate Real Estate',
    description: 'Learn about the probate process and how it affects real estate transactions.',
    thumbnail: '/placeholder-video.jpg',
    duration: '5:32',
    content: `In this comprehensive video, we explore the probate real estate process from start to finish. Learn about:

- What probate means for real estate
- How probate sales differ from traditional sales
- The role of executors and administrators
- Court approval requirements
- Timeline expectations
- Opportunities for buyers and sellers

Whether you're dealing with a probate property or considering purchasing one, this video provides essential information to help you navigate the process successfully.`,
  },
  '2': {
    id: '2',
    title: 'Las Vegas Market Update - Q4 2024',
    description: 'Current market trends and insights for Las Vegas real estate.',
    thumbnail: '/placeholder-video.jpg',
    duration: '8:15',
    content: `Get the latest insights on the Las Vegas real estate market in this quarterly update. We cover:

- Current median home prices
- Inventory levels and days on market
- Interest rate impacts
- Neighborhood-specific trends
- Predictions for the coming months
- Investment opportunities

Stay informed about market conditions to make the best decisions for your real estate goals.`,
  },
  '3': {
    id: '3',
    title: 'Tips for First-Time Home Buyers',
    description: 'Essential advice for navigating your first home purchase in Las Vegas.',
    thumbnail: '/placeholder-video.jpg',
    duration: '6:45',
    content: `Buying your first home is an exciting milestone. This video covers everything first-time buyers need to know:

- Getting pre-approved for a mortgage
- Understanding your budget
- Working with a real estate agent
- Making competitive offers
- Home inspection essentials
- Closing process overview
- Common first-time buyer mistakes to avoid

Start your home buying journey with confidence.`,
  },
  '4': {
    id: '4',
    title: 'Selling Your Home: Pricing Strategy',
    description: 'How to price your home competitively in today\'s market.',
    thumbnail: '/placeholder-video.jpg',
    duration: '7:20',
    content: `Pricing your home correctly is crucial for a successful sale. Learn about:

- Comparative market analysis (CMA)
- Factors that affect home value
- Pricing strategies for different market conditions
- The psychology of pricing
- When to adjust your price
- Working with appraisals
- Maximizing your sale price

Get expert advice on pricing your Las Vegas home for maximum return.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(videos).map((id) => ({ id }));
}

export default async function VideoPage({ params }: Props) {
  const { id } = await params;
  const video = videos[id];

  if (!video) {
    notFound();
  }

  const videoUrl = `${siteConfig.url}/media/videos/${id}`;
  const uploadDate = new Date().toISOString(); // You can add actual upload dates to video data

  return (
    <>
      <VideoSchema
        name={video.title}
        description={video.description}
        thumbnailUrl={video.thumbnail}
        uploadDate={uploadDate}
        duration={`PT${video.duration.replace(':', 'M')}S`} // Convert to ISO 8601 duration
        contentUrl={video.videoUrl}
      />
      <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/media/videos"
          className="text-primary hover:text-primary-dark font-semibold inline-flex items-center mb-6"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Videos
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {video.title}
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            {video.description}
          </p>
          <div className="flex items-center space-x-4 text-sm text-neutral-500">
            <span>Duration: {video.duration}</span>
          </div>
        </div>

        {/* Video Player Placeholder */}
        <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-lg font-semibold">Video Player</p>
              <p className="text-sm text-neutral-300 mt-2">
                Video embed will be added here (YouTube, Vimeo, etc.)
              </p>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="prose prose-lg max-w-none">
          <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
            {video.content}
          </div>
        </div>

        {/* Related Videos */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">More Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(videos)
              .filter((v) => v.id !== id)
              .slice(0, 2)
              .map((relatedVideo) => (
                <Link
                  key={relatedVideo.id}
                  href={`/media/videos/${relatedVideo.id}`}
                  className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-neutral-900 mb-2">{relatedVideo.title}</h3>
                    <p className="text-sm text-neutral-600">{relatedVideo.duration}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

