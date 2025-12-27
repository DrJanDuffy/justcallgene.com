import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString();

  // Video data - matches the videos in app/media/videos/[id]/page.tsx
  const videos = [
    {
      id: '1',
      title: 'Understanding Probate Real Estate',
      description: 'Learn about the probate process and how it affects real estate transactions.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '5:32',
      contentUrl: `${cleanUrl}/media/videos/1`,
      uploadDate: '2024-12-01',
    },
    {
      id: '2',
      title: 'Las Vegas Market Update - Q4 2024',
      description: 'Current market trends and insights for Las Vegas real estate.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '8:15',
      contentUrl: `${cleanUrl}/media/videos/2`,
      uploadDate: '2024-12-10',
    },
    {
      id: '3',
      title: 'Tips for First-Time Home Buyers',
      description: 'Essential advice for navigating your first home purchase in Las Vegas.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '6:45',
      contentUrl: `${cleanUrl}/media/videos/3`,
      uploadDate: '2024-12-15',
    },
    {
      id: '4',
      title: 'Selling Your Home: Pricing Strategy',
      description: 'How to price your home competitively in today\'s market.',
      thumbnail: `${cleanUrl}/placeholder-video.jpg`,
      duration: '7:20',
      contentUrl: `${cleanUrl}/media/videos/4`,
      uploadDate: '2024-12-20',
    },
  ];

  // Convert duration from MM:SS to ISO 8601 format (PT5M32S)
  const formatDuration = (duration: string): string => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return `PT${minutes}M${seconds}S`;
  };

  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos
  .map(
    (video) => `  <url>
    <loc>${video.contentUrl}</loc>
    <lastmod>${video.uploadDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <video:video>
      <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:content_loc>${video.contentUrl}</video:content_loc>
      <video:duration>${formatDuration(video.duration)}</video:duration>
      <video:publication_date>${video.uploadDate}T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

