// Footer.tsx
'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin as Pin, faPhone as Phone, faEnvelope as Mail } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

// Contact information
const contactInfo = {
  phones: ['+91 907 235 8001', '+91 907 235 8002'],
  email: 'minhajuljanna786@gmail.com',
  locations: [
    { 
      name: 'Naduvannur',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7819.838505266672!2d75.76825084563728!3d11.485749954837706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba663aea43f3473%3A0x6fa0e6f3eadb57c0!2sNaduvannur%2C%20Kerala%20673614!5e0!3m2!1sen!2sin!4v1743580532072!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    },
    { 
      name: 'Narikkuni',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5541602787666!2d75.85991982608152!3d11.367239938819761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66785d674a927%3A0x9a81f2e9ec163c2d!2sNarikkuni%2C%20Kerala%20673585!5e0!3m2!1sen!2sin!4v1743580472650!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    },
    { 
      name: 'Poonoor',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7821.242870864435!2d75.89838264563495!3d11.434999105026538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668a13022f997%3A0xacfe4f6358b83a41!2sPoonoor%2C%20Kerala%20673574!5e0!3m2!1sen!2sin!4v1743580628163!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    }],
  social: [
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/minhajul_janna_/' },
    { name: 'Youtube', icon: faYoutube, url: 'https://youtube.com/@minhajuljanna' },
    { name: 'WhatsApp', icon: faWhatsapp, url: 'https://whatsapp.com/channel/0029VaxowK2DzgTE7cdK4G11' }
  ]
};

export function Footer() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <footer className={cn("border-t border-border/50 pt-8", isRTL && "text-right")}>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">{location.name}</h3>
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FontAwesomeIcon icon={Phone} className="h-5 w-5 text-primary" />
              </div>
              <div>
                {/* <p className="font-medium">
                  {locale === 'ml' ? 'ഫോൺ' : locale === 'en'  ? 'Phone' : 'الهاتف'}
                </p> */}
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
                {/* <p className="font-medium">
                  {locale === 'ml' ? 'ഇമെയിൽ' : locale === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </p> */}
                <a href={`mailto:${contactInfo.email}`} className="mt-2 block text-sm text-muted-foreground hover:text-primary">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FontAwesomeIcon icon={Pin} className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">
                  {t('locations.title')}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {contactInfo.locations.map((location, index) => (
                    <li key={index}>{location.name}</li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>

          <div className="flex justify-center flex-wrap gap-4">
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
    </footer>
  );
}