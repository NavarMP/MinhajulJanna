'use client';

import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/i18n-provider';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Home, FileText, Video, BookOpen, UserPlus } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { key: 'home', Icon: Home, path: '/' },
  { key: 'posts', Icon: FileText, path: '/posts' },
  { key: 'videos', Icon: Video, path: '/videos' },
  { key: 'articles', Icon: BookOpen, path: '/articles' },
  { key: 'admission', Icon: UserPlus, path: '/admission' },
];

export function BottomNav() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolling down and not at top, hide the nav
      if (window.scrollY > scrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 z-50 w-full transform transition-transform duration-300 ease-in-out',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <nav className="glass-effect border-t border-border/30 backdrop-blur-lg bg-background/80 dark:bg-background/70 px-2">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ key, Icon, path }) => {
            const isActive = pathname === path ||
                            (path !== '/' && pathname?.startsWith(path));
            return (
              <Link
                key={key}
                href={path}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-lg transition-colors',
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{t(key)}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
