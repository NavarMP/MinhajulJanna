'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin as Pin, faPhone as Phone, faEnvelope as Mail} from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import Link from 'next/link';

// Contact information
const contactInfo = {
  phones: ['+91 907 235 8001', '+91 907 235 8002'],
  email: 'minhajuljanna786@gmail.com',
  locations: [
    'Naduvannur',
    'Narikkuni',
    'Poonoor'
  ],
  social: [
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/minhajul_janna_/' },
    { name: 'Youtube', icon: faYoutube, url: 'https://youtube.com/@minhajuljanna' },
    { name: 'WhatsApp', icon: faWhatsapp, url: 'https://whatsapp.com/channel/0029VaxowK2DzgTE7cdK4G11' }
  ]
};

export function ContactSection() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <section className={cn("py-12", isRTL && "text-right")} id="contact">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('contact')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-muted p-8">
            <h3 className="text-xl font-bold">
              {t('contact')}
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FontAwesomeIcon icon={Pin} className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    {t('locations.title')}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {contactInfo.locations.map((location, index) => (
                      <li key={index}>
                        {index === 0
                          ? t('locations.head')
                          : t('locations.branches')[index - 1]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FontAwesomeIcon icon={Phone} className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    {locale === 'ml' ? 'ഫോൺ' : locale === 'en' ? 'Phone' : 'الهاتف'}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {contactInfo.phones.map((phone, index) => (
                      <li key={index}>
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary">
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FontAwesomeIcon icon={Mail} className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    {locale === 'ml' ? 'ഇമെയിൽ' : locale === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  </p>
                  <a href={`mailto:${contactInfo.email}`} className="mt-2 block text-sm text-muted-foreground hover:text-primary">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-muted p-8">
            <h3 className="text-xl font-bold">
              {t('followUs')}
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              {contactInfo.social.map((platform) => (
                <Button
                  key={platform.name}
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={platform.icon} className="h-4 w-4" />
                    {platform.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={cn(
              "text-sm text-muted-foreground text-center md:text-left",
              locale === 'ml' ? 'font-malayalam' : ''
            )}>
              {t('copyright')}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {t('developedBy')}
              </span>
              <a
                href="https://NavarMP.DigiBayt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
              >
                Muhammed Navar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}