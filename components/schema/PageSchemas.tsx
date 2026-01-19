import { FAQ } from '@/lib/data';
import { siteConfig } from '@/lib/config';
import { testimonials } from '@/lib/data';
import { FAQPageSchema } from './FAQPageSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageSchemasProps {
  breadcrumbs?: BreadcrumbItem[];
  includeFAQ?: boolean;
  includeReviews?: boolean;
  faqs?: FAQ[];
}

export function PageSchemas({ 
  breadcrumbs, 
  includeFAQ = true, 
  includeReviews = true,
  faqs 
}: PageSchemasProps) {
  const { business } = siteConfig;
  const faqsToUse = faqs || [];

  return (
    <>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}

      {/* FAQ Schema */}
      {includeFAQ && faqsToUse.length > 0 && (
        <FAQPageSchema 
          faqs={faqsToUse} 
          url={breadcrumbs && breadcrumbs.length > 0 
            ? breadcrumbs[breadcrumbs.length - 1].url 
            : undefined
          }
        />
      )}

      {/* Review Schema */}
      {includeReviews && testimonials.length > 0 && (
        <>
          {testimonials.map((testimonial, index) => (
            <script
              key={`review-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Review',
                  '@id': `${siteConfig.url}#review-${index + 1}`,
                  author: {
                    '@type': 'Person',
                    name: testimonial.name,
                  },
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: testimonial.rating.toString(),
                    bestRating: '5',
                    worstRating: '1',
                  },
                  reviewBody: testimonial.text,
                  itemReviewed: {
                    '@type': ['LocalBusiness', 'RealEstateAgent'],
                    '@id': `${siteConfig.url}#organization`,
                    name: business.name,
                    url: siteConfig.url,
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: business.address.streetAddress,
                      addressLocality: business.address.addressLocality,
                      addressRegion: business.address.addressRegion,
                      postalCode: business.address.postalCode,
                      addressCountry: business.address.addressCountry,
                    },
                    telephone: business.phone,
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: business.name,
                    '@id': `${siteConfig.url}#organization`,
                  },
                }),
              }}
            />
          ))}
          {/* AggregateRating is already included in LocalBusinessSchema (root layout) - no need for duplicate */}
        </>
      )}
    </>
  );
}

