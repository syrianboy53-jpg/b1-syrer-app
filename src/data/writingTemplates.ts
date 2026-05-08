export interface WritingTemplate {
  id: number;
  titleDE: string;
  titleAR: string;
  category: string;
  template: string;
  tips: string[];
}

export const writingTemplates: WritingTemplate[] = [
  {
    id: 1,
    titleDE: 'Krankmeldung',
    titleAR: 'إبلاغ عن مرض',
    category: 'work',
    template: `Sehr geehrte Damen und Herren,

hiermit möchte ich Ihnen mitteilen, dass ich leider seit dem [Datum] krank bin und deshalb nicht zur Arbeit / zum Kurs kommen kann.

Ich war beim Arzt und habe eine Krankmeldung bekommen. Ich schicke Ihnen die Krankmeldung per Post.

Voraussichtlich bin ich bis zum [Datum] krankgeschrieben.

Mit freundlichen Grüßen
[Ihr Name]`,
    tips: [
      'اذكر التاريخ بدقة',
      'أرفق الكرانكملدونغ مع الرسالة',
      'أخبرهم متى تتوقع العودة',
    ],
  },
  {
    id: 2,
    titleDE: 'Termin absagen',
    titleAR: 'إلغاء موعد',
    category: 'appointment',
    template: `Sehr geehrte Damen und Herren,

leider muss ich meinen Termin am [Datum] um [Uhrzeit] absagen, da ich an diesem Tag [Grund] habe.

Könnten Sie mir bitte einen neuen Termin geben? Am besten passt es mir am [Tag] oder [Tag].

Ich bitte um Verständnis und bedanke mich im Voraus.

Mit freundlichen Grüßen
[Ihr Name]`,
    tips: [
      'ألغِ الموعد مبكراً قدر الإمكان',
      'اقترح مواعيد بديلة',
      'اذكر السبب باختصار',
    ],
  },
  {
    id: 3,
    titleDE: 'Wohnungssuche',
    titleAR: 'البحث عن شقة',
    category: 'housing',
    template: `Sehr geehrte Damen und Herren,

ich habe Ihre Anzeige für die [X]-Zimmer-Wohnung in [Ort] gelesen und interessiere mich sehr dafür.

Ich bin [Alter] Jahre alt und arbeite als [Beruf] bei [Firma]. Mein monatliches Einkommen beträgt [Betrag] Euro.

Ich suche eine Wohnung ab [Datum]. Könnte ich die Wohnung besichtigen? Ich bin zeitlich flexibel.

Ich freue mich auf Ihre Antwort.

Mit freundlichen Grüßen
[Ihr Name]`,
    tips: [
      'اذكر معلوماتك الشخصية باختصار',
      'اذكر دخلك الشهري',
      'اسأل عن موعد للمشاهدة',
    ],
  },
  {
    id: 4,
    titleDE: 'Beschwerde schreiben',
    titleAR: 'كتابة شكوى',
    category: 'complaint',
    template: `Sehr geehrte Damen und Herren,

am [Datum] habe ich bei Ihnen [Produkt/Dienstleistung] gekauft/bestellt. Leider bin ich damit nicht zufrieden, weil [Grund].

Ich möchte Sie bitten, [was Sie möchten: Umtausch / Reparatur / Geld zurück].

Bitte antworten Sie mir bis zum [Datum]. Anbei finden Sie [Rechnung / Fotos / etc.].

Mit freundlichen Grüßen
[Ihr Name]`,
    tips: [
      'كن مهذباً حتى في الشكوى',
      'اذكر التاريخ ورقم الطلب',
      'حدد ما تريده بوضوح',
      'حدد مهلة للرد',
    ],
  },
  {
    id: 5,
    titleDE: 'Einladung zu einer Feier',
    titleAR: 'دعوة لحفلة',
    category: 'personal',
    template: `Liebe/r [Name],

ich möchte dich herzlich zu meiner [Geburtstagsfeier / Party / Feier] einladen!

Die Feier findet am [Datum] um [Uhrzeit] bei mir zu Hause / im Restaurant [Name] statt.

Die Adresse ist: [Adresse]

Es gibt Essen und Getränke. Bitte sag mir bis zum [Datum] Bescheid, ob du kommen kannst.

Ich freue mich auf dich!

Liebe Grüße
[Dein Name]`,
    tips: [
      'اذكر المكان والتاريخ والوقت',
      'اطلب التأكيد',
      'اذكر إذا كان هناك طعام',
    ],
  },
];
