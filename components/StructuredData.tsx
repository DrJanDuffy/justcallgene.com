import { siteConfig } from '@/lib/config';

export function LocalBusinessSchema() {
  const { business } = siteConfig;

  // Only render if business data is configured
  if (!business.address.streetAddress || !business.phone) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': business.type || 'LocalBusiness',
    name: business.name,
    image: `${siteConfig.url}/og-image.jpg`, // Add your OG image
    '@id': `${siteConfig.url}#organization`,
    url: siteConfig.url,
    telephone: business.phone,
    email: business.email || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    openingHoursSpecification: business.openingHours
      .filter((hours) => hours.includes('-'))
      .map((hours) => {
        const [dayRange, timeRange] = hours.split(' ');
        const [opens, closes] = timeRange?.split('-') || [];
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: dayRange,
          opens: opens || '09:00',
          closes: closes || '17:00',
        };
      }),
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: business.address.addressLocality,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: business.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: index + 1,
      })),
    },
  };

  // Remove undefined fields
  Object.keys(schema).forEach((key) => {
    if (schema[key as keyof typeof schema] === undefined) {
      delete schema[key as keyof typeof schema];
    }
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

