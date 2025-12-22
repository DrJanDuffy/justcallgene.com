'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with form handler
    console.log('Contact form submission:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
          <p className="text-lg text-neutral-600">Get In Touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Phone</h3>
              </div>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="text-lg font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:from-primary-dark hover:to-primary transition-all duration-300"
              >
                {siteConfig.business.phoneFormatted}
              </a>
            </div>

            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Email Address</h3>
              </div>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="text-lg font-medium bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:from-primary-dark hover:to-primary transition-all duration-300"
              >
                {siteConfig.business.email}
              </a>
            </div>

            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-r from-primary to-primary-dark p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Visit</h3>
              </div>
              <p className="text-lg text-neutral-700">
                {siteConfig.business.address.streetAddress}
                <br />
                {siteConfig.business.address.addressLocality}, {siteConfig.business.address.addressRegion} {siteConfig.business.address.postalCode}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden border border-neutral-200 shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Map placeholder - Add Google Maps embed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-soft-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:border-primary/50 resize-none"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 mr-2"
                />
                <label htmlFor="consent" className="text-sm text-neutral-600">
                  I agree to receive marketing communications via voice call, AI voice call, text message or similar automated means from {siteConfig.business.name}. Text HELP to {siteConfig.business.phone} for assistance. Consent is not a condition of purchase. Msg/data rates may apply. Msg frequency varies. Reply STOP to unsubscribe.
                </label>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

