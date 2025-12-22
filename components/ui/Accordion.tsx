'use client';

import { useState, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg hover:bg-neutral-50 transition-all duration-300 group"
        aria-expanded={isOpen}
      >
        <h3 className={`text-lg font-semibold pr-4 transition-colors ${
          isOpen ? 'text-primary' : 'text-neutral-900 group-hover:text-primary'
        }`}>
          {title}
        </h3>
        <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-primary to-primary-dark text-white transform rotate-180' 
            : 'bg-neutral-100 text-neutral-600 group-hover:bg-primary/10 group-hover:text-primary'
        }`}>
          <svg
            className="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-neutral-700 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

