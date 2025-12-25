import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Probate Real Estate Services | Orange County, CA | Just Call Gene',
  description: 'Comprehensive probate real estate services in Orange County: probate property sales, court-ordered sales, property valuation, estate management, and probate transaction support. Certified Probate Real Estate Specialists.',
  keywords: [
    'probate real estate services',
    'probate property sales',
    'court ordered sale',
    'probate property valuation',
    'estate property management',
    'probate transaction support',
    'CPRES services',
  ],
  openGraph: {
    title: 'Probate Real Estate Services | Orange County, CA',
    description: 'Comprehensive probate real estate services for inherited property sales in Orange County.',
    url: `${siteConfig.url}/services`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Probate Real Estate</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-center text-neutral-100 max-w-3xl mx-auto">
              Comprehensive Solutions for Probate Property Sales in Orange County
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At Just Call Gene, we provide comprehensive probate real estate services exclusively focused on helping families sell inherited properties in Orange County, California. Our services are designed to handle the unique requirements of probate transactions while providing the support and guidance families need during this difficult time.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                As certified Probate Real Estate Specialists (CPRES) and Probate Experts (CPE), we understand that probate sales require specialized knowledge, court compliance, and sensitivity to family dynamics. Our exclusive focus on probate real estate means we've developed deep expertise, refined processes, and extensive experience specifically in probate transactions. Every aspect of our service is designed to help you navigate the probate sale process successfully.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Why Choose Our Probate Services?</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                What sets our probate services apart is our exclusive focus on probate real estate, our specialized certifications, and our results-driven approach. We don't handle general real estate—probate is our only business. This focus means we understand probate court requirements, legal procedures, and the unique challenges of probate sales better than anyone else in Orange County. Our track record speaks for itself: over $200 million in successful probate property sales, hundreds of satisfied families, and recognition as Orange County's premier probate real estate specialists.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">100% Probate Focus</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Unlike general real estate agents who may handle probate as a side service, probate real estate is our exclusive focus. Every aspect of our business—from our training and certifications to our processes and expertise—is dedicated to probate property sales. This specialization means we understand the nuances, requirements, and challenges of probate transactions better than anyone else.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Certified Expertise</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We hold specialized certifications as Probate Real Estate Specialists (CPRES) and Probate Experts (CPE). These certifications represent additional training and expertise specifically in probate transactions, ensuring we understand court requirements, legal procedures, and the unique challenges of probate sales. Our certifications demonstrate our commitment to probate specialization and our expertise in this field.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Proven Results</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our success is measured in results: over $200 million in probate property sales, hundreds of satisfied families, and recognition as Orange County's premier probate real estate specialists. We combine probate expertise, market knowledge, and strategic thinking to deliver results that exceed expectations. When you work with Just Call Gene, you're working with a team that has a proven track record of success in probate transactions.
              </p>
            </div>
          </div>
        </section>

        {/* Probate Property Valuation */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Property</span> Valuation
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Accurate property valuation is essential in probate transactions, as it affects estate taxes, distribution to heirs, and court approval. We provide professional valuations that meet court requirements and help determine fair market value. These valuations are used for estate tax purposes, distribution planning, and establishing the sale price.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court-Required Appraisals</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Many probate courts require professional appraisals to establish property values. We coordinate with certified appraisers to ensure valuations meet court requirements and legal standards. Our experience with probate appraisals helps ensure accurate valuations that satisfy court requirements while maximizing estate value.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Estate Tax Valuation Support</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Property valuations are crucial for estate tax purposes. We provide valuations that support estate tax filings and help minimize tax liability. Our understanding of estate tax implications helps ensure valuations are accurate and support optimal tax outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Professional Valuation Process</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Comprehensive property assessment</li>
                  <li>Market analysis and comparable sales</li>
                  <li>Property condition evaluation</li>
                  <li>Court-compliant valuation reports</li>
                  <li>Estate tax support documentation</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Certified Appraiser Coordination</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Certified appraiser referrals</li>
                  <li>Appraisal coordination and management</li>
                  <li>Court requirement compliance</li>
                  <li>Valuation review and analysis</li>
                  <li>Documentation preparation</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button href="/sellers/valuation" variant="primary" size="lg">
                Get Your Probate Property Valuation
              </Button>
            </div>
          </div>
        </section>

        {/* Court-Ordered Sales */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Court-Ordered</span> Sales
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When property must be sold as part of probate proceedings, we handle all aspects of the court-ordered sale process. This includes preparing the necessary documentation, coordinating with the court, following required marketing procedures, and ensuring compliance with all legal requirements. Our experience with court-ordered sales helps ensure the process proceeds smoothly and efficiently.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court Filing and Documentation</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Court-ordered sales require specific documentation and filings. We prepare all necessary documents, coordinate with attorneys and executors, and ensure compliance with court procedures. Our experience with probate courts throughout Orange County helps ensure filings are correct and complete, avoiding delays.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Legal Requirement Compliance</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate sales must comply with specific legal requirements, including marketing procedures, disclosure requirements, and sale terms. We ensure all requirements are met, protecting the estate and ensuring the sale proceeds legally and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sale Process Coordination</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Court petition preparation</li>
                  <li>Documentation and filing</li>
                  <li>Court hearing coordination</li>
                  <li>Sale approval process</li>
                  <li>Court reporting and updates</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Multi-Party Management</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Attorney coordination</li>
                  <li>Executor/administrator support</li>
                  <li>Heir communication</li>
                  <li>Creditor coordination</li>
                  <li>Professional collaboration</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Property Management During Probate */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Property <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Management</span> During Probate
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Properties in probate often require ongoing maintenance and management while the estate is being settled. We coordinate property care, security, utilities, and insurance to ensure the property is maintained and protected. This management helps preserve property value and ensures the property is ready for sale when the time comes.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Property Maintenance and Care</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Maintaining probate properties is essential to preserving value and ensuring successful sales. We coordinate maintenance, repairs, landscaping, and cleaning to keep properties in good condition. Our property management services help protect estate assets and maximize sale values.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Security and Protection</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Vacant properties can be vulnerable to damage, theft, or unauthorized access. We coordinate security measures, including locks, alarms, and monitoring, to protect probate properties. Our security services help protect estate assets and provide peace of mind for families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Maintenance Services</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Regular property inspections</li>
                  <li>Maintenance and repair coordination</li>
                  <li>Landscaping and exterior care</li>
                  <li>Interior cleaning and preparation</li>
                  <li>Utility management</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Protection Services</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Security system coordination</li>
                  <li>Property monitoring</li>
                  <li>Insurance management</li>
                  <li>Damage prevention</li>
                  <li>Asset protection</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Marketing and Sale */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Marketing</span> and Sale
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Once court approval is obtained, we market probate properties professionally, following any court-required procedures. We use comprehensive marketing strategies to reach qualified buyers, coordinate showings, and handle offers. Our goal is to maximize the sale price while meeting court requirements and timelines.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court-Compliant Marketing</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate sales may require specific marketing procedures, such as minimum advertising periods or specific disclosure statements. We ensure all court requirements are met while maximizing property exposure to qualified buyers. Our marketing strategies balance court compliance with effective property promotion.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Professional Property Presentation</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We coordinate professional photography, staging, and presentation to showcase probate properties at their best. Our presentation strategies help maximize buyer interest and sale prices while respecting the sensitive nature of probate transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Marketing Strategies</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>MLS listing and syndication</li>
                  <li>Court-required advertising</li>
                  <li>Professional photography</li>
                  <li>Virtual tours and presentations</li>
                  <li>Targeted buyer outreach</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sale Coordination</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Offer evaluation and negotiation</li>
                  <li>Court confirmation process</li>
                  <li>Transaction management</li>
                  <li>Closing coordination</li>
                  <li>Proceeds distribution</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Family Support */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Family Support</span> and Communication
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We understand that probate transactions can be emotionally challenging. We provide compassionate support, clear communication, and professional guidance to help families navigate this difficult time. Our approach balances professionalism with sensitivity to family dynamics and emotional needs.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Compassionate Service</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We recognize that probate sales occur during difficult times for families. We provide compassionate, understanding service that respects the emotional challenges families face. Our approach balances professionalism with sensitivity, ensuring families feel supported throughout the process.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Clear Communication</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We believe in keeping families informed every step of the way. We provide clear, honest communication about the probate process, court requirements, timelines, and progress. Our goal is to reduce stress and uncertainty by keeping families informed and involved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Support Services</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Compassionate family support</li>
                  <li>Emotional sensitivity</li>
                  <li>Process explanation and guidance</li>
                  <li>Timeline management</li>
                  <li>Stress reduction</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Communication Services</h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Regular updates and reports</li>
                  <li>Clear process explanations</li>
                  <li>Multi-party communication</li>
                  <li>Question answering</li>
                  <li>Transparency and honesty</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with a Probate Property Sale?
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
      </main>
    </>
  );
}
