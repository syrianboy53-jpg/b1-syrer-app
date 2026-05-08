export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  screen: string;
  color: string;
}

export const features: Feature[] = [
  {
    id: 'exam',
    icon: '📖',
    title: '5 أقسام امتحان كاملة',
    description: 'قراءة، استماع، كتابة، محادثة، Sprachbausteine — كل قسم مع نماذج مع الإجابات والشرح بالعربي.',
    screen: 'ExamSections',
    color: '#0F7B3E',
  },
  {
    id: 'leben',
    icon: '🇩🇪',
    title: '460 سؤال Leben in Deutschland',
    description: 'اختبار الجنسية الألمانية كاملاً — 300 سؤال عام + أسئلة كل ولاية + وضع امتحان تجريبي حقيقي.',
    screen: 'LebenQuiz',
    color: '#CE1126',
  },
  {
    id: 'citizenship',
    icon: '🏛️',
    title: 'دليل الجنسية الألمانية',
    description: 'قانون 2024 الجديد — 5 سنوات + جنسية مزدوجة. الشروط، الوثائق، الخطوات، التكاليف.',
    screen: 'Citizenship',
    color: '#C9A96E',
  },
  {
    id: 'grammar',
    icon: '📚',
    title: 'قواعد ومفردات بالعربي',
    description: '21 قاعدة B1 مع شرح بالعربي + 350 كلمة مرتّبة في 19 مجالاً يومياً.',
    screen: 'Grammar',
    color: '#3498DB',
  },
  {
    id: 'writing',
    icon: '✍️',
    title: '14 نموذج رسالة جاهز',
    description: 'طبيب، Krankmeldung، شكوى، اعتذار، استفسار شقّة، Bewerbung — انسخ وعدّل.',
    screen: 'WritingTemplates',
    color: '#9B59B6',
  },
  {
    id: 'leveltest',
    icon: '🎯',
    title: 'اختبار تحديد المستوى',
    description: '40 سؤال يحدّد مستواك (A1/A2/B1) ويعطيك خطّة شخصيّة بناءً على نقاط ضعفك.',
    screen: 'LevelTest',
    color: '#E67E22',
  },
  {
    id: 'problems',
    icon: '💡',
    title: '15 مشكلة شائعة + الحل',
    description: 'أكثر مشاكل العرب في B1 (Artikel، Akkusativ، Hören السريع...) مع الحل العملي.',
    screen: 'CommonProblems',
    color: '#F39C12',
  },
  {
    id: 'stories',
    icon: '🌟',
    title: 'تجارب ناجحين قبلك',
    description: 'قصص حقيقية من سوريين اجتازوا B1 — كيف نجحوا، ماذا تعلّموا، نصائحهم لك.',
    screen: 'SuccessStories',
    color: '#27AE60',
  },
  {
    id: 'planner',
    icon: '📅',
    title: 'مخطّط دراسة ذكي',
    description: 'حدّد موعد امتحانك واحصل على عدّ تنازلي + خطّة موزّعة على الأيام المتبقية.',
    screen: 'StudyPlanner',
    color: '#2980B9',
  },
  {
    id: 'achievements',
    icon: '🏆',
    title: 'إنجازات وأوسمة',
    description: '12 وسام للحفاظ على الحماس + خط نار يومي + إحصاءات شخصية.',
    screen: 'Achievements',
    color: '#C9A96E',
  },
  {
    id: 'offline',
    icon: '📱',
    title: 'أوفلاين بالكامل',
    description: 'بعد التثبيت يعمل بدون إنترنت — ادرس في الباص، الميترو، أو في أي مكان.',
    screen: 'Home',
    color: '#0F7B3E',
  },
  {
    id: 'free',
    icon: '💰',
    title: 'مجاني · بدون إعلانات',
    description: 'لا اشتراكات، لا إعلانات، لا بيع بيانات. مفتوح للجميع لأنّ هدفه مساعدة اللاجئين.',
    screen: 'Home',
    color: '#27AE60',
  },
];
