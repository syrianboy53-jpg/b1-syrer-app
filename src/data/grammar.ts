// Auto-generated from b1-syrer.de website data
// Grammar: 38 rules | Vocabulary: 43 categories, 844 words

export interface GrammarRule {
  id: number;
  titleDE: string;
  titleAR: string;
  explanation: string;
  examples: { de: string; ar: string }[];
  tips?: string[];
  commonMistakes?: { wrong: string; right: string; why: string }[];
}

export interface VocabWord {
  de: string;
  ar: string;
  example: string;
}

export interface VocabCategory {
  id: string;
  name: string;
  nameAr?: string;
  icon: string;
  words: VocabWord[];
}

export const grammarRules: GrammarRule[] = [
  {
    "id": 1,
    "titleDE": "Perfekt",
    "titleAR": "الماضي – Perfekt (haben/sein + Partizip II)",
    "explanation": "زمن الماضي الأكثر استعمالاً في الكلام اليومي. يتكون من فعل مساعد (haben أو sein) في المضارع + اسم المفعول (Partizip II) في نهاية الجملة.",
    "examples": [
      {
        "de": "Perfekt",
        "ar": "زمن الماضي الأكثر استعمالاً في الكلام اليومي. يتكون من فعل مساعد (haben أو sein) في المضارع + اسم المفعول (Partizip II) في نهاية الجملة."
      }
    ],
    "tips": [
      "احفظ قائمة الأفعال غير المنتظمة (starke Verben) — هي الأكثر استعمالاً: gehen→gegangen، sein→gewesen، essen→gegessen، trinken→getrunken، fahren→gefahren.",
      "طريقة سهلة: أفعال الحركة (A→B) تأخذ sein، الباقي haben.",
      "sein و bleiben و werden تأخذ sein حتى لو ليست حركة (استثناء).",
      "عند الشك من Partizip II لفعل جديد، راجع قاموس Pons أو Duden."
    ],
    "commonMistakes": [
      {
        "wrong": "Ich habe nach Berlin gefahren.",
        "right": "Ich bin nach Berlin gefahren.",
        "why": ""
      },
      {
        "wrong": "Ich habe Pizza geessen.",
        "right": "Ich habe Pizza gegessen.",
        "why": ""
      },
      {
        "wrong": "Ich habe Medizin gestudiert.",
        "right": "Ich habe Medizin studiert.",
        "why": ""
      },
      {
        "wrong": "Ich habe gegessen Pizza.",
        "right": "Ich habe Pizza gegessen.",
        "why": ""
      }
    ]
  },
  {
    "id": 2,
    "titleDE": "Präteritum",
    "titleAR": "الماضي البسيط – Präteritum",
    "explanation": "يُستخدم في النصوص المكتوبة (كالقصص والأخبار) ومع بعض الأفعال (sein, haben, werden والأفعال الشرطية – modal verbs) حتى في الكلام.",
    "examples": [
      {
        "de": "Präteritum",
        "ar": "يُستخدم في النصوص المكتوبة (كالقصص والأخبار) ومع بعض الأفعال (sein, haben, werden والأفعال الشرطية – modal verbs) حتى في الكلام."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 3,
    "titleDE": "Akkusativ und Dativ",
    "titleAR": "حالتَا النصب (Akkusativ) والجر (Dativ)",
    "explanation": "أكثر نقطة قواعد تُربك الناطقين بالعربية. تعتمد على الفعل وعلى حروف الجر.",
    "examples": [
      {
        "de": "Akkusativ und Dativ",
        "ar": "أكثر نقطة قواعد تُربك الناطقين بالعربية. تعتمد على الفعل وعلى حروف الجر."
      }
    ],
    "tips": [
      "احفظ قائمة الأفعال التي تأخذ Dativ: helfen, danken, gehören, gefallen, schmecken, antworten, folgen, passen — ست أو سبع أفعال تكفي لـ90% من الحالات.",
      "حروف الجر الثابتة مع Akk: **durch-für-gegen-ohne-um** — احفظها كلمة واحدة \"DuFüGegOhUm\".",
      "حروف الجر الثابتة مع Dat: **aus-bei-mit-nach-seit-von-zu** — احفظها كجملة \"Aus bei mit nach seit von zu\".",
      "لتحديد Akk أم Dat مع Wechselpräposition: اسأل \"Wohin? (إلى أين؟ حركة)\" أو \"Wo? (أين؟ ثبات)\"."
    ],
    "commonMistakes": [
      {
        "wrong": "Ich helfe meinen Freund.",
        "right": "Ich helfe meinem Freund.",
        "why": ""
      },
      {
        "wrong": "Ich habe ein Hund.",
        "right": "Ich habe einen Hund.",
        "why": ""
      },
      {
        "wrong": "Ich gehe mit mein Bruder.",
        "right": "Ich gehe mit meinem Bruder.",
        "why": ""
      },
      {
        "wrong": "Ich danke meinen Lehrer.",
        "right": "Ich danke meinem Lehrer.",
        "why": ""
      }
    ]
  },
  {
    "id": 4,
    "titleDE": "Nebensätze",
    "titleAR": "الجمل الجانبية – Nebensätze (weil, dass, wenn, obwohl)",
    "explanation": "في الجمل الجانبية يأتي الفعل المصرّف في النهاية. هذه نقطة أساسية في B1.",
    "examples": [
      {
        "de": "Nebensätze",
        "ar": "في الجمل الجانبية يأتي الفعل المصرّف في النهاية. هذه نقطة أساسية في B1."
      }
    ],
    "tips": [
      "قاعدة ذهبية: **بعد weil/dass/wenn/obwohl = الفعل في النهاية** (حفظها مرة واحدة يكفي).",
      "عند الاستخدام الشفهي يسمح بعض الألمان بترتيب عادي بعد weil، لكن في الامتحان اتبع القاعدة الرسمية.",
      "لاحظ الفاصلة (Komma) قبل أداة الربط — إلزامية.",
      "إذا بدأت الجملة بالجملة الجانبية، الجملة الرئيسية تبدأ بالفعل مباشرة: *Weil ich krank bin, komme ich nicht.*"
    ],
    "commonMistakes": [
      {
        "wrong": "Ich komme nicht, weil ich bin krank.",
        "right": "Ich komme nicht, weil ich krank bin.",
        "why": ""
      },
      {
        "wrong": "Ich denke, dass er hat Recht.",
        "right": "Ich denke, dass er Recht hat.",
        "why": ""
      },
      {
        "wrong": "Wenn ich habe Zeit, komme ich.",
        "right": "Wenn ich Zeit habe, komme ich.",
        "why": ""
      },
      {
        "wrong": "Ich sage, dass ich Deutsch habe gelernt.",
        "right": "Ich sage, dass ich Deutsch gelernt habe.",
        "why": ""
      }
    ]
  },
  {
    "id": 5,
    "titleDE": "Konjunktiv II",
    "titleAR": "الـ Konjunktiv II (التمني والأدب)",
    "explanation": "يُستخدم لطلب شيء بأدب، للأمنيات، والشروط غير الواقعية. يُلزم حفظ بعض الأشكال.",
    "examples": [
      {
        "de": "Konjunktiv II",
        "ar": "يُستخدم لطلب شيء بأدب، للأمنيات، والشروط غير الواقعية. يُلزم حفظ بعض الأشكال."
      }
    ],
    "tips": [
      "للسهولة: استخدم **würde + Infinitiv** مع أي فعل (ich würde gehen، du würdest essen).",
      "استثناءات مهمة: haben → hätte، sein → wäre، werden → würde. الأفعال الشرطية: könnte, müsste, wollte, dürfte, sollte.",
      "في المطعم دائماً: \"Ich hätte gern …\" أو \"Ich möchte …\".",
      "في الرسائل الرسمية: \"Könnten Sie bitte …\", \"Ich würde mich freuen, wenn …\"."
    ],
    "commonMistakes": [
      {
        "wrong": "Kannst du mir helfen bitte?",
        "right": "Könntest du mir bitte helfen?",
        "why": ""
      },
      {
        "wrong": "Ich will einen Kaffee.",
        "right": "Ich hätte gern einen Kaffee. / Ich möchte einen Kaffee.",
        "why": ""
      },
      {
        "wrong": "Wenn ich Zeit habe, würde ich reisen.",
        "right": "Wenn ich Zeit hätte, würde ich reisen.",
        "why": ""
      }
    ]
  },
  {
    "id": 6,
    "titleDE": "Passiv",
    "titleAR": "المبني للمجهول – Passiv (werden + Partizip II)",
    "explanation": "يُستخدم للتركيز على الحدث بدل الفاعل. كثير في النصوص الرسمية والأخبار.",
    "examples": [
      {
        "de": "Passiv",
        "ar": "يُستخدم للتركيز على الحدث بدل الفاعل. كثير في النصوص الرسمية والأخبار."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 7,
    "titleDE": "Adjektivdeklination",
    "titleAR": "تصريف الصفات – Adjektivdeklination",
    "explanation": "عندما تكون الصفة قبل الاسم، تأخذ نهاية. تعتمد على أداة التعريف/التنكير والجنس والحالة.",
    "examples": [
      {
        "de": "Adjektivdeklination",
        "ar": "عندما تكون الصفة قبل الاسم، تأخذ نهاية. تعتمد على أداة التعريف/التنكير والجنس والحالة."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 8,
    "titleDE": "Trennbare Verben",
    "titleAR": "الأفعال القابلة للفصل – Trennbare Verben",
    "explanation": "أفعال تحتوي على بادئة قابلة للفصل مثل: **auf-**, **an-**, **aus-**, **ein-**, **mit-**, **zu-**، يتم فصلها في المضارع والأمر، وتبقى مع بعضها في الجملة الجانبية والمصدر.",
    "examples": [
      {
        "de": "Trennbare Verben",
        "ar": "أفعال تحتوي على بادئة قابلة للفصل مثل: **auf-**, **an-**, **aus-**, **ein-**, **mit-**, **zu-**، يتم فصلها في المضارع والأمر، وتبقى مع بعضها في الجملة الجانبية والمصدر."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 9,
    "titleDE": "Relativsätze",
    "titleAR": "جملة الصلة – Relativsatz (der/die/das)",
    "explanation": "تُعرِّف اسماً بمعلومة إضافية. ضمير الصلة يتفق مع جنس الاسم السابق، وحالته تعتمد على دور الاسم في جملة الصلة.",
    "examples": [
      {
        "de": "Relativsätze",
        "ar": "تُعرِّف اسماً بمعلومة إضافية. ضمير الصلة يتفق مع جنس الاسم السابق، وحالته تعتمد على دور الاسم في جملة الصلة."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 10,
    "titleDE": "Modalverben",
    "titleAR": "الأفعال الشرطية – Modalverben",
    "explanation": "**können** (يستطيع)، **müssen** (يجب)، **sollen** (ينبغي)، **wollen** (يريد)، **dürfen** (يُسمح)، **möchten** (يودّ). يأتي الفعل الرئيسي في نهاية الجملة بصيغة المصدر (Infinitiv).",
    "examples": [
      {
        "de": "Modalverben",
        "ar": "**können** (يستطيع)، **müssen** (يجب)، **sollen** (ينبغي)، **wollen** (يريد)، **dürfen** (يُسمح)، **möchten** (يودّ). يأتي الفعل الرئيسي في نهاية الجملة بصيغة المصدر (Infinitiv)."
      }
    ],
    "tips": [
      "القاعدة الذهبية: \"Modalverb في المرتبة 2 + Infinitiv في النهاية\".",
      "möchten هو شكل Konjunktiv II من mögen، لذلك صرفه مختلف قليلاً (möchte/möchtest).",
      "في الطلبات المهذّبة استخدم **möchten** أو **könnten** بدل wollen/können.",
      "في الماضي استخدم Präteritum (ich konnte, ich musste) لا Perfekt."
    ],
    "commonMistakes": [
      {
        "wrong": "Ich muss zu arbeiten gehen.",
        "right": "Ich muss arbeiten gehen.",
        "why": ""
      },
      {
        "wrong": "Ich kann sprechen gut Deutsch.",
        "right": "Ich kann gut Deutsch sprechen.",
        "why": ""
      },
      {
        "wrong": "Er kannt nicht kommen.",
        "right": "Er kann nicht kommen.",
        "why": ""
      },
      {
        "wrong": "Ich habe gestern arbeiten müssen.",
        "right": "Ich musste gestern arbeiten.",
        "why": ""
      }
    ]
  },
  {
    "id": 11,
    "titleDE": "Wechselpräpositionen",
    "titleAR": "حروف الجر المتغيّرة (Wechselpräpositionen)",
    "explanation": "تسعة حروف جر تأخذ Akkusativ مع الحركة (Wohin?) وتأخذ Dativ مع المكان الثابت (Wo?).",
    "examples": [
      {
        "de": "Wechselpräpositionen",
        "ar": "تسعة حروف جر تأخذ Akkusativ مع الحركة (Wohin?) وتأخذ Dativ مع المكان الثابت (Wo?)."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 12,
    "titleDE": "Steigerung der Adjektive",
    "titleAR": "المقارنة والتفضيل – Komparativ & Superlativ",
    "explanation": "كيف نقول \"أطول\" و\"الأطول\" بالألمانية.",
    "examples": [
      {
        "de": "Steigerung der Adjektive",
        "ar": "كيف نقول \"أطول\" و\"الأطول\" بالألمانية."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 13,
    "titleDE": "Genitiv",
    "titleAR": "حالة المضاف إليه – Genitiv",
    "explanation": "تستخدم في الكتابة الرسمية وللتعبير عن الملكية. في الحياة اليومية يستعاض عنها بـ \"von + Dativ\".",
    "examples": [
      {
        "de": "Genitiv",
        "ar": "تستخدم في الكتابة الرسمية وللتعبير عن الملكية. في الحياة اليومية يستعاض عنها بـ \"von + Dativ\"."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 14,
    "titleDE": "Imperativ",
    "titleAR": "صيغة الأمر – Imperativ",
    "explanation": "تستخدم لإعطاء أوامر أو نصائح أو دعوات.",
    "examples": [
      {
        "de": "Imperativ",
        "ar": "تستخدم لإعطاء أوامر أو نصائح أو دعوات."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 15,
    "titleDE": "Reflexive Verben",
    "titleAR": "الأفعال الانعكاسية – Reflexive Verben",
    "explanation": "أفعال يتعلق فعلها بالفاعل نفسه (يستحم، يلبس، يفرح…). تحتاج ضمير انعكاسي.",
    "examples": [
      {
        "de": "Reflexive Verben",
        "ar": "أفعال يتعلق فعلها بالفاعل نفسه (يستحم، يلبس، يفرح…). تحتاج ضمير انعكاسي."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 16,
    "titleDE": "Futur I",
    "titleAR": "المستقبل – Futur I (werden + Infinitiv)",
    "explanation": "في الحياة اليومية يُعبَّر عن المستقبل غالباً بزمن المضارع + ظرف زمن. لكن في الوعود والتنبؤات نستعمل Futur I.",
    "examples": [
      {
        "de": "Futur I",
        "ar": "في الحياة اليومية يُعبَّر عن المستقبل غالباً بزمن المضارع + ظرف زمن. لكن في الوعود والتنبؤات نستعمل Futur I."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 17,
    "titleDE": "Indirekte Rede",
    "titleAR": "الكلام غير المباشر – Indirekte Rede",
    "explanation": "كيف ننقل ما قاله شخص آخر. في B1 نستعمل صيغة المضارع البسيطة عادة. صيغة Konjunktiv I تظهر في الإعلام والصحف.",
    "examples": [
      {
        "de": "Indirekte Rede",
        "ar": "كيف ننقل ما قاله شخص آخر. في B1 نستعمل صيغة المضارع البسيطة عادة. صيغة Konjunktiv I تظهر في الإعلام والصحف."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 18,
    "titleDE": "Pluralbildung",
    "titleAR": "الجمع – Plural",
    "explanation": "لا توجد قاعدة واحدة لتكوين الجمع. الأفضل أن تتعلّم الجمع مع كل اسم.",
    "examples": [
      {
        "de": "Pluralbildung",
        "ar": "لا توجد قاعدة واحدة لتكوين الجمع. الأفضل أن تتعلّم الجمع مع كل اسم."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 19,
    "titleDE": "Konnektoren – Satzverbindungen",
    "titleAR": "روابط الجمل (Konnektoren)",
    "explanation": "الكلمات التي تربط جملتين أو فكرتين معاً. مهمة جداً للكتابة وللمحادثة في B1.",
    "examples": [
      {
        "de": "Konnektoren – Satzverbindungen",
        "ar": "الكلمات التي تربط جملتين أو فكرتين معاً. مهمة جداً للكتابة وللمحادثة في B1."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 20,
    "titleDE": "Präpositionen mit Akkusativ / Dativ",
    "titleAR": "قائمة كاملة لحروف الجر (Akkusativ vs. Dativ)",
    "explanation": "احفظ هذه القوائم! هي مفتاح اختيار الحالة الصحيحة (Akkusativ أو Dativ) في كل جملة.",
    "examples": [
      {
        "de": "Präpositionen mit Akkusativ / Dativ",
        "ar": "احفظ هذه القوائم! هي مفتاح اختيار الحالة الصحيحة (Akkusativ أو Dativ) في كل جملة."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 21,
    "titleDE": "N-Deklination",
    "titleAR": "الأسماء التي تأخذ -n في كل الحالات (N-Deklination)",
    "explanation": "مجموعة من الأسماء **المذكّرة فقط** تأخذ -n أو -en في كل الحالات ما عدا Nominativ المفرد. خطأ شائع جداً.",
    "examples": [
      {
        "de": "N-Deklination",
        "ar": "مجموعة من الأسماء **المذكّرة فقط** تأخذ -n أو -en في كل الحالات ما عدا Nominativ المفرد. خطأ شائع جداً."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 22,
    "titleDE": "Adverbien & TeKaMoLo-Regel",
    "titleAR": "الظروف وترتيبها (TeKaMoLo)",
    "explanation": "إذا كان في الجملة عدة ظروف، يكون ترتيبها: **Te-Ka-Mo-Lo** = زمن - سبب - طريقة - مكان.",
    "examples": [
      {
        "de": "Adverbien & TeKaMoLo-Regel",
        "ar": "إذا كان في الجملة عدة ظروف، يكون ترتيبها: **Te-Ka-Mo-Lo** = زمن - سبب - طريقة - مكان."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 23,
    "titleDE": "Da- und Wo-Komposita",
    "titleAR": "مركّبات Da- و Wo- (damit, worauf...)",
    "explanation": "بدلاً من تكرار الاسم نستعمل da+حرف الجر، وللسؤال wo+حرف الجر. مع حروف العلة نضيف -r-.",
    "examples": [
      {
        "de": "Da- und Wo-Komposita",
        "ar": "بدلاً من تكرار الاسم نستعمل da+حرف الجر، وللسؤال wo+حرف الجر. مع حروف العلة نضيف -r-."
      }
    ],
    "tips": [],
    "commonMistakes": []
  },
  {
    "id": 24,
    "titleDE": "Verben mit festen Präpositionen",
    "titleAR": "الأفعال مع حروف جر ثابتة (Verben mit festen Präpositionen)",
    "explanation": "بعض الأفعال الألمانية تأتي دائماً مع حرف جر معيّن وحالة معيّنة (Akkusativ أو Dativ). يجب حفظها كوحدة واحدة لأنّ ترجمتها العربية لا تساعد دائماً.",
    "examples": [
      {
        "de": "Verben mit festen Präpositionen",
        "ar": "بعض الأفعال الألمانية تأتي دائماً مع حرف جر معيّن وحالة معيّنة (Akkusativ أو Dativ). يجب حفظها كوحدة واحدة لأنّ ترجمتها العربية لا تساعد دائماً."
      }
    ],
    "tips": [
      "احفظ الفعل دائماً مع حرف الجر والحالة (Akkusativ/Dativ).",
      "auf و an و über مع المستقبل/الذكريات/المواضيع غالباً مع Akkusativ.",
      "mit و bei و nach و von و zu دائماً مع Dativ."
    ],
    "commonMistakes": [
      {
        "wrong": "Ich warte für den Bus.",
        "right": "Ich warte auf den Bus.",
        "why": ""
      },
      {
        "wrong": "Ich denke an meiner Mutter.",
        "right": "Ich denke an meine Mutter.",
        "why": ""
      },
      {
        "wrong": "Ich freue mich für den Urlaub.",
        "right": "Ich freue mich auf den Urlaub.",
        "why": ""
      }
    ]
  },
  {
    "id": 25,
    "titleDE": "Partizip I und II als Adjektive",
    "titleAR": "Partizip I و Partizip II كصفات",
    "explanation": "يمكن تحويل الأفعال إلى صفات باستخدام Partizip I (للفعل النشط الذي يحدث الآن) أو Partizip II (للفعل المكتمل أو المبني للمجهول).",
    "examples": [
      {
        "de": "Partizip I und II als Adjektive",
        "ar": "يمكن تحويل الأفعال إلى صفات باستخدام Partizip I (للفعل النشط الذي يحدث الآن) أو Partizip II (للفعل المكتمل أو المبني للمجهول)."
      }
    ],
    "tips": [
      "Partizip I = حدث **يجري** الآن (مثل \"صفة من الفعل المضارع\").",
      "Partizip II = حدث **انتهى** أو شيء **مفعول به** (passive).",
      "تتصرّف هذه الصيغ كصفات عاديّة (تأخذ نهايات حسب الجنس/الحالة)."
    ],
    "commonMistakes": [
      {
        "wrong": "das schlafendes Kind",
        "right": "das schlafende Kind",
        "why": ""
      }
    ]
  },
  {
    "id": 26,
    "titleDE": "Modalpartikeln",
    "titleAR": "كلمات النبرة (Modalpartikeln) — doch, mal, eben, halt, ja",
    "explanation": "كلمات صغيرة تستخدم في المحادثة اليومية لإضافة نكهة أو لون عاطفي للجملة. لا يمكن ترجمتها حرفياً، لكنّها مهمّة جداً للنطق الطبيعي.",
    "examples": [
      {
        "de": "Modalpartikeln",
        "ar": "كلمات صغيرة تستخدم في المحادثة اليومية لإضافة نكهة أو لون عاطفي للجملة. لا يمكن ترجمتها حرفياً، لكنّها مهمّة جداً للنطق الطبيعي."
      }
    ],
    "tips": [
      "لا تترجم Modalpartikel حرفياً — تعلّم متى تستخدمها بالشعور.",
      "تأتي دائماً بعد الفعل المصرّف وقبل المفعول به.",
      "الإكثار منها قد يبدو مزعجاً — اكتفِ بواحدة أو اثنتين في الجملة."
    ],
    "commonMistakes": []
  },
  {
    "id": 27,
    "titleDE": "Temporalsätze",
    "titleAR": "الجمل الزمنية (während, bevor, nachdem, sobald, solange, seit)",
    "explanation": "جمل ثانوية تربط حدثين زمنياً (قبل/بعد/أثناء/منذ/بمجرد). كلّ حرف يحدّد علاقة زمنية مختلفة ويتطلّب أحياناً زمناً معيّناً للفعل.",
    "examples": [
      {
        "de": "Temporalsätze",
        "ar": "جمل ثانوية تربط حدثين زمنياً (قبل/بعد/أثناء/منذ/بمجرد). كلّ حرف يحدّد علاقة زمنية مختلفة ويتطلّب أحياناً زمناً معيّناً للفعل."
      }
    ],
    "tips": [],
    "commonMistakes": [
      {
        "wrong": "Wenn ich klein war, lebte ich in Damaskus.",
        "right": "Als ich klein war, lebte ich in Damaskus.",
        "why": ""
      },
      {
        "wrong": "Nachdem ich frühstücke, gehe ich zur Arbeit.",
        "right": "Nachdem ich gefrühstückt habe, gehe ich zur Arbeit.",
        "why": ""
      }
    ]
  },
  {
    "id": 28,
    "titleDE": "Kausalsätze",
    "titleAR": "الجمل السببية (weil, da, denn, deshalb, deswegen)",
    "explanation": "كلّها تعني \"لأنّ / لذلك\" لكن تختلف في تركيب الجملة. weil/da = جملة فرعية (الفعل في النهاية). denn = رابط جمل (الفعل في الموضع 2). deshalb/deswegen = ظرف (الفعل في الموضع 2 لكن الترتيب مقلوب).",
    "examples": [
      {
        "de": "Kausalsätze",
        "ar": "كلّها تعني \"لأنّ / لذلك\" لكن تختلف في تركيب الجملة. weil/da = جملة فرعية (الفعل في النهاية). denn = رابط جمل (الفعل في الموضع 2). deshalb/deswegen = ظرف (الفعل في الموضع 2 لكن الترتيب مقلوب)."
      }
    ],
    "tips": [],
    "commonMistakes": [
      {
        "wrong": "Ich bleibe zu Hause, weil ich bin krank.",
        "right": "Ich bleibe zu Hause, weil ich krank bin.",
        "why": ""
      },
      {
        "wrong": "Es regnet, deshalb ich bleibe zu Hause.",
        "right": "Es regnet, deshalb bleibe ich zu Hause.",
        "why": ""
      }
    ]
  },
  {
    "id": 29,
    "titleDE": "Finalsätze (damit / um zu)",
    "titleAR": "الجمل الغائية (damit / um ... zu) — لكي / من أجل",
    "explanation": "تستخدم للتعبير عن **الهدف** أو **الغاية**. القاعدة الذهبية: إذا كان الفاعل واحداً في الجملتين → استخدم **um ... zu**. إذا كان الفاعل مختلفاً → استخدم **damit**.",
    "examples": [
      {
        "de": "Finalsätze (damit / um zu)",
        "ar": "تستخدم للتعبير عن **الهدف** أو **الغاية**. القاعدة الذهبية: إذا كان الفاعل واحداً في الجملتين → استخدم **um ... zu**. إذا كان الفاعل مختلفاً → استخدم **damit**."
      }
    ],
    "tips": [
      "سؤال سحري: هل الفاعل **نفسه**؟ نعم → um zu. لا → damit.",
      "um zu يحتاج zu قبل الفعل في النهاية (kommen → zu kommen).",
      "مع أفعال قابلة للفصل: um einzukaufen (zu يدخل بين البادئة والجذر)."
    ],
    "commonMistakes": [
      {
        "wrong": "Ich gebe dir Geld, um du das Buch kaufst.",
        "right": "Ich gebe dir Geld, damit du das Buch kaufst.",
        "why": ""
      },
      {
        "wrong": "Ich lerne, damit ich die Prüfung bestehe.",
        "right": "Ich lerne, um die Prüfung zu bestehen.",
        "why": ""
      }
    ]
  },
  {
    "id": 30,
    "titleDE": "Konzessivsätze",
    "titleAR": "الجمل التنازلية (obwohl, trotzdem, trotz, dennoch)",
    "explanation": "تستخدم للتعبير عن **تناقض غير متوقّع** بين شيئين (مع أنّ X، إلّا أنّ Y).",
    "examples": [
      {
        "de": "Konzessivsätze",
        "ar": "تستخدم للتعبير عن **تناقض غير متوقّع** بين شيئين (مع أنّ X، إلّا أنّ Y)."
      }
    ],
    "tips": [],
    "commonMistakes": [
      {
        "wrong": "Obwohl es regnet, trotzdem gehe ich spazieren.",
        "right": "Obwohl es regnet, gehe ich spazieren. ✓ (أو) Es regnet. Trotzdem gehe ich spazieren. ✓",
        "why": ""
      },
      {
        "wrong": "Trotzdem es regnet, gehe ich spazieren.",
        "right": "Obwohl es regnet, gehe ich spazieren.",
        "why": ""
      }
    ]
  },
  {
    "id": 31,
    "titleDE": "Verneinung: nicht oder kein?",
    "titleAR": "النفي (nicht vs kein) — متى نستخدم كلّ منهما؟",
    "explanation": "القاعدة الذهبيّة: **kein** ينفي الأسماء **النكرة** والأسماء **بلا أداة** (المفرد النكرة + الجمع بلا أداة + غير المعدود). **nicht** ينفي كلّ شيء آخر (الأفعال، الصفات، الأسماء المعرّفة، الظروف).",
    "examples": [
      {
        "de": "Verneinung: nicht oder kein?",
        "ar": "القاعدة الذهبيّة: **kein** ينفي الأسماء **النكرة** والأسماء **بلا أداة** (المفرد النكرة + الجمع بلا أداة + غير المعدود). **nicht** ينفي كلّ شيء آخر (الأفعال، الصفات، الأسماء المعرّفة، الظروف)."
      }
    ],
    "tips": [],
    "commonMistakes": [
      {
        "wrong": "Ich habe nicht Auto.",
        "right": "Ich habe kein Auto.",
        "why": ""
      },
      {
        "wrong": "Ich kenne kein das Buch.",
        "right": "Ich kenne das Buch nicht.",
        "why": ""
      }
    ]
  },
  {
    "id": 32,
    "titleDE": "Plusquamperfekt",
    "titleAR": "الماضي البعيد (Plusquamperfekt)",
    "explanation": "زمن \"ماضي الماضي\" — يستخدم لوصف حدث وقع **قبل** حدث ماضٍ آخر. يتكوّن من **hatte/war + Partizip II**.",
    "examples": [
      {
        "de": "Plusquamperfekt",
        "ar": "زمن \"ماضي الماضي\" — يستخدم لوصف حدث وقع **قبل** حدث ماضٍ آخر. يتكوّن من **hatte/war + Partizip II**."
      }
    ],
    "tips": [],
    "commonMistakes": [
      {
        "wrong": "Nachdem ich gefrühstückt habe, ging ich zur Arbeit.",
        "right": "Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.",
        "why": ""
      }
    ]
  },
  {
    "id": 33,
    "titleDE": "Zahlen, Uhrzeit und Datum",
    "titleAR": "الأرقام والوقت والتاريخ",
    "explanation": "الأرقام في الألمانية لها قواعد خاصّة: تُقرأ من اليمين أبتداء من 21، الوقت له صيغ رسميّة وكلاميّة، والتاريخ يُكتب بترتيب يوم/شهر/سنة.",
    "examples": [
      {
        "de": "Zahlen, Uhrzeit und Datum",
        "ar": "الأرقام في الألمانية لها قواعد خاصّة: تُقرأ من اليمين أبتداء من 21، الوقت له صيغ رسميّة وكلاميّة، والتاريخ يُكتب بترتيب يوم/شهر/سنة."
      }
    ],
    "tips": [
      "انتبه: halb acht = 7:30 (وليس 8:30) — \"نصف الثامنة\" تعني نصف الطريق إلى الثامنة!",
      "في الكتابة: 1.234,56 (نقطة آلاف، فاصلة عشرية) — عكس الإنجليزية والعربية.",
      "أيام الأسبوع كلّها مذكّرة: der Montag, der Dienstag... → am Montag."
    ],
    "commonMistakes": []
  },
  {
    "id": 34,
    "titleDE": "Konjunktiv II (Gegenwart & Vergangenheit)",
    "titleAR": "Konjunktiv II — للأمنيات والافتراضات غير الواقعيّة",
    "explanation": "Konjunktiv II صيغة الشرط والأمنيّة في الألمانيّة. تُستخدم للأمنيات، الافتراضات غير الواقعيّة، الطلبات المؤدّبة، والندم على الماضي.",
    "examples": [
      {
        "de": "Konjunktiv II (Gegenwart & Vergangenheit)",
        "ar": "Konjunktiv II صيغة الشرط والأمنيّة في الألمانيّة. تُستخدم للأمنيات، الافتراضات غير الواقعيّة، الطلبات المؤدّبة، والندم على الماضي."
      }
    ],
    "tips": [
      "تذكّر الشكل السريع: haben→hätte, sein→wäre, werden→würde, können→könnte, müssen→müsste.",
      "للأفعال العادية، استخدم würde + Infinitiv دائماً لتجنّب الحفظ.",
      "الماضي = hätte/wäre + Partizip II. مع Modalverb الماضي: hätte + Infinitiv + Modalverb-Infinitiv.",
      "للطلبات المؤدّبة في المطعم/الفندق/العمل، استعمل: Könnte ich...? / Hätte ich gerne...? / Würden Sie mir...?"
    ],
    "commonMistakes": [
      {
        "wrong": "Wenn ich Zeit habe, würde ich kommen.",
        "right": "Wenn ich Zeit hätte, würde ich kommen.",
        "why": ""
      },
      {
        "wrong": "Ich würde gerne einen Kaffee haben.",
        "right": "Ich hätte gerne einen Kaffee.",
        "why": ""
      },
      {
        "wrong": "Wenn ich reich gewesen hätte...",
        "right": "Wenn ich reich gewesen wäre...",
        "why": ""
      },
      {
        "wrong": "Du hättest mir helfen gekonnt.",
        "right": "Du hättest mir helfen können.",
        "why": ""
      }
    ]
  },
  {
    "id": 35,
    "titleDE": "Konjunktiv I (Indirekte Rede)",
    "titleAR": "Konjunktiv I — الكلام المنقول (Indirekte Rede)",
    "explanation": "Konjunktiv I يُستخدم لنقل كلام الآخرين بشكل غير مباشر (مهمّ جداً في الأخبار، الصحف، والكتابة الأكاديميّة).",
    "examples": [
      {
        "de": "Konjunktiv I (Indirekte Rede)",
        "ar": "Konjunktiv I يُستخدم لنقل كلام الآخرين بشكل غير مباشر (مهمّ جداً في الأخبار، الصحف، والكتابة الأكاديميّة)."
      }
    ],
    "tips": [
      "الأسهل: احفظ فقط sei/habe/werde + إخراج dass. هذه كافية لمعظم السياقات.",
      "في الصحف الألمانيّة (Spiegel, Zeit, FAZ) ترى Konjunktiv I باستمرار — اقرأها لتعتاد.",
      "في الكلام اليومي، \"Er hat gesagt, dass er krank ist\" مقبول — لا تضغط نفسك على K1 شفهياً."
    ],
    "commonMistakes": [
      {
        "wrong": "Er sagt, dass er sei krank.",
        "right": "Er sagt, er sei krank. / Er sagt, dass er krank ist.",
        "why": ""
      },
      {
        "wrong": "Sie sagen, sie haben kein Geld.",
        "right": "Sie sagen, sie hätten kein Geld.",
        "why": ""
      }
    ]
  },
  {
    "id": 36,
    "titleDE": "Passiv (Vorgang & Zustand)",
    "titleAR": "Passiv — المبنيّ للمجهول الكامل (Vorgangs- + Zustandspassiv)",
    "explanation": "المبنيّ للمجهول في الألمانيّة نوعان: Vorgangspassiv (يصف العمليّة) و Zustandspassiv (يصف الحالة النهائيّة). كلاهما مهمّ في B2.",
    "examples": [
      {
        "de": "Passiv (Vorgang & Zustand)",
        "ar": "المبنيّ للمجهول في الألمانيّة نوعان: Vorgangspassiv (يصف العمليّة) و Zustandspassiv (يصف الحالة النهائيّة). كلاهما مهمّ في B2."
      }
    ],
    "tips": [
      "تذكّر الفرق: wird + PII = يحدث الآن | ist + PII = النتيجة/الحالة.",
      "Partizip II لـwerden = worden (في Passiv) أو geworden (في الماضي العادي).",
      "البدائل (man/sich lassen) مفيدة جداً — استعملها لتقلّل Passiv في الكتابة الشفهيّة."
    ],
    "commonMistakes": [
      {
        "wrong": "Das Auto ist repariert geworden.",
        "right": "Das Auto ist repariert worden.",
        "why": ""
      },
      {
        "wrong": "Das Fenster wird geöffnet sein.",
        "right": "Das Fenster ist geöffnet. (Zustandspassiv)",
        "why": ""
      },
      {
        "wrong": "Der Brief muss geschrieben sein.",
        "right": "Der Brief muss geschrieben werden.",
        "why": ""
      }
    ]
  },
  {
    "id": 37,
    "titleDE": "Nominalisierung & Verbalisierung",
    "titleAR": "Nominalisierung / Verbalisierung — التحويل بين الفعل والاسم",
    "explanation": "في الألمانيّة الأكاديميّة والرسميّة، كثير من المعاني تُعبَّر بالأسماء بدل الأفعال. يجب إتقان التحويل في الاتّجاهين.",
    "examples": [
      {
        "de": "Nominalisierung & Verbalisierung",
        "ar": "في الألمانيّة الأكاديميّة والرسميّة، كثير من المعاني تُعبَّر بالأسماء بدل الأفعال. يجب إتقان التحويل في الاتّجاهين."
      }
    ],
    "tips": [
      "احفظ اللواحق الشائعة للتحويل: -ung, -heit, -keit, -e, -schaft.",
      "التحويل من Nominal إلى Verbal يُسهّل فهم النصوص الصعبة.",
      "في Schreiben (كتابة)، استخدم Nominalisierung لرفع مستوى لغتك."
    ],
    "commonMistakes": [
      {
        "wrong": "Die Lösen des Problems ist wichtig.",
        "right": "Die Lösung des Problems / Das Lösen des Problems ist wichtig.",
        "why": ""
      },
      {
        "wrong": "Wegen er krank war, kam er nicht.",
        "right": "Weil er krank war, kam er nicht.",
        "why": ""
      }
    ]
  },
  {
    "id": 38,
    "titleDE": "Partizip I & II (erweiterte Partizipien)",
    "titleAR": "Partizipialkonstruktionen — Partizip I و II كصفات مُوسَّعة",
    "explanation": "في B2 نتعلّم استخدام Partizip I (-end) و Partizip II كصفات يمكن توسيعها لتختصر جملاً فرعيّة كاملة — شائع جداً في الصحف.",
    "examples": [
      {
        "de": "Partizip I & II (erweiterte Partizipien)",
        "ar": "في B2 نتعلّم استخدام Partizip I (-end) و Partizip II كصفات يمكن توسيعها لتختصر جملاً فرعيّة كاملة — شائع جداً في الصحف."
      }
    ],
    "tips": [
      "Partizip I يُعبّر عن فعل نشط يحدث الآن. Partizip II يُعبّر عن حالة ناتجة.",
      "يأخذ نفس نهايات الصفات (-e, -en, -es, إلخ).",
      "في Schreiben (B2), استخدم واحداً أو اثنين لرفع مستوى الكتابة."
    ],
    "commonMistakes": [
      {
        "wrong": "Das schlafendes Kind.",
        "right": "Das schlafende Kind.",
        "why": ""
      },
      {
        "wrong": "Die gelesenden Bücher.",
        "right": "Die gelesenen Bücher.",
        "why": ""
      }
    ]
  }
];

export const vocabCategories: VocabCategory[] = [
  {
    "id": "alltag",
    "name": "Alltag",
    "nameAr": "الحياة اليومية",
    "icon": "☀️",
    "words": [
      {
        "de": "aufstehen",
        "ar": "ينهض / يقوم من النوم",
        "example": "Ich stehe um 7 Uhr auf."
      },
      {
        "de": "frühstücken",
        "ar": "يفطر",
        "example": "Wir frühstücken zusammen."
      },
      {
        "de": "die Arbeit",
        "ar": "العمل",
        "example": "Ich gehe zur Arbeit."
      },
      {
        "de": "der Feierabend",
        "ar": "نهاية دوام العمل",
        "example": "Schönen Feierabend!"
      },
      {
        "de": "einkaufen",
        "ar": "يتسوق",
        "example": "Ich kaufe im Supermarkt ein."
      },
      {
        "de": "kochen",
        "ar": "يطبخ",
        "example": "Meine Mutter kocht super."
      },
      {
        "de": "die Mahlzeit",
        "ar": "الوجبة",
        "example": "Guten Appetit / Mahlzeit!"
      },
      {
        "de": "der Haushalt",
        "ar": "شؤون المنزل",
        "example": "Wer macht den Haushalt?"
      },
      {
        "de": "putzen",
        "ar": "ينظف",
        "example": "Ich putze das Bad."
      },
      {
        "de": "waschen",
        "ar": "يغسل",
        "example": "Ich wasche die Wäsche."
      },
      {
        "de": "müde",
        "ar": "متعب",
        "example": "Ich bin sehr müde."
      },
      {
        "de": "die Nachbarn (Pl.)",
        "ar": "الجيران",
        "example": "Unsere Nachbarn sind nett."
      }
    ]
  },
  {
    "id": "arbeit",
    "name": "Arbeit und Beruf",
    "nameAr": "العمل والوظيفة",
    "icon": "💼",
    "words": [
      {
        "de": "der Beruf",
        "ar": "المهنة",
        "example": "Was ist Ihr Beruf?"
      },
      {
        "de": "die Ausbildung",
        "ar": "التدريب المهني",
        "example": "Ich mache eine Ausbildung."
      },
      {
        "de": "das Praktikum",
        "ar": "التدريب العملي",
        "example": "Ich suche ein Praktikum."
      },
      {
        "de": "der/die Arbeitgeber(in)",
        "ar": "صاحب العمل",
        "example": "Mein Arbeitgeber zahlt gut."
      },
      {
        "de": "der Vertrag",
        "ar": "العقد",
        "example": "Ich unterschreibe den Vertrag."
      },
      {
        "de": "das Gehalt",
        "ar": "الراتب",
        "example": "Das Gehalt ist niedrig."
      },
      {
        "de": "die Überstunde",
        "ar": "ساعة عمل إضافية",
        "example": "Ich mache keine Überstunden."
      },
      {
        "de": "bewerben (sich)",
        "ar": "يتقدم لوظيفة",
        "example": "Ich bewerbe mich bei der Firma."
      },
      {
        "de": "der Lebenslauf",
        "ar": "السيرة الذاتية",
        "example": "Schicken Sie bitte Ihren Lebenslauf."
      },
      {
        "de": "das Vorstellungsgespräch",
        "ar": "مقابلة العمل",
        "example": "Ich habe morgen ein Vorstellungsgespräch."
      },
      {
        "de": "kündigen",
        "ar": "يستقيل / يفصل",
        "example": "Er hat gekündigt."
      },
      {
        "de": "der Chef / die Chefin",
        "ar": "المدير/ة",
        "example": "Mein Chef ist freundlich."
      },
      {
        "de": "der Kollege / die Kollegin",
        "ar": "الزميل/ة",
        "example": "Meine Kollegen sind super."
      },
      {
        "de": "das Büro",
        "ar": "المكتب",
        "example": "Ich arbeite im Büro."
      },
      {
        "de": "die Schicht",
        "ar": "الدوام (الوردية)",
        "example": "Ich habe Nachtschicht."
      }
    ]
  },
  {
    "id": "wohnen",
    "name": "Wohnen",
    "nameAr": "السكن والبيت",
    "icon": "🏠",
    "words": [
      {
        "de": "die Wohnung",
        "ar": "الشقة",
        "example": "Wir suchen eine Wohnung."
      },
      {
        "de": "das Haus",
        "ar": "البيت",
        "example": "Das Haus ist alt."
      },
      {
        "de": "die Miete",
        "ar": "الإيجار",
        "example": "Die Miete ist hoch."
      },
      {
        "de": "warm / kalt (Miete)",
        "ar": "شامل/غير شامل (الإيجار)",
        "example": "Die Warmmiete beträgt 600 €."
      },
      {
        "de": "die Nebenkosten",
        "ar": "المصاريف الإضافية",
        "example": "Die Nebenkosten sind teuer."
      },
      {
        "de": "die Kaution",
        "ar": "التأمين",
        "example": "Ich muss 3 Monatsmieten Kaution zahlen."
      },
      {
        "de": "der Mietvertrag",
        "ar": "عقد الإيجار",
        "example": "Hier ist der Mietvertrag."
      },
      {
        "de": "der Vermieter / die Vermieterin",
        "ar": "المُؤجِّر/ة",
        "example": "Der Vermieter ist nett."
      },
      {
        "de": "das Schlafzimmer",
        "ar": "غرفة النوم",
        "example": "Wo ist das Schlafzimmer?"
      },
      {
        "de": "das Wohnzimmer",
        "ar": "غرفة المعيشة",
        "example": "Das Wohnzimmer ist groß."
      },
      {
        "de": "die Küche",
        "ar": "المطبخ",
        "example": "Die Küche ist modern."
      },
      {
        "de": "das Bad",
        "ar": "الحمام",
        "example": "Das Bad hat eine Dusche."
      },
      {
        "de": "der Balkon",
        "ar": "البلكون",
        "example": "Unser Balkon ist sonnig."
      },
      {
        "de": "umziehen",
        "ar": "ينتقل من منزل لآخر",
        "example": "Wir ziehen nächsten Monat um."
      },
      {
        "de": "die Hausordnung",
        "ar": "نظام المبنى",
        "example": "Bitte beachten Sie die Hausordnung."
      }
    ]
  },
  {
    "id": "gesundheit",
    "name": "Gesundheit / beim Arzt",
    "nameAr": "الصحة والطبيب",
    "icon": "🏥",
    "words": [
      {
        "de": "der Arzt / die Ärztin",
        "ar": "الطبيب/ة",
        "example": "Ich gehe zum Arzt."
      },
      {
        "de": "der Termin",
        "ar": "موعد",
        "example": "Ich habe einen Termin."
      },
      {
        "de": "die Krankheit",
        "ar": "المرض",
        "example": "Welche Krankheit haben Sie?"
      },
      {
        "de": "krank sein",
        "ar": "يكون مريضاً",
        "example": "Ich bin krank."
      },
      {
        "de": "der Husten",
        "ar": "السعال",
        "example": "Ich habe Husten."
      },
      {
        "de": "der Schnupfen",
        "ar": "الزكام",
        "example": "Ich habe Schnupfen."
      },
      {
        "de": "das Fieber",
        "ar": "الحمى",
        "example": "Ich habe Fieber."
      },
      {
        "de": "die Schmerzen (Pl.)",
        "ar": "الألم",
        "example": "Ich habe Kopfschmerzen."
      },
      {
        "de": "die Tablette",
        "ar": "الحبة/القرص",
        "example": "Nehmen Sie eine Tablette."
      },
      {
        "de": "die Apotheke",
        "ar": "الصيدلية",
        "example": "Ich gehe in die Apotheke."
      },
      {
        "de": "das Rezept",
        "ar": "الوصفة الطبية",
        "example": "Hier ist Ihr Rezept."
      },
      {
        "de": "die Krankenversicherung",
        "ar": "التأمين الصحي",
        "example": "Welche Krankenversicherung haben Sie?"
      },
      {
        "de": "die Überweisung",
        "ar": "إحالة طبية",
        "example": "Ich brauche eine Überweisung."
      },
      {
        "de": "krankschreiben",
        "ar": "يكتب إجازة مرضية",
        "example": "Der Arzt hat mich krankgeschrieben."
      }
    ]
  },
  {
    "id": "behoerden",
    "name": "Bei Behörden",
    "nameAr": "الدوائر الرسمية",
    "icon": "🏢",
    "words": [
      {
        "de": "das Bürgeramt",
        "ar": "دائرة المواطن",
        "example": "Ich gehe zum Bürgeramt."
      },
      {
        "de": "die Ausländerbehörde",
        "ar": "مكتب الأجانب",
        "example": "Die Ausländerbehörde ruft mich an."
      },
      {
        "de": "das Jobcenter",
        "ar": "مكتب العمل (للباحثين)",
        "example": "Ich habe einen Termin im Jobcenter."
      },
      {
        "de": "die Agentur für Arbeit",
        "ar": "وكالة العمل",
        "example": "Die Agentur für Arbeit hilft mir."
      },
      {
        "de": "der Ausweis",
        "ar": "بطاقة الهوية",
        "example": "Hier ist mein Ausweis."
      },
      {
        "de": "der Aufenthaltstitel",
        "ar": "تصريح الإقامة",
        "example": "Ich habe einen neuen Aufenthaltstitel."
      },
      {
        "de": "die Meldebescheinigung",
        "ar": "شهادة تسجيل السكن",
        "example": "Ich brauche eine Meldebescheinigung."
      },
      {
        "de": "der Antrag",
        "ar": "الطلب",
        "example": "Ich stelle einen Antrag."
      },
      {
        "de": "das Formular",
        "ar": "الاستمارة",
        "example": "Füllen Sie bitte das Formular aus."
      },
      {
        "de": "unterschreiben",
        "ar": "يوقّع",
        "example": "Bitte unterschreiben Sie hier."
      },
      {
        "de": "anmelden (sich)",
        "ar": "يسجّل نفسه",
        "example": "Ich muss mich anmelden."
      },
      {
        "de": "abmelden",
        "ar": "يُلغي التسجيل",
        "example": "Ich melde mich ab."
      },
      {
        "de": "der Termin",
        "ar": "موعد",
        "example": "Ich brauche einen Termin."
      },
      {
        "de": "die Unterlagen (Pl.)",
        "ar": "الوثائق",
        "example": "Bringen Sie bitte alle Unterlagen mit."
      }
    ]
  },
  {
    "id": "schule",
    "name": "Schule und Bildung",
    "nameAr": "المدرسة والتعليم",
    "icon": "📝",
    "words": [
      {
        "de": "die Grundschule",
        "ar": "المدرسة الابتدائية",
        "example": "Mein Sohn geht in die Grundschule."
      },
      {
        "de": "das Gymnasium",
        "ar": "المرحلة الثانوية (أعلى)",
        "example": "Meine Tochter besucht das Gymnasium."
      },
      {
        "de": "der Unterricht",
        "ar": "الدرس / الحصة",
        "example": "Der Unterricht fängt um 8 Uhr an."
      },
      {
        "de": "die Hausaufgaben (Pl.)",
        "ar": "الواجبات المنزلية",
        "example": "Hast du die Hausaufgaben gemacht?"
      },
      {
        "de": "die Prüfung",
        "ar": "الامتحان",
        "example": "Morgen habe ich eine Prüfung."
      },
      {
        "de": "die Note",
        "ar": "الدرجة/العلامة",
        "example": "Ich habe eine gute Note."
      },
      {
        "de": "das Zeugnis",
        "ar": "شهادة درجات",
        "example": "Das Zeugnis kommt im Juli."
      },
      {
        "de": "die Klasse",
        "ar": "الصف",
        "example": "Mein Kind ist in der 5. Klasse."
      },
      {
        "de": "der Sprachkurs",
        "ar": "دورة اللغة",
        "example": "Ich besuche einen Sprachkurs."
      },
      {
        "de": "der Integrationskurs",
        "ar": "دورة الاندماج",
        "example": "Ich habe den Integrationskurs bestanden."
      }
    ]
  },
  {
    "id": "verkehr",
    "name": "Verkehr",
    "nameAr": "النقل والمواصلات",
    "icon": "🚌",
    "words": [
      {
        "de": "der Bahnhof",
        "ar": "محطة القطار",
        "example": "Ich bin am Bahnhof."
      },
      {
        "de": "die Haltestelle",
        "ar": "محطة الباص",
        "example": "Die Haltestelle ist gleich da."
      },
      {
        "de": "das Ticket / die Fahrkarte",
        "ar": "التذكرة",
        "example": "Ich kaufe ein Ticket."
      },
      {
        "de": "umsteigen",
        "ar": "يغير وسيلة النقل",
        "example": "Du musst in Köln umsteigen."
      },
      {
        "de": "die Verspätung",
        "ar": "التأخير",
        "example": "Der Zug hat Verspätung."
      },
      {
        "de": "das Auto",
        "ar": "السيارة",
        "example": "Mein Auto ist kaputt."
      },
      {
        "de": "tanken",
        "ar": "يملأ البنزين",
        "example": "Ich muss tanken."
      },
      {
        "de": "der Führerschein",
        "ar": "رخصة القيادة",
        "example": "Ich mache den Führerschein."
      },
      {
        "de": "der Stau",
        "ar": "ازدحام مروري",
        "example": "Es gibt einen Stau auf der Autobahn."
      },
      {
        "de": "zu Fuß",
        "ar": "سيراً على الأقدام",
        "example": "Ich gehe zu Fuß."
      }
    ]
  },
  {
    "id": "einkaufen",
    "name": "Einkaufen",
    "nameAr": "التسوّق",
    "icon": "🛒",
    "words": [
      {
        "de": "der Supermarkt",
        "ar": "السوبرماركت",
        "example": "Ich kaufe im Supermarkt ein."
      },
      {
        "de": "der Markt",
        "ar": "السوق",
        "example": "Am Samstag gehe ich auf den Markt."
      },
      {
        "de": "das Sonderangebot",
        "ar": "عرض خاص",
        "example": "Heute ist ein Sonderangebot."
      },
      {
        "de": "der Rabatt",
        "ar": "الخصم",
        "example": "Es gibt 20 % Rabatt."
      },
      {
        "de": "das Kleingeld",
        "ar": "الفكّة",
        "example": "Haben Sie Kleingeld?"
      },
      {
        "de": "die Kasse",
        "ar": "صندوق الدفع",
        "example": "Bitte zahlen Sie an der Kasse."
      },
      {
        "de": "der Kassenbon / Kassenzettel",
        "ar": "الفاتورة",
        "example": "Möchten Sie den Kassenbon?"
      },
      {
        "de": "bar / mit Karte zahlen",
        "ar": "يدفع نقداً/بالبطاقة",
        "example": "Ich zahle mit Karte."
      },
      {
        "de": "umtauschen",
        "ar": "يستبدل",
        "example": "Ich möchte das Hemd umtauschen."
      },
      {
        "de": "die Rückgabe",
        "ar": "إعادة المنتج",
        "example": "Die Rückgabe ist 14 Tage möglich."
      }
    ]
  },
  {
    "id": "freizeit",
    "name": "Freizeit",
    "nameAr": "أوقات الفراغ",
    "icon": "🎭",
    "words": [
      {
        "de": "der Sport",
        "ar": "الرياضة",
        "example": "Ich mache viel Sport."
      },
      {
        "de": "schwimmen",
        "ar": "يسبح",
        "example": "Meine Kinder schwimmen gern."
      },
      {
        "de": "joggen",
        "ar": "يركض",
        "example": "Ich jogge jeden Morgen."
      },
      {
        "de": "wandern",
        "ar": "المشي في الطبيعة",
        "example": "Wir gehen am Wochenende wandern."
      },
      {
        "de": "das Kino",
        "ar": "السينما",
        "example": "Heute gehen wir ins Kino."
      },
      {
        "de": "das Konzert",
        "ar": "الحفلة الموسيقية",
        "example": "Das Konzert war super."
      },
      {
        "de": "die Reise",
        "ar": "الرحلة/السفر",
        "example": "Wir planen eine Reise nach Italien."
      },
      {
        "de": "das Hobby",
        "ar": "الهواية",
        "example": "Mein Hobby ist Lesen."
      },
      {
        "de": "der Verein",
        "ar": "النادي",
        "example": "Ich bin im Sportverein."
      }
    ]
  },
  {
    "id": "konnektoren",
    "name": "Wichtige Konnektoren",
    "nameAr": "أدوات الربط المهمة",
    "icon": "📝",
    "words": [
      {
        "de": "weil",
        "ar": "لأنّ (+ فعل في النهاية)",
        "example": ""
      },
      {
        "de": "denn",
        "ar": "لأن (+ ترتيب عادي)",
        "example": ""
      },
      {
        "de": "deshalb / deswegen",
        "ar": "لذلك",
        "example": ""
      },
      {
        "de": "trotzdem",
        "ar": "ومع ذلك",
        "example": ""
      },
      {
        "de": "obwohl",
        "ar": "رغم أن (+ فعل في النهاية)",
        "example": ""
      },
      {
        "de": "wenn",
        "ar": "إذا / عندما",
        "example": ""
      },
      {
        "de": "falls",
        "ar": "في حال",
        "example": ""
      },
      {
        "de": "damit",
        "ar": "لكي",
        "example": ""
      },
      {
        "de": "um … zu + Infinitiv",
        "ar": "من أجل أن ...",
        "example": ""
      },
      {
        "de": "entweder … oder",
        "ar": "إما ... أو",
        "example": ""
      },
      {
        "de": "weder … noch",
        "ar": "لا... ولا",
        "example": ""
      },
      {
        "de": "sowohl … als auch",
        "ar": "ليس فقط... بل أيضاً",
        "example": ""
      },
      {
        "de": "nicht nur … sondern auch",
        "ar": "ليس ... بل أيضاً",
        "example": ""
      },
      {
        "de": "außerdem",
        "ar": "بالإضافة إلى ذلك",
        "example": ""
      },
      {
        "de": "zuerst – dann – schließlich",
        "ar": "أولاً – ثم – أخيراً",
        "example": ""
      }
    ]
  },
  {
    "id": "meinung",
    "name": "Meinung ausdrücken",
    "nameAr": "عبارات للتعبير عن الرأي",
    "icon": "📝",
    "words": [
      {
        "de": "Ich finde, dass …",
        "ar": "أجد أن ...",
        "example": ""
      },
      {
        "de": "Meiner Meinung nach …",
        "ar": "في رأيي ...",
        "example": ""
      },
      {
        "de": "Ich bin der Meinung, dass …",
        "ar": "أنا من رأي أن ...",
        "example": ""
      },
      {
        "de": "Ich stimme dir zu.",
        "ar": "أوافقك الرأي.",
        "example": ""
      },
      {
        "de": "Da bin ich anderer Meinung.",
        "ar": "لي رأي مختلف.",
        "example": ""
      },
      {
        "de": "Das stimmt (nicht).",
        "ar": "هذا (غير) صحيح.",
        "example": ""
      },
      {
        "de": "Einerseits … andererseits …",
        "ar": "من ناحية... ومن ناحية أخرى...",
        "example": ""
      },
      {
        "de": "Es kommt darauf an.",
        "ar": "يعتمد على الحالة.",
        "example": ""
      },
      {
        "de": "Ich kann das gut verstehen.",
        "ar": "أفهم ذلك جيداً.",
        "example": ""
      },
      {
        "de": "Das sehe ich auch so.",
        "ar": "أنا أيضاً أرى ذلك.",
        "example": ""
      }
    ]
  },
  {
    "id": "koerper",
    "name": "Körper & Gesundheit",
    "nameAr": "الجسم والصحة (موسّع)",
    "icon": "🧍",
    "words": [
      {
        "de": "der Kopf",
        "ar": "الرأس",
        "example": "Ich habe Kopfschmerzen."
      },
      {
        "de": "das Auge / die Augen",
        "ar": "العين / العيون",
        "example": "Meine Augen sind müde."
      },
      {
        "de": "die Nase",
        "ar": "الأنف",
        "example": "Meine Nase läuft."
      },
      {
        "de": "der Mund",
        "ar": "الفم",
        "example": "Mach den Mund auf!"
      },
      {
        "de": "der Zahn / die Zähne",
        "ar": "السن / الأسنان",
        "example": "Ich habe Zahnschmerzen."
      },
      {
        "de": "das Ohr",
        "ar": "الأذن",
        "example": "Meine Ohren tun weh."
      },
      {
        "de": "der Hals",
        "ar": "الحلق / الرقبة",
        "example": "Mein Hals tut weh."
      },
      {
        "de": "der Bauch",
        "ar": "البطن",
        "example": "Mir ist schlecht im Bauch."
      },
      {
        "de": "der Rücken",
        "ar": "الظهر",
        "example": "Ich habe Rückenschmerzen."
      },
      {
        "de": "das Bein / die Beine",
        "ar": "الساق / الساقان",
        "example": "Mein Bein ist kaputt."
      },
      {
        "de": "der Arm / die Arme",
        "ar": "الذراع",
        "example": "Heb den Arm hoch!"
      },
      {
        "de": "die Hand / die Hände",
        "ar": "اليد / اليدان",
        "example": "Wasch dir die Hände!"
      },
      {
        "de": "das Herz",
        "ar": "القلب",
        "example": "Mein Herz schlägt schnell."
      },
      {
        "de": "krank sein",
        "ar": "مريض",
        "example": "Ich bin seit 3 Tagen krank."
      },
      {
        "de": "die Erkältung",
        "ar": "نزلة برد",
        "example": "Ich habe eine Erkältung."
      },
      {
        "de": "der Husten",
        "ar": "السعال",
        "example": "Mein Husten ist schlimm."
      },
      {
        "de": "der Schnupfen",
        "ar": "الزكام",
        "example": "Ich habe Schnupfen."
      },
      {
        "de": "das Fieber",
        "ar": "الحمى",
        "example": "Sie hat 39 Grad Fieber."
      },
      {
        "de": "die Schmerzen (Pl.)",
        "ar": "الآلام",
        "example": "Wo haben Sie Schmerzen?"
      },
      {
        "de": "die Krankenversicherung",
        "ar": "التأمين الصحي",
        "example": "Ich brauche meine Krankenversicherungskarte."
      },
      {
        "de": "der Termin",
        "ar": "الموعد",
        "example": "Ich habe einen Termin um 10:00."
      },
      {
        "de": "das Rezept",
        "ar": "الوصفة الطبية",
        "example": "Der Arzt schreibt mir ein Rezept."
      },
      {
        "de": "die Apotheke",
        "ar": "الصيدلية",
        "example": "Ich gehe zur Apotheke."
      },
      {
        "de": "die Tablette",
        "ar": "الحبة الدوائية",
        "example": "Nimm zwei Tabletten am Tag."
      },
      {
        "de": "der Arzt / die Ärztin",
        "ar": "الطبيب / الطبيبة",
        "example": "Mein Arzt ist sehr nett."
      },
      {
        "de": "die Praxis",
        "ar": "العيادة",
        "example": "Die Praxis ist heute geschlossen."
      },
      {
        "de": "das Krankenhaus",
        "ar": "المستشفى",
        "example": "Mein Vater liegt im Krankenhaus."
      },
      {
        "de": "der Notdienst / der Notruf",
        "ar": "الطوارئ",
        "example": "Notruf 112 ist immer kostenlos."
      },
      {
        "de": "gesund / ungesund",
        "ar": "صحي / غير صحي",
        "example": "Obst ist gesund."
      },
      {
        "de": "sich erholen",
        "ar": "يتعافى / يستجمّ",
        "example": "Ich erhole mich am Wochenende."
      }
    ]
  },
  {
    "id": "geld",
    "name": "Geld & Bank",
    "nameAr": "المال والبنك",
    "icon": "💰",
    "words": [
      {
        "de": "das Geld",
        "ar": "المال",
        "example": "Ich habe nicht viel Geld."
      },
      {
        "de": "das Bargeld",
        "ar": "المال النقدي",
        "example": "Hier nehmen sie kein Bargeld."
      },
      {
        "de": "die Bank",
        "ar": "البنك",
        "example": "Ich gehe zur Bank."
      },
      {
        "de": "das Konto",
        "ar": "الحساب البنكي",
        "example": "Ich öffne ein Konto."
      },
      {
        "de": "die Kontonummer / IBAN",
        "ar": "رقم الحساب",
        "example": "Schicken Sie mir Ihre IBAN."
      },
      {
        "de": "die EC-Karte / Bankkarte",
        "ar": "بطاقة الصراف",
        "example": "Ich habe meine EC-Karte verloren."
      },
      {
        "de": "die Kreditkarte",
        "ar": "بطاقة الائتمان",
        "example": "Mit Kreditkarte zahlen Sie?"
      },
      {
        "de": "der Geldautomat",
        "ar": "صراف آلي",
        "example": "Wo ist der nächste Geldautomat?"
      },
      {
        "de": "überweisen",
        "ar": "يحوّل المال",
        "example": "Ich überweise die Miete."
      },
      {
        "de": "die Überweisung",
        "ar": "الحوالة",
        "example": "Die Überweisung dauert 2 Tage."
      },
      {
        "de": "einzahlen / abheben",
        "ar": "يودع / يسحب",
        "example": "Ich hebe 100 Euro ab."
      },
      {
        "de": "die Miete",
        "ar": "الإيجار",
        "example": "Die Miete ist sehr hoch."
      },
      {
        "de": "die Nebenkosten (Pl.)",
        "ar": "تكاليف إضافية (ماء/كهرباء)",
        "example": "Die Nebenkosten sind nicht inklusive."
      },
      {
        "de": "die Rechnung",
        "ar": "الفاتورة",
        "example": "Die Rechnung kommt jeden Monat."
      },
      {
        "de": "das Einkommen / das Gehalt",
        "ar": "الدخل / الراتب",
        "example": "Mein Einkommen reicht nicht."
      },
      {
        "de": "die Steuern (Pl.)",
        "ar": "الضرائب",
        "example": "Ich zahle viele Steuern."
      },
      {
        "de": "sparen",
        "ar": "يوفّر",
        "example": "Wir sparen für ein Auto."
      },
      {
        "de": "teuer / billig / günstig",
        "ar": "غالي / رخيص / في المتناول",
        "example": "Berlin ist nicht so teuer."
      },
      {
        "de": "kostenlos / gratis",
        "ar": "مجاني",
        "example": "Der Eintritt ist kostenlos."
      },
      {
        "de": "die Quittung / der Beleg",
        "ar": "إيصال",
        "example": "Heben Sie die Quittung auf."
      }
    ]
  },
  {
    "id": "amt",
    "name": "Behörden / Ämter",
    "nameAr": "الإدارة والمكاتب الرسمية ⭐",
    "icon": "📝",
    "words": [
      {
        "de": "das Amt / die Behörde",
        "ar": "الدائرة / المكتب الرسمي",
        "example": "Ich gehe zum Amt."
      },
      {
        "de": "das Bürgeramt / das Bürgerbüro",
        "ar": "مكتب البلدية",
        "example": "Im Bürgeramt melde ich mich an."
      },
      {
        "de": "die Anmeldung",
        "ar": "تسجيل السكن",
        "example": "Ich brauche einen Termin für die Anmeldung."
      },
      {
        "de": "die Wohnungsgeberbestätigung",
        "ar": "إثبات من صاحب البيت",
        "example": "Bringen Sie die Wohnungsgeberbestätigung mit."
      },
      {
        "de": "der Mietvertrag",
        "ar": "عقد الإيجار",
        "example": "Mein Mietvertrag ist auf Deutsch."
      },
      {
        "de": "der Personalausweis",
        "ar": "الهوية الشخصية",
        "example": "Mein Personalausweis ist abgelaufen."
      },
      {
        "de": "der Reisepass",
        "ar": "جواز السفر",
        "example": "Ohne Reisepass kann man nicht fliegen."
      },
      {
        "de": "der Aufenthaltstitel",
        "ar": "إقامة",
        "example": "Mein Aufenthaltstitel läuft 2026 ab."
      },
      {
        "de": "die Aufenthaltserlaubnis",
        "ar": "تصريح إقامة",
        "example": "Ich habe eine Aufenthaltserlaubnis."
      },
      {
        "de": "die Niederlassungserlaubnis",
        "ar": "إقامة دائمة",
        "example": "Nach 5 Jahren kann ich die Niederlassungserlaubnis bekommen."
      },
      {
        "de": "die Einbürgerung",
        "ar": "التجنّس",
        "example": "Ich habe einen Antrag auf Einbürgerung gestellt."
      },
      {
        "de": "die Geburtsurkunde",
        "ar": "شهادة الميلاد",
        "example": "Bringen Sie eine Übersetzung der Geburtsurkunde."
      },
      {
        "de": "die Heiratsurkunde",
        "ar": "عقد الزواج",
        "example": "Die Heiratsurkunde muss übersetzt sein."
      },
      {
        "de": "die Steueridentifikationsnummer",
        "ar": "رقم ضريبي",
        "example": "Hier ist meine Steuer-ID."
      },
      {
        "de": "die Sozialversicherungsnummer",
        "ar": "رقم التأمين الاجتماعي",
        "example": "Geben Sie Ihre Sozialversicherungsnummer an."
      },
      {
        "de": "das Jobcenter",
        "ar": "مكتب العمل (للمساعدات)",
        "example": "Mein Termin ist beim Jobcenter."
      },
      {
        "de": "die Agentur für Arbeit",
        "ar": "وكالة العمل",
        "example": "Bei der Agentur für Arbeit kann man Hilfe bekommen."
      },
      {
        "de": "das Arbeitslosengeld (ALG)",
        "ar": "إعانة بطالة",
        "example": "Ich bekomme ALG II."
      },
      {
        "de": "das Kindergeld",
        "ar": "علاوة الأطفال",
        "example": "Wir bekommen Kindergeld für unsere zwei Kinder."
      },
      {
        "de": "der Antrag",
        "ar": "الطلب",
        "example": "Ich stelle einen Antrag."
      },
      {
        "de": "das Formular",
        "ar": "الاستمارة",
        "example": "Bitte füllen Sie das Formular aus."
      },
      {
        "de": "ausfüllen",
        "ar": "يملأ (الاستمارة)",
        "example": "Können Sie mir helfen, das Formular auszufüllen?"
      },
      {
        "de": "unterschreiben",
        "ar": "يوقّع",
        "example": "Bitte hier unterschreiben."
      },
      {
        "de": "die Unterschrift",
        "ar": "التوقيع",
        "example": "Ich brauche Ihre Unterschrift."
      },
      {
        "de": "die Bescheinigung",
        "ar": "الشهادة / التصديق",
        "example": "Hier ist meine Bescheinigung."
      },
      {
        "de": "gültig / ungültig",
        "ar": "صالح / غير صالح",
        "example": "Mein Ausweis ist nicht mehr gültig."
      },
      {
        "de": "beantragen",
        "ar": "يقدّم طلباً",
        "example": "Ich beantrage einen neuen Pass."
      },
      {
        "de": "der Sachbearbeiter / die Sachbearbeiterin",
        "ar": "الموظف المسؤول",
        "example": "Mein Sachbearbeiter heißt Herr Müller."
      }
    ]
  },
  {
    "id": "shopping",
    "name": "Einkaufen & Kleidung",
    "nameAr": "التسوق والملابس",
    "icon": "📝",
    "words": [
      {
        "de": "die Hose",
        "ar": "البنطلون",
        "example": "Die Hose ist zu lang."
      },
      {
        "de": "das Hemd",
        "ar": "القميص",
        "example": "Ich brauche ein weißes Hemd."
      },
      {
        "de": "das T-Shirt",
        "ar": "تي شيرت",
        "example": "Mein T-Shirt ist neu."
      },
      {
        "de": "der Pullover",
        "ar": "الكنزة",
        "example": "Der Pullover ist warm."
      },
      {
        "de": "die Jacke",
        "ar": "المعطف الخفيف",
        "example": "Vergiss deine Jacke nicht!"
      },
      {
        "de": "der Mantel",
        "ar": "المعطف الطويل",
        "example": "Der Mantel ist aus Wolle."
      },
      {
        "de": "die Schuhe (Pl.)",
        "ar": "الحذاء",
        "example": "Ich brauche neue Schuhe."
      },
      {
        "de": "das Kleid",
        "ar": "الفستان",
        "example": "Sie trägt ein rotes Kleid."
      },
      {
        "de": "der Rock",
        "ar": "التنّورة",
        "example": "Der Rock ist zu kurz."
      },
      {
        "de": "der Anzug",
        "ar": "البدلة الرسمية",
        "example": "Im Vorstellungsgespräch trage ich einen Anzug."
      },
      {
        "de": "die Größe",
        "ar": "القياس / الحجم",
        "example": "Welche Größe brauchen Sie?"
      },
      {
        "de": "anprobieren",
        "ar": "يجرّب الملابس",
        "example": "Darf ich es anprobieren?"
      },
      {
        "de": "die Umkleidekabine",
        "ar": "غرفة القياس",
        "example": "Die Umkleidekabine ist links."
      },
      {
        "de": "umtauschen",
        "ar": "يستبدل",
        "example": "Kann ich das umtauschen?"
      },
      {
        "de": "der Kassenbon / die Quittung",
        "ar": "إيصال الدفع",
        "example": "Ohne Kassenbon kein Umtausch."
      },
      {
        "de": "die Kasse",
        "ar": "الكاشير",
        "example": "Bitte zur Kasse!"
      },
      {
        "de": "die Tüte",
        "ar": "الكيس",
        "example": "Brauchen Sie eine Tüte?"
      },
      {
        "de": "das Sonderangebot",
        "ar": "العرض",
        "example": "Heute ist Sonderangebot."
      },
      {
        "de": "der Rabatt / im Angebot",
        "ar": "الخصم",
        "example": "Ich bekomme 20% Rabatt."
      },
      {
        "de": "der Supermarkt",
        "ar": "السوبر ماركت",
        "example": "Im Supermarkt ist alles billiger."
      },
      {
        "de": "der Markt / der Wochenmarkt",
        "ar": "السوق الأسبوعي",
        "example": "Auf dem Markt ist es frischer."
      },
      {
        "de": "die Bäckerei",
        "ar": "المخبز",
        "example": "In der Bäckerei kaufe ich Brot."
      },
      {
        "de": "die Metzgerei",
        "ar": "الجزّارة",
        "example": "Beim Metzger gibt es kein Schweinefleisch?"
      }
    ]
  },
  {
    "id": "gefuehle",
    "name": "Gefühle & Charakter",
    "nameAr": "المشاعر والصفات الشخصية",
    "icon": "❤️",
    "words": [
      {
        "de": "glücklich / froh",
        "ar": "سعيد / مسرور",
        "example": "Ich bin sehr glücklich heute."
      },
      {
        "de": "traurig",
        "ar": "حزين",
        "example": "Sie ist traurig, weil ihre Mutter krank ist."
      },
      {
        "de": "wütend / sauer",
        "ar": "غاضب",
        "example": "Mein Vater ist wütend auf mich."
      },
      {
        "de": "nervös / aufgeregt",
        "ar": "متوتر / متحمس",
        "example": "Vor der Prüfung bin ich nervös."
      },
      {
        "de": "entspannt / ruhig",
        "ar": "مرتاح / هادئ",
        "example": "Am Wochenende bin ich entspannt."
      },
      {
        "de": "gestresst",
        "ar": "متعب نفسياً",
        "example": "Ich bin total gestresst."
      },
      {
        "de": "überrascht",
        "ar": "متفاجئ",
        "example": "Ich war überrascht von der Nachricht."
      },
      {
        "de": "enttäuscht",
        "ar": "محبط / خائب الأمل",
        "example": "Ich bin enttäuscht von ihm."
      },
      {
        "de": "zufrieden / unzufrieden",
        "ar": "راضٍ / غير راضٍ",
        "example": "Ich bin mit der Arbeit zufrieden."
      },
      {
        "de": "einsam",
        "ar": "وحيد",
        "example": "In Deutschland fühle ich mich manchmal einsam."
      },
      {
        "de": "fleißig / faul",
        "ar": "مجتهد / كسول",
        "example": "Mein Sohn ist sehr fleißig in der Schule."
      },
      {
        "de": "nett / freundlich",
        "ar": "لطيف / ودود",
        "example": "Meine Nachbarn sind sehr freundlich."
      },
      {
        "de": "höflich / unhöflich",
        "ar": "مؤدب / غير مؤدب",
        "example": "Sei höflich zu älteren Leuten!"
      },
      {
        "de": "ehrlich / unehrlich",
        "ar": "صادق / كاذب",
        "example": "Sie ist immer ehrlich."
      },
      {
        "de": "geduldig / ungeduldig",
        "ar": "صبور / غير صبور",
        "example": "Mein Lehrer ist sehr geduldig."
      },
      {
        "de": "mutig / ängstlich",
        "ar": "شجاع / خجول",
        "example": "Sie ist eine mutige Frau."
      },
      {
        "de": "pünktlich / unpünktlich",
        "ar": "دقيق المواعيد / غير دقيق",
        "example": "In Deutschland sind die Leute pünktlich."
      },
      {
        "de": "zuverlässig",
        "ar": "يُعتمد عليه",
        "example": "Mein Freund ist sehr zuverlässig."
      },
      {
        "de": "optimistisch / pessimistisch",
        "ar": "متفائل / متشائم",
        "example": "Ich bin optimistisch in Bezug auf die Zukunft."
      },
      {
        "de": "hilfsbereit",
        "ar": "متعاون / مستعد للمساعدة",
        "example": "Mein Kollege ist sehr hilfsbereit."
      }
    ]
  },
  {
    "id": "haushalt",
    "name": "Haushalt & Möbel",
    "nameAr": "المنزل والأثاث",
    "icon": "📝",
    "words": [
      {
        "de": "das Wohnzimmer",
        "ar": "غرفة المعيشة",
        "example": "Wir sitzen im Wohnzimmer."
      },
      {
        "de": "das Schlafzimmer",
        "ar": "غرفة النوم",
        "example": "Mein Schlafzimmer ist klein."
      },
      {
        "de": "die Küche",
        "ar": "المطبخ",
        "example": "In der Küche koche ich."
      },
      {
        "de": "das Bad / das Badezimmer",
        "ar": "الحمّام",
        "example": "Das Bad ist klein, aber sauber."
      },
      {
        "de": "der Flur",
        "ar": "الممر",
        "example": "Im Flur stehen die Schuhe."
      },
      {
        "de": "der Balkon",
        "ar": "الشرفة",
        "example": "Wir haben einen kleinen Balkon."
      },
      {
        "de": "der Keller",
        "ar": "القبو",
        "example": "Im Keller lagern wir die Fahrräder."
      },
      {
        "de": "der Tisch",
        "ar": "الطاولة",
        "example": "Stell die Vase auf den Tisch."
      },
      {
        "de": "der Stuhl",
        "ar": "الكرسي",
        "example": "Setz dich auf den Stuhl!"
      },
      {
        "de": "das Sofa",
        "ar": "الكنبة",
        "example": "Auf dem Sofa schlafe ich oft."
      },
      {
        "de": "das Bett",
        "ar": "السرير",
        "example": "Mein Bett ist sehr bequem."
      },
      {
        "de": "der Schrank",
        "ar": "الخزانة",
        "example": "Hänge die Jacke in den Schrank."
      },
      {
        "de": "das Regal",
        "ar": "الرف",
        "example": "Auf dem Regal stehen viele Bücher."
      },
      {
        "de": "die Lampe",
        "ar": "المصباح",
        "example": "Mach die Lampe an, bitte."
      },
      {
        "de": "der Kühlschrank",
        "ar": "الثلاجة",
        "example": "Der Kühlschrank ist voll."
      },
      {
        "de": "der Herd",
        "ar": "الموقد",
        "example": "Auf dem Herd kocht das Wasser."
      },
      {
        "de": "der Backofen",
        "ar": "الفرن",
        "example": "Im Backofen backe ich Brot."
      },
      {
        "de": "die Spülmaschine",
        "ar": "غسالة الصحون",
        "example": "Die Spülmaschine ist kaputt."
      },
      {
        "de": "die Waschmaschine",
        "ar": "الغسالة",
        "example": "Ich brauche eine neue Waschmaschine."
      },
      {
        "de": "die Heizung",
        "ar": "التدفئة",
        "example": "Im Winter ist die Heizung wichtig."
      },
      {
        "de": "der Boden",
        "ar": "الأرضية",
        "example": "Wisch bitte den Boden!"
      },
      {
        "de": "die Wand",
        "ar": "الجدار",
        "example": "An der Wand hängt ein Bild."
      }
    ]
  },
  {
    "id": "umwelt",
    "name": "Umwelt & Wetter",
    "nameAr": "البيئة والطقس",
    "icon": "🌍",
    "words": [
      {
        "de": "das Wetter",
        "ar": "الطقس",
        "example": "Wie ist das Wetter heute?"
      },
      {
        "de": "die Sonne",
        "ar": "الشمس",
        "example": "Die Sonne scheint."
      },
      {
        "de": "der Regen",
        "ar": "المطر",
        "example": "Es regnet seit gestern."
      },
      {
        "de": "der Schnee",
        "ar": "الثلج",
        "example": "In Deutschland gibt es viel Schnee im Winter."
      },
      {
        "de": "der Wind",
        "ar": "الرياح",
        "example": "Heute ist viel Wind."
      },
      {
        "de": "die Wolke / wolkig",
        "ar": "سحابة / غائم",
        "example": "Es ist heute wolkig."
      },
      {
        "de": "der Nebel",
        "ar": "الضباب",
        "example": "Morgens ist oft Nebel."
      },
      {
        "de": "das Gewitter",
        "ar": "العاصفة الرعدية",
        "example": "Heute Abend gibt es ein Gewitter."
      },
      {
        "de": "die Temperatur / Grad",
        "ar": "الحرارة / درجة",
        "example": "Es sind heute 25 Grad."
      },
      {
        "de": "kalt / warm / heiß / kühl",
        "ar": "بارد / دافئ / حار / لطيف",
        "example": "In Syrien ist es im Sommer sehr heiß."
      },
      {
        "de": "der Frühling / Sommer / Herbst / Winter",
        "ar": "الربيع/الصيف/الخريف/الشتاء",
        "example": "Im Sommer mache ich Urlaub."
      },
      {
        "de": "die Umwelt",
        "ar": "البيئة",
        "example": "Wir müssen die Umwelt schützen."
      },
      {
        "de": "die Verschmutzung / verschmutzen",
        "ar": "التلوث",
        "example": "Die Luftverschmutzung ist ein Problem."
      },
      {
        "de": "der Müll",
        "ar": "القمامة",
        "example": "Bring den Müll raus!"
      },
      {
        "de": "trennen / die Mülltrennung",
        "ar": "يفرز / فرز القمامة",
        "example": "In Deutschland muss man Müll trennen."
      },
      {
        "de": "recyceln / das Recycling",
        "ar": "إعادة تدوير",
        "example": "Plastik kann man recyceln."
      },
      {
        "de": "der Klimawandel",
        "ar": "تغيّر المناخ",
        "example": "Der Klimawandel ist gefährlich."
      },
      {
        "de": "erneuerbare Energien",
        "ar": "طاقة متجددة",
        "example": "Wir brauchen mehr erneuerbare Energien."
      },
      {
        "de": "die Solaranlage",
        "ar": "الواح الطاقة الشمسية",
        "example": "Wir haben eine Solaranlage auf dem Dach."
      },
      {
        "de": "sparen (Strom/Wasser)",
        "ar": "يوفّر (كهرباء/ماء)",
        "example": "Spare Strom und Wasser!"
      }
    ]
  },
  {
    "id": "zeit",
    "name": "Zeit & Anlässe",
    "nameAr": "الزمن والمناسبات",
    "icon": "⏰",
    "words": [
      {
        "de": "die Sekunde / die Minute / die Stunde",
        "ar": "ثانية / دقيقة / ساعة",
        "example": "Eine Stunde hat 60 Minuten."
      },
      {
        "de": "der Tag / die Woche / der Monat / das Jahr",
        "ar": "يوم/أسبوع/شهر/سنة",
        "example": "Diese Woche habe ich viel zu tun."
      },
      {
        "de": "heute / gestern / morgen",
        "ar": "اليوم/أمس/غداً",
        "example": "Morgen besuche ich meinen Onkel."
      },
      {
        "de": "vorgestern / übermorgen",
        "ar": "أول من أمس / بعد غد",
        "example": "Übermorgen ist Sonntag."
      },
      {
        "de": "jetzt / sofort / bald",
        "ar": "الآن / فوراً / قريباً",
        "example": "Komm bitte sofort!"
      },
      {
        "de": "früher / später",
        "ar": "في السابق / لاحقاً",
        "example": "Früher war alles anders."
      },
      {
        "de": "oft / manchmal / selten / nie",
        "ar": "كثيراً / أحياناً / نادراً / أبداً",
        "example": "Ich gehe oft ins Schwimmbad."
      },
      {
        "de": "immer / fast immer / nie",
        "ar": "دائماً / تقريباً دائماً / أبداً",
        "example": "Ich bin nie spät."
      },
      {
        "de": "der Geburtstag",
        "ar": "عيد الميلاد",
        "example": "Herzlichen Glückwunsch zum Geburtstag!"
      },
      {
        "de": "die Hochzeit",
        "ar": "حفلة الزواج",
        "example": "Wir sind zur Hochzeit eingeladen."
      },
      {
        "de": "das Fest / die Feier",
        "ar": "الاحتفال",
        "example": "Heute ist ein großes Fest."
      },
      {
        "de": "feiern",
        "ar": "يحتفل",
        "example": "Wir feiern den Geburtstag meines Sohnes."
      },
      {
        "de": "einladen / die Einladung",
        "ar": "يدعو / الدعوة",
        "example": "Vielen Dank für die Einladung."
      },
      {
        "de": "das Geschenk",
        "ar": "الهدية",
        "example": "Was ist ein gutes Geschenk?"
      },
      {
        "de": "der Feiertag",
        "ar": "يوم العطلة الرسمية",
        "example": "Heute ist Feiertag, alles ist zu."
      },
      {
        "de": "Weihnachten",
        "ar": "عيد الميلاد المسيحي",
        "example": "Frohe Weihnachten!"
      },
      {
        "de": "Ostern",
        "ar": "عيد الفصح",
        "example": "Frohe Ostern!"
      },
      {
        "de": "Neujahr / Silvester",
        "ar": "رأس السنة",
        "example": "Frohes Neujahr!"
      },
      {
        "de": "der Ramadan / das Zuckerfest",
        "ar": "رمضان / عيد الفطر",
        "example": "Im Ramadan fasten wir."
      }
    ]
  },
  {
    "id": "essen2",
    "name": "Essen & Trinken",
    "nameAr": "المطبخ والمأكولات",
    "icon": "📝",
    "words": [
      {
        "de": "das Frühstück",
        "ar": "الفطور",
        "example": "Zum Frühstück esse ich Brot."
      },
      {
        "de": "das Mittagessen",
        "ar": "الغداء",
        "example": "Mittagessen ist um 13 Uhr."
      },
      {
        "de": "das Abendessen",
        "ar": "العشاء",
        "example": "Was gibt es zum Abendessen?"
      },
      {
        "de": "das Brot / das Brötchen",
        "ar": "الخبز / الصمونة",
        "example": "Ich kaufe frisches Brot."
      },
      {
        "de": "die Butter / die Marmelade",
        "ar": "الزبدة / المربى",
        "example": "Brot mit Butter und Marmelade."
      },
      {
        "de": "der Käse",
        "ar": "الجبنة",
        "example": "Deutscher Käse ist sehr lecker."
      },
      {
        "de": "die Wurst / der Schinken",
        "ar": "النقانق / لحم مدخّن",
        "example": "Wir essen keine Schweinwurst."
      },
      {
        "de": "das Fleisch / das Hähnchen / das Rindfleisch",
        "ar": "اللحم / دجاج / لحم بقر",
        "example": "Ich esse gern Hähnchen."
      },
      {
        "de": "der Fisch",
        "ar": "السمك",
        "example": "Freitags essen wir Fisch."
      },
      {
        "de": "das Gemüse",
        "ar": "الخضار",
        "example": "Gemüse ist sehr gesund."
      },
      {
        "de": "der Salat",
        "ar": "السلطة",
        "example": "Ich nehme einen großen Salat."
      },
      {
        "de": "die Tomate / die Gurke",
        "ar": "البندورة / الخيار",
        "example": "Tomaten sind im Sommer billig."
      },
      {
        "de": "die Kartoffel",
        "ar": "البطاطا",
        "example": "Kartoffeln sind sehr beliebt in Deutschland."
      },
      {
        "de": "die Zwiebel / der Knoblauch",
        "ar": "البصل / الثوم",
        "example": "Schneide die Zwiebeln klein."
      },
      {
        "de": "der Reis / die Nudeln",
        "ar": "الأرز / المعكرونة",
        "example": "Wir essen heute Reis mit Hühnchen."
      },
      {
        "de": "das Obst",
        "ar": "الفواكه",
        "example": "Obst ist gesund."
      },
      {
        "de": "der Apfel / die Banane / die Orange",
        "ar": "تفاحة / موزة / برتقالة",
        "example": "Iss mehr Obst!"
      },
      {
        "de": "das Wasser / der Saft / die Cola",
        "ar": "الماء / العصير / الكولا",
        "example": "Ein Glas Wasser bitte."
      },
      {
        "de": "der Tee / der Kaffee",
        "ar": "الشاي / القهوة",
        "example": "Ich trinke morgens Kaffee."
      },
      {
        "de": "die Milch / der Zucker",
        "ar": "الحليب / السكر",
        "example": "Mit Milch und Zucker bitte."
      },
      {
        "de": "das Salz / der Pfeffer",
        "ar": "الملح / الفلفل",
        "example": "Bitte reich mir das Salz."
      },
      {
        "de": "das Öl / das Olivenöl",
        "ar": "الزيت / زيت الزيتون",
        "example": "Olivenöl ist gesund."
      },
      {
        "de": "lecker / scharf / süß / salzig / sauer / bitter",
        "ar": "لذيذ/حار/حلو/مالح/حامض/مر",
        "example": "Das Essen ist sehr lecker."
      },
      {
        "de": "das Restaurant / die Speisekarte",
        "ar": "المطعم / قائمة الطعام",
        "example": "Die Speisekarte bitte!"
      },
      {
        "de": "bestellen / die Bestellung",
        "ar": "يطلب / الطلب",
        "example": "Ich bestelle eine Pizza."
      },
      {
        "de": "die Rechnung / Trinkgeld",
        "ar": "الفاتورة / البقشيش",
        "example": "Die Rechnung bitte. Trinkgeld 10%."
      }
    ]
  },
  {
    "id": "arzt",
    "name": "Beim Arzt und in der Apotheke",
    "nameAr": "عند الطبيب والصيدلية",
    "icon": "📝",
    "words": [
      {
        "de": "der Termin",
        "ar": "موعد",
        "example": "Ich brauche einen Termin beim Arzt."
      },
      {
        "de": "die Praxis",
        "ar": "العيادة",
        "example": "Die Praxis ist morgen geschlossen."
      },
      {
        "de": "die Krankenkasse",
        "ar": "صندوق التأمين الصحي",
        "example": "Welche Krankenkasse haben Sie?"
      },
      {
        "de": "die Versichertenkarte",
        "ar": "بطاقة التأمين",
        "example": "Bitte Ihre Versichertenkarte."
      },
      {
        "de": "die Überweisung",
        "ar": "تحويلة طبية",
        "example": "Ich brauche eine Überweisung zum Facharzt."
      },
      {
        "de": "das Rezept",
        "ar": "الوصفة الطبية",
        "example": "Sie bekommen ein Rezept."
      },
      {
        "de": "die Krankschreibung / der Krankenschein",
        "ar": "إجازة مرضية",
        "example": "Ich brauche eine Krankschreibung für 3 Tage."
      },
      {
        "de": "der Hausarzt / die Hausärztin",
        "ar": "طبيب/ة الأسرة",
        "example": "Mein Hausarzt ist sehr nett."
      },
      {
        "de": "der Facharzt / die Fachärztin",
        "ar": "طبيب/ة اختصاصي/ة",
        "example": "Ich gehe zum Facharzt."
      },
      {
        "de": "der Zahnarzt / die Zahnärztin",
        "ar": "طبيب/ة أسنان",
        "example": "Ich habe Zahnschmerzen."
      },
      {
        "de": "der Augenarzt / die Augenärztin",
        "ar": "طبيب/ة عيون",
        "example": "Ich brauche eine neue Brille."
      },
      {
        "de": "der Kinderarzt / die Kinderärztin",
        "ar": "طبيب/ة أطفال",
        "example": "Mein Kind ist krank."
      },
      {
        "de": "die Schmerzen (Pl.)",
        "ar": "الآلام",
        "example": "Ich habe Kopfschmerzen."
      },
      {
        "de": "die Erkältung",
        "ar": "البرد / الزكام",
        "example": "Ich habe eine starke Erkältung."
      },
      {
        "de": "der Husten",
        "ar": "السعال",
        "example": "Mein Husten wird schlimmer."
      },
      {
        "de": "das Fieber",
        "ar": "الحمى",
        "example": "Ich habe 39 Grad Fieber."
      },
      {
        "de": "die Grippe",
        "ar": "الإنفلونزا",
        "example": "Die Grippe ist gefährlich."
      },
      {
        "de": "die Allergie",
        "ar": "الحساسية",
        "example": "Ich habe eine Pollenallergie."
      },
      {
        "de": "die Tablette / die Pille",
        "ar": "الحبة / القرص",
        "example": "Nehmen Sie 3 Tabletten täglich."
      },
      {
        "de": "der Tropfen",
        "ar": "القطرات",
        "example": "Diese Tropfen sind für die Augen."
      },
      {
        "de": "die Salbe",
        "ar": "المرهم",
        "example": "Cremen Sie die Salbe ein."
      },
      {
        "de": "der Saft (Husten-)",
        "ar": "الشراب الطبي",
        "example": "Hustensaft hilft gut."
      },
      {
        "de": "die Apotheke",
        "ar": "الصيدلية",
        "example": "Wo ist die nächste Apotheke?"
      },
      {
        "de": "die Notaufnahme / die Notdienst",
        "ar": "الطوارئ",
        "example": "Bei starken Schmerzen: Notaufnahme!"
      },
      {
        "de": "der Krankenwagen / 112",
        "ar": "سيارة إسعاف / 112",
        "example": "Ruf den Krankenwagen unter 112!"
      },
      {
        "de": "die Operation",
        "ar": "العملية الجراحية",
        "example": "Die Operation war erfolgreich."
      },
      {
        "de": "die Spritze / die Impfung",
        "ar": "الحقنة / التطعيم",
        "example": "Heute bekomme ich eine Spritze."
      },
      {
        "de": "untersuchen / die Untersuchung",
        "ar": "يفحص / الفحص",
        "example": "Der Arzt untersucht mich gründlich."
      },
      {
        "de": "die Diagnose",
        "ar": "التشخيص",
        "example": "Was ist die Diagnose?"
      },
      {
        "de": "gesund / krank",
        "ar": "صحي / مريض",
        "example": "Bleiben Sie gesund!"
      }
    ]
  },
  {
    "id": "auto-verkehr",
    "name": "Auto und Verkehr",
    "nameAr": "السيارة والقيادة",
    "icon": "📝",
    "words": [
      {
        "de": "der Führerschein",
        "ar": "رخصة القيادة",
        "example": "Ich mache den Führerschein."
      },
      {
        "de": "die Fahrschule",
        "ar": "مدرسة تعليم القيادة",
        "example": "Die Fahrschule ist teuer in Deutschland."
      },
      {
        "de": "die Theorieprüfung",
        "ar": "اختبار النظري",
        "example": "Ich habe die Theorieprüfung bestanden."
      },
      {
        "de": "die praktische Prüfung",
        "ar": "الاختبار العملي",
        "example": "Morgen ist meine praktische Prüfung."
      },
      {
        "de": "der Fahrlehrer / die Fahrlehrerin",
        "ar": "مدرّب/ة القيادة",
        "example": "Mein Fahrlehrer ist geduldig."
      },
      {
        "de": "die Tankstelle",
        "ar": "محطة الوقود",
        "example": "Ich muss zur Tankstelle."
      },
      {
        "de": "tanken / das Benzin / der Diesel",
        "ar": "يعبّئ / بنزين / ديزل",
        "example": "Voll tanken bitte!"
      },
      {
        "de": "der Stau",
        "ar": "الازدحام",
        "example": "Auf der Autobahn ist Stau."
      },
      {
        "de": "die Autobahn",
        "ar": "الأوتوبان",
        "example": "Auf der Autobahn fahre ich 130 km/h."
      },
      {
        "de": "die Geschwindigkeit",
        "ar": "السرعة",
        "example": "Reduzieren Sie die Geschwindigkeit!"
      },
      {
        "de": "das Tempolimit",
        "ar": "الحد الأقصى للسرعة",
        "example": "Im Ort 50 km/h Tempolimit."
      },
      {
        "de": "die Ampel",
        "ar": "إشارة المرور",
        "example": "Bei Rot anhalten!"
      },
      {
        "de": "das Verkehrsschild",
        "ar": "لوحة المرور",
        "example": "Beachten Sie die Verkehrsschilder."
      },
      {
        "de": "der Zebrastreifen",
        "ar": "ممر المشاة",
        "example": "Am Zebrastreifen halten."
      },
      {
        "de": "die Kreuzung",
        "ar": "التقاطع",
        "example": "An der Kreuzung links abbiegen."
      },
      {
        "de": "der Kreisverkehr",
        "ar": "الدوار",
        "example": "Im Kreisverkehr nach rechts ausfahren."
      },
      {
        "de": "parken / der Parkplatz",
        "ar": "يركن / موقف السيارات",
        "example": "Hier ist Parken verboten!"
      },
      {
        "de": "das Parkhaus / die Parkuhr",
        "ar": "كاراج موقف / عداد",
        "example": "Ich parke im Parkhaus."
      },
      {
        "de": "der Strafzettel / das Bußgeld",
        "ar": "مخالفة / غرامة",
        "example": "Ich habe einen Strafzettel bekommen."
      },
      {
        "de": "der TÜV / die HU",
        "ar": "الفحص الفني للسيارة",
        "example": "Mein Auto braucht einen neuen TÜV."
      },
      {
        "de": "die Werkstatt",
        "ar": "الورشة",
        "example": "Mein Auto ist in der Werkstatt."
      },
      {
        "de": "die Reparatur",
        "ar": "الإصلاح",
        "example": "Die Reparatur kostet 500 Euro."
      },
      {
        "de": "der Reifen / das Rad",
        "ar": "الإطار / العجلة",
        "example": "Der Reifen ist platt."
      },
      {
        "de": "der Motor / die Bremse",
        "ar": "المحرك / المكابح",
        "example": "Die Bremse funktioniert nicht."
      },
      {
        "de": "der Unfall",
        "ar": "الحادث",
        "example": "Ich hatte einen kleinen Unfall."
      },
      {
        "de": "die Versicherung (KFZ-)",
        "ar": "تأمين السيارة",
        "example": "Die KFZ-Versicherung ist Pflicht."
      },
      {
        "de": "der Fahrzeugschein / der Fahrzeugbrief",
        "ar": "بطاقة سير / دفتر السيارة",
        "example": "Hier ist mein Fahrzeugschein."
      },
      {
        "de": "die Promille / der Alkoholtest",
        "ar": "الكحول / فحص الكحول",
        "example": "0,5 Promille ist die Grenze."
      }
    ]
  },
  {
    "id": "bank-finanzen",
    "name": "Bank und Finanzen",
    "nameAr": "البنك والمال",
    "icon": "📝",
    "words": [
      {
        "de": "das Konto / das Bankkonto",
        "ar": "الحساب البنكي",
        "example": "Ich eröffne ein Konto."
      },
      {
        "de": "das Girokonto / das Sparkonto",
        "ar": "حساب جاري / حساب توفير",
        "example": "Ein Girokonto reicht mir."
      },
      {
        "de": "die EC-Karte / die Bankkarte",
        "ar": "بطاقة الصراف",
        "example": "Bezahlen mit Karte oder bar?"
      },
      {
        "de": "die Kreditkarte",
        "ar": "بطاقة ائتمان",
        "example": "Visa oder Mastercard?"
      },
      {
        "de": "die PIN / der Code",
        "ar": "الرمز السري",
        "example": "Geben Sie Ihre PIN ein."
      },
      {
        "de": "der Geldautomat / Bankautomat",
        "ar": "الصراف الآلي",
        "example": "Wo ist der nächste Geldautomat?"
      },
      {
        "de": "abheben / einzahlen",
        "ar": "يسحب / يودع",
        "example": "Ich möchte 200 Euro abheben."
      },
      {
        "de": "die Überweisung",
        "ar": "الحوالة",
        "example": "Ich mache eine Überweisung."
      },
      {
        "de": "der Dauerauftrag",
        "ar": "أمر دفع دائم",
        "example": "Die Miete läuft über einen Dauerauftrag."
      },
      {
        "de": "die Lastschrift / der Einzug",
        "ar": "خصم تلقائي",
        "example": "Strom geht per Lastschrift ab."
      },
      {
        "de": "das Bargeld / bar bezahlen",
        "ar": "النقد / يدفع نقداً",
        "example": "Hier nur Barzahlung möglich."
      },
      {
        "de": "die IBAN / die BIC",
        "ar": "IBAN / BIC",
        "example": "Schreib mir deine IBAN."
      },
      {
        "de": "der Kontoauszug",
        "ar": "كشف الحساب",
        "example": "Ich drucke meinen Kontoauszug."
      },
      {
        "de": "der Kredit / das Darlehen",
        "ar": "القرض",
        "example": "Ich brauche einen Kredit von der Bank."
      },
      {
        "de": "die Schulden (Pl.)",
        "ar": "الديون",
        "example": "Ich habe keine Schulden."
      },
      {
        "de": "sparen / das Ersparnis",
        "ar": "يدّخر / المدخرات",
        "example": "Ich spare jeden Monat 200 Euro."
      },
      {
        "de": "die Zinsen (Pl.)",
        "ar": "الفوائد",
        "example": "Die Zinsen sind sehr niedrig."
      },
      {
        "de": "die Steuer / die Einkommensteuer",
        "ar": "الضريبة / ضريبة الدخل",
        "example": "Die Steuern sind hoch in Deutschland."
      },
      {
        "de": "das Finanzamt",
        "ar": "مصلحة الضرائب",
        "example": "Ich gehe zum Finanzamt."
      },
      {
        "de": "die Steuererklärung",
        "ar": "الإقرار الضريبي",
        "example": "Bis Ende Juli die Steuererklärung abgeben."
      },
      {
        "de": "der Steuerberater / die Steuerberaterin",
        "ar": "مستشار/ة ضريبي/ة",
        "example": "Ich frage meinen Steuerberater."
      },
      {
        "de": "die Rente / die Pension",
        "ar": "المعاش التقاعدي",
        "example": "Mein Vater bekommt jetzt Rente."
      },
      {
        "de": "die Rentenversicherung",
        "ar": "تأمين التقاعد",
        "example": "Jeder zahlt in die Rentenversicherung."
      },
      {
        "de": "die Gebühr / die Provision",
        "ar": "الرسوم / العمولة",
        "example": "Wie hoch ist die Gebühr?"
      },
      {
        "de": "der Wechselkurs",
        "ar": "سعر الصرف",
        "example": "Der Wechselkurs ist heute schlecht."
      },
      {
        "de": "das Sparbuch",
        "ar": "دفتر التوفير",
        "example": "Mein Sparbuch ist bei der Sparkasse."
      }
    ]
  },
  {
    "id": "post-amt",
    "name": "Post und Behörden",
    "nameAr": "البريد والمعاملات",
    "icon": "📝",
    "words": [
      {
        "de": "die Post",
        "ar": "البريد / مكتب البريد",
        "example": "Ich gehe zur Post."
      },
      {
        "de": "das Paket",
        "ar": "الطرد",
        "example": "Ich verschicke ein Paket nach Syrien."
      },
      {
        "de": "der Brief / der Briefumschlag",
        "ar": "الرسالة / الظرف",
        "example": "Schreib mir bitte einen Brief."
      },
      {
        "de": "die Briefmarke",
        "ar": "الطابع البريدي",
        "example": "Eine Briefmarke nach Syrien bitte."
      },
      {
        "de": "der Briefkasten",
        "ar": "صندوق البريد",
        "example": "Bitte werfen Sie den Brief in den Briefkasten."
      },
      {
        "de": "die Postleitzahl (PLZ)",
        "ar": "الرمز البريدي",
        "example": "Was ist Ihre PLZ?"
      },
      {
        "de": "die Adresse / die Anschrift",
        "ar": "العنوان",
        "example": "Bitte schreiben Sie die Adresse hier."
      },
      {
        "de": "der Empfänger / der Absender",
        "ar": "المستلم / المرسل",
        "example": "Empfänger: Familie Müller."
      },
      {
        "de": "das Einschreiben",
        "ar": "بريد مسجل",
        "example": "Ich verschicke das Dokument als Einschreiben."
      },
      {
        "de": "die Sendungsnummer",
        "ar": "رقم الشحنة",
        "example": "Hier ist die Sendungsnummer für die Verfolgung."
      },
      {
        "de": "die Anmeldung / das Bürgeramt",
        "ar": "التسجيل / مكتب المواطنين",
        "example": "Sie müssen sich beim Bürgeramt anmelden."
      },
      {
        "de": "die Meldebescheinigung",
        "ar": "شهادة التسجيل",
        "example": "Ich brauche eine Meldebescheinigung."
      },
      {
        "de": "der Personalausweis / der Pass",
        "ar": "الهوية / جواز السفر",
        "example": "Bitte Ihren Personalausweis."
      },
      {
        "de": "die Aufenthaltserlaubnis / der Aufenthaltstitel",
        "ar": "إذن الإقامة",
        "example": "Meine Aufenthaltserlaubnis läuft ab."
      },
      {
        "de": "die Ausländerbehörde / das Migrationsamt",
        "ar": "مصلحة الأجانب",
        "example": "Termin bei der Ausländerbehörde."
      },
      {
        "de": "der Antrag / beantragen",
        "ar": "الطلب / يقدّم طلباً",
        "example": "Ich beantrage einen neuen Pass."
      },
      {
        "de": "die Bescheinigung",
        "ar": "الشهادة / الإفادة",
        "example": "Hier ist die Bescheinigung vom Arbeitsamt."
      },
      {
        "de": "die Kopie / kopieren",
        "ar": "النسخة / يصور",
        "example": "Bitte machen Sie eine Kopie."
      },
      {
        "de": "die Unterschrift / unterschreiben",
        "ar": "التوقيع / يوقّع",
        "example": "Bitte unterschreiben Sie hier."
      },
      {
        "de": "das Formular / ausfüllen",
        "ar": "الاستمارة / يملأ",
        "example": "Füllen Sie das Formular aus."
      },
      {
        "de": "die Geburtsurkunde",
        "ar": "شهادة الميلاد",
        "example": "Hier ist meine Geburtsurkunde."
      },
      {
        "de": "die Heiratsurkunde",
        "ar": "عقد الزواج",
        "example": "Wir brauchen eine beglaubigte Heiratsurkunde."
      },
      {
        "de": "der Termin (online)",
        "ar": "موعد عبر الإنترنت",
        "example": "Ich buche einen Termin online."
      },
      {
        "de": "die Wartezeit / die Schlange",
        "ar": "وقت الانتظار / الطابور",
        "example": "Die Wartezeit beträgt 2 Stunden."
      }
    ]
  },
  {
    "id": "medien-internet",
    "name": "Medien und Internet",
    "nameAr": "الإعلام والإنترنت",
    "icon": "📝",
    "words": [
      {
        "de": "das Internet / online",
        "ar": "الإنترنت / متصل",
        "example": "Ich bin viel online."
      },
      {
        "de": "die Webseite / die Homepage",
        "ar": "الموقع الإلكتروني",
        "example": "Besuchen Sie unsere Webseite."
      },
      {
        "de": "die App / die Anwendung",
        "ar": "التطبيق",
        "example": "Diese App ist kostenlos."
      },
      {
        "de": "das Smartphone / das Handy",
        "ar": "الهاتف الذكي / الجوال",
        "example": "Mein Handy-Akku ist leer."
      },
      {
        "de": "der Laptop / der Computer",
        "ar": "لابتوب / كومبيوتر",
        "example": "Mein Laptop ist neu."
      },
      {
        "de": "das WLAN / das Internet zu Hause",
        "ar": "الواي فاي",
        "example": "Wie ist das WLAN-Passwort?"
      },
      {
        "de": "das Passwort",
        "ar": "كلمة المرور",
        "example": "Ändern Sie Ihr Passwort regelmäßig."
      },
      {
        "de": "sich anmelden / sich abmelden",
        "ar": "يسجّل دخول / خروج",
        "example": "Bitte melden Sie sich an."
      },
      {
        "de": "das Konto (online)",
        "ar": "الحساب الإلكتروني",
        "example": "Ich erstelle ein neues Konto."
      },
      {
        "de": "die E-Mail / die Mail",
        "ar": "البريد الإلكتروني",
        "example": "Schicken Sie mir eine E-Mail."
      },
      {
        "de": "der Anhang / die Datei",
        "ar": "المرفق / الملف",
        "example": "Ich öffne den Anhang."
      },
      {
        "de": "herunterladen / hochladen",
        "ar": "يحمّل / يرفع",
        "example": "Ich lade die Datei herunter."
      },
      {
        "de": "der Link / der Hyperlink",
        "ar": "الرابط",
        "example": "Klicken Sie auf den Link."
      },
      {
        "de": "das soziale Netzwerk",
        "ar": "الشبكة الاجتماعية",
        "example": "Facebook ist ein soziales Netzwerk."
      },
      {
        "de": "posten / der Beitrag",
        "ar": "ينشر / المنشور",
        "example": "Ich poste oft Fotos."
      },
      {
        "de": "der Kommentar / kommentieren",
        "ar": "تعليق / يعلّق",
        "example": "Schreib einen Kommentar."
      },
      {
        "de": "die Nachricht / chatten",
        "ar": "الرسالة / يدردش",
        "example": "Wir chatten via WhatsApp."
      },
      {
        "de": "der Anruf / das Videotelefonat",
        "ar": "المكالمة / مكالمة فيديو",
        "example": "Wir machen einen Videoanruf."
      },
      {
        "de": "die Nachrichten (Pl.)",
        "ar": "الأخبار",
        "example": "Ich schaue jeden Abend die Nachrichten."
      },
      {
        "de": "das Fernsehen / der Fernseher",
        "ar": "التلفزيون / جهاز التلفزيون",
        "example": "Was läuft heute im Fernsehen?"
      },
      {
        "de": "der Sender / der Kanal",
        "ar": "القناة",
        "example": "Welcher Sender zeigt das Spiel?"
      },
      {
        "de": "der Film / die Serie",
        "ar": "الفيلم / المسلسل",
        "example": "Ich schaue gerne Serien."
      },
      {
        "de": "das Radio",
        "ar": "الراديو",
        "example": "Im Radio kommt Musik."
      },
      {
        "de": "die Zeitung / die Zeitschrift",
        "ar": "الجريدة / المجلة",
        "example": "Ich lese die Bild-Zeitung."
      },
      {
        "de": "der Datenschutz",
        "ar": "حماية البيانات",
        "example": "Datenschutz ist sehr wichtig."
      }
    ]
  },
  {
    "id": "reisen-urlaub",
    "name": "Reisen und Urlaub",
    "nameAr": "السفر والإجازات",
    "icon": "📝",
    "words": [
      {
        "de": "die Reise / verreisen",
        "ar": "الرحلة / يسافر",
        "example": "Wir machen eine Reise nach Italien."
      },
      {
        "de": "der Urlaub / die Ferien",
        "ar": "الإجازة / العطلة",
        "example": "Ich habe Urlaub im August."
      },
      {
        "de": "das Reisebüro",
        "ar": "مكتب السياحة",
        "example": "Im Reisebüro buche ich die Reise."
      },
      {
        "de": "das Flugzeug / der Flughafen",
        "ar": "الطائرة / المطار",
        "example": "Mein Flugzeug startet um 9 Uhr."
      },
      {
        "de": "der Flug / fliegen",
        "ar": "الرحلة الجوية / يطير",
        "example": "Wir fliegen nach Berlin."
      },
      {
        "de": "das Ticket / die Bordkarte",
        "ar": "التذكرة / بطاقة الصعود",
        "example": "Hier ist meine Bordkarte."
      },
      {
        "de": "das Gepäck / der Koffer",
        "ar": "الأمتعة / الحقيبة",
        "example": "Mein Koffer ist sehr schwer."
      },
      {
        "de": "der Pass / der Reisepass",
        "ar": "الجواز",
        "example": "Mein Reisepass läuft ab."
      },
      {
        "de": "das Visum / das Visa",
        "ar": "التأشيرة",
        "example": "Ich brauche ein Visum."
      },
      {
        "de": "der Zoll",
        "ar": "الجمارك",
        "example": "Müssen wir Zoll bezahlen?"
      },
      {
        "de": "das Hotel / die Pension",
        "ar": "الفندق / النزل",
        "example": "Wir haben ein Hotel gebucht."
      },
      {
        "de": "das Zimmer / das Doppelzimmer",
        "ar": "الغرفة / غرفة مزدوجة",
        "example": "Ein Doppelzimmer für 3 Nächte bitte."
      },
      {
        "de": "die Reservierung / reservieren",
        "ar": "الحجز / يحجز",
        "example": "Ich habe eine Reservierung auf den Namen Ali."
      },
      {
        "de": "der Ausflug / besichtigen",
        "ar": "النزهة / يزور المعالم",
        "example": "Wir besichtigen das Schloss."
      },
      {
        "de": "die Sehenswürdigkeit",
        "ar": "المعالم السياحية",
        "example": "Berlin hat viele Sehenswürdigkeiten."
      },
      {
        "de": "das Souvenir / das Mitbringsel",
        "ar": "تذكار / هدية تذكارية",
        "example": "Ich kaufe ein Souvenir."
      },
      {
        "de": "das Meer / der Strand",
        "ar": "البحر / الشاطئ",
        "example": "Wir liegen am Strand."
      },
      {
        "de": "die Berge (Pl.) / wandern",
        "ar": "الجبال / يتنزه سيراً",
        "example": "Im Sommer wandern wir in den Alpen."
      },
      {
        "de": "der See / der Fluss",
        "ar": "البحيرة / النهر",
        "example": "Der Bodensee ist sehr schön."
      },
      {
        "de": "die Stadt / die Hauptstadt",
        "ar": "المدينة / العاصمة",
        "example": "Berlin ist die Hauptstadt von Deutschland."
      },
      {
        "de": "das Land / das Ausland",
        "ar": "البلد / الخارج",
        "example": "Ich war noch nie im Ausland."
      },
      {
        "de": "der Tourist / die Touristin",
        "ar": "سائح/ة",
        "example": "In Berlin gibt es viele Touristen."
      },
      {
        "de": "die Sprache / die Fremdsprache",
        "ar": "اللغة / اللغة الأجنبية",
        "example": "Ich lerne Deutsch als Fremdsprache."
      },
      {
        "de": "die Reiseversicherung",
        "ar": "تأمين السفر",
        "example": "Eine Reiseversicherung ist sinnvoll."
      },
      {
        "de": "verspäten (sich) / die Verspätung",
        "ar": "يتأخر / التأخير",
        "example": "Mein Flug hat 2 Stunden Verspätung."
      }
    ]
  },
  {
    "id": "arbeit-bewerbung",
    "name": "Bewerbung und Vorstellungsgespräch",
    "nameAr": "التقديم للعمل",
    "icon": "📝",
    "words": [
      {
        "de": "die Stellenanzeige / das Stellenangebot",
        "ar": "إعلان وظيفة",
        "example": "Diese Stellenanzeige ist interessant."
      },
      {
        "de": "der Arbeitsplatz / die Stelle",
        "ar": "الوظيفة",
        "example": "Ich suche eine neue Stelle."
      },
      {
        "de": "die Bewerbungsmappe / Bewerbungsunterlagen",
        "ar": "ملف التقديم",
        "example": "Schicken Sie Ihre Bewerbungsunterlagen."
      },
      {
        "de": "das Anschreiben / Bewerbungsschreiben",
        "ar": "رسالة التقديم",
        "example": "Schreiben Sie ein gutes Anschreiben."
      },
      {
        "de": "der Lebenslauf (CV)",
        "ar": "السيرة الذاتية",
        "example": "Mein Lebenslauf ist 2 Seiten lang."
      },
      {
        "de": "das Zeugnis / die Zeugnisse",
        "ar": "الشهادة / الشهادات",
        "example": "Bitte legen Sie Ihre Zeugnisse bei."
      },
      {
        "de": "das Arbeitszeugnis",
        "ar": "شهادة العمل / Reference",
        "example": "Mein Arbeitszeugnis ist sehr gut."
      },
      {
        "de": "die Sprachkenntnisse",
        "ar": "مستوى اللغة",
        "example": "Sprachkenntnisse: Deutsch B1, Arabisch (Muttersprache)."
      },
      {
        "de": "die Berufserfahrung",
        "ar": "خبرة العمل",
        "example": "Ich habe 5 Jahre Berufserfahrung."
      },
      {
        "de": "die Qualifikation / qualifiziert",
        "ar": "المؤهل",
        "example": "Ich bin gut qualifiziert."
      },
      {
        "de": "die Anerkennung (von Abschlüssen)",
        "ar": "الاعتراف بالشهادة",
        "example": "Ich beantrage die Anerkennung meines Diploms."
      },
      {
        "de": "das Vorstellungsgespräch",
        "ar": "مقابلة العمل",
        "example": "Morgen habe ich ein Vorstellungsgespräch."
      },
      {
        "de": "der Personalchef / die Personalchefin",
        "ar": "مدير/ة الموارد البشرية",
        "example": "Der Personalchef stellt viele Fragen."
      },
      {
        "de": "die Stärken / die Schwächen",
        "ar": "نقاط القوة / الضعف",
        "example": "Was sind Ihre Stärken?"
      },
      {
        "de": "die Probezeit",
        "ar": "فترة التجربة",
        "example": "Die Probezeit beträgt 6 Monate."
      },
      {
        "de": "die Arbeitszeit / die Vollzeit / die Teilzeit",
        "ar": "دوام كامل / جزئي",
        "example": "Ich arbeite Vollzeit."
      },
      {
        "de": "die Schichtarbeit",
        "ar": "العمل بنظام الورديات",
        "example": "Schichtarbeit ist hart."
      },
      {
        "de": "die Beförderung / befördert werden",
        "ar": "الترقية",
        "example": "Ich wurde zum Teamleiter befördert."
      },
      {
        "de": "die Gehaltserhöhung",
        "ar": "زيادة الراتب",
        "example": "Ich bitte um eine Gehaltserhöhung."
      },
      {
        "de": "das Vorstellungsgespräch absagen",
        "ar": "إلغاء المقابلة",
        "example": "Leider muss ich das Vorstellungsgespräch absagen."
      },
      {
        "de": "flexibel / zuverlässig / motiviert",
        "ar": "مرن / موثوق / متحفز",
        "example": "Ich bin flexibel und zuverlässig."
      },
      {
        "de": "teamfähig / kommunikativ",
        "ar": "يعمل في فريق / تواصلي",
        "example": "Ich bin sehr teamfähig."
      }
    ]
  },
  {
    "id": "umwelt-natur",
    "name": "Umwelt und Natur",
    "nameAr": "البيئة والطبيعة",
    "icon": "📝",
    "words": [
      {
        "de": "die Umwelt / der Umweltschutz",
        "ar": "البيئة / حماية البيئة",
        "example": "Umweltschutz ist sehr wichtig."
      },
      {
        "de": "der Klimawandel",
        "ar": "التغير المناخي",
        "example": "Der Klimawandel ist eine große Gefahr."
      },
      {
        "de": "die Erderwärmung",
        "ar": "الاحتباس الحراري",
        "example": "Die Erderwärmung steigt jedes Jahr."
      },
      {
        "de": "die CO2-Emissionen",
        "ar": "انبعاثات ثاني أكسيد الكربون",
        "example": "Wir müssen die CO2-Emissionen reduzieren."
      },
      {
        "de": "der Müll / die Abfälle",
        "ar": "النفايات / القمامة",
        "example": "Bringen Sie den Müll raus."
      },
      {
        "de": "die Mülltrennung / der Mülleimer",
        "ar": "فرز النفايات / صندوق القمامة",
        "example": "Mülltrennung ist Pflicht in Deutschland."
      },
      {
        "de": "das Recycling / recyceln",
        "ar": "إعادة التدوير",
        "example": "Plastik kann man recyceln."
      },
      {
        "de": "der gelbe Sack / die gelbe Tonne",
        "ar": "الكيس/الصندوق الأصفر",
        "example": "Plastikverpackungen kommen in den gelben Sack."
      },
      {
        "de": "das Pfand / die Pfandflasche",
        "ar": "العربون / قارورة قابلة للإرجاع",
        "example": "Diese Flasche hat 25 Cent Pfand."
      },
      {
        "de": "die Erneuerbare Energie",
        "ar": "الطاقة المتجددة",
        "example": "Solarenergie ist erneuerbar."
      },
      {
        "de": "die Solaranlage / die Windenergie",
        "ar": "الطاقة الشمسية / طاقة الرياح",
        "example": "Wir haben eine Solaranlage auf dem Dach."
      },
      {
        "de": "das Naturschutzgebiet / der Nationalpark",
        "ar": "محمية طبيعية / منتزه وطني",
        "example": "Im Nationalpark darf man nicht jagen."
      },
      {
        "de": "der Wald / der Baum",
        "ar": "الغابة / الشجرة",
        "example": "Im Wald ist es ruhig."
      },
      {
        "de": "die Wiese / das Feld",
        "ar": "المرج / الحقل",
        "example": "Auf der Wiese spielen Kinder."
      },
      {
        "de": "der Garten / die Pflanze",
        "ar": "الحديقة / النبات",
        "example": "Ich habe einen kleinen Garten."
      },
      {
        "de": "das Tier / das Haustier",
        "ar": "الحيوان / حيوان أليف",
        "example": "Wir haben ein Haustier zu Hause."
      },
      {
        "de": "die Pflanze / die Blume",
        "ar": "النبات / الزهرة",
        "example": "Diese Blumen sind schön."
      },
      {
        "de": "das Wasser sparen",
        "ar": "توفير الماء",
        "example": "Bitte Wasser sparen!"
      },
      {
        "de": "der Strom / die Energie",
        "ar": "الكهرباء / الطاقة",
        "example": "Strom wird teurer."
      },
      {
        "de": "umweltfreundlich / nachhaltig",
        "ar": "صديق للبيئة / مستدام",
        "example": "Diese Verpackung ist umweltfreundlich."
      },
      {
        "de": "die Verschmutzung / verschmutzen",
        "ar": "التلوث / يلوث",
        "example": "Plastik verschmutzt das Meer."
      },
      {
        "de": "das Wetter / das Klima",
        "ar": "الطقس / المناخ",
        "example": "Wie ist das Wetter heute?"
      }
    ]
  },
  {
    "id": "b2-arbeit",
    "name": "Arbeit & Beruf",
    "nameAr": "العمل والمهنة — Arbeit & Beruf",
    "icon": "📝",
    "words": [
      {
        "de": "der Arbeitgeber",
        "ar": "صاحب العمل",
        "example": "Der Arbeitgeber zahlt das Gehalt."
      },
      {
        "de": "der Arbeitnehmer",
        "ar": "الموظّف",
        "example": "Der Arbeitnehmer hat 30 Tage Urlaub."
      },
      {
        "de": "die Bewerbung, -en",
        "ar": "طلب التوظيف",
        "example": "Ich habe meine Bewerbung abgeschickt."
      },
      {
        "de": "das Vorstellungsgespräch",
        "ar": "مقابلة العمل",
        "example": "Das Vorstellungsgespräch ist morgen."
      },
      {
        "de": "der Lebenslauf",
        "ar": "السيرة الذاتيّة",
        "example": "Bitte senden Sie Ihren Lebenslauf."
      },
      {
        "de": "die Qualifikation, -en",
        "ar": "المؤهّل",
        "example": "Welche Qualifikationen haben Sie?"
      },
      {
        "de": "die Erfahrung, -en",
        "ar": "الخبرة",
        "example": "Ich habe 5 Jahre Erfahrung."
      },
      {
        "de": "die Beförderung",
        "ar": "الترقية",
        "example": "Er hat eine Beförderung bekommen."
      },
      {
        "de": "kündigen",
        "ar": "يستقيل / يفصل من العمل",
        "example": "Sie hat letzten Monat gekündigt."
      },
      {
        "de": "der Tarifvertrag",
        "ar": "عقد جماعي",
        "example": "Der Tarifvertrag regelt die Löhne."
      },
      {
        "de": "die Überstunden (Pl.)",
        "ar": "ساعات إضافيّة",
        "example": "Ich mache oft Überstunden."
      },
      {
        "de": "die Selbständigkeit",
        "ar": "العمل الحرّ",
        "example": "Sie hat sich für die Selbständigkeit entschieden."
      },
      {
        "de": "die Arbeitslosigkeit",
        "ar": "البطالة",
        "example": "Die Arbeitslosigkeit sinkt."
      },
      {
        "de": "die Fortbildung",
        "ar": "تدريب مستمرّ",
        "example": "Eine Fortbildung wäre hilfreich."
      },
      {
        "de": "die Verantwortung",
        "ar": "المسؤوليّة",
        "example": "Sie trägt viel Verantwortung."
      },
      {
        "de": "der Vertrag, -¨e",
        "ar": "عقد",
        "example": "Bitte unterschreiben Sie den Vertrag."
      },
      {
        "de": "das Gehalt, -¨er",
        "ar": "راتب",
        "example": "Das Gehalt wird monatlich überwiesen."
      },
      {
        "de": "die Versicherung",
        "ar": "التأمين",
        "example": "Die Krankenversicherung ist obligatorisch."
      },
      {
        "de": "die Stelle, -n",
        "ar": "وظيفة",
        "example": "Ich suche eine neue Stelle."
      },
      {
        "de": "die Belastung",
        "ar": "الضغط/العبء",
        "example": "Die psychische Belastung ist hoch."
      }
    ]
  },
  {
    "id": "b2-bildung",
    "name": "Bildung",
    "nameAr": "التعليم — Bildung",
    "icon": "📝",
    "words": [
      {
        "de": "die Bildung",
        "ar": "التعليم",
        "example": "Bildung ist wichtig für die Zukunft."
      },
      {
        "de": "der Abschluss, -¨e",
        "ar": "شهادة (تخرّج)",
        "example": "Sie hat ihren Abschluss gemacht."
      },
      {
        "de": "die Hochschule, -n",
        "ar": "جامعة/معهد عالٍ",
        "example": "Er studiert an einer Hochschule."
      },
      {
        "de": "das Studium",
        "ar": "الدراسة الجامعيّة",
        "example": "Das Studium dauert 4 Jahre."
      },
      {
        "de": "die Forschung",
        "ar": "البحث العلمي",
        "example": "Die Forschung an dieser Universität ist hervorragend."
      },
      {
        "de": "die Prüfung, -en",
        "ar": "امتحان",
        "example": "Die Prüfung war schwer."
      },
      {
        "de": "das Stipendium",
        "ar": "منحة دراسيّة",
        "example": "Sie hat ein Stipendium bekommen."
      },
      {
        "de": "der Lehrplan",
        "ar": "المنهاج",
        "example": "Der Lehrplan wird oft erneuert."
      },
      {
        "de": "die Pädagogik",
        "ar": "علم التربية",
        "example": "Pädagogik ist eine wichtige Wissenschaft."
      },
      {
        "de": "die Anerkennung",
        "ar": "الاعتراف (بشهادة)",
        "example": "Die Anerkennung der Zeugnisse dauert lange."
      },
      {
        "de": "das Wissen",
        "ar": "المعرفة",
        "example": "Wissen ist Macht."
      },
      {
        "de": "der Lehrer / die Lehrerin",
        "ar": "معلّم/معلّمة",
        "example": "Mein Lehrer ist sehr nett."
      },
      {
        "de": "die Begabung",
        "ar": "الموهبة",
        "example": "Sie hat eine besondere Begabung für Mathe."
      },
      {
        "de": "das Lernen",
        "ar": "التعلّم",
        "example": "Lebenslanges Lernen ist wichtig."
      },
      {
        "de": "das Praktikum",
        "ar": "تدريب عملي",
        "example": "Ich mache ein Praktikum bei BMW."
      },
      {
        "de": "die Note, -n",
        "ar": "علامة/درجة",
        "example": "Er hat eine sehr gute Note bekommen."
      },
      {
        "de": "der Bildungsweg",
        "ar": "المسار التعليمي",
        "example": "Mein Bildungsweg war nicht einfach."
      },
      {
        "de": "die Lernmethode, -n",
        "ar": "طريقة التعلّم",
        "example": "Welche Lernmethode passt zu dir?"
      },
      {
        "de": "der Wissenschaftler",
        "ar": "العالم",
        "example": "Der Wissenschaftler hat eine wichtige Entdeckung gemacht."
      },
      {
        "de": "der Student / die Studentin",
        "ar": "طالب جامعي",
        "example": "Die Studentin lernt Deutsch."
      }
    ]
  },
  {
    "id": "b2-gesundheit",
    "name": "Gesundheit",
    "nameAr": "الصحّة — Gesundheit",
    "icon": "📝",
    "words": [
      {
        "de": "die Gesundheit",
        "ar": "الصحّة",
        "example": "Gesundheit ist das wichtigste."
      },
      {
        "de": "die Krankheit, -en",
        "ar": "المرض",
        "example": "Diese Krankheit ist heilbar."
      },
      {
        "de": "der Arzt / die Ärztin",
        "ar": "طبيب/طبيبة",
        "example": "Ich habe einen Termin beim Arzt."
      },
      {
        "de": "das Medikament, -e",
        "ar": "دواء",
        "example": "Nehmen Sie dieses Medikament dreimal täglich."
      },
      {
        "de": "die Therapie",
        "ar": "العلاج",
        "example": "Die Therapie hat geholfen."
      },
      {
        "de": "die Diagnose",
        "ar": "التشخيص",
        "example": "Die Diagnose war ein Schock."
      },
      {
        "de": "die Symptome (Pl.)",
        "ar": "الأعراض",
        "example": "Die Symptome sind Fieber und Husten."
      },
      {
        "de": "die Versicherung",
        "ar": "تأمين صحّي",
        "example": "Meine Versicherung zahlt alles."
      },
      {
        "de": "die Operation, -en",
        "ar": "عمليّة جراحيّة",
        "example": "Die Operation war erfolgreich."
      },
      {
        "de": "die Vorsorge",
        "ar": "الوقاية",
        "example": "Vorsorge ist besser als Heilung."
      },
      {
        "de": "die Ernährung",
        "ar": "التغذية",
        "example": "Eine gesunde Ernährung ist wichtig."
      },
      {
        "de": "die Bewegung",
        "ar": "الحركة/الرياضة",
        "example": "Bewegung ist gut für die Gesundheit."
      },
      {
        "de": "der Stress",
        "ar": "الضغط النفسي",
        "example": "Stress macht krank."
      },
      {
        "de": "die Grippe",
        "ar": "الإنفلونزا",
        "example": "Ich habe Grippe."
      },
      {
        "de": "der Schmerz, -en",
        "ar": "ألم",
        "example": "Ich habe Kopfschmerzen."
      },
      {
        "de": "die Allergie, -n",
        "ar": "حساسيّة",
        "example": "Sie hat eine Pollen-Allergie."
      },
      {
        "de": "das Krankenhaus",
        "ar": "المستشفى",
        "example": "Er liegt im Krankenhaus."
      },
      {
        "de": "die Impfung, -en",
        "ar": "التطعيم",
        "example": "Die Impfung schützt vor Krankheiten."
      },
      {
        "de": "der Patient / die Patientin",
        "ar": "مريض/مريضة",
        "example": "Der Patient ist 60 Jahre alt."
      },
      {
        "de": "fit bleiben",
        "ar": "يحافظ على لياقته",
        "example": "Wie bleibt man fit?"
      }
    ]
  },
  {
    "id": "b2-umwelt",
    "name": "Umwelt",
    "nameAr": "البيئة — Umwelt",
    "icon": "📝",
    "words": [
      {
        "de": "die Umwelt",
        "ar": "البيئة",
        "example": "Wir müssen die Umwelt schützen."
      },
      {
        "de": "der Klimawandel",
        "ar": "تغيّر المناخ",
        "example": "Der Klimawandel ist eine globale Bedrohung."
      },
      {
        "de": "die Erderwärmung",
        "ar": "الاحتباس الحراري",
        "example": "Die Erderwärmung steigt."
      },
      {
        "de": "die Treibhausgase (Pl.)",
        "ar": "غازات الدفيئة",
        "example": "Treibhausgase verursachen den Klimawandel."
      },
      {
        "de": "der Müll",
        "ar": "القمامة",
        "example": "Wir müssen Müll vermeiden."
      },
      {
        "de": "die Mülltrennung",
        "ar": "فرز القمامة",
        "example": "Mülltrennung ist in Deutschland Pflicht."
      },
      {
        "de": "das Recycling",
        "ar": "إعادة التدوير",
        "example": "Recycling spart Ressourcen."
      },
      {
        "de": "die erneuerbaren Energien (Pl.)",
        "ar": "الطاقات المتجدّدة",
        "example": "Erneuerbare Energien werden immer wichtiger."
      },
      {
        "de": "die Solarenergie",
        "ar": "الطاقة الشمسيّة",
        "example": "Solarenergie ist umweltfreundlich."
      },
      {
        "de": "der Naturschutz",
        "ar": "حماية الطبيعة",
        "example": "Naturschutz ist eine wichtige Aufgabe."
      },
      {
        "de": "die Verschmutzung",
        "ar": "التلوّث",
        "example": "Die Luftverschmutzung steigt."
      },
      {
        "de": "der CO₂-Ausstoß",
        "ar": "انبعاثات ثاني أكسيد الكربون",
        "example": "Wir müssen den CO₂-Ausstoß reduzieren."
      },
      {
        "de": "nachhaltig",
        "ar": "مستدام",
        "example": "Nachhaltige Entwicklung ist wichtig."
      },
      {
        "de": "der Plastikmüll",
        "ar": "النفايات البلاستيكيّة",
        "example": "Plastikmüll im Meer ist ein Problem."
      },
      {
        "de": "die Energiewende",
        "ar": "التحوّل الطاقي",
        "example": "Deutschland hat die Energiewende beschlossen."
      },
      {
        "de": "das Klima",
        "ar": "المناخ",
        "example": "Das Klima ändert sich."
      },
      {
        "de": "der Umweltschutz",
        "ar": "حماية البيئة",
        "example": "Umweltschutz beginnt zu Hause."
      },
      {
        "de": "aussterben",
        "ar": "ينقرض",
        "example": "Viele Tierarten sterben aus."
      },
      {
        "de": "die Artenvielfalt",
        "ar": "التنوّع الحيوي",
        "example": "Die Artenvielfalt nimmt ab."
      },
      {
        "de": "der Verbraucher",
        "ar": "المستهلك",
        "example": "Verbraucher haben Macht."
      }
    ]
  },
  {
    "id": "b2-medien",
    "name": "Medien & Technik",
    "nameAr": "الإعلام والتقنية — Medien & Technik",
    "icon": "📝",
    "words": [
      {
        "de": "die Medien (Pl.)",
        "ar": "وسائل الإعلام",
        "example": "Die Medien spielen eine wichtige Rolle."
      },
      {
        "de": "die Nachricht, -en",
        "ar": "خبر/رسالة",
        "example": "Ich habe eine wichtige Nachricht."
      },
      {
        "de": "die Werbung",
        "ar": "الإعلان",
        "example": "Werbung beeinflusst uns alle."
      },
      {
        "de": "das Internet",
        "ar": "الإنترنت",
        "example": "Das Internet hat alles verändert."
      },
      {
        "de": "die soziale Medien",
        "ar": "وسائل التواصل الاجتماعي",
        "example": "Soziale Medien sind sehr beliebt."
      },
      {
        "de": "die Künstliche Intelligenz",
        "ar": "الذكاء الاصطناعي",
        "example": "Künstliche Intelligenz wird immer wichtiger."
      },
      {
        "de": "die Datenschutz",
        "ar": "حماية البيانات",
        "example": "Datenschutz ist in der EU streng geregelt."
      },
      {
        "de": "die App, -s",
        "ar": "تطبيق",
        "example": "Diese App hilft beim Lernen."
      },
      {
        "de": "der Bildschirm",
        "ar": "الشاشة",
        "example": "Sie verbringt viel Zeit am Bildschirm."
      },
      {
        "de": "die Suchmaschine",
        "ar": "محرّك البحث",
        "example": "Google ist die beliebteste Suchmaschine."
      },
      {
        "de": "der Datenmissbrauch",
        "ar": "إساءة استخدام البيانات",
        "example": "Datenmissbrauch ist eine Gefahr."
      },
      {
        "de": "das Smartphone",
        "ar": "الهاتف الذكي",
        "example": "Mein Smartphone ist alt."
      },
      {
        "de": "die Influencerin",
        "ar": "مؤثّرة",
        "example": "Sie ist eine bekannte Influencerin."
      },
      {
        "de": "die Fake News (Pl.)",
        "ar": "أخبار كاذبة",
        "example": "Fake News sind gefährlich."
      },
      {
        "de": "der Algorithmus",
        "ar": "الخوارزميّة",
        "example": "Der Algorithmus zeigt dir, was du sehen willst."
      },
      {
        "de": "die Berichterstattung",
        "ar": "التغطية الإعلاميّة",
        "example": "Die Berichterstattung war einseitig."
      },
      {
        "de": "der Datenschutzbeauftragte",
        "ar": "مسؤول حماية البيانات",
        "example": "Jedes Unternehmen braucht einen Datenschutzbeauftragten."
      },
      {
        "de": "streamen",
        "ar": "يبثّ مباشرةً",
        "example": "Ich streame jeden Abend."
      },
      {
        "de": "die Privatsphäre",
        "ar": "الخصوصيّة",
        "example": "Privatsphäre ist ein Grundrecht."
      },
      {
        "de": "die Glaubwürdigkeit",
        "ar": "المصداقيّة",
        "example": "Die Glaubwürdigkeit der Medien ist gefährdet."
      }
    ]
  },
  {
    "id": "b2-politik",
    "name": "Politik & Gesellschaft",
    "nameAr": "السياسة والمجتمع — Politik & Gesellschaft",
    "icon": "📝",
    "words": [
      {
        "de": "die Demokratie",
        "ar": "الديمقراطيّة",
        "example": "Demokratie braucht aktive Bürger."
      },
      {
        "de": "die Wahl, -en",
        "ar": "الانتخابات",
        "example": "Die Wahl findet im September statt."
      },
      {
        "de": "die Regierung",
        "ar": "الحكومة",
        "example": "Die neue Regierung wurde gewählt."
      },
      {
        "de": "der Bundestag",
        "ar": "البرلمان الألماني",
        "example": "Der Bundestag tagt in Berlin."
      },
      {
        "de": "das Gesetz, -e",
        "ar": "قانون",
        "example": "Ein neues Gesetz wurde verabschiedet."
      },
      {
        "de": "die Partei, -en",
        "ar": "حزب",
        "example": "Welche Partei wählst du?"
      },
      {
        "de": "der/die Abgeordnete",
        "ar": "نائب برلماني",
        "example": "Die Abgeordnete spricht im Bundestag."
      },
      {
        "de": "die Demonstration, -en",
        "ar": "مظاهرة",
        "example": "Die Demonstration war friedlich."
      },
      {
        "de": "die Integration",
        "ar": "الاندماج",
        "example": "Integration ist ein langer Prozess."
      },
      {
        "de": "die Migration",
        "ar": "الهجرة",
        "example": "Migration verändert Gesellschaften."
      },
      {
        "de": "das Asyl",
        "ar": "اللجوء",
        "example": "Er hat Asyl beantragt."
      },
      {
        "de": "die Gleichberechtigung",
        "ar": "المساواة في الحقوق",
        "example": "Gleichberechtigung ist ein Grundrecht."
      },
      {
        "de": "die Diskriminierung",
        "ar": "التمييز",
        "example": "Diskriminierung ist verboten."
      },
      {
        "de": "die Meinungsfreiheit",
        "ar": "حرّية الرأي",
        "example": "Die Meinungsfreiheit ist im Grundgesetz garantiert."
      },
      {
        "de": "der Wahlkampf",
        "ar": "الحملة الانتخابيّة",
        "example": "Der Wahlkampf hat begonnen."
      },
      {
        "de": "die Steuer, -n",
        "ar": "ضريبة",
        "example": "Steuern müssen bezahlt werden."
      },
      {
        "de": "die Reform, -en",
        "ar": "إصلاح",
        "example": "Eine Reform ist notwendig."
      },
      {
        "de": "der Bürger / die Bürgerin",
        "ar": "مواطن/ة",
        "example": "Jeder Bürger hat Rechte."
      },
      {
        "de": "die Verfassung",
        "ar": "الدستور",
        "example": "Die deutsche Verfassung heißt Grundgesetz."
      },
      {
        "de": "die Gewerkschaft",
        "ar": "النقابة",
        "example": "Die Gewerkschaft kämpft für höhere Löhne."
      }
    ]
  },
  {
    "id": "b2-wirtschaft",
    "name": "Wirtschaft & Geld",
    "nameAr": "الاقتصاد والمال — Wirtschaft & Geld",
    "icon": "📝",
    "words": [
      {
        "de": "die Wirtschaft",
        "ar": "الاقتصاد",
        "example": "Die deutsche Wirtschaft wächst."
      },
      {
        "de": "die Inflation",
        "ar": "التضخّم",
        "example": "Die Inflation steigt."
      },
      {
        "de": "die Investition, -en",
        "ar": "استثمار",
        "example": "Die Investition hat sich gelohnt."
      },
      {
        "de": "der Markt, -¨e",
        "ar": "السوق",
        "example": "Der Markt entwickelt sich schnell."
      },
      {
        "de": "das Unternehmen",
        "ar": "شركة",
        "example": "Sie arbeitet bei einem großen Unternehmen."
      },
      {
        "de": "der Gewinn",
        "ar": "الربح",
        "example": "Der Gewinn ist gestiegen."
      },
      {
        "de": "der Verlust",
        "ar": "الخسارة",
        "example": "Wir haben Verluste gemacht."
      },
      {
        "de": "die Konkurrenz",
        "ar": "المنافسة",
        "example": "Die Konkurrenz ist hart."
      },
      {
        "de": "das Angebot, -e",
        "ar": "العرض",
        "example": "Das Angebot ist günstig."
      },
      {
        "de": "die Nachfrage",
        "ar": "الطلب",
        "example": "Die Nachfrage ist hoch."
      },
      {
        "de": "das Konto, Konten",
        "ar": "حساب بنكي",
        "example": "Ich eröffne ein Konto."
      },
      {
        "de": "überweisen",
        "ar": "يحوّل (مالاً)",
        "example": "Ich überweise dir das Geld."
      },
      {
        "de": "die Schulden (Pl.)",
        "ar": "ديون",
        "example": "Er hat viele Schulden."
      },
      {
        "de": "sparen",
        "ar": "يدّخر",
        "example": "Ich spare für ein Auto."
      },
      {
        "de": "die Aktie, -n",
        "ar": "سهم (في البورصة)",
        "example": "Aktien sind ein Risiko."
      },
      {
        "de": "der Kredit, -e",
        "ar": "قرض",
        "example": "Sie hat einen Kredit aufgenommen."
      },
      {
        "de": "die Steuererklärung",
        "ar": "إقرار ضريبي",
        "example": "Die Steuererklärung muss bis Mai abgegeben werden."
      },
      {
        "de": "das Bruttoinlandsprodukt (BIP)",
        "ar": "الناتج المحلّي الإجمالي",
        "example": "Das BIP ist gewachsen."
      },
      {
        "de": "der Export",
        "ar": "التصدير",
        "example": "Deutschland ist ein Exportland."
      },
      {
        "de": "der Verbraucher",
        "ar": "المستهلك",
        "example": "Verbraucher haben Rechte."
      }
    ]
  },
  {
    "id": "b2-kultur",
    "name": "Kultur & Kunst",
    "nameAr": "الثقافة والفن — Kultur & Kunst",
    "icon": "📝",
    "words": [
      {
        "de": "die Kultur, -en",
        "ar": "الثقافة",
        "example": "Jede Kultur ist einzigartig."
      },
      {
        "de": "die Kunst",
        "ar": "الفنّ",
        "example": "Kunst ist subjektiv."
      },
      {
        "de": "das Theater",
        "ar": "المسرح",
        "example": "Wir gehen heute Abend ins Theater."
      },
      {
        "de": "das Museum, Museen",
        "ar": "المتحف",
        "example": "Das Museum ist montags geschlossen."
      },
      {
        "de": "die Ausstellung, -en",
        "ar": "معرض",
        "example": "Die Ausstellung läuft bis April."
      },
      {
        "de": "der Roman, -e",
        "ar": "رواية",
        "example": "Ich lese gerne Romane."
      },
      {
        "de": "das Gemälde",
        "ar": "لوحة",
        "example": "Das Gemälde ist berühmt."
      },
      {
        "de": "die Musik",
        "ar": "الموسيقى",
        "example": "Musik macht das Leben schöner."
      },
      {
        "de": "das Konzert, -e",
        "ar": "حفلة موسيقيّة",
        "example": "Das Konzert war ausverkauft."
      },
      {
        "de": "die Tradition, -en",
        "ar": "تقليد",
        "example": "Traditionen verbinden Menschen."
      },
      {
        "de": "das Brauchtum",
        "ar": "عادات وتقاليد",
        "example": "Das Brauchtum ist regional unterschiedlich."
      },
      {
        "de": "der Künstler / die Künstlerin",
        "ar": "فنّان/ة",
        "example": "Sie ist eine bekannte Künstlerin."
      },
      {
        "de": "die Literatur",
        "ar": "الأدب",
        "example": "Deutsche Literatur ist vielfältig."
      },
      {
        "de": "das Festival, -s",
        "ar": "مهرجان",
        "example": "Das Festival findet jährlich statt."
      },
      {
        "de": "die Vielfalt",
        "ar": "التنوّع",
        "example": "Kulturelle Vielfalt ist eine Bereicherung."
      },
      {
        "de": "der Film, -e",
        "ar": "فيلم",
        "example": "Der Film war spannend."
      },
      {
        "de": "das Erbe",
        "ar": "الإرث",
        "example": "Das kulturelle Erbe muss bewahrt werden."
      },
      {
        "de": "der Schauspieler",
        "ar": "ممثّل",
        "example": "Der Schauspieler ist sehr talentiert."
      },
      {
        "de": "die Architektur",
        "ar": "العمارة",
        "example": "Die Architektur ist beeindruckend."
      },
      {
        "de": "die Folklore",
        "ar": "الفولكلور",
        "example": "Folklore ist ein Teil der Identität."
      }
    ]
  },
  {
    "id": "b2-reisen",
    "name": "Reisen & Verkehr",
    "nameAr": "السفر والنقل — Reisen & Verkehr",
    "icon": "📝",
    "words": [
      {
        "de": "die Reise, -n",
        "ar": "رحلة",
        "example": "Eine Reise nach Berlin wäre toll."
      },
      {
        "de": "der Tourist / die Touristin",
        "ar": "سائح/ة",
        "example": "Berlin zieht viele Touristen an."
      },
      {
        "de": "das Reiseziel, -e",
        "ar": "وجهة سفر",
        "example": "Italien ist ein beliebtes Reiseziel."
      },
      {
        "de": "die Unterkunft",
        "ar": "مسكن مؤقّت",
        "example": "Wir suchen eine günstige Unterkunft."
      },
      {
        "de": "die Sehenswürdigkeit, -en",
        "ar": "معلم سياحي",
        "example": "Wir besuchen die Sehenswürdigkeiten."
      },
      {
        "de": "der Verkehr",
        "ar": "حركة المرور",
        "example": "Der Verkehr ist heute schlimm."
      },
      {
        "de": "die öffentlichen Verkehrsmittel (Pl.)",
        "ar": "وسائل النقل العامّ",
        "example": "In Berlin nutze ich öffentliche Verkehrsmittel."
      },
      {
        "de": "die Bahn",
        "ar": "القطار/السكة",
        "example": "Die Deutsche Bahn ist bekannt."
      },
      {
        "de": "der Stau",
        "ar": "ازدحام",
        "example": "Auf der Autobahn ist Stau."
      },
      {
        "de": "der Flug, -¨e",
        "ar": "رحلة جوّية",
        "example": "Der Flug dauert 4 Stunden."
      },
      {
        "de": "die Buchung, -en",
        "ar": "حجز",
        "example": "Die Buchung ist bestätigt."
      },
      {
        "de": "der Pass, -¨e",
        "ar": "جواز سفر",
        "example": "Mein Pass ist abgelaufen."
      },
      {
        "de": "das Visum",
        "ar": "تأشيرة",
        "example": "Ich brauche ein Visum."
      },
      {
        "de": "die Versicherung",
        "ar": "تأمين سفر",
        "example": "Reiseversicherung ist empfehlenswert."
      },
      {
        "de": "der Schaffner",
        "ar": "مفتّش/قاطع تذاكر",
        "example": "Der Schaffner kontrolliert die Tickets."
      },
      {
        "de": "die Ankunft",
        "ar": "الوصول",
        "example": "Die Ankunft ist um 18 Uhr."
      },
      {
        "de": "die Abfahrt",
        "ar": "المغادرة",
        "example": "Die Abfahrt ist verspätet."
      },
      {
        "de": "der Aufenthalt",
        "ar": "الإقامة",
        "example": "Wir hatten einen schönen Aufenthalt."
      },
      {
        "de": "die Klimaanlage",
        "ar": "تكييف هواء",
        "example": "Die Klimaanlage funktioniert nicht."
      },
      {
        "de": "das Gepäck",
        "ar": "حقائب السفر",
        "example": "Mein Gepäck ist verloren gegangen."
      }
    ]
  },
  {
    "id": "b2-wissenschaft",
    "name": "Wissenschaft & Forschung",
    "nameAr": "العلوم والبحث — Wissenschaft & Forschung",
    "icon": "📝",
    "words": [
      {
        "de": "die Wissenschaft",
        "ar": "العلوم",
        "example": "Wissenschaft sucht nach Wahrheit."
      },
      {
        "de": "die Forschung",
        "ar": "البحث العلمي",
        "example": "Forschung ist teuer."
      },
      {
        "de": "das Experiment, -e",
        "ar": "تجربة",
        "example": "Das Experiment war erfolgreich."
      },
      {
        "de": "die Entdeckung, -en",
        "ar": "اكتشاف",
        "example": "Eine wichtige Entdeckung wurde gemacht."
      },
      {
        "de": "die Theorie, -n",
        "ar": "نظريّة",
        "example": "Die Theorie wurde bewiesen."
      },
      {
        "de": "die These, -n",
        "ar": "فرضيّة/أطروحة",
        "example": "Seine These ist umstritten."
      },
      {
        "de": "die Hypothese, -n",
        "ar": "فرضيّة",
        "example": "Die Hypothese muss getestet werden."
      },
      {
        "de": "der Wissenschaftler",
        "ar": "العالم",
        "example": "Der Wissenschaftler veröffentlichte einen Artikel."
      },
      {
        "de": "die Studie, -n",
        "ar": "دراسة",
        "example": "Eine neue Studie wurde veröffentlicht."
      },
      {
        "de": "die Methode, -n",
        "ar": "منهج/طريقة",
        "example": "Welche Methode benutzen Sie?"
      },
      {
        "de": "die Erkenntnis",
        "ar": "استنتاج علمي",
        "example": "Diese Erkenntnis ist neu."
      },
      {
        "de": "der Fortschritt",
        "ar": "التقدّم",
        "example": "Der medizinische Fortschritt ist groß."
      },
      {
        "de": "die Innovation, -en",
        "ar": "ابتكار",
        "example": "Innovationen sind wichtig."
      },
      {
        "de": "die Technologie",
        "ar": "التكنولوجيا",
        "example": "Neue Technologien verändern alles."
      },
      {
        "de": "analysieren",
        "ar": "يحلّل",
        "example": "Wir analysieren die Daten."
      },
      {
        "de": "untersuchen",
        "ar": "يفحص/يدرس",
        "example": "Wir untersuchen das Phänomen."
      },
      {
        "de": "beobachten",
        "ar": "يرصد/يلاحظ",
        "example": "Wir beobachten die Sterne."
      },
      {
        "de": "das Ergebnis",
        "ar": "النتيجة",
        "example": "Das Ergebnis war überraschend."
      },
      {
        "de": "die Veröffentlichung",
        "ar": "النشر",
        "example": "Die Veröffentlichung ist wichtig."
      },
      {
        "de": "verifizieren",
        "ar": "يتحقّق من",
        "example": "Die Daten müssen verifiziert werden."
      }
    ]
  },
  {
    "id": "b2-recht",
    "name": "Recht & Justiz",
    "nameAr": "القانون والعدالة — Recht & Justiz",
    "icon": "📝",
    "words": [
      {
        "de": "das Recht",
        "ar": "القانون/الحقّ",
        "example": "Jeder hat ein Recht auf Bildung."
      },
      {
        "de": "das Gesetz, -e",
        "ar": "قانون",
        "example": "Das Gesetz wurde geändert."
      },
      {
        "de": "der Anwalt / die Anwältin",
        "ar": "محامٍ/محامية",
        "example": "Mein Anwalt vertritt mich."
      },
      {
        "de": "der Richter / die Richterin",
        "ar": "قاضٍ/قاضية",
        "example": "Der Richter entscheidet."
      },
      {
        "de": "das Gericht, -e",
        "ar": "محكمة",
        "example": "Wir gehen vor Gericht."
      },
      {
        "de": "die Klage",
        "ar": "دعوى قضائيّة",
        "example": "Sie hat eine Klage eingereicht."
      },
      {
        "de": "das Urteil, -e",
        "ar": "حكم/قرار قضائي",
        "example": "Das Urteil ist gerecht."
      },
      {
        "de": "die Strafe, -n",
        "ar": "عقوبة",
        "example": "Die Strafe ist hoch."
      },
      {
        "de": "die Geldstrafe",
        "ar": "غرامة ماليّة",
        "example": "Er muss eine Geldstrafe zahlen."
      },
      {
        "de": "die Haft",
        "ar": "السجن",
        "example": "Er wurde zu 5 Jahren Haft verurteilt."
      },
      {
        "de": "der Verbrecher",
        "ar": "مجرم",
        "example": "Der Verbrecher wurde gefangen."
      },
      {
        "de": "das Verbrechen",
        "ar": "جريمة",
        "example": "Das Verbrechen wurde aufgeklärt."
      },
      {
        "de": "die Verfassung",
        "ar": "الدستور",
        "example": "Die Verfassung schützt die Bürger."
      },
      {
        "de": "die Polizei",
        "ar": "الشرطة",
        "example": "Die Polizei ist gekommen."
      },
      {
        "de": "der Zeuge / die Zeugin",
        "ar": "شاهد/ة",
        "example": "Der Zeuge sagte aus."
      },
      {
        "de": "die Beweise (Pl.)",
        "ar": "أدلّة",
        "example": "Es gibt klare Beweise."
      },
      {
        "de": "der Vertrag, -¨e",
        "ar": "عقد",
        "example": "Der Vertrag wurde unterschrieben."
      },
      {
        "de": "die Verhandlung",
        "ar": "جلسة محاكمة",
        "example": "Die Verhandlung dauert lange."
      },
      {
        "de": "die Berufung",
        "ar": "استئناف",
        "example": "Sie hat Berufung eingelegt."
      },
      {
        "de": "der/die Beschuldigte",
        "ar": "متّهم/ة",
        "example": "Der Beschuldigte schweigt."
      }
    ]
  },
  {
    "id": "b2-psychologie",
    "name": "Psychologie",
    "nameAr": "علم النفس — Psychologie",
    "icon": "📝",
    "words": [
      {
        "de": "die Psychologie",
        "ar": "علم النفس",
        "example": "Psychologie ist faszinierend."
      },
      {
        "de": "das Gefühl, -e",
        "ar": "شعور",
        "example": "Ich habe ein gutes Gefühl."
      },
      {
        "de": "die Emotion, -en",
        "ar": "عاطفة",
        "example": "Emotionen beeinflussen unser Leben."
      },
      {
        "de": "das Bewusstsein",
        "ar": "الوعي",
        "example": "Er hat sein Bewusstsein verloren."
      },
      {
        "de": "das Unterbewusstsein",
        "ar": "اللاوعي",
        "example": "Vieles passiert im Unterbewusstsein."
      },
      {
        "de": "die Persönlichkeit",
        "ar": "الشخصيّة",
        "example": "Sie hat eine starke Persönlichkeit."
      },
      {
        "de": "der Charakter",
        "ar": "الطبع/الشخصيّة",
        "example": "Sein Charakter ist ehrlich."
      },
      {
        "de": "das Verhalten",
        "ar": "السلوك",
        "example": "Sein Verhalten war seltsam."
      },
      {
        "de": "die Angst, -¨e",
        "ar": "خوف",
        "example": "Sie hat Angst vor Hunden."
      },
      {
        "de": "die Depression",
        "ar": "الاكتئاب",
        "example": "Depression ist eine Krankheit."
      },
      {
        "de": "der Stress",
        "ar": "الضغط النفسي",
        "example": "Stress macht krank."
      },
      {
        "de": "die Therapie",
        "ar": "العلاج النفسي",
        "example": "Eine Therapie kann helfen."
      },
      {
        "de": "die Selbstbewusstsein",
        "ar": "الثقة بالنفس",
        "example": "Selbstbewusstsein ist wichtig."
      },
      {
        "de": "das Selbstwertgefühl",
        "ar": "تقدير الذات",
        "example": "Ein gesundes Selbstwertgefühl ist wichtig."
      },
      {
        "de": "die Motivation",
        "ar": "الحافز",
        "example": "Mir fehlt die Motivation."
      },
      {
        "de": "die Konzentration",
        "ar": "التركيز",
        "example": "Konzentration ist wichtig."
      },
      {
        "de": "die Empathie",
        "ar": "التعاطف",
        "example": "Empathie ist eine wichtige Eigenschaft."
      },
      {
        "de": "die Beziehung, -en",
        "ar": "علاقة",
        "example": "Beziehungen brauchen Pflege."
      },
      {
        "de": "die Wahrnehmung",
        "ar": "الإدراك",
        "example": "Unsere Wahrnehmung ist subjektiv."
      },
      {
        "de": "das Gedächtnis",
        "ar": "الذاكرة",
        "example": "Sein Gedächtnis ist exzellent."
      }
    ]
  },
  {
    "id": "b2-sprache",
    "name": "Sprache & Kommunikation",
    "nameAr": "اللغة والتواصل — Sprache & Kommunikation",
    "icon": "📝",
    "words": [
      {
        "de": "die Sprache, -n",
        "ar": "لغة",
        "example": "Sprache verbindet Menschen."
      },
      {
        "de": "die Muttersprache",
        "ar": "اللغة الأمّ",
        "example": "Meine Muttersprache ist Arabisch."
      },
      {
        "de": "die Fremdsprache",
        "ar": "لغة أجنبيّة",
        "example": "Englisch ist meine zweite Fremdsprache."
      },
      {
        "de": "die Aussprache",
        "ar": "النطق",
        "example": "Meine Aussprache wird besser."
      },
      {
        "de": "die Grammatik",
        "ar": "القواعد",
        "example": "Deutsche Grammatik ist nicht einfach."
      },
      {
        "de": "der Wortschatz",
        "ar": "المفردات",
        "example": "Mein Wortschatz wächst."
      },
      {
        "de": "die Bedeutung",
        "ar": "المعنى",
        "example": "Was ist die Bedeutung dieses Wortes?"
      },
      {
        "de": "der Dialekt, -e",
        "ar": "لهجة",
        "example": "In Bayern spricht man Dialekt."
      },
      {
        "de": "die Kommunikation",
        "ar": "التواصل",
        "example": "Gute Kommunikation ist wichtig."
      },
      {
        "de": "das Missverständnis, -se",
        "ar": "سوء فهم",
        "example": "Das war ein Missverständnis."
      },
      {
        "de": "die Diskussion, -en",
        "ar": "نقاش",
        "example": "Die Diskussion war hitzig."
      },
      {
        "de": "das Argument, -e",
        "ar": "حجّة",
        "example": "Sein Argument ist überzeugend."
      },
      {
        "de": "die Meinung, -en",
        "ar": "رأي",
        "example": "Was ist deine Meinung?"
      },
      {
        "de": "die Bedeutung",
        "ar": "الأهميّة/المعنى",
        "example": "Die Bedeutung ist klar."
      },
      {
        "de": "der Akzent",
        "ar": "لكنة",
        "example": "Sie hat einen leichten Akzent."
      },
      {
        "de": "die Übersetzung, -en",
        "ar": "الترجمة",
        "example": "Die Übersetzung ist genau."
      },
      {
        "de": "der Dolmetscher / die Dolmetscherin",
        "ar": "مترجم/ة فوري/ة",
        "example": "Sie arbeitet als Dolmetscherin."
      },
      {
        "de": "das Fachwort, -¨er",
        "ar": "مصطلح فنّي",
        "example": "Fachwörter sind oft schwer."
      },
      {
        "de": "die Redewendung, -en",
        "ar": "مَثل/تعبير اصطلاحي",
        "example": "Diese Redewendung ist häufig."
      },
      {
        "de": "das Sprichwort, -¨er",
        "ar": "مَثل",
        "example": "Das ist ein altes Sprichwort."
      }
    ]
  },
  {
    "id": "b2-zwischenmenschlich",
    "name": "Zwischenmenschliches",
    "nameAr": "العلاقات الاجتماعيّة — Zwischenmenschliches",
    "icon": "📝",
    "words": [
      {
        "de": "die Beziehung, -en",
        "ar": "علاقة",
        "example": "Beziehungen brauchen Vertrauen."
      },
      {
        "de": "die Freundschaft",
        "ar": "صداقة",
        "example": "Wahre Freundschaft ist selten."
      },
      {
        "de": "das Vertrauen",
        "ar": "الثقة",
        "example": "Vertrauen ist alles."
      },
      {
        "de": "die Liebe",
        "ar": "الحبّ",
        "example": "Liebe macht glücklich."
      },
      {
        "de": "das Verständnis",
        "ar": "الفهم/التفهّم",
        "example": "Sein Verständnis ist groß."
      },
      {
        "de": "der Respekt",
        "ar": "الاحترام",
        "example": "Respekt ist gegenseitig."
      },
      {
        "de": "der Konflikt, -e",
        "ar": "صراع/خلاف",
        "example": "Konflikte gehören zum Leben."
      },
      {
        "de": "die Versöhnung",
        "ar": "المصالحة",
        "example": "Versöhnung ist möglich."
      },
      {
        "de": "die Ehe",
        "ar": "الزواج",
        "example": "Eine glückliche Ehe ist eine Kunst."
      },
      {
        "de": "die Scheidung",
        "ar": "الطلاق",
        "example": "Die Scheidungsrate steigt."
      },
      {
        "de": "die Familie",
        "ar": "العائلة",
        "example": "Familie ist das wichtigste."
      },
      {
        "de": "die Erziehung",
        "ar": "التربية",
        "example": "Gute Erziehung ist wichtig."
      },
      {
        "de": "die Treue",
        "ar": "الإخلاص",
        "example": "Treue ist eine Tugend."
      },
      {
        "de": "die Eifersucht",
        "ar": "الغيرة",
        "example": "Eifersucht zerstört Beziehungen."
      },
      {
        "de": "die Toleranz",
        "ar": "التسامح",
        "example": "Toleranz ist wichtig."
      },
      {
        "de": "die Solidarität",
        "ar": "التضامن",
        "example": "Solidarität verbindet."
      },
      {
        "de": "der Umgang",
        "ar": "التعامل",
        "example": "Der Umgang mit Menschen ist wichtig."
      },
      {
        "de": "das Gespräch",
        "ar": "حوار/محادثة",
        "example": "Wir hatten ein langes Gespräch."
      },
      {
        "de": "die Höflichkeit",
        "ar": "الأدب/اللباقة",
        "example": "Höflichkeit kostet nichts."
      },
      {
        "de": "die Rücksicht",
        "ar": "مراعاة",
        "example": "Rücksicht aufeinander ist wichtig."
      }
    ]
  },
  {
    "id": "b2-zukunft",
    "name": "Zukunft & Wandel",
    "nameAr": "المستقبل والتحوّلات — Zukunft & Wandel",
    "icon": "📝",
    "words": [
      {
        "de": "die Zukunft",
        "ar": "المستقبل",
        "example": "Die Zukunft ist ungewiss."
      },
      {
        "de": "die Veränderung, -en",
        "ar": "تغيير",
        "example": "Veränderungen sind notwendig."
      },
      {
        "de": "die Entwicklung",
        "ar": "التطوّر",
        "example": "Die Entwicklung schreitet voran."
      },
      {
        "de": "der Wandel",
        "ar": "التحوّل",
        "example": "Der gesellschaftliche Wandel ist deutlich."
      },
      {
        "de": "die Globalisierung",
        "ar": "العولمة",
        "example": "Die Globalisierung verändert alles."
      },
      {
        "de": "die Digitalisierung",
        "ar": "الرقمنة",
        "example": "Die Digitalisierung schreitet schnell voran."
      },
      {
        "de": "die Herausforderung, -en",
        "ar": "تحدٍّ",
        "example": "Das ist eine große Herausforderung."
      },
      {
        "de": "die Chance, -n",
        "ar": "فرصة",
        "example": "Eine Chance ergreifen."
      },
      {
        "de": "das Risiko, Risiken",
        "ar": "مخاطرة",
        "example": "Jedes Vorhaben hat ein Risiko."
      },
      {
        "de": "die Vision, -en",
        "ar": "رؤية",
        "example": "Wir brauchen eine klare Vision."
      },
      {
        "de": "die Prognose, -n",
        "ar": "توقّع/تنبّؤ",
        "example": "Die Prognose ist optimistisch."
      },
      {
        "de": "die Trendwende",
        "ar": "تحوّل في التوجّه",
        "example": "Wir sehen eine Trendwende."
      },
      {
        "de": "der Fortschritt",
        "ar": "التقدّم",
        "example": "Fortschritt ist nötig."
      },
      {
        "de": "die Innovation",
        "ar": "الابتكار",
        "example": "Innovationen treiben uns voran."
      },
      {
        "de": "die Krise, -n",
        "ar": "أزمة",
        "example": "Die Krise ist überwindbar."
      },
      {
        "de": "die Lösung, -en",
        "ar": "حلّ",
        "example": "Wir suchen Lösungen."
      },
      {
        "de": "die Transformation",
        "ar": "التحوّل",
        "example": "Die digitale Transformation ist real."
      },
      {
        "de": "die Generation, -en",
        "ar": "جيل",
        "example": "Jede Generation hat ihre Probleme."
      },
      {
        "de": "der Wandel der Werte",
        "ar": "تغيّر القيم",
        "example": "Der Wandel der Werte ist spürbar."
      },
      {
        "de": "die Anpassung",
        "ar": "التكيّف",
        "example": "Anpassung ist überlebenswichtig."
      }
    ]
  }
];
