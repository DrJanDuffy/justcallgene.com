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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-neutral-600">Get In Touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Phone</h3>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="text-lg text-primary hover:text-primary-dark transition-colors"
              >
                {siteConfig.business.phoneFormatted}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Email Address</h3>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="text-lg text-primary hover:text-primary-dark transition-colors"
              >
                {siteConfig.business.email}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Visit</h3>
              <p className="text-lg text-neutral-700">
                {siteConfig.business.address.streetAddress}
                <br />
                {siteConfig.business.address.addressLocality}, {siteConfig.business.address.addressRegion} {siteConfig.business.address.postalCode}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-neutral-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                <p>Map placeholder - Add Google Maps embed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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

