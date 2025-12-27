/**
 * RSS Feed Parser for Simplifying the Market
 * Extracts videos, graphs, and images from the RSS feed
 */

export interface RSSItem {
  title: string;
  link: string;
  description: string;
  content: string;
  pubDate: string;
  category: string[];
  images: string[];
  graphs: string[];
  videos: string[];
}

export async function fetchRSSFeed(): Promise<RSSItem[]> {
  const feedUrl = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
  
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    
    const xmlText = await response.text();
    return parseRSSFeed(xmlText);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

function parseRSSFeed(xmlText: string): RSSItem[] {
  const items: RSSItem[] = [];
  
  // Extract items using regex (simple parser)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemContent = match[1];
    
    const title = extractTagContent(itemContent, 'title') || '';
    const link = extractTagContent(itemContent, 'link') || '';
    const description = extractTagContent(itemContent, 'description') || '';
    const content = extractTagContent(itemContent, 'content:encoded') || '';
    const pubDate = extractTagContent(itemContent, 'pubDate') || '';
    
    // Extract categories
    const categoryMatches = itemContent.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g) || [];
    const categories = categoryMatches.map(cat => {
      const match = cat.match(/<!\[CDATA\[(.*?)\]\]>/);
      return match ? match[1] : '';
    }).filter(Boolean);
    
    // Extract images from content and description
    const allImages = extractImages(content + description);
    
    // Separate graphs from regular images (graphs typically have "graph" or "chart" in filename)
    const graphs = allImages.filter(img => 
      img.toLowerCase().includes('graph') || 
      img.toLowerCase().includes('chart') ||
      img.toLowerCase().includes('data') ||
      img.toLowerCase().includes('statistic')
    );
    
    // Regular images (headers, etc.)
    const images = allImages.filter(img => !graphs.includes(img));
    
    // Extract videos (YouTube, Vimeo, etc.)
    const videos = extractVideos(content);
    
    items.push({
      title: cleanCDATA(title),
      link: cleanCDATA(link),
      description: cleanCDATA(description),
      content: cleanCDATA(content),
      pubDate: cleanCDATA(pubDate),
      category: categories,
      images,
      graphs,
      videos,
    });
  }
  
  return items;
}

function extractTagContent(xml: string, tagName: string): string | null {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : null;
}

function cleanCDATA(text: string): string {
  return text
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim();
}

function extractImages(html: string): string[] {
  const images: string[] = [];
  
  // Extract img src attributes
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !images.includes(src)) {
      images.push(src);
    }
  }
  
  // Also check for image URLs in href attributes (linked images)
  const hrefRegex = /href=["']([^"']+\.(jpg|jpeg|png|gif|webp))["']/gi;
  while ((match = hrefRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !images.includes(src)) {
      images.push(src);
    }
  }
  
  return images;
}

function extractVideos(html: string): string[] {
  const videos: string[] = [];
  
  // YouTube URLs
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
  let match;
  while ((match = youtubeRegex.exec(html)) !== null) {
    const videoId = match[1];
    videos.push(`https://www.youtube.com/watch?v=${videoId}`);
  }
  
  // Vimeo URLs
  const vimeoRegex = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/g;
  while ((match = vimeoRegex.exec(html)) !== null) {
    const videoId = match[1];
    videos.push(`https://vimeo.com/${videoId}`);
  }
  
  // iframe embeds
  const iframeRegex = /<iframe[^>]+src=["']([^"']+)["']/gi;
  while ((match = iframeRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && (src.includes('youtube') || src.includes('vimeo'))) {
      videos.push(src);
    }
  }
  
  return [...new Set(videos)]; // Remove duplicates
}

