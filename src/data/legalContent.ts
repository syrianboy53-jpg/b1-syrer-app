export interface LegalArticle {
  id: string;
  titleAr: string;
  titleDe: string;
  subtitleAr: string;
  subtitleDe: string;
  icon: string;
  color: string;
  sections: {
    titleAr: string;
    titleDe: string;
    contentAr: string;
    contentDe: string;
  }[];
  faqAr: { question: string; answer: string }[];
  faqDe: { question: string; answer: string }[];
}

export const legalArticles: LegalArticle[] = [
  {
    id: 'police',
    titleAr: 'التعامل مع الشرطة الألمانية',
    titleDe: 'Umgang mit der deutschen Polizei',
    subtitleAr: 'حقوقك وواجباتك عند التعامل مع الشرطة',
    subtitleDe: 'Ihre Rechte und Pflichten im Umgang mit der Polizei',
    icon: 'shield-checkmark',
    color: '#3B82F6',
    sections: [
      {
        titleAr: 'حقوقك الأساسية',
        titleDe: 'Ihre Grundrechte',
        contentAr: 'عند التعامل مع الشرطة الألمانية، لديك حقوق أساسية يجب أن تعرفها:\n\n• الحق في الصمت: لا يمكن إجبارك على الإدلاء بأي تصريح.\n• الحق في محامٍ: يمكنك طلب محامٍ في أي وقت.\n• الحق في مترجم: إذا لم تتحدث الألمانية بشكل كافٍ.\n• الحق في معرفة التهمة: يجب إبلاغك بسبب الاحتجاز.\n• الحق في إبلاغ شخص: يمكنك إبلاغ أحد أفراد عائلتك أو صديق.',
        contentDe: 'Im Umgang mit der deutschen Polizei haben Sie grundlegende Rechte:\n\n• Recht zu schweigen: Sie können nicht gezwungen werden, eine Aussage zu machen.\n• Recht auf einen Anwalt: Sie können jederzeit einen Anwalt verlangen.\n• Recht auf einen Dolmetscher: Wenn Sie nicht ausreichend Deutsch sprechen.\n• Recht auf Kenntnis der Anklage: Sie müssen über den Grund der Festnahme informiert werden.\n• Recht auf Benachrichtigung: Sie können ein Familienmitglied oder einen Freund benachrichtigen.',
      },
      {
        titleAr: 'عند الاستدعاء للتحقيق',
        titleDe: 'Bei einer Vorladung',
        contentAr: 'إذا تلقيت استدعاءً من الشرطة:\n\n1. لا تتجاهل الاستدعاء - اقرأه بعناية.\n2. تحقق من صفتك: هل أنت شاهد أم متهم؟\n3. إذا كنت متهماً، استشر محامياً قبل الذهاب.\n4. كشاهد، يجب عليك الحضور لكن يمكنك رفض الشهادة ضد أقاربك.\n5. احتفظ بنسخة من جميع الوثائق.',
        contentDe: 'Wenn Sie eine Vorladung erhalten:\n\n1. Ignorieren Sie die Vorladung nicht - lesen Sie sie sorgfältig.\n2. Prüfen Sie Ihren Status: Sind Sie Zeuge oder Beschuldigter?\n3. Als Beschuldigter: Konsultieren Sie einen Anwalt vor dem Termin.\n4. Als Zeuge: Sie müssen erscheinen, können aber die Aussage gegen Verwandte verweigern.\n5. Behalten Sie eine Kopie aller Dokumente.',
      },
      {
        titleAr: 'نصائح مهمة',
        titleDe: 'Wichtige Tipps',
        contentAr: '• تصرف بهدوء واحترام دائماً.\n• لا تقاوم الشرطة حتى لو شعرت بالظلم.\n• اطلب رقم الشرطي (Dienstnummer) إذا شعرت بسوء المعاملة.\n• وثّق كل شيء (التاريخ، الوقت، أسماء الشرطيين).\n• تقدم بشكوى رسمية إذا تعرضت لسوء معاملة.',
        contentDe: '• Bleiben Sie immer ruhig und respektvoll.\n• Leisten Sie keinen Widerstand, auch wenn Sie sich ungerecht behandelt fühlen.\n• Fragen Sie nach der Dienstnummer bei Fehlverhalten.\n• Dokumentieren Sie alles (Datum, Uhrzeit, Namen der Beamten).\n• Reichen Sie eine formelle Beschwerde ein bei Fehlverhalten.',
      },
    ],
    faqAr: [
      {
        question: 'هل يمكن للشرطة تفتيش منزلي بدون إذن؟',
        answer: 'بشكل عام، تحتاج الشرطة إلى أمر قضائي لتفتيش منزلك. هناك استثناءات في حالات الخطر المباشر (Gefahr im Verzug).',
      },
      {
        question: 'ماذا أفعل إذا تم اعتقالي؟',
        answer: 'التزم الهدوء، لا تقاوم، اطلب محامياً فوراً، ولا تدلِ بأي تصريح قبل استشارة المحامي. يحق لك الاتصال بشخص واحد.',
      },
      {
        question: 'هل يجب أن أحمل هويتي دائماً؟',
        answer: 'نعم، في ألمانيا يجب أن تكون قادراً على إثبات هويتك. احمل جواز سفرك أو بطاقة إقامتك معك دائماً.',
      },
    ],
    faqDe: [
      {
        question: 'Kann die Polizei meine Wohnung ohne Erlaubnis durchsuchen?',
        answer: 'Grundsätzlich benötigt die Polizei einen richterlichen Durchsuchungsbeschluss. Es gibt Ausnahmen bei Gefahr im Verzug.',
      },
      {
        question: 'Was soll ich tun, wenn ich verhaftet werde?',
        answer: 'Bleiben Sie ruhig, leisten Sie keinen Widerstand, verlangen Sie sofort einen Anwalt und machen Sie keine Aussage ohne Anwalt.',
      },
      {
        question: 'Muss ich immer meinen Ausweis bei mir tragen?',
        answer: 'Ja, in Deutschland müssen Sie sich ausweisen können. Tragen Sie immer Ihren Reisepass oder Aufenthaltstitel bei sich.',
      },
    ],
  },
  {
    id: 'jugendamt',
    titleAr: 'التعامل مع Jugendamt',
    titleDe: 'Umgang mit dem Jugendamt',
    subtitleAr: 'دليل شامل للتعامل مع مكتب رعاية الشباب',
    subtitleDe: 'Umfassender Leitfaden zum Jugendamt',
    icon: 'people',
    color: '#10B981',
    sections: [
      {
        titleAr: 'ما هو الـ Jugendamt؟',
        titleDe: 'Was ist das Jugendamt?',
        contentAr: 'الـ Jugendamt (مكتب رعاية الشباب) هو جهة حكومية ألمانية مسؤولة عن:\n\n• حماية الأطفال والشباب\n• تقديم الدعم للعائلات\n• المساعدة في قضايا الحضانة\n• التدخل في حالات إهمال أو إساءة معاملة الأطفال\n\nمن المهم فهم أن الـ Jugendamt ليس عدواً - بل هو جهة تهدف لمساعدة العائلات في المقام الأول.',
        contentDe: 'Das Jugendamt ist eine deutsche Behörde, die verantwortlich ist für:\n\n• Schutz von Kindern und Jugendlichen\n• Unterstützung von Familien\n• Hilfe bei Sorgerechtsfragen\n• Eingreifen bei Vernachlässigung oder Misshandlung von Kindern\n\nEs ist wichtig zu verstehen, dass das Jugendamt kein Feind ist - es ist eine Einrichtung, die Familien helfen soll.',
      },
      {
        titleAr: 'حقوقك مع الـ Jugendamt',
        titleDe: 'Ihre Rechte beim Jugendamt',
        contentAr: '• الحق في الحصول على معلومات كاملة عن القضية.\n• الحق في الاستعانة بمحامٍ أو مستشار.\n• الحق في مترجم خلال الاجتماعات.\n• الحق في الاعتراض على القرارات.\n• الحق في تقديم وجهة نظرك.\n• الحق في الطعن أمام المحكمة.',
        contentDe: '• Recht auf vollständige Informationen über den Fall.\n• Recht auf einen Anwalt oder Berater.\n• Recht auf einen Dolmetscher bei Gesprächen.\n• Recht auf Widerspruch gegen Entscheidungen.\n• Recht, Ihren Standpunkt darzulegen.\n• Recht auf gerichtliche Überprüfung.',
      },
      {
        titleAr: 'كيف تتعامل مع زيارة الـ Jugendamt',
        titleDe: 'Umgang mit einem Jugendamt-Besuch',
        contentAr: '1. لا تخف ولا تتجاهل الاتصال.\n2. تعاون بشكل إيجابي.\n3. اطلب موعداً رسمياً إذا جاؤوا بدون إشعار.\n4. وثّق كل اجتماع (التاريخ، الحاضرون، ما تم مناقشته).\n5. اطلب نسخة من أي تقرير.\n6. استشر محامياً متخصصاً في قانون الأسرة.\n7. كن صادقاً ومنفتحاً.',
        contentDe: '1. Haben Sie keine Angst und ignorieren Sie den Kontakt nicht.\n2. Kooperieren Sie positiv.\n3. Bitten Sie um einen formellen Termin bei unangemeldeten Besuchen.\n4. Dokumentieren Sie jedes Gespräch (Datum, Anwesende, Inhalte).\n5. Fordern Sie eine Kopie jedes Berichts.\n6. Konsultieren Sie einen Familienrechtsanwalt.\n7. Seien Sie ehrlich und offen.',
      },
    ],
    faqAr: [
      {
        question: 'هل يمكن للـ Jugendamt أخذ أطفالي؟',
        answer: 'فقط في حالات الخطر المباشر على الطفل. في معظم الحالات، يسعى الـ Jugendamt أولاً لدعم العائلة. سحب الطفل يتطلب عادة قرار محكمة.',
      },
      {
        question: 'هل يجب أن أسمح بدخول Jugendamt لمنزلي؟',
        answer: 'ليس إلزامياً بدون أمر محكمة، لكن التعاون ينصح به بشدة. رفض التعاون قد يعطي انطباعاً سلبياً.',
      },
    ],
    faqDe: [
      {
        question: 'Kann das Jugendamt meine Kinder wegnehmen?',
        answer: 'Nur bei unmittelbarer Gefahr für das Kind. In den meisten Fällen versucht das Jugendamt zunächst, die Familie zu unterstützen.',
      },
      {
        question: 'Muss ich das Jugendamt in meine Wohnung lassen?',
        answer: 'Ohne Gerichtsbeschluss nicht verpflichtend, aber Kooperation wird dringend empfohlen.',
      },
    ],
  },
  {
    id: 'fines',
    titleAr: 'تجنب الغرامات المالية',
    titleDe: 'Bußgelder vermeiden',
    subtitleAr: 'إرشادات عملية لتجنب المخالفات',
    subtitleDe: 'Praktische Tipps zur Vermeidung von Verstößen',
    icon: 'cash',
    color: '#F59E0B',
    sections: [
      {
        titleAr: 'أنواع الغرامات الشائعة',
        titleDe: 'Häufige Arten von Bußgeldern',
        contentAr: '• مخالفات المرور (السرعة، الوقوف الخاطئ، استخدام الهاتف أثناء القيادة)\n• مخالفات السكن (الضوضاء، إلقاء النفايات بشكل خاطئ)\n• مخالفات التسجيل (عدم التسجيل في الـ Bürgeramt)\n• مخالفات التأمين الصحي (عدم وجود تأمين)\n• مخالفات الإقامة (عدم تجديد الإقامة في الوقت المناسب)',
        contentDe: '• Verkehrsverstöße (Geschwindigkeit, Falschparken, Handynutzung am Steuer)\n• Wohnungsverstöße (Lärm, falsche Müllentsorgung)\n• Meldeverstöße (Nichtanmeldung beim Bürgeramt)\n• Krankenversicherungsverstöße (fehlende Versicherung)\n• Aufenthaltsverstöße (verspätete Verlängerung)',
      },
      {
        titleAr: 'كيف تتجنب الغرامات',
        titleDe: 'So vermeiden Sie Bußgelder',
        contentAr: '1. سجّل عنوانك خلال 14 يوماً من الانتقال (Anmeldung).\n2. احترم قوانين المرور بدقة.\n3. تعرف على قواعد فصل النفايات في منطقتك.\n4. احترم ساعات الهدوء (عادة من 22:00 حتى 6:00).\n5. جدد إقامتك قبل انتهائها بوقت كافٍ.\n6. تأكد من وجود تأمين صحي ساري المفعول.\n7. سجل سيارتك وادفع ضريبة السيارة في الوقت المحدد.',
        contentDe: '1. Melden Sie Ihre Adresse innerhalb von 14 Tagen an (Anmeldung).\n2. Halten Sie sich strikt an die Verkehrsregeln.\n3. Lernen Sie die Mülltrennung in Ihrer Region.\n4. Respektieren Sie die Ruhezeiten (22:00-6:00 Uhr).\n5. Verlängern Sie Ihren Aufenthaltstitel rechtzeitig.\n6. Stellen Sie sicher, dass Sie krankenversichert sind.\n7. Melden Sie Ihr Auto an und zahlen Sie die Kfz-Steuer pünktlich.',
      },
      {
        titleAr: 'الاعتراض على الغرامات',
        titleDe: 'Einspruch gegen Bußgelder',
        contentAr: '• لديك عادة أسبوعان للاعتراض (Einspruch/Widerspruch).\n• يجب أن يكون الاعتراض كتابياً.\n• اذكر أسباب الاعتراض بوضوح.\n• أرفق أي أدلة داعمة.\n• استشر محامياً إذا كانت الغرامة كبيرة.',
        contentDe: '• Sie haben in der Regel zwei Wochen für einen Einspruch.\n• Der Einspruch muss schriftlich erfolgen.\n• Nennen Sie die Gründe klar und deutlich.\n• Fügen Sie Beweise bei.\n• Konsultieren Sie einen Anwalt bei hohen Bußgeldern.',
      },
    ],
    faqAr: [
      {
        question: 'ما هي مدة الاعتراض على غرامة مرورية؟',
        answer: 'عادة أسبوعان من تاريخ استلام المخالفة. تأكد من إرسال الاعتراض قبل انتهاء المهلة.',
      },
      {
        question: 'هل يمكنني دفع الغرامة بالتقسيط؟',
        answer: 'نعم، يمكنك التقدم بطلب لدفع الغرامة على أقساط إذا كنت غير قادر على دفعها دفعة واحدة.',
      },
    ],
    faqDe: [
      {
        question: 'Wie lange habe ich Zeit für einen Einspruch gegen ein Bußgeld?',
        answer: 'In der Regel zwei Wochen ab Zustellung. Stellen Sie sicher, dass der Einspruch fristgerecht eingeht.',
      },
      {
        question: 'Kann ich ein Bußgeld in Raten zahlen?',
        answer: 'Ja, Sie können eine Ratenzahlung beantragen, wenn Sie nicht in der Lage sind, den vollen Betrag auf einmal zu zahlen.',
      },
    ],
  },
  {
    id: 'prosecutor',
    titleAr: 'التعامل مع النيابة العامة',
    titleDe: 'Umgang mit der Staatsanwaltschaft',
    subtitleAr: 'حقوقك أمام النيابة والإجراءات القانونية',
    subtitleDe: 'Ihre Rechte vor der Staatsanwaltschaft',
    icon: 'briefcase',
    color: '#8B5CF6',
    sections: [
      {
        titleAr: 'دور النيابة العامة',
        titleDe: 'Rolle der Staatsanwaltschaft',
        contentAr: 'النيابة العامة (Staatsanwaltschaft) هي الجهة المسؤولة عن:\n\n• التحقيق في الجرائم\n• توجيه الاتهامات\n• تمثيل الدولة في المحاكم الجنائية\n• الإشراف على تنفيذ الأحكام\n\nالنيابة العامة ملزمة بالتحقيق في الأدلة المؤيدة والمعارضة للمتهم.',
        contentDe: 'Die Staatsanwaltschaft ist zuständig für:\n\n• Ermittlung von Straftaten\n• Erhebung von Anklagen\n• Vertretung des Staates vor Strafgerichten\n• Überwachung der Strafvollstreckung\n\nDie Staatsanwaltschaft ist verpflichtet, sowohl belastende als auch entlastende Beweise zu ermitteln.',
      },
      {
        titleAr: 'حقوقك أمام النيابة',
        titleDe: 'Ihre Rechte vor der Staatsanwaltschaft',
        contentAr: '• الحق في الصمت وعدم تجريم النفس.\n• الحق في محامي دفاع.\n• الحق في الاطلاع على ملف القضية (عبر محاميك).\n• الحق في مترجم.\n• الحق في الطعن في قرارات النيابة.\n• الحق في محاكمة عادلة.',
        contentDe: '• Recht zu schweigen und sich nicht selbst zu belasten.\n• Recht auf einen Verteidiger.\n• Recht auf Akteneinsicht (über Ihren Anwalt).\n• Recht auf einen Dolmetscher.\n• Recht auf Anfechtung der Entscheidungen.\n• Recht auf ein faires Verfahren.',
      },
      {
        titleAr: 'ماذا تفعل عند تلقي رسالة من النيابة',
        titleDe: 'Was tun bei Post von der Staatsanwaltschaft',
        contentAr: '1. لا تتجاهل الرسالة أبداً.\n2. اقرأها بعناية أو اطلب مساعدة في ترجمتها.\n3. تحقق من المهل الزمنية المحددة.\n4. استشر محامياً فوراً.\n5. لا تتصل بالنيابة مباشرة بدون محامٍ.\n6. احتفظ بجميع الوثائق في مكان آمن.',
        contentDe: '1. Ignorieren Sie die Post niemals.\n2. Lesen Sie sie sorgfältig oder lassen Sie sie übersetzen.\n3. Beachten Sie alle Fristen.\n4. Konsultieren Sie sofort einen Anwalt.\n5. Kontaktieren Sie die Staatsanwaltschaft nicht ohne Anwalt.\n6. Bewahren Sie alle Dokumente sicher auf.',
      },
    ],
    faqAr: [
      {
        question: 'هل يمكن للنيابة إيقاف التحقيق؟',
        answer: 'نعم، يمكن للنيابة إيقاف التحقيق (Einstellung) إذا لم تكن هناك أدلة كافية أو إذا كانت الجريمة بسيطة.',
      },
      {
        question: 'ما الفرق بين الغرامة والعقوبة الجنائية؟',
        answer: 'الغرامة (Bußgeld) للمخالفات البسيطة ولا تظهر في السجل الجنائي. العقوبة الجنائية (Strafe) للجرائم وتسجل في السجل.',
      },
    ],
    faqDe: [
      {
        question: 'Kann die Staatsanwaltschaft das Verfahren einstellen?',
        answer: 'Ja, die Staatsanwaltschaft kann das Verfahren einstellen, wenn keine ausreichenden Beweise vorliegen oder bei Bagatelldelikten.',
      },
      {
        question: 'Was ist der Unterschied zwischen Bußgeld und Strafe?',
        answer: 'Bußgelder gelten für Ordnungswidrigkeiten und erscheinen nicht im Führungszeugnis. Strafen gelten für Straftaten.',
      },
    ],
  },
];

