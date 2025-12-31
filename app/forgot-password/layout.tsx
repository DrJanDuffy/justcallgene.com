import { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Forgot Password | Just Call Gene - Probate Real Estate Specialist',
  description: 'Reset your password to regain access to your Just Call Gene account and probate real estate services.',
  robots: {
    index: false, // Password reset pages shouldn't be indexed
    follow: false,
  },
  openGraph: {
    title: 'Forgot Password | Just Call Gene',
    description: 'Reset your password',
    url: `${siteConfig.url}/forgot-password`,
  },
  alternates: {
    canonical: `${siteConfig.url}/forgot-password`,
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

