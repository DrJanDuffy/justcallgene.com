# Sitemap Troubleshooting Guide

## Issue: "Couldn't fetch" in Google Search Console

If Google Search Console shows "Couldn't fetch" for your sitemap, follow these steps:

### 1. Verify Sitemap is Accessible

**Test the sitemap URL directly:**
- Visit: `https://justcallgene.com/sitemap.xml`
- You should see valid XML content
- Status code should be `200 OK`

**Common issues:**
- ❌ 404 Not Found → Site not deployed or route not working
- ❌ 500 Error → Server error, check logs
- ❌ Blank page → Sitemap not generating correctly

### 2. Check Deployment Status

**Is your site deployed?**
- The sitemap only works on a deployed site
- Local development (`localhost:3000`) won't work for Google
- Deploy to Vercel/your hosting provider first

**Verify deployment:**
```bash
# Check if site is live
curl -I https://justcallgene.com/sitemap.xml

# Should return: HTTP/2 200
```

### 3. Verify Sitemap Format

**Valid XML format:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://justcallgene.com</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
```

**Test with online validator:**
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Sitemap Checker](https://www.xml-sitemaps.com/sitemap-checker.html)

### 4. Check URL Consistency

**Important:** The sitemap URL must match your Search Console property:
- If property is `https://justcallgene.com` → sitemap must be `https://justcallgene.com/sitemap.xml`
- If property is `https://www.justcallgene.com` → sitemap must be `https://www.justcallgene.com/sitemap.xml`

**Fix:**
1. Check your Search Console property URL
2. Update `NEXT_PUBLIC_SITE_URL` environment variable to match exactly
3. Redeploy

### 5. Verify Environment Variable

**Set in Vercel/hosting:**
```bash
NEXT_PUBLIC_SITE_URL=https://justcallgene.com
```

**Or create `.env.local`:**
```bash
NEXT_PUBLIC_SITE_URL=https://justcallgene.com
```

**After setting:**
- Rebuild and redeploy
- Clear cache if needed

### 6. Check robots.txt

**Verify robots.txt allows sitemap:**
- Visit: `https://justcallgene.com/robots.txt`
- Should include: `Sitemap: https://justcallgene.com/sitemap.xml`

### 7. Test Locally First

**Before submitting to Google:**
```bash
# Start dev server
npm run dev

# Visit in browser
http://localhost:3000/sitemap.xml

# Should show XML sitemap
```

### 8. Common Fixes

**Fix 1: Wait and Retry**
- Sometimes Google needs 24-48 hours
- Try resubmitting after a day

**Fix 2: Remove and Re-add**
1. In Search Console, remove the sitemap
2. Wait a few minutes
3. Re-add the sitemap URL

**Fix 3: Check Server Headers**
```bash
curl -I https://justcallgene.com/sitemap.xml

# Should return:
# Content-Type: application/xml; charset=utf-8
# Cache-Control: public, max-age=0, must-revalidate
```

**Fix 4: Verify No Authentication Required**
- Sitemap must be publicly accessible
- No login required
- No IP restrictions

### 9. Debug Steps

**Step-by-step debugging:**
1. ✅ Site is deployed and live
2. ✅ `https://justcallgene.com/sitemap.xml` returns valid XML
3. ✅ `https://justcallgene.com/robots.txt` references sitemap
4. ✅ Environment variable `NEXT_PUBLIC_SITE_URL` is set correctly
5. ✅ URL in Search Console matches site URL exactly
6. ✅ No authentication/blocking on sitemap route
7. ✅ Sitemap XML is valid (test with validator)

### 10. Next.js Specific Checks

**Verify sitemap.ts is correct:**
- File location: `app/sitemap.ts` (not `app/sitemap.tsx`)
- Export default function
- Returns `MetadataRoute.Sitemap` type
- URLs are absolute (include `https://`)

**Current sitemap.ts structure:**
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');
  
  return [
    {
      url: cleanUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
```

### 11. Still Not Working?

**Check these:**
- [ ] Site is actually deployed (not just local)
- [ ] Can access sitemap.xml in browser
- [ ] XML is valid format
- [ ] Environment variable is set in production
- [ ] URL matches Search Console property exactly
- [ ] No server errors in hosting logs
- [ ] robots.txt is accessible and correct

**Get help:**
- Check Next.js docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Google Search Console Help: https://support.google.com/webmasters




