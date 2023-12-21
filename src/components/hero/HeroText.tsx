'use client';

import { motion as m } from 'framer-motion';

const HeroText = ({ className }: { className: string }) => {
  return (
    <m.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={className}>
      <p className="text-center text-lg leading-normal sm:text-3xl md:leading-[3rem]">
        Hi, I&apos;m Imam. a <strong>Front-End Developer</strong> with{' '}
        <strong>2 years </strong>
        of experience. I&apos;m used to implementing figma designs into code
        from scratch, and currently focusing on <strong>React</strong> and{' '}
        <strong>Next.js</strong>
      </p>
    </m.div>
  );
};

export default HeroText;
