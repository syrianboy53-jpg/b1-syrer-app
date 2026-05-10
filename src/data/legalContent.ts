export interface LegalArticle {
  id: string;
  titleAr: string;
  titleDe: string;
  subtitleAr: string;
  subtitleDe: string;
  icon: string;
  color: string;
  premium?: boolean;
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
  {
    id: 'police-mail',
    titleAr: 'كيف تتعامل مع بريد من الشرطة الألمانية؟',
    titleDe: 'Wie gehen Sie mit Post von der Polizei um?',
    subtitleAr: 'دليل عملي للتعامل مع الرسائل والاستدعاءات الشرطية',
    subtitleDe: 'Praktischer Leitfaden für den Umgang mit polizeilicher Post',
    icon: 'mail',
    color: '#2563EB',
    sections: [
      {
        titleAr: 'أنواع البريد من الشرطة',
        titleDe: 'Arten von Polizeipost',
        contentAr: 'قد تتلقى أنواعاً مختلفة من البريد من الشرطة الألمانية:\n\n• استدعاء للتحقيق (Vorladung): دعوة للحضور لتقديم إفادة.\n• إشعار بشكوى (Anzeige): إبلاغ بوجود شكوى مقدمة ضدك.\n• أمر بدفع غرامة (Bußgeldbescheid): مخالفة مرورية أو غيرها.\n• طلب معلومات (Auskunftsersuchen): طلب بيانات شخصية.\n• إشعار بمنع اقتراب (Kontaktverbot): في حالات العنف الأسري.',
        contentDe: 'Sie können verschiedene Arten von Post von der Polizei erhalten:\n\n• Vorladung: Einladung zur Vernehmung.\n• Anzeige-Benachrichtigung: Information über eine Anzeige gegen Sie.\n• Bußgeldbescheid: Verkehrs- oder andere Ordnungswidrigkeiten.\n• Auskunftsersuchen: Anfrage nach persönlichen Daten.\n• Kontaktverbot: Bei häuslicher Gewalt.',
      },
      {
        titleAr: 'خطوات التعامل مع البريد',
        titleDe: 'Schritte beim Umgang mit der Post',
        contentAr: '1. لا تتجاهل الرسالة أبداً - حتى لو كانت بالألمانية فقط.\n2. استخدم مترجماً لفهم المحتوى بالكامل.\n3. تحقق من المهل الزمنية (Frist) - عادة 14 يوماً.\n4. حدد صفتك: هل أنت شاهد (Zeuge) أم متهم (Beschuldigter)؟\n5. إذا كنت متهماً: لا تتصل بالشرطة قبل استشارة محامٍ.\n6. إذا كنت شاهداً: يجب الحضور لكن لست ملزماً بالشهادة ضد أقاربك.\n7. احتفظ بنسخة من كل شيء.',
        contentDe: '1. Ignorieren Sie den Brief niemals.\n2. Lassen Sie ihn vollständig übersetzen.\n3. Prüfen Sie die Fristen - meist 14 Tage.\n4. Klären Sie Ihren Status: Zeuge oder Beschuldigter?\n5. Als Beschuldigter: Kontaktieren Sie zuerst einen Anwalt.\n6. Als Zeuge: Erscheinen ist Pflicht, aber Zeugnisverweigerungsrecht bei Verwandten.\n7. Bewahren Sie Kopien von allem auf.',
      },
      {
        titleAr: 'أخطاء يجب تجنبها',
        titleDe: 'Fehler, die Sie vermeiden sollten',
        contentAr: '• لا تتصل بالشرطة وتعطي إفادة هاتفية بدون محامٍ.\n• لا ترسل رداً كتابياً بدون مراجعة محامٍ.\n• لا تتجاهل المهل الزمنية.\n• لا تمزق الرسالة أو تخفيها.\n• لا تناقش الموضوع مع أطراف أخرى قبل المحامي.\n• لا توقع على أي وثيقة بدون فهمها.',
        contentDe: '• Geben Sie keine telefonische Aussage ohne Anwalt.\n• Senden Sie keine schriftliche Antwort ohne Anwalt.\n• Versäumen Sie keine Fristen.\n• Vernichten Sie den Brief nicht.\n• Besprechen Sie den Fall nicht mit Dritten vor dem Anwalt.\n• Unterschreiben Sie nichts, ohne es zu verstehen.',
      },
    ],
    faqAr: [
      { question: 'هل يجب أن أحضر لكل استدعاء من الشرطة؟', answer: 'كشاهد: نعم، يجب الحضور. كمتهم: لست ملزماً بالحضور لكن يفضل التنسيق عبر محامٍ.' },
      { question: 'ماذا يحدث إذا تجاهلت الرسالة؟', answer: 'قد يصدر أمر إحضار قسري أو تتعرض لغرامة إضافية. لا تتجاهل أي رسالة رسمية.' },
    ],
    faqDe: [
      { question: 'Muss ich jeder Vorladung folgen?', answer: 'Als Zeuge: Ja. Als Beschuldigter: Nein, aber koordinieren Sie über einen Anwalt.' },
      { question: 'Was passiert, wenn ich den Brief ignoriere?', answer: 'Es kann ein Vorführbefehl erlassen oder ein Bußgeld verhängt werden.' },
    ],
  },
  {
    id: 'false-accusations',
    titleAr: 'التعامل مع الادعاءات الكيدية من الزوجة',
    titleDe: 'Umgang mit Falschbeschuldigungen durch die Ehefrau',
    subtitleAr: 'كيف تحمي نفسك قانونياً من الاتهامات الباطلة',
    subtitleDe: 'Wie Sie sich rechtlich gegen falsche Anschuldigungen schützen',
    icon: 'alert-circle',
    color: '#DC2626',
    premium: true,
    sections: [
      {
        titleAr: 'ما هي الادعاءات الكيدية؟',
        titleDe: 'Was sind Falschbeschuldigungen?',
        contentAr: 'الادعاءات الكيدية هي اتهامات باطلة يتم تقديمها بهدف الإضرار بالطرف الآخر، وتشمل:\n\n• اتهامات بالعنف الجسدي أو اللفظي.\n• اتهامات بإساءة معاملة الأطفال.\n• اتهامات بالتهديد أو الملاحقة.\n• اتهامات بالاغتصاب الزوجي.\n\nهذه الادعاءات قد تستخدم كأداة ضغط في قضايا الطلاق والحضانة.',
        contentDe: 'Falschbeschuldigungen sind unwahre Anschuldigungen mit dem Ziel, der anderen Partei zu schaden:\n\n• Anschuldigungen wegen körperlicher oder verbaler Gewalt.\n• Anschuldigungen wegen Kindesmisshandlung.\n• Anschuldigungen wegen Bedrohung oder Stalking.\n• Anschuldigungen wegen ehelicher Vergewaltigung.\n\nDiese können als Druckmittel in Scheidungs- und Sorgerechtsfällen eingesetzt werden.',
      },
      {
        titleAr: 'كيف تحمي نفسك',
        titleDe: 'So schützen Sie sich',
        contentAr: '1. وثّق كل شيء: احتفظ بالرسائل النصية والإيميلات والمحادثات.\n2. لا تكن وحيداً مع الزوجة إذا شعرت بخطر الادعاءات - اصطحب شاهداً.\n3. استشر محامياً متخصصاً فوراً.\n4. لا تغادر المنزل إلا بنصيحة محامٍ.\n5. قدم إفادة مكتوبة مفصلة لمحاميك.\n6. اجمع شهوداً يمكنهم تأكيد سلوكك الطبيعي.\n7. اطلب من محاميك فحص التناقضات في ادعاءات الطرف الآخر.',
        contentDe: '1. Dokumentieren Sie alles: SMS, E-Mails, Gespräche.\n2. Seien Sie nicht allein mit der Ehefrau - nehmen Sie einen Zeugen mit.\n3. Konsultieren Sie sofort einen spezialisierten Anwalt.\n4. Verlassen Sie die Wohnung nur auf Anraten des Anwalts.\n5. Geben Sie eine detaillierte schriftliche Erklärung ab.\n6. Sammeln Sie Zeugen, die Ihr normales Verhalten bestätigen.\n7. Lassen Sie Widersprüche in den Anschuldigungen prüfen.',
      },
      {
        titleAr: 'العقوبات على الادعاءات الكاذبة',
        titleDe: 'Strafen für Falschbeschuldigungen',
        contentAr: 'في القانون الألماني، الادعاء الكاذب (Falsche Verdächtigung §164 StGB) يعاقب عليه:\n\n• عقوبة بالسجن حتى 5 سنوات أو غرامة مالية.\n• يمكنك تقديم شكوى مضادة (Gegenanzeige).\n• يحق لك المطالبة بتعويض عن الأضرار المادية والمعنوية.\n• يمكن استخدام ثبوت الكذب لصالحك في قضية الحضانة.',
        contentDe: 'Im deutschen Recht wird falsche Verdächtigung (§164 StGB) bestraft:\n\n• Freiheitsstrafe bis zu 5 Jahren oder Geldstrafe.\n• Sie können eine Gegenanzeige erstatten.\n• Sie haben Anspruch auf Schadensersatz.\n• Der Nachweis der Falschaussage kann im Sorgerechtsverfahren zu Ihren Gunsten verwendet werden.',
      },
    ],
    faqAr: [
      { question: 'هل يمكنني مقاضاة زوجتي بسبب ادعاءات كاذبة؟', answer: 'نعم، يمكنك تقديم شكوى جنائية بتهمة الادعاء الكاذب (§164 StGB) والمطالبة بتعويضات مدنية.' },
      { question: 'كيف أثبت أن الادعاءات كيدية؟', answer: 'من خلال التناقضات في الأقوال، شهادات الشهود، الأدلة الرقمية (رسائل، كاميرات)، وتقارير الخبراء.' },
    ],
    faqDe: [
      { question: 'Kann ich meine Frau wegen Falschbeschuldigungen verklagen?', answer: 'Ja, Sie können Strafanzeige wegen falscher Verdächtigung (§164 StGB) erstatten und zivilrechtliche Schadensersatzansprüche geltend machen.' },
      { question: 'Wie beweise ich, dass die Anschuldigungen falsch sind?', answer: 'Durch Widersprüche in den Aussagen, Zeugenaussagen, digitale Beweise und Gutachten.' },
    ],
  },
  {
    id: 'child-removal',
    titleAr: 'كيف تتجنب سحب أطفالك في ألمانيا',
    titleDe: 'So vermeiden Sie die Inobhutnahme Ihrer Kinder',
    subtitleAr: 'دليل وقائي شامل لحماية عائلتك',
    subtitleDe: 'Umfassender Präventionsleitfaden zum Schutz Ihrer Familie',
    icon: 'hand-left',
    color: '#059669',
    premium: true,
    sections: [
      {
        titleAr: 'متى يتدخل الـ Jugendamt لسحب الأطفال؟',
        titleDe: 'Wann greift das Jugendamt ein?',
        contentAr: 'الـ Jugendamt يتدخل لسحب الأطفال (Inobhutnahme) فقط في حالات:\n\n• خطر مباشر على حياة أو صحة الطفل.\n• إهمال شديد (عدم توفير طعام، ملابس، رعاية طبية).\n• عنف جسدي أو جنسي ضد الطفل.\n• إدمان الوالدين على المخدرات أو الكحول بشكل يؤثر على رعاية الطفل.\n• أمراض نفسية شديدة لدى الوالدين بدون علاج.\n\nملاحظة: الاختلاف الثقافي في أساليب التربية ليس سبباً كافياً لسحب الأطفال.',
        contentDe: 'Das Jugendamt greift zur Inobhutnahme nur ein bei:\n\n• Unmittelbarer Gefahr für Leben oder Gesundheit des Kindes.\n• Schwerer Vernachlässigung.\n• Körperlicher oder sexueller Gewalt gegen das Kind.\n• Suchterkrankungen der Eltern.\n• Schwere unbehandelte psychische Erkrankungen.\n\nHinweis: Kulturelle Unterschiede in der Erziehung sind kein ausreichender Grund.',
      },
      {
        titleAr: 'خطوات وقائية لحماية عائلتك',
        titleDe: 'Präventive Maßnahmen zum Schutz Ihrer Familie',
        contentAr: '1. تعاون مع الـ Jugendamt دائماً - لا تعاديهم.\n2. احضر جميع المواعيد والاجتماعات.\n3. أظهر بيئة منزلية آمنة ونظيفة.\n4. تأكد من حضور أطفالك للمدرسة بانتظام.\n5. حافظ على المواعيد الطبية للأطفال.\n6. تجنب العقاب البدني تماماً - محظور قانونياً في ألمانيا.\n7. شارك في برامج دعم الأسرة إذا عرضت عليك.\n8. وثّق تفاعلك الإيجابي مع أطفالك.',
        contentDe: '1. Kooperieren Sie immer mit dem Jugendamt.\n2. Nehmen Sie alle Termine wahr.\n3. Sorgen Sie für eine sichere, saubere Wohnung.\n4. Stellen Sie den regelmäßigen Schulbesuch sicher.\n5. Halten Sie ärztliche Termine ein.\n6. Vermeiden Sie körperliche Bestrafung - in Deutschland verboten.\n7. Nehmen Sie Familienunterstützungsprogramme an.\n8. Dokumentieren Sie positive Interaktionen mit Ihren Kindern.',
      },
      {
        titleAr: 'ماذا تفعل إذا تم سحب طفلك',
        titleDe: 'Was tun bei Inobhutnahme',
        contentAr: '• اتصل بمحامٍ متخصص فوراً.\n• لا تستخدم العنف أو التهديد.\n• اطلب معرفة مكان طفلك.\n• اطلب زيارة طفلك في أقرب وقت.\n• قدم طعناً أمام محكمة الأسرة (Familiengericht) فوراً.\n• تعاون مع خطة الـ Jugendamt لاستعادة طفلك.\n• المحكمة ملزمة بالنظر في الأمر خلال يوم عمل واحد.',
        contentDe: '• Kontaktieren Sie sofort einen Fachanwalt.\n• Reagieren Sie nicht mit Gewalt oder Drohungen.\n• Fragen Sie nach dem Aufenthaltsort Ihres Kindes.\n• Beantragen Sie schnellstmöglich Umgang.\n• Legen Sie sofort Beschwerde beim Familiengericht ein.\n• Kooperieren Sie mit dem Hilfeplan des Jugendamts.\n• Das Gericht muss innerhalb eines Werktages entscheiden.',
      },
    ],
    faqAr: [
      { question: 'هل يمكن للـ Jugendamt سحب أطفالي بدون أمر محكمة؟', answer: 'نعم، في حالات الخطر المباشر فقط. لكن يجب عرض الأمر على المحكمة خلال يوم عمل واحد بعد السحب.' },
      { question: 'كم تستغرق عملية استعادة الأطفال؟', answer: 'تعتمد على الحالة. قد تستغرق من أيام إلى أشهر. التعاون مع الـ Jugendamt والمحامي يسرّع العملية.' },
    ],
    faqDe: [
      { question: 'Kann das Jugendamt meine Kinder ohne Gerichtsbeschluss wegnehmen?', answer: 'Ja, nur bei unmittelbarer Gefahr. Aber der Fall muss innerhalb eines Werktages dem Gericht vorgelegt werden.' },
      { question: 'Wie lange dauert es, die Kinder zurückzubekommen?', answer: 'Das hängt vom Fall ab. Die Kooperation mit dem Jugendamt und dem Anwalt beschleunigt den Prozess.' },
    ],
  },
  {
    id: 'frauenhaus',
    titleAr: 'ما هو الـ Frauenhaus (دار حماية المرأة)؟',
    titleDe: 'Was ist ein Frauenhaus?',
    subtitleAr: 'كل ما تحتاج معرفته عن دور حماية المرأة في ألمانيا',
    subtitleDe: 'Alles, was Sie über Frauenhäuser in Deutschland wissen müssen',
    icon: 'home',
    color: '#DB2777',
    sections: [
      {
        titleAr: 'ما هو الـ Frauenhaus؟',
        titleDe: 'Was ist ein Frauenhaus?',
        contentAr: 'الـ Frauenhaus (بيت المرأة) هو ملجأ سري توفره الحكومة الألمانية لحماية النساء وأطفالهن من العنف الأسري.\n\n• العنوان سري ولا يُكشف لأحد.\n• مجاني بالكامل.\n• يوفر سكناً مؤقتاً، دعماً نفسياً، ومساعدة قانونية.\n• يمكن للمرأة البقاء حتى تجد سكناً مستقلاً.\n• يخدم النساء من جميع الجنسيات والأديان.',
        contentDe: 'Ein Frauenhaus ist eine geheime Schutzeinrichtung für Frauen und ihre Kinder, die von häuslicher Gewalt betroffen sind.\n\n• Die Adresse ist geheim.\n• Komplett kostenlos.\n• Bietet vorübergehende Unterkunft, psychologische Unterstützung und Rechtshilfe.\n• Die Frau kann bleiben, bis sie eine eigene Wohnung findet.\n• Für Frauen aller Nationalitäten und Religionen.',
      },
      {
        titleAr: 'تأثير الـ Frauenhaus على قضيتك',
        titleDe: 'Auswirkungen des Frauenhauses auf Ihren Fall',
        contentAr: 'إذا ذهبت زوجتك إلى الـ Frauenhaus:\n\n• لن تعرف عنوانها - هذا قانوني.\n• قد يتم إصدار أمر منع اقتراب (Kontakt- und Näherungsverbot).\n• الـ Jugendamt سيتم إبلاغه تلقائياً.\n• حقوق الحضانة لا تتأثر تلقائياً.\n• لا يعني ذلك أنك مذنب - لكن عليك الاستعداد القانوني.\n• يحق لك رؤية أطفالك (Umgangsrecht) عادة.',
        contentDe: 'Wenn Ihre Frau ins Frauenhaus geht:\n\n• Sie werden ihre Adresse nicht erfahren - das ist legal.\n• Es kann ein Kontakt- und Näherungsverbot erlassen werden.\n• Das Jugendamt wird automatisch informiert.\n• Sorgerechte werden nicht automatisch berührt.\n• Das bedeutet nicht, dass Sie schuldig sind.\n• Sie haben in der Regel Umgangsrecht mit Ihren Kindern.',
      },
      {
        titleAr: 'خطوات قانونية يجب اتخاذها',
        titleDe: 'Rechtliche Schritte, die Sie unternehmen sollten',
        contentAr: '1. استشر محامياً فوراً.\n2. لا تحاول البحث عن عنوان الـ Frauenhaus.\n3. لا تخرق أمر منع الاقتراب.\n4. وثّق كل ما يثبت عدم وجود عنف.\n5. تعاون مع الـ Jugendamt بشأن حق الزيارة.\n6. قدم طلباً رسمياً لحق رؤية الأطفال عبر المحكمة.',
        contentDe: '1. Konsultieren Sie sofort einen Anwalt.\n2. Versuchen Sie nicht, die Adresse zu finden.\n3. Verstoßen Sie nicht gegen das Näherungsverbot.\n4. Dokumentieren Sie alles, was belegt, dass keine Gewalt vorlag.\n5. Kooperieren Sie mit dem Jugendamt bezüglich des Umgangsrechts.\n6. Stellen Sie einen formellen Antrag auf Umgang über das Gericht.',
      },
    ],
    faqAr: [
      { question: 'هل يمكن لزوجتي أن تأخذ الأطفال إلى الـ Frauenhaus بدون إذني؟', answer: 'نعم، في حالات العنف الأسري يمكنها ذلك. لكن حق الحضانة المشتركة يبقى قائماً ويجب ترتيب حق الزيارة.' },
      { question: 'كيف أرى أطفالي إذا كانوا في الـ Frauenhaus؟', answer: 'من خلال طلب حق الزيارة (Umgangsrecht) عبر الـ Jugendamt أو المحكمة. عادة يتم ترتيب لقاءات في مكان محايد.' },
    ],
    faqDe: [
      { question: 'Kann meine Frau die Kinder ohne meine Erlaubnis ins Frauenhaus bringen?', answer: 'Ja, bei häuslicher Gewalt ist das möglich. Das gemeinsame Sorgerecht bleibt bestehen und das Umgangsrecht muss geregelt werden.' },
      { question: 'Wie kann ich meine Kinder sehen, wenn sie im Frauenhaus sind?', answer: 'Durch einen Antrag auf Umgangsrecht beim Jugendamt oder Gericht. Treffen werden meist an einem neutralen Ort organisiert.' },
    ],
  },
  {
    id: 'before-divorce',
    titleAr: 'قبل أن تصل إلى الطلاق',
    titleDe: 'Bevor es zur Scheidung kommt',
    subtitleAr: 'خطوات ونصائح لمحاولة إنقاذ الزواج أو الاستعداد القانوني',
    subtitleDe: 'Schritte und Tipps zur Rettung der Ehe oder rechtlichen Vorbereitung',
    icon: 'heart-half',
    color: '#7C3AED',
    premium: true,
    sections: [
      {
        titleAr: 'محاولة إنقاذ الزواج',
        titleDe: 'Die Ehe retten',
        contentAr: 'قبل التفكير في الطلاق، حاول هذه الخطوات:\n\n• استشارة أسرية (Eheberatung): متوفرة مجاناً عبر Caritas, Diakonie, أو Pro Familia.\n• وساطة (Mediation): طرف محايد يساعد في حل النزاعات.\n• علاج نفسي زوجي (Paartherapie): مع معالج متخصص.\n• التحدث مع إمام أو مستشار ديني.\n• إعطاء مساحة: فترة تفكير دون ضغط.',
        contentDe: 'Bevor Sie an Scheidung denken, versuchen Sie:\n\n• Eheberatung: Kostenlos bei Caritas, Diakonie oder Pro Familia.\n• Mediation: Ein neutraler Vermittler hilft bei Konflikten.\n• Paartherapie: Mit einem spezialisierten Therapeuten.\n• Gespräch mit einem religiösen Berater.\n• Abstand: Eine Denkpause ohne Druck.',
      },
      {
        titleAr: 'الاستعداد القانوني إذا فشلت المحاولات',
        titleDe: 'Rechtliche Vorbereitung, wenn die Versuche scheitern',
        contentAr: '1. افهم حقوقك المالية:\n   • حساب بنكي منفصل.\n   • قائمة بجميع الأصول المشتركة والديون.\n   • نسخ من عقود التأمين والإيجار.\n\n2. حقوق الحضانة:\n   • وثّق علاقتك الإيجابية بأطفالك.\n   • لا تغادر المنزل مع الأطفال بدون ترتيب قانوني.\n\n3. المستندات:\n   • احتفظ بنسخ من جميع الوثائق المهمة.\n   • شهادات الزواج، جوازات السفر، عقود العمل.',
        contentDe: '1. Verstehen Sie Ihre finanziellen Rechte:\n   • Eigenes Bankkonto.\n   • Liste aller gemeinsamen Vermögenswerte und Schulden.\n   • Kopien von Versicherungs- und Mietverträgen.\n\n2. Sorgerecht:\n   • Dokumentieren Sie Ihre positive Beziehung zu den Kindern.\n   • Verlassen Sie nicht die Wohnung mit den Kindern ohne rechtliche Regelung.\n\n3. Dokumente:\n   • Bewahren Sie Kopien aller wichtigen Unterlagen auf.',
      },
      {
        titleAr: 'سنة الانفصال (Trennungsjahr)',
        titleDe: 'Das Trennungsjahr',
        contentAr: 'في ألمانيا، يجب المرور بسنة انفصال قبل الطلاق:\n\n• يمكن الانفصال داخل نفس المنزل (Trennung innerhalb der Wohnung).\n• يجب فصل الأمور المعيشية (الطبخ، الغسيل، النوم منفصلين).\n• وثّق بداية الانفصال رسمياً.\n• لا تحتاج لمحامٍ لبدء الانفصال.\n• بعد سنة يمكن تقديم طلب الطلاق.',
        contentDe: 'In Deutschland ist ein Trennungsjahr vor der Scheidung erforderlich:\n\n• Trennung innerhalb der Wohnung ist möglich.\n• Getrennte Haushaltsführung (Kochen, Waschen, getrennte Schlafzimmer).\n• Dokumentieren Sie den Trennungsbeginn offiziell.\n• Kein Anwalt für den Trennungsbeginn erforderlich.\n• Nach einem Jahr kann der Scheidungsantrag gestellt werden.',
      },
    ],
    faqAr: [
      { question: 'هل يمكن الطلاق بدون سنة انفصال؟', answer: 'في حالات استثنائية فقط (عنف شديد مثلاً). القاعدة العامة هي سنة كاملة.' },
      { question: 'من يغادر المنزل عند الانفصال؟', answer: 'لا أحد ملزم بالمغادرة. يمكن الانفصال داخل نفس المنزل. إذا كان هناك عنف، يمكن طلب أمر حماية.' },
    ],
    faqDe: [
      { question: 'Kann man ohne Trennungsjahr geschieden werden?', answer: 'Nur in Ausnahmefällen (z.B. schwere Gewalt). Die Regel ist ein volles Jahr.' },
      { question: 'Wer muss bei der Trennung ausziehen?', answer: 'Niemand ist verpflichtet auszuziehen. Trennung innerhalb der Wohnung ist möglich.' },
    ],
  },
  {
    id: 'after-divorce',
    titleAr: 'بعد الطلاق في ألمانيا',
    titleDe: 'Nach der Scheidung in Deutschland',
    subtitleAr: 'حقوقك وواجباتك بعد إتمام الطلاق',
    subtitleDe: 'Ihre Rechte und Pflichten nach der Scheidung',
    icon: 'document-text',
    color: '#0891B2',
    premium: true,
    sections: [
      {
        titleAr: 'تقسيم الممتلكات (Zugewinnausgleich)',
        titleDe: 'Vermögensaufteilung (Zugewinnausgleich)',
        contentAr: 'بعد الطلاق يتم تقسيم الممتلكات وفق نظام Zugewinnausgleich:\n\n• يتم حساب ما اكتسبه كل طرف خلال الزواج.\n• الفرق بين المكتسبات يُقسم بالتساوي.\n• الممتلكات قبل الزواج والميراث لا تُقسم.\n• الديون المشتركة تُقسم أيضاً.\n• يمكن الاتفاق على تقسيم مختلف بالتراضي.',
        contentDe: 'Nach der Scheidung erfolgt die Vermögensaufteilung nach dem Zugewinnausgleich:\n\n• Es wird berechnet, was jeder Partner während der Ehe erworben hat.\n• Die Differenz wird hälftig geteilt.\n• Voreheliches Vermögen und Erbschaften werden nicht geteilt.\n• Gemeinsame Schulden werden ebenfalls geteilt.\n• Eine abweichende Vereinbarung ist möglich.',
      },
      {
        titleAr: 'النفقة بعد الطلاق (Unterhalt)',
        titleDe: 'Unterhalt nach der Scheidung',
        contentAr: '• نفقة الأطفال (Kindesunterhalt): إلزامية وتعتمد على جدول دوسلدورف.\n• نفقة الزوج/ة (Ehegattenunterhalt): ليست تلقائية، تعتمد على عدة عوامل.\n• مدة النفقة: تتناقص مع الوقت في معظم الحالات.\n• يمكن تعديل النفقة إذا تغيرت الظروف المالية.\n• عدم دفع النفقة يعد جريمة جنائية (§170 StGB).',
        contentDe: '• Kindesunterhalt: Verpflichtend nach der Düsseldorfer Tabelle.\n• Ehegattenunterhalt: Nicht automatisch, hängt von mehreren Faktoren ab.\n• Dauer: Nimmt in den meisten Fällen mit der Zeit ab.\n• Anpassung bei Änderung der finanziellen Verhältnisse möglich.\n• Nichtzahlung ist eine Straftat (§170 StGB).',
      },
      {
        titleAr: 'الحضانة وحق الزيارة بعد الطلاق',
        titleDe: 'Sorgerecht und Umgang nach der Scheidung',
        contentAr: '• الحضانة المشتركة تبقى الأصل بعد الطلاق.\n• حق الزيارة (Umgangsrecht) مكفول قانونياً لكلا الوالدين.\n• نموذج الأسبوع بالتناوب (Wechselmodell) خيار متاح.\n• يمكن الاتفاق على ترتيبات مرنة بالتراضي.\n• المحكمة تقرر بناء على مصلحة الطفل الفضلى.\n• رأي الطفل يؤخذ بالاعتبار (خاصة بعد سن 12).',
        contentDe: '• Gemeinsames Sorgerecht bleibt der Regelfall.\n• Umgangsrecht ist für beide Eltern gesetzlich garantiert.\n• Das Wechselmodell ist eine verfügbare Option.\n• Flexible Vereinbarungen sind einvernehmlich möglich.\n• Das Gericht entscheidet nach dem Kindeswohl.\n• Die Meinung des Kindes wird berücksichtigt (besonders ab 12 Jahren).',
      },
    ],
    faqAr: [
      { question: 'كم تكلفة الطلاق في ألمانيا؟', answer: 'تعتمد على الدخل. التكاليف تشمل رسوم المحكمة والمحامي. يمكن طلب مساعدة قانونية (Prozesskostenhilfe) إذا كان الدخل منخفضاً.' },
      { question: 'هل يمكنني منع زوجتي/زوجي من السفر بالأطفال؟', answer: 'نعم، إذا كانت الحضانة مشتركة. يمكنك طلب أمر من المحكمة لمنع السفر بدون موافقتك.' },
    ],
    faqDe: [
      { question: 'Wie viel kostet eine Scheidung in Deutschland?', answer: 'Abhängig vom Einkommen. Prozesskostenhilfe ist bei geringem Einkommen möglich.' },
      { question: 'Kann ich verhindern, dass mein Ex mit den Kindern verreist?', answer: 'Ja, bei gemeinsamen Sorgerecht. Sie können einen gerichtlichen Beschluss beantragen.' },
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
    contentAr: 'يضمن القانون الألماني حقوقاً واسعة للأطفال تشمل الحق في التعليم والرعاية الصحية والحماية من العنف.\n\nالحقوق الأساسية للأطفال في ألمانيا:\n\n1. الحق في التربية بدون عنف (§1631 BGB)\nمنذ عام 2000، يحظر القانون الألماني أي شكل من أشكال العقاب البدني أو الإهانة النفسية للأطفال. هذا يشمل الضرب، الصفع، أو أي شكل من أشكال الإيذاء الجسدي.\n\n2. الحق في التعليم\nالتعليم إلزامي في ألمانيا لجميع الأطفال من سن 6 إلى 18 سنة (Schulpflicht). الدولة تتحمل تكاليف التعليم الأساسي بالكامل. عدم إرسال الطفل للمدرسة يعد مخالفة قانونية.\n\n3. الحق في الرعاية الصحية\nجميع الأطفال مشمولون بالتأمين الصحي الإلزامي. الفحوصات الوقائية للأطفال (U-Untersuchungen) إلزامية وتشمل 10 فحوصات من الولادة حتى سن 6 سنوات.\n\n4. الحق في الحماية من الاستغلال\nيحمي القانون الأطفال من الاستغلال الاقتصادي، عمالة الأطفال ممنوعة بشكل عام تحت سن 15 سنة مع استثناءات محدودة.\n\n5. دور الـ Jugendamt\nالـ Jugendamt مسؤول عن حماية حقوق الأطفال وتقديم الدعم للعائلات. يتدخل فقط عند وجود خطر حقيقي على الطفل.\n\n6. حقوق الطفل في الانفصال والطلاق\nيؤخذ رأي الطفل بالاعتبار في قرارات الحضانة، خاصة بعد سن 12. المحكمة تقرر دائماً بناء على مصلحة الطفل الفضلى (Kindeswohl).\n\n7. حق الطفل في التواصل مع كلا الوالدين\nحتى بعد الطلاق، يحق للطفل رؤية كلا الوالدين بشكل منتظم (Umgangsrecht). منع الطفل من رؤية أحد والديه يعد مخالفة قانونية.',
    contentDe: 'Das deutsche Recht gewährleistet umfassende Rechte für Kinder:\n\n1. Recht auf gewaltfreie Erziehung (§1631 BGB)\nSeit dem Jahr 2000 verbietet das deutsche Gesetz jede Form körperlicher Bestrafung oder seelischer Verletzung von Kindern.\n\n2. Recht auf Bildung\nIn Deutschland besteht allgemeine Schulpflicht von 6 bis 18 Jahren. Der Staat trägt die Kosten der Grundbildung vollständig.\n\n3. Recht auf Gesundheitsversorgung\nAlle Kinder sind gesetzlich krankenversichert. Die Vorsorgeuntersuchungen (U-Untersuchungen) sind verpflichtend.\n\n4. Recht auf Schutz vor Ausbeutung\nKinderarbeit ist unter 15 Jahren grundsätzlich verboten.\n\n5. Rolle des Jugendamts\nDas Jugendamt ist für den Schutz der Kinderrechte und die Unterstützung von Familien zuständig.\n\n6. Kinderrechte bei Trennung und Scheidung\nDie Meinung des Kindes wird bei Sorgerechtsentscheidungen berücksichtigt, besonders ab 12 Jahren. Das Gericht entscheidet nach dem Kindeswohl.\n\n7. Recht auf Kontakt zu beiden Eltern\nAuch nach der Scheidung hat das Kind Anspruch auf regelmäßigen Umgang mit beiden Elternteilen.',
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
    contentAr: 'يتطلب الطلاق في ألمانيا سنة انفصال على الأقل (Trennungsjahr). إليك كل ما تحتاج معرفته:\n\nالشروط الأساسية للطلاق:\n• سنة انفصال كاملة (يمكن داخل نفس المنزل مع فصل الأمور المعيشية).\n• يجب تقديم الطلب عبر محامٍ - لا يمكنك تقديمه بنفسك.\n• يحتاج كل طرف لمحامٍ خاص (إلا في حالة الطلاق بالتراضي حيث يكفي محامٍ واحد).\n\nتكاليف الطلاق:\n• رسوم المحكمة: تعتمد على الدخل المشترك.\n• أتعاب المحامي: حسب قيمة النزاع (Verfahrenswert).\n• مثال: بدخل مشترك 3,000€ شهرياً، التكاليف تقريباً 2,000-3,000€.\n• يمكن طلب مساعدة قانونية (Prozesskostenhilfe) إذا كان الدخل محدوداً.\n\nتقسيم الممتلكات (Zugewinnausgleich):\n• يُحسب ما اكتسبه كل طرف خلال الزواج.\n• الفرق يُقسم بالتساوي.\n• الميراث والممتلكات قبل الزواج لا تُقسم.\n\nالنفقة:\n• نفقة الأطفال: إلزامية حسب جدول دوسلدورف (Düsseldorfer Tabelle).\n• نفقة الزوج/ة: تعتمد على الحاجة والقدرة المالية.\n\nالحضانة:\n• الحضانة المشتركة هي الأصل وتبقى بعد الطلاق.\n• الحضانة الفردية تُمنح فقط في حالات استثنائية.\n• رأي الطفل يؤخذ بالاعتبار خاصة بعد سن 12.\n\nنصائح مهمة:\n1. وثّق بداية فترة الانفصال.\n2. لا تغادر المنزل بدون ترتيب قانوني.\n3. احتفظ بنسخ من جميع الوثائق المالية.\n4. لا توقع أي اتفاقية بدون استشارة محامٍ.',
    contentDe: 'Eine Scheidung in Deutschland erfordert mindestens ein Trennungsjahr. Hier ist alles, was Sie wissen müssen:\n\nGrundvoraussetzungen:\n• Ein volles Trennungsjahr (auch innerhalb der gleichen Wohnung möglich).\n• Der Antrag muss über einen Anwalt eingereicht werden.\n• Jede Partei benötigt einen eigenen Anwalt (außer bei einvernehmlicher Scheidung).\n\nKosten:\n• Gerichtsgebühren: Abhängig vom gemeinsamen Einkommen.\n• Anwaltskosten: Nach dem Verfahrenswert.\n• Beispiel: Bei 3.000€ Nettoeinkommen ca. 2.000-3.000€.\n• Prozesskostenhilfe bei geringem Einkommen möglich.\n\nVermögensaufteilung (Zugewinnausgleich):\n• Berechnung des während der Ehe erworbenen Vermögens.\n• Die Differenz wird hälftig geteilt.\n• Erbschaften und voreheliches Vermögen bleiben unberührt.\n\nUnterhalt:\n• Kindesunterhalt: Verpflichtend nach der Düsseldorfer Tabelle.\n• Ehegattenunterhalt: Abhängig von Bedürftigkeit und Leistungsfähigkeit.\n\nSorgerecht:\n• Gemeinsames Sorgerecht ist der Regelfall.\n• Alleiniges Sorgerecht nur in Ausnahmefällen.\n• Meinung des Kindes wird berücksichtigt, besonders ab 12 Jahren.\n\nWichtige Tipps:\n1. Dokumentieren Sie den Trennungsbeginn.\n2. Verlassen Sie die Wohnung nicht ohne rechtliche Regelung.\n3. Bewahren Sie Kopien aller Finanzunterlagen auf.\n4. Unterschreiben Sie nichts ohne Anwalt.',
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
    contentAr: 'الغرامات في ألمانيا يمكن أن تكون مرتفعة جداً. إليك دليل شامل لتجنبها:\n\nأكثر الغرامات شيوعاً وقيمتها:\n\n1. مخالفات المرور:\n• تجاوز السرعة 20 كم/س: 35€ + نقطة في فلنسبورغ.\n• تجاوز السرعة 50 كم/س: 560€ + نقطتان + شهر حرمان.\n• استخدام الهاتف أثناء القيادة: 100€ + نقطة.\n• عدم ربط حزام الأمان: 30€.\n• القيادة تحت تأثير الكحول: 500€-1,500€ + نقاط + حرمان.\n\n2. مخالفات السكن:\n• ضوضاء بعد الساعة 22:00: حتى 5,000€.\n• إلقاء نفايات بشكل خاطئ: 25€-2,500€ حسب الولاية.\n• عدم تنظيف الثلج أمام المنزل: حتى 10,000€ إذا أصيب شخص.\n\n3. مخالفات التسجيل:\n• عدم التسجيل (Anmeldung) خلال 14 يوماً: حتى 1,000€.\n• عدم تجديد الإقامة: قد تصل لغرامة + عواقب قانونية.\n\nكيف تعترض على غرامة:\n1. تحقق من المهلة - عادة 14 يوماً.\n2. اكتب اعتراضاً كتابياً (Einspruch) موضحاً أسبابك.\n3. أرفق أي أدلة داعمة (صور، شهادات).\n4. أرسله بالبريد المسجل (Einschreiben).\n5. إذا رُفض الاعتراض، يمكنك الطعن أمام المحكمة.\n\nنصيحة مهمة: احتفظ بنسخة من كل غرامة واعتراض. إذا كانت الغرامة كبيرة (أكثر من 200€)، استشر محامياً.',
    contentDe: 'Bußgelder in Deutschland können sehr hoch sein. Hier ein umfassender Leitfaden:\n\nHäufigste Bußgelder:\n\n1. Verkehrsverstöße:\n• 20 km/h zu schnell: 35€ + Punkt in Flensburg.\n• 50 km/h zu schnell: 560€ + 2 Punkte + 1 Monat Fahrverbot.\n• Handy am Steuer: 100€ + Punkt.\n• Ohne Gurt: 30€.\n• Alkohol am Steuer: 500€-1.500€ + Punkte + Fahrverbot.\n\n2. Wohnungsverstöße:\n• Lärm nach 22:00 Uhr: bis 5.000€.\n• Falsche Müllentsorgung: 25€-2.500€.\n• Nicht geräumter Schnee: bis 10.000€ bei Personenschaden.\n\n3. Meldeverstöße:\n• Keine Anmeldung innerhalb 14 Tagen: bis 1.000€.\n• Verspätete Aufenthaltsverlängerung: Bußgeld + rechtliche Folgen.\n\nEinspruch gegen Bußgelder:\n1. Frist prüfen - meist 14 Tage.\n2. Schriftlichen Einspruch mit Begründung verfassen.\n3. Beweise beifügen.\n4. Per Einschreiben senden.\n5. Bei Ablehnung: Beschwerde beim Gericht möglich.\n\nWichtiger Tipp: Bewahren Sie Kopien auf. Bei hohen Bußgeldern (über 200€) einen Anwalt konsultieren.',
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
    contentAr: 'يميز القانون الألماني بين عدة أنواع من الحضانة. إليك كل ما تحتاج معرفته:\n\nأنواع الحضانة في ألمانيا:\n\n1. الحضانة المشتركة (Gemeinsames Sorgerecht)\n• هي الأصل للزوجين المتزوجين.\n• تبقى بعد الطلاق تلقائياً.\n• كلا الوالدين يتخذان القرارات المهمة معاً.\n• القرارات اليومية يتخذها من يعيش معه الطفل.\n\n2. الحضانة الفردية (Alleiniges Sorgerecht)\n• تُمنح فقط بقرار محكمة.\n• تُطلب عادة عند وجود خلاف شديد أو خطر على الطفل.\n• يحتفظ الطرف الآخر بحق الزيارة (Umgangsrecht).\n\n3. حق الزيارة (Umgangsrecht)\n• مكفول قانونياً لكلا الوالدين (§1684 BGB).\n• الطفل له أيضاً حق في رؤية كلا والديه.\n• لا يمكن لأحد الوالدين منع الآخر من الزيارة بدون قرار قضائي.\n• عادة يكون كل أسبوعين لعطلة نهاية الأسبوع + نصف العطل المدرسية.\n\n4. نموذج الأسبوع بالتناوب (Wechselmodell)\n• الطفل يقضي أسبوعاً عند كل والد بالتناوب.\n• يحتاج اتفاق الوالدين أو قرار محكمة.\n• الأفضل للأطفال الأكبر سناً والقريبين جغرافياً.\n\nكيف تحمي حقك في الحضانة:\n1. وثّق علاقتك الإيجابية بأطفالك (صور، أنشطة، مدرسة).\n2. شارك فعلياً في حياة أطفالك اليومية.\n3. تعاون مع الـ Jugendamt.\n4. لا تتحدث بالسوء عن الطرف الآخر أمام الأطفال.\n5. احترم مواعيد الزيارة بدقة.\n6. استشر محامي أسرة متخصص.\n\nمتى يتدخل القاضي:\n• عند عدم اتفاق الوالدين.\n• عند وجود خطر على الطفل.\n• عند طلب تغيير ترتيبات الحضانة.\n• المحكمة تقرر دائماً بناء على مصلحة الطفل الفضلى (Kindeswohl).',
    contentDe: 'Das deutsche Recht unterscheidet zwischen verschiedenen Arten des Sorgerechts:\n\nArten des Sorgerechts:\n\n1. Gemeinsames Sorgerecht\n• Regelfall bei verheirateten Eltern.\n• Bleibt nach der Scheidung automatisch bestehen.\n• Beide Eltern treffen wichtige Entscheidungen gemeinsam.\n• Alltagsentscheidungen trifft der betreuende Elternteil.\n\n2. Alleiniges Sorgerecht\n• Nur durch Gerichtsbeschluss.\n• Bei schwerem Konflikt oder Kindeswohlgefährdung.\n• Der andere Elternteil behält das Umgangsrecht.\n\n3. Umgangsrecht\n• Gesetzlich garantiert für beide Eltern (§1684 BGB).\n• Auch das Kind hat ein Recht auf Umgang.\n• Kein Elternteil darf den Umgang ohne Gerichtsbeschluss verweigern.\n• Üblich: Alle zwei Wochen Wochenende + halbe Schulferien.\n\n4. Wechselmodell\n• Kind verbringt abwechselnd eine Woche bei jedem Elternteil.\n• Erfordert Einigung oder Gerichtsbeschluss.\n• Besser für ältere Kinder mit räumlicher Nähe.\n\nSo schützen Sie Ihr Sorgerecht:\n1. Dokumentieren Sie Ihre positive Beziehung.\n2. Beteiligen Sie sich aktiv am Alltag der Kinder.\n3. Kooperieren Sie mit dem Jugendamt.\n4. Sprechen Sie nicht schlecht über den anderen Elternteil.\n5. Halten Sie Umgangszeiten ein.\n6. Konsultieren Sie einen Familienrechtsanwalt.\n\nWann entscheidet das Gericht:\n• Bei Uneinigkeit der Eltern.\n• Bei Kindeswohlgefährdung.\n• Bei Änderung der Sorgerechtsvereinbarung.\n• Das Gericht entscheidet immer nach dem Kindeswohl.',
    category: 'Custody',
    categoryAr: 'الحضانة',
    date: '2025-04-10',
    author: 'المحامي يوسف حسن',
    readTimeMinutes: 10,
    image: 'children',
  },
];
