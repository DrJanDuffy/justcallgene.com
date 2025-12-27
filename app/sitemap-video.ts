import { MetadataRoute } from 'next';

export default function videoSitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const today = new Date();

  // Video data - matches the videos in app/media/videos/[id]/page.tsx
  const videos = [
    {
      id: '1',
      title: 'Understanding Probate Real Estate',
      description: 'Learn about the probate process and how it affects real estate transactions.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '5:32', // Format: MM:SS
      contentUrl: `${cleanUrl}/media/videos/1`,
      uploadDate: new Date('2024-12-01'),
    },
    {
      id: '2',
      title: 'Las Vegas Market Update - Q4 2024',
      description: 'Current market trends and insights for Las Vegas real estate.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '8:15',
      contentUrl: `${cleanUrl}/media/videos/2`,
      uploadDate: new Date('2024-12-10'),
    },
    {
      id: '3',
      title: 'Tips for First-Time Home Buyers',
      description: 'Essential advice for navigating your first home purchase in Las Vegas.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '6:45',
      contentUrl: `${cleanUrl}/media/videos/3`,
      uploadDate: new Date('2024-12-15'),
    },
    {
      id: '4',
      title: 'Selling Your Home: Pricing Strategy',
      description: 'How to price your home competitively in today\'s market.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '7:20',
      contentUrl: `${cleanUrl}/media/videos/4`,
      uploadDate: new Date('2024-12-20'),
    },
  ];

  // Convert duration from MM:SS to seconds for ISO 8601 format
  const durationToSeconds = (duration: string): number => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  // Format duration to ISO 8601 (PT5M32S)
  const formatDuration = (duration: string): string => {
    const seconds = durationToSeconds(duration);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `PT${minutes}M${remainingSeconds}S`;
  };

  return videos.map((video) => ({
    url: video.contentUrl,
    lastModified: video.uploadDate,
    changeFrequency: 'monthly',
    priority: 0.7,
    // Video-specific metadata
    alternates: {
      languages: {
        en: video.contentUrl,
      },
    },
    // Note: Next.js MetadataRoute.Sitemap doesn't support video tags directly
    // We'll need to create a custom XML route for proper video sitemap format
  }));
}

