'use client';

import Link from 'next/link';

interface InternalLink {
  href: string;
  text: string;
  description?: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  className?: string;
}

export function InternalLinks({ 
  title = 'Related Resources', 
  links, 
  className = '' 
}: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={`bg-neutral-50 rounded-lg p-6 border border-neutral-200 ${className}`}>
      <h3 className="text-xl font-bold text-neutral-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="group flex items-start gap-3 text-neutral-700 hover:text-primary transition-colors"
            >
              <svg 
                className="w-5 h-5 mt-0.5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div>
                <span className="font-semibold group-hover:underline">{link.text}</span>
                {link.description && (
                  <p className="text-sm text-neutral-600 mt-1">{link.description}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


