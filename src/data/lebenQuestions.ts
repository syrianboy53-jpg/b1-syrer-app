// Auto-generated from b1-syrer.de website data
// Total: 460 Leben in Deutschland questions

export interface LebenQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export interface LebenCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const lebenCategories: LebenCategory[] = [
  {
    "id": "recht",
    "name": "Recht",
    "icon": "⚖️",
    "count": 43
  },
  {
    "id": "gesellschaft-und-familie",
    "name": "Gesellschaft und Familie",
    "icon": "👨‍👩‍👧‍👦",
    "count": 26
  },
  {
    "id": "staat",
    "name": "Staat",
    "icon": "🏛️",
    "count": 37
  },
  {
    "id": "politik",
    "name": "Politik",
    "icon": "🗳️",
    "count": 57
  },
  {
    "id": "wirtschaft",
    "name": "Wirtschaft",
    "icon": "💶",
    "count": 11
  },
  {
    "id": "bund-und-l-nder",
    "name": "Bund und Länder",
    "icon": "🇩🇪",
    "count": 13
  },
  {
    "id": "religion-und-kultur",
    "name": "Religion und Kultur",
    "icon": "🕌",
    "count": 12
  },
  {
    "id": "geschichte",
    "name": "Geschichte",
    "icon": "📜",
    "count": 70
  },
  {
    "id": "europa-und-welt",
    "name": "Europa und Welt",
    "icon": "🌍",
    "count": 19
  },
  {
    "id": "bildung-und-arbeit",
    "name": "Bildung und Arbeit",
    "icon": "📚",
    "count": 12
  },
  {
    "id": "baden-w-rttemberg",
    "name": "Baden-Württemberg",
    "icon": "🏔️",
    "count": 10
  },
  {
    "id": "bayern",
    "name": "Bayern",
    "icon": "🦁",
    "count": 10
  },
  {
    "id": "berlin",
    "name": "Berlin",
    "icon": "🐻",
    "count": 10
  },
  {
    "id": "brandenburg",
    "name": "Brandenburg",
    "icon": "🦅",
    "count": 10
  },
  {
    "id": "bremen",
    "name": "Bremen",
    "icon": "⚓",
    "count": 10
  },
  {
    "id": "hamburg",
    "name": "Hamburg",
    "icon": "🚢",
    "count": 10
  },
  {
    "id": "hessen",
    "name": "Hessen",
    "icon": "🏰",
    "count": 10
  },
  {
    "id": "mecklenburg-vorpommern",
    "name": "Mecklenburg-Vorpommern",
    "icon": "🌊",
    "count": 10
  },
  {
    "id": "niedersachsen",
    "name": "Niedersachsen",
    "icon": "🐴",
    "count": 10
  },
  {
    "id": "nordrhein-westfalen",
    "name": "Nordrhein-Westfalen",
    "icon": "⛪",
    "count": 10
  },
  {
    "id": "rheinland-pfalz",
    "name": "Rheinland-Pfalz",
    "icon": "🍷",
    "count": 10
  },
  {
    "id": "saarland",
    "name": "Saarland",
    "icon": "🏭",
    "count": 10
  },
  {
    "id": "sachsen",
    "name": "Sachsen",
    "icon": "🎵",
    "count": 10
  },
  {
    "id": "sachsen-anhalt",
    "name": "Sachsen-Anhalt",
    "icon": "🏰",
    "count": 10
  },
  {
    "id": "schleswig-holstein",
    "name": "Schleswig-Holstein",
    "icon": "⚓",
    "count": 10
  },
  {
    "id": "th-ringen",
    "name": "Thüringen",
    "icon": "🌲",
    "count": 10
  }
];

