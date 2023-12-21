'use client';

import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import Image from 'next/image';

const HeroImage = ({ className }: { className: string }) => {
  return (
    <div className={cn('flex justify-center', className)}>
      <m.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[8rem] w-[8rem] overflow-hidden rounded-full bg-white p-5 sm:h-[10rem] sm:w-[10rem]">
        <Image
          src="/static/imam-openpeeps.png"
          fill
          sizes="100%"
          alt="imam sulthoni character"
          quality={90}
          priority={true}
          className="mt-2 object-contain object-center"
        />
      </m.div>
    </div>
  );
};

export default HeroImage;
