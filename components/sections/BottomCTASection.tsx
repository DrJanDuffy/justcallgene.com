'use client';

import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/Button';

export function BottomCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Your Orange County Home Valued?
        </h2>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Gene will provide a personalized valuation and strategy 
          within 24 hours. No pressure, no fees.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Call Gene: {siteConfig.business.phoneFormatted}
          </a>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-blue-400 hover:bg-blue-300 text-white font-bold text-lg rounded-lg transition-all duration-200 border-white"
          >
            Schedule 15-Minute Consultation
          </Button>
        </div>

        <p className="text-blue-100 text-sm">
          ⏱️ Average response time: <span className="font-bold">2 hours during business hours</span>
        </p>

      </div>
    </section>
  );
}
