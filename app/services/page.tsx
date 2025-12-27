import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/schema/ServiceSchema';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Probate Real Estate Services | Orange County, CA | Just Call Gene',
  description: 'Comprehensive probate real estate services in Orange County, CA. Expert probate property sales, court-ordered sales, property valuation, and estate management. Certified Probate Real Estate Specialists serving Newport Beach, Irvine, and Corona Del Mar. Free consultation.',
  keywords: [
    'probate real estate services',
    'probate property sales',
    'court ordered sale',
    'probate property valuation',
    'estate property management',
    'probate transaction support',
    'Probate Real Estate Specialists services',
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
      <ServiceSchema
        name="Probate Real Estate Services"
        description="Comprehensive probate real estate services including probate property sales, court-ordered sales, property valuation, estate management, and probate transaction support in Orange County, California."
        serviceType="Probate Real Estate Services"
        areaServed={['Newport Beach', 'Irvine', 'Corona Del Mar', 'Laguna Beach', 'Costa Mesa', 'Huntington Beach', 'Orange County', 'California']}
      />
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

        {/* Problems & Solutions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Common Probate Property <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Problems & Solutions</span>
            </h2>

            <div className="space-y-8 mb-12">
              {/* Problem 1 */}
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Court Requirements Are Overwhelming</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Probate property sales require extensive court documentation, specific filing procedures, and compliance with California probate court requirements. Many families struggle with understanding what documents are needed, when to file them, and how to ensure court approval. Missing deadlines or incorrect documentation can delay probate sales for months, costing families time and money.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                      <p className="text-green-800">
                        Our probate real estate specialists handle all court documentation and filing requirements. We coordinate with probate attorneys, prepare all necessary documents, and ensure compliance with Orange County probate court procedures. Our deep knowledge of court requirements means we get it right the first time, avoiding delays and ensuring smooth probate transactions. We manage all court deadlines and requirements so families can focus on healing.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 2 */}
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Property Values Are Undervalued</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Probate properties often sell below market value because executors may lack real estate expertise, properties may need repairs, or families may rush to sell. Without proper valuation and marketing, probate properties can sell for significantly less than they're worth, reducing estate values and inheritance amounts for beneficiaries.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                      <p className="text-green-800">
                        We provide comprehensive probate property valuations that meet court requirements while maximizing estate values. Our probate real estate specialists understand Orange County market dynamics, ensuring probate properties are priced appropriately for Newport Beach, Irvine, Corona Del Mar, and other communities. We develop strategic marketing plans that reach qualified buyers, ensuring probate properties achieve optimal sale prices that maximize estate values for beneficiaries.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 3 */}
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Probate Sales Take Too Long</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Probate property sales can take 9-18 months or longer, causing financial strain on families who need to pay estate expenses, property maintenance costs, and other obligations. Delays can occur due to court backlogs, missing documentation, or lack of probate expertise, leaving families waiting months for probate sales to complete.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                      <p className="text-green-800">
                        Our probate real estate specialists manage timelines efficiently, ensuring all court requirements are met promptly and probate sales proceed without unnecessary delays. We coordinate with probate attorneys, court schedules, and property preparation to optimize probate timelines. Our expertise means we anticipate requirements, prepare documentation in advance, and ensure probate sales move forward efficiently, reducing wait times and financial strain on families.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 4 */}
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Family Conflicts and Disagreements</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Probate property sales often involve multiple heirs with different opinions about property values, sale timing, and estate distribution. Family conflicts can delay probate sales, create legal disputes, and make the probate process emotionally difficult. Without proper mediation and communication, family disagreements can derail probate sales entirely.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                      <p className="text-green-800">
                        Our probate real estate specialists provide compassionate support and clear communication throughout the probate process. We work with all parties, including executors, administrators, beneficiaries, and probate attorneys, ensuring everyone understands the process and feels heard. We provide objective market analysis and professional guidance that helps families make informed decisions together, reducing conflicts and ensuring probate sales proceed smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 5 */}
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: General Real Estate Agents Lack Probate Expertise</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Most real estate agents handle probate sales occasionally, lacking specialized knowledge of probate court procedures, court requirements, and probate-specific challenges. This inexperience can lead to mistakes, delays, and suboptimal outcomes. General agents may not understand probate timelines, court approval processes, or how to maximize probate property values while ensuring court compliance.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Our Solution:</h4>
                      <p className="text-green-800">
                        Just Call Gene specializes exclusively in probate real estate—it's our only business. We're certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert) with deep knowledge of Orange County probate courts and procedures. Our exclusive probate focus means we understand probate requirements, court procedures, and probate-specific challenges better than general real estate agents. This specialization ensures probate sales proceed smoothly and achieve optimal outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At Just Call Gene, we provide comprehensive probate real estate services exclusively focused on helping families sell inherited properties in Orange County, California. Our services are designed to solve the unique challenges of probate transactions while providing the support and guidance families need during this difficult time.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                As certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert), we understand that probate sales require specialized knowledge, court compliance, and sensitivity to family dynamics. Our exclusive focus on probate real estate means we've developed deep expertise, refined processes, and comprehensive knowledge specifically in probate transactions. Every aspect of our service is designed to solve probate challenges and help you navigate the probate sale process successfully.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Why Choose Our Probate Services?</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                What sets our probate services apart is our exclusive focus on probate real estate, our specialized certifications, and our results-driven approach. We don't handle general real estate—probate is our only business. This focus means we understand probate court requirements, legal procedures, and the unique challenges of probate sales better than anyone else in Orange County. Our expertise speaks for itself: comprehensive knowledge of probate procedures, proven strategies, and recognition as Orange County's premier probate real estate specialists.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">100% Probate Focus</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Unlike general real estate agents who may handle probate as a side service, probate real estate is our exclusive focus. Every aspect of our business—from our training and certifications to our processes and expertise—is dedicated to probate property sales. This specialization means we understand the nuances, requirements, and challenges of probate transactions better than anyone else.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Certified Expertise</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We hold specialized certifications as Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert). These certifications represent additional training and expertise specifically in probate transactions, ensuring we understand court requirements, legal procedures, and the unique challenges of probate sales. Our certifications demonstrate our commitment to probate specialization and our expertise in this field.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Proven Results</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our success is measured in results: comprehensive knowledge of probate procedures, proven strategies, and recognition as Orange County's premier probate real estate specialists. We combine probate expertise, market knowledge, and strategic thinking to deliver results that exceed expectations. When you work with Just Call Gene, you're working with a team that has deep expertise and proven methodologies in probate transactions.
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
                Many probate courts require professional appraisals to establish property values. We coordinate with certified appraisers to ensure valuations meet court requirements and legal standards. Our deep knowledge of probate appraisals helps ensure accurate valuations that satisfy court requirements while maximizing estate value.
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
                When property must be sold as part of probate proceedings, we handle all aspects of the court-ordered sale process. This includes preparing the necessary documentation, coordinating with the court, following required marketing procedures, and ensuring compliance with all legal requirements. Our deep knowledge of court-ordered sales helps ensure the process proceeds smoothly and efficiently.
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
                  href: '/sellers/valuation',
                  text: 'Probate Property Valuation',
                  description: 'Professional property valuations that meet court requirements',
                },
                {
                  href: '/about',
                  text: 'About Our Team',
                  description: 'Meet our certified Probate Real Estate Specialists',
                },
                {
                  href: '/contact',
                  text: 'Get Started',
                  description: 'Contact us for a free probate consultation',
                },
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}
