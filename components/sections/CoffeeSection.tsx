import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function CoffeeSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Coffee With <span className="italic">{siteConfig.business.agentName}</span>
        </h2>
        <p className="text-xl text-neutral-100 mb-8">
          Let's discuss your real estate goals over coffee.
        </p>
        <Button
          href="/contact"
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          Let's Get A Coffee
        </Button>
      </div>
    </section>
  );
}

