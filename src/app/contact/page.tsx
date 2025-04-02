'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone as Phone, faEnvelope as Mail } from '@fortawesome/free-solid-svg-icons';

const locations = [
  { name: 'Naduvannur', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7819.838505266672!2d75.76825084563728!3d11.485749954837706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba663aea43f3473%3A0x6fa0e6f3eadb57c0!2sNaduvannur%2C%20Kerala%20673614!5e0!3m2!1sen!2sin!4v1743580532072!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"' },
  { name: 'Narikkuni', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.5541602787666!2d75.85991982608152!3d11.367239938819761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66785d674a927%3A0x9a81f2e9ec163c2d!2sNarikkuni%2C%20Kerala%20673585!5e0!3m2!1sen!2sin!4v1743580472650!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"' },
  { name: 'Poonoor', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7821.242870864435!2d75.89838264563495!3d11.434999105026538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668a13022f997%3A0xacfe4f6358b83a41!2sPoonoor%2C%20Kerala%20673574!5e0!3m2!1sen!2sin!4v1743580628163!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"' },
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
