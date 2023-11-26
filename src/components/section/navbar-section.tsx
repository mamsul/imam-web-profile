import { BookText, PackageOpen, TerminalSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavbarSection = () => {
  return (
    <nav className="screen-size mt-4">
      <ul className="w-full flex flex-wrap gap-6 text-dark-text-primary">
        <Link
          href="/"
          className="font-light tracking-wider text-sm border-b border-dotted border-dark-text-secondary pb-0.5"
        >
          <span className="inline-flex items-center gap-1.5">
            <BookText className="w-3 h-3 md:w-4 md:h-4 text-gray-500" /> Tentang
          </span>
        </Link>
        <Link
          href="/portfolio"
          className="font-light tracking-wider text-sm border-b border-dotted border-dark-text-secondary pb-0.5"
        >
          <span className="inline-flex items-center gap-1.5">
            <PackageOpen className="w-3 h-3 md:w-4 md:h-4 text-gray-500" /> Portofolio
          </span>
        </Link>
        <Link
          href="/playground"
          className="font-light tracking-wider text-sm border-b border-dotted border-dark-text-secondary pb-0.5"
        >
          <span className="inline-flex items-center gap-1.5">
            <TerminalSquare className="w-3 h-3 md:w-4 md:h-4 text-gray-500" /> Playground
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarSection;
