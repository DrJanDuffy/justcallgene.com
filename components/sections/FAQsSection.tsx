import { faqs } from '@/lib/data';
import { Accordion } from '@/components/ui/Accordion';

export function FAQsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            FAQs
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

