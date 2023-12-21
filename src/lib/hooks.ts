import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveNavContext } from '../../context/activeNavContext';
import { links } from './data';

export const useActiveSectionHook = ({
  activeNav,
  threshold = 0.75,
}: {
  activeNav: (typeof links)[number]['name'];
  threshold?: number;
}) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveNav, lastClickTime } = useActiveNavContext();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveNav(activeNav);
    }
  }, [inView]);

  return { ref };
};
