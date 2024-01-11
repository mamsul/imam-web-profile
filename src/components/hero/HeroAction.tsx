'use client';

import { cn } from '@/lib/utils';
import { motion as m } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';

const defaultBtnStyle =
  'shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl';

const HeroAction = () => {
  const router = useRouter();

  return (
    <m.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
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
