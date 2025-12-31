# Redirect Configuration - www.justcallgene.com

## Overview

All non-canonical URLs redirect to the canonical domain: **https://www.justcallgene.com**

## Redirect Rules

The following URL variations all redirect to `https://www.justcallgene.com`:

1. ✅ `http://justcallgene.com` → `https://www.justcallgene.com` (301)
2. ✅ `http://www.justcallgene.com` → `https://www.justcallgene.com` (301)
3. ✅ `https://justcallgene.com` → `https://www.justcallgene.com` (301)

## Implementation

### 1. Middleware (`middleware.ts`)
- **Primary redirect handler** at the application level
- Handles HTTP → HTTPS and non-www → www redirects
- Uses **301 (Permanent Redirect)** for SEO
- Preserves pathname and query parameters
- Applies to all routes except static files and API routes

### 2. Next.js Config (`next.config.ts`)
- Backup redirect configuration at build time
- Redirects non-www hostname to www

### 3. Vercel Config (`vercel.json`)
- Edge-level redirect configuration
- Handles redirects before they reach the application

## Why Google Shows "Page with Redirect"

This is **expected and correct behavior**. Google Search Console shows "Page with redirect" because:

1. ✅ All non-canonical URLs properly redirect to the canonical `www` version
2. ✅ All redirects are **301 (Permanent)** which tells Google the canonical URL
3. ✅ Google will eventually stop indexing the non-www versions and only index `https://www.justcallgene.com`

## Canonical URL Configuration

### Site Configuration
- **Primary URL**: `https://www.justcallgene.com` (in `lib/config.ts`)

### Metadata
- **metadataBase**: `https://www.justcallgene.com` (in `app/layout.tsx`)
- **Canonical URLs**: All pages use `alternates.canonical` pointing to www version

### Sitemap & Robots.txt
- **Sitemap**: All URLs use `https://www.justcallgene.com`
- **Robots.txt**: References sitemaps with www URLs

## Google Search Console Actions

To help Google understand the canonical domain:

1. **Set Preferred Domain**:
   - Go to Settings → Site Settings
   - Set **Preferred domain** to: `www.justcallgene.com`
   - This tells Google to prefer www over non-www

2. **Submit Sitemap**:
   - Submit: `https://www.justcallgene.com/sitemap.xml`
   - This ensures Google crawls the canonical www URLs

3. **Request Indexing**:
   - Use "Request Indexing" for key pages using the www URLs
   - This helps Google prioritize the canonical versions

## Redirect Status Codes

- **301 Permanent Redirect**: Used for all redirects
  - Tells search engines the redirect is permanent
  - Transfers SEO value to the canonical URL
  - Prevents redirect chains

## Testing Redirects

You can test redirects using curl:

```bash
# Test HTTP non-www → HTTPS www
curl -I http://justcallgene.com

# Test HTTP www → HTTPS www
curl -I http://www.justcallgene.com

# Test HTTPS non-www → HTTPS www
curl -I https://justcallgene.com

# All should return: Location: https://www.justcallgene.com/
```

## Expected Behavior

- ✅ All redirects are **301 Permanent**
- ✅ No redirect chains (single redirect to canonical)
- ✅ Paths and query parameters are preserved
- ✅ Google will eventually consolidate indexing to www version

## Notes

- The "Page with redirect" status in Google Search Console is **normal** and indicates redirects are working correctly
- Over time, Google will stop showing non-www URLs in search results
- The redirects ensure all traffic and SEO value goes to the canonical `www` domain