export const lebenQuestions: LebenQuestion[] = [
  {
    "id": 1,
    "question": "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    "options": [
      "hier Religionsfreiheit gilt.",
      "die Menschen Steuern zahlen.",
      "die Menschen das Wahlrecht haben.",
      "hier Meinungsfreiheit gilt."
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 2,
    "question": "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    "options": [
      "Geschichtsunterricht teilnimmt.",
      "Religionsunterricht teilnimmt.",
      "Politikunterricht teilnimmt.",
      "Sprachunterricht teilnimmt."
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 3,
    "question": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    "options": [
      "Alle Einwohnerinnen / Einwohner und der Staat müssen sich an die Gesetze halten.",
      "Der Staat muss sich nicht an die Gesetze halten.",
      "Nur Deutsche müssen die Gesetze befolgen.",
      "Die Gerichte machen die Gesetze."
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 4,
    "question": "Welches Recht gehört zu den Grundrechten in Deutschland?",
    "options": [
      "Waffenbesitz",
      "Faustrecht",
      "Meinungsfreiheit",
      "Selbstjustiz"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 5,
    "question": "Wahlen in Deutschland sind frei. Was bedeutet das?",
    "options": [
      "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin / einen bestimmten Kandidaten wählt.",
      "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
      "Die Wählerin / der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
      "Alle wahlberechtigten Personen müssen wählen."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 6,
    "question": "Wie heißt die deutsche Verfassung?",
    "options": [
      "Volksgesetz",
      "Bundesgesetz",
      "Deutsches Gesetz",
      "Grundgesetz"
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 7,
    "question": "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
    "options": [
      "Glaubens- und Gewissensfreiheit",
      "Unterhaltung",
      "Bildung und Arbeit",
      "Wohnung"
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 8,
    "question": "Was steht nicht im Grundgesetz von Deutschland?",
    "options": [
      "Die Würde des Menschen ist unantastbar.",
      "Alle sollen gleich viel Geld haben.",
      "Jeder Mensch darf seine Meinung sagen.",
      "Alle sind vor dem Gesetz gleich."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 9,
    "question": "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen / Ausländer? Das Grundrecht auf …",
    "options": [
      "Schutz der Familie",
      "Menschenwürde",
      "Asyl",
      "Meinungsfreiheit"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 10,
    "question": "Was ist mit dem deutschen Grundgesetz vereinbar?",
    "options": [
      "die Prügelstrafe",
      "die Folter",
      "die Todesstrafe",
      "die Geldstrafe"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 11,
    "question": "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
    "options": [
      "Grundgesetz",
      "Bundesverfassung",
      "Gesetzbuch",
      "Verfassungsvertrag"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 12,
    "question": "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
    "options": [
      "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
      "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
      "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
      "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen."
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 13,
    "question": "Im Parlament steht der Begriff 'Opposition' für …",
    "options": [
      "die regierenden Parteien.",
      "die Fraktion mit den meisten Abgeordneten.",
      "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
      "alle Abgeordneten, die nicht zu der Regierungspartei / den Regierungsparteien gehören."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 14,
    "question": "Meinungsfreiheit in Deutschland heißt, dass ich …",
    "options": [
      "Passanten auf der Straße beschimpfen darf.",
      "meine Meinung im Internet äußern kann.",
      "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.",
      "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 15,
    "question": "Was verbietet das deutsche Grundgesetz?",
    "options": [
      "Militärdienst",
      "Zwangsarbeit",
      "freie Berufswahl",
      "Arbeit im Ausland"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 16,
    "question": "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
    "options": [
      "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
      "bei Meinungsäußerungen über die Bundesregierung",
      "bei Diskussionen über Religionen",
      "bei Kritik am Staat"
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 17,
    "question": "Die deutschen Gesetze verbieten …",
    "options": [
      "Meinungsfreiheit der Einwohnerinnen und Einwohner.",
      "Petitionen der Bürgerinnen und Bürger.",
      "Versammlungsfreiheit der Einwohnerinnen und Einwohner.",
      "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat."
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 18,
    "question": "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
    "options": [
      "die Unantastbarkeit der Menschenwürde",
      "das Recht auf Leben",
      "Religionsfreiheit",
      "Meinungsfreiheit"
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 19,
    "question": "Was versteht man unter dem Recht der 'Freizügigkeit' in Deutschland?",
    "options": [
      "Man darf sich seinen Wohnort selbst aussuchen.",
      "Man kann seinen Beruf wechseln.",
      "Man darf sich für eine andere Religion entscheiden.",
      "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 20,
    "question": "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …",
    "options": [
      "tolerant.",
      "rechtsstaatlich orientiert.",
      "gesetzestreu.",
      "verfassungswidrig."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 21,
    "question": "Welches ist das Wappen der Bundesrepublik Deutschland?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 22,
    "question": "Was für eine Staatsform hat Deutschland?",
    "options": [
      "Monarchie",
      "Diktatur",
      "Republik",
      "Fürstentum"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 23,
    "question": "In Deutschland sind die meisten Erwerbstätigen …",
    "options": [
      "in kleinen Familienunternehmen beschäftigt.",
      "ehrenamtlich für ein Bundesland tätig.",
      "selbstständig mit einer eigenen Firma tätig.",
      "bei einer Firma oder Behörde beschäftigt."
    ],
    "correctIndex": 3,
    "category": "Wirtschaft"
  },
  {
    "id": 24,
    "question": "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    "options": [
      "14",
      "15",
      "16",
      "17"
    ],
    "correctIndex": 2,
    "category": "Bund und Länder"
  },
  {
    "id": 25,
    "question": "Was ist kein Bundesland der Bundesrepublik Deutschland?",
    "options": [
      "Elsass-Lothringen",
      "Nordrhein-Westfalen",
      "Mecklenburg-Vorpommern",
      "Sachsen-Anhalt"
    ],
    "correctIndex": 0,
    "category": "Bund und Länder"
  },
  {
    "id": 26,
    "question": "Deutschland ist …",
    "options": [
      "eine kommunistische Republik.",
      "ein demokratischer und sozialer Bundesstaat.",
      "eine kapitalistische und soziale Monarchie.",
      "ein sozialer und sozialistischer Bundesstaat."
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 27,
    "question": "Deutschland ist …",
    "options": [
      "ein sozialistischer Staat.",
      "ein Bundesstaat.",
      "eine Diktatur.",
      "eine Monarchie."
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 28,
    "question": "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
    "options": [
      "das Militär",
      "die Wirtschaft",
      "das wahlberechtigte Volk",
      "die Verwaltung"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 29,
    "question": "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
    "options": [
      "Löwe",
      "Adler",
      "Bär",
      "Pferd"
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 30,
    "question": "Was ist kein Merkmal unserer Demokratie?",
    "options": [
      "regelmäßige Wahlen",
      "Pressezensur",
      "Meinungsfreiheit",
      "verschiedene Parteien"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 31,
    "question": "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
    "options": [
      "Einheit.",
      "Koalition.",
      "Ministerium.",
      "Fraktion."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 32,
    "question": "Was ist keine staatliche Gewalt in Deutschland?",
    "options": [
      "Gesetzgebung",
      "Regierung",
      "Presse",
      "Rechtsprechung"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 33,
    "question": "Welche Aussage ist richtig? In Deutschland …",
    "options": [
      "sind Staat und Religionsgemeinschaften voneinander getrennt.",
      "bilden die Religionsgemeinschaften den Staat.",
      "ist der Staat abhängig von den Religionsgemeinschaften.",
      "bilden Staat und Religionsgemeinschaften eine Einheit."
    ],
    "correctIndex": 0,
    "category": "Religion und Kultur"
  },
  {
    "id": 34,
    "question": "Was ist Deutschland nicht?",
    "options": [
      "eine Demokratie",
      "ein Rechtsstaat",
      "eine Monarchie",
      "ein Sozialstaat"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 35,
    "question": "Womit finanziert der deutsche Staat die Sozialversicherung?",
    "options": [
      "Kirchensteuer",
      "Sozialabgaben",
      "Spendengeldern",
      "Vereinsbeiträgen"
    ],
    "correctIndex": 1,
    "category": "Wirtschaft"
  },
  {
    "id": 36,
    "question": "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
    "options": [
      "die Krankenversicherung",
      "die Autoversicherung",
      "die Gebäudeversicherung",
      "die Haftpflichtversicherung"
    ],
    "correctIndex": 0,
    "category": "Wirtschaft"
  },
  {
    "id": 37,
    "question": "Wie werden die Regierungschefinnen / Regierungschefs der meisten Bundesländer in Deutschland genannt?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Senatorin / Senator",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Bund und Länder"
  },
  {
    "id": 38,
    "question": "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
    "options": [
      "Staatenverbund.",
      "Bundesstaat.",
      "Staatenbund.",
      "Zentralstaat."
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 39,
    "question": "Was hat jedes deutsche Bundesland?",
    "options": [
      "eine eigene Außenministerin / einen eigenen Außenminister",
      "eine eigene Währung",
      "eine eigene Armee",
      "eine eigene Regierung"
    ],
    "correctIndex": 3,
    "category": "Bund und Länder"
  },
  {
    "id": 40,
    "question": "Mit welchen Worten beginnt die deutsche Nationalhymne?",
    "options": [
      "Völker, hört die Signale …",
      "Einigkeit und Recht und Freiheit …",
      "Freude schöner Götterfunken …",
      "Deutschland einig Vaterland …"
    ],
    "correctIndex": 1,
    "category": "Religion und Kultur"
  },
  {
    "id": 41,
    "question": "Warum gibt es in einer Demokratie mehr als eine Partei?",
    "options": [
      "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden",
      "damit Bestechung in der Politik begrenzt wird",
      "um politische Demonstrationen zu verhindern",
      "um wirtschaftlichen Wettbewerb anzuregen"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 42,
    "question": "Wer beschließt in Deutschland ein neues Gesetz?",
    "options": [
      "die Regierung",
      "das Parlament",
      "die Gerichte",
      "die Polizei"
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 43,
    "question": "Wann kann in Deutschland eine Partei verboten werden?",
    "options": [
      "wenn ihr Wahlkampf zu teuer ist",
      "wenn sie gegen die Verfassung kämpft",
      "wenn sie Kritik am Staatsoberhaupt äußert",
      "wenn ihr Programm eine neue Richtung vorschlägt"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 44,
    "question": "Wen kann man als Bürgerin / Bürger in Deutschland nicht direkt wählen?",
    "options": [
      "Abgeordnete des EU-Parlaments",
      "Die Bundespräsidentin / den Bundespräsidenten",
      "Landtagsabgeordnete",
      "Bundestagsabgeordnete"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 45,
    "question": "Zu welcher Versicherung gehört die Pflegeversicherung?",
    "options": [
      "Sozialversicherung",
      "Unfallversicherung",
      "Hausratsversicherung",
      "Haftpflicht- und Feuerversicherung"
    ],
    "correctIndex": 0,
    "category": "Wirtschaft"
  },
  {
    "id": 46,
    "question": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
    "options": [
      "Er baut Straßen und Schulen.",
      "Er verkauft Lebensmittel und Kleidung.",
      "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.",
      "Er produziert Autos und Busse."
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 47,
    "question": "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
    "options": [
      "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
      "Er zahlt Kindergeld.",
      "Er unterstützt Museen.",
      "Er fördert Sportlerinnen und Sportler."
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 48,
    "question": "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
    "options": [
      "der Bundesrat",
      "die Bundespräsidentin / der Bundespräsident",
      "die Bürgerversammlung",
      "die Regierung"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 49,
    "question": "Wer bestimmt in Deutschland die Schulpolitik?",
    "options": [
      "die Lehrer und Lehrerinnen",
      "die Bundesländer",
      "das Familienministerium",
      "die Universitäten"
    ],
    "correctIndex": 1,
    "category": "Bund und Länder"
  },
  {
    "id": 50,
    "question": "Die Wirtschaftsform in Deutschland nennt man …",
    "options": [
      "freie Zentralwirtschaft.",
      "soziale Marktwirtschaft.",
      "gelenkte Zentralwirtschaft.",
      "Planwirtschaft."
    ],
    "correctIndex": 1,
    "category": "Wirtschaft"
  },
  {
    "id": 51,
    "question": "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
    "options": [
      "Menschen sich kritisch über die Regierung äußern können.",
      "Bürger friedlich demonstrieren gehen dürfen.",
      "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
      "jemand ein Verbrechen begeht und deshalb verhaftet wird."
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 52,
    "question": "Was bedeutet 'Volkssouveränität'? Alle Staatsgewalt geht vom ...",
    "options": [
      "Volke aus.",
      "Bundestag aus.",
      "preußischen König aus.",
      "Bundesverfassungsgericht aus."
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 53,
    "question": "Was bedeutet 'Rechtsstaat' in Deutschland?",
    "options": [
      "Der Staat hat Recht.",
      "Es gibt nur rechte Parteien.",
      "Die Bürgerinnen und Bürger entscheiden über Gesetze.",
      "Der Staat muss die Gesetze einhalten."
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 54,
    "question": "Was ist keine staatliche Gewalt in Deutschland?",
    "options": [
      "Legislative",
      "Judikative",
      "Exekutive",
      "Direktive"
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 55,
    "question": "Was zeigt dieses Bild?",
    "options": [
      "den Bundestagssitz in Berlin",
      "das Bundesverfassungsgericht in Karlsruhe",
      "das Bundesratsgebäude in Berlin",
      "das Bundeskanzleramt in Berlin"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 56,
    "question": "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
    "options": [
      "Pfarramt",
      "Ordnungsamt",
      "Finanzamt",
      "Auswärtiges Amt"
    ],
    "correctIndex": 1,
    "category": "Bund und Länder"
  },
  {
    "id": 57,
    "question": "Wer wird meistens zur Präsidentin / zum Präsidenten des Deutschen Bundestages gewählt?",
    "options": [
      "die / der älteste Abgeordnete im Parlament",
      "die Ministerpräsidentin / der Ministerpräsident des größten Bundeslandes",
      "eine ehemalige Bundeskanzlerin / ein ehemaliger Bundeskanzler",
      "eine Abgeordnete / ein Abgeordneter der stärksten Fraktion"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 58,
    "question": "Wer ernennt in Deutschland die Ministerinnen / die Minister der Bundesregierung?",
    "options": [
      "die Präsidentin / der Präsident des Bundesverfassungsgerichtes",
      "die Bundespräsidentin / der Bundespräsident",
      "die Bundesratspräsidentin / der Bundesratspräsident",
      "die Bundestagspräsidentin / der Bundestagspräsident"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 59,
    "question": "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
    "options": [
      "vor etwa 300 Jahren",
      "vor etwa 700 Jahren",
      "vor etwa 1150 Jahren",
      "vor etwa 1700 Jahren"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 60,
    "question": "In Deutschland gehören der Bundestag und der Bundesrat zur …",
    "options": [
      "Exekutive.",
      "Legislative.",
      "Direktive.",
      "Judikative."
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 61,
    "question": "Was bedeutet 'Volkssouveränität'?",
    "options": [
      "Die Königin / der König herrscht über das Volk.",
      "Das Bundesverfassungsgericht steht über der Verfassung.",
      "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
      "Die Staatsgewalt geht vom Volke aus."
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 62,
    "question": "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
    "options": [
      "Kommunalwahl",
      "Landtagswahl",
      "Europawahl",
      "Bundestagswahl"
    ],
    "correctIndex": 1,
    "category": "Bund und Länder"
  },
  {
    "id": 63,
    "question": "Was gehört in Deutschland nicht zur Exekutive?",
    "options": [
      "die Polizei",
      "die Gerichte",
      "das Finanzamt",
      "die Ministerien"
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 64,
    "question": "Die Bundesrepublik Deutschland ist heute gegliedert in …",
    "options": [
      "vier Besatzungszonen.",
      "einen Oststaat und einen Weststaat.",
      "16 Kantone.",
      "Bund, Länder und Kommunen."
    ],
    "correctIndex": 3,
    "category": "Bund und Länder"
  },
  {
    "id": 65,
    "question": "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
    "options": [
      "Gesetze zu entwerfen.",
      "die Bundesregierung zu kontrollieren.",
      "die Bundeskanzlerin / den Bundeskanzler zu wählen.",
      "das Bundeskabinett zu bilden."
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 66,
    "question": "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
    "options": [
      "Berlin und München",
      "Hamburg und Essen",
      "Nürnberg und Stuttgart",
      "Worms und Speyer"
    ],
    "correctIndex": 0,
    "category": "Religion und Kultur"
  },
  {
    "id": 67,
    "question": "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
    "options": [
      "Verteidigungspolitik",
      "Außenpolitik",
      "Wirtschaftspolitik",
      "Schulpolitik"
    ],
    "correctIndex": 3,
    "category": "Bund und Länder"
  },
  {
    "id": 68,
    "question": "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
    "options": [
      "weil es in Deutschland nur staatliche Schulen gibt",
      "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen",
      "weil es in den Bundesländern verschiedene Schulen gibt",
      "weil es nach dem Grundgesetz seine Aufgabe ist"
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 69,
    "question": "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
    "options": [
      "Stadträte",
      "Landräte",
      "Gemeinden",
      "Bezirksämter"
    ],
    "correctIndex": 2,
    "category": "Bund und Länder"
  },
  {
    "id": 70,
    "question": "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin / des deutschen Bundespräsidenten?",
    "options": [
      "Sie / Er führt die Regierungsgeschäfte.",
      "Sie / Er kontrolliert die Regierungspartei.",
      "Sie / Er wählt die Ministerinnen / Minister aus.",
      "Sie / Er schlägt die Kanzlerin / den Kanzler zur Wahl vor."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 71,
    "question": "Wo hält sich die deutsche Bundeskanzlerin / der deutsche Bundeskanzler am häufigsten auf?",
    "options": [
      "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
      "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
      "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin / des Bundespräsidenten, um Staatsgäste zu empfangen.",
      "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden."
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 72,
    "question": "Wie heißt die jetzige Bundeskanzlerin / der jetzige Bundeskanzler von Deutschland?",
    "options": [
      "Gerhard Schröder",
      "Angela Merkel",
      "Ursula von der Leyen",
      "Friedrich Merz"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 73,
    "question": "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
    "options": [
      "CDU/CSU und AfD.",
      "Die Linke und Bündnis 90/Die Grünen.",
      "Bündnis 90/Die Grünen und SPD.",
      "Die Linke und CDU/CSU."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 74,
    "question": "Wie heißt das Parlament für ganz Deutschland?",
    "options": [
      "Bundesversammlung",
      "Volkskammer",
      "Bundestag",
      "Bundesgerichtshof"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 75,
    "question": "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
    "options": [
      "Frank-Walter Steinmeier",
      "Bärbel Bas",
      "Bodo Ramelow",
      "Joachim Gauck"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 76,
    "question": "Was bedeutet die Abkürzung CDU in Deutschland?",
    "options": [
      "Christliche Deutsche Union",
      "Club Deutscher Unternehmer",
      "Christlicher Deutscher Umweltschutz",
      "Christlich Demokratische Union"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 77,
    "question": "Was ist die Bundeswehr?",
    "options": [
      "die deutsche Polizei",
      "ein deutscher Hafen",
      "eine deutsche Bürgerinitiative",
      "die deutsche Armee"
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 78,
    "question": "Was bedeutet die Abkürzung SPD?",
    "options": [
      "Sozialistische Partei Deutschlands",
      "Sozialpolitische Partei Deutschlands",
      "Sozialdemokratische Partei Deutschlands",
      "Sozialgerechte Partei Deutschlands"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 79,
    "question": "Was bedeutet die Abkürzung FDP in Deutschland?",
    "options": [
      "Friedliche Demonstrative Partei",
      "Freie Deutschland Partei",
      "Führende Demokratische Partei",
      "Freie Demokratische Partei"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 80,
    "question": "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
    "options": [
      "Oberlandesgericht",
      "Amtsgericht",
      "Bundesverfassungsgericht",
      "Verwaltungsgericht"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 81,
    "question": "Wer wählt die Bundeskanzlerin / den Bundeskanzler in Deutschland?",
    "options": [
      "der Bundesrat",
      "die Bundesversammlung",
      "das Volk",
      "der Bundestag"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 82,
    "question": "Wer leitet das deutsche Bundeskabinett?",
    "options": [
      "die Bundestagspräsidentin / der Bundestagspräsident",
      "die Bundespräsidentin / der Bundespräsident",
      "die Bundesratspräsidentin / der Bundesratspräsident",
      "die Bundeskanzlerin / der Bundeskanzler"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 83,
    "question": "Wer wählt die deutsche Bundeskanzlerin / den deutschen Bundeskanzler?",
    "options": [
      "das Volk",
      "die Bundesversammlung",
      "der Bundestag",
      "die Bundesregierung"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 84,
    "question": "Welche Hauptaufgabe hat die deutsche Bundespräsidentin / der deutsche Bundespräsident? Sie/Er …",
    "options": [
      "regiert das Land.",
      "entwirft die Gesetze.",
      "repräsentiert das Land.",
      "überwacht die Einhaltung der Gesetze."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 85,
    "question": "Wer bildet den deutschen Bundesrat?",
    "options": [
      "die Abgeordneten des Bundestages",
      "die Ministerinnen und Minister der Bundesregierung",
      "die Regierungsvertreter der Bundesländer",
      "die Parteimitglieder"
    ],
    "correctIndex": 2,
    "category": "Bund und Länder"
  },
  {
    "id": 86,
    "question": "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
    "options": [
      "die Bundesversammlung",
      "der Bundesrat",
      "das Bundesparlament",
      "das Bundesverfassungsgericht"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 87,
    "question": "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
    "options": [
      "die Bundeskanzlerin / der Bundeskanzler",
      "die Bundespräsidentin / der Bundespräsident",
      "die Bundesratspräsidentin / der Bundesratspräsident",
      "die Bundestagspräsidentin / der Bundestagspräsident"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 88,
    "question": "Die parlamentarische Opposition im Deutschen Bundestag …",
    "options": [
      "kontrolliert die Regierung.",
      "entscheidet, wer Bundesministerin / Bundesminister wird.",
      "bestimmt, wer im Bundesrat sitzt.",
      "schlägt die Regierungschefinnen / Regierungschefs der Länder vor."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 89,
    "question": "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
    "options": [
      "Verband",
      "Ältestenrat",
      "Fraktion",
      "Opposition"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 90,
    "question": "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
    "options": [
      "den Bundesrat.",
      "die Bundesversammlung.",
      "den Bundestag.",
      "die Bundesregierung."
    ],
    "correctIndex": 0,
    "category": "Bund und Länder"
  },
  {
    "id": 91,
    "question": "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
    "options": [
      "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
      "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
      "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
      "leichter, wenn es sich um ein reiches Bundesland handelt."
    ],
    "correctIndex": 2,
    "category": "Bund und Länder"
  },
  {
    "id": 92,
    "question": "Was bedeutet die Abkürzung CSU in Deutschland?",
    "options": [
      "Christlich Sichere Union",
      "Christlich Süddeutsche Union",
      "Christlich Sozialer Unternehmerverband",
      "Christlich Soziale Union"
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 93,
    "question": "Je mehr 'Zweitstimmen' eine Partei bei einer Bundestagswahl bekommt, desto …",
    "options": [
      "weniger Erststimmen kann sie haben.",
      "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
      "größer ist das Risiko, eine Koalition bilden zu müssen.",
      "mehr Sitze erhält die Partei im Parlament."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 94,
    "question": "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
    "options": [
      "16",
      "18",
      "21",
      "23"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 95,
    "question": "Was gilt für die meisten Kinder in Deutschland?",
    "options": [
      "Wahlpflicht",
      "Schulpflicht",
      "Schweigepflicht",
      "Religionspflicht"
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 96,
    "question": "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
    "options": [
      "Kürzung sozialer Leistungen",
      "bis zu 100 Sozialstunden",
      "gar nicht, Holocaustleugnung ist erlaubt",
      "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 97,
    "question": "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
    "options": [
      "Sozialversicherung",
      "Sozialhilfe",
      "Kindergeld",
      "Wohngeld"
    ],
    "correctIndex": 0,
    "category": "Wirtschaft"
  },
  {
    "id": 98,
    "question": "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …",
    "options": [
      "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
      "kann die Regierung ihre Mehrheit verlieren.",
      "muss die Bundespräsidentin / der Bundespräsident zuvor ihr/sein Einverständnis geben.",
      "dürfen die Wählerinnen / Wähler dieser Abgeordneten noch einmal wählen."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 99,
    "question": "Wer bezahlt in Deutschland die Sozialversicherungen?",
    "options": [
      "Arbeitgeberinnen / Arbeitgeber und Arbeitnehmerinnen / Arbeitnehmer",
      "nur Arbeitnehmerinnen / Arbeitnehmer",
      "alle Staatsangehörigen",
      "nur Arbeitgeberinnen / Arbeitgeber"
    ],
    "correctIndex": 0,
    "category": "Wirtschaft"
  },
  {
    "id": 100,
    "question": "Was gehört nicht zur gesetzlichen Sozialversicherung?",
    "options": [
      "die Lebensversicherung",
      "die gesetzliche Rentenversicherung",
      "die Arbeitslosenversicherung",
      "die Pflegeversicherung"
    ],
    "correctIndex": 0,
    "category": "Wirtschaft"
  },
  {
    "id": 101,
    "question": "Gewerkschaften sind Interessenverbände der …",
    "options": [
      "Jugendlichen.",
      "Arbeitnehmerinnen und Arbeitnehmer.",
      "Rentnerinnen und Rentner.",
      "Arbeitgeberinnen und Arbeitgeber."
    ],
    "correctIndex": 1,
    "category": "Wirtschaft"
  },
  {
    "id": 102,
    "question": "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
    "options": [
      "Bundesverdienstkreuz",
      "Bundesadler",
      "Vaterländischen Verdienstorden",
      "Ehrentitel 'Held der Deutschen Demokratischen Republik'"
    ],
    "correctIndex": 0,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 103,
    "question": "Was wird in Deutschland als 'Ampelkoalition' bezeichnet? Die Zusammenarbeit …",
    "options": [
      "der Bundestagsfraktionen von CDU und CSU",
      "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
      "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
      "der Bundestagsfraktionen von CDU und SPD"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 104,
    "question": "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
    "options": [
      "Die Frau ist lange krank und arbeitsunfähig.",
      "Die Frau kam oft zu spät zur Arbeit.",
      "Die Frau erledigt private Sachen während der Arbeitszeit.",
      "Die Frau bekommt ein Kind und ihr Chef weiß das."
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 105,
    "question": "Was ist eine Aufgabe von Wahlhelferinnen / Wahlhelfern in Deutschland?",
    "options": [
      "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
      "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
      "Sie geben Zwischenergebnisse an die Medien weiter.",
      "Sie zählen die Stimmen nach dem Ende der Wahl."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 106,
    "question": "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen / Wahlhelfern?",
    "options": [
      "Sie helfen Kindern und alten Menschen beim Wählen.",
      "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
      "Sie geben Zwischenergebnisse an Journalisten weiter.",
      "Sie zählen die Stimmen nach dem Ende der Wahl."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 107,
    "question": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    "options": [
      "2 Jahre",
      "4 Jahre",
      "6 Jahre",
      "8 Jahre"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 108,
    "question": "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …",
    "options": [
      "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
      "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
      "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
      "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 109,
    "question": "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
    "options": [
      "alle drei Jahre",
      "alle vier Jahre",
      "alle fünf Jahre",
      "alle sechs Jahre"
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 110,
    "question": "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
    "options": [
      "2 Jahre",
      "3 Jahre",
      "4 Jahre",
      "5 Jahre"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 111,
    "question": "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
    "options": [
      "die Politik Israels öffentlich kritisieren",
      "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück",
      "eine Diskussion über die Politik Israels",
      "der öffentliche Aufruf zur Vernichtung Israels"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 112,
    "question": "Die Wahlen in Deutschland sind …",
    "options": [
      "speziell.",
      "geheim.",
      "berufsbezogen.",
      "geschlechtsabhängig."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 113,
    "question": "Wahlen in Deutschland gewinnt die Partei, die …",
    "options": [
      "die meisten Stimmen bekommt.",
      "die meisten Männer mehrheitlich gewählt haben.",
      "die meisten Stimmen bei den Arbeiterinnen / Arbeitern bekommen hat.",
      "die meisten Erststimmen für ihre Kanzlerkandidatin / ihren Kanzlerkandidaten erhalten hat."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 114,
    "question": "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
    "options": [
      "eine Pflicht.",
      "ein Recht.",
      "ein Zwang.",
      "eine Last."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 115,
    "question": "Was bedeutet \"aktives Wahlrecht\" in Deutschland?",
    "options": [
      "Man kann gewählt werden.",
      "Man muss wählen gehen.",
      "Man kann wählen.",
      "Man muss zur Auszählung der Stimmen gehen."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 116,
    "question": "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
    "options": [
      "aktive Wahlkampagne.",
      "aktives Wahlverfahren.",
      "aktiver Wahlkampf.",
      "aktives Wahlrecht."
    ],
    "correctIndex": 3,
    "category": "Politik"
  },
  {
    "id": 117,
    "question": "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
    "options": [
      "3%",
      "4%",
      "5%",
      "6%"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 118,
    "question": "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
    "options": [
      "nur Deutsche",
      "nur Israelis",
      "nur religiöse Menschen",
      "alle Menschen"
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 119,
    "question": "Wahlen in Deutschland sind frei. Was bedeutet das?",
    "options": [
      "Alle verurteilten Straftäterinnen / Straftäter dürfen nicht wählen.",
      "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin / mein Arbeitgeber mir frei geben.",
      "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
      "Ich kann frei entscheiden, wo ich wählen gehen möchte."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 120,
    "question": "Das Wahlsystem in Deutschland ist ein …",
    "options": [
      "Zensuswahlrecht.",
      "Dreiklassenwahlrecht.",
      "Mehrheits- und Verhältniswahlrecht.",
      "allgemeines Männerwahlrecht."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 121,
    "question": "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
    "options": [
      "5%-Hürde.",
      "Zulassungsgrenze.",
      "Basiswert.",
      "Richtlinie."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 122,
    "question": "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
    "options": [
      "frei, gleich, geheim.",
      "offen, sicher, frei.",
      "geschlossen, gleich, sicher.",
      "sicher, offen, freiwillig."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 123,
    "question": "Was ist in Deutschland die \"5%-Hürde\"?",
    "options": [
      "Abstimmungsregelung im Bundestag für kleine Parteien",
      "Anwesenheitskontrolle im Bundestag für Abstimmungen",
      "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
      "Anwesenheitskontrolle im Bundesrat für Abstimmungen"
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 124,
    "question": "Die Bundestagswahl in Deutschland ist die Wahl …",
    "options": [
      "der Bundeskanzlerin / des Bundeskanzlers.",
      "der Parlamente der Länder.",
      "des Parlaments für Deutschland.",
      "der Bundespräsidentin / des Bundespräsidenten."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 125,
    "question": "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
    "options": [
      "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.",
      "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
      "im Land bestehende Gesetze beizubehalten.",
      "den Armen mehr Macht zu geben."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 126,
    "question": "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
    "options": [
      "eine Wahlbenachrichtigung von der Gemeinde",
      "eine Wahlerlaubnis von der Bundespräsidentin / von dem Bundespräsidenten",
      "eine Benachrichtigung von der Bundesversammlung",
      "eine Benachrichtigung vom Pfarramt"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 127,
    "question": "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
    "options": [
      "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
      "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.",
      "viele kleine Parteien die Regierungsbildung erschweren.",
      "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 128,
    "question": "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …",
    "options": [
      "Abgeordnete.",
      "Kanzlerinnen / Kanzler.",
      "Botschafterinnen / Botschafter.",
      "Ministerpräsidentinnen / Ministerpräsidenten."
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 129,
    "question": "Vom Volk gewählt wird in Deutschland …",
    "options": [
      "die Bundeskanzlerin / der Bundeskanzler.",
      "die Ministerpräsidentin / der Ministerpräsident eines Bundeslandes.",
      "der Bundestag.",
      "die Bundespräsidentin / der Bundespräsident."
    ],
    "correctIndex": 2,
    "category": "Politik"
  },
  {
    "id": 130,
    "question": "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 131,
    "question": "In Deutschland ist eine Bürgermeisterin / ein Bürgermeister …",
    "options": [
      "die Leiterin / der Leiter einer Schule.",
      "die Chefin / der Chef einer Bank.",
      "das Oberhaupt einer Gemeinde.",
      "die / der Vorsitzende einer Partei."
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 132,
    "question": "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
    "options": [
      "Sie arbeiten als Soldatinnen / Soldaten.",
      "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
      "Sie arbeiten in der Bundesregierung.",
      "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld."
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 133,
    "question": "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
    "options": [
      "Der Ehemann wählt für seine Frau mit.",
      "Man kann durch Briefwahl seine Stimme abgeben.",
      "Man kann am Wahltag telefonisch seine Stimme abgeben.",
      "Kinder ab dem Alter von 14 Jahren dürfen wählen."
    ],
    "correctIndex": 1,
    "category": "Politik"
  },
  {
    "id": 134,
    "question": "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
    "options": [
      "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
      "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
      "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin / Steuerzahler ein Recht auf die Buslinie habe.",
      "Ich schreibe einen Brief an das Forstamt der Gemeinde."
    ],
    "correctIndex": 0,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 135,
    "question": "Wen vertreten die Gewerkschaften in Deutschland?",
    "options": [
      "große Unternehmen",
      "kleine Unternehmen",
      "Selbstständige",
      "Arbeitnehmerinnen und Arbeitnehmer"
    ],
    "correctIndex": 3,
    "category": "Wirtschaft"
  },
  {
    "id": 136,
    "question": "Sie gehen in Deutschland zum Arbeitsgericht bei …",
    "options": [
      "falscher Nebenkostenabrechnung.",
      "ungerechtfertigter Kündigung durch Ihre Chefin / Ihren Chef.",
      "Problemen mit den Nachbarinnen / Nachbarn.",
      "Schwierigkeiten nach einem Verkehrsunfall."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 137,
    "question": "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
    "options": [
      "das Familiengericht",
      "das Strafgericht",
      "das Arbeitsgericht",
      "das Amtsgericht"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 138,
    "question": "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin / mein Arbeitgeber zu Unrecht gekündigt hat?",
    "options": [
      "weiterarbeiten und freundlich zur Chefin / zum Chef sein",
      "ein Mahnverfahren gegen die Arbeitgeberin / den Arbeitgeber führen",
      "Kündigungsschutzklage erheben",
      "die Arbeitgeberin / den Arbeitgeber bei der Polizei anzeigen"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 139,
    "question": "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
    "options": [
      "zu einer anderen Religion übertritt.",
      "eine Straftat begangen hat und angeklagt wird.",
      "eine andere Meinung als die der Regierung vertritt.",
      "sein Auto falsch geparkt hat und es abgeschleppt wird."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 140,
    "question": "Was macht eine Schöffin / ein Schöffe in Deutschland? Sie/Er …",
    "options": [
      "entscheidet mit Richterinnen / Richtern über Schuld und Strafe.",
      "gibt Bürgerinnen / Bürgern rechtlichen Rat.",
      "stellt Urkunden aus.",
      "verteidigt die Angeklagte / den Angeklagten."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 141,
    "question": "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
    "options": [
      "eine Rechtsanwältin / ein Rechtsanwalt",
      "eine Richterin / ein Richter",
      "eine Schöffin / ein Schöffe",
      "eine Staatsanwältin / ein Staatsanwalt"
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 142,
    "question": "Was ist die Hauptaufgabe einer Richterin / eines Richters in Deutschland? Eine Richterin / ein Richter …",
    "options": [
      "vertritt Bürgerinnen und Bürger vor einem Gericht.",
      "arbeitet an einem Gericht und spricht Urteile.",
      "ändert Gesetze.",
      "betreut Jugendliche vor Gericht."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 143,
    "question": "Eine Richterin / ein Richter in Deutschland gehört zur …",
    "options": [
      "Judikative.",
      "Exekutive.",
      "Operative.",
      "Legislative."
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 144,
    "question": "Eine Richterin / ein Richter gehört in Deutschland zur …",
    "options": [
      "vollziehenden Gewalt.",
      "rechtsprechenden Gewalt.",
      "planenden Gewalt.",
      "gesetzgebenden Gewalt."
    ],
    "correctIndex": 1,
    "category": "Staat"
  },
  {
    "id": 145,
    "question": "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin / ein Richter? Für die …",
    "options": [
      "Judikative",
      "Exekutive",
      "Presse",
      "Legislative"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 146,
    "question": "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
    "options": [
      "Programm",
      "Prozedur",
      "Protokoll",
      "Prozess"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 147,
    "question": "Was ist die Arbeit einer Richterin / eines Richters in Deutschland?",
    "options": [
      "Deutschland regieren",
      "Recht sprechen",
      "Pläne erstellen",
      "Gesetze erlassen"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 148,
    "question": "Was ist eine Aufgabe der Polizei in Deutschland?",
    "options": [
      "das Land zu verteidigen",
      "die Bürgerinnen und Bürger abzuhören",
      "die Gesetze zu beschließen",
      "die Einhaltung von Gesetzen zu überwachen"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 149,
    "question": "Was ist ein Beispiel für antisemitisches Verhalten?",
    "options": [
      "ein jüdisches Fest besuchen",
      "die israelische Regierung kritisieren",
      "den Holocaust leugnen",
      "gegen Juden Fußball spielen"
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 150,
    "question": "Eine Gerichtsschöffin / ein Gerichtsschöffe in Deutschland ist …",
    "options": [
      "die Stellvertreterin / der Stellvertreter des Stadtoberhaupts.",
      "eine ehrenamtliche Richterin / ein ehrenamtlicher Richter.",
      "ein Mitglied eines Gemeinderats.",
      "eine Person, die Jura studiert hat."
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 151,
    "question": "Wer baute die Mauer in Berlin?",
    "options": [
      "Großbritannien",
      "die DDR",
      "die Bundesrepublik Deutschland",
      "die USA"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 152,
    "question": "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
    "options": [
      "1918 bis 1923",
      "1932 bis 1950",
      "1933 bis 1945",
      "1945 bis 1989"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 153,
    "question": "Was war am 8. Mai 1945?",
    "options": [
      "Tod Adolf Hitlers",
      "Beginn des Berliner Mauerbaus",
      "Wahl von Konrad Adenauer zum Bundeskanzler",
      "Ende des Zweiten Weltkriegs in Europa"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 154,
    "question": "Wann war der Zweite Weltkrieg zu Ende?",
    "options": [
      "1933",
      "1945",
      "1949",
      "1961"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 155,
    "question": "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
    "options": [
      "1888 bis 1918",
      "1921 bis 1934",
      "1933 bis 1945",
      "1949 bis 1963"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 156,
    "question": "In welchem Jahr wurde Hitler Reichskanzler?",
    "options": [
      "1923",
      "1927",
      "1933",
      "1936"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 157,
    "question": "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
    "options": [
      "eine Diktatur.",
      "einen demokratischen Staat.",
      "eine Monarchie.",
      "ein Fürstentum."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 158,
    "question": "Das \"Dritte Reich\" war eine …",
    "options": [
      "Diktatur.",
      "Demokratie.",
      "Monarchie.",
      "Räterepublik."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 159,
    "question": "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
    "options": [
      "freie Wahlen",
      "Pressezensur",
      "willkürliche Verhaftungen",
      "Verfolgung von Juden"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 160,
    "question": "Welcher Krieg dauerte von 1939 bis 1945?",
    "options": [
      "der Erste Weltkrieg",
      "der Zweite Weltkrieg",
      "der Vietnamkrieg",
      "der Golfkrieg"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 161,
    "question": "Was kennzeichnete den NS-Staat? Eine Politik …",
    "options": [
      "des staatlichen Rassismus",
      "der Meinungsfreiheit",
      "der allgemeinen Religionsfreiheit",
      "der Entwicklung der Demokratie"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 162,
    "question": "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
    "options": [
      "eine Goldmedaille bei den Olympischen Spielen 1936.",
      "den Bau des Reichstagsgebäudes.",
      "den Aufbau der Wehrmacht.",
      "das Attentat auf Hitler am 20. Juli 1944."
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 163,
    "question": "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
    "options": [
      "1925",
      "1930",
      "1938",
      "1945"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 164,
    "question": "Was passierte am 9. November 1938 in Deutschland?",
    "options": [
      "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
      "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
      "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
      "Hitler wird Reichspräsident und lässt alle Parteien verbieten."
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 165,
    "question": "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
    "options": [
      "Konrad Adenauer",
      "Kurt Georg Kiesinger",
      "Helmut Schmidt",
      "Willy Brandt"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 166,
    "question": "Bei welchen Demonstrationen in Deutschland riefen die Menschen \"Wir sind das Volk\"?",
    "options": [
      "beim Arbeiteraufstand 1953 in der DDR",
      "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
      "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland",
      "bei den Montagsdemonstrationen 1989 in der DDR"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 167,
    "question": "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als \"Alliierte Besatzungsmächte\" bezeichnet?",
    "options": [
      "Sowjetunion, Großbritannien, Polen, Schweden",
      "Frankreich, Sowjetunion, Italien, Japan",
      "USA, Sowjetunion, Spanien, Portugal",
      "USA, Sowjetunion, Großbritannien, Frankreich"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 168,
    "question": "Welches Land war keine \"Alliierte Besatzungsmacht\" in Deutschland?",
    "options": [
      "USA",
      "Sowjetunion",
      "Frankreich",
      "Japan"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 169,
    "question": "Wann wurde die Bundesrepublik Deutschland gegründet?",
    "options": [
      "1939",
      "1945",
      "1949",
      "1951"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 170,
    "question": "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
    "options": [
      "das Verbot von Parteien",
      "das Recht zur freien Entfaltung der Persönlichkeit",
      "Pressefreiheit",
      "den Schutz der Menschenwürde"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 171,
    "question": "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
    "options": [
      "steuert sich allein nach Angebot und Nachfrage.",
      "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
      "richtet sich nach der Nachfrage im Ausland.",
      "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich."
    ],
    "correctIndex": 3,
    "category": "Wirtschaft"
  },
  {
    "id": 172,
    "question": "In welcher Besatzungszone wurde die DDR gegründet? In der …",
    "options": [
      "amerikanischen Besatzungszone",
      "französischen Besatzungszone",
      "britischen Besatzungszone",
      "sowjetischen Besatzungszone"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 173,
    "question": "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
    "options": [
      "des Nordatlantikpakts (NATO).",
      "der Vereinten Nationen (VN).",
      "der Europäischen Union (EU).",
      "des Warschauer Pakts."
    ],
    "correctIndex": 2,
    "category": "Europa und Welt"
  },
  {
    "id": 174,
    "question": "Wann wurde die DDR gegründet?",
    "options": [
      "1947",
      "1949",
      "1953",
      "1956"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 175,
    "question": "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 176,
    "question": "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
    "options": [
      "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
      "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
      "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
      "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 177,
    "question": "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
    "options": [
      "München",
      "Berlin",
      "Dresden",
      "Frankfurt / Oder"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 178,
    "question": "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
    "options": [
      "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
      "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.",
      "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
      "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege."
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 179,
    "question": "Wie endete der Zweite Weltkrieg in Europa offiziell?",
    "options": [
      "mit dem Tod Adolf Hitlers",
      "durch die bedingungslose Kapitulation Deutschlands",
      "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
      "durch eine Revolution in Deutschland"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 180,
    "question": "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
    "options": [
      "Ludwig Erhard.",
      "Willy Brandt.",
      "Konrad Adenauer.",
      "Gerhard Schröder."
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 181,
    "question": "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
    "options": [
      "Er hat sich den ehemaligen Alliierten unterworfen.",
      "Er bat Polen und die polnischen Juden um Vergebung.",
      "Er zeigte seine Demut vor dem Warschauer Pakt.",
      "Er sprach ein Gebet am Grab des Unbekannten Soldaten."
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 182,
    "question": "Wie heißt das jüdische Gebetshaus?",
    "options": [
      "Basilika",
      "Moschee",
      "Synagoge",
      "Kirche"
    ],
    "correctIndex": 2,
    "category": "Religion und Kultur"
  },
  {
    "id": 183,
    "question": "Wann war in der Bundesrepublik Deutschland das \"Wirtschaftswunder\"?",
    "options": [
      "40er Jahre",
      "50er Jahre",
      "70er Jahre",
      "80er Jahre"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 184,
    "question": "Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?",
    "options": [
      "eine Resolution der Vereinten Nationen",
      "ein Beschluss des Zionistenkongresses",
      "ein Vorschlag der Bundesregierung",
      "ein Vorschlag der UdSSR"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 185,
    "question": "Wofür stand der Ausdruck \"Eiserner Vorhang\"? Für die Abschottung …",
    "options": [
      "des Warschauer Pakts gegen den Westen",
      "Norddeutschlands gegen Süddeutschland",
      "Nazi-Deutschlands gegen die Alliierten",
      "Europas gegen die USA"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 186,
    "question": "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
    "options": [
      "1. Mai",
      "17. Juni",
      "20. Juli",
      "9. November"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 187,
    "question": "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
    "options": [
      "Preußen",
      "Bundesrepublik Deutschland",
      "\"Drittes Reich\"",
      "DDR"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 188,
    "question": "In welchem Jahr wurde die Mauer in Berlin gebaut?",
    "options": [
      "1953",
      "1956",
      "1959",
      "1961"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 189,
    "question": "Wann baute die DDR die Mauer in Berlin?",
    "options": [
      "1919",
      "1933",
      "1961",
      "1990"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 190,
    "question": "Was bedeutet die Abkürzung DDR?",
    "options": [
      "Dritter Deutscher Rundfunk",
      "Die Deutsche Republik",
      "Dritte Deutsche Republik",
      "Deutsche Demokratische Republik"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 191,
    "question": "Wann wurde die Mauer in Berlin für alle geöffnet?",
    "options": [
      "1987",
      "1989",
      "1992",
      "1995"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 192,
    "question": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    "options": [
      "Brandenburg",
      "Bayern",
      "Saarland",
      "Hessen"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 193,
    "question": "Von 1961 bis 1989 war Berlin …",
    "options": [
      "ohne Bürgermeister.",
      "ein eigener Staat.",
      "durch eine Mauer geteilt.",
      "nur mit dem Flugzeug erreichbar."
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 194,
    "question": "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
    "options": [
      "Einheit.",
      "Nation.",
      "Bundesländer.",
      "Städte."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 195,
    "question": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    "options": [
      "Hessen",
      "Sachsen-Anhalt",
      "Nordrhein-Westfalen",
      "Saarland"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 196,
    "question": "Warum nennt man die Zeit im Herbst 1989 in der DDR \"Die Wende\"? In dieser Zeit veränderte sich die DDR politisch …",
    "options": [
      "von einer Diktatur zur Demokratie.",
      "von einer liberalen Marktwirtschaft zum Sozialismus.",
      "von einer Monarchie zur Sozialdemokratie.",
      "von einem religiösen Staat zu einem kommunistischen Staat."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 197,
    "question": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    "options": [
      "Thüringen",
      "Hessen",
      "Bayern",
      "Bremen"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 198,
    "question": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    "options": [
      "Bayern",
      "Niedersachsen",
      "Sachsen",
      "Baden-Württemberg"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 199,
    "question": "Mit der Abkürzung \"Stasi\" meinte man in der DDR …",
    "options": [
      "das Parlament.",
      "das Ministerium für Staatssicherheit.",
      "eine regierende Partei.",
      "das Ministerium für Volksbildung."
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 200,
    "question": "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
    "options": [
      "Hessen",
      "Schleswig-Holstein",
      "Mecklenburg-Vorpommern",
      "Saarland"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 201,
    "question": "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
    "options": [
      "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
      "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
      "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
      "Sachsen, Thüringen, Hessen, Niedersachsen, Brandenburg"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 202,
    "question": "Zu wem gehörte die DDR im \"Kalten Krieg\"?",
    "options": [
      "zu den Westmächten",
      "zum Warschauer Pakt",
      "zur NATO",
      "zu den blockfreien Staaten"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 203,
    "question": "Wie hieß das Wirtschaftssystem der DDR?",
    "options": [
      "Marktwirtschaft",
      "Planwirtschaft",
      "Angebot und Nachfrage",
      "Kapitalismus"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 204,
    "question": "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
    "options": [
      "Die Bundesrepublik hat die DDR besetzt.",
      "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
      "Die westlichen Bundesländer sind der DDR beigetreten.",
      "Die DDR hat die Bundesrepublik Deutschland besetzt."
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 205,
    "question": "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
    "options": [
      "zur Europäischen Union.",
      "zum Warschauer Pakt.",
      "zur OPEC.",
      "zur Europäischen Verteidigungsgemeinschaft."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 206,
    "question": "Woran erinnern die sogenannten \"Stolpersteine\" in Deutschland?",
    "options": [
      "an berühmte deutsche Politikerinnen und Politiker",
      "an die Opfer des Nationalsozialismus",
      "an Verkehrstote",
      "an bekannte jüdische Musiker"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 207,
    "question": "In welchem Militärbündnis war die DDR Mitglied?",
    "options": [
      "in der NATO",
      "im Rheinbund",
      "im Warschauer Pakt",
      "im Europabündnis"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 208,
    "question": "Was war die \"Stasi\"?",
    "options": [
      "der Geheimdienst im \"Dritten Reich\"",
      "eine berühmte deutsche Gedenkstätte",
      "der Geheimdienst der DDR",
      "ein deutscher Sportverein während des Zweiten Weltkrieges"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 209,
    "question": "Welches war das Wappen der Deutschen Demokratischen Republik?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 210,
    "question": "Was ereignete sich am 17. Juni 1953 in der DDR?",
    "options": [
      "der feierliche Beitritt zum Warschauer Pakt",
      "landesweite Streiks und ein Volksaufstand",
      "der 1. SED-Parteitag",
      "der erste Besuch Fidel Castros"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 211,
    "question": "Welcher Politiker steht für die \"Ostverträge\"?",
    "options": [
      "Helmut Kohl",
      "Willy Brandt",
      "Michail Gorbatschow",
      "Ludwig Erhard"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 212,
    "question": "Wie heißt Deutschland mit vollem Namen?",
    "options": [
      "Bundesstaat Deutschland",
      "Bundesländer Deutschland",
      "Bundesrepublik Deutschland",
      "Bundesbezirk Deutschland"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 213,
    "question": "Wie viele Einwohner hat Deutschland?",
    "options": [
      "70 Millionen",
      "78 Millionen",
      "84 Millionen",
      "90 Millionen"
    ],
    "correctIndex": 2,
    "category": "Staat"
  },
  {
    "id": 214,
    "question": "Welche Farben hat die deutsche Flagge?",
    "options": [
      "schwarz-rot-gold",
      "rot-weiß-schwarz",
      "schwarz-rot-grün",
      "schwarz-gelb-rot"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 215,
    "question": "Wer wird als \"Kanzler der Deutschen Einheit\" bezeichnet?",
    "options": [
      "Gerhard Schröder",
      "Helmut Kohl",
      "Konrad Adenauer",
      "Helmut Schmidt"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 216,
    "question": "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
    "options": [
      "der Bundesadler",
      "die Fahne der Stadt Berlin",
      "der Reichsadler",
      "die Reichskrone"
    ],
    "correctIndex": 0,
    "category": "Politik"
  },
  {
    "id": 217,
    "question": "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
    "options": [
      "1919 bis 1927",
      "1933 bis 1945",
      "1945 bis 1961",
      "1949 bis 1990"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 218,
    "question": "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 219,
    "question": "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
    "options": [
      "1933",
      "1949",
      "1971",
      "1990"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 220,
    "question": "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
    "options": [
      "an das Ende des Zweiten Weltkrieges",
      "an die Verabschiedung des Grundgesetzes",
      "an die Wiedervereinigung Deutschlands",
      "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)"
    ],
    "correctIndex": 3,
    "category": "Geschichte"
  },
  {
    "id": 221,
    "question": "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
    "options": [
      "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
      "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
      "Deutsche können ohne Passkontrolle in jedes Land reisen.",
      "Deutsche können in jedem Land mit dem Euro bezahlen."
    ],
    "correctIndex": 0,
    "category": "Europa und Welt"
  },
  {
    "id": 222,
    "question": "Welches Land ist ein Nachbarland von Deutschland?",
    "options": [
      "Ungarn",
      "Portugal",
      "Spanien",
      "Schweiz"
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 223,
    "question": "Welches Land ist ein Nachbarland von Deutschland?",
    "options": [
      "Rumänien",
      "Bulgarien",
      "Polen",
      "Griechenland"
    ],
    "correctIndex": 2,
    "category": "Europa und Welt"
  },
  {
    "id": 224,
    "question": "Was bedeutet die Abkürzung EU?",
    "options": [
      "Europäische Unternehmen",
      "Europäische Union",
      "Einheitliche Union",
      "Euro Union"
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 225,
    "question": "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
    "options": [
      "Tschechien",
      "Norwegen",
      "Spanien",
      "Österreich"
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 226,
    "question": "Welche ist die Flagge der Europäischen Union?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 227,
    "question": "Welches Land ist ein Nachbarland von Deutschland?",
    "options": [
      "Finnland",
      "Dänemark",
      "Norwegen",
      "Schweden"
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 228,
    "question": "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
    "options": [
      "NATO-Osterweiterung",
      "EU-Osterweiterung",
      "Deutsche Wiedervereinigung",
      "Europäische Gemeinschaft"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 229,
    "question": "Welches Land ist ein Nachbarland von Deutschland?",
    "options": [
      "Spanien",
      "Bulgarien",
      "Norwegen",
      "Luxemburg"
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 230,
    "question": "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
    "options": [
      "5 Jahre.",
      "6 Jahre.",
      "7 Jahre.",
      "8 Jahre."
    ],
    "correctIndex": 0,
    "category": "Europa und Welt"
  },
  {
    "id": 231,
    "question": "Was bedeutet der Begriff \"europäische Integration\"?",
    "options": [
      "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.",
      "Der Begriff meint den Einwanderungsstopp nach Europa.",
      "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.",
      "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU."
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 232,
    "question": "Wer wird bei der Europawahl gewählt?",
    "options": [
      "die Europäische Kommission",
      "die Länder, die in die EU eintreten dürfen",
      "die Abgeordneten des Europäischen Parlaments",
      "die europäische Verfassung"
    ],
    "correctIndex": 2,
    "category": "Europa und Welt"
  },
  {
    "id": 233,
    "question": "Welches Land ist ein Nachbarland von Deutschland?",
    "options": [
      "Tschechien",
      "Bulgarien",
      "Griechenland",
      "Portugal"
    ],
    "correctIndex": 0,
    "category": "Europa und Welt"
  },
  {
    "id": 234,
    "question": "Wo ist ein Sitz des Europäischen Parlaments?",
    "options": [
      "London",
      "Paris",
      "Berlin",
      "Straßburg"
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 235,
    "question": "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
    "options": [
      "Freundschaft zwischen England und Deutschland",
      "Reisefreiheit in alle Länder der EU",
      "Frieden und Sicherheit in den Ländern der EU",
      "einheitliche Feiertage in den Ländern der EU"
    ],
    "correctIndex": 2,
    "category": "Geschichte"
  },
  {
    "id": 236,
    "question": "Wie viele Mitgliedstaaten hat die EU heute?",
    "options": [
      "21",
      "23",
      "25",
      "27"
    ],
    "correctIndex": 3,
    "category": "Europa und Welt"
  },
  {
    "id": 237,
    "question": "Was war der Inhalt der \"Römischen Verträge\"?",
    "options": [
      "Beitritt Deutschlands zur NATO",
      "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
      "Verpflichtung Deutschlands zu Reparationsleistungen",
      "Festlegung der Oder-Neiße-Linie als Ostgrenze"
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 238,
    "question": "An welchen Orten arbeitet das Europäische Parlament?",
    "options": [
      "Paris, London und Den Haag",
      "Straßburg, Luxemburg und Brüssel",
      "Rom, Bern und Wien",
      "Bonn, Zürich und Mailand"
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 239,
    "question": "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
    "options": [
      "durch die \"Hamburger Verträge\"",
      "durch die \"Römischen Verträge\"",
      "durch die \"Pariser Verträge\"",
      "durch die \"Londoner Verträge\""
    ],
    "correctIndex": 1,
    "category": "Europa und Welt"
  },
  {
    "id": 240,
    "question": "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
    "options": [
      "1995",
      "1998",
      "2002",
      "2005"
    ],
    "correctIndex": 2,
    "category": "Europa und Welt"
  },
  {
    "id": 241,
    "question": "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
    "options": [
      "Sie muss an ihre Krankenkasse schreiben.",
      "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
      "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
      "Sie muss das Arbeitsamt um Erlaubnis bitten."
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 242,
    "question": "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
    "options": [
      "der Staat",
      "die Bundesländer",
      "die Eltern / die Erziehungsberechtigten",
      "die Schulen"
    ],
    "correctIndex": 2,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 243,
    "question": "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
    "options": [
      "Sie müssen die Demonstration anmelden.",
      "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
      "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
      "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 244,
    "question": "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
    "options": [
      "das Abitur",
      "ein Diplom",
      "die Prokura",
      "eine Gesellenprüfung"
    ],
    "correctIndex": 0,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 245,
    "question": "Wer darf in Deutschland nicht als Paar zusammenleben?",
    "options": [
      "Hans (20 Jahre) und Marie (19 Jahre)",
      "Tom (20 Jahre) und Klaus (45 Jahre)",
      "Sofie (35 Jahre) und Lisa (40 Jahre)",
      "Anne (13 Jahre) und Tim (25 Jahre)"
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 246,
    "question": "Ab welchem Alter ist man in Deutschland volljährig?",
    "options": [
      "16",
      "18",
      "19",
      "21"
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 247,
    "question": "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
    "options": [
      "Elternzeit",
      "Mutterschutz",
      "Geburtsvorbereitung",
      "Wochenbett"
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 248,
    "question": "Die Erziehung der Kinder ist in Deutschland ist vor allem Aufgabe …",
    "options": [
      "des Staates.",
      "der Eltern.",
      "der Großeltern.",
      "der Schulen"
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 249,
    "question": "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
    "options": [
      "der Staat",
      "die Eltern",
      "die Verwandten",
      "die Schulen"
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 250,
    "question": "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
    "options": [
      "katholisch ist.",
      "gut ausgebildet ist.",
      "eine Frau ist.",
      "Mitglied einer Partei ist."
    ],
    "correctIndex": 1,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 251,
    "question": "Wenn man in Deutschland ein Kind schlägt, …",
    "options": [
      "geht das niemanden etwas an.",
      "geht das nur die Familie etwas an.",
      "kann man dafür nicht bestraft werden.",
      "kann man dafür bestraft werden."
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 252,
    "question": "In Deutschland …",
    "options": [
      "darf man zur gleichen Zeit nur mit einer Partnerin / einem Partner verheiratet sein.",
      "kann man mehrere Ehepartnerinnen / Ehepartner gleichzeitig haben.",
      "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
      "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist."
    ],
    "correctIndex": 0,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 253,
    "question": "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
    "options": [
      "beim Einwohnermeldeamt",
      "beim Standesamt",
      "beim Ordnungsamt",
      "beim Gewerbeamt"
    ],
    "correctIndex": 0,
    "category": "Staat"
  },
  {
    "id": 254,
    "question": "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das \"Trennungsjahr\" einhalten. Was bedeutet das?",
    "options": [
      "Der Scheidungsprozess dauert ein Jahr.",
      "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
      "Das Besuchsrecht für die Kinder gilt ein Jahr.",
      "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich."
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 255,
    "question": "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
    "options": [
      "Ordnungsamt.",
      "Schulamt.",
      "Jugendamt.",
      "Gesundheitsamt."
    ],
    "correctIndex": 2,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 256,
    "question": "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
    "options": [
      "eine Erlaubnis der Polizei",
      "eine Genehmigung einer Partei",
      "eine Genehmigung des Einwohnermeldeamts",
      "eine Gaststättenerlaubnis von der zuständigen Behörde"
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 257,
    "question": "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
    "options": [
      "einer Hochschule.",
      "einem Abendgymnasium.",
      "einer Hauptschule.",
      "einer Privatuniversität."
    ],
    "correctIndex": 1,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 258,
    "question": "Was darf das Jugendamt in Deutschland?",
    "options": [
      "Es entscheidet, welche Schule das Kind besucht.",
      "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
      "Es bezahlt das Kindergeld an die Eltern.",
      "Es kontrolliert, ob das Kind einen Kindergarten besucht."
    ],
    "correctIndex": 1,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 259,
    "question": "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
    "options": [
      "Rentenberechnung.",
      "Lehrstellensuche.",
      "Steuererklärung.",
      "Krankenversicherung."
    ],
    "correctIndex": 1,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 260,
    "question": "In Deutschland hat ein Kind in der Schule …",
    "options": [
      "Recht auf unbegrenzte Freizeit.",
      "Wahlfreiheit für alle Fächer.",
      "Anspruch auf Schulgeld.",
      "Anwesenheitspflicht."
    ],
    "correctIndex": 3,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 261,
    "question": "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
    "options": [
      "einer Hochschule.",
      "einem Abendgymnasium.",
      "einer Hauptschule.",
      "einer Privatuniversität."
    ],
    "correctIndex": 1,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 262,
    "question": "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
    "options": [
      "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
      "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
      "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
      "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 263,
    "question": "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
    "options": [
      "werden bestraft.",
      "werden wie Erwachsene behandelt.",
      "teilen die Strafe mit ihren Eltern.",
      "werden nicht bestraft."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 264,
    "question": "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
    "options": [
      "am Rosenmontag",
      "am Maifeiertag",
      "beim Oktoberfest",
      "an Pfingsten"
    ],
    "correctIndex": 0,
    "category": "Religion und Kultur"
  },
  {
    "id": 265,
    "question": "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
    "options": [
      "zum Einwohnermeldeamt",
      "zum Ordnungsamt",
      "zur Agentur für Arbeit",
      "zum Standesamt"
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 266,
    "question": "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
    "options": [
      "wenn die Sonne untergeht",
      "wenn die Nachbarn schlafen gehen",
      "um 0 Uhr, Mitternacht",
      "um 22 Uhr"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 267,
    "question": "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
    "options": [
      "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
      "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
      "Sie können zur Polizei gehen und die Tochter anzeigen.",
      "Sie suchen einen anderen Mann für die Tochter."
    ],
    "correctIndex": 0,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 268,
    "question": "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
    "options": [
      "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
      "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
      "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.",
      "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl."
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 269,
    "question": "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
    "options": [
      "monatliches Taschengeld.",
      "einen Platz in einem Sportverein.",
      "einen Kindergartenplatz.",
      "einen Ferienpass."
    ],
    "correctIndex": 2,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 270,
    "question": "Die Volkshochschule in Deutschland ist eine Einrichtung …",
    "options": [
      "für den Religionsunterricht.",
      "nur für Jugendliche.",
      "zur Weiterbildung.",
      "nur für Rentnerinnen und Rentner."
    ],
    "correctIndex": 2,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 271,
    "question": "Was ist in Deutschland ein Brauch zu Weihnachten?",
    "options": [
      "bunte Eier verstecken",
      "einen Tannenbaum schmücken",
      "sich mit Masken und Kostümen verkleiden",
      "Kürbisse vor die Tür stellen"
    ],
    "correctIndex": 1,
    "category": "Religion und Kultur"
  },
  {
    "id": 272,
    "question": "Welche Lebensform ist in Deutschland nicht erlaubt?",
    "options": [
      "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
      "Zwei Frauen leben zusammen.",
      "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
      "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet."
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 273,
    "question": "Bei Erziehungsproblemen gehen Sie in Deutschland …",
    "options": [
      "zur Ärztin / zum Arzt.",
      "zum Gesundheitsamt.",
      "zum Einwohnermeldeamt.",
      "zum Jugendamt."
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 274,
    "question": "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
    "options": [
      "das Schweigerecht",
      "das Briefgeheimnis",
      "die Schweigepflicht",
      "die Meinungsfreiheit"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 275,
    "question": "Was braucht man in Deutschland für eine Ehescheidung?",
    "options": [
      "die Einwilligung der Eltern",
      "ein Attest einer Ärztin / eines Arztes",
      "die Einwilligung der Kinder",
      "die Unterstützung einer Anwältin / eines Anwalts"
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 276,
    "question": "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin / Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?",
    "options": [
      "Ich kann nichts tun.",
      "Ich muss mir diese Behandlung gefallen lassen.",
      "Ich drohe der Person.",
      "Ich kann mich bei der Behördenleiterin / beim Behördenleiter beschweren."
    ],
    "correctIndex": 3,
    "category": "Staat"
  },
  {
    "id": 277,
    "question": "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
    "options": [
      "kein Englisch spricht.",
      "zu hohe Gehaltsvorstellungen hat.",
      "keine Erfahrungen in diesem Beruf hat.",
      "Mutter ist"
    ],
    "correctIndex": 3,
    "category": "Recht"
  },
  {
    "id": 278,
    "question": "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
    "options": [
      "im Rollstuhl sitzt.",
      "keine Erfahrung hat.",
      "zu hohe Gehaltsvorstellungen hat.",
      "kein Englisch spricht."
    ],
    "correctIndex": 0,
    "category": "Recht"
  },
  {
    "id": 279,
    "question": "In den meisten Mietshäusern in Deutschland gibt es eine \"Hausordnung\". Was steht in einer solchen \"Hausordnung\"? Sie nennt …",
    "options": [
      "Regeln für die Benutzung öffentlicher Verkehrsmittel.",
      "alle Mieterinnen und Mieter im Haus.",
      "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.",
      "die Adresse des nächsten Ordnungsamtes."
    ],
    "correctIndex": 2,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 280,
    "question": "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
    "options": [
      "nichts machen.",
      "den Bescheid wegwerfen.",
      "Einspruch einlegen.",
      "warten, bis ein anderer Bescheid kommt."
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 281,
    "question": "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
    "options": [
      "Meinungsfreiheit",
      "Gleichbehandlung",
      "Versammlungsfreiheit",
      "Freizügigkeit"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 282,
    "question": "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?",
    "options": [
      "Vereinstrainerin / Vereinstrainer",
      "Wahlhelferin / Wahlhelfer",
      "Bibliotheksaufsicht",
      "Lehrerin / Lehrer"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 283,
    "question": "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
    "options": [
      "Ich lasse die Rechnung liegen.",
      "Ich lege Widerspruch bei der Behörde ein.",
      "Ich schicke die Rechnung an die Behörde zurück.",
      "Ich gehe mit der Rechnung zum Finanzamt"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 284,
    "question": "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?",
    "options": [
      "Es ist egal, was man lernt.",
      "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
      "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
      "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert."
    ],
    "correctIndex": 1,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 285,
    "question": "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
    "options": [
      "Lohnsteuer",
      "Beiträge zur Arbeitslosenversicherung",
      "Beiträge zur Renten- und Krankenversicherung",
      "Umsatzsteuer"
    ],
    "correctIndex": 3,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 286,
    "question": "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin / dem Arbeitgeber?",
    "options": [
      "der Betriebsrat",
      "die Betriebsprüferin / der Betriebsprüfer",
      "die Betriebsgruppe",
      "das Betriebsmanagement"
    ],
    "correctIndex": 0,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 287,
    "question": "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
    "options": [
      "die Gehaltszahlungen",
      "die Arbeitszeit",
      "die Kündigungsfrist",
      "die Versicherungspflicht"
    ],
    "correctIndex": 2,
    "category": "Bildung und Arbeit"
  },
  {
    "id": 288,
    "question": "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?",
    "options": [
      "aus der Mitgliedschaft in der Europäischen Union (EU)",
      "aus den nationalsozialistischen Verbrechen gegen Juden",
      "aus dem Grundgesetz der Bundesrepublik Deutschland",
      "aus der christlichen Tradition"
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 289,
    "question": "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
    "options": [
      "seine Deutschkenntnisse zu gering sind.",
      "er zu hohe Gehaltsvorstellungen hat.",
      "er eine dunkle Haut hat.",
      "er keine Erfahrungen im Beruf hat."
    ],
    "correctIndex": 2,
    "category": "Recht"
  },
  {
    "id": 290,
    "question": "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
    "options": [
      "eine Anzeige schreiben",
      "den Fernseher reklamieren",
      "das Gerät ungefragt austauschen",
      "die Garantie verlängern"
    ],
    "correctIndex": 1,
    "category": "Recht"
  },
  {
    "id": 291,
    "question": "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
    "options": [
      "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
      "das für die Statistik in Deutschland wichtig ist.",
      "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
      "die Kirche für die Steuererklärung verantwortlich ist."
    ],
    "correctIndex": 0,
    "category": "Religion und Kultur"
  },
  {
    "id": 292,
    "question": "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
    "options": [
      "Es dürfen keine Moscheen gebaut werden.",
      "Alle Menschen glauben an Gott.",
      "Jeder kann glauben, was er möchte.",
      "Der Staat entscheidet, an welchen Gott die Menschen glauben."
    ],
    "correctIndex": 2,
    "category": "Religion und Kultur"
  },
  {
    "id": 293,
    "question": "Was ist in Deutschland ein Brauch zu Ostern?",
    "options": [
      "Kürbisse vor die Tür stellen",
      "einen Tannenbaum schmücken",
      "Eier bemalen",
      "Raketen in die Luft schießen"
    ],
    "correctIndex": 2,
    "category": "Religion und Kultur"
  },
  {
    "id": 294,
    "question": "Pfingsten ist ein …",
    "options": [
      "christlicher Feiertag.",
      "deutscher Gedenktag.",
      "internationaler Trauertag.",
      "bayerischer Brauch"
    ],
    "correctIndex": 0,
    "category": "Religion und Kultur"
  },
  {
    "id": 295,
    "question": "Welche Religion hat die europäische und deutsche Kultur geprägt?",
    "options": [
      "der Hinduismus",
      "das Christentum",
      "der Buddhismus",
      "der Islam"
    ],
    "correctIndex": 1,
    "category": "Religion und Kultur"
  },
  {
    "id": 296,
    "question": "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
    "options": [
      "den Buß- und Bettag.",
      "das Erntedankfest.",
      "die Adventszeit.",
      "Allerheiligen."
    ],
    "correctIndex": 2,
    "category": "Religion und Kultur"
  },
  {
    "id": 297,
    "question": "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?",
    "options": [
      "Italien",
      "Polen",
      "Marokko",
      "Türkei"
    ],
    "correctIndex": 3,
    "category": "Gesellschaft und Familie"
  },
  {
    "id": 298,
    "question": "In der DDR lebten vor allem Migrantinnen und Migranten aus …",
    "options": [
      "Vietnam, Polen, Mosambik.",
      "Frankreich, Rumänien, Somalia.",
      "Chile, Ungarn, Simbabwe.",
      "Nordkorea, Mexiko, Ägypten."
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 299,
    "question": "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
    "options": [
      "Schwarzarbeiterinnen / Schwarzarbeiter.",
      "Gastarbeiterinnen / Gastarbeiter.",
      "Zeitarbeiterinnen / Zeitarbeiter.",
      "Schichtarbeiterinnen / Schichtarbeiter."
    ],
    "correctIndex": 1,
    "category": "Geschichte"
  },
  {
    "id": 300,
    "question": "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?",
    "options": [
      "Italien",
      "Spanien",
      "Portugal",
      "Türkei"
    ],
    "correctIndex": 0,
    "category": "Geschichte"
  },
  {
    "id": 301,
    "question": "Welches Wappen gehört zum Bundesland Baden-Württemberg?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 0,
    "category": "Baden-Württemberg"
  },
  {
    "id": 302,
    "question": "Welches ist ein Landkreis in Baden-Württemberg?",
    "options": [
      "Mecklenburgische Seenplatte",
      "Neckar-Odenwald-Kreis",
      "Nordfriesland",
      "Altötting"
    ],
    "correctIndex": 1,
    "category": "Baden-Württemberg"
  },
  {
    "id": 303,
    "question": "Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Baden-Württemberg"
  },
  {
    "id": 304,
    "question": "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Baden-Württemberg"
  },
  {
    "id": 305,
    "question": "Welche Farben hat die Landesflagge von Baden-Württemberg?",
    "options": [
      "blau-weiß-rot",
      "schwarz-gold",
      "weiß-blau",
      "grün-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Baden-Württemberg"
  },
  {
    "id": 306,
    "question": "Wo können Sie sich in Baden-Württemberg über politische Themen informieren?",
    "options": [
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale",
      "bei der Landeszentrale für politische Bildung",
      "bei den Kirchen"
    ],
    "correctIndex": 2,
    "category": "Baden-Württemberg"
  },
  {
    "id": 307,
    "question": "Die Landeshauptstadt von Baden-Württemberg heißt …",
    "options": [
      "Heidelberg",
      "Stuttgart",
      "Karlsruhe",
      "Mannheim"
    ],
    "correctIndex": 1,
    "category": "Baden-Württemberg"
  },
  {
    "id": 308,
    "question": "Welches Bundesland ist Baden-Württemberg?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "category": "Baden-Württemberg"
  },
  {
    "id": 309,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Baden-Württemberg?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Baden-Württemberg"
  },
  {
    "id": 310,
    "question": "Welche Ministerin / welchen Minister hat Baden-Württemberg nicht?",
    "options": [
      "Finanzministerin / Finanzminister",
      "Justizministerin / Justizminister",
      "Innenministerin / Innenminister",
      "Außenministerin / Außenminister"
    ],
    "correctIndex": 3,
    "category": "Baden-Württemberg"
  },
  {
    "id": 311,
    "question": "Welches Wappen gehört zum Freistaat Bayern?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 1,
    "category": "Bayern"
  },
  {
    "id": 312,
    "question": "Welches ist ein Landkreis in Bayern?",
    "options": [
      "Prignitz",
      "Rhein-Sieg-Kreis",
      "Nordfriesland",
      "Altötting"
    ],
    "correctIndex": 3,
    "category": "Bayern"
  },
  {
    "id": 313,
    "question": "Für wie viele Jahre wird der Landtag in Bayern gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Bayern"
  },
  {
    "id": 314,
    "question": "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "category": "Bayern"
  },
  {
    "id": 315,
    "question": "Welche Farben hat die Landesflagge von Bayern?",
    "options": [
      "blau-weiß-rot",
      "weiß-blau",
      "grün-weiß-rot",
      "schwarz-gelb"
    ],
    "correctIndex": 1,
    "category": "Bayern"
  },
  {
    "id": 316,
    "question": "Wo können Sie sich in Bayern über politische Themen informieren?",
    "options": [
      "beim Ordnungsamt der Gemeinde",
      "bei der Landeszentrale für politische Bildung",
      "bei der Verbraucherzentrale",
      "bei den Kirchen"
    ],
    "correctIndex": 1,
    "category": "Bayern"
  },
  {
    "id": 317,
    "question": "Die Landeshauptstadt von Bayern heißt …",
    "options": [
      "Ingolstadt",
      "Regensburg",
      "Nürnberg",
      "München"
    ],
    "correctIndex": 3,
    "category": "Bayern"
  },
  {
    "id": 318,
    "question": "Welches Bundesland ist Bayern?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "category": "Bayern"
  },
  {
    "id": 319,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Bayern?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Bayern"
  },
  {
    "id": 320,
    "question": "Welche Ministerin / welchen Minister hat Bayern nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Bayern"
  },
  {
    "id": 321,
    "question": "Welches Wappen gehört zum Bundesland Berlin?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Berlin"
  },
  {
    "id": 322,
    "question": "Welches ist ein Bezirk von Berlin?",
    "options": [
      "Altona",
      "Prignitz",
      "Pankow",
      "Mecklenburgische Seenplatte"
    ],
    "correctIndex": 2,
    "category": "Berlin"
  },
  {
    "id": 323,
    "question": "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Berlin"
  },
  {
    "id": 324,
    "question": "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Berlin"
  },
  {
    "id": 325,
    "question": "Welche Farben hat die Landesflagge von Berlin?",
    "options": [
      "blau-weiß-rot",
      "weiß-rot",
      "grün-weiß-rot",
      "schwarz-gold"
    ],
    "correctIndex": 1,
    "category": "Berlin"
  },
  {
    "id": 326,
    "question": "Wo können Sie sich in Berlin über politische Themen informieren?",
    "options": [
      "beim Ordnungsamt der Gemeinde",
      "bei den Kirchen",
      "bei der Verbraucherzentrale",
      "bei der Landeszentrale für politische Bildung"
    ],
    "correctIndex": 3,
    "category": "Berlin"
  },
  {
    "id": 327,
    "question": "Welches Bundesland ist ein Stadtstaat?",
    "options": [
      "Berlin",
      "Saarland",
      "Brandenburg",
      "Hessen"
    ],
    "correctIndex": 0,
    "category": "Berlin"
  },
  {
    "id": 328,
    "question": "Welches Bundesland ist Berlin?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "category": "Berlin"
  },
  {
    "id": 329,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef des Stadtstaates Berlin?",
    "options": [
      "Ministerpräsidentin / Ministerpräsident",
      "Oberbürgermeisterin / Oberbürgermeister",
      "Präsidentin / Präsident des Senates",
      "Regierende Bürgermeisterin / Regierender Bürgermeister"
    ],
    "correctIndex": 3,
    "category": "Berlin"
  },
  {
    "id": 330,
    "question": "Welche Senatorin / welchen Senator hat Berlin nicht?",
    "options": [
      "Finanzsenatorin / Finanzsenator",
      "Innensenatorin / Innensenator",
      "Senatorin / Senator für Außenbeziehungen",
      "Justizsenatorin / Justizsenator"
    ],
    "correctIndex": 2,
    "category": "Berlin"
  },
  {
    "id": 331,
    "question": "Welches Wappen gehört zum Bundesland Brandenburg?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 0,
    "category": "Brandenburg"
  },
  {
    "id": 332,
    "question": "Welches ist ein Landkreis in Brandenburg?",
    "options": [
      "Prignitz",
      "Rhein-Sieg-Kreis",
      "Vogtlandkreis",
      "Amberg-Sulzbach"
    ],
    "correctIndex": 0,
    "category": "Brandenburg"
  },
  {
    "id": 333,
    "question": "Für wie viele Jahre wird der Landtag in Brandenburg gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Brandenburg"
  },
  {
    "id": 334,
    "question": "Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Brandenburg"
  },
  {
    "id": 335,
    "question": "Welche Farben hat die Landesflagge von Brandenburg?",
    "options": [
      "blau-weiß-rot",
      "rot-weiß",
      "grün-weiß-rot",
      "schwarz-gelb"
    ],
    "correctIndex": 1,
    "category": "Brandenburg"
  },
  {
    "id": 336,
    "question": "Wo können Sie sich in Brandenburg über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "beim Ordnungsamt der Gemeinde",
      "bei der Landeszentrale für politische Bildung",
      "bei der Verbraucherzentrale"
    ],
    "correctIndex": 2,
    "category": "Brandenburg"
  },
  {
    "id": 337,
    "question": "Die Landeshauptstadt von Brandenburg heißt …",
    "options": [
      "Potsdam",
      "Cottbus",
      "Brandenburg",
      "Frankfurt/Oder"
    ],
    "correctIndex": 0,
    "category": "Brandenburg"
  },
  {
    "id": 338,
    "question": "Welches Bundesland ist Brandenburg?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "category": "Brandenburg"
  },
  {
    "id": 339,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Brandenburg?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Brandenburg"
  },
  {
    "id": 340,
    "question": "Welche Ministerin / welchen Minister hat Brandenburg nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Brandenburg"
  },
  {
    "id": 341,
    "question": "Welches Wappen gehört zur Freien Hansestadt Bremen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 2,
    "category": "Bremen"
  },
  {
    "id": 342,
    "question": "Welches ist ein Stadtteil von Bremen?",
    "options": [
      "Altona",
      "Hemelingen",
      "Pankow",
      "Babelsberg"
    ],
    "correctIndex": 1,
    "category": "Bremen"
  },
  {
    "id": 343,
    "question": "Für wie viele Jahre wird das Landesparlament in Bremen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "category": "Bremen"
  },
  {
    "id": 344,
    "question": "Ab welchem Alter darf man in Bremen bei den Wahlen zur Bürgerschaft (Landtag) wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Bremen"
  },
  {
    "id": 345,
    "question": "Welche Farben hat die Landesflagge von Bremen?",
    "options": [
      "blau-weiß-rot",
      "rot-weiß",
      "grün-weiß-rot",
      "schwarz-gold"
    ],
    "correctIndex": 1,
    "category": "Bremen"
  },
  {
    "id": 346,
    "question": "Wo können Sie sich in Bremen über politische Themen informieren?",
    "options": [
      "beim Ordnungsamt der Gemeinde",
      "bei der Landeszentrale für politische Bildung",
      "bei den Kirchen",
      "bei der Verbraucherzentrale"
    ],
    "correctIndex": 1,
    "category": "Bremen"
  },
  {
    "id": 347,
    "question": "Was ist ein deutscher Stadtstaat?",
    "options": [
      "Bremen",
      "München",
      "Frankfurt",
      "Erfurt"
    ],
    "correctIndex": 0,
    "category": "Bremen"
  },
  {
    "id": 348,
    "question": "Welches Bundesland ist Bremen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "category": "Bremen"
  },
  {
    "id": 349,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef des Stadtstaates Bremen?",
    "options": [
      "Ministerpräsidentin / Ministerpräsident",
      "Erste Bürgermeisterin / Erster Bürgermeister",
      "Präsidentin / Präsident des Senates",
      "Regierende Bürgermeisterin / Regierender Bürgermeister"
    ],
    "correctIndex": 2,
    "category": "Bremen"
  },
  {
    "id": 350,
    "question": "Welche Senatorin / welchen Senator hat Bremen nicht?",
    "options": [
      "Senatorin / Senator für Außenbeziehungen",
      "Finanzsenatorin / Finanzsenator",
      "Justizsenatorin / Justizsenator",
      "Innensenatorin / Innensenator"
    ],
    "correctIndex": 0,
    "category": "Bremen"
  },
  {
    "id": 351,
    "question": "Welches Wappen gehört zur Freien und Hansestadt Hamburg?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 1,
    "category": "Hamburg"
  },
  {
    "id": 352,
    "question": "Welches ist ein Bezirk von Hamburg?",
    "options": [
      "Altona",
      "Hemelingen",
      "Pankow",
      "Mecklenburgische Seenplatte"
    ],
    "correctIndex": 0,
    "category": "Hamburg"
  },
  {
    "id": 353,
    "question": "Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Hamburg"
  },
  {
    "id": 354,
    "question": "Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (Wahl der Bezirksversammlungen) wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Hamburg"
  },
  {
    "id": 355,
    "question": "Welche Farben hat die Landesflagge von Hamburg?",
    "options": [
      "blau-weiß-rot",
      "weiß-rot",
      "grün-weiß-rot",
      "schwarz-gelb"
    ],
    "correctIndex": 1,
    "category": "Hamburg"
  },
  {
    "id": 356,
    "question": "Wo können Sie sich in Hamburg über politische Themen informieren?",
    "options": [
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale",
      "bei den Kirchen",
      "bei der Landeszentrale für politische Bildung"
    ],
    "correctIndex": 3,
    "category": "Hamburg"
  },
  {
    "id": 357,
    "question": "Welches Bundesland ist ein Stadtstaat?",
    "options": [
      "Hamburg",
      "Sachsen",
      "Bayern",
      "Thüringen"
    ],
    "correctIndex": 0,
    "category": "Hamburg"
  },
  {
    "id": 358,
    "question": "Welches Bundesland ist Hamburg?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "category": "Hamburg"
  },
  {
    "id": 359,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef des Stadtstaates Hamburg?",
    "options": [
      "Ministerpräsidentin / Ministerpräsident",
      "Erste Bürgermeisterin / Erster Bürgermeister",
      "Regierende Senatorin / Regierender Senator",
      "Oberbürgermeisterin / Oberbürgermeister"
    ],
    "correctIndex": 1,
    "category": "Hamburg"
  },
  {
    "id": 360,
    "question": "Welche Senatorin / welchen Senator hat Hamburg nicht?",
    "options": [
      "Justizsenatorin / Justizsenator",
      "Senatorin / Senator für Außenbeziehungen",
      "Finanzsenatorin / Finanzsenator",
      "Innensenatorin / Innensenator"
    ],
    "correctIndex": 1,
    "category": "Hamburg"
  },
  {
    "id": 361,
    "question": "Welches Wappen gehört zum Bundesland Hessen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 0,
    "category": "Hessen"
  },
  {
    "id": 362,
    "question": "Welches ist ein Landkreis in Hessen?",
    "options": [
      "Ammerland",
      "Altötting",
      "Prignitz",
      "Main-Taunus-Kreis"
    ],
    "correctIndex": 3,
    "category": "Hessen"
  },
  {
    "id": 363,
    "question": "Für wie viele Jahre wird der Landtag in Hessen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Hessen"
  },
  {
    "id": 364,
    "question": "Ab welchem Alter darf man in Hessen bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "category": "Hessen"
  },
  {
    "id": 365,
    "question": "Welche Farben hat die Landesflagge von Hessen?",
    "options": [
      "blau-weiß-rot",
      "rot-weiß",
      "schwarz-gold",
      "grün-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Hessen"
  },
  {
    "id": 366,
    "question": "Wo können Sie sich in Hessen über politische Themen informieren?",
    "options": [
      "bei der Landeszentrale für politische Bildung",
      "bei der Verbraucherzentrale",
      "beim Ordnungsamt der Gemeinde",
      "bei den Kirchen"
    ],
    "correctIndex": 0,
    "category": "Hessen"
  },
  {
    "id": 367,
    "question": "Die Landeshauptstadt von Hessen heißt …",
    "options": [
      "Kassel",
      "Darmstadt",
      "Frankfurt",
      "Wiesbaden"
    ],
    "correctIndex": 3,
    "category": "Hessen"
  },
  {
    "id": 368,
    "question": "Welches Bundesland ist Hessen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "category": "Hessen"
  },
  {
    "id": 369,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Hessen?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Hessen"
  },
  {
    "id": 370,
    "question": "Welche Ministerin / welchen Minister hat Hessen nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Hessen"
  },
  {
    "id": 371,
    "question": "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 2,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 372,
    "question": "Welches ist ein Landkreis in Mecklenburg-Vorpommern?",
    "options": [
      "Prignitz",
      "Mecklenburgische Seenplatte",
      "Vogtlandkreis",
      "Rhein-Sieg-Kreis"
    ],
    "correctIndex": 1,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 373,
    "question": "Für wie viele Jahre wird der Landtag in Mecklenburg-Vorpommern gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 374,
    "question": "Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 375,
    "question": "Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?",
    "options": [
      "schwarz-rot-gold",
      "blau-weiß-gelb-rot",
      "grün-weiß-rot",
      "schwarz-gelb"
    ],
    "correctIndex": 1,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 376,
    "question": "Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?",
    "options": [
      "bei der Landeszentrale für politische Bildung",
      "bei den Kirchen",
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale"
    ],
    "correctIndex": 0,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 377,
    "question": "Die Landeshauptstadt von Mecklenburg-Vorpommern heißt …",
    "options": [
      "Greifswald",
      "Schwerin",
      "Rostock",
      "Wismar"
    ],
    "correctIndex": 1,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 378,
    "question": "Welches Bundesland ist Mecklenburg-Vorpommern?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 379,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Mecklenburg-Vorpommern?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 380,
    "question": "Welche Ministerin / welchen Minister hat Mecklenburg-Vorpommern nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Mecklenburg-Vorpommern"
  },
  {
    "id": 381,
    "question": "Welches Wappen gehört zum Bundesland Niedersachsen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 2,
    "category": "Niedersachsen"
  },
  {
    "id": 382,
    "question": "Welches ist ein Landkreis in Niedersachsen?",
    "options": [
      "Ammerland",
      "Rhein-Sieg-Kreis",
      "Nordfriesland",
      "Vogtlandkreis"
    ],
    "correctIndex": 0,
    "category": "Niedersachsen"
  },
  {
    "id": 383,
    "question": "Für wie viele Jahre wird der Landtag in Niedersachsen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Niedersachsen"
  },
  {
    "id": 384,
    "question": "Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Niedersachsen"
  },
  {
    "id": 385,
    "question": "Welche Farben hat die Landesflagge von Niedersachsen?",
    "options": [
      "weiß-blau",
      "schwarz-rot-gold",
      "schwarz-gelb",
      "blau-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Niedersachsen"
  },
  {
    "id": 386,
    "question": "Wo können Sie sich in Niedersachsen über politische Themen informieren?",
    "options": [
      "bei der Landeszentrale für politische Bildung",
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale",
      "bei den Kirchen"
    ],
    "correctIndex": 0,
    "category": "Niedersachsen"
  },
  {
    "id": 387,
    "question": "Die Landeshauptstadt von Niedersachsen heißt …",
    "options": [
      "Hannover",
      "Braunschweig",
      "Wolfsburg",
      "Osnabrück"
    ],
    "correctIndex": 0,
    "category": "Niedersachsen"
  },
  {
    "id": 388,
    "question": "Welches Bundesland ist Niedersachsen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "category": "Niedersachsen"
  },
  {
    "id": 389,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Niedersachsen?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Niedersachsen"
  },
  {
    "id": 390,
    "question": "Welche Ministerin / welchen Minister hat Niedersachsen nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Niedersachsen"
  },
  {
    "id": 391,
    "question": "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 1,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 392,
    "question": "Welches ist ein Landkreis in Nordrhein-Westfalen?",
    "options": [
      "Ammerland",
      "Rhein-Sieg-Kreis",
      "Nordfriesland",
      "Vogtlandkreis"
    ],
    "correctIndex": 1,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 393,
    "question": "Für wie viele Jahre wird der Landtag in Nordrhein-Westfalen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 394,
    "question": "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 395,
    "question": "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?",
    "options": [
      "rot-weiß",
      "grün-weiß-rot",
      "schwarz-gold",
      "blau-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 396,
    "question": "Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale",
      "bei der Landeszentrale für politische Bildung"
    ],
    "correctIndex": 3,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 397,
    "question": "Die Landeshauptstadt von Nordrhein-Westfalen heißt …",
    "options": [
      "Köln",
      "Bonn",
      "Düsseldorf",
      "Dortmund"
    ],
    "correctIndex": 2,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 398,
    "question": "Welches Bundesland ist Nordrhein-Westfalen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 399,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Nordrhein-Westfalen?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 400,
    "question": "Welche Ministerin / welchen Minister hat Nordrhein-Westfalen nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Nordrhein-Westfalen"
  },
  {
    "id": 401,
    "question": "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 0,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 402,
    "question": "Welches ist ein Landkreis in Rheinland-Pfalz?",
    "options": [
      "Westerwaldkreis",
      "Altötting",
      "Emsland",
      "Prignitz"
    ],
    "correctIndex": 0,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 403,
    "question": "Für wie viele Jahre wird der Landtag in Rheinland-Pfalz gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 404,
    "question": "Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 405,
    "question": "Welche Farben hat die Landesflagge von Rheinland-Pfalz?",
    "options": [
      "weiß-rot",
      "schwarz-rot-gold",
      "schwarz-gelb",
      "grün-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 406,
    "question": "Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "bei der Verbraucherzentrale",
      "beim Ordnungsamt der Gemeinde",
      "bei der Landeszentrale für politische Bildung"
    ],
    "correctIndex": 3,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 407,
    "question": "Die Landeshauptstadt von Rheinland-Pfalz heißt …",
    "options": [
      "Mainz",
      "Kaiserslautern",
      "Ludwigshafen",
      "Koblenz"
    ],
    "correctIndex": 0,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 408,
    "question": "Welches Bundesland ist Rheinland-Pfalz?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 409,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Rheinland-Pfalz?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 410,
    "question": "Welche Ministerin / welchen Minister hat Rheinland-Pfalz nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Rheinland-Pfalz"
  },
  {
    "id": 411,
    "question": "Welches Wappen gehört zum Bundesland Saarland?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Saarland"
  },
  {
    "id": 412,
    "question": "Welches ist ein Landkreis im Saarland?",
    "options": [
      "Mecklenburgische Seenplatte",
      "Altötting",
      "Neunkirchen",
      "Rhein-Sieg-Kreis"
    ],
    "correctIndex": 2,
    "category": "Saarland"
  },
  {
    "id": 413,
    "question": "Für wie viele Jahre wird der Landtag des Saarlandes gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Saarland"
  },
  {
    "id": 414,
    "question": "Ab welchem Alter darf man im Saarland bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "category": "Saarland"
  },
  {
    "id": 415,
    "question": "Welche Farben hat die Landesflagge des Saarlandes?",
    "options": [
      "weiß-blau",
      "schwarz-rot-gold",
      "schwarz-gelb",
      "grün-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Saarland"
  },
  {
    "id": 416,
    "question": "Wo können Sie sich im Saarland über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "bei der Landeszentrale für politische Bildung",
      "bei der Verbraucherzentrale",
      "beim Ordnungsamt der Gemeinde"
    ],
    "correctIndex": 1,
    "category": "Saarland"
  },
  {
    "id": 417,
    "question": "Die Landeshauptstadt des Saarlandes heißt …",
    "options": [
      "Neunkirchen",
      "Homburg",
      "Saarbrücken",
      "Völklingen"
    ],
    "correctIndex": 2,
    "category": "Saarland"
  },
  {
    "id": 418,
    "question": "Welches Bundesland ist das Saarland?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "category": "Saarland"
  },
  {
    "id": 419,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef des Saarlandes?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Saarland"
  },
  {
    "id": 420,
    "question": "Welche Ministerin / welchen Minister hat das Saarland nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Saarland"
  },
  {
    "id": 421,
    "question": "Welches Wappen gehört zum Freistaat Sachsen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Sachsen"
  },
  {
    "id": 422,
    "question": "Welches ist ein Landkreis in Sachsen?",
    "options": [
      "Vogtlandkreis",
      "Altötting",
      "Uckermark",
      "Nordfriesland"
    ],
    "correctIndex": 0,
    "category": "Sachsen"
  },
  {
    "id": 423,
    "question": "Für wie viele Jahre wird der Landtag in Sachsen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Sachsen"
  },
  {
    "id": 424,
    "question": "Ab welchem Alter darf man in Sachsen bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "category": "Sachsen"
  },
  {
    "id": 425,
    "question": "Welche Farben hat die Landesflagge von Sachsen?",
    "options": [
      "blau-weiß-rot",
      "weiß-grün",
      "grün-weiß-rot",
      "schwarz-gelb"
    ],
    "correctIndex": 1,
    "category": "Sachsen"
  },
  {
    "id": 426,
    "question": "Wo können Sie sich in Sachsen über politische Themen informieren?",
    "options": [
      "bei der Landeszentrale für politische Bildung",
      "beim Ordnungsamt der Gemeinde",
      "bei den Kirchen",
      "bei der Verbraucherzentrale"
    ],
    "correctIndex": 0,
    "category": "Sachsen"
  },
  {
    "id": 427,
    "question": "Die Landeshauptstadt von Sachsen heißt …",
    "options": [
      "Leipzig",
      "Dresden",
      "Chemnitz",
      "Zwickau"
    ],
    "correctIndex": 1,
    "category": "Sachsen"
  },
  {
    "id": 428,
    "question": "Welches Bundesland ist Sachsen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "category": "Sachsen"
  },
  {
    "id": 429,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Sachsen?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Sachsen"
  },
  {
    "id": 430,
    "question": "Welche Ministerin / welchen Minister hat Sachsen nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Sachsen"
  },
  {
    "id": 431,
    "question": "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 432,
    "question": "Welches ist ein Landkreis in Sachsen-Anhalt?",
    "options": [
      "Ammerland",
      "Altötting",
      "Uckermark",
      "Börde"
    ],
    "correctIndex": 3,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 433,
    "question": "Für wie viele Jahre wird der Landtag in Sachsen-Anhalt gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 434,
    "question": "Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 435,
    "question": "Welche Farben hat die Landesflagge von Sachsen-Anhalt?",
    "options": [
      "blau-weiß-rot",
      "gelb-schwarz",
      "grün-weiß-rot",
      "weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 436,
    "question": "Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "bei der Landeszentrale für politische Bildung",
      "beim Ordnungsamt der Gemeinde",
      "bei der Verbraucherzentrale"
    ],
    "correctIndex": 1,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 437,
    "question": "Die Landeshauptstadt von Sachsen-Anhalt heißt …",
    "options": [
      "Halle",
      "Dessau",
      "Magdeburg",
      "Wittenberg"
    ],
    "correctIndex": 2,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 438,
    "question": "Welches Bundesland ist Sachsen-Anhalt?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 439,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Sachsen-Anhalt?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 440,
    "question": "Welche Ministerin / welchen Minister hat Sachsen-Anhalt nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Sachsen-Anhalt"
  },
  {
    "id": 441,
    "question": "Welches Wappen gehört zum Bundesland Schleswig-Holstein?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 2,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 442,
    "question": "Welches ist ein Landkreis in Schleswig-Holstein?",
    "options": [
      "Ammerland",
      "Mecklenburgische Seenplatte",
      "Nordfriesland",
      "Rhein-Sieg-Kreis"
    ],
    "correctIndex": 2,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 443,
    "question": "Für wie viele Jahre wird der Landtag in Schleswig-Holstein gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 444,
    "question": "Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 445,
    "question": "Welche Farben hat die Landesflagge von Schleswig-Holstein?",
    "options": [
      "weiß-blau",
      "blau-weiß-rot",
      "weiß-rot",
      "grün-weiß-rot"
    ],
    "correctIndex": 1,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 446,
    "question": "Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?",
    "options": [
      "bei der Verbraucherzentrale",
      "beim Ordnungsamt der Gemeinde",
      "beim  /  bei der Landesbeauftragten für politische Bildung",
      "bei den Kirchen"
    ],
    "correctIndex": 2,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 447,
    "question": "Die Landeshauptstadt von Schleswig-Holstein heißt …",
    "options": [
      "Husum",
      "Flensburg",
      "Lübeck",
      "Kiel"
    ],
    "correctIndex": 3,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 448,
    "question": "Welches Bundesland ist Schleswig-Holstein?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 449,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Schleswig-Holstein?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 450,
    "question": "Welche Ministerin / welchen Minister hat Schleswig-Holstein nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Schleswig-Holstein"
  },
  {
    "id": 451,
    "question": "Welches Wappen gehört zum Freistaat Thüringen?",
    "options": [
      "Bild 1",
      "Bild 2",
      "Bild 3",
      "Bild 4"
    ],
    "correctIndex": 3,
    "category": "Thüringen"
  },
  {
    "id": 452,
    "question": "Welches ist ein Landkreis in Thüringen?",
    "options": [
      "Ammerland",
      "Altötting",
      "Nordfriesland",
      "Wartburgkreis"
    ],
    "correctIndex": 3,
    "category": "Thüringen"
  },
  {
    "id": 453,
    "question": "Für wie viele Jahre wird der Landtag in Thüringen gewählt?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "category": "Thüringen"
  },
  {
    "id": 454,
    "question": "Ab welchem Alter darf man in Thüringen bei Kommunalwahlen wählen?",
    "options": [
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "category": "Thüringen"
  },
  {
    "id": 455,
    "question": "Welche Farben hat die Landesflagge von Thüringen?",
    "options": [
      "blau-weiß-rot",
      "weiß-rot",
      "grün-weiß-rot",
      "schwarz-gold"
    ],
    "correctIndex": 1,
    "category": "Thüringen"
  },
  {
    "id": 456,
    "question": "Wo können Sie sich in Thüringen über politische Themen informieren?",
    "options": [
      "bei den Kirchen",
      "bei der Verbraucherzentrale",
      "bei der Landeszentrale für politische Bildung",
      "beim Ordnungsamt der Gemeinde"
    ],
    "correctIndex": 2,
    "category": "Thüringen"
  },
  {
    "id": 457,
    "question": "Die Landeshauptstadt von Thüringen heißt …",
    "options": [
      "Eisenach",
      "Erfurt",
      "Gera",
      "Jena"
    ],
    "correctIndex": 1,
    "category": "Thüringen"
  },
  {
    "id": 458,
    "question": "Welches Bundesland ist Thüringen?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "category": "Thüringen"
  },
  {
    "id": 459,
    "question": "Wie nennt man die Regierungschefin / den Regierungschef in Thüringen?",
    "options": [
      "Erste Ministerin / Erster Minister",
      "Premierministerin / Premierminister",
      "Bürgermeisterin / Bürgermeister",
      "Ministerpräsidentin / Ministerpräsident"
    ],
    "correctIndex": 3,
    "category": "Thüringen"
  },
  {
    "id": 460,
    "question": "Welche Ministerin / welchen Minister hat Thüringen nicht?",
    "options": [
      "Justizministerin / Justizminister",
      "Außenministerin / Außenminister",
      "Finanzministerin / Finanzminister",
      "Innenministerin / Innenminister"
    ],
    "correctIndex": 1,
    "category": "Thüringen"
  }
];
