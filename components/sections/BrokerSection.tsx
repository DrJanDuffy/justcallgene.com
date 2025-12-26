import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function BrokerSection() {
  const primaryAgent = siteConfig.business.agents?.[0];
  
  return (
    <section id="meet-agent" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Gene's Photo + Credentials */}
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder-broker.jpg"
                alt="Eugene Joseph Boyle - Orange County Probate Specialist"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Credential Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-sm text-slate-700 font-semibold">Eugene Joseph Boyle</p>
              <p className="text-xs text-slate-600">California Real Estate Salesperson</p>
              <p className="text-xs text-blue-600 font-bold">License #02282581</p>
              <div className="flex gap-1 mt-2">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-semibold">PRES</span>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-semibold">CPE</span>
              </div>
            </div>
          </div>

          {/* Right: Gene's Bio + Authority */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Orange County's Probate Expert
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">The Gene Boyle Difference</h3>
                <p className="text-blue-100">
                  Gene has successfully guided 200+ Orange County families through probate estates, 
                  securing an average 12% premium above initial valuations. When your inherited home 
                  is worth $2M-$5M+, those percentages mean real money.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">20+ Years Orange County Probate Expertise</h3>
                <p className="text-blue-100">
                  Gene doesn't just sell probate homes. He's mastered Orange County's court procedures, 
                  knows the market dynamics of each community, and has relationships with the 
                  most qualified buyers for luxury estates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Certified Probate Specialist</h3>
                <p className="text-blue-100">
                  Gene holds both PRES (Certified Probate Real Estate Specialist) and CPE 
                  (Certified Probate Expert) certifications—ensuring he stays current on court 
                  procedures, legal requirements, and best practices.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-blue-100">Probate Estates Managed</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400">
                <div className="text-3xl font-bold">$200M+</div>
                <div className="text-sm text-blue-100">Total Sales Volume</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400">
                <div className="text-3xl font-bold">12%</div>
                <div className="text-sm text-blue-100">Average Premium Above Estimate</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="inline-block px-6 py-3 bg-blue-400 hover:bg-blue-300 text-slate-900 font-bold rounded-lg transition-all duration-200"
            >
              Speak Directly with Gene
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

