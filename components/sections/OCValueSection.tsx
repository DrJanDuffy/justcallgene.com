'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function OCValueSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            Orange County Probate is <span className="text-gradient-primary">Unique</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            High-value estates, sophisticated buyers, strict court procedures. 
            You need an expert who knows Orange County specifically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {/* OC-Specific Challenge 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up hover-lift">
            <div className="text-5xl mb-5">🏖️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Coastal Complexity</h3>
            <p className="text-slate-700 mb-5 text-lg leading-relaxed">
              Newport Beach, Corona Del Mar, Laguna Beach properties have specialized buyer networks and unique market dynamics.
            </p>
            <p className="text-base text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
              <strong className="text-blue-700">Gene's Edge:</strong> Deep knowledge of coastal estate markets. Knows exactly which buyers want what.
            </p>
          </div>

          {/* OC-Specific Challenge 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-2 border-green-200 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up hover-lift" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-5">⚖️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Court Procedure Mastery</h3>
            <p className="text-slate-700 mb-5 text-lg leading-relaxed">
              Orange County Superior Court has 100+ judges with different procedures. One mistake = months of delays.
            </p>
            <p className="text-base text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
              <strong className="text-green-700">Gene's Edge:</strong> Knows Orange County court judges personally. Anticipates their requirements.
            </p>
          </div>

          {/* OC-Specific Challenge 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-5">💰</div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">High-Value Estate Sales</h3>
            <p className="text-slate-700 mb-5 text-lg leading-relaxed">
              OC average home price: $1.2M-$5M+. You need someone who handles luxury markets.
            </p>
            <p className="text-base text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
              <strong className="text-purple-700">Gene's Edge:</strong> Average result 12% above asking in luxury market. That's $120K-$600K extra value.
            </p>
          </div>

        </div>

        {/* CTA - Enhanced */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href={`tel:${siteConfig.business.phone}`}
            className="inline-block px-8 py-5 bg-gradient-to-r from-blue-600 via-primary to-blue-700 hover:from-blue-700 hover:via-primary-dark hover:to-blue-800 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 focus-ring"
          >
            📞 Let's Discuss Your Orange County Estate
          </a>
        </div>

      </div>
    </section>
  );
}
