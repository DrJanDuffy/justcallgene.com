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
    text: 'Gene made the entire home buying process seamless. His expertise and attention to detail helped us find our dream home in Las Vegas. Highly recommended!',
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
    text: 'Gene\'s knowledge of the Las Vegas market is unmatched. He helped us identify great investment opportunities and navigate the process with ease.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What should I consider when buying a home in Las Vegas, NV?',
    answer: 'When buying a home in Las Vegas, NV, it\'s essential to consider the local amenities, school districts, and community vibe. Popular areas such as Summerlin and Henderson offer great schools and recreational opportunities. Partnering with a knowledgeable Realtor can help you navigate these factors effectively.',
  },
  {
    id: '2',
    question: 'What makes a Real Estate Broker in Las Vegas, NV the best choice for me?',
    answer: 'The best Real Estate Broker in Las Vegas, NV should offer personalized service, a deep understanding of the local market, and a proven track record of successful transactions. Gene\'s expertise in the Las Vegas area ensures you receive guidance tailored to your needs and preferences.',
  },
  {
    id: '3',
    question: 'How can I determine the value of my home in Las Vegas?',
    answer: 'To determine your home\'s value in Las Vegas, consider recent sales of similar properties in your neighborhood, current market trends, and overall economic factors. A qualified real estate broker can provide a comprehensive market analysis, helping you set a competitive price.',
  },
  {
    id: '4',
    question: 'Is it a good time to sell my house in Las Vegas, NV?',
    answer: 'The local market conditions typically fluctuate; however, Las Vegas has seen consistent interest due to its quality of life and amenities. Working with a dedicated real estate broker can help you assess the best time to list based on your personal situation and market analytics.',
  },
  {
    id: '5',
    question: 'What are the top neighborhoods in Las Vegas for families?',
    answer: 'Las Vegas boasts several family-friendly neighborhoods, including Summerlin, Henderson, and Green Valley, known for their parks, schools, and community activities. A knowledgeable Real Estate Broker can highlight the best choices that fit your family\'s lifestyle.',
  },
  {
    id: '6',
    question: 'How long do homes typically stay on the market in Las Vegas?',
    answer: 'Homes in Las Vegas may average a few weeks to a few months on the market, depending on various factors like pricing and demand. The best Real Estate Broker will provide insights on current market conditions, helping you strategize your buying or selling timeline.',
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
    title: 'Top 400 of 18,000+ Realtors',
    subtitle: 'in Clark County by transactions',
    icon: '⭐',
  },
];

