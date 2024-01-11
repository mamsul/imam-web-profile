import About from '@/components/section/About';
import Experience from '@/components/section/Experience';
import Hero from '@/components/section/Hero';
import Playground from '@/components/section/Playground';
import Skills from '@/components/section/Skills';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Playground />
      <footer className="mt-20 w-full sm:mt-28">
        <div className="flex w-full flex-col items-center justify-center border-t border-gray-300 py-5">
          <a
            href="mailto:imamsulthoni.amd@gmailcom"
            className="text-sm underline-offset-4 hover:underline sm:text-base md:text-lg">
            imamsulthoni.amd@gmail.com
          </a>
          <div className="mt-3 flex gap-4 sm:mt-5">
            <a href="https://www.instagram.com/imamsulthon.i/" target="_blank">
              <Instagram className="h-4 w-4 sm:h-6 sm:w-6" />
            </a>
            <a href="https://github.com/mamsul" target="_blank">
              <Github className="h-4 w-4 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/imam-sulthoni/"
              target="_blank">
              <Linkedin className="h-4 w-4 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
