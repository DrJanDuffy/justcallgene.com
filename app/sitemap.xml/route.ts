import { NextResponse } from 'next/server';
import { communities } from '@/lib/data';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  
  // Main pages
  const mainPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/probate', priority: '0.8', changefreq: 'monthly' },
    { url: '/search', priority: '0.8', changefreq: 'weekly' },
    { url: '/search/advanced', priority: '0.7', changefreq: 'monthly' },
    { url: '/search/map', priority: '0.7', changefreq: 'monthly' },
    { url: '/buyers/mortgage-calculator', priority: '0.7', changefreq: 'monthly' },
    { url: '/sellers/valuation', priority: '0.8', changefreq: 'monthly' },
    { url: '/sellers/relocation', priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Community pages
  const communityPages = communities.map((community) => ({
    url: `/communities/${community.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));
  
  const allPages = [...mainPages, ...communityPages];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${cleanUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

