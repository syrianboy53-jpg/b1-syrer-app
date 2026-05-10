// Language state
let currentLang = 'ar';

// German translations for the landing page
const deLanding = {
  navFeatures: 'Unsere Dienste',
  navLegal: 'Rechtsführer',
  navConsult: 'Private Beratung',
  navBlog: 'Blog',
  navContact: 'Kontakt',
  heroBadge: 'Zuverlässige Rechtsberatung',
  heroTitle: 'Ihr Familienberater<br/>in Deutschland',
  heroSubtitle: 'Spezialisierte Rechtsberatung im deutschen Familienrecht.<br/>Wir helfen Ihnen, Ihre Rechte und Pflichten zu verstehen.',
  heroCta1: '<i class="fas fa-comments"></i> Kostenlose Beratung',
  heroCta2: '<i class="fas fa-book-open"></i> Rechtsführer',
  heroTrust: '+5.000 zufriedene Klienten',
  stat1: 'Betreute Klienten',
  stat2: 'Rechtsberatungen',
  stat3: 'Rechtsartikel',
  stat4: 'Spezialisierte Anwälte',
  featuresBadge: 'Unsere Dienste',
  featuresTitle: 'Wie helfen wir Ihnen?',
  featuresSubtitle: 'Umfassende Rechtsdienstleistungen im deutschen Familienrecht',
  f1Title: 'Umgang mit der Polizei',
  f1Desc: 'Umfassender Leitfaden zu Ihren Rechten im Umgang mit der deutschen Polizei',
  f1Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f2Title: 'Jugendamt',
  f2Desc: 'Wie Sie mit dem Jugendamt umgehen und Ihre Rechte und die Ihrer Kinder schützen',
  f2Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f3Title: 'Bußgelder vermeiden',
  f3Desc: 'Praktische Tipps zur Vermeidung von Ordnungswidrigkeiten und Bußgeldern in Deutschland',
  f3Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f4Title: 'Staatsanwaltschaft',
  f4Desc: 'Ihre Rechte und der Umgang mit staatsanwaltschaftlichen Verfahren und Gerichten',
  f4Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f5Title: 'Ehe und Scheidung',
  f5Desc: 'Rechtliche Verfahren für Ehe, Scheidung, Vermögensaufteilung und Unterhalt',
  f5Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f6Title: 'Sorgerecht',
  f6Desc: 'Arten des Sorgerechts, Elternrechte und rechtliche Verfahren bezüglich Kinder',
  f6Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f7Title: 'Post von der Polizei',
  f7Desc: 'Wie Sie korrekt mit Schreiben und Vorladungen der deutschen Polizei umgehen',
  f7Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f8Title: 'Falschbeschuldigungen',
  f8Desc: 'Wie Sie sich rechtlich vor falschen Anschuldigungen und Verleumdungen schützen',
  f8Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f9Title: 'Inobhutnahme vermeiden',
  f9Desc: 'Umfassender Präventionsleitfaden zum Schutz Ihrer Familie vor Inobhutnahme',
  f9Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f10Title: 'Frauenhaus',
  f10Desc: 'Alles über Frauenhäuser und deren Auswirkungen auf Ihren Fall',
  f10Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f11Title: 'Vor der Scheidung',
  f11Desc: 'Schritte und Tipps zur Rettung der Ehe oder rechtlichen Vorbereitung',
  f11Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  f12Title: 'Nach der Scheidung',
  f12Desc: 'Ihre Rechte und Pflichten: Unterhalt, Sorgerecht, Vermögensaufteilung',
  f12Link: 'Mehr erfahren <i class="fas fa-arrow-right"></i>',
  pcBadge: 'Private Beratung',
  pcTitle: 'Vertrauliches Gespräch mit einem Rechtsberater',
  pcSubtitle: 'Sprechen Sie mit einem spezialisierten Berater per Chat oder Sprachnachrichten in einem verschlüsselten, sicheren Gespräch',
  pcF1: 'Direkter Text-Chat',
  pcF2: 'Sprachnachrichten',
  pcF3: 'Verschlüsselt und vertraulich',
  pcF4: '30 Minuten pro Sitzung',
  pcPer: '/ pro Sitzung',
  pcBtn: '<i class="fas fa-comments"></i> Private Beratung starten',
  legalBadge: 'Rechtsführer',
  legalTitle: 'Zuverlässige Rechtsinformationen',
  legalSubtitle: 'Umfassende und vereinfachte Rechtsinhalte zum Verständnis Ihrer Rechte',
  lg1Title: 'Rechtsartikel',
  lg1Desc: 'Über 200 vereinfachte Rechtsartikel zum deutschen Familienrecht',
  lg1Item1: 'Kinderrechte im deutschen Recht',
  lg1Item2: 'Scheidungsverfahren Schritt für Schritt',
  lg1Item3: 'Umgang mit häuslicher Gewalt',
  lg2Title: 'Häufige Fragen',
  lg2Desc: 'Klare und direkte Antworten auf die häufigsten Rechtsfragen',
  lg2Item1: 'Wie bekomme ich das Sorgerecht?',
  lg2Item2: 'Was sind meine Rechte beim Jugendamt?',
  lg2Item3: 'Wie lege ich Einspruch gegen ein Bußgeld ein?',
  lg3Title: 'Rechtsvorlagen',
  lg3Desc: 'Fertige Rechtsvorlagen und Dokumente zum Herunterladen',
  lg3Item1: 'Vorlage für Bußgeld-Einspruch',
  lg3Item2: 'Vorlage für formelle Beschwerde',
  lg3Item3: 'Vorlage für Sorgerechtsantrag',
  appBadge: 'Die App',
  appTitle: 'Laden Sie die App jetzt herunter',
  appSubtitle: 'Alle Rechtsdienstleistungen in Ihrer Tasche. Verfügbar für Android und iOS.',
  appF1: 'Offline-Zugang zu Rechtsinhalten',
  appF2: 'Push-Benachrichtigungen für Updates und Termine',
  appF3: 'Benutzerfreundliche Oberfläche auf Arabisch und Deutsch',
  appF4: 'Beratung direkt über die App buchen',
  blogBadge: 'Blog',
  blogTitle: 'Neueste Rechtsartikel',
  blogSubtitle: 'Spezialisierte Rechtsartikel und Analysen',
  b1Cat: 'Familienrecht',
  b1Title: 'Kinderrechte im deutschen Recht',
  b1Desc: 'Ein umfassender Überblick über Kinderrechte in Deutschland und deren Schutz.',
  b1Link: 'Weiterlesen <i class="fas fa-arrow-right"></i>',
  b2Cat: 'Scheidung',
  b2Title: 'Scheidung in Deutschland: Verfahren und Rechte',
  b2Desc: 'Umfassender Leitfaden zu Scheidungsverfahren und Rechten in Deutschland.',
  b2Link: 'Weiterlesen <i class="fas fa-arrow-right"></i>',
  b3Cat: 'Bußgelder',
  b3Title: 'So schützen Sie sich vor Bußgeldern',
  b3Desc: 'Praktische Tipps zur Vermeidung der häufigsten Bußgelder in Deutschland.',
  b3Link: 'Weiterlesen <i class="fas fa-arrow-right"></i>',
  testBadge: 'Kundenmeinungen',
  testTitle: 'Was sagen unsere Kunden?',
  t1Text: '"Die App hat mir geholfen, meine Rechte gegenüber dem Jugendamt zu verstehen und mein Problem rechtlich korrekt zu lösen."',
  t1Name: 'Ahmed M.',
  t1Role: 'Vater von zwei Kindern - Berlin',
  t2Text: '"Ausgezeichnete Rechtsberatung, die mir geholfen hat, ein hohes Bußgeld zu vermeiden. Danke an das Beraterteam."',
  t2Name: 'Sara K.',
  t2Role: 'Einwohnerin in München',
  t3Text: '"Die App ist benutzerfreundlich und enthält sehr wertvolle Informationen für jeden Einwohner in Deutschland."',
  t3Name: 'Mohammed A.',
  t3Role: 'Ingenieur - Hamburg',
  ctaTitle: 'Brauchen Sie rechtliche Hilfe?',
  ctaSubtitle: 'Buchen Sie jetzt Ihre kostenlose Erstberatung und sprechen Sie mit einem spezialisierten Familienrechtsanwalt',
  ctaF1: 'Kostenlose Erstberatung (15 Minuten)',
  ctaF2: 'Spezialisierte Familienrechtsanwälte',
  ctaF3: 'Volle Vertraulichkeit und Datenschutz',
  ctaFormTitle: 'Buchen Sie Ihre Beratung',
  formSubmit: '<i class="fas fa-paper-plane"></i> Anfrage senden',
  successTitle: 'Erfolgreich gesendet!',
  successMsg: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  footerDesc: 'Spezialisierte Rechtsplattform für Familienrecht in Deutschland für arabischsprachige Familien.',
  footerNav: 'Schnelllinks',
  footerLink1: 'Unsere Dienste',
  footerLink2: 'Rechtsführer',
  footerLink3: 'Blog',
  footerLink4: 'Beratung buchen',
  footerLegal: 'Rechtliches',
  footerPrivacy: 'Datenschutzrichtlinie',
  footerTerms: 'Nutzungsbedingungen',
  footerImprint: 'Impressum',
  footerGdpr: 'Datenschutz (DSGVO)',
  footerContact: 'Kontakt',
  footerRights: 'Alle Rechte vorbehalten.',
};

