'use client';

import React, { createContext, useContext, useState } from 'react';

import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];
type ActiveNavContextType = {
  activeNav: SectionName;
  setActiveNav: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClickTime: number;
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveNavContext = createContext<ActiveNavContextType | null>(
  null,
);

export default function ActiveNavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNav, setActiveNav] = useState<SectionName>('Home');
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  return (
    <ActiveNavContext.Provider
      value={{ activeNav, setActiveNav, lastClickTime, setLastClickTime }}>
      {children}
    </ActiveNavContext.Provider>
  );
}

// Custom hook
export function useActiveNavContext() {
  const context = useContext(ActiveNavContext);

  if (context === null) {
    throw new Error(
      'useActiveNavContect must be use within ActiveNavContextProvider',
    );
  }

  return context;
}
