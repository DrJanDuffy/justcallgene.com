import { Metadata } from 'next';
import { PageSchemas } from '@/components/schema/PageSchemas';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Mortgage Calculator | Probate Property Financing | Just Call Gene',
  description: 'Calculate your monthly mortgage payment for probate properties in Orange County. Free mortgage calculator tool.',
  alternates: {
    canonical: `${siteConfig.url}/buyers/mortgage-calculator`,
  },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <PageSchemas
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Mortgage Calculator', url: '/buyers/mortgage-calculator' },
        ]}
        includeFAQ={true}
        includeReviews={true}
      />
      <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Calculate your monthly mortgage payment
          </p>
          <div className="bg-neutral-50 rounded-lg p-8 text-center">
            <p className="text-neutral-600">
              Mortgage calculator functionality coming soon.
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              This tool will help you estimate your monthly payments based on loan amount, interest rate, and term.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}






