/**
 * Static data for the website
 * Replace with actual content as needed
 */

export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: 'For Sale' | 'Sold' | 'Pending';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const featuredListings: Listing[] = [
  {
    id: '1',
    address: '123 Ocean View Drive',
    city: 'Newport Beach',
    state: 'CA',
    price: 2850000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: '/placeholder-listing.jpg',
    status: 'For Sale',
  },
  {
    id: '2',
    address: '456 Park Avenue',
    city: 'Irvine',
    state: 'CA',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: '/placeholder-listing.jpg',
    status: 'For Sale',
  },
  {
    id: '3',
    address: '789 Coast Highway',
    city: 'Corona Del Mar',
    state: 'CA',
    price: 4200000,
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    image: '/placeholder-listing.jpg',
    status: 'For Sale',
  },
  {
    id: '4',
    address: '321 Harbor Drive',
    city: 'Newport Beach',
    state: 'CA',
    price: 1950000,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    image: '/placeholder-listing.jpg',
    status: 'For Sale',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Executor',
    image: '/placeholder-avatar.jpg',
    text: 'Gene made the entire probate property sale process seamless. His expertise in probate court procedures and attention to detail helped us navigate the sale of my father\'s estate in Newport Beach. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Family Member',
    image: '/placeholder-avatar.jpg',
    text: 'Working with Gene on our probate property sale was a pleasure. He sold the inherited property quickly and for top dollar. His probate expertise, marketing strategy, and negotiation skills are outstanding.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Davis',
    role: 'Administrator',
    image: '/placeholder-avatar.jpg',
    text: 'Gene\'s knowledge of Orange County probate real estate is unmatched. He helped us navigate the complex probate process, ensuring court compliance while maximizing the estate\'s value. His probate expertise made all the difference.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is probate real estate and why do I need a specialist?',
    answer: 'Probate real estate involves selling property that\'s part of an estate after someone passes away. Unlike traditional real estate sales, probate sales require court approval, specific legal procedures, and compliance with probate timelines. A certified Probate Real Estate Specialist (Probate Real Estate Specialists) understands these unique requirements and can help ensure the sale proceeds smoothly while maximizing property value.',
  },
  {
    id: '2',
    question: 'How long does a probate property sale take in Orange County?',
    answer: 'Probate property sales typically take longer than traditional sales due to court requirements. The process can take several months to over a year, depending on the complexity of the estate, court schedules, and whether multiple heirs are involved. A probate specialist can help manage timelines and ensure all court requirements are met efficiently.',
  },
  {
    id: '3',
    question: 'How is a probate property valued for court purposes?',
    answer: 'Probate properties require professional valuations that meet court requirements. These valuations are used for estate tax purposes, distribution to heirs, and establishing sale prices. We coordinate with certified appraisers to ensure valuations meet legal standards and help maximize estate value.',
  },
  {
    id: '4',
    question: 'Do I need court approval to sell a probate property?',
    answer: 'Yes, probate property sales typically require court approval before listing and selling. The executor or administrator must file the necessary documentation and obtain court authorization. We help prepare all required documents and coordinate with attorneys to ensure compliance with court procedures.',
  },
  {
    id: '5',
    question: 'What makes Just Call Gene different from other real estate agents?',
    answer: 'Just Call Gene is 100% focused on probate real estate—it\'s our exclusive specialty. We\'re certified Probate Real Estate Specialists (Probate Real Estate Specialists) and Probate Experts (Probate Expert) with deep knowledge of Orange County probate courts. Unlike general real estate agents who may handle probate occasionally, probate is our only business, ensuring unmatched expertise and specialization.',
  },
  {
    id: '6',
    question: 'Can probate properties be sold "as-is" in Orange County?',
    answer: 'Yes, probate properties are typically sold "as-is," meaning the estate won\'t make repairs. This is common in probate sales and buyers understand this. Our probate expertise helps position properties effectively while ensuring proper disclosure and compliance with all legal requirements.',
  },
];

