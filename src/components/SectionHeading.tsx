import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-5 text-xl font-semibold sm:mb-8 sm:text-3xl">
      {children}
    </h2>
  );
};

export default SectionHeading;
