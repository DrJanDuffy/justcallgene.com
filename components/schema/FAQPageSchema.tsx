import { FAQ } from '@/lib/data';
import { siteConfig } from '@/lib/config';

interface FAQPageSchemaProps {
  faqs: FAQ[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/faq#webpage`,
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${siteConfig.url}/faq#question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': `${siteConfig.url}/faq#answer-${index + 1}`,
        text: faq.answer,
      },
    })),
    about: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.business.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

