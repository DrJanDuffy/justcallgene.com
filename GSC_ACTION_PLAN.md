# Google Search Console (GSC) Action Plan & Optimization Guide

## ✅ Current Configuration Status

### Site Verification
- ✅ **DNS Verification**: `pGwJguJoHnONcAq0Y-f24LjFteddDSt7DcBi6UFCqYQ` (configured in `app/layout.tsx`)
- ✅ **Verification Meta Tag**: Set in metadata

### Canonical Domain
- ✅ **Canonical URL**: `https://www.justcallgene.com`
- ✅ **All redirects**: 301 permanent redirects to www version
- ✅ **Canonical tags**: All pages point to www versions

### Sitemaps
- ✅ **Sitemap Index**: `https://www.justcallgene.com/sitemap-index.xml`
- ✅ **Main Sitemap**: `https://www.justcallgene.com/sitemap.xml`
- ✅ **Video Sitemap**: `https://www.justcallgene.com/sitemap-video.xml`
- ✅ **Image Sitemap**: `https://www.justcallgene.com/sitemap-image.xml`

### Structured Data (Schema.org)
- ✅ **LocalBusiness Schema**: Complete with NAP data
- ✅ **RealEstateAgent Schema**: Gene Boyle information
- ✅ **RealEstateBroker Schema**: Kelly Lynn Boyle information
- ✅ **Review Schema**: Individual reviews + AggregateRating (validated by Google)
- ✅ **FAQ Schema**: FAQPage schema (validated by Google)
- ✅ **Breadcrumb Schema**: On all key pages
- ✅ **Article Schema**: On blog posts
- ✅ **Video Schema**: On video pages

### Robots.txt
- ✅ **Configuration**: Properly configured
- ✅ **Sitemap references**: All sitemaps listed
- ✅ **Crawl directives**: Correctly set

---

## 📋 Step-by-Step GSC Actions

### Step 1: Verify Property Ownership ✅ (Already Done)

**Status:** ✅ DNS verification already configured

**Verification Code:** `pGwJguJoHnONcAq0Y-f24LjFteddDSt7DcBi6UFCpYQ`

**Location:** `app/layout.tsx` (metadata.verification.google)

**Action Required:** None - already verified via DNS

---

### Step 2: Add Both Domain Properties (Recommended)

**Why:** Google treats `justcallgene.com` and `www.justcallgene.com` as separate properties. Add both to monitor indexing status.

#### 2a. Add Property: Domain Property (Recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Select **"Domain"** property type
4. Enter: `justcallgene.com` (without www/https)
5. Verify via DNS (TXT record already configured)
6. Click **"Verify"**

**Benefits:**
- Monitors both www and non-www versions
- Better overview of all domain variants
- Google's preferred method

#### 2b. Add Property: URL Prefix Property (Optional)

1. Click **"Add Property"**
2. Select **"URL prefix"** property type
3. Enter: `https://www.justcallgene.com`
4. Verify via HTML tag or DNS (already configured)
5. Click **"Verify"**

**Benefits:**
- Specific monitoring of canonical www version
- Detailed reporting for www URLs only

---

### Step 3: Submit Sitemaps

**After property verification, submit sitemaps:**

#### Option A: Submit Sitemap Index (Recommended) ⭐

1. Go to **Sitemaps** (left sidebar)
2. Enter: `sitemap-index.xml`
3. Click **"Submit"**

**URL to Submit:**
```
https://www.justcallgene.com/sitemap-index.xml
```

**Why:** This automatically includes all other sitemaps (main, video, image).

#### Option B: Submit Individual Sitemaps

If you prefer individual sitemaps:

1. **Main Sitemap:**
   - Enter: `sitemap.xml`
   - Click **"Submit"**

2. **Video Sitemap:**
   - Enter: `sitemap-video.xml`
   - Click **"Submit"**

3. **Image Sitemap:**
   - Enter: `sitemap-image.xml`
   - Click **"Submit"`

**Note:** You can submit both the index and individual sitemaps - Google will handle duplicates automatically.

---

### Step 4: Request Indexing for Key Pages

**Action:** Use URL Inspection Tool to request indexing for important pages.

#### 4a. Homepage

1. Go to **URL Inspection** (top search bar)
2. Enter: `https://www.justcallgene.com`
3. Click **"Test Live URL"**
4. Verify status shows **"URL is on Google"** or **"URL can be indexed"**
5. If not indexed, click **"Request Indexing"**