// Location-specific FAQs for each community
export const getCommunityFAQs = (communityName: string): FAQ[] => {
  const baseFAQs: FAQ[] = [
    {
      id: `${communityName.toLowerCase().replace(/\s+/g, '-')}-1`,
      question: `How long does probate take in ${communityName}?`,
      answer: `Probate in ${communityName} typically takes 6-12 months, though complex estates may take longer. The timeline depends on factors like estate complexity, court backlog, property issues, and family disputes. Orange County Superior Court handles probate cases, and we work closely with the court to ensure timely processing while maintaining compliance with all requirements.`,
    },
    {
      id: `${communityName.toLowerCase().replace(/\s+/g, '-')}-2`,
      question: `What are the probate court requirements for selling property in ${communityName}?`,
      answer: `Selling probate property in ${communityName} requires court approval, professional appraisals, notice to beneficiaries, and compliance with Orange County Superior Court procedures. The executor must file a Petition for Order Confirming Sale and obtain court authorization before closing. We handle all court documentation and coordinate with probate attorneys to ensure full compliance.`,
    },
    {
      id: `${communityName.toLowerCase().replace(/\s+/g, '-')}-3`,
      question: `How is probate property valued in ${communityName}?`,
      answer: `Probate properties in ${communityName} require certified appraisals that meet court standards. The appraisal must reflect fair market value as of the date of death and is used for estate tax purposes, distribution to heirs, and establishing sale prices. We coordinate with certified appraisers familiar with ${communityName}'s market to ensure accurate valuations that maximize estate value.`,
    },
    {
      id: `${communityName.toLowerCase().replace(/\s+/g, '-')}-4`,
      question: `What makes probate sales different in ${communityName}?`,
      answer: `${communityName}'s luxury market and unique property characteristics require specialized probate expertise. High-value properties often need strategic marketing, understanding of buyer expectations, and knowledge of local market dynamics. We combine probate court expertise with deep ${communityName} market knowledge to maximize property values while ensuring court compliance.`,
    },
    {
      id: `${communityName.toLowerCase().replace(/\s+/g, '-')}-5`,
      question: `Do I need a probate specialist to sell inherited property in ${communityName}?`,
      answer: `While not legally required, working with a Certified Probate Real Estate Specialist is highly recommended for ${communityName} probate sales. The combination of probate court requirements, high property values, and complex market dynamics makes specialized expertise essential. We understand both Orange County probate procedures and ${communityName}'s unique real estate market.`,
    },
  ];

  // Add community-specific FAQs
  if (communityName === 'Newport Beach') {
    baseFAQs.push({
      id: 'newport-beach-6',
      question: 'How do I sell a luxury probate property in Newport Beach?',
      answer: 'Luxury probate properties in Newport Beach require specialized marketing, understanding of high-end buyer expectations, and knowledge of waterfront, golf course, and estate property markets. We combine probate expertise with luxury real estate experience to position properties effectively, reach qualified buyers, and maximize value while ensuring court compliance.',
    });
  }

  if (communityName === 'Irvine') {
    baseFAQs.push({
      id: 'irvine-6',
      question: 'Are there special considerations for probate sales in master-planned communities in Irvine?',
      answer: 'Irvine\'s master-planned communities often have HOA requirements, architectural guidelines, and community-specific rules that must be considered in probate sales. We understand these requirements and work with HOAs to ensure smooth transactions while maintaining compliance with both probate court and community regulations.',
    });
  }

  if (communityName === 'Corona Del Mar') {
    baseFAQs.push({
      id: 'corona-del-mar-6',
      question: 'What should I know about selling ocean-view probate properties in Corona Del Mar?',
      answer: 'Ocean-view properties in Corona Del Mar command premium prices and attract specific buyer demographics. Probate sales of these properties require understanding of view premiums, coastal regulations, and luxury market dynamics. We specialize in positioning high-value coastal properties to maximize estate value while navigating probate requirements.',
    });
  }

  if (communityName === 'Laguna Beach') {
    baseFAQs.push({
      id: 'laguna-beach-6',
      question: 'How do unique architectural homes in Laguna Beach affect probate sales?',
      answer: 'Laguna Beach\'s unique architectural homes, including mid-century modern and custom designs, require specialized marketing and understanding of architectural buyer preferences. Probate sales of these properties benefit from expertise in both probate procedures and architectural property markets. We help position unique properties effectively while ensuring court compliance.',
    });
  }

  if (communityName === 'Costa Mesa') {
    baseFAQs.push({
      id: 'costa-mesa-6',
      question: 'What are the probate sale considerations for diverse property types in Costa Mesa?',
      answer: 'Costa Mesa offers diverse property types from single-family homes to condos and multi-family properties. Each property type has different market dynamics, buyer profiles, and probate considerations. Our experience across all property types in Costa Mesa ensures we can handle any probate property sale effectively while maximizing value.',
    });
  }

  if (communityName === 'Huntington Beach') {
    baseFAQs.push({
      id: 'huntington-beach-6',
      question: 'How do beach proximity and family-friendly neighborhoods affect probate sales in Huntington Beach?',
      answer: 'Huntington Beach\'s beach proximity and family-friendly reputation attract specific buyer demographics. Probate sales benefit from understanding these market dynamics, school districts, and lifestyle factors that drive property values. We combine probate expertise with local market knowledge to position properties effectively for target buyers.',
    });
  }

  return baseFAQs;
};

