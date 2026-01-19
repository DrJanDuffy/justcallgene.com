'use client';

import { useState } from 'react';
import { faqs, FAQ } from '@/lib/data';

interface FAQsSectionProps {
  faqs?: FAQ[];
  title?: string;
}

export function FAQsSection({ faqs: customFAQs, title = 'Frequently Asked Questions' }: FAQsSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqsToDisplay = customFAQs || faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          
          {faqsToDisplay.map((faq, idx) => (
            <details
              key={faq.id}
              open={openIndex === idx}
              className="group bg-white rounded-xl p-6 border-2 border-neutral-200 hover:border-primary transition-all duration-300 shadow-soft hover:shadow-soft-lg cursor-pointer"
            >
              <summary 
                onClick={(e) => {
                  e.preventDefault();
                  toggleFAQ(idx);
                }}
                className="flex items-center justify-between font-bold text-neutral-900 text-lg list-none"
              >
                <span className="pr-4">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-primary flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-neutral-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}

        </div>

      </div>
    </section>
  );
}

