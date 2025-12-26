'use client';

import { siteConfig } from '@/lib/config';

export function ServicesPricingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Our Probate Services
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Complete end-to-end probate solutions for Orange County families
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Service 1 */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Estate Property Valuation</h3>
            <p className="text-slate-700 mb-6">
              Professional market analysis and court-compliant appraisal. We ensure fair market value 
              for estate tax, distribution, and court approval purposes.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Court-approved valuations</li>
              <li>✓ Estate tax support</li>
              <li>✓ Market analysis specific to your property</li>
              <li>✓ Comparable sales data</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Court Navigation & Compliance</h3>
            <p className="text-slate-700 mb-6">
              Complete handling of Orange County court procedures, filings, and judge-specific requirements. 
              No delays, no surprises.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Orange County Superior Court expertise</li>
              <li>✓ Document preparation & filing</li>
              <li>✓ Judge coordination</li>
              <li>✓ Timeline management</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Marketing & Sales</h3>
            <p className="text-slate-700 mb-6">
              Specialized marketing to qualified luxury estate buyers. Get 12% above average market value 
              with Gene's buyer network.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Luxury estate marketing</li>
              <li>✓ Qualified buyer network</li>
              <li>✓ Professional photography & staging</li>
              <li>✓ Negotiation expertise</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-200 shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Family Support & Communication</h3>
            <p className="text-slate-700 mb-6">
              Clear, compassionate guidance through every step. Regular updates, prompt responses, 
              and emotional support when needed.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Regular family updates</li>
              <li>✓ Timeline explanations</li>
              <li>✓ Attorney coordination</li>
              <li>✓ 24/7 availability</li>
            </ul>
          </div>

        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12">
          <h3 className="text-2xl font-bold mb-6">Simple, Transparent Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">We handle probate sales on standard real estate commission:</p>
              <div className="text-3xl font-bold mb-2">5-6%</div>
              <p className="text-blue-100 mb-4">Standard commission (paid after close from proceeds)</p>
              <p className="text-sm text-blue-200">No upfront fees. No hidden costs. You pay when we deliver.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <p className="font-semibold mb-3">What's Included:</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>✓ Full market valuation</li>
                <li>✓ Court paperwork & filings</li>
                <li>✓ Professional marketing</li>
                <li>✓ Buyer negotiations</li>
                <li>✓ Closing coordination</li>
                <li>✓ Family support throughout</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
