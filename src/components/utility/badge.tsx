import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'social';
}

const Badge = ({ className, children, variant = 'default' }: BadgeProps) => {
  const badgeStyle = {
    social: 'rounded-3xl border px-1.5 py-1 md:px-3 lg:px-5',
    default: 'rounded-md bg-dark-label-bg px-2 pb-0.5',
  };

  return <div className={cn(badgeStyle[variant], className)}>{children}</div>;
};

export default Badge;
