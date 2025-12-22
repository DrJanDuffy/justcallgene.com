/**
 * Site configuration - Update with your actual business information
 * This data should match your Google Business Profile exactly
 */

export const siteConfig = {
  // Site Information
  name: 'Just Call Gene',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com',
  description: 'Real Estate BROKER in Newport Beach, Irvine & Corona Del Mar, CA - Helping You Move Forward—The Professional Way',
  
  // Business Information (NAP - Name, Address, Phone)
  // IMPORTANT: These must match your Google Business Profile exactly
  business: {
    name: 'Just Call Gene',
    agentName: 'Gene',
    address: {
      streetAddress: '4000 MacArthur Blvd Suite 3000',
      addressLocality: 'Newport Beach',
      addressRegion: 'CA',
      postalCode: '92660',
      addressCountry: 'US',
    },
    phone: '949-555-1234',
    phoneFormatted: '(949) 555-1234',
    email: 'info@justcallgene.com',
    licenseNumber: 'B.64289',
    // Google Business Profile URL
    googleBusinessProfile: '',
    
    // Business Hours (24-hour format)
    openingHours: [
      'Mo-Fr 09:00-17:00', // Monday-Friday 9am-5pm
      'Sa 10:00-14:00',     // Saturday 10am-2pm
    ],
    
    // Business Type
    type: 'RealEstateBroker',
    
    // Services offered
    services: [
      'Real Estate Sales',
      'Property Valuation',
      'Home Buying',
      'Home Selling',
      'Probate Real Estate',
      'Corporate Relocation',
      'Military Relocation',
      'Luxury Home Marketing',
    ],
    
    // Bio information
    bio: 'As a Highly-trained, Professional, and Skilled Realtor, you can be confident with me helping you move into the next season of life with convenience while maximizing your sale proceeds. I\'ve supported hundreds of people & families with real property including Single Family Homes, High-Rise Units, Multi-Family Properties, Condos, and Land in Newport Beach, Irvine, and Corona Del Mar since 2004.',
    
    // Extended bio with professional background
    extendedBio: 'With a unique combination of finance, law, and analytical expertise, I bring a comprehensive approach to real estate. As a former CFO who led an AMEX-listed company through IPO and SEC compliance, I understand the financial complexities of real estate transactions. My JD/MBA background provides deep insight into contracts, negotiations, and strategic planning. Combined with over 20 years of real estate experience in Orange County\'s premier coastal communities, I offer clients unparalleled expertise in both residential and commercial transactions.',
    
    // Credentials
    credentials: [
      'Real Estate Broker License #02282581',
      'Certified Probate Real Estate Specialist (CPRES)',
      'Certified Probate Expert (CPE)',
      'Commercial Real Estate Certification',
      'Corporate & Military Relocation Specialist',
      'Certified Luxury Home Marketing Specialist',
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
        description: 'Over 20 years of experience in Newport Beach, Irvine, and Corona Del Mar real estate, from luxury coastal homes to commercial properties and probate transactions.',
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

