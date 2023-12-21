import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'highlight';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    const styleVariant = {
      default: 'rounded-full bg-white px-5 py-2 shadow',
      highlight: 'rounded-full bg-gray-800 px-5 py-2 text-white',
    };

    return (
      <button
        className={cn(styleVariant[variant], className)}
        {...props}
        ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
