export interface ExamSection {
  id: string;
  titleDE: string;
  titleAR: string;
  icon: string;
  description: string;
  duration: string;
  tips: string[];
}

export const examSections: ExamSection[] = [
  {
    id: 'lesen',
    titleDE: 'Lesen',
    titleAR: 'القراءة',
    icon: '📖',
    description: 'فهم نصوص مختلفة: إعلانات، رسائل، مقالات صحفية. 5 أجزاء مع 30 سؤال.',
    duration: '65 دقيقة',
    tips: [
      'اقرأ الأسئلة أولاً قبل النص',
      'ابحث عن الكلمات المفتاحية',
      'لا تحتاج فهم كل كلمة',
      'انتبه للكلمات السلبية: nicht, kein, nie',
    ],
  },
  {
    id: 'hoeren',
    titleDE: 'Hören',
    titleAR: 'الاستماع',
    icon: '🎧',
    description: 'فهم محادثات ورسائل صوتية وإعلانات. 4 أجزاء مع 30 سؤال.',
    duration: '40 دقيقة',
    tips: [
      'اقرأ الأسئلة قبل التشغيل',
      'ركّز على الكلمات المفتاحية',
      'لا تتوقف عند كلمة لم تفهمها',
      'استمع لنبرة الصوت (إيجابي/سلبي)',
    ],
  },
  {
    id: 'schreiben',
    titleDE: 'Schreiben',
    titleAR: 'الكتابة',
    icon: '✍️',
    description: 'كتابة رسالة شخصية أو رسمية + تعبير عن رأي. 3 أجزاء.',
    duration: '60 دقيقة',
    tips: [
      'ابدأ بـ Sehr geehrte/Liebe',
      'أجب على كل النقاط المطلوبة',
      'اكتب 80 كلمة على الأقل',
      'راجع القواعد والإملاء في النهاية',
    ],
  },
  {
    id: 'sprechen',
    titleDE: 'Sprechen',
    titleAR: 'المحادثة',
    icon: '🗣️',
    description: 'التحدث مع شريك: تخطيط مشترك + عرض موضوع + التفاعل. 3 أجزاء.',
    duration: '15 دقيقة',
    tips: [
      'تحدث بوضوح وهدوء',
      'استخدم عبارات ربط: außerdem, deshalb, trotzdem',
      'اطرح أسئلة على شريكك',
      'لا تحفظ نصاً — تحدث بشكل طبيعي',
    ],
  },
  {
    id: 'sprachbausteine',
    titleDE: 'Sprachbausteine',
    titleAR: 'البنية اللغوية',
    icon: '🧩',
    description: 'ملء فراغات في نص برسالة أو نص رسمي. اختيار الكلمة الصحيحة.',
    duration: '15 دقيقة',
    tips: [
      'اقرأ النص كاملاً أولاً',
      'انتبه للقواعد: حروف الجر، الأزمنة',
      'تحقق أن الجملة منطقية بعد الإدخال',
      'تدرب على Konnektoren كثيراً',
    ],
  },
];
