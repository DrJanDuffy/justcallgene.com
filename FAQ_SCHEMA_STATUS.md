# FAQ Schema Status - Rich Snippets

## ✅ Current Status

**Good News:** Your FAQ schemas are working correctly and Google has detected them as valid for rich snippets!

- **Valid Items Detected:** 1 FAQPage schema
- **Location:** `/about` page
- **Schema Type:** FAQPage with multiple Question/Answer pairs

## Current Situation

Google Search Console shows FAQ detected on:
- `https://justcallgene.com/about` (non-www version)

However, your code is now correctly configured to use:
- `https://www.justcallgene.com/about` (www canonical version)

### Recent Fix

**Issue Fixed:** The FAQ schema was previously hardcoded to use `/faq` path for all pages, even when used on other pages like `/about`.

**Solution:** Updated `FAQPageSchema` component to:
- Accept an optional `url` parameter
- Use the current page URL from breadcrumbs
- Default to `/faq` if no URL is provided
- Properly handle both relative (`/about`) and absolute (`https://...`) URLs

## FAQ Schema Configuration

### ✅ Correctly Configured

1. **FAQPageSchema Component** (`components/schema/FAQPageSchema.tsx`):
   - Now accepts `url` parameter for current page
   - Uses `siteConfig.url` (www version) for all URLs
   - Properly structures FAQPage schema with Question/Answer pairs
   - Includes proper `@id` fields for each question/answer

2. **PageSchemas Component** (`components/schema/PageSchemas.tsx`):
   - Passes current page URL from breadcrumbs to FAQPageSchema
   - Uses last breadcrumb item's URL as the page URL

3. **About Page** (`app/about/page.tsx`):
   - Has `includeFAQ={true}`
   - Breadcrumbs include `/about` URL
   - Canonical URL: `https://www.justcallgene.com/about`

4. **FAQ Data** (`lib/data.ts`):
   - 6 FAQs with questions and answers
   - All properly formatted for schema

## Schema Structure

FAQPage schema includes:
- ✅ `@type: FAQPage`
- ✅ `@id` using current page URL (www version)
- ✅ `mainEntity` array with Question/Answer pairs
- ✅ Each Question has:
  - `@type: Question`
  - `@id` with unique identifier
  - `name` (question text)
  - `acceptedAnswer` with:
    - `@type: Answer`
    - `@id` with unique identifier
    - `text` (answer text)
- ✅ `about` field referencing LocalBusiness

## Pages Using FAQ Schema

The following pages include FAQ schemas:
- ✅ `/about` - About page
- ✅ `/faq` - FAQ page (dedicated)
- ✅ `/probate` - Probate process page
- ✅ `/services` - Services page
- ✅ `/contact` - Contact page
- ✅ `/blog` - Blog listing page
- ✅ `/blog/[id]` - Individual blog posts
- ✅ `/communities` - Communities page
- ✅ `/communities/[slug]` - Individual community pages
- ✅ And many more...

Each page now uses its own URL in the FAQ schema `@id` field.

## Actions Required in Google Search Console

### 1. Set Preferred Domain (Critical)

**Location:** Settings → Site Settings

1. Go to Google Search Console
2. Select your property
3. Go to **Settings** → **Site Settings**
4. Set **Preferred domain** to: `www.justcallgene.com`
5. Save changes

This tells Google that `www` is the canonical version and all non-www URLs should be treated as redirects.

### 2. Request Indexing for www Version

**Location:** URL Inspection Tool

1. Go to **URL Inspection** tool in Google Search Console
2. Enter: `https://www.justcallgene.com/about`
3. Click **Request Indexing**
4. This will prompt Google to re-crawl the www version with updated FAQ schema

### 3. Submit Updated Sitemap

**Location:** Sitemaps

1. Go to **Sitemaps** section
2. Submit: `https://www.justcallgene.com/sitemap.xml`
3. This ensures Google crawls all www URLs

### 4. Monitor Rich Results

**Location:** Enhancements → FAQ

1. After requesting indexing, wait 1-2 weeks
2. Check **Enhancements** → **FAQ**
3. You should see FAQ detected on `https://www.justcallgene.com/about`
4. The non-www version should eventually disappear as Google consolidates

## Expected Timeline

- **Immediate:** FAQ schemas now use correct page URLs
- **1-2 weeks:** Google re-crawls www version after indexing request
- **2-4 weeks:** Google consolidates rich snippets to www version
- **4-8 weeks:** Non-www version drops from rich results, www version shows

## Verification

### Test FAQ Schema

You can verify the schema is correct using Google's Rich Results Test:

1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://www.justcallgene.com/about`
3. Should show: ✅ Valid FAQPage schema detected

### Check Schema Markup

View page source and verify:
- All URLs use `https://www.justcallgene.com`
- FAQPage schema is present in JSON-LD format
- `@id` field uses the current page URL (not hardcoded `/faq`)
- All questions and answers are properly structured

## FAQ Content

Current FAQs (6 total):
1. What is probate real estate and why do I need a specialist?
2. How long does a probate property sale take in Orange County?
3. How is a probate property valued for court purposes?
4. Do I need court approval to sell a probate property?
5. What makes Just Call Gene different from other real estate agents?
6. Can probate properties be sold "as-is" in Orange County?

## Summary

✅ **FAQ schemas are correctly configured**
✅ **All URLs use www version**
✅ **Schema structure is valid**
✅ **Fixed hardcoded `/faq` path issue**
⏳ **Waiting for Google to re-crawl www version**

The "Page with redirect" status is expected and correct. Once Google re-crawls the www version and you set the preferred domain, the FAQ rich snippets will transfer to the canonical www URLs.

## Next Steps

1. ✅ Set Preferred Domain in Google Search Console
2. ✅ Request Indexing for `https://www.justcallgene.com/about`
3. ✅ Submit sitemap with www URLs
4. ⏳ Wait for Google to re-crawl (1-2 weeks)
5. ⏳ Monitor FAQ rich results in Search Console

Your FAQ schemas are working perfectly - it's just a matter of Google recognizing the www version as canonical!

