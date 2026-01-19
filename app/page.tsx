import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { HeroSection } from '@/components/sections/HeroSection';
import { OCValueSection } from '@/components/sections/OCValueSection';
import { BrokerSection } from '@/components/sections/BrokerSection';
import { ProbateProcessSection } from '@/components/sections/ProbateProcessSection';
import { ServicesPricingSection } from '@/components/sections/ServicesPricingSection';
import { BottomCTASection } from '@/components/sections/BottomCTASection';
import { siteConfig } from '@/lib/config';
import { communities, accolades } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Orange County Probate Specialist | Gene Boyle | Expert Knowledge | Just Call Gene',
  description: 'Orange County\'s top probate realtor. Gene Boyle brings deep probate knowledge and expertise with 12% average premium. Free valuation. (949) 776-3527',
  keywords: [
    'probate real estate specialist',
    'probate realtor Orange County',
    'probate property sales California',
    'Probate Real Estate Specialists certified',
    'probate expert',
    'Orange County probate real estate',
    'probate home sales',
    'court ordered sale',
    'inherited property sales',
  ],
  openGraph: {
    title: 'Probate Real Estate Specialist | Orange County, CA',
    description: 'Certified Probate Real Estate Specialist helping families sell inherited properties in Orange County with expertise and compassion.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Probate Real Estate Specialist`,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
];

