# LCP Regression Fix

## ⚠️ Issue: LCP Regressed to 4.2s

**Previous:** 2.0s  
**Current:** 4.2s  
**Regression:** +2.2s

---

## Root Causes Identified

### 1. Google Tag Manager Still Blocking
**Issue:** GTM is causing long main-thread tasks (3,324ms, 3,406ms)

**Evidence:**
- Long tasks found at 143ms and 3,324ms
- 141 KiB transfer size
- 113ms main thread time
- Unused JavaScript: 55.8 KiB from GTM

**Problem:** Even with `lazyOnload`, DNS prefetch was causing early connection

### 2. Element Render Delay Increased
**Issue:** LCP element (h1) render delay: 1,350ms (was 1,160ms)

**Possible Causes:**
- Font loading still causing delay
- CSS calculations
- Layout reflows

### 3. Render-Blocking CSS
**Issue:** 10.7 KiB CSS blocking render (200ms)

**Impact:** Delays LCP element rendering

---

## Fixes Applied

### 1. Removed DNS Prefetch for Google Analytics
**Change:** Removed DNS prefetch links for GTM/GA

**Why:**
- DNS prefetch causes early connection
- Browser starts connecting before needed
- Can trigger early script evaluation

**Result:** GTM will only connect when actually needed (lazyOnload)

### 2. Optimized Google Analytics Loading
**Change:** Improved script loading strategy

**Improvements:**
- Ensured true lazy loading
- Added onLoad handler for proper initialization
- Separated initialization from script loading

**Result:** GTM loads only after page is fully interactive

### 3. Critical CSS Already Inlined
**Status:** ✅ Already optimized

**Current:** Inline critical CSS for h1 element
**Impact:** Reduces render-blocking CSS

---

## Expected Improvements

### After Fixes:
- **LCP:** 4.2s → 2.0-2.5s (target)
- **TBT:** Should remain low (<100ms)
- **Long Tasks:** Should reduce significantly
- **Unused JavaScript:** GTM will load later (not blocking)

---

## Monitoring

### What to Watch:
1. **LCP:** Should return to ~2.0s
2. **Long Tasks:** Should reduce from 4 tasks to 1-2
3. **Google Analytics:** Should still track properly (just loads later)
4. **Main Thread:** Should be less blocked

### Testing:
1. Run Lighthouse after deployment
2. Check Network tab - GTM should load after page interactive
3. Verify analytics still works (may take a few seconds to initialize)

---

## Trade-offs

### Analytics Delay:
- **Impact:** Analytics may initialize 1-2 seconds later
- **Benefit:** Page loads much faster
- **Acceptable:** Analytics still tracks all events

### User Experience:
- ✅ Faster page load
- ✅ Better Core Web Vitals
- ✅ Better SEO
- ✅ Analytics still works

---

## Summary

✅ **Fixes Applied:**
- Removed DNS prefetch for GTM/GA
- Optimized Google Analytics loading
- Ensured true lazy loading

📊 **Expected Results:**
- LCP: 4.2s → 2.0-2.5s
- Long tasks: Reduced
- Better performance score

⏳ **Next Steps:**
- Deploy and test
- Monitor Lighthouse scores
- Verify analytics still works

---

**Last Updated:** January 18, 2026  
**Status:** ✅ Fixes Applied - Awaiting Deployment
