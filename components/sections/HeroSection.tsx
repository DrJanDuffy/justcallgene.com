import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900 text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-neutral-900/80 to-blue-950/50 animate-pulse"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
            Probate Real Estate{' '}
            <span className="bg-gradient-to-r from-blue-400 via-primary-light to-blue-300 bg-clip-text text-transparent">
              SPECIALISTS
            </span>
            <br />
            <span className="text-white">in Orange County, CA</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-100 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Certified Probate Experts Helping Families Navigate Inherited Property Sales
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              href="/probate"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Free Probate Consultation
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-neutral-900"
            >
              Contact Probate Specialists
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="pt-16">
            <a
              href="#meet-agent"
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

