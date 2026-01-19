import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Free Probate Property Valuation | Orange County, CA | Just Call Gene',
  description: 'Get a free probate property valuation for your inherited property in Orange County. Expert probate property assessments for Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Call (949) 776-3527.',
  keywords: [
    'probate property valuation',
    'free probate property assessment',
    'probate home valuation Orange County',
    'inherited property valuation',
    'probate property appraisal',
    'estate property valuation',
    'court-ordered property valuation',
  ],
  openGraph: {
    title: 'Free Probate Property Valuation | Orange County, CA',
    description: 'Get a free probate property valuation for your inherited property in Orange County.',
    url: `${siteConfig.url}/sellers/valuation`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/sellers/valuation`,
  },
};

export default function ValuationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
