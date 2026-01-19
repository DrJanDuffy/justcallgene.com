import { siteConfig } from '@/lib/config';

interface GoogleMapProps {
  title?: string;
  height?: string;
  className?: string;
}

export function GoogleMap({ 
  title = 'Just Call Gene Office Location',
  height = 'h-64 md:h-80 lg:h-96',
  className = ''
}: GoogleMapProps) {
  const fullAddress = `${siteConfig.business.address.streetAddress}, ${siteConfig.business.address.addressLocality}, ${siteConfig.business.address.addressRegion} ${siteConfig.business.address.postalCode}`;
  const mapTitle = `${title} - ${fullAddress}`;

  return (
    <div className={`relative ${height} rounded-xl overflow-hidden border border-neutral-200 shadow-soft ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={mapTitle}
        className="w-full h-full"
      />
      {/* Fallback link to open in Google Maps */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-primary hover:bg-neutral-50 transition-colors z-10"
        aria-label="Open location in Google Maps"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
