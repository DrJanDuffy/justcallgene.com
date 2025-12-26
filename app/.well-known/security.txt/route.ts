import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/config';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com';
  const cleanUrl = baseUrl.replace(/\/$/, '');

  // Calculate expiration date (1 year from now)
  const expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);
  const expiresISO = expiresDate.toISOString();

  // Security.txt content following RFC 9116
  const securityTxt = `Contact: mailto:${siteConfig.business.email}
Expires: ${expiresISO}
Preferred-Languages: en
Canonical: ${cleanUrl}/.well-known/security.txt
Policy: ${cleanUrl}/security-policy

# Security Policy for ${siteConfig.business.name}
# 
# We take security seriously and appreciate responsible disclosure of vulnerabilities.
# 
# Please report security vulnerabilities to: ${siteConfig.business.email}
# 
# We will respond to security reports within 48 hours and work to resolve
# critical issues as quickly as possible.
# 
# Please do not:
# - Access or modify user data without permission
# - Perform any actions that could harm our users or services
# - Disclose vulnerabilities publicly before we've had a chance to address them
# - Perform denial of service attacks
# - Access accounts or data that does not belong to you
# 
# Thank you for helping keep ${siteConfig.business.name} secure!
`;

  return new NextResponse(securityTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

