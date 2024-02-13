'use client';

import { MyPhoto } from '@/assets/images';
import '@/assets/styles/animate.css';
import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import Image from 'next/image';

const HeroImage = ({ className }: { className: string }) => {
  return (
    <div className={cn('relative mx-auto w-max', className)}>
      <m.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
        }}
        className="relative h-[8rem] w-[8rem] overflow-hidden rounded-full bg-white p-5 sm:h-[10rem] sm:w-[10rem]">
        <Image
          src={MyPhoto}
          fill
          sizes="100%"
          alt="imam sulthoni character"
          quality={90}
          priority={true}
          className="mt-2 object-cover object-center"
        />
      </m.div>
      <m.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
        }}
        className="rotating10to60deg absolute bottom-0 right-2 z-20 text-3xl sm:right-4 md:right-0 md:text-5xl">
        👋🏼
      </m.span>
    </div>
  );
};

export default HeroImage;
