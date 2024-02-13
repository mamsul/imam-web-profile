'use client';

import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import Link from 'next/link';
import { useActiveNavContext } from '../../context/activeNavContext';

const Header = () => {
  const { activeNav, setActiveNav, setLastClickTime } = useActiveNavContext();

  return (
    <header className="relative z-[999]">
      <m.div
        className={cn(
          'fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white',
          'border-opacity-40 bg-white/60 bg-opacity-80 shadow-lg shadow-black/[0.03]',
          ' backdrop-blur dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:h-[3.25rem] sm:w-[39rem] sm:rounded-full md:top-5',
        )}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}></m.div>

      <nav className="fixed left-1/2 top-[0.80rem] flex h-12 -translate-x-1/2 py-2 sm:top-[0.30rem] sm:h-[initial] sm:py-0 md:top-[1.50rem]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <m.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.path}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                className={cn(
                  'flex w-full items-center justify-center px-4 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-gray-200': activeNav === link.name,
                  },
                )}
                href={link.path}
                onClick={() => {
                  setActiveNav(link.name);
                  setLastClickTime(Date.now());
                }}>
                {link.name}

                {link.name === activeNav && (
                  <m.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#AFC8AD]/30 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                    }}></m.span>
                )}
              </Link>
            </m.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
