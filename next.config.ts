import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix workspace root warning
  outputFileTracingRoot: path.join(__dirname),
  
  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization - Enhanced for Cloudflare + Vercel
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for static images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  
  // Reduce legacy JavaScript polyfills
  // Next.js will use modern JavaScript features without transpiling
  transpilePackages: [],
  
  // Compiler options to reduce polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // SWC configuration to target modern browsers
  // This prevents transpiling of baseline features (Array.at, Object.fromEntries, etc.)
  // These features are natively supported in modern browsers (Chrome 92+, Firefox 90+, Safari 15.4+)
  swcMinify: true, // SWC minification (enabled by default, but explicit for clarity)
  
  // SWC minification is enabled by default in Next.js 13+
  // Removed swcMinify as it's deprecated in Next.js 16
  
  // Redirects for SEO - Canonical URL enforcement
  // Note: Vercel automatically handles HTTP → HTTPS redirects
  // These redirects handle non-www → www for HTTPS requests
  async redirects() {
    return [
      // Redirect non-www HTTPS to www HTTPS (canonical)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'justcallgene.com',
          },
        ],
        destination: 'https://www.justcallgene.com/:path*',
        permanent: true,
      },
    ];
  },

  // Headers for SEO, security, and performance
  async headers() {
    return [
      {
        // Static assets - aggressive caching
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js static files
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // API routes - no cache
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      {
        // HTML pages - security headers and cache
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: Allow self, Next.js inline scripts, Google Analytics
              // Note: 'unsafe-inline' required for Next.js hydration
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com",
              // Styles: Allow self, inline styles (for critical CSS), Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: Allow self, Google Fonts, data URIs
              "font-src 'self' https://fonts.gstatic.com data:",
              // Images: Allow self, data URIs, HTTPS images, blob
              "img-src 'self' data: https: blob:",
              // Connections: Allow self, Google Analytics
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google-analytics.com/g/collect",
              // Frames: Allow self and Google Maps
              "frame-src 'self' https://www.google.com https://maps.google.com",
              // No objects
              "object-src 'none'",
              // Base URI: Self only
              "base-uri 'self'",
              // Form actions: Self only
              "form-action 'self'",
              // Frame ancestors: Self only
              "frame-ancestors 'self'",
              // Upgrade insecure requests
              "upgrade-insecure-requests",
              // Note: Trusted Types removed - incompatible with Next.js dynamic script creation
              // Next.js requires dynamic script.src and script.textContent assignment
            ].join('; '),
          },
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
