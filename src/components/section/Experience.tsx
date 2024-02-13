'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import SectionHeading from '../SectionHeading';
import ExperienceList from '../experience/ExperienceList';

const Experience = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'Experience' });

  return (
    <div
      ref={ref}
      id="experience"
      className="relative mt-20 flex scroll-mt-20 flex-col items-center gap-4 sm:mt-28 sm:scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>
      <ExperienceList />
      <div
        className={cn(
          'absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem]',
          'rounded-full bg-[#EEE7DA] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem]',
          'md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
        )}
      />
    </div>
  );
};

export default Experience;
