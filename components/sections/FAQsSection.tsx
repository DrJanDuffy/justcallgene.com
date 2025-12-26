'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data';

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          
          {faqs.map((faq, idx) => (
            <details
              key={faq.id}
              open={openIndex === idx}
              className="group bg-slate-50 rounded-lg p-6 border-2 border-slate-200 hover:border-blue-400 transition cursor-pointer"
            >
              <summary 
                onClick={(e) => {
                  e.preventDefault();
                  toggleFAQ(idx);
                }}
                className="flex items-center justify-between font-bold text-slate-900 text-lg list-none"
              >
                {faq.question}
                <span className={`transform transition text-blue-600 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-slate-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}

        </div>

      </div>
    </section>
  );
}

