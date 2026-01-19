import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

/**
 * AgentSection - Displays Gene Boyle (Real Estate Salesperson/Agent)
 * Note: Gene Boyle is a Real Estate Salesperson (Agent), not a broker.
 * The broker is Kelly Lynn Boyle (Real Estate Broker License #02012693)
 */
export function BrokerSection() {
  const primaryAgent = siteConfig.business.agents?.[0]; // Gene Boyle - Real Estate Salesperson
  
  return (
    <section id="meet-agent" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Gene's Photo + Credentials - Enhanced */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full max-w-xs mx-auto lg:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02]">
              {/* Gradient background fallback - shows if image fails to load */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 z-0" />
              <Image
                src="/images/agents/gene-boyle.jpg"
                alt="Gene Boyle - Orange County Probate Real Estate Specialist and Certified Probate Expert"
                fill
                className="object-cover relative z-10"
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 40vw, 35vw"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-20" />
            </div>
            
            {/* Credential Badge - Enhanced */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5 backdrop-blur-md border border-white/30 shadow-xl">
              <p className="text-base text-slate-900 font-bold mb-1">Gene Boyle</p>
              <p className="text-sm text-slate-700 mb-1">California Real Estate Salesperson</p>
              <p className="text-sm text-blue-600 font-bold mb-3">License #02282581</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 text-xs rounded-lg font-semibold border border-blue-200">Probate Real Estate Specialists</span>
                <span className="inline-block px-3 py-1.5 bg-green-100 text-green-700 text-xs rounded-lg font-semibold border border-green-200">Probate Expert</span>
              </div>
            </div>
          </div>

          {/* Right: Gene's Bio + Authority - Enhanced */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
              Orange County's <span className="text-gradient-secondary">Probate Expert</span>
            </h2>
            
            {/* Years of Experience Badge */}
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-primary/30 border border-blue-400/50 text-blue-100 text-base font-bold rounded-lg">
                20+ Years Experience | Since 2004
              </span>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">The Gene Boyle Difference</h3>
                <p className="text-blue-100">
                  Gene brings deep knowledge of Orange County probate procedures and court requirements, 
                  securing an average 12% premium above initial valuations. When your inherited home 
                  is worth $2M-$5M+, that expertise means real money.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Deep Orange County Probate Knowledge</h3>
                <p className="text-blue-100">
                  Gene doesn't just sell probate homes. He's mastered Orange County's court procedures, 
                  understands the legal requirements, knows the market dynamics of each community, and 
                  has the expertise to navigate complex probate transactions with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Certified Probate Specialist</h3>
                <p className="text-blue-100">
                  Gene holds both Probate Real Estate Specialists and Probate Expert 
                  certifications—ensuring he stays current on court 
                  procedures, legal requirements, and best practices.
                </p>
              </div>
            </div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass rounded-xl p-5 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">Expert</div>
                <div className="text-sm text-blue-100/90 font-medium">Court Knowledge</div>
              </div>
              <div className="glass rounded-xl p-5 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">Expert</div>
                <div className="text-sm text-blue-100/90 font-medium">Knowledge Base</div>
              </div>
              <div className="glass rounded-xl p-5 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">12%</div>
                <div className="text-sm text-blue-100/90 font-medium">Average Premium Above Estimate</div>
              </div>
              <div className="glass rounded-xl p-5 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-primary-light bg-clip-text mb-2">98%</div>
                <div className="text-sm text-blue-100/90 font-medium">Client Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA - Enhanced */}
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 via-primary-light to-blue-500 hover:from-blue-500 hover:via-primary hover:to-blue-600 text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 focus-ring-dark"
            >
              📞 Speak Directly with Gene
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

