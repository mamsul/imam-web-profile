'use client';

import { useActiveSectionHook } from '@/lib/hooks';
import HeroAction from '../hero/HeroAction';
import HeroImage from '../hero/HeroImage';
import HeroText from '../hero/HeroText';

const Hero = () => {
  const { ref } = useActiveSectionHook({ activeNav: 'Home' });

  return (
    <section ref={ref} id="home" className="mt-24 scroll-mt-28 md:mt-28">
      <HeroImage className="mb-8" />
      <HeroText className="mb-10" />

      <HeroAction />
    </section>
  );
};

export default Hero;
