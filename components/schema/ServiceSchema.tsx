import { siteConfig } from '@/lib/config';

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  provider?: {
    name: string;
    url: string;
  };
}

export function ServiceSchema({
  name,
  description,
  serviceType,
  areaServed = ['Orange County', 'California'],
  provider,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: provider || {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      url: siteConfig.url,
      telephone: siteConfig.business.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.business.address.addressLocality,
        addressRegion: siteConfig.business.address.addressRegion,
        addressCountry: siteConfig.business.address.addressCountry,
      },
    },
    areaServed: areaServed.map((area) => ({
      '@type': area === 'California' || area === 'Orange County' ? 'State' : 'City',
      name: area,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

