import HeaderSection from '@/components/section/header-section';
import NavbarSection from '@/components/section/navbar-section';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../assets/styles/globals.css';

const plusJktS = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imam Sulthoni - Frontend Developer',
  description: 'Welcome to Imam Sulthoni`s web profile.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJktS.className}>
        <div className="flex min-h-screen flex-col bg-dark-bg">
          <HeaderSection />
          <NavbarSection />
          <main className="screen-size mt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
