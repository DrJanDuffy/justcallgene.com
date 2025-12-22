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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">SEARCH YOUR DREAM HOME</h3>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="search-type" className="block text-sm font-medium text-neutral-700 mb-2">
            Search Type
          </label>
          <select
            id="search-type"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as 'address' | 'listingId' | 'map')}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="address">Address Search</option>
            <option value="listingId">Listing ID</option>
            <option value="map">Map Search</option>
          </select>
        </div>

        {searchType !== 'map' && (
          <div>
            <label htmlFor="search-query" className="block text-sm font-medium text-neutral-700 mb-2">
              {searchType === 'listingId' ? 'Listing ID' : 'Address or City'}
            </label>
            <input
              type="text"
              id="search-query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchType === 'listingId' ? 'Enter Listing ID' : 'Enter address or city'}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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

      <div className="mt-4 pt-4 border-t border-neutral-200">
        <p className="text-sm text-neutral-600 text-center">
          QUICK SEARCH
        </p>
      </div>
    </div>
  );
}

