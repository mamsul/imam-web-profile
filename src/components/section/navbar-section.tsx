import { BookText, PackageOpen, TerminalSquare } from 'lucide-react';
import Link from 'next/link';

const NavbarSection = () => {
  return (
    <nav className="screen-size mt-4">
      <ul className="flex w-full flex-wrap gap-6 text-dark-text-primary">
        <li>
          <Link
            href="/"
            className="border-b border-dotted border-dark-text-secondary pb-0.5 text-sm font-light tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <BookText className="h-3 w-3 text-gray-500 md:h-4 md:w-4" />{' '}
              Tentang
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="border-b border-dotted border-dark-text-secondary pb-0.5 text-sm font-light tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <PackageOpen className="h-3 w-3 text-gray-500 md:h-4 md:w-4" />{' '}
              Portofolio
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/playground"
            className="border-b border-dotted border-dark-text-secondary pb-0.5 text-sm font-light tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <TerminalSquare className="h-3 w-3 text-gray-500 md:h-4 md:w-4" />{' '}
              Playground
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSection;
