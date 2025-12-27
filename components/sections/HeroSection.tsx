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
      <div className="relative h-full flex flex-col items-center justify-center px-6 py-20 text-center min-h-[700px]">
        
        {/* Trust Badge */}
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400 text-blue-100 text-sm font-semibold">
            🏆 Orange County's #1 Probate Expert | Deep Court Knowledge | Proven Expertise
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
          Sell Your Inherited <span className="text-blue-300">Orange County Home</span> With Confidence
        </h1>

        {/* Subheading - Value-Focused */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
          Gene Boyle navigated probate estates through Orange County courts. 
          Average result: <span className="font-bold text-blue-300">12% above initial valuation.</span> 
          Your home is worth more than you think.
        </p>

        {/* Key Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition">
            <div className="text-3xl font-bold text-blue-300">6-12</div>
            <div className="text-sm text-blue-100 mt-1">Month Timeline</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition">
            <div className="text-3xl font-bold text-blue-300">Expert</div>
            <div className="text-sm text-blue-100 mt-1">Knowledge</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition">
            <div className="text-3xl font-bold text-blue-300">12%</div>
            <div className="text-sm text-blue-100 mt-1">Avg Premium</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition">
            <div className="text-3xl font-bold text-blue-300">98%</div>
            <div className="text-sm text-blue-100 mt-1">Satisfaction</div>
          </div>
        </div>

        {/* Dual CTAs - Primary + Secondary */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Primary CTA - Phone */}
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 flex flex-col items-center justify-center gap-1"
          >
            <span>📞 Call Gene: {siteConfig.business.phoneFormatted}</span>
            <span className="text-xs">Free 15-Min Probate Assessment</span>
          </a>

          {/* Secondary CTA - Consultation */}
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-200 backdrop-blur-sm hover:border-white/50"
          >
            📋 Schedule Consultation
            <span className="text-xs block mt-1">Takes 2 Minutes</span>
          </Button>
        </div>

        {/* Urgency Element */}
        <p className="text-blue-200 text-sm mb-8">
          ⏱️ <span className="font-bold">Probate deadlines are strict.</span> Don't delay. Get expert guidance today.
        </p>

        {/* Quick Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-blue-300 text-lg">✓</span>
            <span>Certified Probate Real Estate Specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-300 text-lg">✓</span>
            <span>Orange County Superior Court Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-300 text-lg">✓</span>
            <span>Trusted by 50+ Law Firms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-300 text-lg">✓</span>
            <span>5-Star Client Reviews</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
}

