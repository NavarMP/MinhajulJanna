'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as Phone, faEnvelope as Mail } from '@fortawesome/free-solid-svg-icons';

const locations = [
  { name: 'Naduvannur', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
  { name: 'Narikkuni', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
  { name: 'Poonoor', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
];

const contactInfo = {
  phones: ['+91 907 235 8001', '+91 907 235 8002'],
  email: 'minhajuljanna786@gmail.com',
};

export default function ContactPage() {
  const { t, locale } = useI18n();
  const isMalayalam = locale === 'ml';

  return (
    <div className="container py-12">
      <h1 className={cn("text-4xl font-bold mb-8 text-center", isMalayalam && "font-malayalam")}>
        {t('contact')}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {locations.map((location, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{location.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl bg-muted p-6">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon icon={Phone} className="mr-2 text-primary" />
            {locale === 'ml' ? 'ഫോൺ' : locale === 'ar' ? 'الهاتف' : 'Phone'}
          </h3>
          <ul className="space-y-2">
            {contactInfo.phones.map((phone, index) => (
              <li key={index}>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-muted p-6">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon icon={Mail} className="mr-2 text-primary" />
            {locale === 'ml' ? 'ഇമെയിൽ' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
          </h3>
          <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
}
