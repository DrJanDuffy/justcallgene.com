import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-primary-900/20 to-neutral-900 text-white overflow-hidden">
      {/* Animated Background Gradient - 2026 Style */}
      <div className="absolute inset-0 bg-gradient-modern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-neutral-900/90 to-primary-900/30"></div>
      
      {/* Decorative Elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      {/* Background Overlay - Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
            Probate Real Estate{' '}
            <span className="gradient-text-modern bg-clip-text text-transparent">
              SPECIALISTS
            </span>
            <br />
            <span className="text-white drop-shadow-lg">in Orange County, CA</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-neutral-100 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
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

