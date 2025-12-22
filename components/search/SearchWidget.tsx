'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function SearchWidget() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'address' | 'listingId' | 'map'>('address');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === 'map') {
      router.push('/search/map');
    } else if (searchType === 'listingId') {
      router.push(`/search?listingId=${searchQuery}`);
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft-lg p-6 border border-neutral-100">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-2 rounded-lg mr-3">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-900">SEARCH YOUR DREAM HOME</h3>
      </div>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="search-type" className="block text-sm font-semibold text-neutral-700 mb-2">
            Search Type
          </label>
          <select
            id="search-type"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as 'address' | 'listingId' | 'map')}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
          >
            <option value="address">Address Search</option>
            <option value="listingId">Listing ID</option>
            <option value="map">Map Search</option>
          </select>
        </div>

        {searchType !== 'map' && (
          <div>
            <label htmlFor="search-query" className="block text-sm font-semibold text-neutral-700 mb-2">
              {searchType === 'listingId' ? 'Listing ID' : 'Address or City'}
            </label>
            <input
              type="text"
              id="search-query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchType === 'listingId' ? 'Enter Listing ID' : 'Enter address or city'}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button type="submit" variant="primary" className="flex-1">
            {searchType === 'map' ? 'Open Map Search' : 'Search'}
          </Button>
          <Button href="/search/advanced" variant="outline" className="flex-1">
            Advanced Search
          </Button>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="text-xs font-semibold text-neutral-500 text-center uppercase tracking-wide">
          QUICK SEARCH
        </p>
      </div>
    </div>
  );
}

