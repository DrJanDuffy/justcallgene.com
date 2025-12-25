import { siteConfig } from '@/lib/config';
import { testimonials, faqs } from '@/lib/data';

export function LocalBusinessSchema() {
  const { business } = siteConfig;

  // Only render if business data is configured
  if (!business.address.streetAddress || !business.phone) {
    return null;
  }

  const primaryAgent = business.agents?.[0];
  const broker = business.agents?.find(agent => agent.role === 'Real Estate Broker') || business.agents?.[1];

  // Main LocalBusiness/RealEstateAgent schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: business.name,
    image: `${siteConfig.url}/og-image.jpg`,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Newport Beach',
      },
      {
        '@type': 'City',
        name: 'Irvine',
      },
      {
        '@type': 'City',
        name: 'Corona Del Mar',
      },
      {
        '@type': 'State',
        name: 'California',
      },
    ],
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
    ...(primaryAgent && {
      employee: {
        '@type': 'RealEstateAgent',
        name: primaryAgent.name,
        jobTitle: primaryAgent.role,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Real Estate License Number',
          value: primaryAgent.licenseNumber,
        },
      },
    }),
    ...(broker && {
      founder: {
        '@type': 'RealEstateBroker',
        name: broker.name,
        jobTitle: broker.role,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Real Estate Broker License Number',
          value: broker.licenseNumber,
        },
      },
    }),
  };

  // RealEstateBroker schema (separate)
  const brokerSchema = broker ? {
    '@context': 'https://schema.org',
    '@type': 'RealEstateBroker',
    name: broker.name,
    '@id': `${siteConfig.url}#broker`,
    url: siteConfig.url,
    telephone: business.phone,
    email: business.email || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: broker.mailingAddress?.streetAddress || business.address.streetAddress,
      addressLocality: broker.mailingAddress?.addressLocality || business.address.addressLocality,
      addressRegion: broker.mailingAddress?.addressRegion || business.address.addressRegion,
      postalCode: broker.mailingAddress?.postalCode || business.address.postalCode,
      addressCountry: broker.mailingAddress?.addressCountry || business.address.addressCountry,
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'Real Estate Broker License Number',
      value: broker.licenseNumber,
    },
    memberOf: {
      '@type': 'Organization',
      name: business.name,
      '@id': `${siteConfig.url}#organization`,
    },
  } : null;

  // AggregateRating from testimonials
  const aggregateRating = testimonials.length > 0 ? {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  } : null;

  // FAQ Schema
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Review Schema from testimonials
  const reviewSchemas = testimonials.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: testimonial.text,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: business.name,
    },
  }));

  // Remove undefined fields from schemas
  const cleanSchema = (schema: any) => {
    if (!schema) return null;
    const cleaned = { ...schema };
    Object.keys(cleaned).forEach((key) => {
      if (cleaned[key] === undefined) {
        delete cleaned[key];
      }
    });
    return cleaned;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(localBusinessSchema)) }}
      />
      {brokerSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(brokerSchema)) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(faqSchema)) }}
        />
      )}
      {reviewSchemas.map((review, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(review)) }}
        />
      ))}
      {aggregateRating && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${siteConfig.url}#organization`,
              aggregateRating: cleanSchema(aggregateRating),
            })
          }}
        />
      )}
    </>
  );
}