// Arabic translations (defaults)
const arLanding = {
  navFeatures: 'خدماتنا',
  navLegal: 'الدليل القانوني',
  navConsult: 'استشارة خاصة',
  navBlog: 'المدونة',
  navContact: 'تواصل معنا',
  heroBadge: 'استشارات قانونية موثوقة',
  heroTitle: 'مستشارك الأسري<br/>في ألمانيا',
  heroSubtitle: 'استشارات قانونية متخصصة في القانون الأسري الألماني.<br/>نساعدك على فهم حقوقك وواجباتك والتعامل مع الجهات القانونية بثقة.',
  heroCta1: '<i class="fas fa-comments"></i> استشارة مجانية',
  heroCta2: '<i class="fas fa-book-open"></i> الدليل القانوني',
  heroTrust: '+5,000 عميل يثق بنا',
  stat1: 'عميل استفاد',
  stat2: 'استشارة قانونية',
  stat3: 'مقال قانوني',
  stat4: 'محامي متخصص',
  featuresBadge: 'خدماتنا',
  featuresTitle: 'كيف نساعدك؟',
  featuresSubtitle: 'نقدم لك مجموعة شاملة من الخدمات القانونية المتخصصة في القانون الأسري الألماني',
  f1Title: 'التعامل مع الشرطة',
  f1Desc: 'دليل شامل لحقوقك عند التعامل مع الشرطة الألمانية وكيفية التصرف في المواقف المختلفة',
  f1Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f2Title: 'Jugendamt - رعاية الشباب',
  f2Desc: 'كيفية التعامل مع مكتب رعاية الشباب وحماية حقوقك وحقوق أطفالك',
  f2Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f3Title: 'تجنب الغرامات',
  f3Desc: 'إرشادات عملية لتجنب المخالفات والغرامات المالية في ألمانيا',
  f3Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f4Title: 'النيابة العامة',
  f4Desc: 'حقوقك وكيفية التعامل مع إجراءات النيابة العامة والمحاكم',
  f4Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f5Title: 'الزواج والطلاق',
  f5Desc: 'الإجراءات القانونية للزواج والطلاق وتقسيم الممتلكات والنفقة',
  f5Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f6Title: 'حضانة الأطفال',
  f6Desc: 'أنواع الحضانة وحقوق الوالدين والإجراءات القانونية المتعلقة بالأطفال',
  f6Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f7Title: 'بريد الشرطة',
  f7Desc: 'كيف تتعامل مع رسائل واستدعاءات الشرطة الألمانية بطريقة صحيحة',
  f7Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f8Title: 'الادعاءات الكيدية',
  f8Desc: 'كيف تحمي نفسك قانونياً من الاتهامات الباطلة والادعاءات الكيدية',
  f8Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f9Title: 'تجنب سحب الأطفال',
  f9Desc: 'دليل وقائي شامل لحماية عائلتك من إجراءات الـ Inobhutnahme',
  f9Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f10Title: 'Frauenhaus',
  f10Desc: 'كل ما تحتاج معرفته عن دور حماية المرأة وتأثيرها على قضيتك',
  f10Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f11Title: 'قبل الطلاق',
  f11Desc: 'خطوات ونصائح لمحاولة إنقاذ الزواج أو الاستعداد القانوني',
  f11Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  f12Title: 'بعد الطلاق',
  f12Desc: 'حقوقك وواجباتك بعد إتمام الطلاق: نفقة، حضانة، تقسيم ممتلكات',
  f12Link: 'اعرف المزيد <i class="fas fa-arrow-left"></i>',
  pcBadge: 'استشارة خاصة',
  pcTitle: 'محادثة سرية مع مستشار قانوني',
  pcSubtitle: 'تحدث مع مستشار متخصص عبر الدردشة أو الرسائل الصوتية في محادثة مشفرة وآمنة',
  pcF1: 'دردشة نصية مباشرة',
  pcF2: 'رسائل صوتية',
  pcF3: 'محادثة مشفرة وسرية',
  pcF4: '30 دقيقة لكل جلسة',
  pcPer: '/ جلسة واحدة',
  pcBtn: '<i class="fas fa-comments"></i> ابدأ استشارتك الخاصة',
  legalBadge: 'الدليل القانوني',
  legalTitle: 'معلومات قانونية موثوقة',
  legalSubtitle: 'محتوى قانوني شامل ومبسط لمساعدتك على فهم حقوقك',
  lg1Title: 'مقالات قانونية',
  lg1Desc: 'أكثر من 200 مقال قانوني مبسط يغطي جميع جوانب القانون الأسري الألماني',
  lg1Item1: 'حقوق الأطفال في القانون الألماني',
  lg1Item2: 'إجراءات الطلاق خطوة بخطوة',
  lg1Item3: 'التعامل مع العنف الأسري',
  lg2Title: 'أسئلة متكررة',
  lg2Desc: 'إجابات واضحة ومباشرة على أكثر الأسئلة القانونية شيوعاً',
  lg2Item1: 'كيف أحصل على حضانة أطفالي؟',
  lg2Item2: 'ما هي حقوقي أمام الـ Jugendamt؟',
  lg2Item3: 'كيف أعترض على غرامة مالية؟',
  lg3Title: 'نماذج قانونية',
  lg3Desc: 'نماذج ومستندات قانونية جاهزة للتحميل والاستخدام',
  lg3Item1: 'نموذج اعتراض على غرامة',
  lg3Item2: 'نموذج شكوى رسمية',
  lg3Item3: 'نموذج طلب حضانة',
  appBadge: 'التطبيق',
  appTitle: 'حمّل التطبيق الآن',
  appSubtitle: 'احصل على جميع الخدمات القانونية في جيبك. التطبيق متاح لأجهزة Android و iOS.',
  appF1: 'وصول دون اتصال للمحتوى القانوني',
  appF2: 'إشعارات فورية للتحديثات والمواعيد',
  appF3: 'واجهة سهلة بالعربية والألمانية',
  appF4: 'حجز استشارات مباشرة من التطبيق',
  blogBadge: 'المدونة',
  blogTitle: 'أحدث المقالات القانونية',
  blogSubtitle: 'مقالات وتحليلات قانونية متخصصة لمساعدتك',
  b1Cat: 'قانون الأسرة',
  b1Title: 'حقوق الأطفال في القانون الألماني',
  b1Desc: 'نظرة شاملة على حقوق الأطفال في ألمانيا وكيف يحميها القانون الألماني.',
  b1Link: 'اقرأ المزيد <i class="fas fa-arrow-left"></i>',
  b2Cat: 'الطلاق',
  b2Title: 'الطلاق في ألمانيا: الإجراءات والحقوق',
  b2Desc: 'دليل شامل لإجراءات الطلاق في ألمانيا والحقوق القانونية لكلا الطرفين.',
  b2Link: 'اقرأ المزيد <i class="fas fa-arrow-left"></i>',
  b3Cat: 'الغرامات',
  b3Title: 'كيف تحمي نفسك من الغرامات',
  b3Desc: 'نصائح عملية لتجنب الغرامات المالية الأكثر شيوعاً في ألمانيا.',
  b3Link: 'اقرأ المزيد <i class="fas fa-arrow-left"></i>',
  testBadge: 'آراء العملاء',
  testTitle: 'ماذا يقول عملاؤنا؟',
  t1Text: '"ساعدني التطبيق في فهم حقوقي مع الـ Jugendamt وحل مشكلتي بطريقة قانونية صحيحة. أنصح الجميع بتحميله."',
  t1Name: 'أحمد م.',
  t1Role: 'أب لطفلين - برلين',
  t2Text: '"استشارة قانونية ممتازة ساعدتني في تجنب غرامة كبيرة. شكراً لفريق المستشارين على الدعم المتواصل."',
  t2Name: 'سارة ك.',
  t2Role: 'مقيمة في ميونخ',
  t3Text: '"التطبيق سهل الاستخدام ويحتوي على معلومات قيمة جداً لكل مقيم في ألمانيا. محتوى موثوق ومفيد."',
  t3Name: 'محمد ع.',
  t3Role: 'مهندس - هامبورغ',
  ctaTitle: 'هل تحتاج مساعدة قانونية؟',
  ctaSubtitle: 'احجز استشارتك المجانية الأولى الآن وتحدث مع محامٍ متخصص في القانون الأسري الألماني',
  ctaF1: 'استشارة أولية مجانية لمدة 15 دقيقة',
  ctaF2: 'محامون متخصصون في القانون الأسري',
  ctaF3: 'سرية تامة وحماية بياناتك',
  ctaFormTitle: 'احجز استشارتك الآن',
  formSubmit: '<i class="fas fa-paper-plane"></i> إرسال الطلب',
  successTitle: 'تم الإرسال بنجاح!',
  successMsg: 'سنتواصل معك خلال 24 ساعة. شكراً لثقتك.',
  footerDesc: 'منصة قانونية متخصصة لتقديم استشارات في القانون الأسري الألماني للعائلات العربية في ألمانيا.',
  footerNav: 'روابط سريعة',
  footerLink1: 'خدماتنا',
  footerLink2: 'الدليل القانوني',
  footerLink3: 'المدونة',
  footerLink4: 'حجز استشارة',
  footerLegal: 'قانوني',
  footerPrivacy: 'سياسة الخصوصية',
  footerTerms: 'شروط الاستخدام',
  footerImprint: 'البصمة القانونية (Impressum)',
  footerGdpr: 'حماية البيانات (DSGVO)',
  footerContact: 'تواصل معنا',
  footerRights: 'جميع الحقوق محفوظة.',
};

