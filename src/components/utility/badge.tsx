import React, { ReactNode } from "react";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div className={`rounded-3xl border py-1 px-1.5 md:px-3 lg:px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
