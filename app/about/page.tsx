import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Our Probate Real Estate Team | Just Call Gene',
  description: 'Meet Gene Boyle and Kelly Lynn Boyle, Orange County\'s premier probate real estate specialists. Certified Probate Real Estate Specialists (Probate Real Estate Specialists) with deep knowledge of probate procedures and court requirements.',
  keywords: [
    'probate real estate team Orange County',
    'Eugene Boyle probate specialist',
    'Kelly Boyle probate broker',
    'Orange County probate real estate agents',
    'probate real estate specialist',
    'Probate Real Estate Specialists certified',
  ],
  openGraph: {
    title: 'About Our Probate Real Estate Specialists | Just Call Gene',
    description: 'Meet Orange County\'s premier probate real estate specialists with deep expertise in probate procedures, court requirements, and Orange County real estate markets.',
    url: `${siteConfig.url}/about`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
];

export default function AboutPage() {
  const eugene = siteConfig.business.agents[0];
  const kelly = siteConfig.business.agents[1];

  return (
    <>
      <PageSchemas
        breadcrumbs={breadcrumbItems}
        includeFAQ={true}
        includeReviews={true}
      />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              About <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Just Call Gene</span>
            </h1>
            <p className="text-xl md:text-2xl text-center text-neutral-100 max-w-3xl mx-auto">
              Orange County's Premier Probate Real Estate Specialists
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Just Call Gene represents the pinnacle of probate real estate excellence in Orange County, California. Our team combines deep knowledge, specialized probate expertise, and a commitment to client success. We're not just real estate agents—we're certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert) dedicated exclusively to helping families navigate probate property sales.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Founded on principles of integrity, professionalism, and results, Just Call Gene has built a reputation as Orange County's premier probate real estate specialists. Our exclusive focus on probate real estate means we've developed deep expertise, refined processes, and comprehensive knowledge specifically in probate transactions. Our unique combination of financial expertise, legal knowledge, and probate specialization allows us to navigate even the most complex probate situations with confidence and success.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Our Mission and Values</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At Just Call Gene, our mission is simple: to provide exceptional probate real estate service that helps families navigate inherited property sales with expertise, compassion, and results. We believe that every family deserves personalized attention, transparent communication, and results-driven service during this difficult time. Whether you're an executor, administrator, or family member navigating a probate transaction, we're committed to making your probate property sale as smooth and successful as possible.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Integrity First</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We conduct every probate transaction with the highest ethical standards. Our clients trust us because we're honest, transparent, and always act in their best interests. This commitment to integrity has earned us a reputation as one of Orange County's most trusted probate real estate specialists.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Results-Driven Approach</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We measure our success by your success. Our expertise speaks for itself: comprehensive knowledge of probate procedures, proven strategies, and recognition as Orange County's premier probate real estate specialists. We combine probate expertise, strategic thinking, and proven methodologies to deliver results that exceed expectations.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Compassionate Service</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Every probate situation is unique, and we tailor our approach to meet your specific needs, timeline, and goals. We understand the emotional challenges families face during probate, and we take the time to understand your situation, answer your questions, and provide the guidance you need to make informed decisions. Your success is our success, and we're committed to going above and beyond to ensure you achieve your probate property sale objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Meet Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Team</span>
            </h2>

            {/* Eugene Boyle */}
            <div className="mb-16">
              <Card variant="elevated" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/agents/EugeneBoyle large .jpg"
                      alt={`${eugene.name} - Orange County Probate Real Estate Specialist`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-neutral-900 mb-2">{eugene.name}</h3>
                      <p className="text-xl text-primary font-semibold mb-4">{eugene.role}</p>
                      <p className="text-neutral-600 mb-4">License #02282581 | Expires: {eugene.licenseExpiration}</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        {eugene.bio}
                      </p>
                      
                      <p className="text-neutral-700 leading-relaxed mb-6">
                        {eugene.extendedBio}
                      </p>

                      <h4 className="text-xl font-bold text-neutral-900 mb-4">Professional Credentials</h4>
                      <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
                        {eugene.credentials.map((credential, index) => (
                          <li key={index}>{credential}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Kelly Boyle */}
            <div>
              <Card variant="elevated" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden lg:order-2">
                    <Image
                      src="/placeholder-broker.jpg"
                      alt={`${kelly.name} - Orange County Probate Real Estate Broker`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-6 lg:order-1">
                    <div>
                      <h3 className="text-3xl font-bold text-neutral-900 mb-2">{kelly.name}</h3>
                      <p className="text-xl text-primary font-semibold mb-4">{kelly.role}</p>
                      <p className="text-neutral-600 mb-4">License #02012693 | Expires: {kelly.licenseExpiration}</p>
                      <p className="text-neutral-600 mb-4">Broker License Issued: {kelly.brokerLicenseIssued}</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        {kelly.bio}
                      </p>
                      
                      <p className="text-neutral-700 leading-relaxed mb-6">
                        {kelly.extendedBio}
                      </p>

                      <h4 className="text-xl font-bold text-neutral-900 mb-4">Professional Credentials</h4>
                      <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
                        {kelly.credentials.map((credential, index) => (
                          <li key={index}>{credential}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.business.professionalHighlights.map((highlight, index) => (
                <Card key={index} variant="elevated" className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{highlight.title}</h3>
                  <p className="text-neutral-700">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
                Why Work With <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Just Call Gene</span> for Probate Sales?
              </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">100% Probate Focus</h3>
                <p className="text-neutral-700">
                  Unlike general real estate agents who may handle probate as a side service, probate real estate is our exclusive focus. Every aspect of our business is dedicated to probate property sales, ensuring unmatched expertise and specialization.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Deep Probate Knowledge & Expertise</h3>
                <p className="text-neutral-700">
                  Our success is built on comprehensive knowledge of probate procedures, court requirements, and Orange County real estate markets. We bring deep expertise and proven strategies to navigate complex probate transactions effectively.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Certified Probate Specialists</h3>
                <p className="text-neutral-700">
                  We hold specialized certifications as Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert). These certifications represent additional training and expertise specifically in probate transactions, ensuring we understand court requirements and legal procedures.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Court Compliance Expertise</h3>
                <p className="text-neutral-700">
                  We understand probate court requirements, procedures, and timelines. Our deep knowledge of probate courts throughout Orange County helps ensure all filings, documentation, and procedures are handled correctly, avoiding delays and complications.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Compassionate Family Support</h3>
                <p className="text-neutral-700">
                  We understand that probate transactions can be emotionally challenging. We provide compassionate support, clear communication, and professional guidance to help families navigate this difficult time with sensitivity and care.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Attorney & Executor Coordination</h3>
                <p className="text-neutral-700">
                  We work seamlessly with probate attorneys, executors, administrators, and other professionals involved in the probate process. Our deep knowledge of multi-party probate transactions ensures effective coordination and communication.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Orange County's Premier Probate Real Estate Specialists?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you navigate your probate property sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us Today
              </Button>
              <Button
                href="/probate"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn About Probate Process
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks
              title="Learn More"
              links={[
                {
                  href: '/probate',
                  text: 'Probate Real Estate Process',
                  description: 'Understanding probate real estate and how we can help',
                },
                {
                  href: '/services',
                  text: 'Our Probate Services',
                  description: 'Comprehensive probate real estate services we offer',
                },
                {
                  href: '/sellers/valuation',
                  text: 'Property Valuation',
                  description: 'Professional probate property valuations',
                },
                {
                  href: '/contact',
                  text: 'Contact Us',
                  description: 'Get in touch for a free consultation',
                },
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}
