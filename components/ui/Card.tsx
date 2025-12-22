import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Card({ children, href, className = '' }: CardProps) {
  const baseStyles = 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden';
  
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
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

