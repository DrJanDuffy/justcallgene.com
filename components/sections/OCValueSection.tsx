'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export function OCValueSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Orange County Probate is Unique
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          High-value estates, sophisticated buyers, strict court procedures. 
          You need an expert who knows Orange County specifically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* OC-Specific Challenge 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
            <div className="text-4xl mb-4">🏖️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Coastal Complexity</h3>
            <p className="text-slate-700 mb-4">
              Newport Beach, Corona Del Mar, Laguna Beach properties have specialized buyer networks and unique market dynamics.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Gene's Edge:</strong> 200+ coastal estate sales. Knows exactly which buyers want what.
            </p>
          </div>

          {/* OC-Specific Challenge 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Court Procedure Mastery</h3>
            <p className="text-slate-700 mb-4">
              Orange County Superior Court has 100+ judges with different procedures. One mistake = months of delays.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Gene's Edge:</strong> Knows Orange County court judges personally. Anticipates their requirements.
            </p>
          </div>

          {/* OC-Specific Challenge 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border border-purple-200">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">High-Value Estate Sales</h3>
            <p className="text-slate-700 mb-4">
              OC average home price: $1.2M-$5M+. You need someone who handles luxury markets.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Gene's Edge:</strong> Average result 12% above asking in luxury market. That's $120K-$600K extra value.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href={`tel:${siteConfig.business.phone}`}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200"
          >
            Let's Discuss Your Orange County Estate
          </a>
        </div>

      </div>
    </section>
  );
}
