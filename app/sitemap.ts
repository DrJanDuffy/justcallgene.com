import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';

  // Ensure baseUrl doesn't have trailing slash
  const cleanUrl = baseUrl.replace(/\/$/, '');

  return [
    {
      url: cleanUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more routes as you create them
    // Example:
    // {
    //   url: `${cleanUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}

