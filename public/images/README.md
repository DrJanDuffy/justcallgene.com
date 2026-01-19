# Images Directory

This directory contains all static images and photos for the website.

## Directory Structure

```
images/
├── photos/          # General photos and stock images
├── listings/        # Property listing photos
├── communities/     # Community/neighborhood images
├── blog/            # Blog post featured images
├── videos/          # Video thumbnails
├── agents/          # Agent/broker photos
└── services/        # Service-related images
```

## Image Guidelines

### File Formats
- **Preferred**: `.jpg` or `.jpeg` for photos
- **Alternative**: `.webp` for optimized images
- **SVG**: For logos and icons (use `/public/` root for SVGs)

### Naming Conventions
- Use lowercase letters and hyphens
- Be descriptive: `gene-boyle-headshot.jpg` not `img1.jpg`
- Include dimensions if multiple sizes: `hero-banner-1920x1080.jpg`

### Image Sizes (Recommended)
- **Hero Images**: 1920x1080px (16:9 aspect ratio)
- **Agent Photos**: 800x800px (1:1 square)
- **Listing Photos**: 1200x800px (3:2 aspect ratio)
- **Blog Images**: 1200x630px (Open Graph standard)
- **Thumbnails**: 400x300px (4:3 aspect ratio)

### Optimization
- Compress images before uploading (use tools like TinyPNG, ImageOptim)
- Target file sizes:
  - Hero images: < 200KB
  - Regular photos: < 100KB
  - Thumbnails: < 50KB

## Current Placeholder Images Needed

Replace these placeholder images with actual photos:

### Agent Photos
- `/images/agents/gene-boyle.jpg` (replaces `/placeholder-broker.jpg`)
- `/images/agents/kelly-boyle.jpg` (replaces `/placeholder-broker.jpg`)

### Service Images
- `/images/services/probate-valuation.jpg` (replaces `/placeholder-service-sell-home.jpg`)
- `/images/services/probate-sale.jpg` (replaces `/placeholder-service-new-home.jpg`)

### Listing Photos
- `/images/listings/listing-1.jpg` (replaces `/placeholder-listing.jpg`)
- `/images/listings/listing-2.jpg`
- `/images/listings/listing-3.jpg`
- `/images/listings/listing-4.jpg`

### Blog Images
- `/images/blog/blog-1.jpg` through `/images/blog/blog-6.jpg` (replaces `/placeholder-blog.jpg`)

### Video Thumbnails
- `/images/videos/video-1.jpg` through `/images/videos/video-4.jpg` (replaces `/placeholder-video.jpg`)

### Community Images
- `/images/communities/newport-beach.jpg`
- `/images/communities/irvine.jpg`
- `/images/communities/corona-del-mar.jpg`
- (and other community images)

## Usage in Code

### Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/agents/gene-boyle.jpg"
  alt="Gene Boyle - Orange County Probate Real Estate Specialist"
  width={800}
  height={800}
  priority // For above-fold images
/>
```

### Regular img Tag (if needed)
```tsx
<img src="/images/photos/hero-banner.jpg" alt="Description" />
```

## Notes
- All images in this folder are publicly accessible
- Use descriptive alt text for accessibility and SEO
- Consider lazy loading for below-fold images
- Next.js automatically optimizes images when using the `Image` component
