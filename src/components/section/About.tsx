'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import { motion as m } from 'framer-motion';
import SectionHeading from '../SectionHeading';
const About = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'About' });

  return (
    <m.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-20 flex scroll-mt-20 flex-col items-center sm:mt-28 sm:scroll-mt-28"
      id="about">
      <SectionHeading>Get to Know Me</SectionHeading>

      <p className="text-justify text-sm sm:text-lg">
        I had started the first step of my career in the internship program
        provided by my campus, I carried out an internship program at one of the
        software houses in Bandung, called Bigio. Since then, my interest in
        becoming a Frontend Developer began to emerge because I like to
        implement UI designs into code. After graduating I worked in a company
        engaged in the travel sector, Agtran Sdn. Bhd. as a Frontend Developer
        for about 1 year (2021 - 2022). Then moved to a company engaged in the
        fisheries sector, especially the cold storage warehouse chain, Fishlog,
        also as a Frontend Developer for approximately 1 year from 2022 to 2023.
      </p>
      <p className="mt-5 text-justify text-sm sm:text-lg">
        While working as a Frontend Developer, I really enjoy finding solutions
        to problems in Frontend Development sector. With my current core stack
        is React, Next.js, Vue and Nuxt.js. Beyond that, I&apos;m also
        interested in learning new things that will be hype in the next few
        years, such as AI and Machine Learning.
      </p>
    </m.section>
  );
};

export default About;
