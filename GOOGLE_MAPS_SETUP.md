# Google Maps Embed Setup Guide

## Current Implementation

The contact page now includes a Google Maps embed. If the map is not displaying, follow these steps:

---

## Option 1: Get Embed Code from Google Maps (Recommended)

### Steps:

1. **Go to Google Maps:**
   - Visit: https://www.google.com/maps
   - Search for: `1 TECHNOLOGY DRIVE Suite I829G, Irvine, CA 92618`

2. **Get Embed Code:**
   - Click the **"Share"** button
   - Select **"Embed a map"** tab
   - Click **"Copy HTML"**
   - You'll get an iframe code like:
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   ```

3. **Extract the src URL:**
   - Copy the `src` attribute value from the iframe
   - It will look like: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...`

4. **Update the Component:**
   - Replace the `src` in `components/sections/ContactSection.tsx` with your embed URL

---

## Option 2: Use Google Maps API Key (For Production)

### Steps:

1. **Get API Key:**
   - Go to: https://console.cloud.google.com/
   - Create project or select existing
   - Enable "Maps Embed API"
   - Create API key

2. **Add to Environment:**
   - Create `.env.local` file
   - Add: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here`

3. **Update Component:**
   - The component will automatically use the API key from environment

---

## Option 3: Use Static Map Image (Fallback)

If embeds don't work, we can use a static map image that links to Google Maps:

```tsx
<a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x400&markers=${encodeURIComponent(address)}&key=${apiKey}`}
    alt="Office Location Map"
  />
</a>
```

---

## Current Address

**Office Location:**
- 1 TECHNOLOGY DRIVE Suite I829G
- Irvine, CA 92618

**Google Maps Search:**
https://www.google.com/maps/search/?api=1&query=1+TECHNOLOGY+DRIVE+Suite+I829G,+Irvine,+CA+92618

---

## Troubleshooting

### Map Not Showing?

1. **Check Browser Console:**
   - Open DevTools → Console
   - Look for errors related to Google Maps
   - Check for API key errors

2. **Test Embed URL:**
   - Copy the iframe src URL
   - Paste in browser address bar
   - Should show the map

3. **Check CSP Headers:**
   - Google Maps requires `frame-src` in CSP
   - Current CSP allows `frame-src 'self'`
   - May need to add `https://www.google.com` to frame-src

---

## Quick Fix: Update CSP for Google Maps

If the map is blocked by CSP, update `next.config.ts`:

```typescript
"frame-src 'self' https://www.google.com https://maps.google.com",
```

---

**Last Updated:** January 19, 2026  
**Status:** ⚠️ May need embed code from Google Maps or API key
