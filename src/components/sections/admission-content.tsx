'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { Features } from '@/components/sections/features';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarAlt as Calendar, faPhone as Phone, faDownload as Download } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function AdmissionContent() {
  const { t, locale } = useI18n();
  const isMalayalam = locale === 'ml';

  return (
    <>
      <section>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className={cn(
            "text-4xl font-bold mb-6",
            isMalayalam && "font-malayalam"
          )}>
            {t('admission')}
          </h1>
          <p className={cn(
            "text-muted-foreground text-lg",
            isMalayalam && "font-malayalam"
          )}>
            {isMalayalam
              ? 'പി.പി അബ്ദുൽ ജലീൽ ബാഖവി പാറന്നൂർ ഉസ്താദിന്റെ മാർഗനിർദേശത്തിൽ സമഗ്രമായ ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിനായി മിൻഹാജുൽ ജന്ന ദർസിൽ ചേരുക.'
              : locale === 'ar'
              ? 'انضم إلى منهاج الجنة درس للحصول على تعليم إسلامي شامل تحت إشراف ب.ب عبد الجليل بقوي بارانور أستاذ.'
              : 'Join Minhajul Janna Dars for a comprehensive Islamic education under the guidance of PP Abdul Jaleel Baqawi Parannoor Usthad.'
            }
          </p>
        </div>

        <Features />
      </section>

      <section className="bg-muted py-12 rounded-2xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className={cn(
                "flex items-center",
                isMalayalam && "font-malayalam"
              )}>
                <FontAwesomeIcon icon={Calendar} className="h-5 w-5 mr-2 text-primary" />
                {isMalayalam ? 'പ്രവേശന കാലയളവ്' : locale === 'ar' ? 'فترة القبول' : 'Admission Period'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn(
                "text-muted-foreground",
                isMalayalam && "font-malayalam"
              )}>
                {isMalayalam
                  ? 'പ്രവേശനം മെയ് മുതൽ ജൂൺ വരെ വാർഷികമായി തുറന്നിരിക്കുന്നു. അടുത്ത അക്കാഡമിക് വർഷത്തിലേക്കുള്ള അപേക്ഷകൾ 2025 മെയ് 1 ന് ആരംഭിക്കും.'
                  : locale === 'ar'
                  ? 'يتم فتح القبول سنويًا من مايو إلى يونيو. ستبدأ طلبات العام الدراسي القادم في 1 مايو 2025.'
                  : 'Admissions are open annually from Ramadan to _.'
                }
              </p>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle className={cn(
                "flex items-center",
                isMalayalam && "font-malayalam"
              )}>
                <Download className="h-5 w-5 mr-2 text-primary" />
                {isMalayalam ? 'അപേക്ഷാ പ്രക്രിയ' : locale === 'ar' ? 'عملية التقديم' : 'Application Process'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn(
                "text-muted-foreground mb-4",
                isMalayalam && "font-malayalam"
              )}>
                {isMalayalam
                  ? 'അപേക്ഷാ ഫോം ഡൗൺലോഡ് ചെയ്യുക അല്ലെങ്കിൽ അപേക്ഷാ ഫോം എടുക്കാൻ ഞങ്ങളുടെ കേന്ദ്രം സന്ദർശിക്കുക.'
                  : locale === 'ar'
                  ? 'قم بتنزيل نموذج الطلب أو قم بزيارة مركزنا للحصول على نموذج الطلب.'
                  : 'Download the application form or visit our center to pick up an application form.'
                }
              </p>
              <Button className="w-full">
                <span className={cn(isMalayalam && "font-malayalam")}>
                  {isMalayalam ? 'അപേക്ഷാ ഫോം ഡൗൺലോഡ് ചെയ്യുക' : locale === 'ar' ? 'تنزيل نموذج الطلب' : 'Download Application Form'}
                </span>
              </Button>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <CardTitle className={cn(
                "flex items-center",
                isMalayalam && "font-malayalam"
              )}>
                <FontAwesomeIcon icon={Phone} className="h-5 w-5 mr-2 text-primary" />
                {isMalayalam ? 'ബന്ധപ്പെടുക' : locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className={cn(
                  "font-medium",
                  isMalayalam && "font-malayalam"
                )}>
                  {isMalayalam ? 'ഫോൺ:' : locale === 'ar' ? 'هاتف:' : 'Phone:'}
                </p>
                <a href="tel:+919072358001" className="text-muted-foreground hover:text-primary">
                  +91 907 235 8001
                </a>
              </div>
              <div>
                <p className={cn(
                  "font-medium",
                  isMalayalam && "font-malayalam"
                )}>
                  {isMalayalam ? 'ഇമെയിൽ:' : locale === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}
                </p>
                <a href="mailto:minhajuljanna786@gmail.com" className="text-muted-foreground hover:text-primary">
                  minhajuljanna786@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className={cn(
          "text-2xl font-bold mb-6",
          isMalayalam && "font-malayalam"
        )}>
          {isMalayalam ? 'അപേക്ഷിക്കാൻ തയ്യാറാണോ?' : locale === 'ar' ? 'مستعد للتقديم؟' : 'Ready to Apply?'}
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="tel:+919072358001">
              <span className={cn(isMalayalam && "font-malayalam")}>
                {isMalayalam ? 'ഇപ്പോൾ വിളിക്കുക' : locale === 'ar' ? 'اتصل الآن' : 'Call Now'}
              </span>
            </Link>
          </Button>
          {/* <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <span className={cn(isMalayalam && "font-malayalam")}>
                {isMalayalam ? 'ഞങ്ങളെ സന്ദർശിക്കുക' : locale === 'ar' ? 'قم بزيارتنا' : 'Visit Us'}
              </span>
            </Link>
          </Button> */}
        </div>
      </section>
    </>
  );
}
