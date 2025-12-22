import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Card({ children, href, className = '' }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-primary/20 hover:-translate-y-1';
  
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className} group`}>
        {children}
      </Link>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}

