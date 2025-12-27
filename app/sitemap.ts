import { MetadataRoute } from 'next';
import { communities, featuredListings } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const today = new Date();

  // Main static pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: cleanUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${cleanUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/probate`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/services`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/communities`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/sellers/valuation`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/media/videos`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${cleanUrl}/media`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/media/market-updates`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${cleanUrl}/media/probate-guides`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${cleanUrl}/login`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${cleanUrl}/register`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${cleanUrl}/forgot-password`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${cleanUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${cleanUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Community pages
  const communityPages: MetadataRoute.Sitemap = communities.map((community) => ({
    url: `${cleanUrl}/communities/${community.slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Blog posts (IDs 1-6)
  const blogPosts: MetadataRoute.Sitemap = [1, 2, 3, 4, 5, 6].map((id) => ({
    url: `${cleanUrl}/blog/${id}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Listing pages
  const listingPages: MetadataRoute.Sitemap = featuredListings.map((listing) => ({
    url: `${cleanUrl}/listings/${listing.id}`,
    lastModified: today,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // Market update pages (IDs 1-9)
  const marketUpdatePages: MetadataRoute.Sitemap = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => ({
    url: `${cleanUrl}/media/market-updates/${id}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Probate guide pages
  const probateGuidePages: MetadataRoute.Sitemap = [
    {
      url: `${cleanUrl}/media/probate-guides/coastal-probate-properties`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${cleanUrl}/media/probate-guides/probate-process-timeline`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${cleanUrl}/media/probate-guides/luxury-probate-properties`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${cleanUrl}/media/probate-guides/master-planned-community-probate`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Video pages (IDs 1-4)
  const videoPages: MetadataRoute.Sitemap = [1, 2, 3, 4].map((id) => ({
    url: `${cleanUrl}/media/videos/${id}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...mainPages,
    ...communityPages,
    ...blogPosts,
    ...listingPages,
    ...marketUpdatePages,
    ...videoPages,
    ...probateGuidePages,
  ];
}

