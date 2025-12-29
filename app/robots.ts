import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Always use canonical www HTTPS URL
  const baseUrl = 'https://www.justcallgene.com';
  
  // Ensure baseUrl doesn't have trailing slash
  const cleanUrl = baseUrl.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // Block AI crawlers that don't follow robots.txt standards
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        disallow: '/',
      },
    ],
    sitemap: [
      `${cleanUrl}/sitemap-index.xml`,
      `${cleanUrl}/sitemap.xml`,
      `${cleanUrl}/sitemap-video.xml`,
      `${cleanUrl}/sitemap-image.xml`,
    ],
  };
}

