'use client';

import { siteConfig } from '@/lib/config';

const PROBATE_STEPS = {
  1: {
    title: 'Initial Consultation & Property Assessment',
    description: 'Gene meets with executors and family members to understand the estate, property condition, and probate court requirements. He provides a preliminary market valuation and outlines the probate sale process.',
    ocSpecific: 'Orange County Superior Court requires specific documentation. Gene knows exactly what each judge needs.',
    timeline: '1-2 weeks',
  },
  2: {
    title: 'Court Filing & Approval',
    description: 'Gene coordinates with probate attorneys to prepare and file all required court documents. He ensures compliance with Orange County court procedures and obtains necessary approvals.',
    ocSpecific: 'Gene has relationships with OC court clerks and knows filing requirements for each judge.',
    timeline: '2-4 months',
  },
  3: {
    title: 'Professional Valuation & Appraisal',
    description: 'Gene arranges court-compliant appraisals from certified appraisers. The valuation meets estate tax and distribution requirements while maximizing property value.',
    ocSpecific: 'OC luxury markets require specialized appraisers. Gene works with appraisers who understand coastal premium values.',
    timeline: '2-3 weeks',
  },
  4: {
    title: 'Strategic Marketing & Buyer Network',
    description: 'Gene leverages his network of qualified luxury buyers and implements targeted marketing. Properties are positioned to attract serious buyers who understand probate timelines.',
    ocSpecific: 'Gene\'s buyer network includes high-net-worth individuals specifically interested in Newport Beach, Corona Del Mar, and Irvine properties.',
    timeline: '4-6 weeks to offer',
  },
  5: {
    title: 'Court Approval & Closing',
    description: 'Gene coordinates final court approval, handles negotiations, and manages closing. He ensures all probate requirements are met and funds are distributed correctly.',
    ocSpecific: 'Gene navigates OC court final approval processes efficiently, avoiding common delays that cost families time and money.',
    timeline: '2-4 weeks after offer',
  },
};

export function ProbateProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-4">
          The Orange County Probate Process
        </h2>
        <p className="text-xl text-blue-100 text-center mb-16 max-w-2xl mx-auto">
          Here's exactly how Gene guides families through their Orange County probate estate sale
        </p>

        {/* 5 Steps */}
        <div className="space-y-8 mb-16">
          
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex gap-6 items-start">
              
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white font-bold text-2xl shadow-lg">
                  {step}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition">
                <h3 className="text-2xl font-bold mb-3">
                  {PROBATE_STEPS[step as keyof typeof PROBATE_STEPS].title}
                </h3>
                <p className="text-blue-100 mb-4">
                  {PROBATE_STEPS[step as keyof typeof PROBATE_STEPS].description}
                </p>
                <div className="text-sm text-blue-200">
                  <strong>Orange County Specific:</strong> {PROBATE_STEPS[step as keyof typeof PROBATE_STEPS].ocSpecific}
                </div>
                <div className="text-sm text-blue-300 mt-2">
                  ⏱️ Timeline: {PROBATE_STEPS[step as keyof typeof PROBATE_STEPS].timeline}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Overall Timeline */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Complete Orange County Probate Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">6-8</div>
              <div className="text-sm text-blue-100">Months Typical Timeline</div>
              <div className="text-xs text-blue-200 mt-2">With responsive family & court cooperation</div>
            </div>
            <div className="text-center border-l border-r border-white/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">4-6</div>
              <div className="text-sm text-blue-100">Weeks From Listing to Offer</div>
              <div className="text-xs text-blue-200 mt-2">Gene's average with qualified buyers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">2-4</div>
              <div className="text-sm text-blue-100">Weeks After Court Approval</div>
              <div className="text-xs text-blue-200 mt-2">To close and distribute funds</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