export default function Home() {
  return (
    <>
      <PageSchemas
        breadcrumbs={breadcrumbItems}
        includeFAQ={true}
        includeReviews={true}
      />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Why Orange County Probate is Different */}
        <OCValueSection />

        {/* Meet Gene Section */}
        <BrokerSection />

        {/* Introduction Section - Enhanced */}
        <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                Orange County's Premier <span className="text-gradient-primary">Probate Real Estate</span> Specialists
              </h2>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert) serving families throughout Orange County
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When you're facing the difficult task of selling an inherited property, you need a real estate professional who understands the unique complexities of probate transactions. Just Call Gene is Orange County's premier probate real estate specialist, dedicated exclusively to helping families navigate the probate property sale process with expertise, compassion, and results.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our team, led by Gene Boyle (Real Estate Salesperson License #02282581) and Kelly Lynn Boyle (Real Estate Broker License #02012693), brings deep knowledge and expertise combined with specialized probate training and certification. We understand that probate sales involve more than just real estate—they require sensitivity to family dynamics, compliance with court requirements, and expertise in navigating complex legal and financial situations.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">100% Focus on Probate Real Estate</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Unlike general real estate agents who may handle probate as a side service, probate real estate is our exclusive focus. Every aspect of our business—from our training and certifications to our processes and expertise—is dedicated to probate property sales. This specialization means we understand the nuances, requirements, and challenges of probate transactions better than anyone else in Orange County.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Why Probate Real Estate Requires Specialization</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate real estate transactions are fundamentally different from traditional real estate sales. They require court approval, specific legal procedures, compliance with probate timelines, and often involve multiple heirs, executors, and attorneys. The process can be emotionally challenging for families while also requiring technical expertise in probate law, court procedures, and real estate. Our exclusive focus on probate means we've mastered every aspect of this specialized field.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Our Service Areas</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We specialize in probate property sales throughout Orange County's most prestigious communities, including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our deep knowledge of these markets, combined with our probate expertise, allows us to maximize property values while ensuring compliance with all court requirements and legal procedures.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Comprehensive Probate Services</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We provide comprehensive probate real estate services, from initial consultation and property valuation through court-ordered sales, marketing, negotiation, and closing. We work closely with probate attorneys, executors, administrators, and family members to ensure probate sales are handled correctly, efficiently, and with the sensitivity these situations require. Our services include court-required appraisals, property management during probate, strategic marketing, and compassionate family support throughout the entire process.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Enhanced */}
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                Why Choose <span className="text-gradient-primary">Just Call Gene</span> for Probate Sales?
              </h2>
              <p className="text-xl md:text-2xl text-neutral-600">The Probate Real Estate Specialist Advantage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Certified Probate Specialists</h3>
                <p className="text-neutral-700">
                  We hold specialized certifications as Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert). These certifications represent additional training and expertise specifically in probate transactions, ensuring we understand court requirements, legal procedures, and the unique challenges of probate sales.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Exclusive Probate Focus</h3>
                <p className="text-neutral-700">
                  100% of our business is dedicated to probate real estate. Unlike general real estate agents who may handle probate occasionally, probate is our exclusive specialty. This focus means we've developed deep expertise, refined processes, and comprehensive knowledge specifically in probate transactions.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Court Compliance Expertise</h3>
                <p className="text-neutral-700">
                  We understand probate court requirements, procedures, and timelines. We ensure all court filings, documentation, and procedures are handled correctly, avoiding delays and complications. Our deep knowledge of probate courts throughout Orange County helps ensure smooth, efficient transactions.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Proven Expertise</h3>
                <p className="text-neutral-700">
                  Our success is measured in results: deep knowledge of probate procedures, proven strategies, and recognition as Orange County's premier probate real estate specialists. We've successfully navigated everything from simple probate sales to complex multi-property estates.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Compassionate Family Support</h3>
                <p className="text-neutral-700">
                  We understand that probate transactions can be emotionally challenging. We provide compassionate support, clear communication, and professional guidance to help families navigate this difficult time. Our approach balances professionalism with sensitivity to family dynamics and emotional needs.
                </p>
              </Card>

              <Card variant="elevated" className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Attorney & Executor Coordination</h3>
                <p className="text-neutral-700">
                  We work seamlessly with probate attorneys, executors, administrators, and other professionals involved in the probate process. Our deep knowledge of multi-party probate transactions ensures effective coordination and communication among all parties, helping avoid delays and complications.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button href="/about" variant="primary" size="lg">
                Learn More About Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Accolades Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Achievements</span>
              </h2>
              <p className="text-lg text-neutral-600">Recognition for Probate Real Estate Excellence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accolades.map((accolade, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  className="p-8 text-center hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-6xl mb-4">{accolade.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{accolade.title}</h3>
                  {accolade.subtitle && (
                    <p className="text-neutral-600">{accolade.subtitle}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Probate Process Overview */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Understanding the <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Process</span>
              </h2>
              <p className="text-lg text-neutral-600">How We Help You Navigate Probate Property Sales</p>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The probate process can seem overwhelming, especially when you're dealing with the loss of a loved one. Understanding what to expect helps reduce stress and allows you to make informed decisions. Here's how we guide you through each step of the probate property sale process.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 1: Initial Consultation and Assessment</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We begin with a comprehensive consultation to understand your situation, assess the property, and explain the probate process. We'll review estate documents, understand court requirements, and develop a strategy for selling the property. This initial assessment helps set expectations and ensures everyone understands the process and timeline. We'll answer your questions, address concerns, and provide clear guidance on what to expect.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 2: Property Valuation and Court Requirements</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Accurate property valuation is essential in probate transactions. We provide professional valuations that meet court requirements and help determine fair market value. These valuations are used for estate tax purposes, distribution to heirs, and establishing the listing price. We work with certified appraisers when required and ensure all valuations meet legal standards. We'll also help you understand court requirements, filing procedures, and timelines.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 3: Court Approval and Listing</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Before a property can be listed for sale, court approval is typically required. We help prepare the necessary documentation, coordinate with attorneys and executors, and ensure compliance with court procedures. Once approval is obtained, we list and market the property professionally, following any court-required procedures while maximizing exposure to qualified buyers.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 4: Marketing and Sale</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We use comprehensive marketing strategies to reach qualified buyers, coordinate showings, and handle offers. Our marketing may need to meet specific court requirements, such as minimum advertising periods or specific disclosure statements. We'll keep you informed throughout the process and work to maximize the sale price while meeting all legal requirements.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 5: Court Confirmation and Closing</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When an offer is received, it typically must be presented to the court for confirmation. We handle this process, ensuring all requirements are met and the sale proceeds smoothly. After court confirmation, we coordinate the closing process, ensuring all court requirements are met and proceeds are properly distributed according to court orders and estate plans.
              </p>
            </div>
          </div>
        </section>

        {/* Communities We Serve */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Orange County <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Communities</span> We Serve
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Probate Property Sales Throughout Orange County's Premier Markets
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We handle probate property sales throughout Orange County, including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our deep knowledge of these markets, combined with our probate expertise, allows us to maximize property values while ensuring compliance with all court requirements. Each community has unique characteristics, price points, and market dynamics that we understand and leverage to achieve optimal results for probate sales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {communities.slice(0, 6).map((community) => (
                <Link
                  key={community.id}
                  href={`/communities/${community.slug}`}
                  className="group"
                >
                  <Card variant="elevated" className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={community.image}
                        alt={`${community.name} Probate Real Estate - Orange County`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{community.name}</h3>
                        <p className="text-sm text-neutral-200">{community.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button href="/communities" variant="primary" size="lg">
                Explore All Communities
              </Button>
            </div>
          </div>
        </section>

        {/* Our Probate Services */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Services</span>
              </h2>
              <p className="text-lg text-neutral-600">Comprehensive Probate Real Estate Solutions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Probate Property Valuation</h3>
                <p className="text-neutral-700 mb-4">
                  Accurate property valuation is crucial in probate transactions, as it affects estate taxes, distribution to heirs, and court approval. We provide professional valuations that meet court requirements and help ensure fair distribution of assets.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>Court-required property appraisals</li>
                  <li>Estate tax valuation support</li>
                  <li>Market analysis for probate sales</li>
                  <li>Fair market value determination</li>
                  <li>Professional valuation reports</li>
                </ul>
                <Button href="/sellers/valuation" variant="primary">
                  Get Probate Property Valuation
                </Button>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Court-Ordered Sales</h3>
                <p className="text-neutral-700 mb-4">
                  When property must be sold as part of probate proceedings, we handle all aspects of the court-ordered sale process, ensuring compliance with legal requirements and maximizing value for the estate.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>Court filing and documentation</li>
                  <li>Legal requirement compliance</li>
                  <li>Sale process coordination</li>
                  <li>Court reporting and updates</li>
                  <li>Multi-party transaction management</li>
                </ul>
                <Button href="/probate" variant="primary">
                  Learn About Court-Ordered Sales
                </Button>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Property Management During Probate</h3>
                <p className="text-neutral-700 mb-4">
                  Properties in probate often require ongoing maintenance and management while the estate is being settled. We coordinate property care, security, utilities, and insurance to ensure the property is maintained and protected.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>Property maintenance coordination</li>
                  <li>Security and protection</li>
                  <li>Preparation for sale</li>
                  <li>Utility and insurance management</li>
                  <li>Property preservation</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Family Support & Communication</h3>
                <p className="text-neutral-700 mb-4">
                  We understand that probate transactions can be emotionally challenging. We provide compassionate support, clear communication, and professional guidance to help families navigate this difficult time.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4">
                  <li>Compassionate family support</li>
                  <li>Clear communication with all parties</li>
                  <li>Timeline and process explanation</li>
                  <li>Emotional support during difficult times</li>
                  <li>Regular updates and transparency</li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <Button href="/services" variant="primary" size="lg">
                View All Probate Services
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Selling a Probate Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation. We'll help you understand the process and guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Free Consultation
              </Button>
              <Button
                href={`mailto:${siteConfig.business.probateEmail}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Email {siteConfig.business.probateEmail}
              </Button>
            </div>
          </div>
        </section>

        {/* Probate Process Section */}
        <ProbateProcessSection />

        {/* Services & Pricing Section */}
        <ServicesPricingSection />

        {/* Related Resources */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks
              title="Explore Our Probate Real Estate Services"
              links={[
                {
                  href: '/probate',
                  text: 'Understanding Probate Real Estate',
                  description: 'Learn about the probate process and how it affects real estate transactions',
                },
                {
                  href: '/services',
                  text: 'Our Probate Services',
                  description: 'Comprehensive probate real estate services throughout Orange County',
                },
                {
                  href: '/sellers/valuation',
                  text: 'Get Property Valuation',
                  description: 'Request a free probate property valuation',
                },
                {
                  href: '/communities',
                  text: 'Orange County Communities',
                  description: 'Probate property sales in Newport Beach, Irvine, Corona Del Mar, and more',
                },
                {
                  href: '/about',
                  text: 'About Our Team',
                  description: 'Meet our certified Probate Real Estate Specialists',
                },
                {
                  href: '/faq',
                  text: 'Frequently Asked Questions',
                  description: 'Answers to common probate real estate questions',
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

        {/* Bottom CTA Section */}
        <BottomCTASection />
      </main>
    </>
  );
}
