'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function GuidesSection() {
  const [buyerFormData, setBuyerFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [sellerFormData, setSellerFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleBuyerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with form handler
    console.log('Buyer guide request:', buyerFormData);
    alert('Thank you! Your Buyer\'s Guide will be sent shortly.');
    setBuyerFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  const handleSellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with form handler
    console.log('Seller guide request:', sellerFormData);
    alert('Thank you! Your Seller\'s Guide will be sent shortly.');
    setSellerFormData({ firstName: '', lastName: '', email: '', phone: '' });
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
              FREE GUIDES
            </span>{' '}
            BELOW
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Selling Secrets You Can't Afford To Miss & Your Guide to Purchasing A Home
          </p>
          <p className="text-base text-neutral-500 mt-2">
            Simply fill out your information below, and we'll send you a copy covering both how to get more money for your home and how to get more home for your money!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buyer's Guide Form */}
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft-lg p-8 border border-neutral-100 hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Get The Buyer's Guide
              </h3>
            </div>
            <form onSubmit={handleBuyerSubmit} className="space-y-4">
              <div>
                <label htmlFor="buyer-first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="buyer-first-name"
                  required
                  value={buyerFormData.firstName}
                  onChange={(e) => setBuyerFormData({ ...buyerFormData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="buyer-last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="buyer-last-name"
                  value={buyerFormData.lastName}
                  onChange={(e) => setBuyerFormData({ ...buyerFormData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="buyer-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="buyer-email"
                  required
                  value={buyerFormData.email}
                  onChange={(e) => setBuyerFormData({ ...buyerFormData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="buyer-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="buyer-phone"
                  required
                  value={buyerFormData.phone}
                  onChange={(e) => setBuyerFormData({ ...buyerFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Get The Buyer's Guide
              </Button>
            </form>
          </div>

          {/* Seller's Guide Form */}
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft-lg p-8 border border-neutral-100 hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Get The Seller's Guide
              </h3>
            </div>
            <form onSubmit={handleSellerSubmit} className="space-y-4">
              <div>
                <label htmlFor="seller-first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="seller-first-name"
                  required
                  value={sellerFormData.firstName}
                  onChange={(e) => setSellerFormData({ ...sellerFormData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="seller-last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="seller-last-name"
                  value={sellerFormData.lastName}
                  onChange={(e) => setSellerFormData({ ...sellerFormData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="seller-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="seller-email"
                  required
                  value={sellerFormData.email}
                  onChange={(e) => setSellerFormData({ ...sellerFormData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="seller-phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="seller-phone"
                  required
                  value={sellerFormData.phone}
                  onChange={(e) => setSellerFormData({ ...sellerFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Get The Seller's Guide
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

