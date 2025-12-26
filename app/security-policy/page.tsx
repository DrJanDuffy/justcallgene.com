import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Security Policy | Just Call Gene',
  description: 'Security vulnerability disclosure policy for Just Call Gene. Learn how to responsibly report security issues.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/security-policy`,
  },
};

export default function SecurityPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Security Policy', url: '/security-policy' },
      ]} />
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-depth-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Security Policy
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Responsible Vulnerability Disclosure Policy
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Reporting Security Vulnerabilities</h2>
                <p className="text-neutral-700 mb-4">
                  We take the security of {siteConfig.business.name} seriously. If you discover a security vulnerability, 
                  we appreciate your help in disclosing it to us in a responsible manner.
                </p>
                <p className="text-neutral-700 mb-4">
                  Please report security vulnerabilities to: <strong>{siteConfig.business.email}</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What to Include</h2>
                <p className="text-neutral-700 mb-4">When reporting a vulnerability, please include:</p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li>Description of the vulnerability</li>
                  <li>Steps to reproduce the issue</li>
                  <li>Potential impact of the vulnerability</li>
                  <li>Suggested fix (if available)</li>
                  <li>Your contact information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Response Timeline</h2>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li><strong>Initial Response:</strong> Within 48 hours</li>
                  <li><strong>Status Update:</strong> Within 7 days</li>
                  <li><strong>Resolution:</strong> Depends on severity, but we work to resolve critical issues as quickly as possible</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What NOT to Do</h2>
                <p className="text-neutral-700 mb-4">Please do not:</p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li>Access or modify user data without permission</li>
                  <li>Perform any actions that could harm our users or services</li>
                  <li>Disclose vulnerabilities publicly before we've had a chance to address them</li>
                  <li>Perform denial of service attacks</li>
                  <li>Access accounts or data that does not belong to you</li>
                  <li>Use automated scanning tools that may impact our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Safe Harbor</h2>
                <p className="text-neutral-700 mb-4">
                  We will not pursue legal action against security researchers who:
                </p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li>Act in good faith</li>
                  <li>Follow responsible disclosure practices</li>
                  <li>Do not access or modify data beyond what is necessary to demonstrate the vulnerability</li>
                  <li>Do not cause harm to our users or services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Scope</h2>
                <p className="text-neutral-700 mb-4">This policy applies to:</p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li>The {siteConfig.business.name} website ({siteConfig.url})</li>
                  <li>All subdomains and services operated by {siteConfig.business.name}</li>
                </ul>
                <p className="text-neutral-700 mb-4">This policy does NOT apply to:</p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-4">
                  <li>Third-party services we use</li>
                  <li>Social engineering attacks</li>
                  <li>Physical security issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
                <p className="text-neutral-700 mb-4">
                  For security-related issues, please contact us at:
                </p>
                <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                  <p className="text-neutral-900 font-semibold mb-2">Email:</p>
                  <a 
                    href={`mailto:${siteConfig.business.email}`}
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {siteConfig.business.email}
                  </a>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Thank You</h2>
                <p className="text-neutral-700 mb-4">
                  We appreciate your efforts to help keep {siteConfig.business.name} secure. 
                  Your responsible disclosure helps protect our users and services.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

