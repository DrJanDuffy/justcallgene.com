# Google Setup Guide

Your Next.js site is now prepared for Google Search Console and SEO optimization.

## ✅ What's Been Set Up

### 1. **Sitemap** (`app/sitemap.ts`)
- Automatically generates `/sitemap.xml`
- Updates when you add new routes
- Configured with proper priorities and change frequencies

### 2. **Robots.txt** (`app/robots.ts`)
- Automatically generates `/robots.txt`
- Allows all crawlers
- Blocks `/api/` and `/_next/` directories
- References sitemap location

### 3. **SEO Metadata** (`app/layout.tsx`)
- Complete Open Graph tags for social sharing
- Twitter Card metadata
- Proper title templates
- Keywords and descriptions
- Google Search Console verification placeholder

### 4. **LocalBusiness Schema** (`components/StructuredData.tsx`)
- JSON-LD structured data for Google Business Profile
- Includes NAP (Name, Address, Phone) data
- Business hours
- Services offered
- Ready for Google to display rich results

### 5. **Configuration File** (`lib/config.ts`)
- Centralized business information
- Easy to update NAP data
- Matches Google Business Profile requirements

## 🔧 Next Steps - REQUIRED

### 1. Update Business Information

Edit `lib/config.ts` with your actual business details:

```typescript
business: {
  name: 'Your Business Name', // Must match Google Business Profile
  address: {
    streetAddress: '123 Main Street',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US',
  },
  phone: '+1-702-555-1234', // Include country code
  // ... etc
}
```

**CRITICAL:** The NAP (Name, Address, Phone) must match your Google Business Profile EXACTLY.

### 2. Set Environment Variable

Add to your `.env.local` or Vercel environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://justcallgene.com
```

### 3. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (justcallgene.com)
3. Verify ownership using one of these methods:
   - HTML file upload
   - HTML tag (add to `app/layout.tsx` metadata.verification.google)
   - DNS record
   - Google Analytics (already set up!)

### 4. Submit Sitemap

After verification:
1. Go to Sitemaps section in Search Console
2. Submit: `https://justcallgene.com/sitemap.xml`

### 5. Test Structured Data

1. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your URL
3. Verify LocalBusiness schema is detected
4. Fix any errors shown

### 6. Add Open Graph Image

Create an `og-image.jpg` (1200x630px) and place in `public/` folder, then uncomment the image references in `app/layout.tsx`.

### 7. Google Business Profile Integration

- Add your Google Business Profile URL to `lib/config.ts`
- Ensure business hours match exactly
- Add Google Reviews widget if desired
- Link to Google Maps embed

## 📋 Checklist

- [ ] Update `lib/config.ts` with actual business NAP data
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Test structured data with Rich Results Test
- [ ] Create and add OG image
- [ ] Verify NAP matches Google Business Profile exactly
- [ ] Test robots.txt at `/robots.txt`
- [ ] Test sitemap at `/sitemap.xml`

## 🔍 Verification URLs

After deployment, verify these URLs work:
- `https://justcallgene.com/sitemap.xml`
- `https://justcallgene.com/robots.txt`

## 📚 Resources

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)


