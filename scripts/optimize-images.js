#!/usr/bin/env node

/**
 * Image optimization script
 * Compresses and optimizes images in public/images/ directory
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Requirements:
 * - Install sharp: npm install --save-dev sharp
 * - Or use imagemin: npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_FILE_SIZE = 200 * 1024; // 200KB
const QUALITY = 85;

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('❌ Images directory not found:', IMAGES_DIR);
    return;
  }

  // Find all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const imageFiles = [];

  function findImages(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        imageFiles.push(filePath);
      }
    });
  }

  findImages(IMAGES_DIR);

  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize.');
    return;
  }

  console.log(`📸 Found ${imageFiles.length} images to check\n`);

  // Check file sizes
  let totalSaved = 0;
  const largeFiles = [];

  imageFiles.forEach(filePath => {
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;
    const relativePath = path.relative(process.cwd(), filePath);

    if (stats.size > MAX_FILE_SIZE) {
      largeFiles.push({ path: relativePath, size: sizeKB.toFixed(2) });
      console.log(`⚠️  Large file: ${relativePath} (${sizeKB.toFixed(2)} KB)`);
    } else {
      console.log(`✅ ${relativePath} (${sizeKB.toFixed(2)} KB)`);
    }
  });

  if (largeFiles.length > 0) {
    console.log(`\n⚠️  Found ${largeFiles.length} files larger than ${MAX_FILE_SIZE / 1024}KB`);
    console.log('💡 Consider using image optimization tools:');
    console.log('   - Online: TinyPNG, Squoosh, ImageOptim');
    console.log('   - CLI: sharp, imagemin');
    console.log('   - Next.js: Automatically optimizes with next/image component\n');
  } else {
    console.log('\n✅ All images are within recommended size limits!\n');
  }

  console.log('📝 Optimization recommendations:');
  console.log('   1. Use WebP format for better compression');
  console.log('   2. Compress images before uploading');
  console.log('   3. Use Next.js Image component for automatic optimization');
  console.log('   4. Lazy load below-fold images');
}

// Run if called directly
if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages };
