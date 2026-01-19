import { Metadata } from 'next';
import Link from 'next/link';
import { FAQsSection } from '@/components/sections/FAQsSection';
import { faqs } from '@/lib/data';
import { siteConfig } from '@/lib/config';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { InternalLinks } from '@/components/ui/InternalLinks';

export const metadata: Metadata = {
  title: 'Probate Real Estate FAQ | Frequently Asked Questions | Orange County, CA',
  description: 'Frequently asked questions about probate real estate in Orange County. Learn about probate property sales, court procedures, timelines, and probate real estate services in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Call (949) 776-3527.',
  keywords: [
    'probate real estate FAQ',
    'probate property questions',
    'probate sale FAQ Orange County',
    'probate real estate questions',
    'court-ordered sale FAQ',
    'probate property answers',
  ],
  openGraph: {
    title: 'Probate Real Estate FAQ | Frequently Asked Questions | Orange County, CA',
    description: 'Frequently asked questions about probate real estate in Orange County communities.',
    url: `${siteConfig.url}/faq`,
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
        includeFAQ={true}
        includeReviews={true}
        faqs={faqs}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Answers to common questions about probate property sales in Orange County, California
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Navigating probate property sales in Orange County can raise many questions. Whether you're dealing with an inherited property in Newport Beach, a family estate in Irvine, or a coastal property in Corona Del Mar, understanding the probate process is essential. Our frequently asked questions provide answers to common questions about probate real estate, court procedures, timelines, and probate property sales throughout Orange County communities.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Just Call Gene provides probate real estate services throughout Orange County, California, serving Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our office is located at 1 TECHNOLOGY DRIVE Suite I829G in Irvine, CA 92618. If you have questions about probate property sales that aren't answered here, call us at <a href="tel:949-776-3527" className="text-primary font-semibold hover:underline">(949) 776-3527</a> or email <a href="mailto:Probate@JustCallGene.com" className="text-primary font-semibold hover:underline">Probate@JustCallGene.com</a> for a free probate consultation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQsSection />

        {/* Additional Information */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Additional Probate Real Estate <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Information</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Understanding Probate Property Sales in Orange County</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate property sales in Orange County require specialized expertise due to court requirements, legal procedures, and unique market considerations. Each Orange County community, from <Link href="/communities/newport-beach" className="text-primary font-semibold hover:underline">Newport Beach</Link> to <Link href="/communities/irvine" className="text-primary font-semibold hover:underline">Irvine</Link>, <Link href="/communities/corona-del-mar" className="text-primary font-semibold hover:underline">Corona Del Mar</Link> to <Link href="/communities/laguna-beach" className="text-primary font-semibold hover:underline">Laguna Beach</Link>, has distinct characteristics that affect probate property sales. Our probate real estate specialists understand these community-specific dynamics, ensuring successful probate transactions throughout Orange County. Learn more about our <Link href="/services" className="text-primary font-semibold hover:underline">probate services</Link> and the <Link href="/probate" className="text-primary font-semibold hover:underline">probate process</Link>.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court Procedures and Compliance</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                California probate courts require specific procedures for probate property sales, including court approval, proper documentation, and compliance with probate timelines. Our probate real estate specialists ensure all court requirements are met, helping families navigate probate procedures efficiently while maximizing estate values. Understanding these procedures is essential for successful probate property sales in Orange County.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Probate Property Valuation</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Accurate probate property valuation is critical for court purposes, estate distribution, and establishing sale prices. Our probate real estate specialists coordinate with certified appraisers to ensure valuations meet court requirements while maximizing estate values. Whether the probate property is in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, or Huntington Beach, we ensure accurate valuations that reflect current market conditions. <Link href="/sellers/valuation" className="text-primary font-semibold hover:underline">Request a free probate property valuation</Link> to get started.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Timeline Expectations</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate property sales typically take longer than traditional sales due to court requirements and procedures. Understanding timeline expectations helps families plan accordingly and set realistic expectations. Our probate real estate specialists help manage timelines effectively, ensuring probate property sales proceed efficiently while meeting all court requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks
              title="Related Resources"
              links={[
                {
                  href: '/probate',
                  text: 'Understanding Probate Real Estate',
                  description: 'Learn about the probate process and how it affects real estate transactions',
                },
                {
                  href: '/services',
                  text: 'Probate Real Estate Services',
                  description: 'Comprehensive probate services throughout Orange County',
                },
                {
                  href: '/media/probate-guides',
                  text: 'Probate Real Estate Guides',
                  description: 'Detailed guides for probate property sales in Orange County',
                },
                {
                  href: '/contact',
                  text: 'Contact Us',
                  description: 'Get in touch for a free probate consultation',
                },
              ]}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions About Probate Property?
            </h2>
            <p className="text-xl text-neutral-100 mb-8">
              Our probate real estate specialists are here to help. Call <a href="tel:949-776-3527" className="font-semibold underline hover:text-white/90">(949) 776-3527</a> for a free probate consultation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