#### 4b. Key Pages (Request Indexing)

Request indexing for these important pages:

- `https://www.justcallgene.com/about`
- `https://www.justcallgene.com/contact`
- `https://www.justcallgene.com/probate`
- `https://www.justcallgene.com/services`
- `https://www.justcallgene.com/communities`
- `https://www.justcallgene.com/sellers/valuation`
- `https://www.justcallgene.com/faq`

**How to Request:**
1. Go to **URL Inspection**
2. Enter URL (www version only)
3. Click **"Test Live URL"**
4. Click **"Request Indexing"**

**Note:** Request indexing for **www versions only** (not non-www redirecting URLs).

---

### Step 5: Handle "Page with Redirect" Issue

**Status:** Expected and correct behavior

**Action:** Monitor, don't fix (redirects are working correctly)

#### 5a. Understand the Issue

- **Non-www URLs** (`https://justcallgene.com/*`) redirect to www versions
- **301 Permanent Redirects** tell Google which URL is canonical
- **Expected behavior:** Google shows "Page with redirect" for non-www URLs

#### 5b. Verify Canonical www URLs Are Indexed

**Check these URLs in URL Inspection:**

- ✅ `https://www.justcallgene.com/` (should be indexed)
- ✅ `https://www.justcallgene.com/contact` (should be indexed)
- ✅ `https://www.justcallgene.com/about` (should be indexed)

**If www URLs are indexed:** ✅ **Everything is working correctly!**

#### 5c. Optional: Request Removal of Non-www URLs

**Only if you want to clean up GSC reports:**

1. Go to **Removals** (left sidebar)
2. Click **"New Request"**
3. Select **"Temporarily hide URL"**
4. Enter non-www URL: `https://justcallgene.com/`
5. Click **"Submit Request"**

**Repeat for:**
- `http://justcallgene.com/`
- `http://www.justcallgene.com/` (if showing)

**Note:** This is optional. Google will naturally stop trying to index redirecting URLs over time.

---

### Step 6: Monitor Indexing Status

**Check Indexing Reports:**

1. Go to **Indexing** → **Pages** (left sidebar)
2. Review **"Valid"** pages (should show www URLs)
3. Review **"Excluded"** pages (may show non-www redirecting URLs - this is OK)

**Expected Results:**
- ✅ **Valid pages:** www URLs (`https://www.justcallgene.com/*`)
- ⚠️ **Excluded pages:** May include non-www redirecting URLs (normal)

**What to Monitor:**
- Total pages indexed should match sitemap URL count (~50+ pages)
- www URLs should be indexed, not non-www URLs
- Redirecting URLs may appear in "Excluded" section (normal)

---

### Step 7: Verify Structured Data

**Check Rich Results:**

1. Go to **Enhancements** (left sidebar)
2. Review **"Rich Results"** reports:

#### Expected Rich Results:

- ✅ **Review Snippets**: Should show 4 items (3 reviews + 1 aggregate rating)
  - Location: `/about` page
  - Status: Should be "Valid"

- ✅ **FAQ Snippets**: Should show 1 FAQPage
  - Location: `/about` page
  - Status: Should be "Valid"

- ✅ **Breadcrumbs**: Should show on multiple pages
  - Status: Should be "Valid"

**Action If Issues:**
- If rich results show "Error" or "Invalid", use **Rich Results Test Tool**:
  - URL: https://search.google.com/test/rich-results
  - Test URL: `https://www.justcallgene.com/about`

---

### Step 8: Check Mobile Usability

**Verify Mobile-Friendly Status:**

1. Go to **Mobile Usability** (left sidebar under "Experience")
2. Review any mobile usability issues
3. Fix any issues reported

**Expected:** No mobile usability issues (site is responsive)

---

### Step 9: Monitor Core Web Vitals

**Check Page Experience:**

1. Go to **Experience** → **Core Web Vitals** (left sidebar)
2. Review metrics:
   - **LCP (Largest Contentful Paint)**: Should be < 2.5s
   - **FID (First Input Delay)**: Should be < 100ms
   - **CLS (Cumulative Layout Shift)**: Should be < 0.1

