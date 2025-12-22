import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-neutral-200">
            Get in touch with our team today
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

