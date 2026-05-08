export interface CommonProblem {
  id: number;
  title: string;
  icon: string;
  problem: string;
  solution: string;
  examples: string[];
}

export const commonProblems: CommonProblem[] = [
  {
    id: 1,
    title: 'أدوات التعريف (Artikel)',
    icon: '🔤',
    problem: 'نسيان der/die/das أو استخدام الأداة الخاطئة.',
    solution: 'احفظ كل كلمة جديدة مع أداتها. استخدم ألواناً: أزرق = der، أحمر = die، أخضر = das.',
    examples: ['der Tisch (الطاولة)', 'die Lampe (المصباح)', 'das Buch (الكتاب)'],
  },
  {
    id: 2,
    title: 'Akkusativ و Dativ',
    icon: '📐',
    problem: 'الخلط بين حالة النصب والجر، خصوصاً مع حروف الجر المتغيرة.',
    solution: 'Wohin? → Akkusativ (حركة). Wo? → Dativ (مكان ثابت). احفظ حروف الجر الثابتة.',
    examples: [
      'Ich gehe in die Schule. (Akk. - إلى أين؟)',
      'Ich bin in der Schule. (Dat. - أين؟)',
    ],
  },
  {
    id: 3,
    title: 'الاستماع السريع (Hören)',
    icon: '🎧',
    problem: 'المتحدثون يتكلمون بسرعة ولا تفهم كل شيء.',
    solution: 'لا تحاول فهم كل كلمة. ركّز على الكلمات المفتاحية. استمع يومياً لـ DW أو بودكاست ألماني.',
    examples: [
      'استمع 15 دقيقة يومياً',
      'أعد الاستماع 3 مرات لنفس المقطع',
      'اكتب الكلمات الجديدة',
    ],
  },
  {
    id: 4,
    title: 'ترتيب الجملة',
    icon: '🔀',
    problem: 'الفعل لا يكون في المكان الصحيح، خصوصاً في الجمل الفرعية.',
    solution: 'الجملة الرئيسية: الفعل في المركز الثاني. الجملة الفرعية (weil, dass, wenn): الفعل في النهاية.',
    examples: [
      'Ich lerne Deutsch. (فعل ثاني)',
      'Ich lerne Deutsch, weil ich hier lebe. (فعل آخر)',
    ],
  },
  {
    id: 5,
    title: 'الكتابة — عدد الكلمات',
    icon: '✍️',
    problem: 'كتابة أقل من 80 كلمة أو عدم الإجابة على كل النقاط.',
    solution: 'احفظ 5 عبارات افتتاحية + 5 عبارات ختامية. أجب على كل نقطة بـ 2-3 جمل.',
    examples: [
      'Sehr geehrte Damen und Herren, ...',
      'Mit freundlichen Grüßen',
      'Ich schreibe Ihnen, weil ...',
    ],
  },
];
