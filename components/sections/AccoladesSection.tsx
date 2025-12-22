import { accolades } from '@/lib/data';

export function AccoladesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Born To{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Win
            </span>
          </h2>
          <p className="text-lg text-neutral-600">Accolades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accolades.map((accolade, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center border border-neutral-100 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {accolade.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {accolade.title}
              </h3>
              {accolade.subtitle && (
                <p className="text-neutral-600">{accolade.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

