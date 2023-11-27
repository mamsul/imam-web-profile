import { Tag } from 'lucide-react';
import React from 'react';
import ResumeDate from './resume-date';

interface IResumeRowProps {
  title: string;
  date: string;
  isCustom?: boolean;
  children: React.ReactNode;
}

const ResumeRow = ({
  title,
  date,
  children,
  isCustom = false,
}: IResumeRowProps) => {
  return (
    <div className="flex w-full flex-col items-start border-b border-dark-border pb-6 tracking-wider lg:flex-row">
      <div className="mb-3 w-full lg:mb-0 lg:w-3/12">
        <h3 className="inline-flex items-center text-sm font-bold text-dark-text-primary lg:text-base">
          <Tag className="mr-2 h-3 w-3 lg:hidden" /> {title}
        </h3>
      </div>

      <div className={isCustom ? 'w-full lg:w-9/12' : 'w-full lg:w-7/12'}>
        {children}
      </div>

      {!isCustom && (
        <div className="flex w-full pl-5 lg:w-3/12 lg:justify-end lg:pl-0 xl:w-2/12">
          <ResumeDate date={date} />
        </div>
      )}
    </div>
  );
};

export default ResumeRow;
