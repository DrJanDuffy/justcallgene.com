import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LocalBusinessSchema } from "@/components/StructuredData";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true, // Preload critical font
  fallback: ["system-ui", "-apple-system", "sans-serif"], // Immediate fallback
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT
  preload: false, // Only preload primary font
  fallback: ["monospace"], // Immediate fallback
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.justcallgene.com'),
  title: {
    default: 'Orange County Probate Specialist | Gene Boyle | Expert Knowledge',
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Orange County\'s top probate realtor. Gene Boyle brings deep probate knowledge and expertise with 12% average premium. Free valuation. (949) 776-3527',
  keywords: [
    'probate real estate specialist',
    'probate realtor Orange County',
    'probate property sales',
    'Probate Real Estate Specialists certified',
    'probate expert',
    'Orange County probate real estate',
    'Newport Beach probate sales',
    'Irvine probate properties',
    'Corona Del Mar probate real estate',
    'probate property valuation',
    'court ordered sale',
    'inherited property sales',
    'probate home sales',
    'probate real estate agent',
    siteConfig.business.address.addressLocality,
    'California probate real estate',
    'probate estate sales',
    'probate property management',
  ],
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Orange County Probate Real Estate Specialist | Gene Boyle | Just Call Gene',
    description: 'Orange County\'s top probate realtor. Gene Boyle brings deep probate knowledge and expertise with 12% average premium. Free valuation. (949) 776-3527',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Just Call Gene - Orange County Probate Real Estate Specialist | Gene Boyle',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County Probate Real Estate Specialist | Gene Boyle',
    description: 'Orange County\'s top probate realtor. 12% average premium. Free valuation. (949) 776-3527',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pGwJguJoHnONcAq0Y-f24LjFteddDSt7DcBi6UFCqYQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts - Early connection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Note: Removed DNS prefetch for Google Analytics to prevent early connection */}
        {/* Critical CSS - Inline hero section styles for faster LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for LCP element (h1) and hero section */
            /* Ensure h1 renders immediately without animation delay */
            h1 {
              font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
              font-weight: 700;
              line-height: 1.1;
              letter-spacing: -0.03em;
              color: white;
              font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
              opacity: 1 !important; /* Force immediate visibility for LCP */
              transform: none !important; /* Remove any transform delays */
            }
            @media (min-width: 768px) {
              h1 { font-size: clamp(3.5rem, 6vw + 1rem, 5.5rem); }
            }
            @media (min-width: 1024px) {
              h1 { font-size: clamp(4.5rem, 7vw + 1rem, 6.5rem); }
            }
            /* Hero section background - prevent flash */
            section:first-of-type {
              background: linear-gradient(to bottom right, #0f172a, #1e3a8a, #0f172a);
              min-height: 700px;
            }
            /* Gradient text for hero */
            .bg-clip-text {
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            /* Prevent layout shift */
            body {
              margin: 0;
              padding: 0;
            }
            /* Ensure LCP element is immediately visible - override animations */
            section:first-of-type h1 {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* LocalBusiness Schema Markup */}
        <LocalBusinessSchema />
        
        {/* Google Analytics - Loaded after page is fully interactive to improve LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GW4Z2Z186L"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GW4Z2Z186L', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        
        <ReadingProgress />
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
