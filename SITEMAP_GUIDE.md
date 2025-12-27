# Sitemap Guide

## Overview

This site now includes multiple sitemaps to help search engines discover and index all content:

1. **Main Sitemap** (`/sitemap.xml`) - Standard XML sitemap with all pages
2. **Video Sitemap** (`/sitemap-video.xml`) - Video-specific sitemap with video metadata
3. **Image Sitemap** (`/sitemap-image.xml`) - Image-specific sitemap for better image discovery
4. **Sitemap Index** (`/sitemap-index.xml`) - Master sitemap that references all other sitemaps

## Sitemap URLs

- **Sitemap Index**: `https://www.justcallgene.com/sitemap-index.xml`
- **Main Sitemap**: `https://www.justcallgene.com/sitemap.xml`
- **Video Sitemap**: `https://www.justcallgene.com/sitemap-video.xml`
- **Image Sitemap**: `https://www.justcallgene.com/sitemap-image.xml`

## Google Search Console Setup

### Recommended Approach: Submit Sitemap Index

Submit the **sitemap index** to Google Search Console:
```
https://www.justcallgene.com/sitemap-index.xml
```

This will automatically include all other sitemaps.

### Alternative: Submit Individual Sitemaps

You can also submit individual sitemaps if needed:
- Main: `https://www.justcallgene.com/sitemap.xml`
- Video: `https://www.justcallgene.com/sitemap-video.xml`
- Image: `https://www.justcallgene.com/sitemap-image.xml`

## What Each Sitemap Contains

### Main Sitemap (`/sitemap.xml`)
- All static pages (home, about, contact, services, etc.)
- Community pages
- Blog posts
- Listing pages
- Market update pages
- Video pages (as regular URLs)

### Video Sitemap (`/sitemap-video.xml`)
- 4 video pages with video-specific metadata:
  - Video title
  - Description
  - Thumbnail URL
  - Duration (ISO 8601 format)
  - Publication date
  - Content URL
- Helps Google discover and index videos for video search results

### Image Sitemap (`/sitemap-image.xml`)
- Images from homepage
- Community images
- Listing images
- Blog post images
- Video thumbnails
- Includes image titles and captions for SEO

### Sitemap Index (`/sitemap-index.xml`)
- References all three sitemaps above
- Single entry point for search engines

## Benefits

1. **Better Video Discovery**: Video sitemap helps Google find and index videos, enabling video search results
2. **Image SEO**: Image sitemap improves image search visibility
3. **Organized Structure**: Sitemap index provides a clean way to manage multiple sitemaps
4. **Better Indexing**: More comprehensive coverage of all site content

## Updating Sitemaps

Sitemaps are automatically generated at build time and update when:
- New pages are added
- Content is updated
- New videos or images are added

## Verification

After deployment, verify sitemaps are accessible:
- Visit `https://www.justcallgene.com/sitemap-index.xml` in browser
- Check Google Search Console for sitemap status
- Verify video sitemap shows videos discovered (should show 4 videos)

## Notes

- All sitemaps use the same base URL from `NEXT_PUBLIC_SITE_URL` environment variable
- Video durations are converted to ISO 8601 format (PT5M32S)
- Image sitemap groups images by page URL
- All sitemaps include proper caching headers for performance

---

**Last Updated**: December 26, 2025


