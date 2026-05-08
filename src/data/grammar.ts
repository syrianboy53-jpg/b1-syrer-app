export interface GrammarRule {
  id: number;
  titleDE: string;
  titleAR: string;
  explanation: string;
  examples: { de: string; ar: string }[];
}

export const grammarRules: GrammarRule[] = [
  {
    id: 1,
    titleDE: 'Konjunktiv II',
    titleAR: 'صيغة الشرط (Konjunktiv II)',
    explanation: 'تُستخدم للتعبير عن أمنيات أو مواقف غير حقيقية أو طلبات مهذبة. تُبنى من الفعل المساعد "würde" + المصدر، أو أشكال خاصة مثل: wäre, hätte, könnte.',
    examples: [
      { de: 'Ich würde gerne nach Berlin fahren.', ar: 'أحب أن أسافر إلى برلين.' },
      { de: 'Wenn ich reich wäre, würde ich ein Haus kaufen.', ar: 'لو كنت غنياً، لاشتريت منزلاً.' },
      { de: 'Könnten Sie mir bitte helfen?', ar: 'هل يمكنك مساعدتي من فضلك؟' },
    ],
  },
  {
    id: 2,
    titleDE: 'Relativsätze',
    titleAR: 'الجمل الموصولة (Relativsätze)',
    explanation: 'جمل تُستخدم لوصف اسم أو ضمير في الجملة الرئيسية. تبدأ بضمير موصول (der, die, das, dem, den) حسب الجنس والحالة الإعرابية.',
    examples: [
      { de: 'Das ist der Mann, der mir geholfen hat.', ar: 'هذا الرجل الذي ساعدني.' },
      { de: 'Die Frau, die dort steht, ist meine Lehrerin.', ar: 'المرأة التي تقف هناك هي معلمتي.' },
    ],
  },
  {
    id: 3,
    titleDE: 'Passiv',
    titleAR: 'المبني للمجهول (Passiv)',
    explanation: 'يُستخدم عندما يكون الفعل أهم من الفاعل. يُبنى من "werden" + التصريف الثالث (Partizip II).',
    examples: [
      { de: 'Das Haus wird gebaut.', ar: 'يُبنى المنزل.' },
      { de: 'Die Tür wurde geöffnet.', ar: 'فُتح الباب.' },
    ],
  },
  {
    id: 4,
    titleDE: 'Nebensätze mit "weil", "dass", "obwohl"',
    titleAR: 'الجمل الفرعية مع weil, dass, obwohl',
    explanation: 'في الجمل الفرعية يذهب الفعل المصرّف إلى نهاية الجملة. weil = لأن، dass = أن، obwohl = بالرغم من أن.',
    examples: [
      { de: 'Ich lerne Deutsch, weil ich in Deutschland lebe.', ar: 'أتعلم الألمانية لأنني أعيش في ألمانيا.' },
      { de: 'Ich glaube, dass er morgen kommt.', ar: 'أعتقد أنه سيأتي غداً.' },
      { de: 'Obwohl es regnet, gehe ich spazieren.', ar: 'بالرغم من المطر، أذهب للتمشية.' },
    ],
  },
  {
    id: 5,
    titleDE: 'Präpositionen mit Dativ und Akkusativ',
    titleAR: 'حروف الجر مع Dativ و Akkusativ',
    explanation: 'بعض حروف الجر تأخذ Dativ دائماً (aus, bei, mit, nach, seit, von, zu)، وبعضها Akkusativ (durch, für, gegen, ohne, um). وبعضها يتغير حسب السؤال: أين (Dativ) أو إلى أين (Akkusativ): an, auf, hinter, in, neben, über, unter, vor, zwischen.',
    examples: [
      { de: 'Ich gehe in die Schule. (Akkusativ - Wohin?)', ar: 'أذهب إلى المدرسة.' },
      { de: 'Ich bin in der Schule. (Dativ - Wo?)', ar: 'أنا في المدرسة.' },
    ],
  },
  {
    id: 6,
    titleDE: 'Infinitiv mit "zu"',
    titleAR: 'المصدر مع "zu"',
    explanation: 'يُستخدم بعد أفعال وتعابير معينة. يأتي "zu" قبل الفعل في المصدر في نهاية الجملة.',
    examples: [
      { de: 'Ich habe keine Zeit, Deutsch zu lernen.', ar: 'ليس لدي وقت لتعلم الألمانية.' },
      { de: 'Es ist wichtig, pünktlich zu sein.', ar: 'من المهم أن تكون دقيقاً في المواعيد.' },
    ],
  },
  {
    id: 7,
    titleDE: 'Plusquamperfekt',
    titleAR: 'الماضي الأسبق (Plusquamperfekt)',
    explanation: 'يُستخدم للتعبير عن حدث وقع قبل حدث آخر في الماضي. يُبنى من hatte/war + Partizip II.',
    examples: [
      { de: 'Nachdem ich gegessen hatte, ging ich spazieren.', ar: 'بعد أن أكلت، ذهبت للتمشية.' },
      { de: 'Als ich ankam, war der Zug schon abgefahren.', ar: 'عندما وصلت، كان القطار قد غادر.' },
    ],
  },
];

