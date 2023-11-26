import { CalendarCheck, Tag } from "lucide-react";
import React from "react";
import ResumeDate from "./resume-date";

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
    <div className="w-full flex flex-col lg:flex-row items-start tracking-wider border-b border-dark-border pb-6">
      <div className="w-full lg:w-3/12 mb-3 lg:mb-0">
        <h3 className="text-sm lg:text-base font-bold text-dark-text-primary inline-flex items-center">
          <Tag className="w-3 h-3 lg:hidden mr-2" /> {title}
        </h3>
      </div>

      <div className={isCustom ? "w-full lg:w-9/12" : "w-full lg:w-7/12"}>
        {children}
      </div>

      {!isCustom && (
        <div className="w-full lg:w-3/12 xl:w-2/12 flex lg:justify-end pl-5 lg:pl-0">
          <ResumeDate date={date} />
        </div>
      )}
    </div>
  );
};

export default ResumeRow;
