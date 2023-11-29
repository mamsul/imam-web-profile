import { cn } from '@/lib/utils';
import React from 'react';

interface IPortfolioCard {
  children: React.ReactNode;
  className?: string;
}

const PortfolioCard = ({ children, className }: IPortfolioCard) => {
  return (
    <div
      className={cn(
        'w-max rounded-md border border-dark-border bg-white/5 p-5 text-dark-text-primary backdrop-blur-sm',
        className,
      )}>
      {children}
    </div>
  );
};

export default PortfolioCard;
