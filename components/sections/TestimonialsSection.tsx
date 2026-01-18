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
    <section className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            What Orange County <span className="text-gradient-primary">Families Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from executors, heirs, and attorneys who've worked with Gene
          </p>
        </div>

        {/* Testimonial Cards Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-8 border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              
              {/* Stars - Enhanced */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Quote - Enhanced */}
              <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Attribution - Enhanced */}
              <div className="border-t-2 border-neutral-200 pt-5">
                <p className="font-bold text-slate-900 text-lg mb-1">{testimonial.name}</p>
                <p className="text-sm text-slate-600 font-medium">{testimonial.role}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Trust Stats - Enhanced */}
        <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-2xl p-12 border-2 border-blue-200 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-primary bg-clip-text mb-3">98%</div>
              <div className="text-slate-800 font-semibold text-lg mb-1">Client Satisfaction</div>
              <div className="text-xs text-slate-600">Based on proven expertise</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-primary bg-clip-text mb-3">4.9/5</div>
              <div className="text-slate-800 font-semibold text-lg mb-1">Average Rating</div>
              <div className="text-xs text-slate-600">Across all platforms</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-primary bg-clip-text mb-3">50+</div>
              <div className="text-slate-800 font-semibold text-lg mb-1">Law Firms Partner With Us</div>
              <div className="text-xs text-slate-600">Regular referrals</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-primary bg-clip-text mb-3">12%</div>
              <div className="text-slate-800 font-semibold text-lg mb-1">Average Premium</div>
              <div className="text-xs text-slate-600">Above initial valuation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

