import { faqs } from '@/lib/data';
import { Accordion } from '@/components/ui/Accordion';

export function FAQsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-soft-lg overflow-hidden border border-neutral-100">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={index !== faqs.length - 1 ? 'border-b border-neutral-100' : ''}>
              <Accordion title={faq.question}>
                <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

