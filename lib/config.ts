/**
 * Site configuration - Update with your actual business information
 * This data should match your Google Business Profile exactly
 */

export const siteConfig = {
  // Site Information
  name: 'Just Call Gene',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://justcallgene.com',
  description: 'Real Estate BROKER in Las Vegas, NV - Helping You Move Forward—The Professional Way',
  
  // Business Information (NAP - Name, Address, Phone)
  // IMPORTANT: These must match your Google Business Profile exactly
  business: {
    name: 'Just Call Gene',
    agentName: 'Gene',
    address: {
      streetAddress: '2850 W Horizon Ridge Parkway Suite #200',
      addressLocality: 'Henderson',
      addressRegion: 'NV',
      postalCode: '89052',
      addressCountry: 'US',
    },
    phone: '702-239-8400',
    phoneFormatted: '(702) 239-8400',
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
    bio: 'As a Highly-trained, Professional, and Skilled Realtor, you can be confident with me helping you move into the next season of life with convenience while maximizing your sale proceeds. I\'ve supported hundreds of people & families with real property including Single Family Homes, High-Rise Units, Multi-Family Properties, Condos, and Land in the Las Vegas valley since 2004.',
    
    // Credentials
    credentials: [
      'Certified Probate Real Estate Specialist (CPRES)',
      'Certified Probate Expert (CPE)',
      'UNLV Lied Institute for Real Estate Studies Commercial Certification',
      'Corporate & Military Relocation Specialist',
      'Certified Luxury Home Marketing Specialist',
    ],
  },
  
  // Social Media (optional)
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
};

