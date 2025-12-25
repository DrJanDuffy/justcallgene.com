import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrokerSection } from '@/components/sections/BrokerSection';
import { CoffeeSection } from '@/components/sections/CoffeeSection';
import { AccoladesSection } from '@/components/sections/AccoladesSection';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AreasSection } from '@/components/sections/AreasSection';
import { GuidesSection } from '@/components/sections/GuidesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FAQsSection } from '@/components/sections/FAQsSection';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'real estate agent Orange County',
    'real estate broker California',
    'Newport Beach real estate',
    'Irvine real estate agent',
    'Corona Del Mar realtor',
    'homes for sale Orange County',
    'probate real estate specialist',
    'real estate team',
    'Orange County realtor',
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrokerSection />
      <CoffeeSection />
      <AccoladesSection />
      <FeaturedListings />
      <ServicesSection />
      <AreasSection />
      <GuidesSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQsSection />
    </main>
  );
}
