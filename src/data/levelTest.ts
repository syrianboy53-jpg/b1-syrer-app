export interface LevelTestQuestion {
  id: number;
  question: string;
  questionAr: string;
  options: string[];
  correctIndex: number;
  level: 'A1' | 'A2' | 'B1';
}

export const levelTestQuestions: LevelTestQuestion[] = [
  // A1 Questions (1-13)
  { id: 1, question: 'Wie ___ Sie?', questionAr: 'ما اسمك؟', options: ['heißen', 'heißt', 'heiße', 'heißes'], correctIndex: 0, level: 'A1' },
  { id: 2, question: 'Ich ___ aus Syrien.', questionAr: 'أنا من سوريا.', options: ['komme', 'kommen', 'kommst', 'kommt'], correctIndex: 0, level: 'A1' },
  { id: 3, question: 'Das ist ___ Buch.', questionAr: 'هذا كتاب.', options: ['ein', 'eine', 'einen', 'einer'], correctIndex: 0, level: 'A1' },
  { id: 4, question: 'Ich ___ Deutsch.', questionAr: 'أنا أتعلم الألمانية.', options: ['lerne', 'lernen', 'lernst', 'lernt'], correctIndex: 0, level: 'A1' },
  { id: 5, question: '___ wohnst du?', questionAr: 'أين تسكن؟', options: ['Wo', 'Was', 'Wer', 'Wie'], correctIndex: 0, level: 'A1' },
  { id: 6, question: 'Ich habe ___ Kinder.', questionAr: 'لدي طفلان.', options: ['zwei', 'zwo', 'zweite', 'zweit'], correctIndex: 0, level: 'A1' },
  { id: 7, question: 'Er ___ Lehrer.', questionAr: 'هو معلم.', options: ['ist', 'bist', 'sind', 'bin'], correctIndex: 0, level: 'A1' },
  { id: 8, question: 'Wir ___ in Berlin.', questionAr: 'نحن نسكن في برلين.', options: ['wohnen', 'wohne', 'wohnst', 'wohnt'], correctIndex: 0, level: 'A1' },
  { id: 9, question: 'Ich trinke gern ___.', questionAr: 'أحب شرب الشاي.', options: ['Tee', 'der Tee', 'einen Tee', 'dem Tee'], correctIndex: 0, level: 'A1' },
  { id: 10, question: 'Die Kinder ___ im Park.', questionAr: 'الأطفال يلعبون في الحديقة.', options: ['spielen', 'spielt', 'spiele', 'spielst'], correctIndex: 0, level: 'A1' },
  { id: 11, question: 'Heute ist ___ kalt.', questionAr: 'اليوم الطقس بارد.', options: ['es', 'er', 'sie', 'das'], correctIndex: 0, level: 'A1' },
  { id: 12, question: 'Ich ___ um 7 Uhr auf.', questionAr: 'أستيقظ الساعة 7.', options: ['stehe', 'stehen', 'stehst', 'steht'], correctIndex: 0, level: 'A1' },
  { id: 13, question: '___ du Geschwister?', questionAr: 'هل لديك إخوة؟', options: ['Hast', 'Haben', 'Hat', 'Habt'], correctIndex: 0, level: 'A1' },
  // A2 Questions (14-27)
  { id: 14, question: 'Ich bin nach Deutschland gekommen, ___ ich hier arbeiten will.', questionAr: 'جئت إلى ألمانيا لأنني أريد العمل هنا.', options: ['weil', 'dass', 'wenn', 'ob'], correctIndex: 0, level: 'A2' },
  { id: 15, question: 'Gestern ___ ich zum Arzt gegangen.', questionAr: 'بالأمس ذهبت إلى الطبيب.', options: ['bin', 'habe', 'war', 'hatte'], correctIndex: 0, level: 'A2' },
  { id: 16, question: 'Ich freue ___ auf den Urlaub.', questionAr: 'أنا أتطلع للإجازة.', options: ['mich', 'mir', 'sich', 'uns'], correctIndex: 0, level: 'A2' },
  { id: 17, question: 'Der Mann, ___ dort steht, ist mein Lehrer.', questionAr: 'الرجل الذي يقف هناك هو معلمي.', options: ['der', 'den', 'dem', 'die'], correctIndex: 0, level: 'A2' },
  { id: 18, question: 'Ich muss morgen früh ___.', questionAr: 'يجب أن أستيقظ باكراً غداً.', options: ['aufstehen', 'aufstehe', 'aufgestanden', 'stehe auf'], correctIndex: 0, level: 'A2' },
  { id: 19, question: 'Er hat mir ___ geholfen.', questionAr: 'لقد ساعدني كثيراً.', options: ['sehr', 'viel', 'groß', 'gut'], correctIndex: 0, level: 'A2' },
  { id: 20, question: 'Wir sind ___ dem Kino gegangen.', questionAr: 'ذهبنا إلى السينما.', options: ['in', 'ins', 'im', 'zu'], correctIndex: 1, level: 'A2' },
  { id: 21, question: 'Kannst du ___ helfen?', questionAr: 'هل يمكنك مساعدتي؟', options: ['mir', 'mich', 'mein', 'meinem'], correctIndex: 0, level: 'A2' },
  { id: 22, question: 'Die Wohnung ist ___ als meine alte.', questionAr: 'الشقة أكبر من شقتي القديمة.', options: ['größer', 'groß', 'großer', 'am größten'], correctIndex: 0, level: 'A2' },
  { id: 23, question: 'Ich ___ gern in Deutschland leben.', questionAr: 'أود أن أعيش في ألمانيا.', options: ['würde', 'werde', 'wollte', 'wurde'], correctIndex: 0, level: 'A2' },
  { id: 24, question: '___ es morgen regnet, bleibe ich zu Hause.', questionAr: 'إذا أمطرت غداً، سأبقى في البيت.', options: ['Wenn', 'Weil', 'Dass', 'Ob'], correctIndex: 0, level: 'A2' },
  { id: 25, question: 'Er hat das Buch auf ___ Tisch gelegt.', questionAr: 'وضع الكتاب على الطاولة.', options: ['den', 'dem', 'der', 'das'], correctIndex: 0, level: 'A2' },
  { id: 26, question: 'Ich interessiere mich ___ Musik.', questionAr: 'أنا مهتم بالموسيقى.', options: ['für', 'an', 'auf', 'über'], correctIndex: 0, level: 'A2' },
  { id: 27, question: 'Das Essen ___ von meiner Mutter gekocht.', questionAr: 'الطعام طُبخ من قبل أمي.', options: ['wurde', 'wird', 'war', 'hat'], correctIndex: 0, level: 'A2' },
  // B1 Questions (28-40)
  { id: 28, question: 'Er tat so, als ___ er nichts gewusst.', questionAr: 'تصرف وكأنه لم يكن يعلم شيئاً.', options: ['hätte', 'hat', 'hatte', 'habe'], correctIndex: 0, level: 'B1' },
  { id: 29, question: 'Ich habe vor, nächstes Jahr eine Ausbildung ___.', questionAr: 'أنوي أن أبدأ تدريباً مهنياً العام القادم.', options: ['zu machen', 'machen', 'gemacht', 'machend'], correctIndex: 0, level: 'B1' },
  { id: 30, question: 'Je mehr ich lerne, ___ besser verstehe ich.', questionAr: 'كلما تعلمت أكثر، فهمت أفضل.', options: ['desto', 'so', 'um', 'als'], correctIndex: 0, level: 'B1' },
  { id: 31, question: 'Das Problem lässt sich leicht ___.', questionAr: 'يمكن حل المشكلة بسهولة.', options: ['lösen', 'gelöst', 'zu lösen', 'lösend'], correctIndex: 0, level: 'B1' },
  { id: 32, question: 'Obwohl es regnete, ___ wir spazieren gegangen.', questionAr: 'رغم أنه كان يمطر، ذهبنا للتنزه.', options: ['sind', 'haben', 'waren', 'hatten'], correctIndex: 0, level: 'B1' },
  { id: 33, question: '___ ich in Deutschland angekommen bin, habe ich sofort einen Deutschkurs besucht.', questionAr: 'عندما وصلت ألمانيا، التحقت فوراً بدورة ألمانية.', options: ['Nachdem', 'Bevor', 'Während', 'Bis'], correctIndex: 0, level: 'B1' },
  { id: 34, question: 'Er empfahl mir, mehr Bücher ___.', questionAr: 'نصحني بقراءة المزيد من الكتب.', options: ['zu lesen', 'lesen', 'gelesen', 'lesend'], correctIndex: 0, level: 'B1' },
  { id: 35, question: 'Die Frau, ___ Mann Arzt ist, arbeitet als Lehrerin.', questionAr: 'المرأة التي زوجها طبيب تعمل كمعلمة.', options: ['deren', 'die', 'der', 'dessen'], correctIndex: 0, level: 'B1' },
  { id: 36, question: 'Das Haus, in ___ wir wohnen, ist sehr alt.', questionAr: 'المنزل الذي نسكن فيه قديم جداً.', options: ['dem', 'das', 'den', 'der'], correctIndex: 0, level: 'B1' },
  { id: 37, question: 'Anstatt ___ zu lernen, hat er ferngesehen.', questionAr: 'بدلاً من أن يدرس، شاهد التلفاز.', options: ['Deutsch', 'das Deutsch', 'dem Deutsch', 'des Deutsch'], correctIndex: 0, level: 'B1' },
  { id: 38, question: 'Wenn ich reich ___, würde ich ein Haus kaufen.', questionAr: 'لو كنت غنياً، لاشتريت منزلاً.', options: ['wäre', 'bin', 'war', 'sei'], correctIndex: 0, level: 'B1' },
  { id: 39, question: 'Es wird erwartet, ___ alle Teilnehmer pünktlich kommen.', questionAr: 'يُتوقع أن يأتي جميع المشاركين في الموعد.', options: ['dass', 'weil', 'ob', 'wenn'], correctIndex: 0, level: 'B1' },
  { id: 40, question: 'Trotz ___ schlechten Wetters gingen wir spazieren.', questionAr: 'رغم الطقس السيء، ذهبنا للتنزه.', options: ['des', 'dem', 'den', 'der'], correctIndex: 0, level: 'B1' },
];
