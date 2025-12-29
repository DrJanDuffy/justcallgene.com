import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { InternalLinks } from '@/components/ui/InternalLinks';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { siteConfig } from '@/lib/config';
import { PageSchemas } from '@/components/schema/PageSchemas';

export const metadata: Metadata = {
  title: 'Probate Real Estate Specialist in Orange County, CA | Just Call Gene',
  description: 'Expert Probate Real Estate Specialist serving Orange County, CA. Comprehensive guidance for probate property sales in Newport Beach, Irvine, Corona Del Mar, and throughout Orange County. Certified Probate Real Estate Specialists with deep knowledge of court procedures. Free consultation.',
  keywords: [
    'probate real estate',
    'probate realtor Orange County',
    'probate property sales',
    'Probate Real Estate Specialists',
    'probate real estate specialist',
    'Orange County probate',
    'California probate real estate',
    'probate home sales',
    'court ordered sale',
    'probate attorney',
  ],
  openGraph: {
    title: 'Probate Real Estate Specialist - Orange County, CA',
    description: 'Probate Real Estate Specialist helping families navigate probate property sales in Orange County with expertise and compassion.',
    url: `${siteConfig.url}/probate`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/probate`,
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Probate Realtor', url: '/probate' },
];

export default function ProbatePage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={breadcrumbItems}
        includeFAQ={true}
        includeReviews={true}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-primary-light text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Probate Specialist
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Probate Real Estate <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">Specialist</span> in Orange County
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 mb-10 max-w-3xl mx-auto animate-fade-in-up">
              Expert probate real estate services to help you navigate the process with expertise and compassion
            </p>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-glow hover:shadow-glow-lg"
            >
              Book Free Probate Consultation
            </Button>
          </div>
        </section>

        {/* Problems & Solutions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
              Solving Probate Property <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Challenges</span>
            </h2>

            <div className="space-y-8 mb-12">
              {/* Problem 1 */}
              <Card className="p-8 border-l-4 border-red-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: You Don't Know Where to Start</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> After losing a loved one, dealing with probate property can feel overwhelming. You may not know what documents are needed, which court to file with, or how to begin the probate sale process. Without clear guidance, families often delay probate sales, causing financial strain and emotional stress.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-bold text-green-900 mb-2 text-lg">Our Solution:</h4>
                      <p className="text-green-800 leading-relaxed">
                        We start with a free probate consultation where we assess your situation, explain the probate process, and create a clear action plan. Our probate real estate specialists guide you through every step, from initial court filing through property sale and closing. We handle all documentation, coordinate with probate attorneys, and ensure you understand each phase of the process. You don't have to figure it out alone—we're here to guide you from start to finish.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 2 */}
              <Card className="p-8 border-l-4 border-red-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Court Procedures Are Confusing</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> California probate courts have specific procedures, filing requirements, and deadlines that can be confusing for families. Missing a deadline or filing incorrect documents can delay probate sales for months. Many families struggle to understand court requirements, leading to costly mistakes and extended timelines.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-bold text-green-900 mb-2 text-lg">Our Solution:</h4>
                      <p className="text-green-800 leading-relaxed">
                        Our probate real estate specialists have deep knowledge of Orange County probate court procedures. We know exactly what documents are needed, when to file them, and how to ensure court approval. We coordinate with probate attorneys, prepare all required documentation, and manage court deadlines. Our expertise means we get it right the first time, avoiding delays and ensuring smooth probate transactions. We handle all court requirements so you don't have to navigate the legal system alone.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 3 */}
              <Card className="p-8 border-l-4 border-red-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: Property Is Losing Value While Waiting</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Probate properties often sit vacant for months, requiring maintenance, insurance, and utility payments while losing value due to deferred maintenance or market changes. Families may struggle to afford ongoing property expenses, creating financial pressure during an already difficult time.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-bold text-green-900 mb-2 text-lg">Our Solution:</h4>
                      <p className="text-green-800 leading-relaxed">
                        We manage probate property timelines efficiently, ensuring properties are sold as quickly as possible while meeting all court requirements. We coordinate property maintenance, security, and preparation to preserve value. Our probate real estate specialists work to minimize delays, optimize timelines, and ensure probate sales proceed efficiently. We help families avoid unnecessary property expenses by moving probate sales forward promptly and effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Problem 4 */}
              <Card className="p-8 border-l-4 border-red-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Problem: You're Worried About Getting Fair Value</h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                      <strong>The Challenge:</strong> Families often worry that probate properties will sell below market value, especially if properties need repairs or if executors lack real estate expertise. Without proper valuation and marketing, probate properties can sell for significantly less than they're worth, reducing inheritance amounts for beneficiaries.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-bold text-green-900 mb-2 text-lg">Our Solution:</h4>
                      <p className="text-green-800 leading-relaxed">
                        We provide comprehensive probate property valuations that meet court requirements while maximizing estate values. Our probate real estate specialists understand Orange County market dynamics in Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. We develop strategic marketing plans that reach qualified buyers, ensuring probate properties achieve optimal sale prices. Our goal is to maximize estate values for beneficiaries while ensuring court compliance.
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Selling a probate property is one of the most challenging real estate transactions you may face. It combines the emotional difficulty of dealing with a loved one's estate with the complexity of legal requirements, court procedures, and real estate processes. As certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert), we understand these challenges and provide solutions, expertise, and guidance needed to navigate probate real estate successfully.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At Just Call Gene, we specialize in probate real estate throughout Orange County, including Newport Beach, Irvine, Corona Del Mar, Laguna Beach, Costa Mesa, and Huntington Beach. Our team brings deep knowledge and expertise combined with specialized probate training and certification. We work closely with probate attorneys, executors, administrators, and family members to solve probate challenges and ensure probate sales are handled correctly, efficiently, and with the sensitivity these situations require.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">What is Probate Real Estate?</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate real estate involves selling property that's part of an estate after someone passes away. When a person dies, their assets, including real estate, become part of their estate. If the estate goes through probate court, the property may need to be sold to pay debts, distribute assets to heirs, or fulfill other estate requirements. This process requires court approval, specific legal procedures, and often involves multiple heirs or beneficiaries.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">When Probate Sales Are Required</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate sales are typically required when a property owner dies without a will (intestate), when the will doesn't specify how to handle the property, when there are disputes among heirs, when the estate needs to pay debts, or when the court orders a sale. The probate process ensures that the deceased person's assets are properly distributed according to law and that creditors are paid. Understanding when and why probate sales are necessary helps families prepare for the process.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Probate Process</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The probate process begins when someone files a petition with the probate court. The court appoints an executor (if there's a will) or an administrator (if there's no will) to manage the estate. This person is responsible for identifying assets, paying debts, and distributing property to heirs. If real estate needs to be sold, the executor or administrator must obtain court approval before listing and selling the property. The entire process can take several months to over a year, depending on the complexity of the estate.
              </p>
            </div>
              </div>
              <div className="lg:col-span-1">
                <TableOfContents />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose a Probate Specialist */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Why Choose a <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Specialist</span>?
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate real estate transactions are fundamentally different from traditional real estate sales. They involve court oversight, specific legal requirements, unique timelines, and often require working with multiple parties including attorneys, executors, heirs, and creditors. A probate specialist understands these complexities and has the knowledge to navigate them effectively.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Understanding Court Requirements</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Probate sales require compliance with specific court procedures and legal requirements. These include obtaining court approval before listing, following specific marketing requirements, obtaining court confirmation of the sale, and ensuring all legal documents are properly executed. A probate specialist understands these requirements and ensures compliance throughout the process, avoiding delays and potential legal issues.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Working with Executors and Administrators</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Executors and administrators have fiduciary responsibilities and must act in the best interests of the estate. They often need guidance on property values, market conditions, and sale strategies. A probate specialist understands these responsibilities and works collaboratively with executors and administrators to achieve the best possible outcomes for the estate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Court Compliance</h3>
                <p className="text-neutral-700 mb-4">
                  We ensure all court requirements are met, including proper documentation, court filings, and sale procedures. Our deep knowledge of probate courts helps avoid delays and complications.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Court filing and documentation</li>
                  <li>Compliance with probate procedures</li>
                  <li>Timeline management</li>
                  <li>Court reporting and updates</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Property Valuation</h3>
                <p className="text-neutral-700 mb-4">
                  Accurate property valuation is crucial in probate transactions, as it affects estate taxes, distribution to heirs, and court approval. We provide professional valuations that meet court requirements.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Court-required appraisals</li>
                  <li>Estate tax valuation support</li>
                  <li>Market analysis for probate sales</li>
                  <li>Fair market value determination</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Family Support</h3>
                <p className="text-neutral-700 mb-4">
                  We understand that probate transactions can be emotionally challenging. We provide compassionate support, clear communication, and professional guidance to help families navigate this difficult time.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Compassionate family support</li>
                  <li>Clear communication with all parties</li>
                  <li>Timeline and process explanation</li>
                  <li>Emotional support during difficult times</li>
                </ul>
              </Card>

              <Card variant="elevated" className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Estate Coordination</h3>
                <p className="text-neutral-700 mb-4">
                  We coordinate with attorneys, executors, heirs, and other parties to ensure the probate sale proceeds smoothly. Our deep knowledge helps manage the complexities of multi-party transactions.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2">
                  <li>Attorney coordination</li>
                  <li>Executor and administrator support</li>
                  <li>Heir communication</li>
                  <li>Creditor coordination</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Probate Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Our <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Services</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We provide comprehensive probate real estate services, from initial consultation through closing and beyond. Our services are designed to handle the unique requirements of probate transactions while providing the support and guidance families need during this difficult time.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Initial Consultation and Assessment</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We begin with a comprehensive consultation to understand your situation, assess the property, and explain the probate process. We'll review the estate documents, understand the court requirements, and develop a strategy for selling the property. This initial assessment helps set expectations and ensures everyone understands the process and timeline.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Property Valuation and Appraisal</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Accurate property valuation is essential in probate transactions. We provide professional valuations that meet court requirements and help determine fair market value. These valuations are used for estate tax purposes, distribution to heirs, and establishing the listing price. We work with certified appraisers when required and ensure all valuations meet legal standards.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Court-Ordered Sales</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When property must be sold as part of probate proceedings, we handle all aspects of the court-ordered sale process. This includes preparing the necessary documentation, coordinating with the court, following required marketing procedures, and ensuring compliance with all legal requirements. Our deep knowledge of court-ordered sales helps ensure the process proceeds smoothly and efficiently.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Property Management During Probate</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Properties in probate often require ongoing maintenance and management while the estate is being settled. We coordinate property care, security, utilities, and insurance to ensure the property is maintained and protected. This management helps preserve property value and ensures the property is ready for sale when the time comes.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Marketing and Sale</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Once court approval is obtained, we market the property professionally, following any court-required procedures. We use comprehensive marketing strategies to reach qualified buyers, coordinate showings, and handle offers. Our goal is to maximize the sale price while meeting court requirements and timelines.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Closing and Distribution</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We coordinate the closing process, ensuring all court requirements are met and proceeds are properly distributed. We work with title companies, lenders, and attorneys to ensure a smooth closing. After closing, we help ensure proceeds are distributed according to court orders and estate plans.
              </p>
            </div>
          </div>
        </section>

        {/* The Probate Sale Process */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Understanding the <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Probate Sale Process</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The probate sale process follows specific steps that differ from traditional real estate sales. Understanding this process helps families prepare and know what to expect. While each probate situation is unique, most follow a similar pattern.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 1: Court Petition and Appointment</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                The process begins when someone files a petition with the probate court. The court reviews the petition, appoints an executor or administrator, and grants authority to manage the estate. This person becomes responsible for managing estate assets, including real estate.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 2: Property Assessment and Valuation</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Once authority is granted, the property must be assessed and valued. This valuation is used for estate tax purposes, distribution planning, and establishing the sale price. We provide professional valuations that meet court requirements and help determine fair market value.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 3: Court Approval to Sell</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Before a property can be listed for sale, the executor or administrator must obtain court approval. This typically involves filing a petition with the court, providing property information and valuation, and explaining why the sale is necessary. The court reviews the petition and grants approval if the sale is in the estate's best interest.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 4: Property Listing and Marketing</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Once court approval is obtained, the property can be listed and marketed. We follow any court-required marketing procedures while using comprehensive strategies to reach qualified buyers. Marketing may need to meet specific requirements, such as minimum advertising periods or specific disclosure statements.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 5: Offer and Court Confirmation</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When an offer is received, it must typically be presented to the court for confirmation. The court reviews the offer, ensures it meets legal requirements, and confirms the sale. This process may involve a court hearing where other interested parties can object or submit competing offers.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Step 6: Closing and Distribution</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Once the court confirms the sale, closing can proceed. We coordinate the closing process, ensuring all court requirements are met. After closing, proceeds are distributed according to court orders, paying creditors and distributing to heirs as specified.
              </p>
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
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${siteConfig.business.probateEmail}`}
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">{siteConfig.business.probateEmail}</span>
              </a>
              <a
                href={`tel:${siteConfig.business.phone.replace(/-/g, '')}`}
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{siteConfig.business.phoneFormatted}</span>
              </a>
            </div>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks
              title="Related Resources"
              links={[
                {
                  href: '/services',
                  text: 'Probate Real Estate Services',
                  description: 'Comprehensive probate services including property valuation, court-ordered sales, and estate management',
                },
                {
                  href: '/sellers/valuation',
                  text: 'Probate Property Valuation',
                  description: 'Professional property valuations that meet court requirements for probate proceedings',
                },
                {
                  href: '/about',
                  text: 'About Our Probate Specialists',
                  description: 'Learn about our team\'s expertise and commitment to probate real estate',
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
      </main>
    </>
  );
}
