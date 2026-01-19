#!/usr/bin/env node

/**
 * SEO validation script
 * Validates SEO implementation across the site
 * 
 * Usage: node scripts/validate-seo.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(process.cwd(), 'app');
const COMPONENTS_DIR = path.join(process.cwd(), 'components');

const issues = [];
const warnings = [];

function checkFile(filePath, content, fileName) {
  // Check for meta tags
  if (fileName.includes('layout.tsx') || fileName.includes('page.tsx')) {
    // Check for title
    if (!content.includes('title') && !content.includes('metadata')) {
      warnings.push(`⚠️  ${filePath}: Missing title/metadata`);
    }

    // Check for description
    if (!content.includes('description')) {
      warnings.push(`⚠️  ${filePath}: Missing description`);
    }

    // Check for canonical URL
    if (!content.includes('canonical') && !content.includes('alternates')) {
      warnings.push(`⚠️  ${filePath}: Missing canonical URL`);
    }
  }

  // Check for alt text in Image components
  if (content.includes('<Image') || content.includes('Image')) {
    const imageMatches = content.match(/<Image[^>]*>/g);
    if (imageMatches) {
      imageMatches.forEach(match => {
        if (!match.includes('alt=')) {
          issues.push(`❌ ${filePath}: Image missing alt text`);
        }
      });
    }
  }

  // Check for heading hierarchy
  if (content.includes('<h2') && !content.includes('<h1')) {
    warnings.push(`⚠️  ${filePath}: Has h2 but no h1`);
  }
}

function scanDirectory(dir, basePath = '') {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const relativePath = path.join(basePath, file);

    if (stat.isDirectory()) {
      scanDirectory(filePath, relativePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        checkFile(relativePath, content, file);
      } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
      }
    }
  });
}

async function validateSEO() {
  console.log('🔍 Starting SEO validation...\n');

  // Scan app directory
  if (fs.existsSync(APP_DIR)) {
    console.log('📁 Scanning app directory...');
    scanDirectory(APP_DIR, 'app');
  }

  // Scan components directory
  if (fs.existsSync(COMPONENTS_DIR)) {
    console.log('📁 Scanning components directory...');
    scanDirectory(COMPONENTS_DIR, 'components');
  }

  console.log('\n📊 Validation Results:\n');

  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ No SEO issues found!\n');
    return;
  }

  if (issues.length > 0) {
    console.log('❌ Issues found:');
    issues.forEach(issue => console.log(`   ${issue}`));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('⚠️  Warnings:');
    warnings.forEach(warning => console.log(`   ${warning}`));
    console.log('');
  }

  console.log('💡 SEO Best Practices:');
  console.log('   1. Every page should have unique title and description');
  console.log('   2. All images must have descriptive alt text');
  console.log('   3. Use proper heading hierarchy (h1 → h2 → h3)');
  console.log('   4. Include canonical URLs on all pages');
  console.log('   5. Use semantic HTML elements');
  console.log('   6. Ensure proper schema markup\n');
}

// Run if called directly
if (require.main === module) {
  validateSEO().catch(console.error);
}

module.exports = { validateSEO };
