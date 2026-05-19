// Auto-generated from b1-syrer.de website data
// Exam: 5 models | Hören: 6 | Lesen: 9 | Schreiben: 9 | Sprechen: 3

export interface ExamModel {
  id: string;
  number: number;
  titleAr: string;
  titleDe: string;
  theme: string;
  themeIcon: string;
  difficulty: number | string;
  durationMin: number;
  premium: boolean;
  descriptionAr: string;
  highlights: string[];
  parts: any;
  lesenId?: string;
  hoerenId?: string;
  bausteineId?: string;
  schreibenId?: string;
  sprechenLabel?: string;
  lesen?: any[];
  hoeren?: any[];
  bausteine?: any;
  schreiben?: any;
  sprechen?: any;
}

export interface HoerenModel {
  id: string;
  title: string;
  description: string;
  parts: any[];
}

export interface LesenModel {
  id: string;
  title: string;
  description: string;
  parts: any[];
}

export interface SchreibenModel {
  id: string;
  title: string;
  description: string;
  tasks: any[];
}

export interface SprechenPart {
  id: string;
  partNumber: number;
  titleAr: string;
  titleDe: string;
  descriptionAr: string;
  instructionsDe?: string;
  scenarios: any[];
}

export interface SprechenDialog {
  id: string;
  titleAr: string;
  titleDe: string;
  contextAr: string;
  durationSec: number;
  opener: any;
  turns: any[];
  closingTipAr: string;
}

export const examModels: ExamModel[] = [
  {
    "id": "mock-1",
    "number": 1,
    "titleAr": "النموذج 1 — الحياة اليوميّة والعائلة",
    "titleDe": "Modell 1 — Alltag & Familie",
    "theme": "Alltag, Familie, Wohnen",
    "themeIcon": "🏠",
    "difficulty": 2,
    "durationMin": 145,
    "premium": false,
    "lesenId": "lesen-1",
    "hoerenId": "hoeren-1",
    "bausteineId": "sb-1",
    "schreibenId": "schreiben-1",
    "sprechenLabel": "Teil 1: شيء نخطّط له معاً",
    "descriptionAr": "نموذج تمهيدي مناسب للبدء — مواضيع يوميّة (السكن، العائلة، الحياة في الحيّ).",
    "highlights": [
      "Lesen 5 أجزاء — إعلانات + مقالات قصيرة",
      "Hören 4 أجزاء — حوارات في الأماكن العامّة",
      "Sprachbausteine جزءان — رسالة بريديّة",
      "Schreiben رسالة إلى صديق",
      "Sprechen التخطيط لمناسبة عائليّة"
    ],
    "parts": {
      "lesen": 45,
      "hoeren": 30,
      "bausteine": 15,
      "schreiben": 30,
      "sprechen": 25
    }
  },
  {
    "id": "mock-2",
    "number": 2,
    "titleAr": "النموذج 2 — العمل والوظيفة",
    "titleDe": "Modell 2 — Arbeit & Beruf",
    "theme": "Beruf, Bewerbung, Arbeitsplatz",
    "themeIcon": "💼",
    "difficulty": 3,
    "durationMin": 145,
    "premium": false,
    "lesenId": "lesen-2",
    "hoerenId": "hoeren-2",
    "bausteineId": "sb-2",
    "schreibenId": "schreiben-2",
    "sprechenLabel": "Teil 1: التخطيط لرحلة عمل / دورة",
    "descriptionAr": "يركّز على بيئة العمل (التقدّم لوظيفة، اجتماعات، تقارير، طلبات تدريب).",
    "highlights": [
      "Lesen إعلانات وظائف ومقابلات قصيرة",
      "Hören إعلانات في المكتب + حوار مع رئيس العمل",
      "Sprachbausteine رسالة رسميّة",
      "Schreiben رسالة شكوى أو طلب رسمي",
      "Sprechen التخطيط لاجتماع/دورة"
    ],
    "parts": {
      "lesen": 45,
      "hoeren": 30,
      "bausteine": 15,
      "schreiben": 30,
      "sprechen": 25
    }
  },
  {
    "id": "mock-3",
    "number": 3,
    "titleAr": "النموذج 3 — السفر والمواصلات",
    "titleDe": "Modell 3 — Reisen & Verkehr",
    "theme": "Reisen, Tourismus, Bahn",
    "themeIcon": "✈️",
    "difficulty": 3,
    "durationMin": 145,
    "premium": true,
    "lesenId": "lesen-3",
    "hoerenId": "hoeren-3",
    "bausteineId": "sb-3",
    "schreibenId": "schreiben-3",
    "sprechenLabel": "Teil 2: Vortrag — رحلتي المفضّلة",
    "descriptionAr": "مواضيع السفر، رحلات قطارات، فنادق، تجارب سياحيّة، مشاكل في المطار.",
    "highlights": [
      "Lesen عروض رحلات + مقال عن السياحة المستدامة",
      "Hören إعلانات في المحطّة + مقابلة عن العمل",
      "Sprachbausteine رسالة احتجاج",
      "Schreiben بريد إلكتروني لشركة سياحة",
      "Sprechen عرض شخصي عن وجهة سياحيّة"
    ],
    "parts": {
      "lesen": 45,
      "hoeren": 30,
      "bausteine": 15,
      "schreiben": 30,
      "sprechen": 25
    }
  },
  {
    "id": "mock-4",
    "number": 4,
    "titleAr": "النموذج 4 — الصحّة والرياضة",
    "titleDe": "Modell 4 — Gesundheit & Sport",
    "theme": "Gesundheit, Sport, Ernährung",
    "themeIcon": "❤️",
    "difficulty": 4,
    "durationMin": 145,
    "premium": true,
    "lesenId": "lesen-4",
    "hoerenId": "hoeren-4",
    "bausteineId": "sb-4",
    "schreibenId": "schreiben-4",
    "sprechenLabel": "Teil 3: مناقشة — الرياضة في المدارس",
    "descriptionAr": "مواضيع الصحّة، الغذاء الصحي، اللياقة البدنيّة، الزيارات الطبّيّة، نصائح مكافحة التوتّر.",
    "highlights": [
      "Lesen مقالات صحّة + إعلانات نوادٍ",
      "Hören نصائح طبيب + حوار عن الإجهاد",
      "Sprachbausteine بريد لطبيب",
      "Schreiben نصائح لصديق متعب",
      "Sprechen مناقشة الرياضة في المدارس"
    ],
    "parts": {
      "lesen": 45,
      "hoeren": 30,
      "bausteine": 15,
      "schreiben": 30,
      "sprechen": 25
    }
  },
  {
    "id": "mock-5",
    "number": 5,
    "titleAr": "النموذج 5 — البيئة والتكنولوجيا",
    "titleDe": "Modell 5 — Umwelt & Technik",
    "theme": "Umwelt, Klima, Digitalisierung",
    "themeIcon": "🌱",
    "difficulty": 5,
    "durationMin": 145,
    "premium": true,
    "lesenId": "lesen-5",
    "hoerenId": "hoeren-5",
    "bausteineId": "sb-5",
    "schreibenId": "schreiben-5",
    "sprechenLabel": "Teil 3: مناقشة — الذكاء الاصطناعي والوظائف",
    "descriptionAr": "النموذج الأكثر تحدّياً — مواضيع البيئة وتغيّر المناخ والذكاء الاصطناعي والإدمان الرقمي.",
    "highlights": [
      "Lesen مقال علمي عن الاحتباس الحراري",
      "Hören نشرة أخبار + حوار مع خبير",
      "Sprachbausteine مقال رأي",
      "Schreiben Leserbrief عن تقنيّة جديدة",
      "Sprechen مناقشة AI ومستقبل الوظائف"
    ],
    "parts": {
      "lesen": 45,
      "hoeren": 30,
      "bausteine": 15,
      "schreiben": 30,
      "sprechen": 25
    }
  }
];

