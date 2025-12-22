export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-200">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">1. Information We Collect</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-8">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Property search preferences and saved searches</li>
              <li>Information you provide when contacting us or requesting services</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-8">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">3. Information Sharing</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-8">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>With service providers who assist us in operating our website</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">4. Data Security</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">5. Cookies and Tracking</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">6. Your Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-8">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">7. Children's Privacy</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Our service does not address anyone under the age of 18. We do not knowingly collect personal information from 
              children under 18. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">8. Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mb-6">9. Contact Us</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="text-neutral-700">
                <strong>Just Call Gene</strong><br />
                Email: info@justcallgene.com<br />
                Phone: (702) 239-8400
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


