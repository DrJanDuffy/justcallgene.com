'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function HeroSection() {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <section className="relative w-full min-h-screen min-h-[700px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 py-20 text-center min-h-[700px] space-y-8">
        
        {/* Trust Badge - Enhanced */}
        <div className="mb-4 inline-block animate-fade-in-up">
          <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 border border-blue-400/30 text-blue-100 text-sm font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            🏆 Orange County's #1 Probate Expert | Deep Court Knowledge | Proven Expertise
          </span>
        </div>

        {/* Main Headline - Enhanced Typography */}
        {/* Note: Removed animate-fade-in-up from h1 to improve LCP - LCP element should render immediately */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] max-w-5xl tracking-tight">
          Sell Your Inherited <span className="bg-gradient-to-r from-blue-300 via-primary-light to-blue-300 bg-clip-text text-transparent">Orange County Home</span> With Confidence
        </h1>

        {/* Subheading - Value-Focused - Enhanced */}
        <p className="text-xl md:text-2xl lg:text-3xl text-blue-100/90 mb-12 max-w-4xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Gene Boyle navigated probate estates through Orange County courts. 
          Average result: <span className="font-bold text-blue-300 bg-blue-500/20 px-2 py-1 rounded">12% above initial valuation.</span> 
          Your home is worth more than you think.
        </p>

        {/* Key Guarantees - Enhanced with better spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">6-12</div>
            <div className="text-sm md:text-base text-blue-100/90 font-medium">Month Timeline</div>
          </div>
          <div className="glass rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">Expert</div>
            <div className="text-sm md:text-base text-blue-100/90 font-medium">Knowledge</div>
          </div>
          <div className="glass rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">12%</div>
            <div className="text-sm md:text-base text-blue-100/90 font-medium">Avg Premium</div>
          </div>
          <div className="glass rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">98%</div>
            <div className="text-sm md:text-base text-blue-100/90 font-medium">Satisfaction</div>
          </div>
        </div>

        {/* Dual CTAs - Primary + Secondary - Enhanced */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 max-w-2xl w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Primary CTA - Phone - Enhanced */}
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="group px-8 py-5 bg-gradient-to-r from-blue-500 via-primary to-blue-600 hover:from-blue-600 hover:via-primary-dark hover:to-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-glow-lg hover:shadow-glow hover:scale-105 flex flex-col items-center justify-center gap-1.5 focus-ring-dark"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              Call Gene: {siteConfig.business.phoneFormatted}
            </span>
            <span className="text-xs text-blue-100">Free 15-Min Probate Assessment</span>
          </a>

          {/* Secondary CTA - Consultation - Enhanced */}
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="px-8 py-5 glass text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 hover:scale-105 focus-ring-dark"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">📋</span>
              Schedule Consultation
            </span>
            <span className="text-xs text-blue-100 block mt-1">Takes 2 Minutes</span>
          </Button>
        </div>

        {/* Urgency Element - Enhanced */}
        <p className="text-blue-200/90 text-base md:text-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          ⏱️ <span className="font-bold text-blue-100">Probate deadlines are strict.</span> Don't delay. Get expert guidance today.
        </p>

        {/* Quick Trust Indicators - Enhanced */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-blue-100/90 mb-16 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2.5 glass px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
            <span className="text-blue-300 text-xl">✓</span>
            <span className="font-medium">Certified Probate Real Estate Specialists</span>
          </div>
          <div className="flex items-center gap-2.5 glass px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
            <span className="text-blue-300 text-xl">✓</span>
            <span className="font-medium">Orange County Superior Court Expert</span>
          </div>
          <div className="flex items-center gap-2.5 glass px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
            <span className="text-blue-300 text-xl">✓</span>
            <span className="font-medium">Trusted by 50+ Law Firms</span>
          </div>
          <div className="flex items-center gap-2.5 glass px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all">
            <span className="text-blue-300 text-xl">✓</span>
            <span className="font-medium">5-Star Client Reviews</span>
          </div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass rounded-full p-3 border border-white/20">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

