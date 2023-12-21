'use client';

import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import { Download, Github, Linkedin, PhoneForwarded } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActiveNavContext } from '../../../context/activeNavContext';
import { Button } from '../Button';

const defaultBtnStyle =
  'shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl';

const HeroAction = () => {
  const router = useRouter();
  const { setActiveNav, setLastClickTime } = useActiveNavContext();

  return (
    <m.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
        <Button
          variant="highlight"
          className={cn(
            'inline-flex items-center text-sm sm:text-base',
            defaultBtnStyle,
          )}
          onClick={() => {
            router.push('#contact');
            setActiveNav('Contact');
            setLastClickTime(Date.now());
          }}>
          Contact Me <PhoneForwarded className="ms-4 h-4 w-4" />
        </Button>
        <Button
          variant="default"
          className={cn(
            'inline-flex items-center text-sm sm:text-base',
            defaultBtnStyle,
          )}
          onClick={() => router.push('/my_resume.pdf')}>
          My Resume <Download className="ms-4 h-4 w-4" />
        </Button>
        <Link href="https://www.linkedin.com/in/imam-sulthoni/" target="_blank">
          <Button
            variant="default"
            className={cn(
              'inline-flex items-center px-3 py-3',
              defaultBtnStyle,
            )}>
            <Linkedin className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://github.com/mamsul" target="_blank">
          <Button
            variant="default"
            className={cn(
              'inline-flex items-center px-3 py-3',
              defaultBtnStyle,
            )}>
            <Github className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </m.div>
  );
};

export default HeroAction;
