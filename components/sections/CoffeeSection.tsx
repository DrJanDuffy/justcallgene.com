import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function CoffeeSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary via-primary-dark to-primary text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30">
            Let's Connect
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          Coffee With <span className="italic text-blue-200">{siteConfig.business.agentName}</span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up">
          Let's discuss your real estate goals over coffee.
        </p>
        <Button
          href="/contact"
          variant="outline"
          size="lg"
          className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-glow hover:shadow-glow-lg"
        >
          Let's Get A Coffee
        </Button>
      </div>
    </section>
  );
}