// Form placeholders
const formPlaceholders = {
  ar: {
    firstName: 'الاسم الأول *',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني *',
    phone: 'رقم الهاتف (+49...)',
    topicDefault: 'اختر الموضوع *',
    opt1: 'قانون الأسرة',
    opt2: 'حماية الطفل',
    opt3: 'الطلاق والانفصال',
    opt4: 'حضانة الأطفال',
    opt5: 'العنف الأسري',
    opt6: 'موضوع آخر',
    desc: 'وصف موجز لمشكلتك...',
  },
  de: {
    firstName: 'Vorname *',
    lastName: 'Nachname',
    email: 'E-Mail *',
    phone: 'Telefonnummer (+49...)',
    topicDefault: 'Thema wählen *',
    opt1: 'Familienrecht',
    opt2: 'Kinderschutz',
    opt3: 'Scheidung und Trennung',
    opt4: 'Sorgerecht',
    opt5: 'Häusliche Gewalt',
    opt6: 'Anderes Thema',
    desc: 'Beschreiben Sie Ihr Problem kurz...',
  },
};

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'de' : 'ar';
  const translations = currentLang === 'de' ? deLanding : arLanding;
  const html = document.documentElement;

  // Switch direction and lang
  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  html.lang = currentLang;
  document.body.classList.toggle('de', currentLang === 'de');

  // Update button text
  document.getElementById('langBtn').textContent = currentLang === 'ar' ? 'DE' : 'عربي';

  // Update all text content
  Object.keys(translations).forEach((key) => {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = translations[key];
    }
  });

  // Update form placeholders
  const fp = formPlaceholders[currentLang];
  const formFirstName = document.getElementById('formFirstName');
  const formLastName = document.getElementById('formLastName');
  const formEmail = document.getElementById('formEmail');
  const formPhone = document.getElementById('formPhone');
  const formDesc = document.getElementById('formDesc');
  const formTopicDefault = document.getElementById('formTopicDefault');
  const formOpts = ['formOpt1', 'formOpt2', 'formOpt3', 'formOpt4', 'formOpt5', 'formOpt6'];
  const optKeys = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'];

  if (formFirstName) formFirstName.placeholder = fp.firstName;
  if (formLastName) formLastName.placeholder = fp.lastName;
  if (formEmail) formEmail.placeholder = fp.email;
  if (formPhone) formPhone.placeholder = fp.phone;
  if (formDesc) formDesc.placeholder = fp.desc;
  if (formTopicDefault) formTopicDefault.textContent = fp.topicDefault;
  formOpts.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = fp[optKeys[i]];
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('consultationForm');
  const success = document.getElementById('formSuccess');
  form.style.display = 'none';
  success.style.display = 'block';
}
