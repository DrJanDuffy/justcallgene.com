import { NextResponse } from 'next/server';
import { communities, featuredListings } from '@/lib/data';

export async function GET() {
  // Always use canonical www HTTPS URL
  const baseUrl = 'https://www.justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString();

  // Collect images from various sources
  const imageUrls: Array<{
    url: string;
    image: string;
    title: string;
    caption?: string;
  }> = [];

  // Homepage images
  imageUrls.push({
    url: cleanUrl,
    image: `${cleanUrl}/images/agents/EugeneBoyle%20large%20.jpg`,
    title: 'Gene Boyle - Orange County Probate Real Estate Specialist',
    caption: 'Gene Boyle, Certified Probate Real Estate Specialist',
  });

  // Community images
  communities.forEach((community) => {
    imageUrls.push({
      url: `${cleanUrl}/communities/${community.slug}`,
      image: community.image,
      title: `${community.name} Probate Real Estate - Orange County`,
      caption: `Probate real estate services in ${community.name}, Orange County`,
    });
  });

  // Listing images
  featuredListings.forEach((listing) => {
    imageUrls.push({
      url: `${cleanUrl}/listings/${listing.id}`,
      image: listing.image,
      title: `${listing.address} - Probate Property for Sale`,
      caption: `Probate property for sale at ${listing.address}, ${listing.city}`,
    });
  });

  // Blog post images (assuming placeholder)
  for (let i = 1; i <= 6; i++) {
    imageUrls.push({
      url: `${cleanUrl}/blog/${i}`,
      image: `${cleanUrl}/placeholder-blog.jpg`,
      title: `Blog Post ${i} - Orange County Probate Real Estate`,
      caption: 'Probate real estate blog post image',
    });
  }

  // Video thumbnails
  for (let i = 1; i <= 4; i++) {
    imageUrls.push({
      url: `${cleanUrl}/media/videos/${i}`,
      image: `${cleanUrl}/placeholder-video.jpg`,
      title: `Video ${i} - Probate Real Estate`,
      caption: 'Probate real estate video thumbnail',
    });
  }

  // Group images by URL
  const imagesByUrl = new Map<string, typeof imageUrls>();
  imageUrls.forEach((item) => {
    if (!imagesByUrl.has(item.url)) {
      imagesByUrl.set(item.url, []);
    }
    imagesByUrl.get(item.url)!.push(item);
  });

  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${Array.from(imagesByUrl.entries())
  .map(
    ([url, images]) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${images
  .map(
    (img) => `    <image:image>
      <image:loc>${img.image}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      ${img.caption ? `<image:caption><![CDATA[${img.caption}]]></image:caption>` : ''}
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}


