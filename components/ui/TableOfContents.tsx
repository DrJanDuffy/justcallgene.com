'use client';

import { useState, useEffect } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all headings in the main content
    const mainContent = document.querySelector('main article, main [role="article"], main .prose');
    if (!mainContent) return;

    const headingElements = mainContent.querySelectorAll('h2, h3, h4');
    const headingData: Heading[] = [];

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
      if (!heading.id && id) {
        heading.id = id;
      }
      headingData.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      });
    });

    setHeadings(headingData);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav 
      className={`bg-white rounded-lg p-6 border border-neutral-200 sticky top-24 ${className}`}
      aria-label="Table of contents"
    >
      <h2 className="text-lg font-bold text-neutral-900 mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left w-full px-3 py-2 rounded-lg transition-colors text-sm ${
                activeId === heading.id
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
              }`}
              style={{ paddingLeft: `${(heading.level - 2) * 1 + 0.75}rem` }}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

