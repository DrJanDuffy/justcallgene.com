/**
 * SEO Verification Script
 * Checks for duplicate/missing meta titles, descriptions, and canonical URLs
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const titles = new Map();
const descriptions = new Map();
const canonicalUrls = new Set();
const missingMetadata = [];
const duplicates = {
  titles: [],
  descriptions: [],
};

function extractMetadata(filePath, content) {
  const metadata = {
    title: null,
    description: null,
    canonical: null,
    file: filePath,
  };

  // Extract title
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }

  // Extract description
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descMatch) {
    metadata.description = descMatch[1];
  }

  // Extract canonical
  const canonicalMatch = content.match(/canonical:\s*[`'"]?([^`'",\s}]+)[`'"]?/);
  if (canonicalMatch) {
    metadata.canonical = canonicalMatch[1];
  }

  return metadata;
}

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Only check pages with metadata exports
    if (content.includes('export const metadata') || content.includes('generateMetadata')) {
      const metadata = extractMetadata(filePath, content);
      
      // Check for missing metadata
      if (!metadata.title && !content.includes('generateMetadata')) {
        missingMetadata.push({ file: filePath, issue: 'Missing title' });
      }
      if (!metadata.description && !content.includes('generateMetadata')) {
        missingMetadata.push({ file: filePath, issue: 'Missing description' });
      }
      if (!metadata.canonical && !content.includes('generateMetadata')) {
        missingMetadata.push({ file: filePath, issue: 'Missing canonical URL' });
      }

      // Check for duplicates
      if (metadata.title) {
        if (titles.has(metadata.title)) {
          duplicates.titles.push({
            title: metadata.title,
            files: [titles.get(metadata.title), filePath],
          });
        } else {
          titles.set(metadata.title, filePath);
        }
      }

      if (metadata.description) {
        if (descriptions.has(metadata.description)) {
          duplicates.descriptions.push({
            description: metadata.description,
            files: [descriptions.get(metadata.description), filePath],
          });
        } else {
          descriptions.set(metadata.description, filePath);
        }
      }

      if (metadata.canonical) {
        canonicalUrls.add(metadata.canonical);
      }
    }
  } catch (error) {
    // Skip files that can't be read
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      checkFile(filePath);
    }
  });
}

// Run verification
console.log('🔍 Starting SEO Verification...\n');
walkDir(appDir);

// Report results
console.log('📊 VERIFICATION RESULTS\n');
console.log(`Total unique titles: ${titles.size}`);
console.log(`Total unique descriptions: ${descriptions.size}`);
console.log(`Total canonical URLs: ${canonicalUrls.size}\n`);

if (missingMetadata.length > 0) {
  console.log('❌ MISSING METADATA:');
  missingMetadata.forEach(item => {
    console.log(`  - ${item.file}: ${item.issue}`);
  });
  console.log('');
} else {
  console.log('✅ No missing metadata found\n');
}

if (duplicates.titles.length > 0) {
  console.log('⚠️  DUPLICATE TITLES:');
  duplicates.titles.forEach(dup => {
    console.log(`  - "${dup.title}"`);
    dup.files.forEach(f => console.log(`    → ${f}`));
  });
  console.log('');
} else {
  console.log('✅ No duplicate titles found\n');
}

if (duplicates.descriptions.length > 0) {
  console.log('⚠️  DUPLICATE DESCRIPTIONS:');
  duplicates.descriptions.forEach(dup => {
    console.log(`  - "${dup.description.substring(0, 60)}..."`);
    dup.files.forEach(f => console.log(`    → ${f}`));
  });
  console.log('');
} else {
  console.log('✅ No duplicate descriptions found\n');
}

console.log('✅ Verification complete!');
