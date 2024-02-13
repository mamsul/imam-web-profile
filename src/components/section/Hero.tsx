'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import HeroAction from '../hero/HeroAction';
import HeroImage from '../hero/HeroImage';
import HeroText from '../hero/HeroText';

const Hero = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'Home' });

  return (
    <section ref={ref} id="home" className="mt-28 scroll-mt-28 md:mt-44">
      <HeroImage className="mb-20" />
      <HeroText className="mb-16" />

      <HeroAction />
    </section>
  );
};

export default Hero;
