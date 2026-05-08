export interface LebenQuestion {
  id: number;
  question: string;
  questionAr: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface LebenCategory {
  id: string;
  name: string;
  nameAr: string;
  icon?: string;
  count: number;
}

export const lebenCategories: LebenCategory[] = [
  { id: 'general', name: 'Allgemeine Fragen', nameAr: 'أسئلة عامة', icon: '📋', count: 300 },
  { id: 'baden', name: 'Baden-Wuerttemberg', nameAr: 'بادن فورتمبيرغ', icon: '🏔️', count: 10 },
  { id: 'bayern', name: 'Bayern', nameAr: 'بايرن', icon: '🏰', count: 10 },
  { id: 'berlin', name: 'Berlin', nameAr: 'برلين', icon: '🐻', count: 10 },
  { id: 'brandenburg', name: 'Brandenburg', nameAr: 'براندنبورغ', icon: '🌳', count: 10 },
  { id: 'bremen', name: 'Bremen', nameAr: 'بريمن', icon: '🗝️', count: 10 },
  { id: 'hamburg', name: 'Hamburg', nameAr: 'هامبورغ', icon: '⚓', count: 10 },
  { id: 'hessen', name: 'Hessen', nameAr: 'هيسن', icon: '🦁', count: 10 },
  { id: 'mecklenburg', name: 'Mecklenburg-Vorpommern', nameAr: 'مكلنبورغ', icon: '🌊', count: 10 },
  { id: 'niedersachsen', name: 'Niedersachsen', nameAr: 'ساكسونيا السفلى', icon: '🐴', count: 10 },
  { id: 'nrw', name: 'Nordrhein-Westfalen', nameAr: 'شمال الراين', icon: '⛪', count: 10 },
  { id: 'rheinland', name: 'Rheinland-Pfalz', nameAr: 'راينلاند بفالتس', icon: '🍷', count: 10 },
  { id: 'saarland', name: 'Saarland', nameAr: 'زارلاند', icon: '🏭', count: 10 },
  { id: 'sachsen', name: 'Sachsen', nameAr: 'ساكسونيا', icon: '🎵', count: 10 },
  { id: 'sachsenAnhalt', name: 'Sachsen-Anhalt', nameAr: 'ساكسونيا أنهالت', icon: '🏛️', count: 10 },
  { id: 'schleswig', name: 'Schleswig-Holstein', nameAr: 'شليسفيغ هولشتاين', icon: '🚢', count: 10 },
  { id: 'thueringen', name: 'Thueringen', nameAr: 'تورينغن', icon: '🌲', count: 10 },
];

export const lebenQuestions: LebenQuestion[] = [
  {
    id: 1,
    question: 'In Deutschland duerfen Menschen offen etwas gegen die Regierung sagen, weil ...',
    questionAr: 'في ألمانيا يحق للناس التعبير عن رأيهم ضد الحكومة، لأن ...',
    options: ['hier Religionsfreiheit gilt.', 'die Menschen Steuern zahlen.', 'die Menschen das Wahlrecht haben.', 'hier Meinungsfreiheit gilt.'],
    correctIndex: 3,
    explanation: 'حرية الرأي (Meinungsfreiheit) هي حق أساسي في الدستور الألماني المادة 5.',
    category: 'general',
  },
  {
    id: 2,
    question: 'In Deutschland koennen Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ... teilnimmt.',
    questionAr: 'في ألمانيا يمكن للوالدين حتى عمر 14 سنة أن يقرروا مشاركة طفلهم في حصة ...',
    options: ['Sportunterricht', 'Religionsunterricht', 'Kunstunterricht', 'Musikunterricht'],
    correctIndex: 1,
    explanation: 'الآباء يقررون مشاركة أطفالهم في حصة الدين حتى سن 14 عاماً.',
    category: 'general',
  },
  {
    id: 3,
    question: 'Deutschland ist ein Rechtsstaat. Was ist damit gemeint?',
    questionAr: 'ألمانيا دولة قانون. ماذا يعني ذلك؟',
    options: ['Alle Einwohner und der Staat muessen sich an die Gesetze halten.', 'Der Staat muss sich nicht an die Gesetze halten.', 'Nur Deutsche muessen die Gesetze befolgen.', 'Die Gesetze gelten nur fuer Erwachsene.'],
    correctIndex: 0,
    explanation: 'دولة القانون تعني أن الجميع يجب أن يلتزموا بالقوانين.',
    category: 'general',
  },
  {
    id: 4,
    question: 'Welches Recht gehoert zu den Grundrechten in Deutschland?',
    questionAr: 'أي حق ينتمي إلى الحقوق الأساسية في ألمانيا؟',
    options: ['Waffenbesitz', 'Faustrecht', 'Meinungsfreiheit', 'Selbstjustiz'],
    correctIndex: 2,
    explanation: 'حرية الرأي هي من الحقوق الأساسية في الدستور الألماني.',
    category: 'general',
  },
  {
    id: 5,
    question: 'Wahlen in Deutschland sind frei. Was bedeutet das?',
    questionAr: 'الانتخابات في ألمانيا حرة. ماذا يعني ذلك؟',
    options: ['Man kann nur eine Partei waehlen.', 'Alle Buerger muessen waehlen.', 'Der Wahlschein muss gezeigt werden.', 'Jeder kann frei entscheiden, ob er waehlen moechte.'],
    correctIndex: 3,
    explanation: 'انتخابات حرة تعني أن كل شخص يقرر بحرية إذا كان يريد أن ينتخب أم لا.',
    category: 'general',
  },
  {
    id: 6,
    question: 'Wie heisst die deutsche Verfassung?',
    questionAr: 'ما اسم الدستور الألماني؟',
    options: ['Volksgesetz', 'Bundesgesetz', 'Deutsches Gesetz', 'Grundgesetz'],
    correctIndex: 3,
    explanation: 'الدستور الألماني يُسمى القانون الأساسي (Grundgesetz).',
    category: 'general',
  },
  {
    id: 7,
    question: 'Welches Grundrecht ist in Artikel 1 des Grundgesetzes garantiert?',
    questionAr: 'أي حق أساسي مكفول في المادة 1 من الدستور؟',
    options: ['die Unantastbarkeit der Menschenwuerde', 'das Recht auf Leben', 'Religionsfreiheit', 'Meinungsfreiheit'],
    correctIndex: 0,
    explanation: 'المادة 1: كرامة الإنسان مصونة ولا يجوز المساس بها.',
    category: 'general',
  },
  {
    id: 8,
    question: 'Was steht nicht im Grundgesetz von Deutschland?',
    questionAr: 'ماذا لا يوجد في الدستور الألماني؟',
    options: ['Die Wuerde des Menschen ist unantastbar.', 'Alle Deutschen duerfen Waffen tragen.', 'Jeder Deutsche darf seine Meinung frei aeussern.', 'Alle sind vor dem Gesetz gleich.'],
    correctIndex: 1,
    explanation: 'حمل السلاح ليس حقاً دستورياً في ألمانيا.',
    category: 'general',
  },
  {
    id: 9,
    question: 'Welches Grundrecht gilt in Deutschland nur fuer Auslaender?',
    questionAr: 'أي حق أساسي يسري فقط على الأجانب في ألمانيا؟',
    options: ['Meinungsfreiheit', 'Religionsfreiheit', 'Asylrecht', 'Gleichheit vor dem Gesetz'],
    correctIndex: 2,
    explanation: 'حق اللجوء (Asylrecht) المادة 16a يسري فقط على الأجانب.',
    category: 'general',
  },
  {
    id: 10,
    question: 'Was ist mit dem deutschen Grundgesetz vereinbar?',
    questionAr: 'ما المتوافق مع الدستور الألماني؟',
    options: ['die Pruegelstrafe', 'die Folter', 'die Todesstrafe', 'keine dieser Strafen'],
    correctIndex: 3,
    explanation: 'لا عقوبة بدنية ولا تعذيب ولا إعدام في ألمانيا.',
    category: 'general',
  },
];
