import { experiences } from '@/lib/data';
import { cn } from '@/lib/utils';
import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  return (
    <div
      className={cn(
        'relative w-full space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full',
        'before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent',
        'before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0',
      )}>
      {experiences.map((item, idx) => {
        return <ExperienceItem key={`exp-${idx}`} item={item} />;
      })}
    </div>
  );
};

export default ExperienceList;
