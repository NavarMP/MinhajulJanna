import { NextRequest } from 'next/server';
import { defaultLocale, locales } from './config';

export function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = locales.find(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  return locale || defaultLocale;
}
