/**
 * Site configuration - Update with your actual business information
 * This data should match your Google Business Profile exactly
 */

export const siteConfig = {
  // Site Information
  name: 'Just Call Gene',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com',
  description: 'Probate Real Estate Specialist in Orange County, CA - Certified Probate Real Estate Specialists (Probate Real Estate Specialists) Helping Families Navigate Inherited Property Sales',
  
  // Business Information (NAP - Name, Address, Phone)
  // IMPORTANT: These must match your Google Business Profile exactly
  business: {
    name: 'Just Call Gene',
    agentName: 'Gene',
    agents: [
      {
        name: 'Gene Boyle',
        nickname: 'Gene',
        role: 'Real Estate Salesperson',
        licenseNumber: '02282581',
        licenseExpiration: '04/15/2029',
        bio: 'As a Highly-trained, Professional, and Skilled Realtor, you can be confident with me helping you move into the next season of life with convenience while maximizing your sale proceeds. I\'ve supported hundreds of people & families with real property including Single Family Homes, High-Rise Units, Multi-Family Properties, Condos, and Land in Newport Beach, Irvine, and Corona Del Mar since 2004.',
        extendedBio: 'With a unique combination of finance, law, and analytical expertise, I bring a comprehensive approach to real estate. As a former CFO who led an AMEX-listed company through IPO and SEC compliance, I understand the financial complexities of real estate transactions. My JD/MBA background provides deep insight into contracts, negotiations, and strategic planning. Combined with deep knowledge of Orange County\'s premier coastal communities, I offer clients unparalleled expertise in both residential and commercial transactions.',
        credentials: [
          'Real Estate Salesperson License #02282581',
          'Probate Real Estate Specialist (Probate Real Estate Specialists)',
          'Probate Expert (Probate Expert)',
          'Registered U.S. Patent Agent (USPTO #55,018)',
          'Former CFO - AMEX-Listed Company (IPO Experience)',
          'JD/MBA in Entrepreneurship',
          'Navy Veteran - Surface Warfare Officer',
        ],
      },
      {
        name: 'Kelly Lynn Boyle',
        nickname: 'Kelly',
        role: 'Real Estate Broker',
        licenseNumber: '02012693',
        licenseExpiration: '11/08/2029',
        brokerLicenseIssued: '11/09/2017',
        mailingAddress: {
          streetAddress: '1664 MARGUERITE AVE',
          addressLocality: 'Corona Del Mar',
          addressRegion: 'CA',
          postalCode: '92625',
        },
        bio: 'As a licensed Real Estate BROKER, I bring extensive experience and expertise to every probate transaction. Licensed since 2017, I ensure that all clients receive the highest level of professional service and guidance throughout their probate property sale journey. I oversee our team and maintain the highest standards of professionalism and compliance.',
        extendedBio: 'With over 7 years as a licensed broker and a commitment to excellence, I provide comprehensive probate real estate services throughout Orange County. My role as broker ensures that every probate transaction is handled with the utmost care, attention to detail, and adherence to all regulatory and court requirements.',
        credentials: [
          'Real Estate Broker License #02012693 (Licensed since 2017)',
          'License Expiration: 11/08/2029',
          'Probate Real Estate Specialist (Probate Real Estate Specialists)',
          'Corporate & Military Relocation Specialist',
        ],
      },
    ],
    // Main Office Address (Broker Office)
    address: {
      streetAddress: '1 TECHNOLOGY DRIVE Suite I829G',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      postalCode: '92618',
      addressCountry: 'US',
    },
    // Broker Mailing Address
    brokerMailingAddress: {
      streetAddress: '1664 MARGUERITE AVE',
      addressLocality: 'Corona Del Mar',
      addressRegion: 'CA',
      postalCode: '92625',
      addressCountry: 'US',
    },
    phone: '949-776-3527',
    phoneFormatted: '(949) 776-3527',
    email: 'info@justcallgene.com',
    probateEmail: 'Probate@JustCallGene.com',
    licenseNumber: '02012693',
    // Google Business Profile URL
    googleBusinessProfile: '',
    
    // Business Hours (24-hour format)
    openingHours: [
      'Mo-Fr 09:00-17:00', // Monday-Friday 9am-5pm
      'Sa 10:00-14:00',     // Saturday 10am-2pm
    ],
    
    // Business Type
    type: 'RealEstateAgent',
    
    // Services offered (100% Probate Focus)
    services: [
      'Probate Real Estate Sales',
      'Probate Property Valuation',
      'Court-Ordered Sales',
      'Probate Property Management',
      'Estate Property Sales',
      'Inherited Property Sales',
      'Probate Transaction Support',
      'Probate Court Compliance',
    ],
    
    // Bio information (for backward compatibility - uses Eugene's bio)
    bio: 'As a Highly-trained, Professional, and Skilled Realtor, you can be confident with us helping you move into the next season of life with convenience while maximizing your sale proceeds. We\'ve supported hundreds of people & families with real property including Single Family Homes, High-Rise Units, Multi-Family Properties, Condos, and Land in Newport Beach, Irvine, and Corona Del Mar since 2004.',
    
    // Extended bio with professional background
    extendedBio: 'With a unique combination of finance, law, and analytical expertise, our team brings a comprehensive approach to real estate. Combined with deep knowledge of Orange County\'s premier coastal communities and probate court procedures, we offer clients unparalleled expertise in both residential and commercial transactions.',
    
    // Combined credentials from both agents
    credentials: [
      'Real Estate Broker License #02012693 (Kelly Lynn Boyle - Licensed since 2017)',
      'Real Estate Salesperson License #02282581 (Gene Boyle)',
      'Probate Real Estate Specialist (Probate Real Estate Specialists)',
      'Probate Expert (Probate Expert)',
      'Registered U.S. Patent Agent (USPTO #55,018)',
      'Former CFO - AMEX-Listed Company (IPO Experience)',
      'JD/MBA in Entrepreneurship',
      'Navy Veteran - Surface Warfare Officer',
    ],
    
    // Professional highlights
    professionalHighlights: [
      {
        title: 'Finance & Investment Expertise',
        description: 'Former CFO with IPO and SEC compliance experience. Investment strategist specializing in portfolio optimization and market analysis.',
      },
      {
        title: 'Legal & Contract Expertise',
        description: 'JD/MBA background provides deep understanding of contracts, negotiations, and complex real estate transactions.',
      },
      {
        title: 'Analytical Research Background',
        description: 'PhD-level analytical skills applied to market research, property valuation, and investment strategy.',
      },
      {
        title: 'Orange County Coastal Market Specialist',
        description: 'Deep expertise and comprehensive knowledge of Newport Beach, Irvine, and Corona Del Mar probate real estate markets, specializing exclusively in probate property sales and court-ordered transactions.',
      },
    ],
  },
  
  // Social Media (optional)
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
};

