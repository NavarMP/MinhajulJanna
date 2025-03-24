'use client';

import { Header } from './header';
import { BottomNav } from './bottom-nav';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const CursorEffect = dynamic(() => import('@/components/ui/cursor-effect'), {
  ssr: false,
});

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 pb-16">
        {children}
      </div>
      <BottomNav />
      <CursorEffect />
    </div>
  );
}
