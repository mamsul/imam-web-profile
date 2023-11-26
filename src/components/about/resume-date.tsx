import { CalendarCheck } from "lucide-react";
import React from "react";

const ResumeDate = ({ date }: { date: string }) => {
  return (
    <span className="text-xs md:text-sm lg:text-base inline-flex gap-1.5 lg:gap-3 items-center text-dark-text-primary font-medium mt-2">
      <CalendarCheck className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
      {date}
    </span>
  );
};

export default ResumeDate;
