import { siteConfig } from '@/lib/config';

interface PersonSchemaProps {
  personName?: string; // Defaults to Gene Boyle
}

export function PersonSchema({ personName }: PersonSchemaProps) {
  const { business } = siteConfig;
  const primaryAgent = business.agents?.[0]; // Gene Boyle
  
  if (!primaryAgent) return null;

  // Use provided name or default to Gene Boyle
  const agent = personName 
    ? business.agents.find(a => a.name === personName) || primaryAgent
    : primaryAgent;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}#person-${agent.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: agent.name,
    jobTitle: agent.role,
    image: `${siteConfig.url}/images/agents/gene-boyle.jpg`,
    url: siteConfig.url,
    email: business.email,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: business.name,
      url: siteConfig.url,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'California Real Estate License',
        credentialCategory: `#${agent.licenseNumber}`,
        identifier: {
          '@type': 'PropertyValue',
          name: 'Real Estate License Number',
          value: agent.licenseNumber,
        },
      },
      ...(agent.credentials || []).filter((cred: string) => 
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
    description: agent.bio || business.bio,
    sameAs: [
      siteConfig.social?.facebook,
      siteConfig.social?.linkedin,
      siteConfig.social?.instagram,
    ].filter(Boolean),
  };

  // Remove undefined fields
  const cleanSchema = (schema: any) => {
    if (!schema) return null;
    const cleaned = { ...schema };
    Object.keys(cleaned).forEach((key) => {
      if (cleaned[key] === undefined || (Array.isArray(cleaned[key]) && cleaned[key].length === 0)) {
        delete cleaned[key];
      }
    });
    return cleaned;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(personSchema)) }}
    />
  );
}
