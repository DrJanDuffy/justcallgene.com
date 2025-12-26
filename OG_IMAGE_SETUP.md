# Open Graph Image Setup Guide

## ✅ Fixed: Open Graph Metadata

The Open Graph image metadata has been configured in:
- `app/layout.tsx` (root layout - applies to all pages)
- `app/page.tsx` (homepage - specific OG image)

## 📸 Create the OG Image File

You need to create the actual image file: `public/og-image.jpg`

### Image Specifications:
- **Dimensions**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 1MB (recommended: 200-500KB)
- **Location**: `public/og-image.jpg`

### What to Include in the Image:
- Business name: "Just Call Gene"
- Tagline: "Probate Real Estate Specialist"
- Location: "Orange County, CA"
- Contact info (optional): Phone number
- Professional branding colors
- High-quality, professional design

### Tools to Create:
1. **Canva**: https://www.canva.com (free templates)
2. **Figma**: Professional design tool
3. **Photoshop**: If you have access
4. **Online OG Image Generators**: Search "og image generator"

### Quick Template Ideas:
```
┌─────────────────────────────────────┐
│  [Background: Professional Blue]    │
│                                      │
│  Just Call Gene                     │
│  Probate Real Estate Specialist     │
│                                      │
│  Orange County, CA                   │
│  (949) 776-3527                     │
│                                      │
│  [Optional: Professional Photo]     │
└─────────────────────────────────────┘
```

## 🔍 Verify OG Image is Working

### Test Tools:
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - Enter: `https://justcallgene.com`
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Enter: `https://justcallgene.com`
   - Verify image appears

3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - Enter: `https://justcallgene.com`
   - Check preview

4. **Open Graph Preview**: https://www.opengraph.xyz/
   - Enter: `https://justcallgene.com`
   - See live preview

## 📝 Current Configuration

### Root Layout (`app/layout.tsx`):
```typescript
openGraph: {
  images: [{
    url: 'https://justcallgene.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Just Call Gene - Probate Real Estate Specialist',
    type: 'image/jpeg',
  }],
}
```

### Homepage (`app/page.tsx`):
```typescript
openGraph: {
  images: [{
    url: 'https://justcallgene.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Just Call Gene - Probate Real Estate Specialist',
  }],
}
```

## ⚠️ Important Notes

1. **File Must Exist**: The image file must be created and placed in `public/og-image.jpg`
2. **Cache Clearing**: After adding the image, clear social media caches:
   - Facebook: Use Facebook Debugger
   - Twitter: Use Twitter Card Validator
   - LinkedIn: Use Post Inspector
3. **File Naming**: Must be exactly `og-image.jpg` (case-sensitive)
4. **CDN Caching**: Cloudflare/Vercel will cache the image - may take a few minutes to propagate

## 🚀 After Creating the Image

1. Place file: `public/og-image.jpg`
2. Commit and push to GitHub
3. Wait for Vercel deployment
4. Test with Facebook Debugger
5. Clear social media caches if needed

---

**Status**: ✅ Metadata configured, ⚠️ Image file needs to be created  
**Priority**: Medium - Improves social sharing appearance

