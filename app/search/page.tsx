import { SearchWidget } from '@/components/search/SearchWidget';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Property Search
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Find Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-lg text-neutral-600">
            Find your dream home in Orange County and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Widget */}
          <div className="lg:col-span-1">
            <SearchWidget />
          </div>

          {/* Results Area */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft-lg p-10 text-center border border-neutral-100">
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Search Functionality Coming Soon
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
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
    </div>
  );
}

