export const locales = ['en', 'ml', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type Messages = {
  home: string;
  posts: string;
  videos: string;
  articles: string;
  admission: string;
  about: string;
  contact: string;
  followUs: string;
  developedBy: string;
  copyright: string;
  locations: {
    head: string;
    title: string;
    branches: string[];
  };
  mudarris: {
    name: string;
    title: string;
  };
  darsName: {
    full: string;
    short: string;
  };
  admissionFeatures: string[];
  search: string;
};

export const messages: Record<Locale, Messages> = {
  en: {
    home: 'Home',
    posts: 'Posts',
    videos: 'Videos',
    articles: 'Articles',
    admission: 'Admission',
    about: 'About Us',
    contact: 'Contact',
    followUs: 'Follow Us',
    developedBy: 'Developed by',
    copyright: '© 2025 Minhajul Janna. All rights reserved.',
    search: 'Search',
    locations: {
      head: 'Koyilandy (Head)',
      title: 'Locations',
      branches: ['Narikkuni', 'Poonoor']
    },
    mudarris: {
      name: 'PP Abdul Jaleel Baqawi Parannoor',
      title: 'Mudarris'
    },
    darsName: {
      full: 'Shaikhuna Parannoor Usthad Smarakha Minhajul Janna Dars',
      short: 'Minhajul Janna'
    },
    admissionFeatures: [
      'Complete education under PP Abdul Jaleel Baqawi Parannoor Usthad',
      'Systematic spiritual care',
      'Intellectual campus of moral reformation',
      'Special training for Tajweed studies',
      'Government approved computer courses',
      'English, Urdu, Arabic spoken faculty'
    ]
  },
  ml: {
    home: 'ഹോം',
    posts: 'പോസ്റ്റുകൾ',
    videos: 'വീഡിയോകൾ',
    articles: 'ലേഖനങ്ങൾ',
    admission: 'പ്രവേശനം',
    about: 'ഞങ്ങളെക്കുറിച്ച്',
    contact: 'ബന്ധപ്പെടുക',
    followUs: 'ഫോളോ ചെയ്യുക',
    developedBy: 'വികസിപ്പിച്ചത്',
    copyright: '© 2025 മിൻഹാജുൽ ജന്ന. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തമാണ്.',
    search: 'തിരയുക',
    locations: {
      head: 'കോയിലാണ്ടി (ഹെഡ്)',
      title: 'സ്ഥലങ്ങൾ',
      branches: ['നരിക്കുനി', 'പൂനൂർ']
    },
    mudarris: {
      name: 'പി.പി അബ്ദുൽ ജലീൽ ബാഖവി പാറന്നൂർ',
      title: 'മുദ്രിസ്'
    },
    darsName: {
      full: 'ശൈഖുന പാറന്നൂർ ഉസ്താദ് സ്മാരക മിൻഹാജുൽ ജന്ന ദർസ്',
      short: 'മിൻഹാജുൽ ജന്ന'
    },
    admissionFeatures: [
      'പി.പി അബ്ദുൽ ജലീൽ ബാഖവി പാറന്നൂർ ഉസ്താദിന്റെ പൂർണ്ണ ശിക്ഷണം',
      'ചിട്ടയായ ആത്മീയ പരിചരണം',
      'ധാർമിക സംസ്കരണത്തിന്റെ ധൈഷണിക ക്യാമ്പസ്',
      'തജ്-വീദ് പഠനത്തിന് പ്രത്യേക പരിശീലനം',
      'ഗവണ്മെന്റ് അംഗീകൃത കമ്പ്യൂട്ടർ കോഴ്സ്',
      'ഇംഗ്ലീഷ്, ഉറുദു, അറബിക് സ്പോക്കൺ ഫാക്കൽറ്റി'
    ]
  },
  ar: {
    home: 'الرئيسية',
    posts: 'المنشورات',
    videos: 'الفيديوهات',
    articles: 'المقالات',
    admission: 'القبول',
    about: 'من نحن',
    contact: 'اتصل بنا',
    followUs: 'تابعنا',
    developedBy: 'تم التطوير بواسطة',
    copyright: '© 2025 منهاج الجنة. جميع الحقوق محفوظة.',
    search: 'بحث',
    locations: {
      head: 'كويلاندي (المقر الرئيسي)',
      title: 'المواقع',
      branches: ['ناريكوني', 'بونور']
    },
    mudarris: {
      name: 'ب.ب عبد الجليل بقوي بارانور',
      title: 'مدرّس'
    },
    darsName: {
      full: 'شيخنا بارانور أستاذ سمركة منهاج الجنة درس',
      short: 'منهاج الجنة'
    },
    admissionFeatures: [
      'تعليم كامل تحت إشراف ب.ب عبد الجليل بقوي بارانور أستاذ',
      'رعاية روحية منهجية',
      'حرم فكري للإصلاح الأخلاقي',
      'تدريب خاص لدراسات التجويد',
      'دورات كمبيوتر معتمدة من الحكومة',
      'هيئة تدريس تتحدث الإنجليزية والأردية والعربية'
    ]
  }
};
