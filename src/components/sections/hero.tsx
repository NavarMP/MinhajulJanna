'use client';

import { useI18n } from '@/i18n/i18n-provider';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight as ArrowRight, faArrowLeft as ArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const locationImages = [
  {
    id: 'Naduvannur',
    src: 'images/Naduvannur.jpg/',
    alt: 'Naduvannur',
    mapUrl: 'https://maps.app.goo.gl/BYZHabQxUYFXC7Kq7'
  },
  {
    id: 'narikkuni',
    src: 'images/narikkuni.jpg/',
    alt: 'Narikkuni',
    mapUrl: 'https://maps.app.goo.gl/xD3xHCh1UmSB4djK6'
  },
  {
    id: 'poonoor',
    src: 'images/poonoor.jpg/',
    alt: 'Poonoor',
    mapUrl: 'https://maps.app.goo.gl/YhCFU8WCFeAffRH8A'
  },
];

export function Hero() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';
  const isMalayalam = locale === 'ml';

  return (
    <section className={cn("relative overflow-hidden bg-background py-20 md:py-32",
      isRTL && "text-right"
    )}>
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h1 className={cn(
              "text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl",
              isRTL && "font-arabic",
              isMalayalam && "font-malayalam"
            )}>
              {t('darsName.short')}
            </h1>
            <p className={cn(
              "text-lg text-muted-foreground",
              isMalayalam && "font-malayalam"
            )}>
              {t('darsName.full')}
            </p>
            <div className="mt-4">
              <p className={cn(
                "text-md font-semibold",
                isMalayalam && "font-malayalam"
              )}>
                {t('mudarris.title')}:
              </p>
              <p className={cn(
                "text-xl font-medium",
                isRTL && "font-arabic",
                isMalayalam && "font-malayalam"
              )}>
                {t('mudarris.name')}
              </p>
            </div>
            <div className="flex pt-2">
              <Link href="/admission">
                <Button className="group">
                  <span className={cn(isMalayalam && "font-malayalam")}>
                    {t('admission')}
                  </span>
                  <FontAwesomeIcon icon={ArrowRight} className={cn(
                    "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1",
                    isRTL && "rotate-180 mr-2 ml-0 group-hover:-translate-x-1"
                  )} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3000 })]} // Auto-scroll every 3 seconds
            >
              <CarouselContent>
                {locationImages.map((img, index) => (
                  <CarouselItem key={img.id}>
                    <Link href={img.mapUrl} target="_blank" rel="noopener noreferrer">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl hover:opacity-80 transition-opacity">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 p-4 text-white">
                            <h3 className={cn(
                              "text-lg font-medium",
                              isMalayalam && "font-malayalam"
                            )}>
                              {img.alt}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}