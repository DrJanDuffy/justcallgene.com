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
    role: 'Home Buyer',
    image: '/placeholder-avatar.jpg',
    text: 'Gene made the entire home buying process seamless. His expertise and attention to detail helped us find our dream home in Newport Beach. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Home Seller',
    image: '/placeholder-avatar.jpg',
    text: 'Working with Gene was a pleasure. He sold our home quickly and for top dollar. His marketing strategy and negotiation skills are outstanding.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Davis',
    role: 'Investor',
    image: '/placeholder-avatar.jpg',
    text: 'Gene\'s knowledge of the Orange County market is unmatched. He helped us identify great investment opportunities and navigate the process with ease.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What should I consider when buying a home in Orange County, CA?',
    answer: 'When buying a home in Orange County, CA, it\'s essential to consider the local amenities, school districts, and community vibe. Popular areas such as Newport Beach, Irvine, and Corona Del Mar offer great schools and recreational opportunities. Partnering with a knowledgeable Realtor can help you navigate these factors effectively.',
  },
  {
    id: '2',
    question: 'What makes a Real Estate Agent in Orange County, CA the best choice for me?',
    answer: 'The best Real Estate Agent in Orange County, CA should offer personalized service, a deep understanding of the local market, and a proven track record of successful transactions. Gene\'s expertise in the Orange County area ensures you receive guidance tailored to your needs and preferences.',
  },
  {
    id: '3',
    question: 'How can I determine the value of my home in Orange County?',
    answer: 'To determine your home\'s value in Orange County, consider recent sales of similar properties in your neighborhood, current market trends, and overall economic factors. A qualified real estate agent can provide a comprehensive market analysis, helping you set a competitive price.',
  },
  {
    id: '4',
    question: 'Is it a good time to sell my house in Orange County, CA?',
    answer: 'The local market conditions typically fluctuate; however, Orange County has seen consistent interest due to its quality of life and amenities. Working with a dedicated real estate agent can help you assess the best time to list based on your personal situation and market analytics.',
  },
  {
    id: '5',
    question: 'What are the top neighborhoods in Orange County for families?',
    answer: 'Orange County boasts several family-friendly neighborhoods, including Newport Beach, Irvine, and Corona Del Mar, known for their parks, schools, and community activities. A knowledgeable Real Estate Agent can highlight the best choices that fit your family\'s lifestyle.',
  },
  {
    id: '6',
    question: 'How long do homes typically stay on the market in Orange County?',
    answer: 'Homes in Orange County may average a few weeks to a few months on the market, depending on various factors like pricing and demand. The best Real Estate Agent will provide insights on current market conditions, helping you strategize your buying or selling timeline.',
  },
];

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
    title: 'Certified Probate Expert',
    icon: '🏆',
  },
  {
    title: '$200M+ Sold',
    subtitle: 'in real estate',
    icon: '💰',
  },
  {
    title: 'Certified Real Estate Probate Specialist',
    icon: '✅',
  },
  {
    title: 'Corporate & Military Relocation Specialist',
    icon: '🎖️',
  },
  {
    title: 'Certified Luxury Home Marketing Specialist',
    icon: '🏠',
  },
  {
    title: 'Top Realtor',
    subtitle: 'in Orange County by transactions',
    icon: '⭐',
  },
];

