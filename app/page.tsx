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