**Current Status:** Site is optimized for Core Web Vitals

**Action:** Monitor over time, fix any issues that appear

---

### Step 10: Set Up Performance Monitoring

**Configure Performance Reports:**

1. Go to **Performance** (left sidebar)
2. Review search performance:
   - **Queries**: What searches lead to your site
   - **Pages**: Which pages get traffic
   - **Countries**: Geographic distribution
   - **Devices**: Mobile vs desktop

**Action:** Monitor weekly/monthly to identify opportunities

---

## 🔍 Ongoing Monitoring Checklist

### Weekly
- [ ] Check **Indexing** → **Pages** for new pages indexed
- [ ] Review **Performance** → **Search results** for traffic trends
- [ ] Monitor **Enhancements** → **Rich Results** for issues

### Monthly
- [ ] Verify sitemaps are processing correctly
- [ ] Check **Coverage** report for indexing issues
- [ ] Review **Security Issues** (should be empty)
- [ ] Monitor **Manual Actions** (should be empty)

### Quarterly
- [ ] Audit structured data with Rich Results Test Tool
- [ ] Review and update sitemaps if needed
- [ ] Check for new GSC features/updates
- [ ] Review **Links** report (internal/external links)

---

## 📊 GSC Quick Reference

### Important URLs (Submit These)

**Sitemaps:**
- `https://www.justcallgene.com/sitemap-index.xml` ⭐ **Recommended**
- `https://www.justcallgene.com/sitemap.xml`
- `https://www.justcallgene.com/sitemap-video.xml`
- `https://www.justcallgene.com/sitemap-image.xml`

### Key Pages (Request Indexing)

**Homepage:**
- `https://www.justcallgene.com`

**Key Service Pages:**
- `https://www.justcallgene.com/about`
- `https://www.justcallgene.com/contact`
- `https://www.justcallgene.com/probate`
- `https://www.justcallgene.com/services`
- `https://www.justcallgene.com/communities`
- `https://www.justcallgene.com/sellers/valuation`
- `https://www.justcallgene.com/faq`

### Tools to Use

**URL Inspection:**
- Test live URLs
- Request indexing
- Check mobile usability
- View rendered HTML

**Rich Results Test:**
- Test structured data
- Validate schemas
- Check rich snippets eligibility

**PageSpeed Insights:**
- Check Core Web Vitals
- Get performance recommendations
- Test mobile/desktop performance

---

## ✅ Verification Checklist

After completing all actions, verify:

- [ ] Property verified in GSC (Domain or URL prefix)
- [ ] Sitemap index submitted and processing
- [ ] Key pages requested for indexing
- [ ] www URLs showing as "Valid" in Indexing report
- [ ] Rich Results showing as "Valid" (reviews, FAQ, breadcrumbs)
- [ ] No security issues or manual actions
- [ ] Mobile usability passing
- [ ] Core Web Vitals metrics acceptable

---

## 🚨 Common Issues & Solutions

### Issue: "Page with Redirect" Status

**Solution:** This is expected. Verify www URLs are indexed instead.

### Issue: Sitemap "Couldn't fetch"

**Solution:** 
1. Verify sitemap URL is correct (`https://www.justcallgene.com/sitemap-index.xml`)
2. Check sitemap is accessible in browser
3. Verify sitemap uses www URLs only

### Issue: Rich Results "Invalid"

**Solution:**
1. Test URL in Rich Results Test Tool
2. Fix any schema errors reported
3. Re-request indexing after fixes

### Issue: Pages Not Indexed

**Solution:**
1. Use URL Inspection Tool to test live URL
2. Check for crawl errors
3. Request indexing manually
4. Verify robots.txt allows crawling

---

## 📈 Success Metrics

**After 2-4 Weeks, You Should See:**

- ✅ 50+ pages indexed (www URLs)
- ✅ Sitemap processing successfully
- ✅ Rich results showing in search (reviews, FAQ)
- ✅ Traffic data appearing in Performance reports
- ✅ No security or manual action issues
- ✅ Mobile usability passing
- ✅ Core Web Vitals metrics acceptable

---

**Last Updated:** January 16, 2026  
**Site:** https://www.justcallgene.com
