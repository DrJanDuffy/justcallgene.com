# Agent Photos Setup

## Required Image Files

### Gene Boyle Photo
- **File Path:** `/public/images/agents/gene-boyle.jpg`
- **Recommended Size:** 800x800px (1:1 square) or 600x800px (3:4 portrait)
- **File Format:** JPG or WebP
- **File Size:** < 200KB (optimized)
- **Usage:** Displayed in BrokerSection and About page

### Kelly Boyle Photo (when available)
- **File Path:** `/public/images/agents/kelly-boyle.jpg`
- **Recommended Size:** 800x800px (1:1 square) or 600x800px (3:4 portrait)
- **File Format:** JPG or WebP
- **File Size:** < 200KB (optimized)
- **Usage:** Displayed in About page

## Current Status

⚠️ **Gene Boyle photo is missing**
- Expected location: `public/images/agents/gene-boyle.jpg`
- The component will show a gradient background fallback until the image is added

## How to Add the Photo

1. **Prepare the image:**
   - Resize to recommended dimensions
   - Optimize/compress the image (use TinyPNG, ImageOptim, or similar)
   - Save as `gene-boyle.jpg` or `gene-boyle.webp`

2. **Place the file:**
   - Copy the image file to: `public/images/agents/gene-boyle.jpg`
   - Or if using WebP: `public/images/agents/gene-boyle.webp`

3. **Update the code (if using WebP):**
   - Change the `src` in `components/sections/BrokerSection.tsx` to `/images/agents/gene-boyle.webp`
   - Change the `src` in `app/about/page.tsx` to `/images/agents/gene-boyle.webp`

4. **Verify:**
   - The image should appear immediately after adding the file
   - No build/restart needed for files in `public/` folder

## Image Optimization Tips

- Use professional headshot or business photo
- Ensure good lighting and professional appearance
- Crop to focus on face/upper body
- Compress before uploading to reduce file size
- Test on both desktop and mobile devices

## Alternative File Names

If your image has a different name, you can either:
1. Rename it to `gene-boyle.jpg` (recommended)
2. Update the `src` paths in the code to match your filename

## Troubleshooting

**Image not showing?**
- Check file is in `public/images/agents/` folder
- Verify filename matches exactly (case-sensitive on some servers)
- Check file extension (.jpg, .jpeg, .webp)
- Clear browser cache
- Check browser console for 404 errors