export const communities: Community[] = [
  {
    id: '1',
    name: 'Newport Beach',
    slug: 'newport-beach',
    description: 'Premier coastal community with world-class beaches, luxury homes, and exceptional lifestyle amenities.',
    image: '/placeholder-community.jpg',
  },
  {
    id: '2',
    name: 'Irvine',
    slug: 'irvine',
    description: 'Master-planned city with top-rated schools, extensive parks, and thriving tech corridor.',
    image: '/placeholder-community.jpg',
  },
  {
    id: '3',
    name: 'Corona Del Mar',
    slug: 'corona-del-mar',
    description: 'Exclusive coastal enclave known for stunning ocean views, luxury estates, and sophisticated living.',
    image: '/placeholder-community.jpg',
  },
  {
    id: '4',
    name: 'Laguna Beach',
    slug: 'laguna-beach',
    description: 'Artistic coastal community with beautiful beaches, galleries, and unique architectural homes.',
    image: '/placeholder-community.jpg',
  },
  {
    id: '5',
    name: 'Costa Mesa',
    slug: 'costa-mesa',
    description: 'Vibrant city offering diverse housing options, excellent shopping, and convenient location.',
    image: '/placeholder-community.jpg',
  },
  {
    id: '6',
    name: 'Huntington Beach',
    slug: 'huntington-beach',
    description: 'Surf City USA with miles of beaches, family-friendly neighborhoods, and active lifestyle.',
    image: '/placeholder-community.jpg',
  },
];

export const accolades = [
  {
    title: 'Probate Expert',
    icon: '🏆',
  },
  {
    title: 'Expert Knowledge',
    subtitle: 'Deep probate expertise and court procedures',
    icon: '📚',
  },
  {
    title: 'Certified Probate Real Estate Specialist',
    subtitle: 'Probate Real Estate Specialists & Probate Expert Certified',
    icon: '✅',
  },
  {
    title: '100% Probate Focus',
    subtitle: 'Exclusive probate specialization',
    icon: '🎖️',
  },
  {
    title: 'Court Compliance Expert',
    subtitle: 'Probate court procedures',
    icon: '⚖️',
  },
  {
    title: 'Top Probate Specialist',
    subtitle: 'in Orange County',
    icon: '⭐',
  },
];

