# Google Search Console Quick Reference

## 🎯 Immediate Actions (Do These First)

### 1. Verify Property
- [ ] Go to: https://search.google.com/search-console
- [ ] Add property: `justcallgene.com` (Domain property - recommended)
- [ ] Or add: `https://www.justcallgene.com` (URL prefix property)

### 2. Submit Sitemap
- [ ] Go to **Sitemaps** → Enter: `sitemap-index.xml` → Submit
- **URL:** `https://www.justcallgene.com/sitemap-index.xml`

### 3. Request Indexing (Key Pages)
- [ ] Go to **URL Inspection** → Test these URLs:
  - `https://www.justcallgene.com`
  - `https://www.justcallgene.com/about`
  - `https://www.justcallgene.com/contact`
  - `https://www.justcallgene.com/probate`
- [ ] Click **"Request Indexing"** for each

---

## 📋 GSC URLs to Submit

### Sitemaps (Submit These)
```
https://www.justcallgene.com/sitemap-index.xml  ⭐ Recommended
https://www.justcallgene.com/sitemap.xml
https://www.justcallgene.com/sitemap-video.xml
https://www.justcallgene.com/sitemap-image.xml
```

### Key Pages (Request Indexing)
```
https://www.justcallgene.com
https://www.justcallgene.com/about
https://www.justcallgene.com/contact
https://www.justcallgene.com/probate
https://www.justcallgene.com/services
https://www.justcallgene.com/communities
https://www.justcallgene.com/sellers/valuation
https://www.justcallgene.com/faq
```

---

## ✅ What's Already Configured

- ✅ **Site Verification**: DNS TXT record configured
- ✅ **Canonical URLs**: All pages point to www version
- ✅ **Redirects**: 301 permanent redirects to www
- ✅ **Sitemaps**: All use www canonical URLs
- ✅ **Structured Data**: Reviews, FAQ, Breadcrumbs validated
- ✅ **Robots.txt**: Properly configured with sitemap references

---

## 🔍 What to Monitor

### Weekly
- **Indexing** → **Pages**: Check pages indexed
- **Performance** → **Search results**: Review traffic

### Monthly  
- **Sitemaps**: Verify processing status
- **Enhancements** → **Rich Results**: Check for issues
- **Coverage**: Review indexing issues

---

## 🚨 "Page with Redirect" Issue

**Status:** ✅ **Expected and correct behavior**

**Explanation:**
- Non-www URLs redirect to www (correct)
- Google shows "Page with redirect" for non-www URLs (normal)
- **Action:** Verify www URLs are indexed instead

**Check These URLs:**
- ✅ `https://www.justcallgene.com/` (should be indexed)
- ✅ `https://www.justcallgene.com/contact` (should be indexed)

---

## 📊 Expected Results (After 2-4 Weeks)

- ✅ 50+ pages indexed (www URLs)
- ✅ Sitemap processing successfully
- ✅ Rich results in search (reviews, FAQ)
- ✅ Traffic data in Performance reports
- ✅ No security or manual action issues

---

## 🔗 Useful Links

- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **URL Inspection**: Use top search bar in GSC

---

## 📖 Full Documentation

For detailed step-by-step instructions, see: **`GSC_ACTION_PLAN.md`**

---

**Last Updated:** January 16, 2026
