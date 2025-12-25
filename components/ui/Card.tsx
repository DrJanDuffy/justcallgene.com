import { ReactNode, CSSProperties, forwardRef } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
  'aria-label'?: string;
}

export const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(
  ({ children, href, className = '', style, onClick, disabled = false, variant = 'default', 'aria-label': ariaLabel }, ref) => {
    const baseStyles = 'bg-white rounded-xl transition-all duration-300 overflow-hidden';
    
    const variantStyles = {
      default: 'shadow-soft hover:shadow-soft-lg border border-neutral-100 hover:border-primary/20 hover:-translate-y-1',
      elevated: 'shadow-soft-lg hover:shadow-glow border border-neutral-200 hover:-translate-y-1',
      outlined: 'shadow-none hover:shadow-soft border-2 border-neutral-200 hover:border-primary/30',
    };
    
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
    const interactiveStyles = href || onClick ? 'cursor-pointer group' : '';
    
    const combinedClassName = [
      baseStyles,
      variantStyles[variant],
      disabledStyles,
      interactiveStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ');
    
    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={combinedClassName}
          style={style}
          aria-label={ariaLabel}
          aria-disabled={disabled}
        >
          {children}
        </Link>
      );
    }
    
    if (onClick) {
      return (
        <div
          ref={ref as React.ForwardedRef<HTMLDivElement>}
          className={combinedClassName}
          style={style}
          onClick={disabled ? undefined : onClick}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={disabled ? undefined : (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }}
          aria-label={ariaLabel}
          aria-disabled={disabled ? 'true' : 'false'}
        >
          {children}
        </div>
      );
    }
    
    return (
      <div
        ref={ref as React.ForwardedRef<HTMLDivElement>}
        className={combinedClassName}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

