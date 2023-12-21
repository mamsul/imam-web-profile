'use client';

import { skills } from '@/lib/data';
import { useActiveSectionHook } from '@/lib/hooks';
import SectionHeading from '../SectionHeading';

import { motion as m } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'Skills', threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="skills"
      className="mt-20 flex scroll-mt-20 flex-col items-center gap-4 sm:mt-28 sm:scroll-mt-28 md:px-14">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex list-none flex-wrap justify-center gap-3 sm:gap-5">
        {skills.map((skill, idx) => {
          return (
            <m.li
              key={`skill-${idx}`}
              className="rounded-lg bg-white px-3 py-1.5 text-sm text-gray-500 shadow transition-all duration-200 hover:-translate-y-2 hover:scale-110 sm:text-base"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={idx}>
              {skill}
            </m.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