export const hoerenModels: HoerenModel[] = [
  {
    "id": "hoeren-1",
    "title": "نموذج Hören رقم 1",
    "description": "نموذج استماع كامل مع النص المكتوب (Transkript). يُنصح أن تقرأ النص بصوت عالٍ أو تطلب من صديق قراءته لك، وتجيب على الأسئلة بدون النظر إلى النص.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – رسائل قصيرة",
        "instructionsAr": "خمس رسائل قصيرة على هاتفك الصوتي أو من الراديو. لكل رسالة سؤالان: صح/خطأ ثم اختيار من متعدد.",
        "transcripts": [
          {
            "id": "h1-1",
            "speaker": "Nachricht 1",
            "textDe": "Hallo Maria, hier ist Tom. Du, wegen unseres Treffens heute Abend: Ich schaffe es leider nicht um 19 Uhr, weil meine Tochter krank ist. Können wir auf 20 Uhr verschieben? Ort bleibt gleich – Café Rosa. Ruf mich bitte zurück. Tschüss!"
          },
          {
            "id": "h1-2",
            "speaker": "Nachricht 2",
            "textDe": "Guten Tag, hier ist die Praxis Dr. Schmidt. Ihr Termin am Freitag um 10:00 Uhr wurde verschoben auf Montag, 13:30 Uhr. Bitte bestätigen Sie den neuen Termin telefonisch unter 030 123456. Vielen Dank."
          },
          {
            "id": "h1-3",
            "speaker": "Verkehrsdurchsage",
            "textDe": "Achtung liebe Fahrgäste, wegen Bauarbeiten fahren die U-Bahnen der Linie U6 heute nur zwischen Friedrichstraße und Alt-Mariendorf. Zwischen Tegel und Friedrichstraße fahren Ersatzbusse. Wir bitten um Ihr Verständnis."
          },
          {
            "id": "h1-4",
            "speaker": "Nachricht 4",
            "textDe": "Hallo Herr Al-Ahmad, Kabir hier vom Fitnessstudio. Ihre Mitgliedschaft endet nächste Woche. Wenn Sie verlängern möchten, bekommen Sie 20 % Rabatt. Bitte kommen Sie einfach an der Rezeption vorbei. Schönen Tag!"
          },
          {
            "id": "h1-5",
            "speaker": "Radiowerbung",
            "textDe": "Elektromarkt „Blitz\"! Nur am Samstag: Fernseher, Waschmaschinen und Handys um bis zu 40 % reduziert. Kommen Sie in die Hauptstraße 15 in Köln und sparen Sie! Nur am Samstag, 9 bis 18 Uhr!"
          }
        ],
        "questions": [
          {
            "id": "hoeren-1-1-1",
            "statementDe": "Tom kommt heute nicht zum Treffen.",
            "statementAr": "توم لن يأتي إلى اللقاء اليوم.",
            "correct": false,
            "explanation": "سيأتي لكن متأخراً ساعة واحدة."
          },
          {
            "id": "hoeren-1-1-2",
            "promptDe": "Um wie viel Uhr treffen sich Tom und Maria jetzt?",
            "options": [
              {
                "id": "a",
                "de": "Um 19:00 Uhr."
              },
              {
                "id": "b",
                "de": "Um 20:00 Uhr."
              },
              {
                "id": "c",
                "de": "Sie treffen sich nicht."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-1-1-3",
            "statementDe": "Der Termin bei Dr. Schmidt ist auf Montag verschoben.",
            "correct": true
          },
          {
            "id": "hoeren-1-1-4",
            "promptDe": "Wie soll der Patient reagieren?",
            "options": [
              {
                "id": "a",
                "de": "Er soll zur Praxis kommen."
              },
              {
                "id": "b",
                "de": "Er soll telefonisch bestätigen."
              },
              {
                "id": "c",
                "de": "Er muss nichts tun."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-1-1-5",
            "statementDe": "Die U6 fährt heute wie immer.",
            "correct": false
          },
          {
            "id": "hoeren-1-1-6",
            "promptDe": "Was fährt zwischen Tegel und Friedrichstraße?",
            "options": [
              {
                "id": "a",
                "de": "Taxis."
              },
              {
                "id": "b",
                "de": "Ersatzbusse."
              },
              {
                "id": "c",
                "de": "Gar nichts."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-1-1-7",
            "statementDe": "Herr Al-Ahmad bekommt einen Rabatt beim Fitnessstudio.",
            "correct": true
          },
          {
            "id": "hoeren-1-1-8",
            "statementDe": "Der Elektromarkt hat den ganzen Monat reduziert.",
            "correct": false,
            "explanation": "فقط يوم السبت."
          }
        ]
      },
      {
        "type": "match-speakers",
        "title": "Teil 2 – خمسة متحدثين",
        "instructionsAr": "خمسة أشخاص يتحدثون عن \"العمل بدوام جزئي\". اربط كل شخص بالجملة المناسبة. يوجد جملة زائدة.",
        "transcripts": [
          {
            "id": "s1",
            "speaker": "Person 1 – Sabrina",
            "textDe": "Ich arbeite jetzt nur noch 20 Stunden pro Woche, weil meine Kinder noch klein sind. Das Gehalt ist weniger, aber ich habe mehr Zeit für die Familie. Für mich ist das perfekt."
          },
          {
            "id": "s2",
            "speaker": "Person 2 – Hamid",
            "textDe": "Teilzeit ist nichts für mich. Ich brauche das Geld und ich arbeite gern. Acht Stunden pro Tag, dazu ein paar Überstunden, das macht mir nichts aus."
          },
          {
            "id": "s3",
            "speaker": "Person 3 – Linda",
            "textDe": "Ich studiere noch und arbeite 10 Stunden in der Woche als Verkäuferin. Nur so kann ich mein Studium finanzieren. Mehr geht nicht, sonst habe ich keine Zeit zum Lernen."
          },
          {
            "id": "s4",
            "speaker": "Person 4 – Karl",
            "textDe": "Seit meiner Krankheit kann ich nicht mehr voll arbeiten. Jetzt bin ich drei Tage im Büro und zwei Tage zu Hause. Mein Chef ist sehr verständnisvoll."
          },
          {
            "id": "s5",
            "speaker": "Person 5 – Meryem",
            "textDe": "Ich habe zwei Teilzeitjobs: morgens in einer Bäckerei und nachmittags als Reinigungskraft. Zusammen verdiene ich genug, aber es ist anstrengend."
          }
        ],
        "options": [
          {
            "id": "a",
            "titleDe": "Diese Person hat gesundheitliche Probleme.",
            "textDe": ""
          },
          {
            "id": "b",
            "titleDe": "Diese Person findet Teilzeit ungeeignet.",
            "textDe": ""
          },
          {
            "id": "c",
            "titleDe": "Diese Person hat mehrere kleine Jobs.",
            "textDe": ""
          },
          {
            "id": "d",
            "titleDe": "Diese Person arbeitet wegen der Kinder weniger.",
            "textDe": ""
          },
          {
            "id": "e",
            "titleDe": "Diese Person arbeitet neben dem Studium.",
            "textDe": ""
          },
          {
            "id": "f",
            "titleDe": "Diese Person ist im Ruhestand.",
            "textDe": ""
          }
        ],
        "questions": [],
        "matchItems": [
          {
            "id": "s1",
            "textDe": "Sabrina",
            "correctAd": "d"
          },
          {
            "id": "s2",
            "textDe": "Hamid",
            "correctAd": "b"
          },
          {
            "id": "s3",
            "textDe": "Linda",
            "correctAd": "e"
          },
          {
            "id": "s4",
            "textDe": "Karl",
            "correctAd": "a"
          },
          {
            "id": "s5",
            "textDe": "Meryem",
            "correctAd": "c"
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 3 – حوار قصير",
        "instructionsAr": "اقرأ الحوار (أو اطلب من أحدهم قراءته بصوت عال) ثم أجب صح / خطأ.",
        "transcripts": [
          {
            "id": "d1",
            "textDe": "A: Guten Tag, hier ist das Rathaus. Wie kann ich Ihnen helfen?\nB: Guten Tag. Mein Name ist Omar Khalil. Ich möchte einen Termin für die Anmeldung meiner Familie.\nA: Ja, einen Moment. Wie groß ist Ihre Familie?\nB: Wir sind vier Personen: meine Frau, zwei Kinder und ich.\nA: Sie brauchen dafür ungefähr 20 Minuten. Haben Sie einen bestimmten Tag?\nB: Am besten nächste Woche, wenn möglich Donnerstag oder Freitag, am Nachmittag.\nA: Ich kann Ihnen Freitag um 14:15 Uhr anbieten.\nB: Das passt gut. Vielen Dank.\nA: Bitte bringen Sie mit: Pässe, Mietvertrag und die Wohnungsgeberbestätigung. Und bitte seien Sie pünktlich.\nB: In Ordnung. Auf Wiederhören."
          }
        ],
        "questions": [
          {
            "id": "hoeren-1-3-1",
            "statementDe": "Herr Khalil hat zwei Kinder.",
            "correct": true
          },
          {
            "id": "hoeren-1-3-2",
            "statementDe": "Der Termin ist am Donnerstag.",
            "correct": false
          },
          {
            "id": "hoeren-1-3-3",
            "statementDe": "Herr Khalil muss den Mietvertrag mitbringen.",
            "correct": true
          },
          {
            "id": "hoeren-1-3-4",
            "statementDe": "Die Familie braucht ungefähr eine Stunde.",
            "correct": false,
            "explanation": "حوالي 20 دقيقة."
          },
          {
            "id": "hoeren-1-3-5",
            "statementDe": "Der Termin ist am Nachmittag.",
            "correct": true
          },
          {
            "id": "hoeren-1-3-6",
            "statementDe": "Eine Arbeitsbescheinigung ist nötig.",
            "correct": false
          }
        ]
      },
      {
        "type": "match-opinions",
        "title": "Teil 4 – نقاش في الراديو",
        "instructionsAr": "نقاش بين شخصين حول \"الطعام النباتي\". لكل جملة قرّر: قالها المتحدث (1)، المتحدثة (2)، أم لم يقلها أحد.",
        "transcripts": [
          {
            "id": "r1",
            "textDe": "Moderator: Heute geht es um vegetarisches und veganes Essen. Unsere Gäste sind Herr Wagner (Koch) und Frau Ibrahim (Ernährungsexpertin).\n\nHerr Wagner: Ich kann verstehen, dass viele Menschen weniger Fleisch essen wollen. Aber in meinem Restaurant muss es auch Fleischgerichte geben, sonst kommen die Gäste nicht.\n\nFrau Ibrahim: Das stimmt nicht ganz. Ich kenne viele Restaurants, die nur vegetarisch kochen und voll sind. Gerade in Großstädten wächst die Nachfrage.\n\nHerr Wagner: Ok, aber viele Menschen denken, vegetarisches Essen ist langweilig und schmeckt nicht. Fleisch ist einfacher.\n\nFrau Ibrahim: Das ist ein Vorurteil! Mit Gewürzen und frischem Gemüse schmeckt es wunderbar. Und vegetarisches Essen ist oft gesünder und billiger.\n\nHerr Wagner: Billiger? Da widerspreche ich. Tofu und Soja-Produkte sind manchmal teurer als normales Fleisch.\n\nFrau Ibrahim: Man braucht nicht unbedingt Tofu. Linsen, Bohnen und Eier sind sehr preiswert und sehr gesund. Das ist traditionelle Küche, auch in arabischen und indischen Ländern.\n\nHerr Wagner: Das stimmt – ich selbst liebe Linsensuppe. Vielleicht sollte ich mehr solche Gerichte auf die Karte setzen."
          }
        ],
        "options": [
          {
            "id": "a",
            "titleDe": "Herr Wagner",
            "textDe": ""
          },
          {
            "id": "b",
            "titleDe": "Frau Ibrahim",
            "textDe": ""
          },
          {
            "id": "c",
            "titleDe": "Niemand",
            "textDe": ""
          }
        ],
        "questions": [],
        "matchItems": [
          {
            "id": "hoeren-1-4-1",
            "textDe": "Vegetarisches Essen ist nicht immer billiger.",
            "correctAd": "a"
          },
          {
            "id": "hoeren-1-4-2",
            "textDe": "Restaurants ohne Fleisch sind erfolgreich in Großstädten.",
            "correctAd": "b"
          },
          {
            "id": "hoeren-1-4-3",
            "textDe": "In der Heimat gibt es viele gute vegetarische Gerichte.",
            "correctAd": "b"
          },
          {
            "id": "hoeren-1-4-4",
            "textDe": "Kinder brauchen Fleisch zum Wachsen.",
            "correctAd": "c"
          },
          {
            "id": "hoeren-1-4-5",
            "textDe": "Ich möchte mehr vegetarische Gerichte anbieten.",
            "correctAd": "a"
          },
          {
            "id": "hoeren-1-4-6",
            "textDe": "Gewürze machen vegetarisches Essen lecker.",
            "correctAd": "b"
          }
        ]
      }
    ]
  },
  {
    "id": "hoeren-2",
    "title": "نموذج Hören رقم 2",
    "description": "نموذج استماع إضافي بمواضيع الجيران والعمل والنقل.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – رسائل متعددة",
        "instructionsAr": "خمس رسائل قصيرة. أجب صح/خطأ واختيار من متعدد.",
        "transcripts": [
          {
            "id": "h2-1",
            "speaker": "Nachricht",
            "textDe": "Hallo, hier ist die Hausverwaltung. Wir möchten Sie informieren: am Dienstag zwischen 9 und 12 Uhr ist das Wasser im ganzen Haus abgestellt, weil wir Rohre reparieren. Bitte füllen Sie vorher etwas Wasser ab. Vielen Dank!"
          },
          {
            "id": "h2-2",
            "speaker": "Bahnsteig",
            "textDe": "Information für Fahrgäste des ICE 625 nach München: Der Zug hat heute ausnahmsweise 20 Minuten Verspätung. Grund ist ein Signalproblem. Voraussichtliche Abfahrt: 15:50 Uhr."
          },
          {
            "id": "h2-3",
            "speaker": "Voicemail",
            "textDe": "Hallo Frau Hassan, hier ist Petra aus der Kita. Ihre Tochter Lina hat etwas Fieber. Können Sie sie bitte bis 15 Uhr abholen? Oder sagen Sie Ihrer Mutter Bescheid. Tel: 030 555123."
          },
          {
            "id": "h2-4",
            "speaker": "Durchsage im Supermarkt",
            "textDe": "Liebe Kunden, der Supermarkt schließt heute ausnahmsweise schon um 18 Uhr wegen einer Personalsitzung. Ab morgen sind wir wieder wie immer bis 22 Uhr für Sie da."
          },
          {
            "id": "h2-5",
            "speaker": "Kollegin",
            "textDe": "Hallo Jürgen, vergiss bitte nicht: Die Besprechung am Freitag ist nicht im Raum 305, sondern im Raum 412. Fang nicht früher an, wir kommen alle zusammen um 10 Uhr."
          }
        ],
        "questions": [
          {
            "id": "hoeren-2-1-1",
            "statementDe": "Am Dienstag gibt es kein Wasser im Haus, von 9 bis 12 Uhr.",
            "correct": true
          },
          {
            "id": "hoeren-2-1-2",
            "promptDe": "Was soll man vor Dienstag tun?",
            "options": [
              {
                "id": "a",
                "de": "Die Wohnung verlassen."
              },
              {
                "id": "b",
                "de": "Wasser abfüllen."
              },
              {
                "id": "c",
                "de": "Die Hausverwaltung anrufen."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-2-1-3",
            "statementDe": "Der ICE 625 ist pünktlich.",
            "correct": false
          },
          {
            "id": "hoeren-2-1-4",
            "statementDe": "Lina hat Fieber und soll abgeholt werden.",
            "correct": true
          },
          {
            "id": "hoeren-2-1-5",
            "promptDe": "Bis wann soll Frau Hassan ihre Tochter abholen?",
            "options": [
              {
                "id": "a",
                "de": "Bis 13 Uhr."
              },
              {
                "id": "b",
                "de": "Bis 15 Uhr."
              },
              {
                "id": "c",
                "de": "Bis 17 Uhr."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-2-1-6",
            "statementDe": "Der Supermarkt schließt heute wie immer um 22 Uhr.",
            "correct": false
          },
          {
            "id": "hoeren-2-1-7",
            "promptDe": "Wo ist die Besprechung am Freitag?",
            "options": [
              {
                "id": "a",
                "de": "In Raum 305."
              },
              {
                "id": "b",
                "de": "In Raum 412."
              },
              {
                "id": "c",
                "de": "Online."
              }
            ],
            "correct": "b"
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 2 – حوار في عيادة طبيب",
        "instructionsAr": "حوار بين مريض وطبيب. أجب صح/خطأ.",
        "transcripts": [
          {
            "id": "d2",
            "textDe": "A: Guten Tag, Frau Nasser. Nehmen Sie bitte Platz. Was führt Sie heute zu mir?\nB: Guten Tag, Herr Doktor. Seit drei Tagen habe ich Kopfschmerzen und bin sehr müde.\nA: Haben Sie auch Fieber?\nB: Manchmal. Heute Morgen hatte ich 38 Grad.\nA: Nehmen Sie schon Medikamente?\nB: Ja, Paracetamol. Aber es hilft nicht viel.\nA: Machen Sie den Mund bitte auf... Gut. Es sieht nach einer Erkältung aus, vielleicht auch eine leichte Grippe. Ich schreibe Sie für drei Tage krank. Trinken Sie viel, ruhen Sie sich aus, und nehmen Sie weiterhin Paracetamol gegen die Schmerzen.\nB: Soll ich auch ein Antibiotikum nehmen?\nA: Nein, das hilft bei einer Virusinfektion nicht. Wenn es nach fünf Tagen nicht besser ist, kommen Sie wieder zu mir."
          }
        ],
        "questions": [
          {
            "id": "hoeren-2-2-1",
            "statementDe": "Frau Nasser hat seit einer Woche Probleme.",
            "correct": false
          },
          {
            "id": "hoeren-2-2-2",
            "statementDe": "Sie nimmt schon Medikamente.",
            "correct": true
          },
          {
            "id": "hoeren-2-2-3",
            "statementDe": "Der Arzt gibt ihr ein Antibiotikum.",
            "correct": false
          },
          {
            "id": "hoeren-2-2-4",
            "statementDe": "Sie soll viel Wasser trinken.",
            "correct": true
          },
          {
            "id": "hoeren-2-2-5",
            "statementDe": "Der Arzt schreibt sie für 5 Tage krank.",
            "correct": false,
            "explanation": "لثلاثة أيام فقط."
          }
        ]
      }
    ]
  },
  {
    "id": "hoeren-3",
    "title": "Hören – نموذج 3 (السفر والمواصلات)",
    "description": "إعلانات في القطار، حوارات في المطار، شكاوى من النقل العام.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – خمسة إعلانات في محطة القطار",
        "instructionsAr": "استمع إلى الإعلانات (أو اقرأ النصوص) وأجب عن الأسئلة. لكل إعلان سؤالان.",
        "transcripts": [
          {
            "id": "t1",
            "speaker": "Lautsprecher 1",
            "textDe": "Achtung Reisende auf Gleis 5: Der ICE 723 nach München hat eine Verspätung von etwa 15 Minuten. Wir bitten um Ihr Verständnis. Grund ist eine technische Störung am Zug. Voraussichtliche Abfahrt: 14:35 Uhr."
          },
          {
            "id": "t2",
            "speaker": "Lautsprecher 2",
            "textDe": "Information für Reisende mit dem RE 4 nach Köln: Der Zug fährt heute ausnahmsweise von Gleis 8 statt Gleis 3. Der Zug ist pünktlich."
          },
          {
            "id": "t3",
            "speaker": "Lautsprecher 3",
            "textDe": "Verkaufsstart: Frühbuchertickets nach Berlin ab nur 19,90 Euro. Buchung bis spätestens 7 Tage vor Abfahrt. Nur online und in der App. Tickets sind nicht erstattbar."
          }
        ],
        "questions": [
          {
            "id": "hoeren-3-1-1",
            "promptDe": "Wie viel Verspätung hat der ICE nach München?",
            "options": [
              {
                "id": "a",
                "de": "5 Minuten."
              },
              {
                "id": "b",
                "de": "15 Minuten."
              },
              {
                "id": "c",
                "de": "50 Minuten."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-3-1-2",
            "promptDe": "Was ist der Grund für die Verspätung?",
            "options": [
              {
                "id": "a",
                "de": "Schlechtes Wetter."
              },
              {
                "id": "b",
                "de": "Eine technische Störung."
              },
              {
                "id": "c",
                "de": "Personalmangel."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-3-1-3",
            "promptDe": "Von welchem Gleis fährt der RE 4 nach Köln?",
            "options": [
              {
                "id": "a",
                "de": "Von Gleis 3."
              },
              {
                "id": "b",
                "de": "Von Gleis 5."
              },
              {
                "id": "c",
                "de": "Von Gleis 8."
              }
            ],
            "correct": "c"
          },
          {
            "id": "hoeren-3-1-4",
            "promptDe": "Bis wann muss man Frühbuchertickets buchen?",
            "options": [
              {
                "id": "a",
                "de": "7 Tage vor Abfahrt."
              },
              {
                "id": "b",
                "de": "14 Tage vor Abfahrt."
              },
              {
                "id": "c",
                "de": "Am Abfahrtstag."
              }
            ],
            "correct": "a"
          },
          {
            "id": "hoeren-3-1-5",
            "promptDe": "Wo kann man die Frühbuchertickets kaufen?",
            "options": [
              {
                "id": "a",
                "de": "Nur am Schalter."
              },
              {
                "id": "b",
                "de": "Online und in der App."
              },
              {
                "id": "c",
                "de": "Im Zug beim Schaffner."
              }
            ],
            "correct": "b"
          },
          {
            "id": "hoeren-3-1-6",
            "promptDe": "Kann man die Frühbuchertickets zurückgeben?",
            "options": [
              {
                "id": "a",
                "de": "Ja, immer."
              },
              {
                "id": "b",
                "de": "Ja, gegen eine Gebühr."
              },
              {
                "id": "c",
                "de": "Nein, nicht erstattbar."
              }
            ],
            "correct": "c"
          }
        ]
      },
      {
        "type": "match-speakers",
        "title": "Teil 2 – خمسة أشخاص عن المواصلات",
        "instructionsAr": "خمسة أشخاص يتحدثون عن وسيلة النقل المفضّلة لديهم. اربط كل شخص بالجملة المناسبة.",
        "transcripts": [
          {
            "id": "p1",
            "speaker": "Person 1 – Anja",
            "textDe": "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit, auch im Winter. Es ist gesund, kostet nichts und ich brauche keinen Parkplatz suchen. Außerdem tue ich der Umwelt etwas Gutes."
          },
          {
            "id": "p2",
            "speaker": "Person 2 – Klaus",
            "textDe": "Mein Auto ist mein zweites Zuhause. Ich brauche es für die Arbeit, weil ich Außendienstmitarbeiter bin und jeden Tag in eine andere Stadt muss. Ohne Auto kein Job."
          },
          {
            "id": "p3",
            "speaker": "Person 3 – Yasmin",
            "textDe": "Ich nehme die U-Bahn, weil ich mir kein Auto leisten kann. Es geht eigentlich, aber morgens ist es total voll. Manchmal komme ich zu spät zur Arbeit, wenn es Verspätungen gibt."
          },
          {
            "id": "p4",
            "speaker": "Person 4 – Robert",
            "textDe": "Ich fahre lieber mit dem Zug als mit dem Flugzeug. Es ist umweltfreundlicher und ich kann die ganze Zeit lesen oder arbeiten. Auch wenn es länger dauert."
          },
          {
            "id": "p5",
            "speaker": "Person 5 – Sara",
            "textDe": "Ich habe meinen Führerschein, aber ich fahre nie. Ich nehme immer ein Taxi oder Uber, wenn ich nicht laufen kann. Das ist bequem und ich muss nicht parken."
          }
        ],
        "options": [
          {
            "id": "a",
            "titleDe": "Diese Person nutzt das Auto aus beruflichen Gründen.",
            "textDe": ""
          },
          {
            "id": "b",
            "titleDe": "Diese Person fährt aus Umweltgründen mit dem Rad.",
            "textDe": ""
          },
          {
            "id": "c",
            "titleDe": "Diese Person bevorzugt die Bahn statt fliegen.",
            "textDe": ""
          },
          {
            "id": "d",
            "titleDe": "Diese Person fährt nie selbst und nimmt Taxis.",
            "textDe": ""
          },
          {
            "id": "e",
            "titleDe": "Diese Person ärgert sich über volle U-Bahnen.",
            "textDe": ""
          },
          {
            "id": "f",
            "titleDe": "Diese Person reist gern mit dem Schiff.",
            "textDe": ""
          }
        ],
        "questions": [],
        "matchItems": [
          {
            "id": "p1",
            "textDe": "Anja",
            "correctAd": "b"
          },
          {
            "id": "p2",
            "textDe": "Klaus",
            "correctAd": "a"
          },
          {
            "id": "p3",
            "textDe": "Yasmin",
            "correctAd": "e"
          },
          {
            "id": "p4",
            "textDe": "Robert",
            "correctAd": "c"
          },
          {
            "id": "p5",
            "textDe": "Sara",
            "correctAd": "d"
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 3 – حوار في المطار",
        "instructionsAr": "استمع إلى الحوار وأجب صح / خطأ.",
        "transcripts": [
          {
            "id": "a1",
            "textDe": "A: Guten Tag, ich möchte einchecken. Hier ist mein Ticket nach Istanbul.\nB: Den Pass bitte. – Danke. Sie haben einen Koffer aufzugeben?\nA: Ja, einen großen. Und einen kleinen Rucksack als Handgepäck.\nB: Bitte stellen Sie den Koffer auf die Waage. … Das sind 24 Kilo. Das ist 1 Kilo zu viel, das kostet 30 Euro extra.\nA: Oh, kann ich nicht etwas in meinen Rucksack packen?\nB: Ja, das geht. Aber das Handgepäck darf maximal 8 Kilo wiegen.\nA: Ich nehme nur ein Buch raus, dann passt es.\nB: Gut, jetzt sind es 23 Kilo. Hier ist Ihre Bordkarte. Gate B12, Boarding um 14:30.\nA: Vielen Dank. Wo finde ich die Sicherheitskontrolle?\nB: Geradeaus, dann links. Gute Reise!"
          }
        ],
        "questions": [
          {
            "id": "hoeren-3-3-1",
            "statementDe": "Der Mann fliegt nach Istanbul.",
            "correct": true
          },
          {
            "id": "hoeren-3-3-2",
            "statementDe": "Sein Koffer wiegt zuerst genau 23 Kilo.",
            "correct": false,
            "explanation": "الوزن الأول 24 كيلو، ثم نقّصه إلى 23."
          },
          {
            "id": "hoeren-3-3-3",
            "statementDe": "Er muss extra Geld bezahlen.",
            "correct": false,
            "explanation": "لا، نقّص كتاباً وصار الوزن مناسباً."
          },
          {
            "id": "hoeren-3-3-4",
            "statementDe": "Das Handgepäck darf höchstens 8 Kilo schwer sein.",
            "correct": true
          },
          {
            "id": "hoeren-3-3-5",
            "statementDe": "Sein Flug startet um 14:30 Uhr.",
            "correct": false,
            "explanation": "14:30 هو وقت Boarding، وليس وقت إقلاع الطائرة."
          },
          {
            "id": "hoeren-3-3-6",
            "statementDe": "Er muss zur Sicherheitskontrolle nach links.",
            "correct": true
          }
        ]
      },
      {
        "type": "match-opinions",
        "title": "Teil 4 – نقاش في برنامج إذاعي",
        "instructionsAr": "موضوع النقاش: \"هل يجب جعل النقل العام مجاني؟\" استمع وحدد رأي كل متحدث.",
        "transcripts": [
          {
            "id": "r1",
            "speaker": "Moderator",
            "textDe": "Heute diskutieren wir: Sollte der öffentliche Nahverkehr in Deutschland kostenlos sein? Ich begrüße meine drei Gäste."
          },
          {
            "id": "r2",
            "speaker": "Petra (Umweltexpertin)",
            "textDe": "Auf jeden Fall! Wenn der Bus und die Bahn nichts kosten, lassen viele Menschen ihr Auto stehen. Das ist gut für die Umwelt und für die Städte. In Luxemburg funktioniert es schon."
          },
          {
            "id": "r3",
            "speaker": "Hans (Politiker)",
            "textDe": "Ich verstehe das Argument, aber wer soll das bezahlen? Wir müssten die Steuern erhöhen. Und die Busse wären total voll, mehr Personal und Fahrzeuge wären nötig. Das ist unrealistisch."
          },
          {
            "id": "r4",
            "speaker": "Maria (Studentin)",
            "textDe": "Mir reicht ein günstigeres Ticket, zum Beispiel das 49-Euro-Ticket. Komplett kostenlos finde ich nicht nötig. Aber teurer darf es auf keinen Fall werden, sonst fahren noch mehr mit dem Auto."
          }
        ],
        "options": [
          {
            "id": "pro",
            "titleDe": "Pro – ist dafür",
            "textDe": ""
          },
          {
            "id": "contra",
            "titleDe": "Contra – ist dagegen",
            "textDe": ""
          },
          {
            "id": "mittel",
            "titleDe": "Mittelmäßig – günstig statt kostenlos",
            "textDe": ""
          }
        ],
        "questions": [],
        "matchItems": [
          {
            "id": "r2",
            "textDe": "Petra",
            "correctAd": "pro"
          },
          {
            "id": "r3",
            "textDe": "Hans",
            "correctAd": "contra"
          },
          {
            "id": "r4",
            "textDe": "Maria",
            "correctAd": "mittel"
          }
        ]
      }
    ]
  },
  {
    "id": "hoeren-4",
    "title": "Hören – نموذج 4 (التسوق والخدمات)",
    "description": "إعلانات في السوبرماركت، شكاوى، خدمة عملاء، مقارنة آراء.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – خمسة إعلانات في السوبرماركت",
        "instructionsAr": "استمع (أو اقرأ) الإعلانات وأجب: لكل إعلان سؤال صح/خطأ + خيار من ثلاثة.",
        "transcripts": [
          {
            "id": "t1",
            "speaker": "Lautsprecher 1",
            "textDe": "Sehr geehrte Kunden, wir bitten um Ihre Aufmerksamkeit. Heute haben wir ein Sonderangebot in der Obst- und Gemüseabteilung: Erdbeeren aus Spanien zum halben Preis – nur heute, nur 1 Euro 99 die 500-Gramm-Schale."
          },
          {
            "id": "t2",
            "speaker": "Lautsprecher 2",
            "textDe": "Liebe Kundinnen und Kunden, die Kassen 7, 8 und 9 sind leider geschlossen. Wir bitten Sie, sich an den Kassen 1 bis 6 anzustellen. Wir entschuldigen uns für die längere Wartezeit."
          },
          {
            "id": "t3",
            "speaker": "Lautsprecher 3",
            "textDe": "Ein kleiner Junge mit einer roten Jacke, ungefähr 5 Jahre alt, sucht seine Eltern. Er wartet bei der Information am Eingang. Bitte holen Sie ihn dort ab."
          },
          {
            "id": "t4",
            "speaker": "Lautsprecher 4",
            "textDe": "Aufgepasst, liebe Kunden! In der Tiefkühlabteilung gibt es heute Hähnchenfilet im Angebot: 1 Kilo nur 4 Euro 50 statt 7 Euro 90. Das Angebot gilt nur bis 18 Uhr."
          },
          {
            "id": "t5",
            "speaker": "Lautsprecher 5",
            "textDe": "Liebe Kunden, unser Markt schließt heute ausnahmsweise bereits um 19 Uhr. Wir bitten Sie, Ihren Einkauf rechtzeitig zu beenden. Ab morgen sind wir wieder zu den normalen Zeiten von 8 bis 22 Uhr für Sie da."
          }
        ],
        "questions": [
          {
            "id": "h4-1-1",
            "promptDe": "Die Erdbeeren kosten heute …",
            "options": [
              {
                "id": "a",
                "de": "1,99 € pro Schale."
              },
              {
                "id": "b",
                "de": "1,99 € pro Kilo."
              },
              {
                "id": "c",
                "de": "99 Cent pro Schale."
              }
            ],
            "correct": "a",
            "explanation": "الإعلان يقول \"1 Euro 99 die 500-Gramm-Schale\" أي السلّة الواحدة بـ 1.99€."
          },
          {
            "id": "h4-1-2",
            "promptDe": "Welche Kassen sind offen?",
            "options": [
              {
                "id": "a",
                "de": "Kassen 7, 8 und 9."
              },
              {
                "id": "b",
                "de": "Kassen 1 bis 6."
              },
              {
                "id": "c",
                "de": "Alle Kassen."
              }
            ],
            "correct": "b",
            "explanation": "\"die Kassen 7, 8 und 9 sind … geschlossen … an den Kassen 1 bis 6 anzustellen\". مغلقة 7-9، مفتوحة 1-6."
          },
          {
            "id": "h4-1-3",
            "promptDe": "Wo wartet der kleine Junge auf seine Eltern?",
            "options": [
              {
                "id": "a",
                "de": "An der Kasse."
              },
              {
                "id": "b",
                "de": "Bei der Information am Eingang."
              },
              {
                "id": "c",
                "de": "In der Obstabteilung."
              }
            ],
            "correct": "b",
            "explanation": "\"wartet bei der Information am Eingang\"."
          },
          {
            "id": "h4-1-4",
            "promptDe": "Wie lange gilt das Hähnchenfilet-Angebot?",
            "options": [
              {
                "id": "a",
                "de": "Bis 18 Uhr."
              },
              {
                "id": "b",
                "de": "Bis 19 Uhr."
              },
              {
                "id": "c",
                "de": "Bis 22 Uhr."
              }
            ],
            "correct": "a",
            "explanation": "\"Das Angebot gilt nur bis 18 Uhr\"."
          },
          {
            "id": "h4-1-5",
            "promptDe": "Wann schließt der Markt heute?",
            "options": [
              {
                "id": "a",
                "de": "Um 18 Uhr."
              },
              {
                "id": "b",
                "de": "Um 19 Uhr."
              },
              {
                "id": "c",
                "de": "Um 22 Uhr."
              }
            ],
            "correct": "b",
            "explanation": "\"unser Markt schließt heute ausnahmsweise bereits um 19 Uhr\". لاحظ ausnahmsweise (استثنائياً)."
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 2 – حوار: شكوى في خدمة العملاء",
        "instructionsAr": "استمع للحوار بين زبونة وموظف في \"خدمة العملاء\" بمحل إلكترونيات. أجب صح/خطأ.",
        "transcripts": [
          {
            "id": "t1",
            "speaker": "Mitarbeiter",
            "textDe": "Guten Tag, wie kann ich Ihnen helfen?"
          },
          {
            "id": "t2",
            "speaker": "Frau Faruk",
            "textDe": "Guten Tag. Ich habe vor zwei Wochen einen Wasserkocher hier gekauft, aber er funktioniert nicht mehr. Hier ist der Kassenbon."
          },
          {
            "id": "t3",
            "speaker": "Mitarbeiter",
            "textDe": "Tut mir leid. Was genau ist das Problem?"
          },
          {
            "id": "t4",
            "speaker": "Frau Faruk",
            "textDe": "Er schaltet sich nicht mehr ein. Gestern habe ich ihn benutzt, alles war normal, aber heute Morgen geht er einfach nicht mehr an."
          },
          {
            "id": "t5",
            "speaker": "Mitarbeiter",
            "textDe": "Verstehe. Sie können den Wasserkocher gerne umtauschen. Möchten Sie das gleiche Modell oder ein anderes? Oder wir geben Ihnen das Geld zurück."
          },
          {
            "id": "t6",
            "speaker": "Frau Faruk",
            "textDe": "Ich möchte am liebsten das gleiche Modell. Es war gut für den Preis."
          },
          {
            "id": "t7",
            "speaker": "Mitarbeiter",
            "textDe": "Kein Problem. Ich hole Ihnen ein neues. Bitte warten Sie hier kurz."
          },
          {
            "id": "t8",
            "speaker": "Frau Faruk",
            "textDe": "Vielen Dank. Eine Frage noch: Wie lange ist die Garantie auf das neue Gerät?"
          },
          {
            "id": "t9",
            "speaker": "Mitarbeiter",
            "textDe": "Auf alle Haushaltsgeräte haben wir 24 Monate Garantie. Sie bekommen einen neuen Kassenbon mit dem heutigen Datum, das ist wichtig."
          }
        ],
        "questions": [
          {
            "id": "h4-2-1",
            "statementDe": "Frau Faruk hat den Wasserkocher heute gekauft.",
            "statementAr": "السيدة فاروق اشترت الغلاية اليوم.",
            "correct": false,
            "explanation": "هي قالت \"vor zwei Wochen\" — منذ أسبوعين."
          },
          {
            "id": "h4-2-2",
            "statementDe": "Der Wasserkocher schaltet sich nicht mehr ein.",
            "statementAr": "الغلاية لا تُشغّل بعد الآن.",
            "correct": true,
            "explanation": "\"Er schaltet sich nicht mehr ein\"."
          },
          {
            "id": "h4-2-3",
            "statementDe": "Der Mitarbeiter bietet ihr das Geld zurück oder einen Umtausch.",
            "statementAr": "الموظف يعرض إعادة المال أو الاستبدال.",
            "correct": true,
            "explanation": "\"umtauschen … Oder wir geben Ihnen das Geld zurück\"."
          },
          {
            "id": "h4-2-4",
            "statementDe": "Frau Faruk möchte ein anderes Modell.",
            "statementAr": "السيدة تريد موديلاً مختلفاً.",
            "correct": false,
            "explanation": "هي قالت صراحة \"das gleiche Modell\" — نفس الموديل."
          },
          {
            "id": "h4-2-5",
            "statementDe": "Die Garantie auf Haushaltsgeräte ist 24 Monate.",
            "statementAr": "الضمان على الأجهزة المنزلية 24 شهراً.",
            "correct": true,
            "explanation": "\"24 Monate Garantie\"."
          },
          {
            "id": "h4-2-6",
            "statementDe": "Der neue Kassenbon hat das Datum von vor zwei Wochen.",
            "statementAr": "الإيصال الجديد سيحمل تاريخ ما قبل أسبوعين.",
            "correct": false,
            "explanation": "\"einen neuen Kassenbon mit dem heutigen Datum\" — التاريخ الجديد، اليوم."
          }
        ]
      },
      {
        "type": "match-opinions",
        "title": "Teil 4 – آراء حول التسوّق عبر الإنترنت",
        "instructionsAr": "استمع لأربعة أشخاص يتحدثون عن التسوق عبر الإنترنت. اربط كل شخص برأيه (إيجابي / سلبي / محايد).",
        "transcripts": [
          {
            "id": "r1",
            "speaker": "Hassan",
            "textDe": "Ich bestelle alles online: Kleidung, Bücher, sogar Lebensmittel. Es ist viel günstiger und ich spare so viel Zeit. Im Geschäft stehe ich dann nicht stundenlang in der Schlange."
          },
          {
            "id": "r2",
            "speaker": "Frau Lehmann",
            "textDe": "Ich bin total dagegen. Online sieht man die Qualität nicht, oft passt die Größe nicht, und das Zurückschicken ist nervig. Ich gehe lieber in den Laden und probiere alles an."
          },
          {
            "id": "r3",
            "speaker": "Lina",
            "textDe": "Es kommt drauf an. Bücher und Elektronik kaufe ich online, aber Kleidung muss ich anfassen und anprobieren. Da ist mir der Laden wichtig."
          },
          {
            "id": "r4",
            "speaker": "Herr Becker",
            "textDe": "Online ist super praktisch, aber wir vergessen die kleinen Geschäfte in der Innenstadt. Wenn die alle schließen, wird unsere Stadt langweilig. Ich versuche bewusst lokal zu kaufen."
          }
        ],
        "questions": [],
        "options": [
          {
            "id": "positiv",
            "titleDe": "positiv (Online ist toll!)",
            "textDe": "مع التسوق عبر الإنترنت"
          },
          {
            "id": "negativ",
            "titleDe": "negativ (Online ist schlecht!)",
            "textDe": "ضد التسوق عبر الإنترنت"
          },
          {
            "id": "gemischt",
            "titleDe": "gemischt (es kommt drauf an)",
            "textDe": "يعتمد على المنتج"
          },
          {
            "id": "lokal",
            "titleDe": "pro Innenstadt / kleine Läden",
            "textDe": "يفضل المحال المحلية"
          }
        ],
        "matchItems": [
          {
            "id": "r1",
            "textDe": "Hassan",
            "correctAd": "positiv"
          },
          {
            "id": "r2",
            "textDe": "Frau Lehmann",
            "correctAd": "negativ"
          },
          {
            "id": "r3",
            "textDe": "Lina",
            "correctAd": "gemischt"
          },
          {
            "id": "r4",
            "textDe": "Herr Becker",
            "correctAd": "lokal"
          }
        ]
      }
    ]
  },
  {
    "id": "hoeren-5",
    "title": "Hören 5 – العمل والصحة (نمط Goethe B1)",
    "description": "نموذج جديد على نمط Goethe B1: 4 إعلانات قصيرة (صح/خطأ)، حوار في عيادة طبيب، مقابلة إذاعية مع طبيب نفسي.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – إعلانات وأخبار قصيرة",
        "instructionsAr": "ستسمع 4 نصوص قصيرة (إعلانات/أخبار). لكل نص ستجد عبارتين، واحدة صح/خطأ والثانية اختيار من متعدد.",
        "transcripts": [
          {
            "id": "h5-t1",
            "speaker": "Durchsage am Hauptbahnhof München",
            "textDe": "Sehr geehrte Fahrgäste, Achtung an Gleis 7: Der ICE 925 nach Berlin Hauptbahnhof, geplante Abfahrt 14:30 Uhr, hat heute leider eine Verspätung von 35 Minuten. Grund ist eine technische Störung. Wir bitten um Ihr Verständnis und entschuldigen uns für die Unannehmlichkeiten."
          },
          {
            "id": "h5-t2",
            "speaker": "Werbung im Radio",
            "textDe": "Nur dieses Wochenende! Das Sportgeschäft \"Aktivsport\" in der Schillerstraße bietet 30% Rabatt auf alle Laufschuhe. Egal ob Anfänger oder Profi – bei uns finden Sie das Richtige. Wir haben Samstag von 9 bis 20 Uhr und Sonntag von 11 bis 18 Uhr für Sie geöffnet."
          },
          {
            "id": "h5-t3",
            "speaker": "Anrufbeantworter Arztpraxis Dr. Klein",
            "textDe": "Sie haben die Praxis von Dr. Klein erreicht. Vom 1. bis 15. Juli ist die Praxis wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an die Vertretung, Dr. Schmidt, in der Hauptstraße 25, Telefon 089-555-1234. Bei Notfällen wählen Sie bitte 112."
          },
          {
            "id": "h5-t4",
            "speaker": "Wetterbericht im Radio",
            "textDe": "Und nun zum Wetter für morgen: Im Norden Deutschlands wird es regnerisch und kühl mit Höchstwerten um 14 Grad. Im Süden dagegen erwartet uns ein sonniger Tag mit Temperaturen bis zu 22 Grad. In den Bergen kann es am Nachmittag zu Gewittern kommen."
          }
        ],
        "questions": [
          {
            "id": "h5-1-1",
            "statementDe": "Der ICE nach Berlin fährt heute pünktlich ab.",
            "statementAr": "قطار ICE إلى برلين يغادر اليوم في موعده.",
            "correct": false,
            "explanation": "\"hat heute leider eine Verspätung von 35 Minuten\" – التأخير 35 دقيقة."
          },
          {
            "id": "h5-1-2",
            "promptDe": "Was ist der Grund für die Verspätung?",
            "options": [
              {
                "id": "a",
                "de": "Schlechtes Wetter."
              },
              {
                "id": "b",
                "de": "Eine technische Störung."
              },
              {
                "id": "c",
                "de": "Ein Streik."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول: \"Grund ist eine technische Störung\"."
          },
          {
            "id": "h5-1-3",
            "statementDe": "Der Rabatt im Sportgeschäft gilt nur für Anfänger-Laufschuhe.",
            "statementAr": "الخصم في متجر الرياضة فقط لأحذية المبتدئين.",
            "correct": false,
            "explanation": "\"alle Laufschuhe\" + \"Anfänger oder Profi\" – الخصم لجميع الأحذية."
          },
          {
            "id": "h5-1-4",
            "promptDe": "Wann ist das Geschäft am Sonntag geöffnet?",
            "options": [
              {
                "id": "a",
                "de": "Von 9 bis 20 Uhr."
              },
              {
                "id": "b",
                "de": "Von 11 bis 18 Uhr."
              },
              {
                "id": "c",
                "de": "Geschlossen."
              }
            ],
            "correct": "b",
            "explanation": "النص: \"Sonntag von 11 bis 18 Uhr\"."
          },
          {
            "id": "h5-1-5",
            "statementDe": "Dr. Klein ist im Juli zwei Wochen im Urlaub.",
            "statementAr": "الطبيب كلاين في إجازة لأسبوعين في يوليو.",
            "correct": true,
            "explanation": "\"vom 1. bis 15. Juli\" = 15 يوماً = أسبوعان."
          },
          {
            "id": "h5-1-6",
            "promptDe": "Was sollte man bei einem Notfall machen?",
            "options": [
              {
                "id": "a",
                "de": "Die Praxis von Dr. Schmidt anrufen."
              },
              {
                "id": "b",
                "de": "Die Nummer 112 wählen."
              },
              {
                "id": "c",
                "de": "Bis zum 16. Juli warten."
              }
            ],
            "correct": "b",
            "explanation": "\"Bei Notfällen wählen Sie bitte 112\"."
          },
          {
            "id": "h5-1-7",
            "statementDe": "Im Süden Deutschlands wird es morgen regnerisch.",
            "statementAr": "في جنوب ألمانيا غداً سيكون الجو ممطراً.",
            "correct": false,
            "explanation": "\"Im Süden ... ein sonniger Tag\" – جنوبي ألمانيا مشمس."
          },
          {
            "id": "h5-1-8",
            "promptDe": "Wo kann es am Nachmittag Gewitter geben?",
            "options": [
              {
                "id": "a",
                "de": "Im Norden."
              },
              {
                "id": "b",
                "de": "In den Bergen."
              },
              {
                "id": "c",
                "de": "Nirgendwo."
              }
            ],
            "correct": "b",
            "explanation": "النص: \"In den Bergen kann es am Nachmittag zu Gewittern kommen\"."
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 2 – حوار في عيادة الطبيب",
        "instructionsAr": "استمع للحوار بين المريض والطبيب. اقرر إن كانت كل عبارة صح أم خطأ.",
        "transcripts": [
          {
            "id": "h5-d1",
            "speaker": "Arzt + Patient",
            "textDe": "**Arzt:** Guten Tag, Herr Yousef. Setzen Sie sich bitte. Was kann ich für Sie tun?\n\n**Patient:** Guten Tag, Herr Doktor. Ich habe seit fünf Tagen starke Halsschmerzen und Husten. Außerdem hatte ich gestern Fieber, etwa 38,5 Grad.\n\n**Arzt:** Haben Sie auch Kopf- oder Gliederschmerzen?\n\n**Patient:** Ja, Kopfschmerzen schon, aber meine Glieder tun mir nicht weh.\n\n**Arzt:** Und Sie haben keine Probleme beim Atmen?\n\n**Patient:** Doch, manchmal. Besonders nachts, wenn ich liege.\n\n**Arzt:** Ich werde Sie kurz untersuchen. ... So, der Hals ist sehr rot und die Lymphknoten sind geschwollen. Sie haben eine starke Erkältung, vielleicht sogar eine leichte Bronchitis.\n\n**Patient:** Und was kann ich dagegen tun?\n\n**Arzt:** Ich verschreibe Ihnen ein Antibiotikum für sieben Tage und ein Hustenmittel. Trinken Sie viel warmen Tee mit Honig und ruhen Sie sich aus. Ich schreibe Sie für drei Tage krank.\n\n**Patient:** Vielen Dank, Herr Doktor. Wann soll ich wieder kommen?\n\n**Arzt:** Wenn die Beschwerden in einer Woche nicht besser werden, kommen Sie bitte noch einmal. Sonst können Sie nach den drei Tagen wieder arbeiten."
          }
        ],
        "questions": [
          {
            "id": "h5-2-1",
            "statementDe": "Herr Yousef hat seit einer Woche Halsschmerzen.",
            "statementAr": "السيد يوسف يعاني من ألم في الحنجرة منذ أسبوع.",
            "correct": false,
            "explanation": "قال: \"seit fünf Tagen\" – منذ 5 أيام، ليس أسبوعاً."
          },
          {
            "id": "h5-2-2",
            "statementDe": "Er hatte gestern Fieber.",
            "statementAr": "كان لديه حمّى أمس.",
            "correct": true,
            "explanation": "قال: \"hatte ich gestern Fieber, etwa 38,5 Grad\"."
          },
          {
            "id": "h5-2-3",
            "statementDe": "Herr Yousef hat Probleme beim Atmen, besonders nachts.",
            "statementAr": "لديه مشكلة في التنفس، خاصة ليلاً.",
            "correct": true,
            "explanation": "قال: \"manchmal. Besonders nachts, wenn ich liege\"."
          },
          {
            "id": "h5-2-4",
            "statementDe": "Der Arzt verschreibt ihm nur Tee und Ruhe.",
            "statementAr": "الطبيب وصف له الشاي والراحة فقط.",
            "correct": false,
            "explanation": "قال الطبيب: \"ein Antibiotikum für sieben Tage und ein Hustenmittel\" – موصوف دواء."
          },
          {
            "id": "h5-2-5",
            "statementDe": "Er bekommt einen Krankenschein für drei Tage.",
            "statementAr": "حصل على إجازة مرضية لـ 3 أيام.",
            "correct": true,
            "explanation": "قال الطبيب: \"Ich schreibe Sie für drei Tage krank\"."
          },
          {
            "id": "h5-2-6",
            "statementDe": "Wenn er nach einer Woche nicht besser ist, soll er wiederkommen.",
            "statementAr": "إذا لم يتحسّن بعد أسبوع، عليه أن يعود.",
            "correct": true,
            "explanation": "قال الطبيب: \"in einer Woche nicht besser werden, kommen Sie noch einmal\"."
          }
        ]
      },
      {
        "type": "match-opinions",
        "title": "Teil 3 – مقابلة إذاعية: الإجهاد في العمل",
        "instructionsAr": "استمع لـ 4 آراء عن الإجهاد في العمل. اربط كل شخص برأيه (a-e). يوجد 5 آراء، 4 منها فقط صحيحة.",
        "transcripts": [
          {
            "id": "h5-int",
            "textDe": "**Moderatorin:** Heute sprechen wir über das Thema Stress am Arbeitsplatz. Vier Hörer haben ihre Erfahrung geteilt.\n\n**Hörer 1 - Sami (35, Ingenieur):** Ich arbeite oft 50 Stunden in der Woche und manchmal auch am Wochenende. Mein Chef erwartet, dass ich immer erreichbar bin, sogar im Urlaub. Das macht mich krank. Letzten Monat war ich zwei Wochen wegen Burnout krank.\n\n**Hörerin 2 - Karin (42, Lehrerin):** Mein Beruf ist anstrengend, aber ich habe gelernt, abzuschalten. Nach der Arbeit mache ich Yoga, gehe spazieren oder treffe Freunde. Diese Aktivitäten helfen mir wirklich, mit dem Stress umzugehen.\n\n**Hörer 3 - Tobias (28, Verkäufer):** Bei mir ist das Problem die Kunden. Manchmal sind sie unhöflich oder beschweren sich über Dinge, an denen ich nicht schuld bin. Das nimmt mich emotional sehr mit.\n\n**Hörerin 4 - Frau Wagner (55, Krankenschwester):** In meinem Beruf gibt es zu wenig Personal, deshalb müssen wir alle länger arbeiten. Ich denke oft daran, den Beruf zu wechseln, aber ich liebe es, Menschen zu helfen."
          }
        ],
        "questions": [],
        "options": [
          {
            "id": "a",
            "titleDe": "zu lange Arbeitszeiten",
            "textDe": "ساعات عمل طويلة جداً"
          },
          {
            "id": "b",
            "titleDe": "Probleme mit Kunden",
            "textDe": "مشاكل مع الزبائن"
          },
          {
            "id": "c",
            "titleDe": "Personalmangel",
            "textDe": "نقص في الموظفين"
          },
          {
            "id": "d",
            "titleDe": "gut mit Stress umgehen",
            "textDe": "تتعامل مع الضغط جيداً"
          },
          {
            "id": "e",
            "titleDe": "zu niedriger Lohn",
            "textDe": "الراتب منخفض جداً"
          }
        ],
        "matchItems": [
          {
            "id": "r1",
            "textDe": "Sami",
            "correctAd": "a"
          },
          {
            "id": "r2",
            "textDe": "Karin",
            "correctAd": "d"
          },
          {
            "id": "r3",
            "textDe": "Tobias",
            "correctAd": "b"
          },
          {
            "id": "r4",
            "textDe": "Frau Wagner",
            "correctAd": "c"
          }
        ]
      }
    ]
  },
  {
    "id": "hoeren-6",
    "title": "Hören 6 – التعليم والاندماج (نمط telc B1)",
    "description": "نموذج جديد: إعلانات قصيرة في مدرسة لغة، حوار مع موظف Ausländerbehörde، نقاش حول دورات الاندماج.",
    "parts": [
      {
        "type": "tf-mc",
        "title": "Teil 1 – إعلانات قصيرة",
        "instructionsAr": "ستسمع 3 نصوص قصيرة. لكل نص ستجد عبارتين – صح/خطأ ثم اختيار من متعدد.",
        "transcripts": [
          {
            "id": "h6-t1",
            "speaker": "Durchsage in der Volkshochschule",
            "textDe": "Liebe Teilnehmer, der heutige B1-Kurs in Raum 12 fällt leider aus, weil die Lehrerin krank ist. Der Unterricht wird nächsten Montag, 18 Uhr, im selben Raum nachgeholt. Wenn Sie Fragen haben, kommen Sie bitte zur Anmeldung im Erdgeschoss. Vielen Dank für Ihr Verständnis."
          },
          {
            "id": "h6-t2",
            "speaker": "Anrufbeantworter Ausländerbehörde Frankfurt",
            "textDe": "Sie haben die Ausländerbehörde Frankfurt erreicht. Unsere Sprechzeiten sind Montag bis Freitag, 8 bis 12 Uhr, und Donnerstag zusätzlich 14 bis 18 Uhr. Termine vereinbaren Sie bitte online über unsere Website. Notfälle melden Sie sich bitte direkt am Eingang. Wir rufen Sie schnellstmöglich zurück."
          },
          {
            "id": "h6-t3",
            "speaker": "Werbung im Radio",
            "textDe": "Die Sprachschule \"Deutsch aktiv\" startet im September neue Integrationskurse für alle Niveaus von A1 bis B2. Die Kurse finden vormittags und abends statt. Mit dem BAMF-Gutschein zahlen Sie nur einen Teil der Kosten. Anmelden können Sie sich ab sofort online oder telefonisch. Wir freuen uns auf Sie!"
          }
        ],
        "questions": [
          {
            "id": "hoeren-6-1-1",
            "statementDe": "Der heutige B1-Kurs findet wie geplant statt.",
            "correct": false,
            "explanation": "النص يقول \"fällt aus\" – أُلغي."
          },
          {
            "id": "hoeren-6-1-2",
            "promptDe": "Wann wird der Kurs nachgeholt?",
            "options": [
              {
                "id": "a",
                "de": "Morgen früh."
              },
              {
                "id": "b",
                "de": "Nächsten Montag, 18 Uhr."
              },
              {
                "id": "c",
                "de": "In zwei Wochen."
              }
            ],
            "correct": "b",
            "explanation": "\"nächsten Montag, 18 Uhr\"."
          },
          {
            "id": "hoeren-6-1-3",
            "statementDe": "Termine bei der Ausländerbehörde bekommt man online.",
            "correct": true
          },
          {
            "id": "hoeren-6-1-4",
            "promptDe": "Wann hat die Behörde am längsten geöffnet?",
            "options": [
              {
                "id": "a",
                "de": "Montag."
              },
              {
                "id": "b",
                "de": "Mittwoch."
              },
              {
                "id": "c",
                "de": "Donnerstag."
              }
            ],
            "correct": "c",
            "explanation": "الخميس مفتوح حتى 18، باقي الأيام حتى 12."
          },
          {
            "id": "hoeren-6-1-5",
            "statementDe": "Mit BAMF-Gutschein bekommt man eine Ermäßigung.",
            "correct": true,
            "explanation": "\"zahlen Sie nur einen Teil der Kosten\"."
          },
          {
            "id": "hoeren-6-1-6",
            "promptDe": "Welche Kursniveaus bietet die Sprachschule an?",
            "options": [
              {
                "id": "a",
                "de": "Nur A1 und A2."
              },
              {
                "id": "b",
                "de": "Von A1 bis B2."
              },
              {
                "id": "c",
                "de": "Nur B1 und B2."
              }
            ],
            "correct": "b"
          }
        ]
      },
      {
        "type": "tf-dialog",
        "title": "Teil 2 – حوار في Ausländerbehörde",
        "instructionsAr": "استمع للحوار وأجب صح / خطأ.",
        "transcripts": [
          {
            "id": "h6-d1",
            "textDe": "Beamter: Guten Tag. Wie kann ich Ihnen helfen?\nFrau Sarah: Guten Tag. Ich brauche eine Verlängerung meines Aufenthaltstitels.\nBeamter: Haben Sie alle Unterlagen dabei?\nFrau Sarah: Ich habe meinen Pass, das alte Aufenthaltsdokument und eine Bescheinigung über meinen Sprachkurs.\nBeamter: Brauchen Sie auch einen Nachweis über Ihre finanzielle Lage. Arbeiten Sie?\nFrau Sarah: Ja, ich arbeite seit einem Jahr in einem Café, halbtags.\nBeamter: Bringen Sie bitte die letzten drei Gehaltsabrechnungen mit. Außerdem brauchen wir eine aktuelle Krankenversicherungs-Bescheinigung.\nFrau Sarah: Habe ich beides nicht dabei. Kann ich die später per Post schicken?\nBeamter: Nein, bitte kommen Sie persönlich vorbei, sobald Sie alles haben. Hier ist mein Termin-Zettel."
          }
        ],
        "questions": [
          {
            "id": "hoeren-6-2-1",
            "statementDe": "Frau Sarah möchte ihren Aufenthaltstitel verlängern.",
            "correct": true
          },
          {
            "id": "hoeren-6-2-2",
            "statementDe": "Sie hat eine Sprachkurs-Bescheinigung dabei.",
            "correct": true
          },
          {
            "id": "hoeren-6-2-3",
            "statementDe": "Frau Sarah arbeitet Vollzeit.",
            "correct": false,
            "explanation": "قالت \"halbtags\" – نصف الدوام."
          },
          {
            "id": "hoeren-6-2-4",
            "statementDe": "Sie kann die fehlenden Dokumente per Post schicken.",
            "correct": false,
            "explanation": "الموظف رفض ذلك: \"Nein, bitte kommen Sie persönlich vorbei\"."
          },
          {
            "id": "hoeren-6-2-5",
            "statementDe": "Sie braucht eine Krankenversicherungs-Bescheinigung.",
            "correct": true
          },
          {
            "id": "hoeren-6-2-6",
            "statementDe": "Sie braucht 5 Gehaltsabrechnungen.",
            "correct": false,
            "explanation": "فقط 3 (الأخيرة)."
          }
        ]
      }
    ]
  }
];

export const lesenModels: LesenModel[] = [
  {
    "id": "lesen-1",
    "title": "نموذج Lesen رقم 1",
    "description": "امتحان قراءة شامل على غرار امتحان Goethe B1 / telc B1.",
    "parts": [
      {
        "type": "match-blog",
        "title": "Teil 1 – منتدى / مدونات",
        "instructionsAr": "اقرأ 5 مشاركات قصيرة من منتدى حول \"العطلة\". بعدها اقرأ 6 جمل واختر من أي شخص (A-E) هذه الجملة. يمكن استخدام نفس الشخص أكثر من مرة.",
        "texts": [
          {
            "id": "A",
            "titleDe": "Anna",
            "titleAr": "أنّا",
            "textDe": "Ich war im Sommer zwei Wochen in Italien. Wir haben ein Ferienhaus gemietet und jeden Tag selbst gekocht. Das war billiger als ein Hotel und viel gemütlicher. Meine Kinder haben sich sehr gefreut."
          },
          {
            "id": "B",
            "titleDe": "Bernd",
            "titleAr": "بيرند",
            "textDe": "Meine Frau und ich sind jedes Jahr in Österreich wandern. Wir nehmen nur einen kleinen Rucksack und schlafen in einfachen Berghütten. Wer Natur mag, muss das unbedingt probieren!"
          },
          {
            "id": "C",
            "titleDe": "Claudia",
            "titleAr": "كلاوديا",
            "textDe": "Ich finde Urlaub am Meer langweilig. Letztes Jahr war ich in Berlin und habe viele Museen besucht. Ich lerne gern etwas Neues über Geschichte und Kunst."
          },
          {
            "id": "D",
            "titleDe": "Daniel",
            "titleAr": "دانيل",
            "textDe": "Urlaub ist für mich zu teuer. Ich bleibe zu Hause, lese Bücher und besuche meine Eltern. Manchmal mache ich mit Freunden einen Tagesausflug in die Nähe."
          },
          {
            "id": "E",
            "titleDe": "Elif",
            "titleAr": "إليف",
            "textDe": "Ich bin Studentin und habe nicht viel Geld. Deshalb reise ich mit Freundinnen und wir teilen uns die Kosten. Wir suchen immer günstige Flüge im Internet und wohnen in einem Hostel."
          }
        ],
        "statements": [
          {
            "id": "lesen-1-1-1",
            "textDe": "Diese Person macht aktiv Sport im Urlaub.",
            "textAr": "هذا الشخص يمارس الرياضة خلال العطلة.",
            "correctAd": "B"
          },
          {
            "id": "lesen-1-1-2",
            "textDe": "Diese Person bleibt im Urlaub zu Hause.",
            "textAr": "هذا الشخص يبقى في المنزل خلال العطلة.",
            "correctAd": "D"
          },
          {
            "id": "lesen-1-1-3",
            "textDe": "Diese Person interessiert sich für Kultur.",
            "textAr": "هذا الشخص مهتم بالثقافة.",
            "correctAd": "C"
          },
          {
            "id": "lesen-1-1-4",
            "textDe": "Diese Person spart Geld, indem sie mit anderen teilt.",
            "textAr": "هذا الشخص يوفر المال بالمشاركة مع آخرين.",
            "correctAd": "E"
          },
          {
            "id": "lesen-1-1-5",
            "textDe": "Diese Person reist mit der Familie.",
            "textAr": "هذا الشخص يسافر مع العائلة.",
            "correctAd": "A"
          },
          {
            "id": "lesen-1-1-6",
            "textDe": "Diese Person kocht selbst im Urlaub.",
            "textAr": "هذا الشخص يطبخ بنفسه في العطلة.",
            "correctAd": "A"
          }
        ]
      },
      {
        "type": "mc-article",
        "title": "Teil 2 – مقال من الصحيفة",
        "instructionsAr": "اقرأ النص ثم أجب عن الأسئلة. اختر a أو b أو c.",
        "textDe": "Immer mehr junge Menschen in Deutschland lernen eine neue Sprache im Internet. Apps wie „Duolingo\" oder kostenlose Videos auf YouTube machen das Lernen einfach und flexibel. Eine neue Studie der Universität Hamburg zeigt: 70 Prozent der Menschen unter 30 Jahren nutzen solche Apps mindestens einmal pro Woche.\n\nDoch Experten warnen: Eine App allein reicht nicht. „Wer eine Sprache wirklich lernen will, muss auch sprechen\", sagt Prof. Dr. Meier. Deshalb empfehlen viele Lehrer, zusätzlich einen Sprachpartner zu suchen – online oder in Sprachcafés. Auch Fernsehsendungen in der Fremdsprache helfen beim Verstehen.\n\nBesonders beliebt ist Englisch, aber auch Spanisch, Japanisch und Arabisch werden häufiger gewählt als früher. „Arabisch ist für Geschäftsleute und für Menschen mit Familie im Ausland interessant\", erklärt die Sprachlehrerin Fatima Al-Ahmad.",
        "questions": [
          {
            "id": "lesen-1-2-1",
            "promptDe": "Was zeigt die Studie aus Hamburg?",
            "promptAr": "ماذا تُظهر الدراسة من هامبورغ؟",
            "options": [
              {
                "id": "a",
                "de": "Junge Leute lernen lieber in der Schule."
              },
              {
                "id": "b",
                "de": "Viele junge Menschen nutzen Sprach-Apps regelmäßig."
              },
              {
                "id": "c",
                "de": "Apps kosten mehr als Kurse."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول إن 70% من الأشخاص تحت 30 عاماً يستخدمون التطبيقات مرة على الأقل أسبوعياً."
          },
          {
            "id": "lesen-1-2-2",
            "promptDe": "Was empfehlen Experten zusätzlich zur App?",
            "promptAr": "ماذا يوصي الخبراء بالإضافة إلى التطبيق؟",
            "options": [
              {
                "id": "a",
                "de": "Einen Sprachpartner zu suchen."
              },
              {
                "id": "b",
                "de": "Mehr Apps zu benutzen."
              },
              {
                "id": "c",
                "de": "Nur Bücher zu lesen."
              }
            ],
            "correct": "a",
            "explanation": "الخبراء ينصحون بإيجاد شريك للتحدث."
          },
          {
            "id": "lesen-1-2-3",
            "promptDe": "Für wen ist Arabisch interessant?",
            "promptAr": "لمن تكون اللغة العربية مثيرة للاهتمام؟",
            "options": [
              {
                "id": "a",
                "de": "Nur für Kinder."
              },
              {
                "id": "b",
                "de": "Für Touristen."
              },
              {
                "id": "c",
                "de": "Für Geschäftsleute und Menschen mit Familie im Ausland."
              }
            ],
            "correct": "c"
          }
        ]
      },
      {
        "type": "match-ads",
        "title": "Teil 3 – مطابقة إعلانات",
        "instructionsAr": "سبعة أشخاص يبحثون عن خدمة. اقرأ رغبتهم ثم اختر الإعلان المناسب (a-h). هناك إعلان واحد زائد. لو لم يتطابق أي إعلان، اختر \"لا يوجد\".",
        "situations": [
          {
            "id": "lesen-1-3-1",
            "textAr": "1. فاطمة تبحث عن دورة ألمانية مسائية رخيصة للمبتدئين.",
            "textDe": "Fatima sucht einen günstigen Deutschkurs am Abend für Anfänger.",
            "correctAd": "b"
          },
          {
            "id": "lesen-1-3-2",
            "textAr": "2. أحمد يبحث عن شقة من غرفتين بإيجار معقول في مدينة كولن.",
            "textDe": "Ahmed sucht eine 2-Zimmer-Wohnung mit günstiger Miete in Köln.",
            "correctAd": "d"
          },
          {
            "id": "lesen-1-3-3",
            "textAr": "3. ليلى تريد التسجيل في دروس قيادة (Fahrschule) باللغة العربية.",
            "textDe": "Leila möchte eine Fahrschule mit Arabisch-Lehrern besuchen.",
            "correctAd": "f"
          },
          {
            "id": "lesen-1-3-4",
            "textAr": "4. علي يبحث عن وظيفة جزئية في مطعم.",
            "textDe": "Ali sucht einen Minijob in einem Restaurant.",
            "correctAd": "a"
          },
          {
            "id": "lesen-1-3-5",
            "textAr": "5. مريم تحتاج حضانة أطفال صباحاً.",
            "textDe": "Maryam sucht eine Kita für ihre Tochter am Vormittag.",
            "correctAd": "e"
          },
          {
            "id": "lesen-1-3-6",
            "textAr": "6. خالد يريد الاشتراك في نادي كرة قدم للهواة.",
            "textDe": "Khaled will in einem Amateur-Fußballclub mitspielen.",
            "correctAd": "g"
          },
          {
            "id": "lesen-1-3-7",
            "textAr": "7. سعاد تبحث عن طبيب أسنان يتكلم العربية.",
            "textDe": "Suad sucht einen Zahnarzt, der Arabisch spricht.",
            "correctAd": "c"
          }
        ],
        "ads": [
          {
            "id": "a",
            "titleDe": "Restaurant „Al-Sham\" sucht Personal",
            "textDe": "450 €-Job für freundliche Mitarbeiter/innen (Bedienung, Küchenhilfe). Abends und am Wochenende. Deutsch A2 reicht. Tel: 0221 / 334455."
          },
          {
            "id": "b",
            "titleDe": "VHS Köln – Deutschkurse",
            "textDe": "Abendkurse Deutsch A1–B1 ab 90 € pro Monat. Anfängerkurse starten jeden Monat. Info unter www.vhs-koeln.de"
          },
          {
            "id": "c",
            "titleDe": "Zahnarztpraxis Dr. Haddad",
            "textDe": "Wir sprechen Deutsch, Arabisch und Englisch. Termine von Montag bis Freitag 8–18 Uhr. Venloer Str. 120, Köln."
          },
          {
            "id": "d",
            "titleDe": "Wohnung zu vermieten – Köln-Nippes",
            "textDe": "2 Zimmer, Küche, Bad, 55 qm, 520 € warm. Frei ab 1.10. Nur an Nichtraucher. Tel: 0176 / 1234567."
          },
          {
            "id": "e",
            "titleDe": "Kita „Sonnenblume\"",
            "textDe": "Wir haben freie Plätze für Kinder von 2–6 Jahren. Öffnungszeiten 7:30–13:00 Uhr. Mehrsprachiges Team."
          },
          {
            "id": "f",
            "titleDe": "Fahrschule Yilmaz",
            "textDe": "Theorie- und Praxisunterricht auf Deutsch, Türkisch und Arabisch. PKW-Führerschein ab 1500 €. Termine nach Absprache."
          },
          {
            "id": "g",
            "titleDe": "SV Köln-Mülheim sucht Hobby-Spieler",
            "textDe": "Unser Amateurteam trainiert zweimal pro Woche. Alle Spielstärken willkommen. Jahresbeitrag 80 €."
          },
          {
            "id": "h",
            "titleDe": "Yoga-Kurs für Frauen",
            "textDe": "Sanftes Yoga am Samstagmorgen im Frauen-Zentrum. 10 € pro Stunde. Anmeldung nötig."
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 4 – آراء (صح / خطأ)",
        "instructionsAr": "اقرأ النص ثم قرّر: هل الجمل التالية صحيحة (Richtig) أم خاطئة (Falsch) حسب النص؟",
        "textDe": "Viele Eltern fragen sich: Soll mein Kind schon im Kindergarten eine Fremdsprache lernen? Unsere Leserinnen und Leser haben dazu Meinungen geschrieben.\n\nHerr Schneider (45): „Ich finde, Kinder sollten im Kindergarten einfach nur spielen dürfen. Fremdsprachen können sie später in der Schule lernen. Der Druck ist jetzt schon zu groß.\"\n\nFrau Weber (38): „Meine Tochter besucht einen zweisprachigen Kindergarten und spricht fließend Englisch. Sie lernt spielerisch, ohne Stress. Ich bin sehr zufrieden.\"\n\nHerr Ali (32): „In meiner Familie sprechen wir Arabisch. Im Kindergarten spricht mein Sohn Deutsch. Jetzt kann er beides – das ist ein großer Vorteil für sein späteres Leben.\"\n\nFrau Kim (29): „Man muss aufpassen. Mein Sohn hatte am Anfang Probleme, weil wir zu Hause Koreanisch, im Kindergarten Deutsch und einmal pro Woche Englisch lernten. Jetzt geht es besser, aber es war anstrengend.\"",
        "questions": [
          {
            "id": "lesen-1-4-1",
            "statementDe": "Herr Schneider ist gegen Fremdsprachen im Kindergarten.",
            "statementAr": "السيد شنايدر ضد تعلم اللغات الأجنبية في الحضانة.",
            "correct": true
          },
          {
            "id": "lesen-1-4-2",
            "statementDe": "Frau Webers Tochter lernt Englisch mit viel Stress.",
            "statementAr": "ابنة السيدة فيبر تتعلم الإنجليزية بضغط كبير.",
            "correct": false,
            "explanation": "تقول إنها تتعلم بشكل لعبي بدون إجهاد."
          },
          {
            "id": "lesen-1-4-3",
            "statementDe": "Der Sohn von Herrn Ali spricht zwei Sprachen.",
            "statementAr": "ابن السيد علي يتكلم لغتين.",
            "correct": true
          },
          {
            "id": "lesen-1-4-4",
            "statementDe": "Frau Kim ist sehr unglücklich mit drei Sprachen.",
            "statementAr": "السيدة كيم غير سعيدة أبداً بثلاث لغات.",
            "correct": false,
            "explanation": "تقول إن الوضع كان صعباً في البداية لكنه يتحسن الآن."
          },
          {
            "id": "lesen-1-4-5",
            "statementDe": "Frau Weber hat eine positive Meinung.",
            "statementAr": "السيدة فيبر لديها رأي إيجابي.",
            "correct": true
          },
          {
            "id": "lesen-1-4-6",
            "statementDe": "Alle Eltern im Text sind dagegen.",
            "statementAr": "كل الآباء في النص ضد الفكرة.",
            "correct": false
          },
          {
            "id": "lesen-1-4-7",
            "statementDe": "Herr Ali findet Zweisprachigkeit einen Vorteil für das Leben.",
            "statementAr": "السيد علي يرى أن ثنائية اللغة ميزة للحياة.",
            "correct": true
          }
        ]
      },
      {
        "type": "mc-rules",
        "title": "Teil 5 – تعليمات / نظام",
        "instructionsAr": "اقرأ النص (قواعد المكتبة) ثم أجب عن الأسئلة.",
        "textDe": "Benutzungsordnung der Stadtbibliothek Köln\n\n1. Die Bibliothek ist Montag bis Freitag von 10 bis 19 Uhr und am Samstag von 10 bis 14 Uhr geöffnet. Sonntags geschlossen.\n\n2. Um Bücher auszuleihen, brauchen Sie einen Bibliotheksausweis. Der Ausweis kostet 15 € pro Jahr für Erwachsene. Für Kinder und Schüler unter 18 Jahren ist der Ausweis kostenlos.\n\n3. Sie können maximal 10 Bücher gleichzeitig ausleihen. Die Leihfrist beträgt 4 Wochen. Bei Verspätung kostet jedes Buch 0,50 € pro Woche.\n\n4. Essen und Trinken sind in den Leseräumen nicht erlaubt. Getränke in geschlossenen Flaschen sind in der Cafeteria erlaubt.\n\n5. Die Benutzung der Computer ist kostenlos. Bitte reservieren Sie am Empfang, wenn Sie länger als 30 Minuten am Computer arbeiten möchten.",
        "questions": [
          {
            "id": "lesen-1-5-1",
            "promptDe": "Wann ist die Bibliothek geöffnet?",
            "options": [
              {
                "id": "a",
                "de": "Jeden Tag von 10 bis 19 Uhr."
              },
              {
                "id": "b",
                "de": "Von Montag bis Samstag, aber nicht sonntags."
              },
              {
                "id": "c",
                "de": "Nur am Wochenende."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-1-5-2",
            "promptDe": "Was kostet der Ausweis für einen 16-jährigen Schüler?",
            "options": [
              {
                "id": "a",
                "de": "15 € pro Jahr."
              },
              {
                "id": "b",
                "de": "0,50 € pro Woche."
              },
              {
                "id": "c",
                "de": "Nichts, er ist kostenlos."
              }
            ],
            "correct": "c"
          },
          {
            "id": "lesen-1-5-3",
            "promptDe": "Wie viele Bücher darf man höchstens ausleihen?",
            "options": [
              {
                "id": "a",
                "de": "4 Bücher."
              },
              {
                "id": "b",
                "de": "10 Bücher."
              },
              {
                "id": "c",
                "de": "So viele man will."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-1-5-4",
            "promptDe": "Wo darf man trinken?",
            "options": [
              {
                "id": "a",
                "de": "Überall in der Bibliothek."
              },
              {
                "id": "b",
                "de": "Nur in der Cafeteria."
              },
              {
                "id": "c",
                "de": "Nur im Leseraum."
              }
            ],
            "correct": "b"
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-2",
    "title": "نموذج Lesen رقم 2",
    "description": "نموذج ثانٍ مع مواضيع الحياة اليومية والعمل.",
    "parts": [
      {
        "type": "mc-article",
        "title": "Teil 1 – مقال عن العمل",
        "instructionsAr": "اقرأ المقال واختر الإجابة الصحيحة (a / b / c).",
        "textDe": "Home-Office in Deutschland – ein Trend bleibt\n\nSeit der Corona-Pandemie arbeiten viele Menschen in Deutschland von zu Hause. Eine Umfrage zeigt: 60 % der Büroangestellten möchten mindestens zwei Tage pro Woche im Home-Office bleiben.\n\nDie Vorteile sind klar: kein Stress auf dem Weg zur Arbeit, mehr Zeit für die Familie und oft mehr Ruhe zum Arbeiten. „Ich bin viel produktiver zu Hause\", sagt Softwareentwickler Peter Klein. Aber es gibt auch Probleme. Viele Menschen vermissen den Kontakt zu Kollegen. Junge Mitarbeiter haben es schwerer, Neues zu lernen. Außerdem arbeiten manche zu lange, weil sie keine klare Grenze zwischen Arbeit und Freizeit haben.\n\nDie Firmen suchen Lösungen: flexible Modelle mit zwei bis drei Tagen im Büro pro Woche, bessere Technik und regelmäßige Treffen mit dem Team.",
        "questions": [
          {
            "id": "lesen-2-1-1",
            "promptDe": "Wie viele Büroangestellte wollen weiter im Home-Office arbeiten?",
            "options": [
              {
                "id": "a",
                "de": "Etwa die Hälfte."
              },
              {
                "id": "b",
                "de": "60 Prozent."
              },
              {
                "id": "c",
                "de": "Fast alle."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-2-1-2",
            "promptDe": "Welches Problem nennt der Text?",
            "options": [
              {
                "id": "a",
                "de": "Der Computer ist zu langsam."
              },
              {
                "id": "b",
                "de": "Der Kontakt zu Kollegen fehlt."
              },
              {
                "id": "c",
                "de": "Die Miete ist zu hoch."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-2-1-3",
            "promptDe": "Was ist die Lösung vieler Firmen?",
            "options": [
              {
                "id": "a",
                "de": "Alle müssen jeden Tag ins Büro."
              },
              {
                "id": "b",
                "de": "Nur noch Home-Office."
              },
              {
                "id": "c",
                "de": "Eine Mischung aus Büro und Home-Office."
              }
            ],
            "correct": "c"
          }
        ]
      },
      {
        "type": "match-ads",
        "title": "Teil 2 – إعلانات",
        "instructionsAr": "اقرأ ماذا يريد كل شخص واختر الإعلان المناسب. هناك إعلان واحد زائد.",
        "situations": [
          {
            "id": "lesen-2-2-1",
            "textAr": "1. سامر يبحث عن غسّالة مستعملة رخيصة.",
            "textDe": "Samer sucht eine günstige gebrauchte Waschmaschine.",
            "correctAd": "b"
          },
          {
            "id": "lesen-2-2-2",
            "textAr": "2. نادية تحتاج إلى دروس خصوصية في الرياضيات لابنها.",
            "textDe": "Nadia sucht Mathe-Nachhilfe für ihren Sohn.",
            "correctAd": "e"
          },
          {
            "id": "lesen-2-2-3",
            "textAr": "3. عمر يريد تعلم السباحة.",
            "textDe": "Omar möchte schwimmen lernen.",
            "correctAd": "f"
          },
          {
            "id": "lesen-2-2-4",
            "textAr": "4. سلمى تبحث عن دراجة هوائية للأطفال.",
            "textDe": "Salma sucht ein Kinderfahrrad.",
            "correctAd": "a"
          },
          {
            "id": "lesen-2-2-5",
            "textAr": "5. يوسف يحتاج مصفف شعر للرجال قرب محطة القطار.",
            "textDe": "Youssef sucht einen Herrenfriseur in der Nähe des Bahnhofs.",
            "correctAd": "c"
          }
        ],
        "ads": [
          {
            "id": "a",
            "titleDe": "Fahrradladen „Velo Kids\"",
            "textDe": "Neue und gebrauchte Fahrräder für Kinder von 3–14 Jahren. Ab 60 €. Offen Mo–Fr 9–18 Uhr."
          },
          {
            "id": "b",
            "titleDe": "Secondhand-Elektro",
            "textDe": "Wir verkaufen gebrauchte Haushaltsgeräte mit 6 Monaten Garantie. Waschmaschinen ab 120 €."
          },
          {
            "id": "c",
            "titleDe": "Friseur Berlin-Mitte",
            "textDe": "Direkt am Hauptbahnhof. Herrenhaarschnitt 15 €, Bart 8 €. Ohne Termin möglich."
          },
          {
            "id": "d",
            "titleDe": "Tierarztpraxis Dr. Huber",
            "textDe": "Für alle Tiere. Auch Notfälle am Wochenende."
          },
          {
            "id": "e",
            "titleDe": "Nachhilfe-Institut „LernPro\"",
            "textDe": "Mathe, Deutsch, Englisch für alle Klassen. 15 € pro Stunde. Online oder vor Ort."
          },
          {
            "id": "f",
            "titleDe": "Schwimmschule „Blauer Delfin\"",
            "textDe": "Anfängerkurse für Erwachsene und Kinder. 10 Stunden für 90 €."
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 3 – آراء المستمعين",
        "instructionsAr": "هل الجمل صحيحة أم خاطئة حسب النص؟",
        "textDe": "Leserbriefe zum Thema „Zu viel Zeit am Handy\"\n\nMaria (25): „Ich nutze mein Handy nur für das Nötigste. Ohne Handy geht nichts: Bankgeschäfte, Bus-Tickets, Nachrichten an die Familie. Aber ich spiele nicht und schaue keine Videos stundenlang.\"\n\nJens (17): „Ohne Handy fühle ich mich verloren. Meine Freunde und ich schreiben den ganzen Tag. Aber manchmal bin ich müde und kann nicht schlafen, weil ich zu lange auf den Bildschirm schaue.\"\n\nFrau Berger (53): „Meine Kinder verbringen viel zu viel Zeit am Handy. Am Esstisch muss das Handy weg sein – das ist bei uns Regel. Wir sprechen und hören einander zu.\"",
        "questions": [
          {
            "id": "lesen-2-3-1",
            "statementDe": "Maria nutzt das Handy auch für die Bank.",
            "correct": true
          },
          {
            "id": "lesen-2-3-2",
            "statementDe": "Jens hat keine Probleme mit dem Handy.",
            "correct": false,
            "explanation": "يقول إنه أحياناً لا ينام بسبب الشاشة."
          },
          {
            "id": "lesen-2-3-3",
            "statementDe": "Frau Berger erlaubt das Handy beim Essen nicht.",
            "correct": true
          },
          {
            "id": "lesen-2-3-4",
            "statementDe": "Maria spielt viele Handyspiele.",
            "correct": false
          }
        ]
      },
      {
        "type": "mc-rules",
        "title": "Teil 4 – إرشادات المشفى",
        "instructionsAr": "اقرأ الإرشادات وأجب.",
        "textDe": "Informationen für Patienten – Klinikum Berlin\n\n• Besuchszeit: täglich von 14:00 bis 19:00 Uhr. Außerhalb dieser Zeit bitte an der Rezeption fragen.\n• Mitgebrachte Speisen bitte nur nach Absprache mit dem Personal verzehren.\n• Handys müssen auf den Intensivstationen ausgeschaltet sein.\n• Kinder unter 12 Jahren dürfen Patienten nur mit einer erwachsenen Begleitung besuchen.\n• Kostenloses WLAN finden Sie im gesamten Gebäude. Das Passwort erhalten Sie an der Rezeption.",
        "questions": [
          {
            "id": "lesen-2-4-1",
            "promptDe": "Wann ist Besuchszeit?",
            "options": [
              {
                "id": "a",
                "de": "Nur am Wochenende."
              },
              {
                "id": "b",
                "de": "Jeden Tag von 14 bis 19 Uhr."
              },
              {
                "id": "c",
                "de": "24 Stunden."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-2-4-2",
            "promptDe": "Was soll man mit dem Handy in der Intensivstation tun?",
            "options": [
              {
                "id": "a",
                "de": "Ausmachen."
              },
              {
                "id": "b",
                "de": "Lautlos stellen."
              },
              {
                "id": "c",
                "de": "Normal benutzen."
              }
            ],
            "correct": "a"
          },
          {
            "id": "lesen-2-4-3",
            "promptDe": "Dürfen Kinder allein ins Krankenhaus kommen?",
            "options": [
              {
                "id": "a",
                "de": "Ja, immer."
              },
              {
                "id": "b",
                "de": "Nein, nur mit einem Erwachsenen, wenn sie unter 12 sind."
              },
              {
                "id": "c",
                "de": "Nein, nie."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-2-4-4",
            "promptDe": "Wie bekommt man das WLAN-Passwort?",
            "options": [
              {
                "id": "a",
                "de": "Im Zimmer."
              },
              {
                "id": "b",
                "de": "An der Rezeption."
              },
              {
                "id": "c",
                "de": "Auf der Webseite."
              }
            ],
            "correct": "b"
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-3",
    "title": "نموذج Lesen رقم 3",
    "description": "نموذج ثالث مع نصوص عن الصحة والمواصلات والاندماج.",
    "parts": [
      {
        "type": "match-blog",
        "title": "Teil 1 – منتدى حول \"تعلم الألمانية\"",
        "instructionsAr": "من قال ماذا؟ اختر الشخص المناسب لكل جملة.",
        "texts": [
          {
            "id": "A",
            "titleDe": "Hassan",
            "textDe": "Ich lerne Deutsch seit drei Monaten. Am Anfang war es sehr schwierig, besonders der Dativ und der Akkusativ. Aber mit Hilfe von meinem Nachbarn, der Lehrer ist, mache ich jetzt große Fortschritte."
          },
          {
            "id": "B",
            "titleDe": "Rana",
            "textDe": "Ich arbeite den ganzen Tag und habe wenig Zeit. Deshalb höre ich jeden Morgen deutsche Radiosendungen im Auto. Das hilft mir mit dem Hörverstehen."
          },
          {
            "id": "C",
            "titleDe": "Ibrahim",
            "textDe": "Mir helfen Filme mit Untertiteln sehr. Ich habe am Anfang auf Arabisch gelesen, jetzt lese ich die deutschen Untertitel mit. So lerne ich viele neue Wörter."
          },
          {
            "id": "D",
            "titleDe": "Amira",
            "textDe": "Ich gehe zweimal pro Woche zum Sprachcafé in der Bibliothek. Dort treffen wir Deutsche, die uns helfen wollen, und wir reden über alles – Wetter, Kinder, Arbeit."
          },
          {
            "id": "E",
            "titleDe": "Yasser",
            "textDe": "Ich bin über 50 Jahre alt und lerne schwer. Aber ich lasse nicht auf. Jeden Tag schreibe ich 5 neue Wörter in ein Heft. Nach einem Jahr sind das mehr als 1000 Wörter!"
          }
        ],
        "statements": [
          {
            "id": "lesen-3-1-1",
            "textDe": "Diese Person lernt mit Filmen.",
            "textAr": "هذا الشخص يتعلم عن طريق الأفلام.",
            "correctAd": "C"
          },
          {
            "id": "lesen-3-1-2",
            "textDe": "Diese Person hat Probleme mit der Grammatik, aber jemand hilft ihr.",
            "textAr": "هذا الشخص عنده مشكلة في القواعد، لكن أحدهم يساعده.",
            "correctAd": "A"
          },
          {
            "id": "lesen-3-1-3",
            "textDe": "Diese Person spricht oft mit Deutschen in der Bibliothek.",
            "textAr": "هذا الشخص يتكلم مع الألمان في المكتبة.",
            "correctAd": "D"
          },
          {
            "id": "lesen-3-1-4",
            "textDe": "Diese Person lernt im Auto.",
            "textAr": "هذا الشخص يتعلم داخل السيارة.",
            "correctAd": "B"
          },
          {
            "id": "lesen-3-1-5",
            "textDe": "Diese Person ist älter und lernt langsam, aber regelmäßig.",
            "textAr": "هذا الشخص كبير في السن ويتعلم ببطء لكن بانتظام.",
            "correctAd": "E"
          },
          {
            "id": "lesen-3-1-6",
            "textDe": "Diese Person kennt inzwischen viele Wörter.",
            "textAr": "هذا الشخص يعرف اليوم كلمات كثيرة.",
            "correctAd": "E"
          }
        ]
      },
      {
        "type": "mc-article",
        "title": "Teil 2 – مقال: المواصلات في المدن الكبيرة",
        "instructionsAr": "اقرأ النص واختر الإجابة الصحيحة.",
        "textDe": "Das 49-Euro-Ticket – eine Revolution?\n\nSeit dem Frühjahr gibt es in Deutschland das neue 49-Euro-Ticket. Damit kann man in ganz Deutschland mit Bus, U-Bahn, S-Bahn und Regionalzug fahren – einen Monat lang, so oft man will. Das Ticket ist digital auf dem Handy oder als Chipkarte erhältlich.\n\nBesonders Pendler und Familien sind zufrieden. „Früher kostete mein Monatsticket 85 Euro, jetzt zahle ich nur 49\", sagt Student Thomas Berger. Viele Familien planen am Wochenende Ausflüge, die früher zu teuer waren.\n\nAber es gibt auch Kritik. In den Zügen ist es oft zu voll, und manchmal fahren Züge gar nicht oder haben Verspätung. Außerdem: Das Ticket ist nicht für Fernzüge (ICE, IC) gültig. Wer von Berlin nach München schnell reisen will, muss weiter teuer zahlen.",
        "questions": [
          {
            "id": "lesen-3-2-1",
            "promptDe": "Wo gilt das 49-Euro-Ticket?",
            "options": [
              {
                "id": "a",
                "de": "Nur in Berlin."
              },
              {
                "id": "b",
                "de": "In ganz Deutschland, aber nicht in Fernzügen."
              },
              {
                "id": "c",
                "de": "Nur am Wochenende."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-3-2-2",
            "promptDe": "Was ist ein Problem mit dem Ticket?",
            "options": [
              {
                "id": "a",
                "de": "Die Züge sind manchmal voll oder verspätet."
              },
              {
                "id": "b",
                "de": "Es ist zu teuer."
              },
              {
                "id": "c",
                "de": "Man kann es nur am Schalter kaufen."
              }
            ],
            "correct": "a"
          },
          {
            "id": "lesen-3-2-3",
            "promptDe": "Für wen ist das Ticket besonders gut?",
            "options": [
              {
                "id": "a",
                "de": "Geschäftsleute mit dem ICE."
              },
              {
                "id": "b",
                "de": "Pendler und Familien."
              },
              {
                "id": "c",
                "de": "Touristen aus dem Ausland."
              }
            ],
            "correct": "b"
          }
        ]
      },
      {
        "type": "mc-rules",
        "title": "Teil 3 – إعلان على وثيقة رسمية",
        "instructionsAr": "اقرأ النص الرسمي وأجب.",
        "textDe": "Anmeldung beim Bürgeramt – wichtig!\n\nWenn Sie in Deutschland umziehen, müssen Sie sich innerhalb von 14 Tagen am neuen Wohnort anmelden.\n\nMitbringen:\n– gültiger Pass oder Personalausweis\n– Wohnungsgeberbestätigung (vom Vermieter)\n– bei Familien: Heiratsurkunde und Geburtsurkunden der Kinder\n\nTermine online buchbar unter www.buergeramt.de. Ohne Termin ist Wartezeit sehr lang.\n\nDie Anmeldung ist kostenlos.",
        "questions": [
          {
            "id": "lesen-3-3-1",
            "promptDe": "Wie lange hat man nach dem Umzug Zeit zur Anmeldung?",
            "options": [
              {
                "id": "a",
                "de": "7 Tage."
              },
              {
                "id": "b",
                "de": "14 Tage."
              },
              {
                "id": "c",
                "de": "1 Monat."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-3-3-2",
            "promptDe": "Was braucht eine Familie zusätzlich?",
            "options": [
              {
                "id": "a",
                "de": "Arbeitsvertrag."
              },
              {
                "id": "b",
                "de": "Heirats- und Geburtsurkunden."
              },
              {
                "id": "c",
                "de": "Bankdaten."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-3-3-3",
            "promptDe": "Was kostet die Anmeldung?",
            "options": [
              {
                "id": "a",
                "de": "10 €."
              },
              {
                "id": "b",
                "de": "25 €."
              },
              {
                "id": "c",
                "de": "Nichts."
              }
            ],
            "correct": "c"
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-4",
    "title": "Lesen – نموذج 4 (العائلة والصداقة)",
    "description": "العلاقات الاجتماعية، تربية الأطفال، الصداقة في ألمانيا.",
    "parts": [
      {
        "type": "match-blog",
        "title": "Teil 1 – مدوّنة عن الصداقة",
        "instructionsAr": "اقرأ الآراء الخمسة (A-E) عن الصداقة. أيّ شخص يقول العبارة 1-6؟",
        "texts": [
          {
            "id": "A",
            "titleDe": "Hassan, 28",
            "titleAr": "حسن، 28",
            "textDe": "Für mich ist ein guter Freund jemand, der immer ehrlich zu mir ist. Wenn ich einen Fehler mache, sagt er es mir – auch wenn es weh tut. Geld leihe ich aber nie an Freunde, das macht die Beziehung nur kaputt."
          },
          {
            "id": "B",
            "titleDe": "Layla, 34",
            "titleAr": "ليلى، 34",
            "textDe": "Ich habe nicht viele Freundinnen, aber zwei sehr enge. Wir sehen uns nur zwei- oder dreimal im Jahr, denn wir wohnen weit voneinander entfernt. Trotzdem fühlt es sich an, als hätten wir uns gestern gesehen."
          },
          {
            "id": "C",
            "titleDe": "Markus, 22",
            "titleAr": "ماركوس، 22",
            "textDe": "Meine Freunde habe ich vor allem im Sportverein gefunden. Wir trainieren dreimal die Woche zusammen. Ohne den Sport hätte ich vielleicht keinen einzigen Freund in dieser neuen Stadt."
          },
          {
            "id": "D",
            "titleDe": "Fatima, 41",
            "titleAr": "فاطمة، 41",
            "textDe": "Seit ich Mutter bin, habe ich kaum noch Zeit für meine alten Freundinnen. Aber ich habe neue Mütter im Kindergarten kennengelernt. Wir verstehen uns gut, weil wir alle dieselben Probleme haben."
          },
          {
            "id": "E",
            "titleDe": "Tobias, 55",
            "titleAr": "توبياس، 55",
            "textDe": "Mein bester Freund und ich kennen uns seit der Grundschule. Das sind über 45 Jahre! Wir haben viel zusammen erlebt, gute und schlechte Zeiten. So eine Freundschaft kann man nicht ersetzen."
          }
        ],
        "statements": [
          {
            "id": "lesen-4-1-1",
            "textDe": "Diese Person hat ihre Freunde durch ein Hobby gefunden.",
            "textAr": "هذا الشخص وجد أصدقاءه من خلال هواية.",
            "correctAd": "C"
          },
          {
            "id": "lesen-4-1-2",
            "textDe": "Diese Person hat seit der Kindheit denselben besten Freund.",
            "textAr": "هذا الشخص لديه نفس أفضل صديق منذ الطفولة.",
            "correctAd": "E"
          },
          {
            "id": "lesen-4-1-3",
            "textDe": "Diese Person findet, dass Geld in Freundschaften Probleme macht.",
            "textAr": "هذا الشخص يرى أن المال يسبب مشاكل في الصداقة.",
            "correctAd": "A"
          },
          {
            "id": "lesen-4-1-4",
            "textDe": "Diese Person sieht ihre Freundinnen nur sehr selten.",
            "textAr": "هذا الشخص يرى صديقاته نادراً جداً.",
            "correctAd": "B"
          },
          {
            "id": "lesen-4-1-5",
            "textDe": "Diese Person hat durch ihre Kinder neue Freunde gewonnen.",
            "textAr": "هذا الشخص كوّن صداقات جديدة بسبب أطفاله.",
            "correctAd": "D"
          },
          {
            "id": "lesen-4-1-6",
            "textDe": "Diese Person schätzt vor allem Ehrlichkeit.",
            "textAr": "هذا الشخص يقدّر الصدق قبل كل شيء.",
            "correctAd": "A"
          }
        ]
      },
      {
        "type": "mc-article",
        "title": "Teil 2 – مقال عن الأسرة في ألمانيا",
        "instructionsAr": "اقرأ المقال وأجب عن الأسئلة 1-3.",
        "textDe": "Die deutsche Familie hat sich in den letzten 50 Jahren stark verändert. Früher lebten oft drei Generationen unter einem Dach: Großeltern, Eltern und Kinder. Heute ist das die Ausnahme. Die meisten Familien bestehen aus zwei Eltern und ein bis zwei Kindern.\n\nAuch das Bild der Eltern hat sich gewandelt. Während früher fast nur die Mutter zu Hause blieb, arbeiten heute viele Mütter wieder, sobald die Kinder in den Kindergarten gehen. Väter nehmen häufig \"Elternzeit\" und kümmern sich aktiv um die Kinder. In manchen Berufen, besonders in großen Firmen, ist es ganz normal, dass beide Eltern in Teilzeit arbeiten.\n\nEine neue Entwicklung sind die sogenannten \"Patchwork-Familien\": Eltern trennen sich, lernen neue Partner kennen und bringen ihre Kinder in eine neue Familie. Für Kinder ist das oft eine Herausforderung. Sie haben dann mehrere Geschwister, mit denen sie nicht aufgewachsen sind.\n\nTrotz dieser Veränderungen bleibt die Familie für die meisten Deutschen das Wichtigste im Leben. Eine Umfrage des Allensbach-Instituts von 2023 zeigt: 87% der Deutschen sagen, dass die Familie ihnen Glück bringt – mehr als der Beruf oder das Geld.",
        "questions": [
          {
            "id": "lesen-4-2-1",
            "promptDe": "Wie sehen die meisten deutschen Familien heute aus?",
            "options": [
              {
                "id": "a",
                "de": "Drei Generationen leben zusammen."
              },
              {
                "id": "b",
                "de": "Zwei Eltern mit ein bis zwei Kindern."
              },
              {
                "id": "c",
                "de": "Eine Mutter mit vielen Kindern."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول صراحةً: zwei Eltern und ein bis zwei Kindern."
          },
          {
            "id": "lesen-4-2-2",
            "promptDe": "Was ist eine Patchwork-Familie?",
            "options": [
              {
                "id": "a",
                "de": "Eine Familie, in der die Großeltern wohnen."
              },
              {
                "id": "b",
                "de": "Eine Familie aus neuen Partnern und ihren Kindern."
              },
              {
                "id": "c",
                "de": "Eine Familie ohne Kinder."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-4-2-3",
            "promptDe": "Was zeigt die Umfrage von 2023?",
            "options": [
              {
                "id": "a",
                "de": "Beruf macht die Deutschen am glücklichsten."
              },
              {
                "id": "b",
                "de": "Geld ist das Wichtigste im Leben."
              },
              {
                "id": "c",
                "de": "Familie ist für 87% das Wichtigste."
              }
            ],
            "correct": "c"
          }
        ]
      },
      {
        "type": "match-ads",
        "title": "Teil 3 – إعلانات للأنشطة العائلية",
        "instructionsAr": "لكل واحد من الأشخاص (1-7) ابحث عن الإعلان المناسب (A-H). إذا لم يوجد، اختر \"لا يوجد\".",
        "ads": [
          {
            "id": "a",
            "titleDe": "Familienpicknick im Stadtpark",
            "textDe": "Sonntag 12:00 Uhr. Bringen Sie Ihre Familie und Freunde mit. Spiele für Kinder, Musik und gutes Wetter erwartet uns. Eintritt frei!"
          },
          {
            "id": "b",
            "titleDe": "Eltern-Kind-Schwimmen",
            "textDe": "Jeden Samstag 10:00–12:00 Uhr im Hallenbad. Geeignet für Kinder ab 3 Jahren. 5 € pro Eltern-Kind-Paar."
          },
          {
            "id": "c",
            "titleDe": "Babysitter-Vermittlung",
            "textDe": "Wir vermitteln zuverlässige Babysitter in Ihrer Nähe. Alle sind über 18 und haben einen Erste-Hilfe-Kurs gemacht. Anruf genügt."
          },
          {
            "id": "d",
            "titleDe": "Sprachcafé für Frauen",
            "textDe": "Mittwochs 14:00 Uhr. Frauen aus aller Welt treffen sich, trinken Kaffee und reden Deutsch. Mit Kinderbetreuung. Anmeldung nicht nötig."
          },
          {
            "id": "e",
            "titleDe": "Großeltern-Stammtisch",
            "textDe": "Jeden ersten Dienstag im Monat. Großeltern tauschen Erfahrungen aus. 18:00 Uhr im Café Sonne."
          },
          {
            "id": "f",
            "titleDe": "Familien-Beratungsstelle",
            "textDe": "Streit zu Hause? Probleme mit den Kindern? Wir hören zu und helfen kostenlos. Mo–Fr 9–17 Uhr."
          },
          {
            "id": "g",
            "titleDe": "Wochenend-Wanderung für Familien",
            "textDe": "Samstag im Schwarzwald. Leichte Strecke (ca. 6 km). Geeignet für Kinder ab 6 Jahren. Mit Bus-Anreise. 25 € pro Familie."
          },
          {
            "id": "h",
            "titleDe": "Online-Elternkurs",
            "textDe": "Wie erziehe ich mein Kind im digitalen Zeitalter? 4 Abende per Zoom. 60 € insgesamt."
          }
        ],
        "situations": [
          {
            "id": "lesen-4-3-1",
            "textAr": "الأم سعاد لديها طفل عمره 4 سنوات وتريد نشاطاً أسبوعياً معه.",
            "textDe": "Suad hat ein 4-jähriges Kind und sucht eine wöchentliche Aktivität.",
            "correctAd": "b"
          },
          {
            "id": "lesen-4-3-2",
            "textAr": "فاطمة تريد ممارسة الألمانية مع نساء أخريات بدون قلق على أطفالها.",
            "textDe": "Fatima möchte Deutsch mit anderen Frauen üben, ohne sich Sorgen um ihre Kinder zu machen.",
            "correctAd": "d"
          },
          {
            "id": "lesen-4-3-3",
            "textAr": "الأبوان مخططان لرحلة قصيرة في عطلة نهاية الأسبوع مع طفلهما 7 سنوات.",
            "textDe": "Die Eltern planen einen kurzen Wochenendausflug mit ihrem 7-jährigen Kind.",
            "correctAd": "g"
          },
          {
            "id": "lesen-4-3-4",
            "textAr": "يحتاج عمر شخصاً يعتني بطفله مساء السبت لأن لديه عشاء خاص.",
            "textDe": "Omar braucht jemanden, der am Samstagabend auf sein Kind aufpasst, weil er ein besonderes Abendessen hat.",
            "correctAd": "c"
          },
          {
            "id": "lesen-4-3-5",
            "textAr": "العائلة تواجه مشاكل وتبحث عن مساعدة مهنية مجانية.",
            "textDe": "Die Familie hat Probleme und sucht kostenlose, professionelle Hilfe.",
            "correctAd": "f"
          },
          {
            "id": "lesen-4-3-6",
            "textAr": "الجدة هاجر تريد التعرّف على جدّات أخريات وتبادل الخبرات.",
            "textDe": "Großmutter Hajar möchte andere Großmütter kennenlernen und Erfahrungen austauschen.",
            "correctAd": "e"
          },
          {
            "id": "lesen-4-3-7",
            "textAr": "محمد يريد دورة تنظّم له وقت أطفاله مع الأجهزة الإلكترونية.",
            "textDe": "Mohammed möchte einen Kurs, der ihm hilft, die Bildschirmzeit seiner Kinder zu regeln.",
            "correctAd": "h"
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 4 – آراء عن دور المرأة في العمل",
        "instructionsAr": "اقرأ النصوص واكتب صح Richtig أو خطأ Falsch لكل عبارة.",
        "textDe": "Forum: \"Mütter im Beruf – wie schafft ihr das?\"\n\nSandra (32): Ich arbeite Vollzeit und habe zwei Kinder. Ohne meinen Mann, der die Hälfte der Hausarbeit macht, wäre das unmöglich. Wir teilen alles 50/50.\n\nAisha (29): Ich arbeite halbtags. Mehr geht nicht, weil mein Mann viel reisen muss. Ich vermisse meinen alten Job manchmal, aber für die Kinder ist es jetzt besser.\n\nBirgit (45): Ich war 15 Jahre nur Mutter. Jetzt versuche ich, wieder einzusteigen, aber niemand will mich. Mein Tipp: Geht nie ganz aus dem Beruf raus, auch wenn die Kinder klein sind!\n\nMehmet (38): Ich bin der Vater von drei Kindern und arbeite 80%. Meine Frau auch. Wir sind beide müde, aber wir sind glücklich. Es geht, wenn beide Partner mitmachen.\n\nUte (52): Ich finde, dass kleine Kinder die Mutter brauchen. Mein Mann hat Vollzeit gearbeitet, ich war zu Hause. Heute haben wir drei erwachsene, glückliche Kinder. So einfach ist das.\n\nLukas (41): Mütter dürfen arbeiten, wenn sie wollen. Aber niemand soll ihnen sagen, dass sie es müssen, um \"modern\" zu sein. Jede Familie soll selbst entscheiden.",
        "questions": [
          {
            "id": "lesen-4-4-1",
            "statementDe": "Sandra arbeitet Vollzeit, weil ihr Mann ihr hilft.",
            "statementAr": "ساندرا تعمل بدوام كامل لأن زوجها يساعدها.",
            "correct": true
          },
          {
            "id": "lesen-4-4-2",
            "statementDe": "Aisha findet ihre jetzige Situation schlechter als früher.",
            "statementAr": "عائشة ترى أن وضعها الحالي أسوأ من السابق.",
            "correct": false,
            "explanation": "تقول: \"für die Kinder ist es jetzt besser\" – أفضل للأطفال."
          },
          {
            "id": "lesen-4-4-3",
            "statementDe": "Birgit empfiehlt, mit dem Beruf ganz aufzuhören.",
            "statementAr": "بيرغيت تنصح بالتوقف الكامل عن العمل.",
            "correct": false
          },
          {
            "id": "lesen-4-4-4",
            "statementDe": "Mehmet und seine Frau arbeiten beide weniger als 100%.",
            "statementAr": "مهمت وزوجته يعملان كلاهما أقل من 100%.",
            "correct": true
          },
          {
            "id": "lesen-4-4-5",
            "statementDe": "Ute findet, dass die Mutter zu Hause bleiben soll.",
            "statementAr": "أوته ترى أن الأم يجب أن تبقى في البيت.",
            "correct": true
          },
          {
            "id": "lesen-4-4-6",
            "statementDe": "Lukas glaubt, jede Mutter muss arbeiten gehen.",
            "statementAr": "لوكاس يعتقد أن كل أم يجب أن تعمل.",
            "correct": false,
            "explanation": "\"Jede Familie soll selbst entscheiden\" = العائلة تقرر بنفسها."
          },
          {
            "id": "lesen-4-4-7",
            "statementDe": "Alle Personen sind sich einig, dass Mütter immer arbeiten sollten.",
            "statementAr": "كل الأشخاص متفقون على أن الأمهات يجب أن يعملن دائماً.",
            "correct": false
          }
        ]
      },
      {
        "type": "mc-rules",
        "title": "Teil 5 – نظام Kindergarten / مدرسة الأطفال",
        "instructionsAr": "اقرأ القواعد وأجب عن الأسئلة 1-4.",
        "textDe": "Anmeldung und Regeln im Kindergarten \"Sonnenblume\"\n\n1. Die Anmeldung muss spätestens 6 Monate vor Eintritt erfolgen. Die Plätze sind begrenzt.\n\n2. Bringzeit ist täglich von 7:30 bis 9:00 Uhr. Nach 9:00 Uhr ist die Tür geschlossen, weil die Kinder mit dem Programm beginnen.\n\n3. Krankheit: Wenn Ihr Kind krank ist (Fieber, Magen-Darm, Erkältung mit Fieber), bleibt es zu Hause. Bitte rufen Sie bis 8:00 Uhr an.\n\n4. Mittagessen kostet 4 € pro Tag. Anmeldung muss eine Woche vorher schriftlich erfolgen. Bei Krankheit: Erstattung ab dem 3. Tag.\n\n5. Geburtstage feiern wir gerne! Bringen Sie eine Kleinigkeit mit (Kuchen, Obst). Bitte keine Süßigkeiten ohne Anmeldung – manche Kinder haben Allergien.\n\n6. Abholzeiten: Halbtag bis 13:00 Uhr, Ganztag bis 16:30 Uhr. Bei Verspätung über 15 Minuten: 5 € pro angefangene Viertelstunde.\n\nBei Fragen: kindergarten-sonnenblume@stadt.de oder 0211-555-1234.",
        "questions": [
          {
            "id": "lesen-4-5-1",
            "promptDe": "Wann muss man sein Kind spätestens anmelden?",
            "options": [
              {
                "id": "a",
                "de": "1 Monat vorher."
              },
              {
                "id": "b",
                "de": "6 Monate vorher."
              },
              {
                "id": "c",
                "de": "1 Jahr vorher."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-4-5-2",
            "promptDe": "Was passiert, wenn Sie das Kind nach 9:00 Uhr bringen?",
            "options": [
              {
                "id": "a",
                "de": "Sie bezahlen 5 €."
              },
              {
                "id": "b",
                "de": "Die Tür ist zu."
              },
              {
                "id": "c",
                "de": "Es bekommt kein Mittagessen."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-4-5-3",
            "promptDe": "Wann bekommen Sie Geld für das Mittagessen zurück?",
            "options": [
              {
                "id": "a",
                "de": "Ab dem 1. Krankheitstag."
              },
              {
                "id": "b",
                "de": "Ab dem 3. Krankheitstag."
              },
              {
                "id": "c",
                "de": "Gar nicht."
              }
            ],
            "correct": "b"
          },
          {
            "id": "lesen-4-5-4",
            "promptDe": "Was zahlen Sie, wenn Sie 20 Minuten zu spät kommen?",
            "options": [
              {
                "id": "a",
                "de": "Nichts."
              },
              {
                "id": "b",
                "de": "5 €."
              },
              {
                "id": "c",
                "de": "10 €."
              }
            ],
            "correct": "c",
            "explanation": "20 دقيقة = ربع ساعة + ربع ثانية = 2 × 5 = 10€."
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-5",
    "title": "Lesen – نموذج 5 (البيئة والمناخ)",
    "description": "حماية البيئة، فرز القمامة، الطاقة المتجددة، النباتات في المدينة.",
    "parts": [
      {
        "type": "match-blog",
        "title": "Teil 1 – خمسة أشخاص حول حماية البيئة",
        "instructionsAr": "اقرأ المدوّنة \"ماذا تفعل من أجل البيئة؟\" واربط كل عبارة بصاحبها.",
        "texts": [
          {
            "id": "mira",
            "titleDe": "Mira",
            "textDe": "Ich kaufe nur noch saisonales Obst und Gemüse vom Wochenmarkt. Erdbeeren im Winter aus Spanien? Nein, danke. Ich versuche auch, das Auto stehen zu lassen und alles mit dem Fahrrad zu erledigen."
          },
          {
            "id": "tarek",
            "titleDe": "Tarek",
            "textDe": "Bei uns zu Hause haben wir alle Lampen auf LED umgestellt und schalten sie konsequent aus. Außerdem dusche ich nur noch kurz statt zu baden. So spare ich Strom und Wasser."
          },
          {
            "id": "eva",
            "titleDe": "Eva",
            "textDe": "Ich habe mich entschieden, kein Fleisch mehr zu essen. Das hat einen riesigen Effekt auf die Umwelt. Außerdem reise ich nicht mehr mit dem Flugzeug, sondern nehme den Zug."
          },
          {
            "id": "karim",
            "titleDe": "Karim",
            "textDe": "Mir ist die Mülltrennung wichtig. Wir haben drei Mülleimer in der Küche – für Restmüll, Verpackungen und Bio. Glas und Papier bringen wir extra in die Container."
          },
          {
            "id": "lisa",
            "titleDe": "Lisa",
            "textDe": "Ich kaufe meine Kleidung jetzt nur noch second-hand. Es ist viel günstiger und ich helfe der Umwelt, weil keine neue Kleidung produziert werden muss."
          }
        ],
        "statements": [
          {
            "id": "lesen-5-1-1",
            "textDe": "Diese Person isst nur regional und vermeidet das Auto.",
            "textAr": "هذا الشخص يأكل محلياً ويتجنب السيارة.",
            "correctAd": "mira"
          },
          {
            "id": "lesen-5-1-2",
            "textDe": "Diese Person spart Strom und Wasser zu Hause.",
            "textAr": "هذا الشخص يوفّر الكهرباء والماء.",
            "correctAd": "tarek"
          },
          {
            "id": "lesen-5-1-3",
            "textDe": "Diese Person hat ihre Ernährung komplett umgestellt.",
            "textAr": "هذا الشخص غيّر نمط طعامه.",
            "correctAd": "eva"
          },
          {
            "id": "lesen-5-1-4",
            "textDe": "Diese Person trennt sehr genau den Müll.",
            "textAr": "هذا الشخص يفرز القمامة بدقّة.",
            "correctAd": "karim"
          },
          {
            "id": "lesen-5-1-5",
            "textDe": "Diese Person kauft gebrauchte Kleidung.",
            "textAr": "هذا الشخص يشتري ملابس مستعملة.",
            "correctAd": "lisa"
          }
        ]
      },
      {
        "type": "mc-article",
        "title": "Teil 2 – مقالة عن \"فرز القمامة في ألمانيا\"",
        "instructionsAr": "اقرأ المقالة وأجب عن 4 أسئلة بخيارات متعددة.",
        "textDe": "**Mülltrennung in Deutschland: Was kommt wohin?**\n\nDeutschland gehört zu den Ländern, die am meisten Müll trennen. Für Migranten ist das oft kompliziert, weil es viele verschiedene Tonnen gibt: gelbe Tonne, blaue Tonne, braune Tonne, schwarze Tonne und dazu noch Glas- und Altkleidercontainer.\n\nIn die **gelbe Tonne** (oder den Gelben Sack) kommen Verpackungen aus Plastik, Metall und Verbundstoffen wie Joghurtbecher, leere Konservendosen und Tetrapak. **Wichtig: Die Verpackungen müssen leer, aber nicht gewaschen sein!** Eine kurze Spülung reicht.\n\nDie **blaue Tonne** ist für Papier und Pappe. Aber Achtung: stark verschmutztes Papier (z. B. Pizzakarton mit Käseresten) gehört in den Restmüll, nicht ins Altpapier.\n\nDie **braune Tonne** ist für organische Abfälle: Obst- und Gemüsereste, Eierschalen, Kaffeesatz, Teebeutel. Daraus wird in Kompostieranlagen wertvolle Erde.\n\nGlas trennt man nochmal extra nach Farben: weiß, grün und braun. Aber Glas wirft man nur tagsüber in den Container, nicht nach 20 Uhr und nicht am Sonntag, wegen des Lärms!\n\nWer nicht trennt, riskiert übrigens eine Strafe: In manchen Städten kostet das bis zu 75 Euro.",
        "questions": [
          {
            "id": "lesen-5-2-1",
            "promptDe": "Was kommt in die gelbe Tonne?",
            "options": [
              {
                "id": "a",
                "de": "Pappe und Papier."
              },
              {
                "id": "b",
                "de": "Plastikverpackungen, Metall und Tetrapak."
              },
              {
                "id": "c",
                "de": "Glas in allen Farben."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول صراحة: \"gelbe Tonne … kommen Verpackungen aus Plastik, Metall und Verbundstoffen\". (a) للأزرق (b) للأصفر (c) للحاويات الزجاجية."
          },
          {
            "id": "lesen-5-2-2",
            "promptDe": "Muss man Verpackungen vor dem Wegwerfen waschen?",
            "options": [
              {
                "id": "a",
                "de": "Ja, gründlich mit Spülmittel."
              },
              {
                "id": "b",
                "de": "Nein, sie müssen nur leer sein."
              },
              {
                "id": "c",
                "de": "Ja, aber nur Plastik."
              }
            ],
            "correct": "b",
            "explanation": "\"Die Verpackungen müssen leer, aber nicht gewaschen sein! Eine kurze Spülung reicht.\""
          },
          {
            "id": "lesen-5-2-3",
            "promptDe": "Wohin gehört ein schmutziger Pizzakarton?",
            "options": [
              {
                "id": "a",
                "de": "In die blaue Tonne (Papier)."
              },
              {
                "id": "b",
                "de": "In die braune Tonne (Bio)."
              },
              {
                "id": "c",
                "de": "In den Restmüll (schwarze Tonne)."
              }
            ],
            "correct": "c",
            "explanation": "\"stark verschmutztes Papier … gehört in den Restmüll, nicht ins Altpapier\"."
          },
          {
            "id": "lesen-5-2-4",
            "promptDe": "Wann darf man Glas in den Container werfen?",
            "options": [
              {
                "id": "a",
                "de": "Immer und jederzeit."
              },
              {
                "id": "b",
                "de": "Nur tagsüber, nicht nachts und nicht sonntags."
              },
              {
                "id": "c",
                "de": "Nur sonntags morgens."
              }
            ],
            "correct": "b",
            "explanation": "بسبب الإزعاج: \"nur tagsüber … nicht nach 20 Uhr und nicht am Sonntag, wegen des Lärms\"."
          }
        ]
      },
      {
        "type": "mc-rules",
        "title": "Teil 5 – لوائح حديقة عامة",
        "instructionsAr": "اقرأ القواعد في حديقة عامة وأجب عن 4 أسئلة.",
        "textDe": "**Stadtpark Düsseldorf – Hausordnung**\n\nLiebe Besucher, herzlich willkommen in unserem Stadtpark. Damit alle den Park genießen können, beachten Sie bitte folgende Regeln:\n\n**1.** Hunde müssen im Park immer an der Leine geführt werden. Eine Ausnahme gilt für die markierte Hundewiese im Nordosten des Parks. Bringen Sie bitte Tüten mit, um den Kot Ihres Hundes zu entsorgen.\n\n**2.** Das Grillen ist nur in den dafür ausgewiesenen Bereichen erlaubt (Markierungen mit roten Steinen). Bitte nutzen Sie keine Einweggrills auf der Wiese.\n\n**3.** Musik und laute Geräusche sind tagsüber bis 20 Uhr erlaubt, danach gilt Ruhepflicht.\n\n**4.** Müll bitte in die Mülleimer werfen oder mitnehmen. Glasflaschen sind im ganzen Park verboten.\n\n**5.** Fahrrad fahren ist nur auf den asphaltierten Hauptwegen erlaubt. Auf den Spazierwegen müssen Sie absteigen und schieben.\n\n**6.** Der Park ist täglich von 6 Uhr morgens bis 22 Uhr abends geöffnet.",
        "questions": [
          {
            "id": "lesen-5-3-1",
            "promptDe": "Wo dürfen Hunde frei laufen?",
            "options": [
              {
                "id": "a",
                "de": "Im ganzen Park."
              },
              {
                "id": "b",
                "de": "Nirgendwo, immer an der Leine."
              },
              {
                "id": "c",
                "de": "Auf der Hundewiese im Nordosten."
              }
            ],
            "correct": "c",
            "explanation": "القاعدة 1: استثناء واحد فقط هو \"die markierte Hundewiese im Nordosten\"."
          },
          {
            "id": "lesen-5-3-2",
            "promptDe": "Bis wann darf man laute Musik hören?",
            "options": [
              {
                "id": "a",
                "de": "Bis 18 Uhr."
              },
              {
                "id": "b",
                "de": "Bis 20 Uhr."
              },
              {
                "id": "c",
                "de": "Bis 22 Uhr."
              }
            ],
            "correct": "b",
            "explanation": "القاعدة 3: \"tagsüber bis 20 Uhr\"."
          },
          {
            "id": "lesen-5-3-3",
            "promptDe": "Was ist im Park verboten?",
            "options": [
              {
                "id": "a",
                "de": "Plastikflaschen."
              },
              {
                "id": "b",
                "de": "Glasflaschen."
              },
              {
                "id": "c",
                "de": "Hunde mit Leine."
              }
            ],
            "correct": "b",
            "explanation": "القاعدة 4 صريحة: \"Glasflaschen sind im ganzen Park verboten\"."
          },
          {
            "id": "lesen-5-3-4",
            "promptDe": "Wo darf man Fahrrad fahren?",
            "options": [
              {
                "id": "a",
                "de": "Überall."
              },
              {
                "id": "b",
                "de": "Nur auf den Hauptwegen (asphaltiert)."
              },
              {
                "id": "c",
                "de": "Nur auf den Spazierwegen."
              }
            ],
            "correct": "b",
            "explanation": "القاعدة 5: \"nur auf den asphaltierten Hauptwegen\". على ممرات النزهة يجب الترجّل."
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-6",
    "title": "Lesen 6 – التعليم والمهنة (نمط telc B1)",
    "description": "نموذج جديد على نمط telc B1: 3 أجزاء – مقالة عن التعليم المهني، مطابقة إعلانات وظائف، وآراء حول العمل.",
    "parts": [
      {
        "type": "mc-article",
        "title": "Teil 1 – مقالة عن التعليم المهني (Berufsausbildung)",
        "instructionsAr": "اقرأ المقال التالي ثم أجب عن الأسئلة. اختر الإجابة الصحيحة (a, b أو c).",
        "textDe": "In Deutschland ist die Berufsausbildung ein wichtiges Thema – besonders für junge Menschen, die nach der Schule eine praktische Karriere beginnen wollen. Anders als in vielen anderen Ländern gibt es hier das sogenannte „duale System\": Die Auszubildenden gehen drei Tage pro Woche in einen Betrieb und zwei Tage in die Berufsschule.\n\nEin großer Vorteil dieses Systems ist, dass die jungen Menschen schon während der Ausbildung Geld verdienen. Die meisten Betriebe zahlen zwischen 600 und 1.200 Euro pro Monat. Außerdem werden die Auszubildenden nach der Ausbildung oft direkt von ihrem Betrieb übernommen.\n\nAllerdings hat das System auch Schwierigkeiten. Viele Jugendliche heute wollen lieber studieren statt eine Lehre zu machen. Das führt dazu, dass in einigen Berufen, vor allem in der Pflege und im Handwerk, ein großer Mangel an Fachkräften herrscht.\n\nFür Migranten kann die Berufsausbildung eine sehr gute Chance sein. Sie lernen schnell die deutsche Sprache, sammeln praktische Erfahrung und können anschließend in ein festes Arbeitsverhältnis übernommen werden. Die Bundesagentur für Arbeit bietet spezielle Beratungen und finanzielle Hilfen für Auszubildende mit Migrationshintergrund an.",
        "questions": [
          {
            "id": "lesen-6-1-1",
            "promptDe": "Was ist das Besondere am dualen System?",
            "options": [
              {
                "id": "a",
                "de": "Die Auszubildenden gehen nur in die Schule."
              },
              {
                "id": "b",
                "de": "Sie kombinieren Schule und Betrieb."
              },
              {
                "id": "c",
                "de": "Sie arbeiten nur im Ausland."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول: \"drei Tage pro Woche in einen Betrieb und zwei Tage in die Berufsschule\" – أي يجمعون بين المدرسة والشركة."
          },
          {
            "id": "lesen-6-1-2",
            "promptDe": "Wie viel verdient ein Auszubildender ungefähr?",
            "options": [
              {
                "id": "a",
                "de": "Weniger als 500 Euro."
              },
              {
                "id": "b",
                "de": "Zwischen 600 und 1.200 Euro."
              },
              {
                "id": "c",
                "de": "Über 2.000 Euro."
              }
            ],
            "correct": "b",
            "explanation": "النص حدّد الرقم: \"zwischen 600 und 1.200 Euro pro Monat\"."
          },
          {
            "id": "lesen-6-1-3",
            "promptDe": "Welches Problem nennt der Text?",
            "options": [
              {
                "id": "a",
                "de": "In Deutschland gibt es zu viele Auszubildende."
              },
              {
                "id": "b",
                "de": "Es fehlen Fachkräfte in einigen Berufen."
              },
              {
                "id": "c",
                "de": "Die Berufsschulen sind geschlossen."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول: \"ein großer Mangel an Fachkräften\" خاصة في \"Pflege und Handwerk\"."
          },
          {
            "id": "lesen-6-1-4",
            "promptDe": "Welcher Vorteil wird für Migranten erwähnt?",
            "options": [
              {
                "id": "a",
                "de": "Sie bekommen kostenlose Wohnungen."
              },
              {
                "id": "b",
                "de": "Sie lernen Deutsch und sammeln praktische Erfahrung."
              },
              {
                "id": "c",
                "de": "Sie müssen nicht arbeiten."
              }
            ],
            "correct": "b",
            "explanation": "النص يذكر: \"Sie lernen schnell die deutsche Sprache, sammeln praktische Erfahrung\"."
          },
          {
            "id": "lesen-6-1-5",
            "promptDe": "Wer hilft Auszubildenden mit Migrationshintergrund?",
            "options": [
              {
                "id": "a",
                "de": "Nur die Eltern."
              },
              {
                "id": "b",
                "de": "Die Bundesagentur für Arbeit."
              },
              {
                "id": "c",
                "de": "Die Lehrer in der Schule."
              }
            ],
            "correct": "b",
            "explanation": "النص: \"Die Bundesagentur für Arbeit bietet spezielle Beratungen und finanzielle Hilfen\"."
          }
        ]
      },
      {
        "type": "match-ads",
        "title": "Teil 2 – مطابقة الإعلانات (مَن يلائم أيّ وظيفة؟)",
        "instructionsAr": "لكل شخص (1-5) أيّ إعلان وظيفة (a-h) يناسبه؟ اكتب الحرف المناسب. قد لا تتطابق كل الحالات مع إعلان (X = لا يوجد).",
        "situations": [
          {
            "id": "lesen-6-2-1",
            "textDe": "Maria (24) ist gelernte Köchin und sucht eine Stelle in einem kleinen Restaurant in Berlin. Sie kann nur abends arbeiten.",
            "textAr": "ماريا طبّاخة، تبحث عن وظيفة في مطعم صغير في برلين، مساءً فقط.",
            "correctAd": "b"
          },
          {
            "id": "lesen-6-2-2",
            "textDe": "Tarek (32) ist Informatiker und möchte gerne im Homeoffice arbeiten. Er hat 5 Jahre Erfahrung mit Webseiten.",
            "textAr": "طارق مبرمج، يريد العمل من البيت، خبرة 5 سنوات بمواقع الإنترنت.",
            "correctAd": "d"
          },
          {
            "id": "lesen-6-2-3",
            "textDe": "Nadia (45) hat in Syrien als Krankenschwester gearbeitet. Sie sucht eine Stelle im Pflegebereich, möglichst in Vollzeit.",
            "textAr": "نادية ممرّضة، تبحث عن وظيفة في الرعاية، دوام كامل.",
            "correctAd": "a"
          },
          {
            "id": "lesen-6-2-4",
            "textDe": "Lukas (19) hat gerade die Schule beendet und sucht einen Ausbildungsplatz im Bereich Handwerk.",
            "textAr": "لوكاس (19) أنهى المدرسة، يبحث عن مكان تدريب في مجال الحرف.",
            "correctAd": "f"
          },
          {
            "id": "lesen-6-2-5",
            "textDe": "Elena (28) hat Kunst studiert und möchte Kindern in der Schule Kunstunterricht geben.",
            "textAr": "إيلينا درست الفنون، تريد تعليم الفن للأطفال في المدارس.",
            "correctAd": "X"
          }
        ],
        "ads": [
          {
            "id": "a",
            "titleDe": "Pflegekräfte gesucht",
            "textDe": "Seniorenheim in Hamburg sucht **Pflegekräfte (m/w/d)** für Vollzeit oder Teilzeit. Berufserfahrung erwünscht. Faire Bezahlung."
          },
          {
            "id": "b",
            "titleDe": "Koch/Köchin für italienisches Restaurant",
            "textDe": "Italienisches Restaurant in Berlin sucht **Koch/Köchin** für die **Abendschicht** (17-23 Uhr). Berufserfahrung notwendig."
          },
          {
            "id": "c",
            "titleDe": "Reinigungskräfte",
            "textDe": "Putzfirma in München sucht **Reinigungskräfte** für Bürogebäude, früh morgens (5-9 Uhr)."
          },
          {
            "id": "d",
            "titleDe": "Webentwickler/in (100% Homeoffice)",
            "textDe": "IT-Firma sucht **Webentwickler/in** mit mindestens 3 Jahren Erfahrung. Vollständig im **Homeoffice** möglich."
          },
          {
            "id": "e",
            "titleDe": "Verkäufer/in im Modegeschäft",
            "textDe": "Modeladen in Köln sucht freundliche/n **Verkäufer/in**, Teilzeit, samstags Pflicht."
          },
          {
            "id": "f",
            "titleDe": "Ausbildung zum/zur Tischler/in",
            "textDe": "Schreinerei sucht **Auszubildende(n) zum/zur Tischler/in**. 3 Jahre duale Ausbildung. Schulabschluss erforderlich."
          },
          {
            "id": "g",
            "titleDe": "LKW-Fahrer/in",
            "textDe": "Speditionsfirma sucht **LKW-Fahrer/in** mit Führerschein Klasse C. Internationale Fahrten möglich."
          },
          {
            "id": "h",
            "titleDe": "Fitnesstrainer/in",
            "textDe": "Fitnessstudio sucht **Trainer/in** für Kurse am Wochenende. Lizenz erforderlich."
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 3 – آراء حول العمل في ألمانيا",
        "instructionsAr": "اقرأ النص واحكم: العبارات التالية صحيحة (richtig) أم خاطئة (falsch)؟",
        "textDe": "**Forum: \"Wie zufrieden seid ihr mit eurem Job?\"**\n\n**Hassan (Postbote):** Ich arbeite seit 4 Jahren bei der Post in Frankfurt. Ich liebe meinen Beruf, weil ich viel an der frischen Luft bin und sportlich aktiv bleibe. Die Bezahlung könnte besser sein, aber meine Kollegen sind super und mein Chef ist sehr fair. Was mich manchmal stört, ist das schlechte Wetter im Winter.\n\n**Aisha (Krankenschwester):** Mein Beruf ist sehr anstrengend, sowohl körperlich als auch emotional. Wir haben oft zu wenig Personal und arbeiten Schichten. Trotzdem würde ich nichts anderes machen wollen, weil ich weiß, dass ich Menschen helfe. Was ich mir wünschen würde, ist eine bessere Bezahlung und mehr Anerkennung.\n\n**Markus (Software-Entwickler):** Ich habe vor zwei Jahren angefangen, im Homeoffice zu arbeiten. Anfangs war das super, aber jetzt vermisse ich meine Kollegen. Die ständigen Online-Meetings sind anstrengend, und manchmal vergesse ich sogar zu essen, weil ich so lange am Computer sitze.",
        "questions": [
          {
            "id": "lesen-6-3-1",
            "statementDe": "Hassan ist mit seinem Job sehr unzufrieden.",
            "statementAr": "حسن غير راضٍ عن وظيفته.",
            "correct": false,
            "explanation": "حسن قال \"Ich liebe meinen Beruf\" – أحب مهنتي، فهو راضٍ."
          },
          {
            "id": "lesen-6-3-2",
            "statementDe": "Aisha findet, dass die Krankenschwestern besser bezahlt werden sollten.",
            "statementAr": "عائشة ترى أنّ الممرضات يستحقن راتباً أفضل.",
            "correct": true,
            "explanation": "قالت: \"ich mir wünschen würde, ist eine bessere Bezahlung\"."
          },
          {
            "id": "lesen-6-3-3",
            "statementDe": "Aisha denkt daran, ihren Beruf zu wechseln.",
            "statementAr": "عائشة تفكّر بتغيير مهنتها.",
            "correct": false,
            "explanation": "قالت: \"ich nichts anderes machen wollen würde\" – أي لن تغيّر."
          },
          {
            "id": "lesen-6-3-4",
            "statementDe": "Markus arbeitet immer noch sehr gerne im Homeoffice.",
            "statementAr": "ماركوس ما زال يعمل من البيت بسعادة.",
            "correct": false,
            "explanation": "قال: \"vermisse ich meine Kollegen\" – أفتقد زملائي، فلم يعد سعيداً تماماً."
          },
          {
            "id": "lesen-6-3-5",
            "statementDe": "Hassan ärgert sich manchmal über das Wetter im Winter.",
            "statementAr": "حسن أحياناً يضايقه الطقس في الشتاء.",
            "correct": true,
            "explanation": "قال صراحةً: \"stört, ist das schlechte Wetter im Winter\"."
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-7",
    "title": "Lesen 7 – الإنترنت ووسائل التواصل (الجيل الجديد)",
    "description": "نموذج Lesen موسّع: مقالة عن استخدام الشباب لوسائل التواصل، مطابقة منشورات منتدى، آراء.",
    "parts": [
      {
        "type": "mc-article",
        "title": "Teil 1 – مقالة: الشباب والإنترنت",
        "instructionsAr": "اقرأ المقالة ثم أجب عن الأسئلة. اختر الإجابة الصحيحة (a, b, c).",
        "textDe": "Eine neue Studie aus Deutschland zeigt: Junge Menschen zwischen 14 und 25 Jahren verbringen täglich rund vier Stunden online. Das ist deutlich mehr als noch vor fünf Jahren. Besonders beliebt sind kurze Videos auf Plattformen wie TikTok und Instagram.\n\nDie Forscher sehen positive und negative Seiten. Auf der einen Seite haben junge Menschen heute schnelleren Zugang zu Informationen, lernen Sprachen über Apps und finden online leichter Freunde mit ähnlichen Interessen. Auf der anderen Seite klagen viele über Konzentrationsprobleme, Schlafmangel und Druck durch das Vergleichen mit anderen.\n\nExperten empfehlen daher klare Regeln: Bildschirme sollten eine Stunde vor dem Schlafengehen ausgeschaltet werden. Außerdem sei es wichtig, regelmäßig Sport zu treiben und Freunde persönlich – nicht nur online – zu treffen.\n\nAuch Eltern spielen eine wichtige Rolle. Sie sollten mit ihren Kindern darüber sprechen, was diese im Internet sehen, statt nur Verbote auszusprechen. Schulen in mehreren Bundesländern starten zudem neue Unterrichtsfächer zum Thema Medienkompetenz.",
        "questions": [
          {
            "id": "lesen-7-1-1",
            "promptDe": "Wie viele Stunden sind junge Menschen täglich online?",
            "options": [
              {
                "id": "a",
                "de": "Etwa eine Stunde."
              },
              {
                "id": "b",
                "de": "Etwa vier Stunden."
              },
              {
                "id": "c",
                "de": "Mehr als acht Stunden."
              }
            ],
            "correct": "b",
            "explanation": "النص يقول صراحة \"rund vier Stunden online\"."
          },
          {
            "id": "lesen-7-1-2",
            "promptDe": "Welcher Vorteil wird im Text genannt?",
            "options": [
              {
                "id": "a",
                "de": "Sie schlafen mehr als früher."
              },
              {
                "id": "b",
                "de": "Sie haben schnellen Zugang zu Informationen."
              },
              {
                "id": "c",
                "de": "Sie bekommen kostenlose Handys."
              }
            ],
            "correct": "b",
            "explanation": "\"schnelleren Zugang zu Informationen\" مذكور كميزة."
          },
          {
            "id": "lesen-7-1-3",
            "promptDe": "Was ist ein Problem laut Text?",
            "options": [
              {
                "id": "a",
                "de": "Schlafmangel und Konzentrationsprobleme."
              },
              {
                "id": "b",
                "de": "Zu wenige Freunde online."
              },
              {
                "id": "c",
                "de": "Zu langsames Internet."
              }
            ],
            "correct": "a",
            "explanation": "\"Konzentrationsprobleme, Schlafmangel\" مذكور كمشكلة."
          },
          {
            "id": "lesen-7-1-4",
            "promptDe": "Was empfehlen Experten?",
            "options": [
              {
                "id": "a",
                "de": "Bildschirme die ganze Nacht eingeschaltet zu lassen."
              },
              {
                "id": "b",
                "de": "Eine Stunde vor dem Schlaf keine Bildschirme."
              },
              {
                "id": "c",
                "de": "Nur online Freunde treffen."
              }
            ],
            "correct": "b",
            "explanation": "\"eine Stunde vor dem Schlafengehen ausgeschaltet werden\"."
          },
          {
            "id": "lesen-7-1-5",
            "promptDe": "Welche Rolle spielen Eltern?",
            "options": [
              {
                "id": "a",
                "de": "Sie sollten alles verbieten."
              },
              {
                "id": "b",
                "de": "Sie sollten nur die Geräte wegnehmen."
              },
              {
                "id": "c",
                "de": "Sie sollten mit den Kindern sprechen."
              }
            ],
            "correct": "c",
            "explanation": "\"sollten mit ihren Kindern darüber sprechen, statt nur Verbote\"."
          }
        ]
      },
      {
        "type": "match-blog",
        "title": "Teil 2 – منتدى: تجاربكم مع التعلّم عبر الإنترنت",
        "instructionsAr": "لكل عبارة (1-5) اختر الكاتب الذي قالها (A-E). كل كاتب يُستخدم مرّة واحدة فقط.",
        "texts": [
          {
            "id": "A",
            "titleDe": "Layla",
            "textDe": "Ich habe in nur einem Jahr Deutsch von A1 bis B1 mit einer App gelernt. Allein lernen war nicht leicht, aber ich konnte überall üben – auch im Bus."
          },
          {
            "id": "B",
            "titleDe": "Jonas",
            "textDe": "Online-Kurse haben mich zu Beginn motiviert, aber nach drei Monaten verlor ich die Lust. Ich brauchte einen echten Lehrer und eine echte Klasse."
          },
          {
            "id": "C",
            "titleDe": "Hassan",
            "textDe": "Ich nutze YouTube für Mathe und für Deutsch. Bei schwierigen Themen hilft es mir, dass ich das Video so oft wie nötig wiederholen kann."
          },
          {
            "id": "D",
            "titleDe": "Sabine",
            "textDe": "Mein Sohn lernt zu viel allein vor dem Computer. Ich denke, Kinder brauchen den Kontakt zu anderen Kindern in der Schule, nicht nur Bildschirme."
          },
          {
            "id": "E",
            "titleDe": "Mahmoud",
            "textDe": "Dank Online-Tutorien habe ich meinen Führerscheintest auf Anhieb bestanden. Ich konnte abends nach der Arbeit lernen, das war ein riesiger Vorteil."
          }
        ],
        "statements": [
          {
            "id": "lesen-7-2-1",
            "textDe": "Diese Person lernt schwierige Themen durch Videowiederholung.",
            "textAr": "هذا الشخص يتعلم المواضيع الصعبة عبر إعادة الفيديوهات.",
            "correctAd": "C"
          },
          {
            "id": "lesen-7-2-2",
            "textDe": "Diese Person hat eine Sprache schnell allein gelernt.",
            "textAr": "هذا الشخص تعلم لغة بسرعة بمفرده.",
            "correctAd": "A"
          },
          {
            "id": "lesen-7-2-3",
            "textDe": "Diese Person glaubt, Online-Lernen reicht nicht aus.",
            "textAr": "هذا الشخص يعتقد أن التعلم عبر الإنترنت غير كافٍ.",
            "correctAd": "B"
          },
          {
            "id": "lesen-7-2-4",
            "textDe": "Diese Person macht sich Sorgen um den Kontakt zu anderen Kindern.",
            "textAr": "هذا الشخص قلق على تواصل أطفاله مع غيرهم.",
            "correctAd": "D"
          },
          {
            "id": "lesen-7-2-5",
            "textDe": "Diese Person bestand eine Prüfung dank Online-Lernens.",
            "textAr": "هذا الشخص نجح في امتحان بفضل التعلم عبر الإنترنت.",
            "correctAd": "E"
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 3 – آراء حول العمل من المنزل",
        "instructionsAr": "اقرأ النص واحكم: العبارات التالية صحيحة (R) أم خاطئة (F)؟",
        "textDe": "**Forum: Homeoffice – Fluch oder Segen?**\n\n**Anna (Buchhalterin):** Seit drei Jahren arbeite ich nur noch von zu Hause aus. Ich spare jeden Tag zwei Stunden Fahrt und kann am Mittag mit meinen Kindern essen. Trotzdem fehlen mir manchmal die Gespräche mit Kollegen am Kaffeeautomaten.\n\n**Yusuf (IT-Berater):** Für mich ist Homeoffice perfekt. Ich konzentriere mich besser zu Hause und habe gleichzeitig Zeit für Sport. Mein Chef beurteilt mich nach Ergebnissen, nicht nach Bürostunden – das gefällt mir.\n\n**Karin (Projektleiterin):** Ich finde es schwierig. Mein Mann arbeitet auch von zu Hause und unsere Wohnung ist nicht groß genug. Außerdem müssen wir uns ein Arbeitszimmer teilen. Ich gehe inzwischen wieder dreimal pro Woche ins Büro.",
        "questions": [
          {
            "id": "lesen-7-3-1",
            "statementDe": "Anna spart Zeit, weil sie nicht mehr ins Büro fahren muss.",
            "statementAr": "آنا توفّر وقتاً لأنها لم تعد تذهب إلى المكتب.",
            "correct": true,
            "explanation": "صرّحت: \"spare jeden Tag zwei Stunden Fahrt\"."
          },
          {
            "id": "lesen-7-3-2",
            "statementDe": "Anna fehlen die Kollegen überhaupt nicht.",
            "statementAr": "آنا لا يفتقد زملاءها أبداً.",
            "correct": false,
            "explanation": "قالت: \"fehlen mir manchmal die Gespräche mit Kollegen\"."
          },
          {
            "id": "lesen-7-3-3",
            "statementDe": "Yusuf arbeitet besser im Büro als zu Hause.",
            "statementAr": "يوسف يعمل أفضل في المكتب من البيت.",
            "correct": false,
            "explanation": "العكس: \"konzentriere mich besser zu Hause\"."
          },
          {
            "id": "lesen-7-3-4",
            "statementDe": "Yusufs Chef bewertet ihn nach Ergebnissen.",
            "statementAr": "مدير يوسف يقيّمه بناء على النتائج.",
            "correct": true,
            "explanation": "\"beurteilt mich nach Ergebnissen, nicht nach Bürostunden\"."
          },
          {
            "id": "lesen-7-3-5",
            "statementDe": "Karin geht jetzt jeden Tag ins Büro.",
            "statementAr": "كارين تذهب الآن كل يوم للمكتب.",
            "correct": false,
            "explanation": "قالت: \"dreimal pro Woche ins Büro\" وليس كل يوم."
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-8",
    "title": "Lesen 8 – السكن والعائلة",
    "description": "مقالة عن سوق السكن في ألمانيا، آراء عن العائلة الحديثة.",
    "parts": [
      {
        "type": "mc-article",
        "title": "Teil 1 – مقالة: سوق السكن في ألمانيا",
        "instructionsAr": "اقرأ المقالة ثم أجب عن الأسئلة.",
        "textDe": "Die Wohnungssuche in deutschen Großstädten wird immer schwieriger. In Städten wie München, Berlin oder Hamburg kommen oft hundert Bewerber auf eine einzige freie Wohnung. Besonders junge Menschen und Familien mit Kindern haben es schwer, eine bezahlbare Wohnung zu finden.\n\nDie Mieten sind in den letzten zehn Jahren stark gestiegen. In München zahlt man heute durchschnittlich über 20 Euro pro Quadratmeter. Das bedeutet: Eine Wohnung mit 70 Quadratmetern kostet schnell mehr als 1.400 Euro Kaltmiete – ohne Strom, Heizung und Internet.\n\nViele Mieter ziehen daher in kleinere Städte oder aufs Land. Dort sind die Mieten günstiger, aber die Verkehrsanbindung ist oft schlecht. Wer arbeitet, muss lange Wege zur Arbeit in Kauf nehmen.\n\nDie Bundesregierung versucht zu helfen. Die \"Mietpreisbremse\" soll verhindern, dass Vermieter zu hohe Mieten verlangen. Außerdem werden mehr Sozialwohnungen gebaut. Experten sagen aber: Das reicht nicht.",
        "questions": [
          {
            "id": "lesen-8-1-1",
            "promptDe": "Wie viele Bewerber kommen oft auf eine Wohnung?",
            "options": [
              {
                "id": "a",
                "de": "Etwa zehn."
              },
              {
                "id": "b",
                "de": "Etwa fünfzig."
              },
              {
                "id": "c",
                "de": "Etwa hundert."
              }
            ],
            "correct": "c",
            "explanation": "\"hundert Bewerber auf eine einzige freie Wohnung\"."
          },
          {
            "id": "lesen-8-1-2",
            "promptDe": "Was kostet eine 70m²-Wohnung in München?",
            "options": [
              {
                "id": "a",
                "de": "Unter 1.000 Euro."
              },
              {
                "id": "b",
                "de": "Über 1.400 Euro Kaltmiete."
              },
              {
                "id": "c",
                "de": "Genau 1.000 Euro Warmmiete."
              }
            ],
            "correct": "b",
            "explanation": "20 € × 70 m² = 1.400 € Kaltmiete."
          },
          {
            "id": "lesen-8-1-3",
            "promptDe": "Warum ziehen Mieter aufs Land?",
            "options": [
              {
                "id": "a",
                "de": "Weil die Mieten dort günstiger sind."
              },
              {
                "id": "b",
                "de": "Weil die Luft besser ist."
              },
              {
                "id": "c",
                "de": "Weil sie keine Arbeit haben."
              }
            ],
            "correct": "a",
            "explanation": "\"die Mieten günstiger\"."
          },
          {
            "id": "lesen-8-1-4",
            "promptDe": "Was ist die Mietpreisbremse?",
            "options": [
              {
                "id": "a",
                "de": "Eine App."
              },
              {
                "id": "b",
                "de": "Eine Regelung gegen zu hohe Mieten."
              },
              {
                "id": "c",
                "de": "Ein neues Wohnhaus."
              }
            ],
            "correct": "b",
            "explanation": "\"verhindern, dass Vermieter zu hohe Mieten verlangen\"."
          },
          {
            "id": "lesen-8-1-5",
            "promptDe": "Was sagen Experten?",
            "options": [
              {
                "id": "a",
                "de": "Die Maßnahmen reichen nicht aus."
              },
              {
                "id": "b",
                "de": "Die Maßnahmen sind perfekt."
              },
              {
                "id": "c",
                "de": "Die Maßnahmen schaden den Mietern."
              }
            ],
            "correct": "a",
            "explanation": "\"Das reicht nicht\"."
          }
        ]
      },
      {
        "type": "match-blog",
        "title": "Teil 2 – منتدى: العائلة الحديثة",
        "instructionsAr": "لكل عبارة (1-5) اختر الكاتب المناسب (A-E).",
        "texts": [
          {
            "id": "A",
            "titleDe": "Tarek",
            "textDe": "Meine Frau und ich teilen uns die Hausarbeit gleich. Sie arbeitet 30 Stunden, ich 40. Am Wochenende kochen wir zusammen mit den Kindern."
          },
          {
            "id": "B",
            "titleDe": "Sandra",
            "textDe": "Ich bin alleinerziehend mit zwei Kindern. Es ist schwer, aber meine Eltern helfen viel beim Babysitten. Ohne sie könnte ich nicht arbeiten."
          },
          {
            "id": "C",
            "titleDe": "Khalid",
            "textDe": "Wir leben in einer Großfamilie: meine Eltern, meine Schwester und ihr Mann, und wir mit drei Kindern. Es ist laut, aber nie langweilig."
          },
          {
            "id": "D",
            "titleDe": "Lisa",
            "textDe": "Ich habe mich gegen Kinder entschieden und konzentriere mich auf meine Karriere. Mein Partner und ich reisen viel und genießen unsere Freiheit."
          },
          {
            "id": "E",
            "titleDe": "Omar",
            "textDe": "Meine Frau ist Ärztin und arbeitet viel. Ich bin in Elternzeit und kümmere mich um unseren Sohn. Manchmal denken Leute, das ist komisch, aber wir sind glücklich."
          }
        ],
        "statements": [
          {
            "id": "lesen-8-2-1",
            "textDe": "Diese Person lebt mit mehreren Generationen zusammen.",
            "textAr": "هذا الشخص يعيش مع عدّة أجيال.",
            "correctAd": "C"
          },
          {
            "id": "lesen-8-2-2",
            "textDe": "Diese Person hat sich bewusst gegen Kinder entschieden.",
            "textAr": "هذا الشخص اختار عدم إنجاب أطفال.",
            "correctAd": "D"
          },
          {
            "id": "lesen-8-2-3",
            "textDe": "Diese Person ist hauptverantwortlich für die Erziehung des Kindes.",
            "textAr": "هذا الشخص هو المسؤول الرئيسي عن تربية الطفل.",
            "correctAd": "E"
          },
          {
            "id": "lesen-8-2-4",
            "textDe": "Diese Person teilt sich die Hausarbeit gerecht mit dem Partner.",
            "textAr": "هذا الشخص يقسم العمل المنزلي بالتساوي.",
            "correctAd": "A"
          },
          {
            "id": "lesen-8-2-5",
            "textDe": "Diese Person bekommt Hilfe von ihren Eltern.",
            "textAr": "هذا الشخص يحصل على مساعدة من والديه.",
            "correctAd": "B"
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 3 – آراء عن الحياة العائليّة",
        "instructionsAr": "اقرأ النصوص واحكم: صحيح (R) أم خطأ (F)؟",
        "textDe": "**Forum: Familie heute**\n\n**Maryam:** Bei uns ist die Familie das Wichtigste. Wir essen jeden Abend zusammen, ohne Handy am Tisch. So bleiben wir verbunden.\n\n**Markus:** In Deutschland verbringen Eltern zu wenig Zeit mit ihren Kindern. Beide arbeiten oft Vollzeit, und am Abend sind alle müde. Das war früher anders.\n\n**Nour:** Meine Schwiegermutter wohnt bei uns und hilft beim Kochen und mit den Kindern. Ohne sie wäre alles schwerer. In meiner Heimat ist das normal, in Deutschland selten.",
        "questions": [
          {
            "id": "lesen-8-3-1",
            "statementDe": "Bei Maryam dürfen Handys beim Abendessen benutzt werden.",
            "statementAr": "عائلة مريم تستخدم الهاتف على العشاء.",
            "correct": false,
            "explanation": "\"ohne Handy am Tisch\"."
          },
          {
            "id": "lesen-8-3-2",
            "statementDe": "Markus glaubt, dass Eltern heute mehr Zeit mit Kindern haben.",
            "statementAr": "ماركوس يعتقد أن الآباء اليوم يقضون وقتاً أكثر مع أطفالهم.",
            "correct": false,
            "explanation": "\"verbringen Eltern zu wenig Zeit\"."
          },
          {
            "id": "lesen-8-3-3",
            "statementDe": "Nours Schwiegermutter hilft im Alltag.",
            "statementAr": "حماة نور تساعدها في الحياة اليوميّة.",
            "correct": true,
            "explanation": "\"hilft beim Kochen und mit den Kindern\"."
          },
          {
            "id": "lesen-8-3-4",
            "statementDe": "Nour findet das Zusammenleben mit der Schwiegermutter schwierig.",
            "statementAr": "نور تجد العيش مع حماتها صعباً.",
            "correct": false,
            "explanation": "\"Ohne sie wäre alles schwerer\" — العكس."
          },
          {
            "id": "lesen-8-3-5",
            "statementDe": "Markus vergleicht die heutige Situation mit der Vergangenheit.",
            "statementAr": "ماركوس يقارن الوضع الحالي بالماضي.",
            "correct": true,
            "explanation": "\"Das war früher anders\"."
          }
        ]
      }
    ]
  },
  {
    "id": "lesen-9",
    "title": "Lesen 9 – العمل والمهنة",
    "description": "مقالة عن نقص العمالة، تجارب في البحث عن عمل، آراء حول التدريب.",
    "parts": [
      {
        "type": "mc-article",
        "title": "Teil 1 – مقالة: نقص العمالة الماهرة",
        "instructionsAr": "اقرأ المقالة وأجب عن الأسئلة.",
        "textDe": "In Deutschland fehlen heute über zwei Millionen Fachkräfte. Besonders im Gesundheitswesen, in der Pflege, in der IT und im Handwerk werden Mitarbeiter dringend gesucht. Die Bundesregierung hat das \"Fachkräfteeinwanderungsgesetz\" erleichtert.\n\nFür viele Migranten aus arabischen Ländern ist das eine große Chance. Wer eine Ausbildung als Krankenpfleger, Elektriker oder Mechatroniker hat, kann oft schon mit B1- oder B2-Deutsch eine Arbeit finden. Wichtig ist, dass der ausländische Abschluss anerkannt wird. Dieser Prozess dauert je nach Beruf zwischen drei und zwölf Monaten.\n\nAuch die Bezahlung ist oft besser als gedacht. Eine ausgebildete Pflegekraft verdient zwischen 2.800 und 3.500 Euro brutto im Monat. Zusätzlich gibt es Zuschläge für Nacht- und Wochenenddienst.\n\nWer ohne formale Ausbildung kommt, kann mit \"Anerkennungspartnerschaften\" oder \"Ausbildung in Teilzeit\" nachholen. Wichtig: Geduld und gute Sprachkenntnisse.",
        "questions": [
          {
            "id": "lesen-9-1-1",
            "promptDe": "Wie viele Fachkräfte fehlen in Deutschland?",
            "options": [
              {
                "id": "a",
                "de": "Über zwei Millionen."
              },
              {
                "id": "b",
                "de": "Etwa eine halbe Million."
              },
              {
                "id": "c",
                "de": "Weniger als hunderttausend."
              }
            ],
            "correct": "a",
            "explanation": "\"über zwei Millionen Fachkräfte\"."
          },
          {
            "id": "lesen-9-1-2",
            "promptDe": "In welchen Bereichen werden Mitarbeiter gesucht?",
            "options": [
              {
                "id": "a",
                "de": "Tourismus und Gastronomie."
              },
              {
                "id": "b",
                "de": "Pflege, IT und Handwerk."
              },
              {
                "id": "c",
                "de": "Banken und Versicherungen."
              }
            ],
            "correct": "b",
            "explanation": "\"Gesundheitswesen, Pflege, IT, Handwerk\"."
          },
          {
            "id": "lesen-9-1-3",
            "promptDe": "Wie lange dauert die Anerkennung?",
            "options": [
              {
                "id": "a",
                "de": "Eine Woche."
              },
              {
                "id": "b",
                "de": "Drei bis zwölf Monate."
              },
              {
                "id": "c",
                "de": "Mehr als drei Jahre."
              }
            ],
            "correct": "b",
            "explanation": "\"zwischen drei und zwölf Monaten\"."
          },
          {
            "id": "lesen-9-1-4",
            "promptDe": "Wie viel verdient eine ausgebildete Pflegekraft?",
            "options": [
              {
                "id": "a",
                "de": "Etwa 1.500 Euro brutto."
              },
              {
                "id": "b",
                "de": "Zwischen 2.800 und 3.500 Euro brutto."
              },
              {
                "id": "c",
                "de": "Mindestens 5.000 Euro brutto."
              }
            ],
            "correct": "b",
            "explanation": "\"zwischen 2.800 und 3.500 Euro brutto\"."
          },
          {
            "id": "lesen-9-1-5",
            "promptDe": "Was hilft am meisten?",
            "options": [
              {
                "id": "a",
                "de": "Geduld und gute Sprachkenntnisse."
              },
              {
                "id": "b",
                "de": "Viel Geld und Beziehungen."
              },
              {
                "id": "c",
                "de": "Eine deutsche Heirat."
              }
            ],
            "correct": "a",
            "explanation": "\"Geduld und gute Sprachkenntnisse\"."
          }
        ]
      },
      {
        "type": "match-blog",
        "title": "Teil 2 – تجارب مع البحث عن عمل",
        "instructionsAr": "لكل عبارة (1-5) اختر الكاتب المناسب (A-E).",
        "texts": [
          {
            "id": "A",
            "titleDe": "Aisha",
            "textDe": "Ich bin Krankenschwester aus Syrien. Nach 8 Monaten Anerkennung und einem B2-Kurs habe ich sofort eine Stelle in einem Krankenhaus gefunden."
          },
          {
            "id": "B",
            "titleDe": "Ahmed",
            "textDe": "Ich war Ingenieur in meinem Heimatland, aber meine Diplome wurden nicht direkt anerkannt. Ich musste zwei zusätzliche Module an einer deutschen Hochschule machen."
          },
          {
            "id": "C",
            "titleDe": "Fatima",
            "textDe": "Ich bin Quereinsteigerin und habe als Putzkraft angefangen. Nach drei Jahren mache ich jetzt eine Ausbildung als Erzieherin in Teilzeit."
          },
          {
            "id": "D",
            "titleDe": "Reza",
            "textDe": "Bei meiner ersten Bewerbung habe ich zehn Bewerbungen geschrieben und nur eine Antwort bekommen. Heute weiß ich: Networking ist wichtiger als Bewerbungsschreiben."
          },
          {
            "id": "E",
            "titleDe": "Yara",
            "textDe": "Mein Mann hat sich um die Kinder gekümmert, während ich die Sprache lernte. Jetzt arbeite ich als IT-Beraterin und verdiene mehr als er."
          }
        ],
        "statements": [
          {
            "id": "lesen-9-2-1",
            "textDe": "Diese Person musste zusätzlich studieren.",
            "textAr": "هذا الشخص اضطرّ للدراسة الإضافية.",
            "correctAd": "B"
          },
          {
            "id": "lesen-9-2-2",
            "textDe": "Diese Person hat ohne Ausbildung angefangen und macht jetzt eine Lehre.",
            "textAr": "هذا الشخص بدأ بلا شهادة والآن يدرس مهنة.",
            "correctAd": "C"
          },
          {
            "id": "lesen-9-2-3",
            "textDe": "Diese Person verdient heute mehr als ihr Partner.",
            "textAr": "هذا الشخص يكسب أكثر من شريكه اليوم.",
            "correctAd": "E"
          },
          {
            "id": "lesen-9-2-4",
            "textDe": "Diese Person hat schnell eine Stelle gefunden.",
            "textAr": "هذا الشخص وجد عملاً بسرعة.",
            "correctAd": "A"
          },
          {
            "id": "lesen-9-2-5",
            "textDe": "Diese Person sagt, persönliche Kontakte sind sehr wichtig.",
            "textAr": "هذا الشخص يقول إنّ العلاقات الشخصيّة مهمّة جدّاً.",
            "correctAd": "D"
          }
        ]
      },
      {
        "type": "tf-opinions",
        "title": "Teil 3 – التدريب المهني (Ausbildung)",
        "instructionsAr": "اقرأ النصوص واحكم: صحيح (R) أم خطأ (F)؟",
        "textDe": "**Forum: Lohnt sich eine Ausbildung in Deutschland?**\n\n**Mounir:** Ich habe Mechatroniker gelernt — drei Jahre Ausbildung. Schon im ersten Jahr habe ich 900 Euro verdient, im dritten Jahr 1.200. Heute, nach 5 Jahren, verdiene ich 3.400 brutto. Ich bereue nichts.\n\n**Larissa:** Ich habe direkt nach dem Abi studiert, aber das Studium war zu theoretisch. Mit 24 habe ich abgebrochen und eine Ausbildung als Industriekauffrau angefangen. Praxisorientiert, Geld vom ersten Tag.\n\n**Hassan:** Mein Sohn hat keine Lust auf Schule und will keine Ausbildung machen. Ich versuche ihm zu erklären: Ohne Abschluss findet man heute keine Arbeit, die wirklich gut bezahlt ist. Aber er hört nicht.",
        "questions": [
          {
            "id": "lesen-9-3-1",
            "statementDe": "Mounir hat während der Ausbildung schon Geld verdient.",
            "statementAr": "منير كان يكسب نقوداً خلال التدريب.",
            "correct": true,
            "explanation": "\"im ersten Jahr 900 Euro verdient\"."
          },
          {
            "id": "lesen-9-3-2",
            "statementDe": "Larissa hat ihr Studium erfolgreich abgeschlossen.",
            "statementAr": "لاريسا أنهت دراستها بنجاح.",
            "correct": false,
            "explanation": "\"habe ich abgebrochen\"."
          },
          {
            "id": "lesen-9-3-3",
            "statementDe": "Larissa findet die Ausbildung praktischer als das Studium.",
            "statementAr": "لاريسا تجد التدريب أكثر عمليّة من الجامعة.",
            "correct": true,
            "explanation": "\"Studium zu theoretisch\", Ausbildung \"praxisorientiert\"."
          },
          {
            "id": "lesen-9-3-4",
            "statementDe": "Hassans Sohn will gerne eine Ausbildung machen.",
            "statementAr": "ابن حسن يريد التدريب المهنيّ.",
            "correct": false,
            "explanation": "\"will keine Ausbildung machen\"."
          },
          {
            "id": "lesen-9-3-5",
            "statementDe": "Hassan glaubt, ohne Abschluss kann man nicht gut verdienen.",
            "statementAr": "حسن يعتقد أنّه بلا شهادة لا يمكن الكسب الجيّد.",
            "correct": true,
            "explanation": "\"Ohne Abschluss findet man... keine Arbeit, die wirklich gut bezahlt ist\"."
          }
        ]
      }
    ]
  }
];

export const schreibenModels: SchreibenModel[] = [
  {
    "id": "schreiben-1",
    "title": "نموذج Schreiben رقم 1",
    "description": "ثلاث مهام كتابية: بريد إلكتروني غير رسمي، مشاركة منتدى، رسالة رسمية.",
    "tasks": [
      {
        "id": "schreiben-1-1",
        "taskNumber": 1,
        "typeAr": "بريد إلكتروني غير رسمي (إلى صديق)",
        "typeDe": "Informeller E-Mail",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "صديقك الألماني \"لوكاس\" يسأل عن الأكل الذي تحبه. اكتب له بريداً قصيراً وأجب عن النقاط التالية:",
        "promptDe": "Ihr deutscher Freund Lukas fragt Sie nach Ihrem Lieblingsessen. Schreiben Sie ihm eine E-Mail.",
        "requirements": [
          "اذكر نوع طعام تحبه جداً ولماذا.",
          "اكتب أين تأكله عادةً (في البيت أم في المطعم).",
          "اسأله عن طعامه المفضل.",
          "اقترح أن تطبخا معاً في نهاية الأسبوع."
        ],
        "usefulPhrases": [
          {
            "de": "Lieber Lukas, / Hallo Lukas,",
            "ar": "عزيزي لوكاس / مرحباً لوكاس"
          },
          {
            "de": "Vielen Dank für deine E-Mail.",
            "ar": "شكراً على إيميلك."
          },
          {
            "de": "Mein Lieblingsessen ist …, weil …",
            "ar": "أكلتي المفضلة هي ... لأن ..."
          },
          {
            "de": "Am liebsten esse ich …",
            "ar": "أحب أكل ... أكثر شيء."
          },
          {
            "de": "Normalerweise esse ich zu Hause.",
            "ar": "عادة آكل في البيت."
          },
          {
            "de": "Was isst du am liebsten?",
            "ar": "ماذا تحب أن تأكل؟"
          },
          {
            "de": "Wollen wir am Samstag zusammen kochen?",
            "ar": "هل نطبخ معاً يوم السبت؟"
          },
          {
            "de": "Viele Grüße / Bis bald",
            "ar": "تحياتي / إلى اللقاء قريباً"
          }
        ],
        "sampleAnswer": "Hallo Lukas,\n\nvielen Dank für deine E-Mail! Du fragst nach meinem Lieblingsessen. Ich esse am liebsten Maqluba. Das ist ein syrisches Gericht mit Reis, Hühnerfleisch, Auberginen und Kartoffeln. Es schmeckt einfach super und erinnert mich an meine Familie.\n\nNormalerweise esse ich zu Hause, weil meine Mutter sehr gut kocht. Ins Restaurant gehe ich nur am Wochenende.\n\nUnd was isst du am liebsten? Magst du arabisches Essen?\n\nIch habe eine Idee: Wollen wir am Samstag zusammen kochen? Dann zeige ich dir, wie man Maqluba macht.\n\nViele Grüße\nSamir",
        "sampleAnswerNotes": [
          "ملاحظة: عدد الكلمات ≈ 90، وهذا ممتاز.",
          "استُخدمت كل النقاط الأربع المطلوبة.",
          "قواعد منوّعة: weil – زمن المضارع – ins Restaurant – سؤال مباشر – اقتراح باستخدام \"Wollen wir...?\"."
        ]
      },
      {
        "id": "schreiben-1-2",
        "taskNumber": 2,
        "typeAr": "مشاركة في منتدى (Forum)",
        "typeDe": "Forumbeitrag",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "قرأتَ هذا السؤال في منتدى: \"هل تعلّم الأطفال لغة ثانية مفيد أم مُضرّ؟\" اكتب رأيك مع إعطاء مثال من حياتك.",
        "promptDe": "In einem Internet-Forum finden Sie folgende Frage: „Sind zwei Sprachen gut oder schlecht für Kinder?\" Schreiben Sie Ihre Meinung.",
        "requirements": [
          "قدّم نفسك بجملة قصيرة.",
          "اكتب رأيك بوضوح (إيجابي أم سلبي).",
          "اذكر سببين على الأقل.",
          "أعطِ مثالاً من حياتك أو عائلتك."
        ],
        "usefulPhrases": [
          {
            "de": "Meiner Meinung nach …",
            "ar": "في رأيي ..."
          },
          {
            "de": "Ich finde, dass …",
            "ar": "أرى أن ..."
          },
          {
            "de": "Einerseits … andererseits …",
            "ar": "من جهة ... ومن جهة أخرى ..."
          },
          {
            "de": "Zum Beispiel …",
            "ar": "على سبيل المثال ..."
          },
          {
            "de": "Ein Vorteil ist, dass …",
            "ar": "من إيجابيات ذلك أن ..."
          },
          {
            "de": "Zum Schluss möchte ich sagen …",
            "ar": "في الختام أودّ أن أقول ..."
          }
        ],
        "sampleAnswer": "Hallo zusammen,\n\nich heiße Rania und komme aus Syrien. Ich lebe seit vier Jahren in Deutschland.\n\nMeiner Meinung nach ist es sehr gut, wenn Kinder zwei Sprachen sprechen. Erstens: Kinder lernen eine Sprache sehr schnell, besonders wenn sie jung sind. Zweitens: mit zwei Sprachen haben sie später bessere Chancen im Beruf und in der Familie.\n\nZum Beispiel spricht mein Sohn zu Hause Arabisch mit uns, und in der Kita spricht er Deutsch. Er ist jetzt 5 Jahre alt und versteht beides sehr gut. Er hat keine Probleme.\n\nNatürlich muss man geduldig sein. Aber am Ende ist das ein großer Vorteil für das Kind.\n\nViele Grüße\nRania",
        "sampleAnswerNotes": [
          "عدد الكلمات ≈ 115 (مقبول؛ الأفضل 80-120).",
          "تم استخدام: Meiner Meinung nach – Erstens/Zweitens – Zum Beispiel – Zum Schluss."
        ]
      },
      {
        "id": "schreiben-1-3",
        "taskNumber": 3,
        "typeAr": "رسالة رسمية (شكوى / استفسار)",
        "typeDe": "Formeller Brief / formelle E-Mail",
        "wordCount": "حوالي 40 كلمة",
        "promptAr": "اشتريت هاتفاً جديداً من متجر إلكتروني، ولكنه لا يعمل. اكتب بريداً رسمياً إلى خدمة الزبائن. لا تنسَ التحية الرسمية والختام.",
        "promptDe": "Sie haben ein Handy online bestellt. Das Gerät funktioniert nicht. Schreiben Sie eine formelle E-Mail an den Kundenservice.",
        "requirements": [
          "ابدأ بـ \"Sehr geehrte Damen und Herren\".",
          "اذكر رقم الطلب أو التاريخ.",
          "اشرح المشكلة باختصار.",
          "اطلب حلاً (استبدال أو استرجاع المال).",
          "اختم بـ \"Mit freundlichen Grüßen\"."
        ],
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ar": "السيدات والسادة المحترمون،"
          },
          {
            "de": "Ich habe am … bei Ihnen … bestellt.",
            "ar": "لقد طلبت في ... من عندكم ..."
          },
          {
            "de": "Die Bestellnummer ist …",
            "ar": "رقم الطلب هو ..."
          },
          {
            "de": "Leider funktioniert das Gerät nicht.",
            "ar": "للأسف الجهاز لا يعمل."
          },
          {
            "de": "Ich bitte Sie, … zu tun.",
            "ar": "أرجو منكم أن تفعلوا ..."
          },
          {
            "de": "Bitte antworten Sie mir bis zum …",
            "ar": "أرجو الردّ قبل تاريخ ..."
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع خالص التحية"
          }
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nam 05.10. habe ich bei Ihnen ein Handy bestellt (Bestellnummer: 78245). Leider funktioniert das Gerät nicht – es lässt sich nicht einschalten.\n\nIch bitte Sie, mir ein neues Gerät zu schicken oder mein Geld zurückzuerstatten.\n\nMit freundlichen Grüßen\nSamir Al-Ahmad",
        "sampleAnswerNotes": [
          "عدد الكلمات ≈ 45 (ممتاز للمهمة الثالثة).",
          "يحتوي كل العناصر الرسمية: التحية - رقم الطلب - المشكلة - الطلب - الختام."
        ]
      }
    ]
  },
  {
    "id": "schreiben-2",
    "title": "نموذج Schreiben رقم 2",
    "description": "نموذج ثانٍ مع مواضيع المدرسة والرياضة والعمل.",
    "tasks": [
      {
        "id": "schreiben-2-1",
        "taskNumber": 1,
        "typeAr": "بريد إلكتروني إلى صديق",
        "typeDe": "Informeller E-Mail",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "صديقتك \"آنّا\" دعتك لحفلة عيد ميلادها يوم السبت. اكتبي لها إجابة.",
        "promptDe": "Ihre Freundin Anna hat Sie zu ihrer Geburtstagsparty am Samstag eingeladen. Antworten Sie.",
        "requirements": [
          "اشكريها على الدعوة.",
          "اكتبي هل تأتين أم لا، ولماذا.",
          "اسألي عن شيء يجب أن تحضريه.",
          "اكتبي ما الهدية التي ستحضرينها."
        ],
        "usefulPhrases": [
          {
            "de": "Danke für deine Einladung!",
            "ar": "شكراً على دعوتك!"
          },
          {
            "de": "Ich komme gern.",
            "ar": "سآتي بكل سرور."
          },
          {
            "de": "Leider kann ich nicht kommen, weil …",
            "ar": "للأسف لا أستطيع المجيء لأن ..."
          },
          {
            "de": "Soll ich etwas mitbringen?",
            "ar": "هل يجب أن أحضر شيئاً؟"
          },
          {
            "de": "Ich bringe dir …",
            "ar": "سأحضر لك ..."
          }
        ],
        "sampleAnswer": "Liebe Anna,\n\ntausend Dank für deine Einladung! Natürlich komme ich sehr gern zu deiner Geburtstagsparty am Samstag. Ich freue mich schon!\n\nIch wollte dich fragen: Soll ich etwas mitbringen, zum Beispiel Salat oder Getränke? Ich kann auch gern einen Kuchen backen, wenn du möchtest.\n\nAls Geschenk bekommst du ein Buch. Ich weiß, du liest sehr gern Krimis.\n\nBis Samstag!\nDeine Leila"
      },
      {
        "id": "schreiben-2-2",
        "taskNumber": 2,
        "typeAr": "مشاركة في المنتدى",
        "typeDe": "Forumsbeitrag",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "تقرأ في منتدى: \"هل يجب على كل طفل أن يمارس رياضة في المدرسة؟\" اكتب رأيك.",
        "promptDe": "Sie lesen im Forum: „Soll jedes Kind in der Schule Sport machen?\" Schreiben Sie Ihre Meinung.",
        "requirements": [
          "رحّب وعرّف نفسك.",
          "اكتب رأيك بوضوح.",
          "اذكر سببين.",
          "اكتب خلاصة قصيرة."
        ],
        "sampleAnswer": "Hallo zusammen,\n\nich bin Khaled, 28 Jahre alt. Meiner Meinung nach ist Sport in der Schule sehr wichtig.\n\nErstens bleiben die Kinder so gesund. Heutzutage sitzen Kinder zu viel vor dem Handy oder am Computer. Zweitens lernen sie durch Sport in einer Gruppe zu arbeiten und Respekt zu zeigen.\n\nNatürlich sollten die Lehrer verstehen, wenn ein Kind krank ist. Aber im Allgemeinen ist Sport für alle gut.\n\nViele Grüße\nKhaled"
      },
      {
        "id": "schreiben-2-3",
        "taskNumber": 3,
        "typeAr": "رسالة رسمية (اعتذار)",
        "typeDe": "Formeller Brief",
        "wordCount": "حوالي 40 كلمة",
        "promptAr": "لديك موعد غداً في Jobcenter، لكن لا تستطيع الحضور بسبب مرض ابنك. اعتذر واطلب موعداً جديداً.",
        "promptDe": "Sie haben morgen einen Termin im Jobcenter, können aber nicht kommen, weil Ihr Kind krank ist. Entschuldigen Sie sich und bitten Sie um einen neuen Termin.",
        "requirements": [
          "استعمل التحية الرسمية.",
          "اعتذر واذكر السبب.",
          "اطلب موعداً جديداً واقترح وقتاً.",
          "اختتم بشكل رسمي."
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nleider kann ich morgen nicht zu meinem Termin um 10:30 Uhr kommen, weil mein Sohn plötzlich krank geworden ist und ich zum Arzt muss.\n\nIch möchte mich dafür entschuldigen und bitte um einen neuen Termin. Nächste Woche am Dienstag oder Mittwoch wäre gut für mich.\n\nMit freundlichen Grüßen\nMaryam Al-Hassan"
      }
    ]
  },
  {
    "id": "schreiben-3",
    "title": "Schreiben – نموذج 3 (الحياة اليومية)",
    "description": "دعوة لعيد ميلاد، رأي في موضوع تعليمي، شكوى رسمية.",
    "tasks": [
      {
        "id": "schreiben-3-1",
        "taskNumber": 1,
        "typeAr": "دعوة شخصية / Einladung an einen Freund",
        "typeDe": "E-Mail an einen Freund",
        "promptAr": "صديقك سيزور ألمانيا لأول مرة. اكتب له رسالة تدعوه للإقامة عندك.",
        "promptDe": "Ihr Freund / Ihre Freundin Kareem aus Damaskus kommt zum ersten Mal nach Deutschland zu Besuch. Schreiben Sie eine E-Mail (ca. 80 Wörter):",
        "requirements": [
          "لماذا فرحت برسالته؟",
          "متى يأتي وكم سيبقى؟",
          "ماذا ستفعلون معاً؟",
          "ماذا يجب أن يحضر معه؟"
        ],
        "wordCount": "حوالي 80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1527176930608-09cb256ab504?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "سفر بالطائرة",
        "usefulPhrases": [
          {
            "de": "Ich freue mich riesig, dass …",
            "ar": "أنا سعيد جداً أن ..."
          },
          {
            "de": "Du kannst gerne bei mir wohnen.",
            "ar": "يمكنك أن تسكن عندي."
          },
          {
            "de": "Bring bitte … mit.",
            "ar": "أحضر معك ... من فضلك."
          },
          {
            "de": "Ich hole dich vom Flughafen ab.",
            "ar": "سأقابلك في المطار."
          },
          {
            "de": "Wir können … besuchen.",
            "ar": "يمكننا زيارة ..."
          }
        ],
        "sampleAnswer": "Lieber Kareem,\n\nvielen Dank für deine Nachricht! Ich freue mich riesig, dass du nach Deutschland kommst. Ich kann es kaum erwarten, dich endlich wiederzusehen.\n\nDu kannst gerne bei mir wohnen. Wann genau kommst du und wie lange bleibst du? Wir können zusammen das Brandenburger Tor besuchen, in den Park gehen und natürlich richtig deutsches Essen probieren!\n\nBring bitte etwas Warmes mit, denn hier ist es im Oktober schon kalt. Schick mir bitte deine Flugdaten, dann hole ich dich vom Flughafen ab.\n\nBis bald,\ndein Ahmad"
      },
      {
        "id": "schreiben-3-2",
        "taskNumber": 2,
        "typeAr": "تعليق في موقع تعليمي",
        "typeDe": "Forenbeitrag",
        "promptAr": "في موقع تعليمي يُسأل: \"هل تعلّم لغة جديدة في الحياة اليومية أفضل من المدرسة؟\" اكتب تعليقك.",
        "promptDe": "Auf einer Sprachlern-Seite lesen Sie die Frage: \"Lernt man eine Sprache besser im Alltag als in der Schule?\" Schreiben Sie Ihre Meinung (ca. 80 Wörter).",
        "requirements": [
          "كيف تعلّمت أنت الألمانية حتى الآن؟",
          "ماذا أفضل عند التعلم في الحياة اليومية؟",
          "ماذا أفضل عند التعلم في المدرسة/الكورس؟",
          "ما رأيك أنت؟ ولماذا؟"
        ],
        "wordCount": "حوالي 80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "كتب وقاموس لتعلم اللغة",
        "usefulPhrases": [
          {
            "de": "Meiner Meinung nach …",
            "ar": "برأيي ..."
          },
          {
            "de": "Auf der einen Seite …, auf der anderen Seite …",
            "ar": "من جهة ... ومن جهة أخرى ..."
          },
          {
            "de": "Im Alltag spricht man …",
            "ar": "في الحياة اليومية يتكلم المرء ..."
          },
          {
            "de": "In der Schule lernt man die Grammatik …",
            "ar": "في المدرسة يتعلم المرء القواعد ..."
          },
          {
            "de": "Ich finde es am besten, wenn man beides verbindet.",
            "ar": "أرى أنه من الأفضل دمج الطريقتين."
          }
        ],
        "sampleAnswer": "Hallo zusammen,\n\nich finde diese Frage sehr interessant. Ich lerne seit zwei Jahren Deutsch – im Kurs und im Alltag.\n\nAuf der einen Seite ist die Schule wichtig: Man lernt die Grammatik, das Schreiben und die Aussprache richtig. Ohne diese Basis spricht man immer falsch.\n\nAuf der anderen Seite ist der Alltag besser für das Sprechen. Man hat keine Angst, hört echte Sätze und kann direkt reagieren.\n\nMeiner Meinung nach ist beides nötig. Am besten lernt man, wenn man am Morgen einen Kurs besucht und am Nachmittag mit Deutschen spricht."
      },
      {
        "id": "schreiben-3-3",
        "taskNumber": 3,
        "typeAr": "شكوى رسمية",
        "typeDe": "Beschwerde-Brief",
        "promptAr": "اشتريت غسالة قبل أسبوعين، لكن صدرت أصواتاً غريبة منذ يومين. اكتب شكوى رسمية للمتجر.",
        "promptDe": "Sie haben vor zwei Wochen bei \"Elektro Schmidt\" eine neue Waschmaschine gekauft. Seit zwei Tagen macht sie laute Geräusche. Schreiben Sie eine Beschwerde (ca. 80 Wörter).",
        "requirements": [
          "متى وأين اشتريت الغسالة؟",
          "ما هي المشكلة بالضبط؟",
          "ماذا تطلب من المتجر؟",
          "حتى متى تنتظر الردّ؟"
        ],
        "wordCount": "حوالي 80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "غسالة كهربائية",
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ar": "سيداتي وسادتي،"
          },
          {
            "de": "ich wende mich an Sie wegen …",
            "ar": "أتوجّه إليكم بشأن ..."
          },
          {
            "de": "leider funktioniert … nicht richtig.",
            "ar": "لسوء الحظ ... لا يعمل بشكل صحيح."
          },
          {
            "de": "Ich bitte Sie, … zu reparieren / zu erstatten.",
            "ar": "أرجو منكم أن تصلحوا / تردّوا ..."
          },
          {
            "de": "Ich erwarte Ihre Antwort bis spätestens …",
            "ar": "أنتظر ردّكم في موعد أقصاه ..."
          }
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie, weil ich am 5. März in Ihrem Geschäft \"Elektro Schmidt\" in Düsseldorf eine Waschmaschine der Marke Bosch gekauft habe. Die Rechnungsnummer lautet 2024-1234.\n\nLeider macht die Maschine seit zwei Tagen sehr laute Geräusche, besonders beim Schleudern. Ich habe alles richtig angeschlossen und die Bedienungsanleitung beachtet.\n\nIch bitte Sie, die Waschmaschine entweder schnell zu reparieren oder mir eine neue zu liefern. Da das Gerät noch in der Garantie ist, erwarte ich keine Kosten.\n\nBitte antworten Sie bis spätestens nächsten Freitag.\n\nMit freundlichen Grüßen\nMahmoud Ali"
      }
    ]
  },
  {
    "id": "schreiben-4",
    "title": "Schreiben – نموذج 4 (مواقف يومية)",
    "description": "تأخير في عمل، شكوى من جار، رد على إعلان شقة. مع نصائح كتابة بالعربية لكل مهمة.",
    "tasks": [
      {
        "id": "schreiben-4-1",
        "taskNumber": 1,
        "typeAr": "بريد رسمي للمدير: تأخّر عن العمل",
        "typeDe": "E-Mail an den Chef",
        "promptAr": "تأخّرت اليوم عن عملك بسبب الباصات. اكتب بريداً للمدير تعتذر فيه وتشرح السبب وتقترح حلاً.",
        "promptDe": "Schreiben Sie eine E-Mail an Ihren Chef, Herrn Becker. Heute Morgen sind Sie zur Arbeit zu spät gekommen, weil die Busse Verspätung hatten.",
        "requirements": [
          "اعتذر بشكل مهذّب",
          "اشرح ماذا حدث",
          "اقترح كيف ستعوّض ذلك",
          "اطلب رأيه أو موعداً للحديث معه"
        ],
        "wordCount": "حوالي 80-100 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "محطة باصات في الصباح",
        "usefulPhrases": [
          {
            "de": "Sehr geehrter Herr …",
            "ar": "حضرة السيد المحترم..."
          },
          {
            "de": "Ich möchte mich aufrichtig entschuldigen.",
            "ar": "أعتذر بصدق."
          },
          {
            "de": "Heute Morgen hatte der Bus große Verspätung.",
            "ar": "اليوم في الصباح كان الباص متأخراً جداً."
          },
          {
            "de": "Als Ausgleich werde ich heute länger bleiben.",
            "ar": "كتعويض سأبقى اليوم لمدة أطول."
          },
          {
            "de": "Bitte teilen Sie mir mit, wann ich mit Ihnen sprechen kann.",
            "ar": "أرجو إعلامي متى يمكنني التحدث معك."
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswerNotes": [
          "استخدم Sehr geehrter Herr Becker (لأنه رسمي).",
          "اعتذر **في البداية**، اشرح السبب بدقة، ثم قدّم حلاً.",
          "تجنّب الأعذار الطويلة. كن واضحاً ومختصراً."
        ],
        "sampleAnswer": "Sehr geehrter Herr Becker,\n\nich möchte mich aufrichtig dafür entschuldigen, dass ich heute Morgen zu spät zur Arbeit gekommen bin.\n\nDer Grund war, dass mein Bus eine Verspätung von über 30 Minuten hatte. Auf der Anzeigetafel stand zuerst \"5 Minuten\", aber dann ist der Bus einfach nicht gekommen. Auch der nächste Bus war voll, sodass ich nicht einsteigen konnte.\n\nAls Ausgleich werde ich heute Abend gerne länger bleiben oder mein Mittagspause kürzen. In Zukunft werde ich früher aus dem Haus gehen, damit so etwas nicht wieder passiert.\n\nBitte teilen Sie mir mit, wann ich mit Ihnen darüber kurz sprechen kann.\n\nMit freundlichen Grüßen\nKhaled Ahmad"
      },
      {
        "id": "schreiben-4-2",
        "taskNumber": 2,
        "typeAr": "بريد لجارك: مشكلة الضوضاء",
        "typeDe": "E-Mail an den Nachbarn",
        "promptAr": "جارك في الطابق العلوي يصدر ضوضاء عالية في الليل. اكتب رسالة مهذبة لتطلب منه التهدئة.",
        "promptDe": "Ihr Nachbar Herr Schmidt im Stockwerk über Ihnen macht abends nach 22 Uhr immer sehr laute Musik. Sie können nicht schlafen.",
        "requirements": [
          "حيِّه بشكل ودود",
          "اشرح المشكلة بدون إساءة",
          "اقترح حلاً (ساعات معينة، خفض الصوت...)",
          "اشكره على تفهّمه"
        ],
        "wordCount": "حوالي 80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "بناية سكنية في ألمانيا",
        "usefulPhrases": [
          {
            "de": "Lieber Herr / liebe Frau …",
            "ar": "عزيزي السيد / عزيزتي السيدة"
          },
          {
            "de": "Ich wende mich an Sie, weil …",
            "ar": "أكتب إليك لأن..."
          },
          {
            "de": "Es stört mich, wenn …",
            "ar": "يزعجني عندما..."
          },
          {
            "de": "Könnten Sie bitte … leiser machen?",
            "ar": "هل يمكنك جعل ... أهدأ؟"
          },
          {
            "de": "Vielen Dank für Ihr Verständnis.",
            "ar": "شكراً لتفهّمك."
          },
          {
            "de": "Mit freundlichen Grüßen / Viele Grüße",
            "ar": "مع أطيب التحيات / تحيات"
          }
        ],
        "sampleAnswerNotes": [
          "كن **مهذباً جداً** — في ألمانيا الجار جزء مهم من الحياة اليومية.",
          "لا تتّهمه مباشرة. استخدم \"ich-Form\" بدل \"Sie machen...\".",
          "اقترح حلاً واقعياً (مثلاً: تخفيض الصوت بعد الـ22)."
        ],
        "sampleAnswer": "Lieber Herr Schmidt,\n\nich hoffe, es geht Ihnen gut. Ich wende mich an Sie wegen einer kleinen Sache, die mir wichtig ist.\n\nIn den letzten Wochen ist die Musik aus Ihrer Wohnung nach 22 Uhr ziemlich laut. Leider kann ich dann nicht schlafen, weil mein Schlafzimmer direkt unter Ihrem Wohnzimmer ist. Morgens muss ich um 6 Uhr aufstehen.\n\nKönnten Sie die Musik bitte ab 22 Uhr ein bisschen leiser machen? Tagsüber ist das natürlich kein Problem.\n\nVielen Dank für Ihr Verständnis und einen schönen Abend!\n\nViele Grüße\nHassan Othman (Wohnung 2A)"
      },
      {
        "id": "schreiben-4-3",
        "taskNumber": 3,
        "typeAr": "استفسار عن شقة من إعلان",
        "typeDe": "Anfrage zu einer Wohnung",
        "promptAr": "رأيت إعلان شقة في الإنترنت. اكتب بريداً لصاحب الإعلان للاستفسار وتحديد موعد لرؤيتها.",
        "promptDe": "Sie haben im Internet eine Anzeige für eine 2-Zimmer-Wohnung in München gesehen. Schreiben Sie eine E-Mail an die Vermieterin Frau Roth.",
        "requirements": [
          "عرّف عن نفسك (الاسم، المهنة)",
          "اسأل أسئلة مهمة (الإيجار، التأشيرة، تاريخ الانتقال، الأثاث)",
          "اطلب موعداً لمعاينة الشقة",
          "اشكرها وودّعها بشكل رسمي"
        ],
        "wordCount": "حوالي 80-100 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "شقة فارغة بإيجار",
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Frau Roth,",
            "ar": "حضرة السيدة روت المحترمة،"
          },
          {
            "de": "Ich habe Ihre Anzeige im Internet gelesen.",
            "ar": "قرأت إعلانك على الإنترنت."
          },
          {
            "de": "Ich interessiere mich für die Wohnung.",
            "ar": "أنا مهتم بالشقة."
          },
          {
            "de": "Ich bin … von Beruf.",
            "ar": "أعمل ..."
          },
          {
            "de": "Ist die Wohnung möbliert?",
            "ar": "هل الشقة مفروشة؟"
          },
          {
            "de": "Wie hoch sind die Nebenkosten?",
            "ar": "كم تبلغ التكاليف الإضافية؟"
          },
          {
            "de": "Wann könnte ich die Wohnung besichtigen?",
            "ar": "متى يمكنني معاينة الشقة؟"
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswerNotes": [
          "في ألمانيا مالك الشقة يقرأ **عشرات الرسائل** يومياً. كن واضحاً ومختصراً.",
          "اذكر **مهنتك ودخلك** — مهم جداً لقبولك.",
          "اقترح **3-4 مواعيد محددة** لزيارة الشقة، فهذا يسهّل الموافقة."
        ],
        "sampleAnswer": "Sehr geehrte Frau Roth,\n\nich habe Ihre Anzeige für die 2-Zimmer-Wohnung in München-Schwabing gelesen und interessiere mich sehr dafür.\n\nMein Name ist Lara Khoury. Ich bin 28 Jahre alt und arbeite als Krankenschwester in einem städtischen Krankenhaus mit einem festen Vertrag. Ich suche eine Wohnung ab dem 1. März.\n\nIch habe noch ein paar Fragen:\n- Ist die Wohnung möbliert oder unmöbliert?\n- Wie hoch sind die Nebenkosten ungefähr?\n- Sind Haustiere erlaubt?\n\nKönnte ich die Wohnung bald besichtigen? Ich habe diese Woche am Mittwoch nach 17 Uhr und am Freitag den ganzen Tag Zeit.\n\nVielen Dank im Voraus für Ihre Antwort.\n\nMit freundlichen Grüßen\nLara Khoury"
      }
    ]
  },
  {
    "id": "schreiben-5",
    "title": "نموذج Schreiben رقم 5 (نمط Goethe – التوظيف)",
    "description": "ثلاث مهام: بريد لزميل، مشاركة عن العمل عن بُعد، رسالة طلب وظيفة.",
    "tasks": [
      {
        "id": "schreiben-5-1",
        "taskNumber": 1,
        "typeAr": "بريد إلكتروني لزميل عمل",
        "typeDe": "E-Mail an Kollegen",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "زميلك \"ماركوس\" غاب أمس عن العمل. اكتب له بريداً تخبره ما حصل وتسأله عن صحته.",
        "promptDe": "Ihr Kollege Markus war gestern nicht im Büro. Schreiben Sie ihm eine E-Mail.",
        "requirements": [
          "اسأله عن سبب غيابه وعن صحته.",
          "أخبره بأهم شيء حصل في الاجتماع.",
          "اعرض عليه مساعدتك إذا احتاج.",
          "اقترح موعداً للقاء قبل اجتماع الجمعة."
        ],
        "usefulPhrases": [
          {
            "de": "Hallo Markus,",
            "ar": "مرحباً ماركوس،"
          },
          {
            "de": "wie geht es dir? Bist du krank?",
            "ar": "كيف حالك؟ هل أنت مريض؟"
          },
          {
            "de": "In der Sitzung gestern haben wir … besprochen.",
            "ar": "في اجتماع الأمس ناقشنا..."
          },
          {
            "de": "Falls du Hilfe brauchst, melde dich bei mir.",
            "ar": "إن احتجت مساعدة فأخبرني."
          },
          {
            "de": "Können wir uns am Donnerstag kurz treffen?",
            "ar": "هل نلتقي يوم الخميس باختصار؟"
          },
          {
            "de": "Gute Besserung!",
            "ar": "سلامتك / شفاء عاجل!"
          }
        ],
        "sampleAnswer": "Hallo Markus,\n\nich habe gemerkt, dass du gestern nicht im Büro warst. Ist alles in Ordnung? Bist du krank?\n\nIm Meeting haben wir das neue Projekt mit der Firma Schmidt besprochen. Der Chef möchte, dass wir bis Freitag einen ersten Plan vorbereiten. Falls du Hilfe brauchst, kann ich dir gerne meine Notizen schicken.\n\nHättest du am Donnerstag um 14 Uhr Zeit für ein kurzes Treffen? So können wir uns auf Freitag vorbereiten.\n\nGute Besserung und bis bald!\n\nViele Grüße\nAdel",
        "sampleAnswerNotes": [
          "كل النقاط الأربع موجودة بشكل واضح.",
          "استخدام Konjunktiv II المهذّب: \"Hättest du Zeit?\" بدلاً من \"Hast du Zeit?\".",
          "\"Gute Besserung\" تعبير لطيف وشائع."
        ]
      },
      {
        "id": "schreiben-5-2",
        "taskNumber": 2,
        "typeAr": "مشاركة في منتدى عن العمل عن بُعد",
        "typeDe": "Forumbeitrag – Homeoffice",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "قرأت في منتدى السؤال التالي: \"هل العمل من البيت أفضل من العمل في المكتب؟\" اكتب رأيك واذكر مزايا وعيوب.",
        "promptDe": "Lesen Sie die Frage im Forum: „Ist Homeoffice besser als Büroarbeit?\" Schreiben Sie Ihre Meinung.",
        "requirements": [
          "اذكر رأيك بوضوح في البداية.",
          "اذكر ميزتين على الأقل.",
          "اذكر عيباً أو مشكلة.",
          "اعطِ مثالاً من تجربتك أو من حياتك."
        ],
        "usefulPhrases": [
          {
            "de": "Liebes Forum,",
            "ar": "عزيزي المنتدى،"
          },
          {
            "de": "Meiner Meinung nach …",
            "ar": "في رأيي..."
          },
          {
            "de": "Ein großer Vorteil ist, dass …",
            "ar": "من أكبر المزايا أنّ..."
          },
          {
            "de": "Allerdings gibt es auch Nachteile.",
            "ar": "غير أنّ هناك عيوباً أيضاً."
          },
          {
            "de": "Aus eigener Erfahrung kann ich sagen, dass …",
            "ar": "من تجربتي يمكنني القول إنّ..."
          },
          {
            "de": "Zusammenfassend …",
            "ar": "باختصار..."
          }
        ],
        "sampleAnswer": "Liebes Forum,\n\nich finde das Thema sehr interessant. Meiner Meinung nach hat das Homeoffice viele Vorteile.\n\nErstens spart man viel Zeit, weil man nicht zur Arbeit fahren muss. Zweitens kann man flexibler arbeiten und sich besser auf schwierige Aufgaben konzentrieren.\n\nAllerdings hat das Homeoffice auch Nachteile. Man fühlt sich oft einsam und der Kontakt zu den Kollegen geht verloren. Aus eigener Erfahrung kann ich sagen, dass mir die Mittagspause mit dem Team manchmal sehr fehlt.\n\nZusammenfassend finde ich eine Mischung am besten: zwei Tage zu Hause, drei Tage im Büro.\n\nViele Grüße,\nLayla",
        "sampleAnswerNotes": [
          "ابدأ برأي واضح: \"ich finde das Thema interessant\".",
          "استخدم الترقيم: Erstens / Zweitens / Allerdings / Zusammenfassend.",
          "الحلّ الوسط في النهاية يثبت قدرتك على التفكير المتوازن."
        ]
      },
      {
        "id": "schreiben-5-3",
        "taskNumber": 3,
        "typeAr": "رسالة تقدّم لوظيفة (رسمي)",
        "typeDe": "Bewerbungsschreiben",
        "wordCount": "حوالي 80 كلمة",
        "promptAr": "قرأت إعلان وظيفة \"بائع/ة في متجر إلكترونيات\" على الإنترنت. اكتب رسالة تقدّم رسمية تذكر فيها:",
        "promptDe": "Sie haben eine Stellenanzeige für „Verkäufer/in in einem Elektronikgeschäft\" gelesen. Schreiben Sie eine Bewerbung.",
        "requirements": [
          "اذكر مصدر الإعلان.",
          "قدّم نفسك ومهنتك السابقة.",
          "اذكر سبباً واحداً يجعلك مناسباً للوظيفة.",
          "اطلب مقابلة شخصية."
        ],
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ar": "حضرات السيدات والسادة،"
          },
          {
            "de": "mit großem Interesse habe ich Ihre Anzeige gelesen.",
            "ar": "بكل اهتمام قرأت إعلانكم."
          },
          {
            "de": "Ich bewerbe mich um die Stelle als …",
            "ar": "أتقدم لوظيفة..."
          },
          {
            "de": "In meinem Heimatland habe ich als … gearbeitet.",
            "ar": "في بلدي عملت كـ..."
          },
          {
            "de": "Ich bin pünktlich, freundlich und arbeite gerne im Team.",
            "ar": "أنا منضبط، ودود وأعمل بفريق."
          },
          {
            "de": "Ich freue mich auf Ihre Antwort.",
            "ar": "أتطلع لردكم."
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Anzeige im Internetportal \"JobFinder.de\" gelesen und bewerbe mich hiermit um die Stelle als Verkäufer in Ihrem Elektronikgeschäft.\n\nMein Name ist Omar Shamsi. Ich bin 28 Jahre alt und komme aus Syrien. In meinem Heimatland habe ich vier Jahre lang in einem Computer-Laden als Verkäufer gearbeitet. Ich kenne mich daher sehr gut mit Smartphones, Laptops und Zubehör aus.\n\nIch bin freundlich, geduldig und spreche Arabisch und Deutsch (B1).\n\nÜber die Möglichkeit eines persönlichen Gesprächs würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nOmar Shamsi",
        "sampleAnswerNotes": [
          "استخدم \"mit großem Interesse\" — قياسي في طلبات التوظيف.",
          "اذكر مصدر الإعلان بدقّة.",
          "اذكر خبرتك السابقة وما يميّزك (لغات، مهارات).",
          "انهِ بطلب مقابلة + \"Mit freundlichen Grüßen\"."
        ]
      }
    ]
  },
  {
    "id": "schreiben-6",
    "title": "Schreiben – نموذج 6 (مواقف عائلية واجتماعية)",
    "description": "دعوة لزواج، نقاش في منتدى عن تربية الأطفال، طلب موعد مع المدرّس.",
    "tasks": [
      {
        "id": "schreiben-6-1",
        "taskNumber": 1,
        "typeAr": "دعوة عائلية (بريد غير رسمي)",
        "typeDe": "Einladung zur Hochzeit",
        "promptAr": "صديقك الألماني سيتزوّج وسألك أن تأتي معه قبل العرس بأسبوع لتساعده. اكتب له بريداً.",
        "promptDe": "Ihr deutscher Freund Tobias heiratet bald. Er möchte, dass Sie eine Woche vor der Hochzeit zu ihm kommen, um zu helfen. Schreiben Sie ihm eine E-Mail.",
        "requirements": [
          "اشكره على الدعوة وعبّر عن سعادتك",
          "اخبره أنك ستأتي وحدّد متى",
          "اسأل بماذا يحتاج المساعدة",
          "اقترح أن تشتري هدية معه"
        ],
        "wordCount": "حوالي 80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "حفل زفاف",
        "usefulPhrases": [
          {
            "de": "Vielen Dank für die Einladung.",
            "ar": "شكراً للدعوة."
          },
          {
            "de": "Ich freue mich riesig für dich!",
            "ar": "أنا سعيد جداً لك!"
          },
          {
            "de": "Ich komme gerne schon eine Woche vorher.",
            "ar": "سآتي بكل سرور قبل أسبوع."
          },
          {
            "de": "Sag mir Bescheid, wo ich helfen kann.",
            "ar": "أخبرني أين يمكنني المساعدة."
          },
          {
            "de": "Sollen wir zusammen ein Geschenk besorgen?",
            "ar": "هل نشتري هدية معاً؟"
          },
          {
            "de": "Liebe Grüße",
            "ar": "تحياتي القلبية"
          }
        ],
        "sampleAnswerNotes": [
          "استخدم \"Lieber Tobias\" لأنه صديق.",
          "احرص على ذكر التاريخ بدقّة وكيف ستصل إليه.",
          "كن دافئاً وعفوياً — هذا بريد غير رسمي."
        ],
        "sampleAnswer": "Lieber Tobias,\n\nvielen Dank für deine Einladung – ich freue mich riesig für dich und Anna! Natürlich komme ich gerne schon eine Woche vorher und helfe euch bei den Vorbereitungen.\n\nIch plane, am Samstag, den 15. Juni, mit dem Zug anzukommen. Sag mir bitte Bescheid, ob das passt und wo ich genau helfen kann – Einladungen verschicken, Saal dekorieren oder vielleicht beim Essen?\n\nAußerdem möchte ich ein gemeinsames Geschenk mit dir besorgen, falls du noch Ideen hast. Was meinst du?\n\nBis bald, mein Freund!\n\nLiebe Grüße,\nOmar"
      },
      {
        "id": "schreiben-6-2",
        "taskNumber": 2,
        "typeAr": "منتدى: نقاش عن تربية الأطفال والشاشات",
        "typeDe": "Forumbeitrag",
        "promptAr": "في منتدى للآباء، أحدهم كتب: \"أنا ضد إعطاء الهواتف للأطفال قبل سن 14\". اكتب رأيك.",
        "promptDe": "In einem Forum schreibt ein Vater: \"Kinder unter 14 sollten kein Handy haben.\" Schreiben Sie Ihren Beitrag dazu.",
        "requirements": [
          "عبّر عن رأيك بوضوح (موافق/ضد)",
          "قدّم سببين على الأقل",
          "اذكر تجربتك أو تجربة شخص تعرفه",
          "اقترح حلاً وسطاً"
        ],
        "wordCount": "حوالي 80 كلمة",
        "usefulPhrases": [
          {
            "de": "Meiner Meinung nach …",
            "ar": "برأيي ..."
          },
          {
            "de": "Ich stimme dem nicht ganz zu.",
            "ar": "لا أوافق تماماً."
          },
          {
            "de": "Auf der einen Seite … auf der anderen Seite …",
            "ar": "من ناحية... ومن ناحية أخرى..."
          },
          {
            "de": "In meiner Familie …",
            "ar": "في عائلتي ..."
          },
          {
            "de": "Ein Kompromiss wäre …",
            "ar": "الحل الوسط هو ..."
          },
          {
            "de": "Wichtig finde ich, dass die Eltern Regeln aufstellen.",
            "ar": "أرى أنه من المهم أن يضع الأهل قواعد."
          }
        ],
        "sampleAnswerNotes": [
          "افتح برأيك مباشرة (Ich finde / Meiner Meinung nach).",
          "استخدم Konnektoren: außerdem, jedoch, deshalb.",
          "اذكر مثالاً حقيقياً = درجة إضافية."
        ],
        "sampleAnswer": "Meiner Meinung nach ist diese Regel zu streng. Ein totales Verbot bis 14 finde ich nicht realistisch, weil heute fast alle Klassenkameraden ein Handy haben.\n\nAuf der anderen Seite verstehe ich die Sorge der Eltern. Soziale Medien können Kinder unter Druck setzen, und manche verbringen zu viel Zeit am Bildschirm.\n\nBei uns zu Hause hat meine Tochter (12) ein einfaches Handy ohne Internet. Sie kann uns anrufen, aber spielt nicht stundenlang. Das funktioniert sehr gut.\n\nEin Kompromiss wäre also: ein Handy mit klaren Regeln, statt eines kompletten Verbots."
      },
      {
        "id": "schreiben-6-3",
        "taskNumber": 3,
        "typeAr": "بريد رسمي للمدرّس: طلب موعد لمناقشة درجات الابن",
        "typeDe": "E-Mail an den Lehrer",
        "promptAr": "ابنك في المدرسة، حصل على درجات سيئة في الرياضيات. اكتب بريداً للمدرّس تطلب فيه موعداً للقاء.",
        "promptDe": "Ihr Sohn hat schlechte Noten in Mathematik bekommen. Schreiben Sie eine E-Mail an den Klassenlehrer, Herrn Müller, und bitten Sie um einen Termin.",
        "requirements": [
          "حيِّ المدرّس بشكل رسمي",
          "اشرح سبب البريد (الدرجات)",
          "اطلب موعداً للقاء وحدّد وقتك المتاح",
          "اطلب نصيحة لمساعدة ابنك في البيت"
        ],
        "wordCount": "حوالي 80-100 كلمة",
        "usefulPhrases": [
          {
            "de": "Sehr geehrter Herr Müller,",
            "ar": "حضرة السيد مولر المحترم،"
          },
          {
            "de": "mit Sorge habe ich die letzten Noten meines Sohnes gesehen.",
            "ar": "بقلق لاحظتُ درجات ابني الأخيرة."
          },
          {
            "de": "Ich möchte gerne mit Ihnen sprechen.",
            "ar": "أودّ التحدّث معك."
          },
          {
            "de": "Hätten Sie nächste Woche Zeit für ein Gespräch?",
            "ar": "هل لديك وقت الأسبوع القادم لمحادثة؟"
          },
          {
            "de": "Wie kann ich ihn zu Hause unterstützen?",
            "ar": "كيف أستطيع دعمه في البيت؟"
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswerNotes": [
          "افتح بـ Sehr geehrter Herr Müller.",
          "اظهر اهتمامك (mit Sorge / es liegt mir am Herzen).",
          "كن مرناً في اقتراح الموعد."
        ],
        "sampleAnswer": "Sehr geehrter Herr Müller,\n\nmit Sorge habe ich gesehen, dass mein Sohn Karim in Mathematik in letzter Zeit deutlich schlechtere Noten bekommen hat. Da mir seine Schullaufbahn sehr wichtig ist, möchte ich gerne mit Ihnen über die Situation sprechen.\n\nHätten Sie nächste Woche Zeit für ein kurzes Gespräch? Ich kann am Mittwoch oder Donnerstag nach 15 Uhr in die Schule kommen, andere Tage sind aber auch möglich.\n\nAußerdem würde ich mich freuen zu erfahren, wie ich Karim zu Hause besser unterstützen kann – vielleicht mit zusätzlichen Übungen oder einem Nachhilfelehrer.\n\nVielen Dank im Voraus für Ihre Zeit.\n\nMit freundlichen Grüßen\nYusuf Haddad"
      }
    ]
  },
  {
    "id": "schreiben-7",
    "title": "Schreiben – نموذج 7 (الإدارة والمكاتب الرسمية)",
    "description": "تواصل مع Krankenkasse، شكوى مالية لـ Jobcenter، استفسار من Bürgeramt — مهم جداً للسوريين.",
    "tasks": [
      {
        "id": "schreiben-7-1",
        "taskNumber": 1,
        "typeAr": "بريد رسمي للتأمين الصحي: تغيير العنوان",
        "typeDe": "E-Mail an die Krankenkasse",
        "promptAr": "انتقلت إلى شقة جديدة. اكتب للتأمين الصحي (AOK) لإبلاغهم بالعنوان الجديد.",
        "promptDe": "Sie sind in eine neue Wohnung umgezogen. Schreiben Sie eine E-Mail an Ihre Krankenkasse (AOK), um Ihre neue Adresse mitzuteilen.",
        "requirements": [
          "اذكر اسمك ورقم تأمينك",
          "اذكر العنوان القديم والجديد",
          "اطلب تأكيد استلام البريد",
          "اسأل إذا كانت بطاقة جديدة ضرورية"
        ],
        "wordCount": "حوالي 80 كلمة",
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ar": "سيداتي سادتي المحترمين،"
          },
          {
            "de": "hiermit teile ich Ihnen meine neue Adresse mit.",
            "ar": "بهذا أعلمكم بعنواني الجديد."
          },
          {
            "de": "Meine Versichertennummer lautet …",
            "ar": "رقم تأميني هو ..."
          },
          {
            "de": "Bitte bestätigen Sie den Erhalt dieser Nachricht.",
            "ar": "الرجاء تأكيد استلام هذه الرسالة."
          },
          {
            "de": "Ist eine neue Versichertenkarte erforderlich?",
            "ar": "هل بطاقة تأمين جديدة ضرورية؟"
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswerNotes": [
          "دائماً ابدأ بـ \"Sehr geehrte Damen und Herren\" مع المؤسسات.",
          "ضع رقم التأمين بوضوح ليجدوك بسرعة.",
          "كن مختصراً ومحدّداً."
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit möchte ich Ihnen mitteilen, dass ich seit dem 1. März in eine neue Wohnung umgezogen bin. Bitte aktualisieren Sie meine Daten in Ihrem System.\n\nMein Name: Mohammed Alsalim\nVersichertennummer: A123456789\nAlte Adresse: Hauptstraße 12, 60311 Frankfurt\nNeue Adresse: Bergweg 8, 4. Stock, 60439 Frankfurt\n\nBitte bestätigen Sie mir den Erhalt dieser E-Mail. Außerdem möchte ich gerne wissen, ob ich eine neue Versichertenkarte mit der neuen Adresse beantragen muss.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nMohammed Alsalim"
      },
      {
        "id": "schreiben-7-2",
        "taskNumber": 2,
        "typeAr": "منتدى: نقاش حول تعلّم اللغة الألمانية",
        "typeDe": "Forumbeitrag",
        "promptAr": "في منتدى المهاجرين، شخص يقول: \"تعلّم الألمانية مستحيل بدون مدرّس\". اكتب رأيك.",
        "promptDe": "In einem Migranten-Forum schreibt jemand: \"Ohne Lehrer kann man Deutsch nicht lernen.\" Schreiben Sie Ihre Meinung.",
        "requirements": [
          "عبّر عن رأيك بوضوح",
          "اذكر تجربتك الشخصية",
          "اذكر طرقاً ساعدتك",
          "انصح القارئ بشيء عملي"
        ],
        "wordCount": "حوالي 80 كلمة",
        "usefulPhrases": [
          {
            "de": "Das stimmt nur teilweise.",
            "ar": "هذا صحيح جزئياً."
          },
          {
            "de": "Aus eigener Erfahrung kann ich sagen, …",
            "ar": "من تجربتي الشخصية، أستطيع القول إن..."
          },
          {
            "de": "Ich habe vor allem mit Apps gelernt.",
            "ar": "تعلّمت بشكل أساسي بالتطبيقات."
          },
          {
            "de": "Mein Tipp ist: …",
            "ar": "نصيحتي هي: ..."
          },
          {
            "de": "Sprachpartner finden ist sehr wichtig.",
            "ar": "إيجاد شريك للتحدث مهم جداً."
          }
        ],
        "sampleAnswer": "Das stimmt meiner Meinung nach nur teilweise. Natürlich hilft ein Lehrer enorm, vor allem bei der Aussprache und der Grammatik. Aber unmöglich ohne Lehrer? Ich denke, das ist übertrieben.\n\nAus eigener Erfahrung: Ich habe das Niveau A2 hauptsächlich mit YouTube-Videos und einer App erreicht. Erst danach habe ich einen Kurs besucht. Das Wichtigste ist, jeden Tag etwas zu üben und mit echten Menschen zu sprechen, zum Beispiel Nachbarn oder im Sportverein.\n\nMein Tipp: Apps + Tandempartner + ein paar Stunden mit Lehrer = die beste Mischung."
      },
      {
        "id": "schreiben-7-3",
        "taskNumber": 3,
        "typeAr": "شكوى رسمية لـ Jobcenter: تأخير في الدفع",
        "typeDe": "Beschwerde beim Jobcenter",
        "promptAr": "منذ شهرين لم تستلم راتب البطالة (Bürgergeld). اكتب شكوى رسمية للـ Jobcenter.",
        "promptDe": "Seit zwei Monaten haben Sie kein Bürgergeld erhalten. Schreiben Sie eine Beschwerde an das Jobcenter.",
        "requirements": [
          "اذكر اسمك ورقم ملفك (Kundennummer)",
          "اشرح المشكلة بدقّة (متى آخر دفعة)",
          "اطلب توضيحاً وحلاً عاجلاً",
          "اذكر أن الوضع المالي صعب"
        ],
        "wordCount": "حوالي 100 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "مكتب رسمي",
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ar": "سيداتي سادتي المحترمين،"
          },
          {
            "de": "hiermit beschwere ich mich über …",
            "ar": "بهذا أتقدّم بشكوى بخصوص..."
          },
          {
            "de": "meine Kundennummer lautet …",
            "ar": "رقم ملفي هو..."
          },
          {
            "de": "Die letzte Zahlung erhielt ich am …",
            "ar": "آخر دفعة استلمتها في..."
          },
          {
            "de": "Meine finanzielle Lage ist sehr schwierig.",
            "ar": "وضعي المالي صعب جداً."
          },
          {
            "de": "Ich bitte um eine schnelle Klärung.",
            "ar": "أرجو توضيحاً عاجلاً."
          },
          {
            "de": "Mit freundlichen Grüßen",
            "ar": "مع أطيب التحيات"
          }
        ],
        "sampleAnswerNotes": [
          "استخدم \"hiermit beschwere ich mich\" — صيغة شكوى رسمية.",
          "ضع رقم الملف بوضوح في البداية.",
          "اطلب رداً ضمن إطار زمني (z.B. \"innerhalb einer Woche\")."
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit beschwere ich mich, dass ich seit zwei Monaten kein Bürgergeld erhalten habe. Meine Kundennummer lautet 12345678/JC.\n\nDie letzte Zahlung erhielt ich am 15. Februar. Seitdem ist nichts mehr auf meinem Konto eingegangen, obwohl meine Bewilligung bis Ende Juli läuft. Auf meine zwei vorherigen Anrufe habe ich leider keine Antwort bekommen.\n\nMeine finanzielle Lage ist inzwischen sehr schwierig: Miete, Strom und Lebensmittel kann ich kaum bezahlen.\n\nIch bitte Sie deshalb dringend um eine schnelle Klärung dieses Problems – am besten innerhalb einer Woche – und um eine schriftliche Erklärung, warum die Zahlungen ausgeblieben sind.\n\nMit freundlichen Grüßen\nAhmad Khalil"
      }
    ]
  },
  {
    "id": "schreiben-8",
    "title": "نموذج Schreiben رقم 8 — رسائل عمليّة شائعة",
    "description": "ثلاث مهام من الحياة اليوميّة: تأجيل موعد، شكوى من طلب أونلاين، دعوة لحفل ميلاد.",
    "tasks": [
      {
        "id": "schreiben-8-1",
        "taskNumber": 1,
        "typeAr": "تأجيل موعد طبيب",
        "typeDe": "Arzttermin verschieben",
        "promptAr": "كان عندك موعد عند الطبيب (Hausarzt) يوم الخميس الساعة 10:00 لكن لا تستطيع الحضور بسبب العمل. اكتب رسالة لتغيير الموعد.",
        "promptDe": "Sie haben am Donnerstag um 10:00 einen Termin bei Ihrem Hausarzt, können aber wegen der Arbeit nicht kommen. Schreiben Sie eine E-Mail, um den Termin zu verschieben.",
        "requirements": [
          "اعتذر بأدب",
          "اشرح السبب باختصار",
          "اقترح موعدين بديلَين",
          "اطلب التأكيد كتابيّاً"
        ],
        "wordCount": "حوالي 70-80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "موعد طبي",
        "usefulPhrases": [
          {
            "de": "Sehr geehrte Frau / Sehr geehrter Herr Dr. ...,",
            "ar": "دكتورة/دكتور المحترم،"
          },
          {
            "de": "leider kann ich meinen Termin am ... nicht wahrnehmen.",
            "ar": "للأسف لا أستطيع حضور موعدي يوم..."
          },
          {
            "de": "der Grund ist, dass ich beruflich verhindert bin.",
            "ar": "السبب أنّي مرتبط بعمل."
          },
          {
            "de": "Wäre es möglich, den Termin auf ... zu verschieben?",
            "ar": "هل بالإمكان تأجيل الموعد إلى...؟"
          },
          {
            "de": "Alternativ käme auch ... in Frage.",
            "ar": "بدلاً من ذلك يمكن أيضاً..."
          },
          {
            "de": "Ich bitte um eine kurze Bestätigung.",
            "ar": "أرجو تأكيداً قصيراً."
          }
        ],
        "sampleAnswerNotes": [
          "استخدم صيغة \"Sehr geehrte/r\" مع اسم الطبيب.",
          "اقترح موعدَين بديلَين على الأقلّ — يساعد السكرتيرة."
        ],
        "sampleAnswer": "Sehr geehrte Frau Dr. Schmidt,\n\nleider kann ich meinen Termin am Donnerstag um 10:00 nicht wahrnehmen. Der Grund ist, dass ich an diesem Tag beruflich verhindert bin und nicht von der Arbeit weg kann.\n\nIch möchte den Termin gerne verschieben. Wäre es möglich, einen neuen Termin am kommenden Montag um 9:00 oder am Mittwoch um 16:00 zu bekommen?\n\nÜber eine kurze Bestätigung per E-Mail wäre ich sehr dankbar.\n\nVielen Dank im Voraus und mit freundlichen Grüßen,\nYara Hassan"
      },
      {
        "id": "schreiben-8-2",
        "taskNumber": 2,
        "typeAr": "شكوى من طلب أونلاين معطوب",
        "typeDe": "Reklamation einer Online-Bestellung",
        "promptAr": "طلبت سمّاعات بلوتوث من متجر أونلاين قبل أسبوع. وصلت اليوم لكنّها لا تشتغل أصلاً. اكتب رسالة شكوى تطلب فيها إعادة المال أو استبدال المنتج.",
        "promptDe": "Sie haben vor einer Woche Bluetooth-Kopfhörer in einem Online-Shop bestellt. Heute sind sie angekommen, aber sie funktionieren nicht. Schreiben Sie eine Reklamation und fordern Sie Rückerstattung oder Ersatz.",
        "requirements": [
          "اذكر رقم الطلب وتاريخه",
          "صف العطل بدقّة",
          "اطلب حلّاً واضحاً (استرداد/استبدال)",
          "حدّد إطاراً زمنيّاً للردّ"
        ],
        "wordCount": "حوالي 90-100 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "سمّاعات بلوتوث",
        "usefulPhrases": [
          {
            "de": "mit großem Bedauern muss ich Ihnen mitteilen, dass ...",
            "ar": "مع الأسف الشديد، يجب أن أخبركم أنّ..."
          },
          {
            "de": "meine Bestellnummer lautet ...",
            "ar": "رقم طلبي هو..."
          },
          {
            "de": "der Artikel funktioniert leider nicht.",
            "ar": "المنتج لا يعمل للأسف."
          },
          {
            "de": "Ich bitte um Rückerstattung des Kaufpreises.",
            "ar": "أرجو استرداد ثمن الشراء."
          },
          {
            "de": "Alternativ erwarte ich Ersatz innerhalb von ... Tagen.",
            "ar": "كبديل، أتوقّع منتجاً بديلاً خلال..."
          },
          {
            "de": "Bitte teilen Sie mir mit, wie wir verfahren sollen.",
            "ar": "أرجو إخباري بالخطوات التالية."
          }
        ],
        "sampleAnswerNotes": [
          "كن واضحاً في وصف العطل (لا يشحن / لا يصدر صوت).",
          "استخدم رقم الطلب بدقّة — مفتاح الردّ السريع."
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nmit großem Bedauern muss ich mich über Ihre Lieferung beschweren. Meine Bestellnummer lautet B-2025-09812 und wurde am 15. März aufgegeben.\n\nHeute sind die Bluetooth-Kopfhörer angekommen, jedoch lassen sie sich überhaupt nicht einschalten. Ich habe sie mehrere Stunden geladen, aber das Gerät reagiert nicht. Offensichtlich liegt ein Defekt vor.\n\nIch bitte Sie höflich um eine Rückerstattung des vollen Kaufpreises (89,99 €) auf mein ursprüngliches Konto. Alternativ akzeptiere ich auch einen kostenlosen Ersatz innerhalb von 7 Tagen.\n\nBitte teilen Sie mir bis Ende der Woche mit, wie wir verfahren sollen, damit ich die defekte Ware zurücksenden kann.\n\nMit freundlichen Grüßen,\nOmar Aziz"
      },
      {
        "id": "schreiben-8-3",
        "taskNumber": 3,
        "typeAr": "دعوة صديق لحفل ميلاد",
        "typeDe": "Einladung zum Geburtstag",
        "promptAr": "سيكون عيد ميلادك السبت القادم في البيت. اكتب رسالة لصديقك تدعوه للحفل.",
        "promptDe": "Am kommenden Samstag haben Sie Geburtstag und feiern zu Hause. Schreiben Sie Ihrem Freund eine E-Mail und laden Sie ihn ein.",
        "requirements": [
          "ابدأ بصيغة شخصيّة وأخبره بالمناسبة",
          "حدّد مكان وزمان وموضوع الحفل",
          "اطلب منه أن يحضر شيئاً (مشروب/سلطة)",
          "اطلب التأكيد قبل الجمعة"
        ],
        "wordCount": "حوالي 70-80 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "حفل عيد ميلاد",
        "usefulPhrases": [
          {
            "de": "Hallo Karim,",
            "ar": "مرحباً كريم،"
          },
          {
            "de": "wie geht es dir? Mir geht es super!",
            "ar": "كيف حالك؟ أنا بخير جداً!"
          },
          {
            "de": "am Samstag ist mein Geburtstag und ich feiere zu Hause.",
            "ar": "السبت عيد ميلادي وأحتفل في البيت."
          },
          {
            "de": "Es geht um 19:00 Uhr los.",
            "ar": "يبدأ الحفل الساعة 19."
          },
          {
            "de": "Bring bitte ... mit, wenn du magst.",
            "ar": "أحضر معك... من فضلك."
          },
          {
            "de": "Bitte sag mir Bescheid, ob du kommst.",
            "ar": "أخبرني إذا كنت ستأتي."
          },
          {
            "de": "Ich freue mich riesig auf dich!",
            "ar": "أتطلّع لرؤيتك بشدّة!"
          }
        ],
        "sampleAnswerNotes": [
          "استخدم لهجة ودودة \"du\" — دعوة بين أصدقاء.",
          "حدّد التاريخ والوقت بوضوح."
        ],
        "sampleAnswer": "Hallo Karim,\n\nwie geht's dir? Mir geht es super, denn ich habe großartige Neuigkeiten: Am Samstag, dem 22. März, habe ich endlich Geburtstag! Ich feiere bei mir zu Hause (Hauptstraße 17, 3. Stock).\n\nEs geht um 19:00 Uhr los, und es gibt Pizza, Musik und natürlich Kuchen. Wenn du magst, bring bitte einen Salat oder ein paar Getränke mit – wir teilen das wie immer.\n\nBitte sag mir bis Freitag Bescheid, ob du dabei bist. Ich freue mich riesig, dich zu sehen!\n\nLiebe Grüße,\nLina"
      }
    ]
  },
  {
    "id": "schreiben-9",
    "title": "نموذج Schreiben رقم 9 — مواقف عمل وسكن",
    "description": "ثلاث مهام: تقديم لتدريب، شكوى للمؤجّر عن العفن، طلب يوم إجازة.",
    "tasks": [
      {
        "id": "schreiben-9-1",
        "taskNumber": 1,
        "typeAr": "طلب تدريب (Praktikum) في شركة",
        "typeDe": "Bewerbung um ein Praktikum",
        "promptAr": "رأيت إعلاناً عن تدريب صيفي مدّته 6 أسابيع في شركة هندسة. اكتب رسالة تقديم قصيرة.",
        "promptDe": "Sie haben eine Anzeige für ein 6-wöchiges Sommerpraktikum in einer Ingenieursfirma gesehen. Schreiben Sie eine kurze Bewerbung.",
        "requirements": [
          "اذكر مصدر إعلان التدريب",
          "اشرح من تكون ولماذا أنت مهتمّ",
          "اذكر مهارة أو خبرة سابقة (واحدة)",
          "اطلب موعد مقابلة"
        ],
        "wordCount": "حوالي 90-100 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "تقديم وظيفة",
        "usefulPhrases": [
          {
            "de": "mit großem Interesse habe ich Ihre Anzeige auf ... gelesen.",
            "ar": "قرأت إعلانكم باهتمام كبير على..."
          },
          {
            "de": "hiermit bewerbe ich mich um ein Praktikum als ...",
            "ar": "بهذا أتقدّم لتدريب كـ..."
          },
          {
            "de": "Ich studiere derzeit ... im ... Semester.",
            "ar": "أدرس حالياً... في الفصل..."
          },
          {
            "de": "Besonders interessiert mich Ihr Bereich ...",
            "ar": "يهمّني خصوصاً مجالكم..."
          },
          {
            "de": "Erste Erfahrungen habe ich bereits bei ... gesammelt.",
            "ar": "اكتسبت خبرة أوّليّة في..."
          },
          {
            "de": "Über die Möglichkeit zu einem Vorstellungsgespräch würde ich mich sehr freuen.",
            "ar": "سأكون ممتنّاً لفرصة المقابلة."
          }
        ],
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Anzeige auf der Website \"Praktikum.info\" gelesen. Hiermit bewerbe ich mich um das ausgeschriebene 6-wöchige Praktikum als Ingenieurassistent.\n\nIch studiere derzeit Maschinenbau im 4. Semester an der TU Berlin und suche eine praktische Erfahrung im Sommer 2025. Besonders interessiert mich Ihr Bereich der erneuerbaren Energien, da ich meine Bachelorarbeit dazu plane.\n\nErste Erfahrungen habe ich bereits in einem 3-monatigen Werkstudentenjob bei einer kleineren Firma gesammelt, wo ich technische Zeichnungen mit AutoCAD erstellt habe.\n\nÜber die Möglichkeit zu einem Vorstellungsgespräch würde ich mich sehr freuen.\n\nMit freundlichen Grüßen,\nTarek Ibrahim"
      },
      {
        "id": "schreiben-9-2",
        "taskNumber": 2,
        "typeAr": "شكوى للمؤجّر عن عفن (Schimmel) في الحمّام",
        "typeDe": "Beschwerde beim Vermieter wegen Schimmel",
        "promptAr": "منذ شهر ظهر عفن (Schimmel) كبير على جدار حمّامك. حاولت الاتّصال بالمؤجّر مرّتين بدون ردّ. اكتب رسالة رسميّة.",
        "promptDe": "Seit einem Monat zeigt sich an Ihrer Badezimmerwand großer Schimmel. Sie haben Ihren Vermieter zweimal angerufen, aber keine Antwort bekommen. Schreiben Sie einen formellen Brief.",
        "requirements": [
          "اذكر عنوان الشقّة وتاريخ ظهور المشكلة",
          "صف العفن بدقّة (مكانه/حجمه)",
          "اذكر المحاولات السابقة للتواصل",
          "اطلب تصليحاً عاجلاً وتلميحاً لتخفيض الإيجار (Mietminderung)"
        ],
        "wordCount": "حوالي 100-120 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "حمّام",
        "usefulPhrases": [
          {
            "de": "hiermit teile ich Ihnen mit, dass ...",
            "ar": "بهذا أبلغكم أنّ..."
          },
          {
            "de": "in der Wohnung ... ist ein erheblicher Mangel aufgetreten.",
            "ar": "في الشقّة... ظهر عيب كبير."
          },
          {
            "de": "an der Wand des Badezimmers hat sich ein großer Schimmelfleck gebildet.",
            "ar": "على جدار الحمّام تكوّنت بقعة عفن كبيرة."
          },
          {
            "de": "der Schimmel breitet sich täglich weiter aus.",
            "ar": "العفن يتمدّد يوميّاً."
          },
          {
            "de": "Ich habe Sie bereits zweimal telefonisch zu erreichen versucht.",
            "ar": "حاولت الاتّصال هاتفيّاً مرّتين بدون نتيجة."
          },
          {
            "de": "Ich fordere Sie auf, den Schaden innerhalb von ... Tagen zu beheben.",
            "ar": "أطالبكم بإصلاح الضرر خلال... يوماً."
          },
          {
            "de": "Andernfalls behalte ich mir eine Mietminderung vor.",
            "ar": "وإلّا فسأحتفظ بحقّ تخفيض الإيجار."
          }
        ],
        "sampleAnswer": "Sehr geehrter Herr Müller,\n\nhiermit teile ich Ihnen mit, dass in der von mir gemieteten Wohnung in der Goethestraße 24, 1. Stock, ein erheblicher Mangel aufgetreten ist.\n\nSeit etwa einem Monat hat sich an der Wand des Badezimmers (neben der Dusche) ein großer Schimmelfleck gebildet, der mittlerweile etwa 50×60 cm groß ist und sich täglich weiter ausbreitet. Der Geruch ist sehr unangenehm und ich befürchte gesundheitliche Folgen für meine Familie, besonders für meinen 4-jährigen Sohn.\n\nIch habe Sie bereits am 5. und 12. März telefonisch zu erreichen versucht, leider ohne Erfolg.\n\nIch fordere Sie hiermit schriftlich auf, den Schaden innerhalb von 14 Tagen fachgerecht zu beheben. Andernfalls werde ich eine angemessene Mietminderung von 20% vornehmen, wie es das Mietrecht vorsieht.\n\nMit freundlichen Grüßen,\nFamilie Khaled"
      },
      {
        "id": "schreiben-9-3",
        "taskNumber": 3,
        "typeAr": "طلب يوم إجازة من المدير",
        "typeDe": "Urlaubsantrag beim Chef",
        "promptAr": "تحتاج يوماً إجازة لحضور جلسة مهمّة في Bürgeramt. اكتب رسالة قصيرة لمديرك.",
        "promptDe": "Sie brauchen einen Urlaubstag für einen wichtigen Termin beim Bürgeramt. Schreiben Sie eine kurze E-Mail an Ihren Chef.",
        "requirements": [
          "اشرح الحاجة بإيجاز",
          "حدّد التاريخ المطلوب",
          "اقترح تأجيل/تغطية المهامّ",
          "اطلب الموافقة"
        ],
        "wordCount": "حوالي 60-70 كلمة",
        "imageUrl": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=70",
        "imageAlt": "مكتب",
        "usefulPhrases": [
          {
            "de": "Sehr geehrter Herr ... / Sehr geehrte Frau ...,",
            "ar": "سيدي/سيدتي المحترم/ة،"
          },
          {
            "de": "hiermit beantrage ich für den ... einen Tag Urlaub.",
            "ar": "بهذا أطلب يوم إجازة بتاريخ..."
          },
          {
            "de": "der Grund ist ein verbindlicher Termin bei ...",
            "ar": "السبب موعد إلزامي لدى..."
          },
          {
            "de": "Meine Aufgaben werde ich vorher abschließen.",
            "ar": "سأكمل مهامّي قبل ذلك."
          },
          {
            "de": "Frau / Herr ... vertritt mich an diesem Tag.",
            "ar": "السيد/ة... ستغطّي مكاني."
          },
          {
            "de": "Über Ihre Genehmigung wäre ich sehr dankbar.",
            "ar": "سأكون ممتنّاً لموافقتكم."
          }
        ],
        "sampleAnswer": "Sehr geehrter Herr Becker,\n\nhiermit beantrage ich für den 28. März einen Tag Urlaub. Der Grund ist ein verbindlicher Termin beim Bürgeramt zur Verlängerung meines Aufenthaltstitels, der nicht verschoben werden kann.\n\nMeine laufenden Aufgaben werde ich vorher vollständig abschließen, und Frau Hoffmann hat zugesagt, dringende E-Mails an diesem Tag zu beantworten.\n\nÜber Ihre Genehmigung wäre ich sehr dankbar.\n\nMit freundlichen Grüßen,\nSara Halabi"
      }
    ]
  }
];

export const sprechenParts: SprechenPart[] = [
  {
    "id": "sprechen-teil-1",
    "partNumber": 1,
    "titleAr": "الجزء 1 – التخطيط المشترك (Gemeinsam etwas planen)",
    "titleDe": "Gemeinsam etwas planen",
    "descriptionAr": "تتحدث مع شريك/ة في الامتحان وتخططان معاً شيئاً (رحلة، هدية، حفلة…). مدتها 3 دقائق تقريباً. يجب أن تقترح، تسأل رأيه/ها، تتفق، وتنهي الخطة.",
    "instructionsDe": "Sie und Ihr Partner planen zusammen eine Aktivität. Sprechen Sie über Datum, Ort, Aktivitäten, Transport usw.",
    "scenarios": [
      {
        "id": "planen-1",
        "titleAr": "التخطيط لعيد ميلاد الأستاذ في الصف",
        "topicDe": "Sie planen den Geburtstag Ihres Deutschlehrers in der Sprachschule.",
        "imageHints": [
          "ما اليوم والوقت؟ Wann?",
          "من يأتي؟ Wer kommt?",
          "ماذا نأكل / نشرب؟ Essen und Trinken?",
          "ماذا يكون الهدية؟ Geschenk?",
          "من يشتري ماذا؟ Wer kauft was?"
        ],
        "suggestedStructure": [
          {
            "label": "اقتراح",
            "phrases": [
              "Ich schlage vor, dass wir … machen.",
              "Was hältst du davon, …?",
              "Wir könnten zum Beispiel …"
            ]
          },
          {
            "label": "سؤال الرأي",
            "phrases": [
              "Wie findest du das?",
              "Bist du einverstanden?",
              "Was meinst du?"
            ]
          },
          {
            "label": "الموافقة / الرفض",
            "phrases": [
              "Das ist eine gute Idee.",
              "Ich bin einverstanden.",
              "Ich finde, das ist keine so gute Idee, weil …",
              "Hmm, das weiß ich nicht. Vielleicht lieber …"
            ]
          },
          {
            "label": "الإنهاء",
            "phrases": [
              "Gut, dann machen wir es so.",
              "Also, wir haben jetzt alles geplant.",
              "Ich freue mich auf die Feier."
            ]
          }
        ],
        "sampleDialog": [
          {
            "speaker": "A",
            "textDe": "Hallo! Wir sollen den Geburtstag von Herrn Meier zusammen planen. Hast du schon eine Idee?",
            "textAr": "مرحباً! علينا تخطيط عيد ميلاد السيد ماير سوياً. هل عندك فكرة؟"
          },
          {
            "speaker": "B",
            "textDe": "Ja, ich schlage vor, dass wir am Freitag nach dem Unterricht im Kursraum eine kleine Feier machen. Wie findest du das?"
          },
          {
            "speaker": "A",
            "textDe": "Das ist eine gute Idee. Ich glaube, alle können bleiben. Was machen wir mit dem Essen?"
          },
          {
            "speaker": "B",
            "textDe": "Wir könnten alle etwas mitbringen. Ich mache einen arabischen Kuchen. Und du?"
          },
          {
            "speaker": "A",
            "textDe": "Ich bringe Getränke, Saft und Wasser. Kein Alkohol, ok?"
          },
          {
            "speaker": "B",
            "textDe": "Natürlich, kein Alkohol. Und ein Geschenk?"
          },
          {
            "speaker": "A",
            "textDe": "Ich schlage vor, wir kaufen ein Buch über Berlin. Er mag die Stadt sehr."
          },
          {
            "speaker": "B",
            "textDe": "Super Idee! Wer kauft das Buch?"
          },
          {
            "speaker": "A",
            "textDe": "Ich kann das morgen machen. Du sammelst das Geld, ok?"
          },
          {
            "speaker": "B",
            "textDe": "Alles klar. Dann haben wir jetzt alles geplant. Ich freue mich!"
          }
        ]
      },
      {
        "id": "planen-2",
        "titleAr": "التخطيط لرحلة نهاية أسبوع",
        "topicDe": "Sie planen mit einem Freund / einer Freundin einen Wochenendausflug.",
        "imageHints": [
          "الوجهة؟",
          "المواصلات؟",
          "الإقامة؟",
          "الأنشطة؟",
          "الميزانية؟"
        ],
        "suggestedStructure": [
          {
            "label": "اقتراح وجهة",
            "phrases": [
              "Ich würde gern nach … fahren.",
              "Wie wäre es mit …?"
            ]
          },
          {
            "label": "المواصلات",
            "phrases": [
              "Wir könnten mit dem Zug / Auto fahren.",
              "Mit dem 49-Euro-Ticket ist das günstig."
            ]
          },
          {
            "label": "الإقامة",
            "phrases": [
              "Wir können in einem Hostel schlafen.",
              "Ein Hotel ist zu teuer.",
              "Ich kenne eine günstige Ferienwohnung."
            ]
          }
        ]
      },
      {
        "id": "planen-3",
        "titleAr": "التخطيط لحضور دورة ألمانية معاً",
        "topicDe": "Sie möchten zusammen einen Deutschkurs besuchen.",
        "suggestedStructure": [
          {
            "label": "متى وأين",
            "phrases": [
              "Wann passt dir der Kurs?",
              "Welche Schule ist nah bei dir?"
            ]
          },
          {
            "label": "التكلفة",
            "phrases": [
              "Wie viel kostet der Kurs?",
              "Ich kann bis … Euro pro Monat zahlen."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sprechen-teil-2",
    "partNumber": 2,
    "titleAr": "الجزء 2 – تقديم موضوع (Präsentation)",
    "titleDe": "Ein Thema präsentieren",
    "descriptionAr": "تقدّم موضوعاً لمدة 3-4 دقائق. يوجد 5 شرائح (Folien): مقدمة - الوضع في بلدك - الوضع في ألمانيا - إيجابيات وسلبيات - رأيي الشخصي / الخاتمة. ثم يسأل الممتحن أو الشريك سؤال أو سؤالين.",
    "scenarios": [
      {
        "id": "praes-1",
        "titleAr": "الموضوع: وسائل التواصل الاجتماعي",
        "topicDe": "Thema: Soziale Medien",
        "imageUrl": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "هاتف مع أيقونات وسائل التواصل",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute möchte ich über soziale Medien sprechen.",
              "Soziale Medien sind heute sehr wichtig im Alltag."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "In meinem Heimatland Syrien nutzen viele Leute WhatsApp und Facebook.",
              "Meine Familie kommuniziert hauptsächlich über WhatsApp."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland sind Instagram und YouTube besonders bei jungen Menschen beliebt.",
              "Viele ältere Menschen nutzen eher WhatsApp und E-Mail."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Ein Vorteil ist, dass man mit der Familie im Ausland in Kontakt bleiben kann.",
              "Ein Nachteil ist, dass man zu viel Zeit mit dem Handy verbringt.",
              "Außerdem gibt es viele Fake News."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, soziale Medien sind nützlich, wenn man sie richtig benutzt.",
              "Wichtig ist, nicht stundenlang vor dem Bildschirm zu sitzen."
            ]
          }
        ],
        "sampleMonolog": "Hallo, mein Name ist Ali und heute möchte ich euch etwas über soziale Medien erzählen.\n\nSoziale Medien sind heute sehr wichtig im Alltag. Fast alle jungen Leute benutzen mindestens eine App wie WhatsApp, Instagram oder Facebook.\n\nIn meinem Heimatland Syrien nutzen viele Leute vor allem WhatsApp und Facebook. Meine Familie kommuniziert mit mir jeden Tag über WhatsApp, weil wir uns leider nicht sehen können. Das hilft uns sehr.\n\nHier in Deutschland sind auch WhatsApp und Instagram sehr beliebt, besonders bei jungen Menschen. Ältere Leute nutzen eher E-Mail oder Facebook.\n\nEs gibt Vorteile und Nachteile. Ein Vorteil ist, dass man Kontakt zu Freunden und Familie im Ausland halten kann. Ein weiterer Vorteil ist, dass man viele Informationen schnell findet. Aber es gibt auch Nachteile: Manche Menschen verbringen zu viel Zeit am Handy und schlafen schlecht. Außerdem gibt es oft Fake News, und das ist gefährlich.\n\nMeiner Meinung nach sind soziale Medien nützlich, wenn wir sie richtig benutzen – nicht zu viel und mit kritischen Augen.\n\nVielen Dank für eure Aufmerksamkeit!",
        "followupQuestions": [
          "Wie viele Stunden pro Tag sind Sie auf dem Handy?",
          "Welche App finden Sie am nützlichsten?",
          "Was machen Sie gegen Fake News?"
        ]
      },
      {
        "id": "praes-2",
        "titleAr": "الموضوع: العمل في ألمانيا",
        "topicDe": "Thema: Arbeit in Deutschland",
        "imageUrl": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "فريق عمل في مكتب",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema ist Arbeit in Deutschland."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "In Syrien gibt es wenige Jobs wegen des Krieges."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland gibt es viele Jobs, aber man braucht oft einen Abschluss."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil: Gute Bezahlung und Arbeitsrechte.",
              "Nachteil: Man muss Deutsch gut sprechen."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich möchte gern einen Beruf lernen und in Deutschland arbeiten."
            ]
          }
        ],
        "sampleMonolog": "Guten Tag, heute spreche ich über Arbeit in Deutschland.\n\nIn meinem Heimatland Syrien war es vor dem Krieg möglich, leicht Arbeit zu finden. Aber heute ist die Situation schwierig – viele Menschen haben keinen Job.\n\nIn Deutschland ist die Situation anders. Es gibt viele offene Stellen, besonders im Handwerk, in der Pflege und in der IT. Aber man braucht oft einen Abschluss oder eine Ausbildung.\n\nDie Vorteile der Arbeit in Deutschland sind: gute Bezahlung, klare Arbeitsrechte, und man hat Krankenversicherung. Ein Nachteil ist, dass man gut Deutsch sprechen muss, sonst findet man keinen guten Job. Außerdem ist die Bürokratie kompliziert.\n\nMeine Meinung ist: Ich möchte gern eine Ausbildung machen, zum Beispiel als Krankenpfleger. Dann kann ich hier gut leben und meiner Familie helfen.\n\nVielen Dank!",
        "followupQuestions": [
          "Welchen Beruf möchten Sie lernen?",
          "Warum ist die Ausbildung wichtig?",
          "Was ist schwer für Ausländer auf dem Arbeitsmarkt?"
        ]
      },
      {
        "id": "praes-3",
        "titleAr": "الموضوع: الأكل الصحي",
        "imageUrl": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "طبق فواكه وخضار صحية",
        "topicDe": "Thema: Gesunde Ernährung",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute spreche ich über gesunde Ernährung."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "Bei uns ist das Essen frisch und selbst gekocht. Es gibt viel Gemüse und wenig Fast Food."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland essen viele Leute oft Fertiggerichte oder gehen in Imbissbuden."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil von Fertigessen: schnell und einfach.",
              "Nachteil: zu viel Zucker, Salz und Fett. Das macht krank."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, man sollte frisch kochen, wann immer man Zeit hat."
            ]
          }
        ]
      },
      {
        "id": "praes-4",
        "titleAr": "الموضوع: تعلم اللغة الألمانية",
        "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "كتب لتعلم اللغة",
        "topicDe": "Thema: Deutsch lernen",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema ist Deutsch lernen als Erwachsener."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "In Syrien lernt man in der Schule nur Arabisch und Englisch."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland braucht man die Sprache für Arbeit, Behörden und Alltag."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil: Deutsch öffnet viele Türen.",
              "Nachteil: Die Grammatik ist schwer, besonders die Artikel."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich rate jedem: schnell anfangen und jeden Tag üben."
            ]
          }
        ]
      },
      {
        "id": "praes-5",
        "titleAr": "الموضوع: السكن في ألمانيا",
        "topicDe": "Thema: Wohnen in Deutschland",
        "imageUrl": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "بيت في ألمانيا",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema heute ist \"Wohnen in Deutschland\"."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "In Syrien wohnen viele Familien in eigenen Häusern.",
              "Oft leben mehrere Generationen zusammen."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland mieten die meisten Leute eine Wohnung.",
              "Die Mieten sind in Großstädten sehr hoch.",
              "Eine Wohnung zu finden ist oft schwer."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil: Wohnungen sind oft modern und gut isoliert.",
              "Nachteil: Hohe Miete und viele Bewerbungen für eine Wohnung."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, der Staat sollte mehr Sozialwohnungen bauen."
            ]
          }
        ],
        "followupQuestions": [
          "Wo wohnen Sie aktuell?",
          "Was ist für Sie bei einer Wohnung am wichtigsten?"
        ]
      },
      {
        "id": "praes-6",
        "titleAr": "الموضوع: الصداقة في الإنترنت",
        "topicDe": "Thema: Freundschaft im Internet",
        "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "أشخاص يتواصلون عبر الكمبيوتر",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute spreche ich über Online-Freundschaften."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "Auch in Syrien lernen sich viele junge Leute über das Internet kennen."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland nutzen viele Apps wie Facebook oder Discord.",
              "Manche finden sogar ihren Lebenspartner online."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil: Man lernt Menschen aus aller Welt kennen.",
              "Nachteil: Manche Menschen sind nicht ehrlich."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich denke, echte Freundschaft braucht auch persönliche Treffen."
            ]
          }
        ]
      },
      {
        "id": "praes-7",
        "titleAr": "الموضوع: الرياضة",
        "topicDe": "Thema: Sport",
        "imageUrl": "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "أشخاص يمارسون الرياضة",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema ist \"Sport im Alltag\"."
            ]
          },
          {
            "label": "Folie 2 – In meinem Land",
            "phrases": [
              "In Syrien spielen viele junge Männer Fußball auf der Straße."
            ]
          },
          {
            "label": "Folie 3 – In Deutschland",
            "phrases": [
              "In Deutschland gibt es Sportvereine in fast jeder Stadt.",
              "Viele Leute joggen oder fahren Fahrrad."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteil: Sport ist gesund und man trifft neue Menschen.",
              "Nachteil: Vereine kosten Geld und brauchen Zeit."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, jeder sollte mindestens 30 Minuten am Tag aktiv sein."
            ]
          }
        ],
        "followupQuestions": [
          "Welche Sportart machen Sie?",
          "Wie oft treiben Sie Sport?"
        ]
      },
      {
        "id": "praes-8",
        "titleAr": "الموضوع: الإنترنت ووسائل التواصل",
        "topicDe": "Thema: Internet und soziale Netzwerke",
        "imageUrl": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "هاتف ووسائل تواصل",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute spreche ich über das Thema \"Internet und soziale Netzwerke\".",
              "Das ist ein wichtiges Thema, weil fast jeder es nutzt."
            ]
          },
          {
            "label": "Folie 2 – Persönliche Erfahrung",
            "phrases": [
              "Ich nutze WhatsApp und Instagram fast täglich.",
              "Vor allem für den Kontakt mit meiner Familie in Syrien.",
              "Ich verbringe etwa 2 Stunden pro Tag online."
            ]
          },
          {
            "label": "Folie 3 – In meinem Land",
            "phrases": [
              "In Syrien sind Facebook und WhatsApp am beliebtesten.",
              "Viele junge Leute folgen Influencern auf TikTok."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteile: schnelle Kommunikation, Informationen, Kontakt zu Freunden im Ausland.",
              "Nachteile: zu viel Bildschirmzeit, Datenschutz-Probleme, Fake News."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde soziale Netzwerke nützlich, aber wir sollten nicht zu viel Zeit damit verbringen.",
              "Besonders Kinder brauchen klare Regeln."
            ]
          }
        ],
        "followupQuestions": [
          "Welche App nutzen Sie am meisten?",
          "Glauben Sie, dass soziale Medien gefährlich sind?"
        ]
      },
      {
        "id": "praes-9",
        "titleAr": "الموضوع: الأكل الصحّي",
        "topicDe": "Thema: Gesunde Ernährung",
        "imageUrl": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "طعام صحي",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema heute ist \"gesunde Ernährung\".",
              "Gesundes Essen ist sehr wichtig für unser Leben."
            ]
          },
          {
            "label": "Folie 2 – Persönliche Erfahrung",
            "phrases": [
              "Früher habe ich oft Fast Food gegessen.",
              "Jetzt koche ich selbst und esse mehr Gemüse und Obst."
            ]
          },
          {
            "label": "Folie 3 – In meinem Land",
            "phrases": [
              "In Syrien essen wir viel frisches Gemüse, Olivenöl und Hülsenfrüchte.",
              "Mansaf, Kibbeh und Tabbouleh sind typische Gerichte.",
              "Wir essen weniger Tiefkühlessen als in Europa."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile (gesund essen)",
            "phrases": [
              "Vorteile: mehr Energie, weniger Krankheiten, besseres Gewicht.",
              "Nachteile: kostet Zeit zum Kochen und Bio-Produkte sind teurer."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, jeder sollte mindestens dreimal pro Woche selber kochen.",
              "Das ist gesünder und billiger als Fertiggerichte."
            ]
          }
        ],
        "followupQuestions": [
          "Was essen Sie zum Frühstück?",
          "Wie oft kochen Sie selbst?"
        ]
      },
      {
        "id": "praes-10",
        "titleAr": "الموضوع: تعلّم اللغات",
        "topicDe": "Thema: Sprachen lernen",
        "imageUrl": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "كتب وتعلم",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute spreche ich über \"Sprachen lernen\".",
              "Das ist für mich ein sehr persönliches Thema."
            ]
          },
          {
            "label": "Folie 2 – Persönliche Erfahrung",
            "phrases": [
              "Ich lerne Deutsch seit zwei Jahren.",
              "Am Anfang war es sehr schwer, besonders die Artikel und die Fälle.",
              "Jetzt kann ich mich im Alltag gut verständigen."
            ]
          },
          {
            "label": "Folie 3 – In meinem Land",
            "phrases": [
              "In Syrien lernen die meisten Schüler Englisch und Französisch.",
              "Deutsch wird leider selten unterrichtet."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteile: bessere Jobchancen, Reisen sind einfacher, neue Freunde.",
              "Nachteile: kostet viel Zeit und manchmal Geld für Kurse."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, jeder sollte mindestens zwei Sprachen sprechen können.",
              "Das öffnet viele Türen im Leben."
            ]
          }
        ],
        "followupQuestions": [
          "Welche Sprachen sprechen Sie?",
          "Was ist die beste Methode, eine Sprache zu lernen?"
        ]
      },
      {
        "id": "praes-11",
        "titleAr": "الموضوع: العمل من البيت (Homeoffice)",
        "topicDe": "Thema: Homeoffice",
        "imageUrl": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "مكتب منزلي",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Mein Thema heute ist \"Homeoffice\".",
              "Seit der Corona-Pandemie arbeiten viel mehr Menschen von zu Hause."
            ]
          },
          {
            "label": "Folie 2 – Persönliche Erfahrung",
            "phrases": [
              "Ich arbeite zwei Tage pro Woche im Homeoffice.",
              "Das spart mir Zeit und Geld für die Fahrt zur Arbeit."
            ]
          },
          {
            "label": "Folie 3 – In meinem Land",
            "phrases": [
              "In Syrien war Homeoffice vor 2020 fast unbekannt.",
              "Jetzt arbeiten manche Programmierer von zu Hause für ausländische Firmen."
            ]
          },
          {
            "label": "Folie 4 – Vor- und Nachteile",
            "phrases": [
              "Vorteile: flexibler Tagesablauf, weniger Stress, mehr Zeit für Familie.",
              "Nachteile: man fühlt sich isoliert, schwer abzuschalten, weniger Kontakt zu Kollegen."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde eine Mischung am besten: zwei bis drei Tage im Büro, der Rest zu Hause.",
              "So hat man Vorteile von beidem."
            ]
          }
        ],
        "followupQuestions": [
          "Würden Sie gerne im Homeoffice arbeiten?",
          "Was sind die größten Probleme?"
        ]
      },
      {
        "id": "praes-12",
        "titleAr": "الموضوع: العائلة والأطفال",
        "topicDe": "Thema: Familie und Kinder",
        "imageUrl": "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=70",
        "imageAlt": "عائلة",
        "suggestedStructure": [
          {
            "label": "Folie 1 – Einleitung",
            "phrases": [
              "Heute spreche ich über das Thema \"Familie\".",
              "Familie ist das wichtigste in meinem Leben."
            ]
          },
          {
            "label": "Folie 2 – Meine Familie",
            "phrases": [
              "Ich komme aus einer großen Familie mit vier Geschwistern.",
              "Wir sind sehr eng zusammen, auch wenn manche jetzt im Ausland leben."
            ]
          },
          {
            "label": "Folie 3 – In meinem Land",
            "phrases": [
              "In Syrien leben oft mehrere Generationen unter einem Dach.",
              "Die Großeltern helfen bei der Erziehung der Kinder.",
              "Familienfeste sind sehr wichtig (Hochzeiten, Eid…)."
            ]
          },
          {
            "label": "Folie 4 – Unterschied zu Deutschland",
            "phrases": [
              "In Deutschland leben Kinder oft weit weg von den Eltern.",
              "Kindergärten und Schulen sind sehr wichtig für die Erziehung."
            ]
          },
          {
            "label": "Folie 5 – Meine Meinung",
            "phrases": [
              "Ich finde, beide Modelle haben Vor- und Nachteile.",
              "Das wichtigste ist, dass die Kinder in einer warmen Atmosphäre aufwachsen."
            ]
          }
        ],
        "followupQuestions": [
          "Wie sieht Ihre Familie aus?",
          "Möchten Sie eines Tages Kinder haben?"
        ]
      }
    ]
  },
  {
    "id": "sprechen-teil-3",
    "partNumber": 3,
    "titleAr": "الجزء 3 – المناقشة (Feedback & Fragen)",
    "titleDe": "Über ein Thema sprechen / diskutieren",
    "descriptionAr": "بعد تقديم الموضوع، يسألك الشريك سؤالين، ثم تشكره وتعطيه تعليقاً قصيراً (feedback).",
    "scenarios": [
      {
        "id": "diskussion-1",
        "titleAr": "ردود بعد العرض",
        "suggestedStructure": [
          {
            "label": "استقبال الأسئلة",
            "phrases": [
              "Das ist eine gute Frage. Also, ich denke …",
              "Hmm, lass mich überlegen …",
              "Meiner Erfahrung nach …"
            ]
          },
          {
            "label": "إعطاء تعليق للشريك",
            "phrases": [
              "Deine Präsentation hat mir sehr gut gefallen.",
              "Besonders interessant fand ich, dass du über … gesprochen hast.",
              "Ich habe etwas Neues gelernt, nämlich …",
              "Vielen Dank für den spannenden Vortrag!"
            ]
          },
          {
            "label": "استلام التعليق",
            "phrases": [
              "Vielen Dank für das Feedback!",
              "Das freut mich sehr.",
              "Danke schön."
            ]
          }
        ],
        "usefulPhrases": [
          {
            "de": "Was denkst du dazu?",
            "ar": "ما رأيك في ذلك؟"
          },
          {
            "de": "Ich stimme dir zu.",
            "ar": "أوافقك الرأي."
          },
          {
            "de": "Da bin ich anderer Meinung.",
            "ar": "أنا أرى غير ذلك."
          },
          {
            "de": "Kannst du das erklären?",
            "ar": "هل يمكنك أن توضح؟"
          }
        ]
      }
    ]
  }
];

export const sprechenDialogs: SprechenDialog[] = [
  {
    "id": "grillparty",
    "titleAr": "🥩 التخطيط لحفلة شواء",
    "titleDe": "Eine Grillparty planen",
    "contextAr": "أنت وصديقك ستنظّمان حفلة شواء لأصدقائكما يوم السبت القادم. ناقشا التفاصيل (المكان، الطعام، المشروبات، الموسيقى).",
    "durationSec": 180,
    "opener": {
      "textDe": "Hallo! Wir wollen am Samstag eine Grillparty machen. Hast du eine Idee, wo wir das machen können?",
      "ar": "مرحباً! نريد إقامة حفلة شواء يوم السبت. هل لديك فكرة عن المكان؟"
    },
    "turns": [
      {
        "who": "partner",
        "textDe": "Wir könnten zu mir nach Hause kommen — ich habe einen großen Garten. Was meinst du?",
        "ar": "يمكننا أن نأتي إلى منزلي — لديّ حديقة كبيرة. ما رأيك؟"
      },
      {
        "who": "you",
        "textDe": "وافِق أو اقترح بديلاً (مثل حديقة عامة أو شاطئ).",
        "ar": "مثال: \"Das ist eine super Idee!\" أو \"Vielleicht wäre ein Park besser, weil…\""
      },
      {
        "who": "partner",
        "textDe": "Gut. Und was sollen wir besorgen? Fleisch, Brot, Salate?",
        "ar": "جيّد. وما الذي يجب أن نحضره؟ لحم، خبز، سلطات؟"
      },
      {
        "who": "you",
        "textDe": "اقترح ما تشتري أنت وما يشتري هو.",
        "ar": "مثال: \"Ich kaufe das Fleisch und die Getränke. Kannst du das Brot und die Salate mitbringen?\""
      },
      {
        "who": "partner",
        "textDe": "Klar! Und wie viele Leute kommen ungefähr? Ich muss wissen, wie viel ich kaufen soll.",
        "ar": "بالتأكيد! وكم شخصاً سيأتي تقريباً؟ يجب أن أعرف لأشتري الكميّة المناسبة."
      },
      {
        "who": "you",
        "textDe": "اقترح عدداً وفكّر في الميزانيّة.",
        "ar": "مثال: \"Ich denke, wir werden ungefähr 12 Personen sein. Pro Person rechne mit ca. 5 Euro für Fleisch.\""
      },
      {
        "who": "partner",
        "textDe": "Und Musik? Soll ich meine Bluetooth-Box mitbringen oder hast du eine bessere Idee?",
        "ar": "وماذا عن الموسيقى؟ هل أحضر مكبّر الصوت بلوتوث أم لديك فكرة أفضل؟"
      },
      {
        "who": "you",
        "textDe": "وافِق على المكبّر أو اقترح خياراً آخر.",
        "ar": "مثال: \"Ja, bring deine Box mit. Ich erstelle eine Playlist mit arabischer und deutscher Musik.\""
      },
      {
        "who": "partner",
        "textDe": "Perfekt. Wann sollen wir anfangen? Um 16 oder 18 Uhr?",
        "ar": "ممتاز. متى نبدأ؟ الساعة الرابعة أم السادسة عصراً؟"
      },
      {
        "who": "you",
        "textDe": "اختر الوقت واشرح السبب.",
        "ar": "مثال: \"Sechs Uhr ist besser, weil es dann nicht so heiß ist und alle nach der Arbeit kommen können.\""
      },
      {
        "who": "partner",
        "textDe": "Super! Dann ist alles klar. Ich freue mich auf Samstag!",
        "ar": "رائع! إذن كل شيء واضح. أتطلّع للسبت!"
      },
      {
        "who": "you",
        "textDe": "اختم بالاتّفاق وأبدِ سعادتك.",
        "ar": "مثال: \"Ich freue mich auch! Bis Samstag!\""
      }
    ],
    "closingTipAr": "في Teil 2 الفعلي، استخدم Konjunktiv II (könnten، wäre، würde) لتقديم الاقتراحات بأدب. تجنّب الإجابات بكلمة واحدة — أعطِ سبباً قصيراً مع كل اقتراح."
  },
  {
    "id": "ausflug",
    "titleAr": "🚌 التخطيط لرحلة ليوم واحد",
    "titleDe": "Einen Tagesausflug planen",
    "contextAr": "تخطّط مع زميلك لرحلة ليوم واحد مع زملاء العمل. ناقشا الوجهة، وسيلة النقل، الميزانية، والبرنامج.",
    "durationSec": 180,
    "opener": {
      "textDe": "Hi! Wir sollen einen Tagesausflug für unsere Kollegen organisieren. Wohin würdest du gerne fahren?",
      "ar": "مرحباً! علينا تنظيم رحلة يوم لزملائنا. أين تودّ الذهاب؟"
    },
    "turns": [
      {
        "who": "partner",
        "textDe": "Ich würde gerne nach Köln fahren — der Dom und die Altstadt sind super. Was hältst du davon?",
        "ar": "أودّ الذهاب إلى كولن — الكاتدرائيّة والحيّ القديم رائعان. ما رأيك؟"
      },
      {
        "who": "you",
        "textDe": "وافِق أو اقترح وجهة بديلة.",
        "ar": "مثال: \"Köln klingt gut, aber Düsseldorf wäre vielleicht günstiger. Was meinst du?\""
      },
      {
        "who": "partner",
        "textDe": "Gute Idee. Und wie kommen wir hin? Mit dem Auto, dem Zug oder dem Bus?",
        "ar": "فكرة جيّدة. وكيف نذهب؟ بالسيارة أم القطار أم الباص؟"
      },
      {
        "who": "you",
        "textDe": "اختر وسيلة النقل واذكر سبباً.",
        "ar": "مثال: \"Mit dem Zug ist am bequemsten, weil wir alle zusammen sitzen können.\""
      },
      {
        "who": "partner",
        "textDe": "Und um wie viel Uhr fahren wir los und wann kommen wir zurück?",
        "ar": "ومتى ننطلق ومتى نعود؟"
      },
      {
        "who": "you",
        "textDe": "اقترح أوقاتاً معقولة.",
        "ar": "مثال: \"Wir treffen uns um 8 Uhr am Bahnhof und kommen gegen 19 Uhr zurück.\""
      },
      {
        "who": "partner",
        "textDe": "Und das Mittagessen? Sollen wir ein Restaurant aussuchen oder Picknick mitbringen?",
        "ar": "والغداء؟ نختار مطعماً أم نأخذ معنا طعاماً؟"
      },
      {
        "who": "you",
        "textDe": "اختر واشرح.",
        "ar": "مثال: \"Picknick ist günstiger, aber im Restaurant haben wir mehr Auswahl. Ich schlage Restaurant vor.\""
      },
      {
        "who": "partner",
        "textDe": "Wie hoch ist unser Budget pro Person?",
        "ar": "ما الميزانيّة لكل شخص؟"
      },
      {
        "who": "you",
        "textDe": "اقترح رقماً معقولاً.",
        "ar": "مثال: \"Ich denke, 50 Euro pro Person reichen — Zugticket, Mittagessen und Eintritt.\""
      },
      {
        "who": "partner",
        "textDe": "Klingt gut. Schreibst du die Einladung an die Kollegen?",
        "ar": "يبدو جيّداً. هل تكتب الدعوة للزملاء؟"
      },
      {
        "who": "you",
        "textDe": "وافِق على المهمّة.",
        "ar": "مثال: \"Ja, ich schicke heute Abend eine Mail an alle.\""
      }
    ],
    "closingTipAr": "تذكّر: الفاحص يقيّم الحوار وليس الفكرة. حتى لو لم تعجبك الفكرة، تفاعل وأبدِ رأيك بأدب. لا تقاطع شريكك."
  },
  {
    "id": "umzugshilfe",
    "titleAr": "📦 ترتيب مساعدة في انتقال صديق",
    "titleDe": "Hilfe beim Umzug eines Freundes organisieren",
    "contextAr": "صديقكما المشترك سينقل سكنه السبت القادم. ناقشا كيف ستساعدانه (الوقت، السيارة، التغذية، تقسيم المهمّات).",
    "durationSec": 180,
    "opener": {
      "textDe": "Hallo! Hast du gehört? Tarek zieht am Samstag um. Sollen wir ihm beim Umzug helfen?",
      "ar": "مرحباً! هل سمعت؟ طارق سينتقل السبت. هل نساعده في النقل؟"
    },
    "turns": [
      {
        "who": "partner",
        "textDe": "Klar, gerne! Aber wann genau sollen wir kommen? Morgens oder am Nachmittag?",
        "ar": "بكل سرور! لكن متى نأتي بالضبط؟ صباحاً أم بعد الظهر؟"
      },
      {
        "who": "you",
        "textDe": "اقترح وقتاً معقولاً.",
        "ar": "مثال: \"Lieber morgens — so haben wir genug Zeit und Tarek kann nachmittags schon einrichten.\""
      },
      {
        "who": "partner",
        "textDe": "Stimmt. Und brauchen wir einen Transporter? Ich kann meinen Bruder fragen, ob er einen mietet.",
        "ar": "صحيح. وهل نحتاج شاحنة؟ أستطيع أن أطلب من أخي أن يستأجر واحدة."
      },
      {
        "who": "you",
        "textDe": "وافِق وقدّم اقتراحاً للتكلفة.",
        "ar": "مثال: \"Super, frag ihn bitte. Wir können die Mietkosten teilen.\""
      },
      {
        "who": "partner",
        "textDe": "Und wer kommt sonst noch mit? Es wäre besser, wenn wir mindestens 4 Personen sind.",
        "ar": "ومن سيأتي معنا؟ من الأفضل أن نكون على الأقل 4 أشخاص."
      },
      {
        "who": "you",
        "textDe": "اقترح أسماء أصدقاء يمكن الاتّصال بهم.",
        "ar": "مثال: \"Ich frage Layla und Omar. Du könntest Khaled fragen, oder?\""
      },
      {
        "who": "partner",
        "textDe": "Und das Essen? Sollen wir Pizza bestellen oder etwas selbst kochen?",
        "ar": "والطعام؟ نطلب بيتزا أم نطبخ شيئاً بأنفسنا؟"
      },
      {
        "who": "you",
        "textDe": "اختر واشرح بسرعة.",
        "ar": "مثال: \"Pizza ist einfacher — beim Umzug haben wir keine Zeit zum Kochen.\""
      },
      {
        "who": "partner",
        "textDe": "Was sollen wir für Tarek als kleines Einzugsgeschenk besorgen?",
        "ar": "ما الذي نحضره لطارق كهديّة دخول صغيرة؟"
      },
      {
        "who": "you",
        "textDe": "اقترح هديّة عمليّة.",
        "ar": "مثال: \"Ein Gutschein für IKEA wäre praktisch — er kann selbst aussuchen, was er braucht.\""
      },
      {
        "who": "partner",
        "textDe": "Perfekt. Dann schreibe ich Tarek, dass wir ab 8 Uhr da sind.",
        "ar": "ممتاز. إذن سأكتب لطارق أنّنا سنكون عنده من الساعة 8."
      },
      {
        "who": "you",
        "textDe": "اختم وأبدِ شكرك.",
        "ar": "مثال: \"Cool, danke fürs Organisieren! Bis Samstag dann.\""
      }
    ],
    "closingTipAr": "استخدم عبارات التفاوض: \"Wir könnten…\"، \"Wäre es möglich, dass…\"، \"Ich schlage vor, dass…\"، \"Was hältst du davon, wenn wir…?\""
  }
];
