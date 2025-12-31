import { FAQ } from '@/lib/data';
import { siteConfig } from '@/lib/config';

interface FAQPageSchemaProps {
  faqs: FAQ[];
  url?: string; // Optional page URL, defaults to /faq
}

export function FAQPageSchema({ faqs, url }: FAQPageSchemaProps) {
  // Use provided URL or default to /faq
  // Build full URL: if url is absolute, use it; if relative, prepend siteConfig.url
  const baseUrl = url 
    ? (url.startsWith('http') ? url : `${siteConfig.url}${url.startsWith('/') ? url : `/${url}`}`)
    : `${siteConfig.url}/faq`;
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}#webpage`,
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${baseUrl}#question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': `${baseUrl}#answer-${index + 1}`,
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

