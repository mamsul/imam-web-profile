'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';

const Playground = () => {
  const { ref } = useActiveSectionHook({
    activeNav: 'Playground',
    threshold: 0.9,
  });

  return (
    <div
      ref={ref}
      id="playground"
      className="relative mt-20 flex scroll-mt-20 flex-col items-center sm:mt-28 sm:scroll-mt-28">
      <SectionHeading>Playground</SectionHeading>
      <div className="flex items-center gap-5 sm:gap-10">
        <div className="flex w-1/2 justify-center sm:justify-end">
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="relative h-[7rem] w-[7rem] overflow-hidden p-5 sm:h-[10rem] sm:w-[10rem]">
            <Image
              src="/static/imam-openpeeps-2.png"
              fill
              sizes="100%"
              alt="development ilustration"
              quality={90}
              priority={true}
              className="mt-2 object-contain object-center"
            />
          </m.div>
        </div>

        <div className="flex w-1/2 flex-col">
          <span className="text-lg font-medium sm:text-xl">Sorry guys,</span>
          <span className="text-sm sm:text-base">
            I am still develop the playground section ☕️
          </span>
        </div>
      </div>

      <div
        className={cn(
          'absolute left-[-35rem] top-[-1rem] -z-10 h-[21.25rem] w-[50rem]',
          'rounded-full bg-[#AFC8AD]/80 blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem]',
          'md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
        )}
      />
    </div>
  );
};

export default Playground;
