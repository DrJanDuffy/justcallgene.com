'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function GuidesSection() {
  const [probateProcessFormData, setProbateProcessFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [valuationFormData, setValuationFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleProbateProcessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with form handler
    console.log('Probate process guide request:', probateProcessFormData);
    alert('Thank you! Your Probate Process Guide will be sent shortly.');
    setProbateProcessFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  const handleValuationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with form handler
    console.log('Probate valuation guide request:', valuationFormData);
    alert('Thank you! Your Probate Property Valuation Guide will be sent shortly.');
    setValuationFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Free Resources
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            GET MY{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              FREE PROBATE GUIDES
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Probate Process Guide & Probate Property Valuation Guide
          </p>
          <p className="text-base text-neutral-500 mt-2">
            Simply fill out your information below, and we'll send you comprehensive guides covering the probate process and how to maximize your probate property value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Probate Process Guide Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-depth p-8 border border-neutral-100/50 hover:shadow-glow transition-modern hover-lift">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Probate Process Guide
              </h3>
            </div>
            <form onSubmit={handleProbateProcessSubmit} className="space-y-4">
              <div>
                <label htmlFor="probate-first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="probate-first-name"
                  required
                  value={probateProcessFormData.firstName}
                  onChange={(e) => setProbateProcessFormData({ ...probateProcessFormData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="probate-last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="probate-last-name"
                  value={probateProcessFormData.lastName}
                  onChange={(e) => setProbateProcessFormData({ ...probateProcessFormData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="probate-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="probate-email"
                  required
                  value={probateProcessFormData.email}
                  onChange={(e) => setProbateProcessFormData({ ...probateProcessFormData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="probate-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="probate-phone"
                  required
                  value={probateProcessFormData.phone}
                  onChange={(e) => setProbateProcessFormData({ ...probateProcessFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Get Probate Process Guide
              </Button>
            </form>
          </div>

          {/* Probate Property Valuation Guide Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-depth p-8 border border-neutral-100/50 hover:shadow-glow transition-modern hover-lift">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Probate Valuation Guide
              </h3>
            </div>
            <form onSubmit={handleValuationSubmit} className="space-y-4">
              <div>
                <label htmlFor="valuation-first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="valuation-first-name"
                  required
                  value={valuationFormData.firstName}
                  onChange={(e) => setValuationFormData({ ...valuationFormData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="valuation-last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="valuation-last-name"
                  value={valuationFormData.lastName}
                  onChange={(e) => setValuationFormData({ ...valuationFormData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="valuation-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="valuation-email"
                  required
                  value={valuationFormData.email}
                  onChange={(e) => setValuationFormData({ ...valuationFormData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="valuation-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="valuation-phone"
                  required
                  value={valuationFormData.phone}
                  onChange={(e) => setValuationFormData({ ...valuationFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Get Valuation Guide
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

