import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  'aria-label'?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    href, 
    onClick, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    type = 'button',
    disabled = false,
    loading = false,
    'aria-label': ariaLabel,
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-modern focus:outline-none focus:ring-2 focus:ring-offset-2 hover-lift active:scale-95';
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white hover:shadow-glow focus:ring-primary shadow-depth hover:shadow-glow-lg',
      secondary: 'bg-gradient-to-r from-secondary via-secondary-light to-secondary-dark text-white hover:shadow-glow-secondary focus:ring-secondary shadow-depth',
      outline: 'border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:via-primary-light hover:to-primary-dark hover:text-white hover:border-transparent focus:ring-primary bg-white/80 backdrop-blur-sm hover:shadow-glow',
    };
    
    const sizes = {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
    
    const combinedClassName = [
      baseStyles,
      variants[variant],
      sizes[size],
      disabledStyles,
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
          aria-label={ariaLabel}
          aria-disabled={disabled || loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {children}
            </>
          ) : (
            children
          )}
        </Link>
      );
    }
    
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={type}
        onClick={disabled || loading ? undefined : onClick}
        className={combinedClassName}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

