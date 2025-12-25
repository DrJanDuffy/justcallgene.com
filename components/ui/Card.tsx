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
    const baseStyles = 'bg-white/90 backdrop-blur-sm rounded-2xl transition-modern overflow-hidden';
    
    const variantStyles = {
      default: 'shadow-soft hover:shadow-depth-lg border border-neutral-100/50 hover:border-primary/30 hover-lift',
      elevated: 'shadow-depth hover:shadow-glow border border-neutral-200/50 hover-lift',
      outlined: 'shadow-none hover:shadow-soft border-2 border-neutral-200 hover:border-primary/40 bg-white/80 backdrop-blur-sm',
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

