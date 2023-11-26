import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../assets/styles/globals.css";
import HeaderSection from "@/components/section/header-section";
import Link from "next/link";
import NavbarSection from "@/components/section/navbar-section";

const plusJktS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imam Sulthoni - Frontend Developer",
  description: "Welcome to Imam Sulthoni`s web profile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJktS.className}>
        <div className="flex flex-col min-h-screen bg-dark-bg">
          <HeaderSection />
          <NavbarSection />
          <main className="screen-size mt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
