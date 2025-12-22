import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function VideosPage() {
  const videos = [
    {
      id: '1',
      title: 'Understanding Probate Real Estate',
      description: 'Learn about the probate process and how it affects real estate transactions.',
      thumbnail: '/placeholder-video.jpg',
      duration: '5:32',
    },
    {
      id: '2',
      title: 'Las Vegas Market Update - Q4 2024',
      description: 'Current market trends and insights for Las Vegas real estate.',
      thumbnail: '/placeholder-video.jpg',
      duration: '8:15',
    },
    {
      id: '3',
      title: 'Tips for First-Time Home Buyers',
      description: 'Essential advice for navigating your first home purchase in Las Vegas.',
      thumbnail: '/placeholder-video.jpg',
      duration: '6:45',
    },
    {
      id: '4',
      title: 'Selling Your Home: Pricing Strategy',
      description: 'How to price your home competitively in today\'s market.',
      thumbnail: '/placeholder-video.jpg',
      duration: '7:20',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Probate Videos
          </h1>
          <p className="text-xl text-neutral-200">
            Educational videos about probate real estate and market insights
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-neutral-200">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {video.description}
                  </p>
                  <Button href={`/media/videos/${video.id}`} variant="outline" size="sm">
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

