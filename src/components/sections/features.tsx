'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook as Book,
  faHeart as Heart,
  faLightbulb as Bulb,
  faBookmark as Bookmark,
  faLaptop as Laptop,
  faGlobe as Globe
} from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { messages } from '@/i18n/config';

const featureIcons = [
  Book,
  Heart,
  Bulb,
  Bookmark,
  Laptop,
  Globe
];

export function Features() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';
  const isMalayalam = locale === 'ml';
  const features = messages[locale].admissionFeatures;

  return (
    <section className={cn("py-12", isRTL && "text-right")} id="features">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            isMalayalam && "font-malayalam"
          )}>
            {t('Features')}
          </h2>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground",
            isMalayalam && "font-malayalam"
          )}>
            {/* {locale === 'ml' ? 'പ്രത്യേകതകൾ' : locale === 'en' ? 'Features' : 'المميزات'} */}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FontAwesomeIcon icon={Icon} className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className={cn(
                    "text-lg",
                    isRTL && "font-arabic",
                    isMalayalam && "font-malayalam"
                  )}>
                    {index + 1}. {locale === 'ml' ? 'സവിശേഷത' : locale === 'en' ? 'Feature' : 'ميزة'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={cn(
                    "text-muted-foreground",
                    isRTL && "font-arabic",
                    isMalayalam && "font-malayalam"
                  )}>
                    {feature}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
