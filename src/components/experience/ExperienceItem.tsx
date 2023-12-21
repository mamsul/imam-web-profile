'use client';

import { motion as m, useScroll, useTransform } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { useRef } from 'react';

type ExperienceItemProps = {
  item: Experience;
};

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <m.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-200 text-slate-500 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <CheckIcon className="h-5 w-5" />
      </div>
      <div className="w-[calc(100%-4rem)] rounded-lg bg-[#AFC8AD]/50 p-4 md:w-[calc(50%-2.5rem)]">
        <div className="mb-1 flex items-start justify-between space-x-2">
          <div className="flex flex-col text-sm font-medium text-gray-800">
            <span className="inline-flex items-center gap-2">
              {item.title}
              <span className="hidden text-sm italic sm:block">
                ({item.duration})
              </span>
            </span>
            <span className="text-gray-700">{item.subtitle}</span>
            <span className="text-gray-500 sm:hidden">{item.duration}</span>
          </div>
          <time className="text-sm text-gray-600"></time>
        </div>
        <div className="mt-5 text-sm text-gray-700">{item.description}</div>
      </div>
    </m.div>
  );
};

export default ExperienceItem;
