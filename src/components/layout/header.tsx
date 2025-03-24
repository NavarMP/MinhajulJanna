'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { Locale, locales } from '@/i18n/config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe as Globe } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { SearchDialog } from '@/components/ui/search-dialog';
import { useEffect, useState } from 'react';

export function Header() {
  const { locale, setLocale, t } = useI18n();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const languageNames: Record<Locale, string> = {
    en: 'English',
    ml: 'മലയാളം',
    ar: 'العربية'
  };

  useEffect(() => {
    const handleScroll = () => {
      // If scrolling down and not at top, hide the header
      if (window.scrollY > scrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg transition-transform duration-300 ease-in-out",
        isVisible ? 'header-show' : 'header-hide'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <Image
                src="/logo.svg"
                alt="Minhajul Janna Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span
              className={cn(
                "font-bold text-xl hidden sm:inline-block",
                locale === 'ar' ? 'font-arabic' : '',
                locale === 'ml' ? 'font-malayalam' : ''
              )}
            >
              {t('darsName.short')}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <SearchDialog />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={Globe} className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((l) => (
                <DropdownMenuItem
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={cn(
                    locale === l ? "bg-muted" : "",
                    l === 'ar' ? 'font-arabic' : '',
                    l === 'ml' ? 'font-malayalam' : ''
                  )}
                >
                  {languageNames[l]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
