import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ActiveNavContextProvider from '../../context/activeNavContext';
import '../assets/styles/globals.css';

const plusJktS = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imam Sulthoni | Frontend Developer',
  description:
    'Imam Sulthoni is a Frontend Developer with 2 years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          plusJktS.className,
          'relative bg-gray-100 text-gray-700',
        )}>
        <div
          className={cn(
            'absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full',
            'bg-[#AFC8AD] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]',
          )}
        />
        <div
          className={cn(
            'absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem]',
            'rounded-full bg-[#EEE7DA] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem]',
            'md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
          )}
        />

        <ActiveNavContextProvider>
          <Header />
          <div className="mx-auto w-full px-5 md:max-w-3xl lg:px-0">
            {children}
          </div>

          <Toaster position="top-right" />
        </ActiveNavContextProvider>

        <Analytics />
      </body>
    </html>
  );
}
