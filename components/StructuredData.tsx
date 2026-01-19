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

  // AggregateRating from testimonials (define before use)
  const aggregateRating = testimonials.length > 0 ? {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  } : null;

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
    ...(aggregateRating && {
      aggregateRating: aggregateRating,
    }),
    // Enhanced RealEstateAgent fields
    ...(primaryAgent && {
      jobTitle: primaryAgent.role,
      description: primaryAgent.bio || business.bio,
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'California Real Estate License',
          credentialCategory: `#${primaryAgent.licenseNumber}`,
        },
        ...(primaryAgent.credentials || []).filter((cred: string) => 
          cred.includes('Probate') || cred.includes('Specialist')
        ).map((cred: string) => ({
          '@type': 'EducationalOccupationalCredential',
          name: cred,
          credentialCategory: 'Professional Certification',
        })),
      ],
      knowsAbout: [
        'Probate Real Estate Sales',
        'Probate Property Valuation',
        'Court-Ordered Sales',
        'Orange County Probate Real Estate',
        'Newport Beach Probate Properties',
        'Irvine Probate Sales',
        'Corona Del Mar Probate Real Estate',
        'Laguna Beach Probate Properties',
        'Costa Mesa Probate Sales',
        'Huntington Beach Probate Real Estate',
        'Inherited Property Sales',
        'Estate Property Management',
        'Probate Court Compliance',
      ],
    }),
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
        '@type': 'City',
        name: 'Laguna Beach',
      },
      {
        '@type': 'City',
        name: 'Costa Mesa',
      },
      {
        '@type': 'City',
        name: 'Huntington Beach',
      },
      {
        '@type': 'City',
        name: 'Tustin',
      },
      {
        '@type': 'City',
        name: 'Fountain Valley',
      },
      {
        '@type': 'City',
        name: 'Orange',
      },
      {
        '@type': 'City',
        name: 'Santa Ana',
      },
      {
        '@type': 'City',
        name: 'Anaheim',
      },
      {
        '@type': 'City',
        name: 'Fullerton',
      },
      {
        '@type': 'City',
        name: 'Mission Viejo',
      },
      {
        '@type': 'City',
        name: 'San Clemente',
      },
      {
        '@type': 'City',
        name: 'Dana Point',
      },
      {
        '@type': 'City',
        name: 'Laguna Niguel',
      },
      {
        '@type': 'City',
        name: 'Aliso Viejo',
      },
      {
        '@type': 'City',
        name: 'Lake Forest',
      },
      {
        '@type': 'City',
        name: 'Rancho Santa Margarita',
      },
      {
        '@type': 'City',
        name: 'Coto de Caza',
      },
      {
        '@type': 'City',
        name: 'Ladera Ranch',
      },
      {
        '@type': 'City',
        name: 'San Juan Capistrano',
      },
      {
        '@type': 'City',
        name: 'Silverado',
      },
      {
        '@type': 'City',
        name: 'Trabuco Canyon',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '33.6846',
          longitude: '-117.8265',
        },
        geoRadius: {
          '@type': 'Distance',
          name: 'Orange County, California',
        },
      },
      {
        '@type': 'County',
        name: 'Orange County',
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
        image: `${siteConfig.url}/images/agents/gene-boyle.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry,
        },
        telephone: business.phone,
        email: business.email || undefined,
        priceRange: '$$',
        identifier: {
          '@type': 'PropertyValue',
          name: 'Real Estate License Number',
          value: primaryAgent.licenseNumber,
        },
        memberOf: {
          '@type': 'Organization',
          name: business.name,
          '@id': `${siteConfig.url}#organization`,
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
      addressCountry: business.brokerMailingAddress?.addressCountry || business.address.addressCountry,
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

  // FAQ Schema (only on pages where it makes sense, not on FAQ page itself)
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}#faq`,
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${siteConfig.url}#question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': `${siteConfig.url}#answer-${index + 1}`,
        text: faq.answer,
      },
    })),
    about: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}#organization`,
      name: business.name,
    },
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
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': `${siteConfig.url}#organization`,
      name: business.name,
      url: siteConfig.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.streetAddress,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        postalCode: business.address.postalCode,
        addressCountry: business.address.addressCountry,
      },
      telephone: business.phone,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      '@id': `${siteConfig.url}#organization`,
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
      {/* AggregateRating is already included in the LocalBusiness schema above - no need for separate script */}
    </>
  );
}

