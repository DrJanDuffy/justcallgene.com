'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { siteConfig } from '@/lib/config';

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zip: '',
    propertyType: '',
    beds: '',
    baths: '',
    sqft: '',
    email: '',
    phone: '',
    probateCase: '',
    executorName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly with your probate property valuation.');
    setFormData({
      address: '',
      city: '',
      zip: '',
      propertyType: '',
      beds: '',
      baths: '',
      sqft: '',
      email: '',
      phone: '',
      probateCase: '',
      executorName: '',
    });
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Probate Property Valuation', url: '/sellers/valuation' },
      ]} />
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Probate Property Valuation
            </h1>
            <p className="text-lg text-neutral-600 mb-4">
              Get an accurate valuation for your probate property in Orange County
            </p>
            <p className="text-base text-neutral-700 mb-8">
              As certified Probate Real Estate Specialists (CPRES), we provide professional property valuations that meet court requirements for probate proceedings. Our valuations help determine fair market value for estate tax purposes, distribution to heirs, and establishing listing prices.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <h2 className="text-xl font-bold text-neutral-900 mb-2">Probate Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Probate Case Number (if available)
                    </label>
                    <input
                      type="text"
                      value={formData.probateCase}
                      onChange={(e) => setFormData({ ...formData, probateCase: e.target.value })}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Executor/Administrator Name
                    </label>
                    <input
                      type="text"
                      value={formData.executorName}
                      onChange={(e) => setFormData({ ...formData, executorName: e.target.value })}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="single-family">Single Family</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.baths}
                    onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Square Feet
                </label>
                <input
                  type="number"
                  value={formData.sqft}
                  onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-sm text-neutral-600">
                  <strong>Note:</strong> This valuation is for informational purposes. For court-required appraisals, we will coordinate with certified appraisers to ensure compliance with probate court requirements.
                </p>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Get Probate Property Valuation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
