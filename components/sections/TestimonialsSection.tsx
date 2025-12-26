'use client';

import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
          What Orange County Families Say
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Real stories from executors, heirs, and attorneys who've worked with Gene
        </p>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Attribution */}
              <div className="border-t pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Trust Stats */}
        <div className="bg-blue-50 rounded-lg p-12 border-2 border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-700">Client Satisfaction</div>
              <div className="text-xs text-slate-600 mt-2">Based on 200+ families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-slate-700">Average Rating</div>
              <div className="text-xs text-slate-600 mt-2">Across all platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-700">Law Firms Partner With Us</div>
              <div className="text-xs text-slate-600 mt-2">Regular referrals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12%</div>
              <div className="text-slate-700">Average Premium</div>
              <div className="text-xs text-slate-600 mt-2">Above initial valuation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

