'use client';

import { useI18n } from '@/i18n/i18n-provider';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Placeholder image for the mudarris (replace with actual image later)
const mudarrisImage = '/images/mudarris.avif';

export function AboutSection() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';
  const isMalayalam = locale === 'ml';

  return (
    <section className={cn("py-12", isRTL && "text-right")} id="about">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            isMalayalam && "font-malayalam"
          )}>
            {t('about')}
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-primary/20 shadow-xl lg:order-last">
            <Image
              src={mudarrisImage}
              alt={t('mudarris.name')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className={cn(
              "text-2xl font-bold tracking-tight sm:text-3xl",
              isRTL && "font-arabic",
              isMalayalam && "font-malayalam"
            )}>
              {t('mudarris.name')}
            </h3>
            <p className={cn(
              "text-lg text-muted-foreground",
              isMalayalam && "font-malayalam"
            )}>
              {t('mudarris.title')}
            </p>

            <div className="space-y-4">
              <p className={cn(
                "text-muted-foreground",
                isRTL && "font-arabic",
                isMalayalam && "font-malayalam"
              )}>
                {/* Replace this with actual content */}
                {locale === 'ml' ?
                  'പി.പി അബ്ദുൽ ജലീൽ ബാഖവി പാറന്നൂർ ഉസ്താദ് സുപ്രസിദ്ധ പണ്ഡിതനും, ആധ്യാത്മിക ഗുരുവുമാണ്. മിൻഹാജുൽ ജന്ന ദർസിന്റെ സ്ഥാപകനായ അദ്ദേഹം വിദ്യാർത്ഥികൾക്ക് മതപരവും ധാർമികവുമായ വിദ്യാഭ്യാസം നൽകുന്നതിൽ സമർപ്പിതനാണ്.' :
                locale === 'en' ?
                  'PP Abdul Jaleel Baqawi Parannoor Usthad is a renowned scholar and spiritual mentor. As the founder of Minhajul Janna Dars, he is dedicated to providing students with religious and moral education.' :
                  'ب.ب عبد الجليل بقوي بارانور أستاذ هو عالم ومرشد روحي مشهور. كمؤسس لمنهاج الجنة درس، يكرس جهده لتزويد الطلاب بالتعليم الديني والأخلاقي.'
                }
              </p>
              <p className={cn(
                "text-muted-foreground",
                isRTL && "font-arabic",
                isMalayalam && "font-malayalam"
              )}>
                {/* Replace this with actual content */}
                {locale === 'ml' ?
                  'അദ്ദേഹത്തിന്റെ മാർഗനിർദ്ദേശത്തിൽ, മിൻഹാജുൽ ജന്ന ദർസ് വിദ്യാർത്ഥികളെ ആത്മീയവും ബൗദ്ധികവുമായി വളർത്തുന്നതിനുള്ള ഒരു കേന്ദ്രമായി മാറിയിരിക്കുന്നു, ഇസ്ലാമിക പാരമ്പര്യത്തിന്റെ സമൃദ്ധമായ അറിവ് പരമ്പരാഗത പാഠ്യക്രമവുമായി ഇണക്കി സമകാലിക ലോകത്തിന് പ്രസക്തമായ രീതിയിൽ പഠിപ്പിക്കുന്നു.' :
                locale === 'en' ?
                  'Under his guidance, Minhajul Janna Dars has become a center for nurturing students spiritually and intellectually, blending the rich knowledge of Islamic tradition with a traditional curriculum taught in a way that is relevant to the contemporary world.' :
                  'تحت إرشاده، أصبح منهاج الجنة درس مركزًا لرعاية الطلاب روحياً وفكرياً، يمزج بين المعرفة الغنية للتقاليد الإسلامية مع منهج تقليدي يُدرس بطريقة ذات صلة بالعالم المعاصر.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
