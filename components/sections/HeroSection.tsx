import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Real Estate{' '}
            <span className="text-primary-light">BROKER</span>
            <br />
            in Las Vegas, NV
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-200 max-w-3xl mx-auto">
            Helping You Move Forward—The Professional Way
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              href="/probate"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Probate Realtor Consultation
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Book Free Consultation
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="pt-16">
            <a
              href="#meet-broker"
              className="inline-flex flex-col items-center space-y-2 text-neutral-300 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm">Scroll</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

