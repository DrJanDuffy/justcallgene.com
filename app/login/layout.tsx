import { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Login | Just Call Gene - Probate Real Estate Specialist',
  description: 'Sign in to access saved searches, favorite properties, and personalized probate real estate services in Orange County.',
  robots: {
    index: false, // Login pages typically shouldn't be indexed
    follow: false,
  },
  openGraph: {
    title: 'Login | Just Call Gene',
    description: 'Sign in to access your account',
    url: `${siteConfig.url}/login`,
  },
  alternates: {
    canonical: `${siteConfig.url}/login`,
  },
};

export default function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

