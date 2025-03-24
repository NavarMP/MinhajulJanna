'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';

export function ArticlesContent() {
  const { t, locale } = useI18n();
  const isMalayalam = locale === 'ml';

  return (
    <>
      <h1 className={cn(
        "text-3xl font-bold mb-6",
        isMalayalam && "font-malayalam"
      )}>
        {t('articles')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 shadow">
          <h2 className={cn(
            "text-xl font-semibold mb-2",
            isMalayalam && "font-malayalam"
          )}>
            {isMalayalam ? 'ഉടൻ വരുന്നു' : locale === 'ar' ? 'قريبًا' : 'Coming Soon'}
          </h2>
          <p className={cn(
            "text-muted-foreground",
            isMalayalam && "font-malayalam"
          )}>
            {isMalayalam
              ? 'ലേഖനങ്ങൾ ഉടൻ ലഭ്യമാകും.'
              : locale === 'ar'
                ? 'ستكون المقالات متاحة قريبًا.'
                : 'Articles will be available soon.'}
          </p>
        </div>
      </div>
    </>
  );
}
