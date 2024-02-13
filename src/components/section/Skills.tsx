'use client';

import {
  BootstrapLogo,
  CssLogo,
  HtmlLogo,
  JavascriptLogo,
  NextjsLogo,
  ReactjsLogo,
  SassLogo,
  TailwindLogo,
  TypescriptLogo,
  VuejsLogo,
} from '@/assets/images';
import { useActiveSectionHook } from '@/lib/hooks';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';

const TechStackWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex h-auto w-full items-center justify-center gap-4">
    {children}
  </div>
);

const Skills = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'Skills', threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="skills"
      className="mt-20 flex scroll-mt-20 flex-col items-center gap-4 sm:mt-28 sm:scroll-mt-28 md:px-14">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-14">
        <TechStackWrapper>
          <Image src={HtmlLogo} alt="html" className="h-12 w-auto md:h-16" />
          <Image src={CssLogo} alt="css" className="h-12 w-auto md:h-16" />
          <Image src={SassLogo} alt="sass" className="h-10 w-auto md:h-14" />
        </TechStackWrapper>
        <TechStackWrapper>
          <Image
            src={TailwindLogo}
            alt="tailwind css"
            className="h-12 w-auto md:h-16"
          />
          <Image
            src={BootstrapLogo}
            alt="bootstrap"
            className="h-12 w-auto md:h-16"
          />
        </TechStackWrapper>
        <TechStackWrapper>
          <Image
            src={JavascriptLogo}
            alt="javascript"
            className="h-12 w-auto md:h-16"
          />
          <Image
            src={TypescriptLogo}
            alt="typescript"
            className="h-12 w-auto md:h-16"
          />
        </TechStackWrapper>
        <TechStackWrapper>
          <Image
            src={ReactjsLogo}
            alt="react.js"
            className="h-12 w-auto md:h-16"
          />
          <Image
            src={NextjsLogo}
            alt="next.js"
            className="h-12 w-auto md:h-16"
          />
          <Image src={VuejsLogo} alt="vue.js" className="h-12 w-auto md:h-16" />
        </TechStackWrapper>
      </div>
    </section>
  );
};

export default Skills;