export interface VocabCategory {
  id: string;
  name: string;
  icon: string;
  words: { de: string; ar: string; example: string }[];
}

export const vocabCategories: VocabCategory[] = [
  {
    id: 'health',
    name: 'الصحة والطبيب',
    icon: '🏥',
    words: [
      { de: 'der Arzt / die Ärztin', ar: 'الطبيب / الطبيبة', example: 'Ich muss zum Arzt gehen.' },
      { de: 'das Rezept', ar: 'الوصفة الطبية', example: 'Der Arzt hat mir ein Rezept gegeben.' },
      { de: 'die Krankenkasse', ar: 'التأمين الصحي', example: 'Ich bin bei der AOK versichert.' },
      { de: 'die Sprechstunde', ar: 'ساعات العيادة', example: 'Die Sprechstunde ist von 8 bis 12 Uhr.' },
      { de: 'die Überweisung', ar: 'التحويلة الطبية', example: 'Ich brauche eine Überweisung zum Facharzt.' },
    ],
  },
  {
    id: 'work',
    name: 'العمل والمهنة',
    icon: '💼',
    words: [
      { de: 'die Bewerbung', ar: 'التقديم على عمل', example: 'Ich schreibe eine Bewerbung.' },
      { de: 'das Vorstellungsgespräch', ar: 'مقابلة العمل', example: 'Morgen habe ich ein Vorstellungsgespräch.' },
      { de: 'der Lebenslauf', ar: 'السيرة الذاتية', example: 'Bitte schicken Sie Ihren Lebenslauf.' },
      { de: 'der Arbeitsvertrag', ar: 'عقد العمل', example: 'Ich habe den Arbeitsvertrag unterschrieben.' },
      { de: 'die Kündigung', ar: 'الاستقالة / الفصل', example: 'Die Kündigungsfrist beträgt 4 Wochen.' },
    ],
  },
  {
    id: 'housing',
    name: 'السكن والشقة',
    icon: '🏠',
    words: [
      { de: 'die Wohnung', ar: 'الشقة', example: 'Ich suche eine 2-Zimmer-Wohnung.' },
      { de: 'die Miete', ar: 'الإيجار', example: 'Die Miete beträgt 600 Euro warm.' },
      { de: 'der Mietvertrag', ar: 'عقد الإيجار', example: 'Lesen Sie den Mietvertrag sorgfältig.' },
      { de: 'die Nebenkosten', ar: 'التكاليف الإضافية', example: 'Die Nebenkosten sind inklusive.' },
      { de: 'die Kaution', ar: 'التأمين / الضمان', example: 'Die Kaution ist 3 Monatsmieten.' },
    ],
  },
  {
    id: 'education',
    name: 'التعليم والدراسة',
    icon: '🎓',
    words: [
      { de: 'die Ausbildung', ar: 'التدريب المهني', example: 'Ich mache eine Ausbildung als Mechatroniker.' },
      { de: 'das Zeugnis', ar: 'الشهادة', example: 'Mein Zeugnis wurde anerkannt.' },
      { de: 'die Anerkennung', ar: 'الاعتراف بالشهادة', example: 'Die Anerkennung dauert 3 Monate.' },
      { de: 'der Integrationskurs', ar: 'كورس الاندماج', example: 'Ich besuche einen Integrationskurs.' },
      { de: 'die Prüfung', ar: 'الامتحان', example: 'Die B1-Prüfung ist nächste Woche.' },
    ],
  },
  {
    id: 'daily',
    name: 'الحياة اليومية',
    icon: '☀️',
    words: [
      { de: 'der Termin', ar: 'الموعد', example: 'Ich habe einen Termin beim Amt.' },
      { de: 'die Anmeldung', ar: 'التسجيل', example: 'Die Anmeldung ist beim Bürgeramt.' },
      { de: 'der Antrag', ar: 'الطلب / المعاملة', example: 'Ich muss einen Antrag stellen.' },
      { de: 'die Bescheinigung', ar: 'الشهادة / التأكيد', example: 'Bitte bringen Sie eine Bescheinigung mit.' },
      { de: 'das Formular', ar: 'الاستمارة', example: 'Füllen Sie bitte dieses Formular aus.' },
    ],
  },
];