export interface BlogPost {
  id: string;
  titleAr: string;
  titleDe: string;
  excerptAr: string;
  excerptDe: string;
  contentAr: string;
  contentDe: string;
  category: string;
  categoryAr: string;
  date: string;
  author: string;
  readTimeMinutes: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titleAr: 'حقوق الأطفال في القانون الألماني: ما يجب أن يعرفه كل والد',
    titleDe: 'Kinderrechte im deutschen Recht: Was jeder Elternteil wissen sollte',
    excerptAr: 'نظرة شاملة على حقوق الأطفال في ألمانيا وكيف يحميها القانون الألماني.',
    excerptDe: 'Ein umfassender Überblick über Kinderrechte in Deutschland.',
    contentAr: 'يضمن القانون الألماني حقوقاً واسعة للأطفال تشمل الحق في التعليم والرعاية الصحية والحماية من العنف. يلعب الـ Jugendamt دوراً محورياً في ضمان هذه الحقوق...',
    contentDe: 'Das deutsche Recht gewährleistet umfassende Rechte für Kinder, einschließlich des Rechts auf Bildung, Gesundheitsversorgung und Schutz vor Gewalt...',
    category: 'Family Law',
    categoryAr: 'قانون الأسرة',
    date: '2025-05-01',
    author: 'د. أحمد الخطيب',
    readTimeMinutes: 8,
    image: 'family',
  },
  {
    id: '2',
    titleAr: 'الطلاق في ألمانيا: الإجراءات والحقوق',
    titleDe: 'Scheidung in Deutschland: Verfahren und Rechte',
    excerptAr: 'دليل شامل لإجراءات الطلاق في ألمانيا والحقوق القانونية لكلا الطرفين.',
    excerptDe: 'Ein umfassender Leitfaden zu Scheidungsverfahren und Rechten in Deutschland.',
    contentAr: 'يتطلب الطلاق في ألمانيا سنة انفصال على الأقل. تتضمن الإجراءات تقسيم الممتلكات، ترتيب حضانة الأطفال، وتحديد النفقة...',
    contentDe: 'Eine Scheidung in Deutschland erfordert mindestens ein Trennungsjahr. Das Verfahren umfasst Vermögensaufteilung, Sorgerecht und Unterhalt...',
    category: 'Divorce',
    categoryAr: 'الطلاق',
    date: '2025-04-25',
    author: 'المحامية سارة شميت',
    readTimeMinutes: 12,
    image: 'legal',
  },
  {
    id: '3',
    titleAr: 'كيف تحمي نفسك من الغرامات في ألمانيا',
    titleDe: 'So schützen Sie sich vor Bußgeldern in Deutschland',
    excerptAr: 'نصائح عملية لتجنب الغرامات المالية الأكثر شيوعاً في ألمانيا.',
    excerptDe: 'Praktische Tipps zur Vermeidung der häufigsten Bußgelder in Deutschland.',
    contentAr: 'تتراوح الغرامات في ألمانيا من بسيطة إلى كبيرة جداً. أهم النصائح: التزم بقوانين المرور، سجّل عنوانك في الوقت المناسب، واحترم قواعد فصل النفايات...',
    contentDe: 'Bußgelder in Deutschland reichen von gering bis sehr hoch. Die wichtigsten Tipps: Halten Sie sich an die Verkehrsregeln, melden Sie Ihren Wohnsitz rechtzeitig an...',
    category: 'Fines',
    categoryAr: 'الغرامات',
    date: '2025-04-18',
    author: 'د. محمد العلي',
    readTimeMinutes: 6,
    image: 'money',
  },
  {
    id: '4',
    titleAr: 'حضانة الأطفال بعد الطلاق: الأنواع والحقوق',
    titleDe: 'Sorgerecht nach der Scheidung: Arten und Rechte',
    excerptAr: 'فهم أنواع الحضانة المختلفة وحقوق الوالدين بعد الطلاق في ألمانيا.',
    excerptDe: 'Verstehen Sie die verschiedenen Arten des Sorgerechts und die Rechte der Eltern.',
    contentAr: 'يميز القانون الألماني بين الحضانة المشتركة والحضانة الفردية. في معظم الحالات، يفضل القانون الحضانة المشتركة لضمان مصلحة الطفل الفضلى...',
    contentDe: 'Das deutsche Recht unterscheidet zwischen gemeinsamen und alleinigem Sorgerecht. In den meisten Fällen bevorzugt das Gesetz das gemeinsame Sorgerecht...',
    category: 'Custody',
    categoryAr: 'الحضانة',
    date: '2025-04-10',
    author: 'المحامي يوسف حسن',
    readTimeMinutes: 10,
    image: 'children',
  },
];
