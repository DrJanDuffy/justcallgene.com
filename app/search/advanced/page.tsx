'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function AdvancedSearchPage() {
  const [formData, setFormData] = useState({
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
    minSqft: '',
    maxSqft: '',
    propertyType: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Advanced search functionality coming soon!');
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Advanced Search
          </h1>
          <p className="text-lg text-neutral-600">
            Use detailed criteria to find your perfect property
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  value={formData.minPrice}
                  onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Max Price
                </label>
                <input
                  type="number"
                  value={formData.maxPrice}
                  onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={formData.beds}
                  onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Bathrooms
                </label>
                <select
                  value={formData.baths}
                  onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Min Square Feet
                </label>
                <input
                  type="number"
                  value={formData.minSqft}
                  onChange={(e) => setFormData({ ...formData, minSqft: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Max Square Feet
                </label>
                <input
                  type="number"
                  value={formData.maxSqft}
                  onChange={(e) => setFormData({ ...formData, maxSqft: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Property Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="single-family">Single Family</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Las Vegas, Henderson, etc."
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="primary" className="flex-1">
                Search Properties
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData({
                  minPrice: '',
                  maxPrice: '',
                  beds: '',
                  baths: '',
                  minSqft: '',
                  maxSqft: '',
                  propertyType: '',
                  city: '',
                })}
              >
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



