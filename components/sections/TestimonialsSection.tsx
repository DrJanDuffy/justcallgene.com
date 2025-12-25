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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Client Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Probate Clients Say
            </span>
          </h2>
          <p className="text-lg text-neutral-600">Probate Client Testimonials</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 md:p-12 relative shadow-soft-lg border border-neutral-100">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            {/* Testimonial Content */}
            <div className="text-center relative z-10">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg md:text-xl text-neutral-700 italic mb-6 leading-relaxed">
                "{currentTestimonial.text}"
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-4 inline-block">
                <p className="text-xl font-bold text-neutral-900">
                  {currentTestimonial.name}
                </p>
                <p className="text-neutral-600">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-soft-lg hover:shadow-glow hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-soft-lg hover:shadow-glow hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-primary to-primary-dark w-8 h-2 shadow-glow' 
                      : 'bg-neutral-300 w-2 h-2 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

