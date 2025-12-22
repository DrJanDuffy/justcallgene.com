import { SearchWidget } from '@/components/search/SearchWidget';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Property Search
          </h1>
          <p className="text-lg text-neutral-600">
            Find your dream home in Las Vegas and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Widget */}
          <div className="lg:col-span-1">
            <SearchWidget />
          </div>

          {/* Results Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Search Functionality Coming Soon
              </h2>
              <p className="text-neutral-600 mb-6">
                Our property search feature is currently under development. 
                Please contact us directly for assistance finding your perfect home.
              </p>
              <p className="text-sm text-neutral-500">
                This is a placeholder page. Real MLS/IDX integration will be added in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

