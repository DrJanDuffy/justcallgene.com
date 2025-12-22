export default function MapSearchPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Map Search
          </h1>
          <p className="text-lg text-neutral-600">
            Explore properties on an interactive map
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="relative h-96 bg-neutral-200 rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">Map Search Coming Soon</p>
                <p className="text-sm">Interactive map functionality will be available soon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-neutral-600 mb-4">
              Map search allows you to visually explore available properties in your desired area.
            </p>
            <p className="text-sm text-neutral-500">
              This is a placeholder page. Real map integration will be added in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


