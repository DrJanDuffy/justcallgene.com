import { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Register | Just Call Gene - Probate Real Estate Specialist',
  description: 'Create an account to save searches, favorite properties, and access personalized probate real estate services in Orange County.',
  robots: {
    index: false, // Registration pages typically shouldn't be indexed
    follow: false,
  },
  openGraph: {
    title: 'Register | Just Call Gene',
    description: 'Create an account to access probate real estate services',
    url: `${siteConfig.url}/register`,
  },
  alternates: {
    canonical: `${siteConfig.url}/register`,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

