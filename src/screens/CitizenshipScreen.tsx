import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

const steps = [
  { icon: '📋', title: 'الشروط الأساسية', items: ['إقامة 8 سنوات في ألمانيا (أو 6 بعد دورة اندماج)', 'إقامة دائمة أو تصريح إقامة', 'القدرة على إعالة نفسك وعائلتك', 'لا سجل جنائي'] },
  { icon: '🗣️', title: 'شرط اللغة', items: ['مستوى B1 على الأقل (شهادة Goethe, telc, DTZ)', 'أو إكمال Integrationskurs بنجاح', 'أو شهادة مدرسية ألمانية'] },
  { icon: '🇩🇪', title: 'اختبار الحياة في ألمانيا', items: ['33 سؤال من أصل 310 سؤال عام + 10 أسئلة ولاية', 'تحتاج 17 إجابة صحيحة للنجاح (من 33)', 'الأسئلة تشمل: السياسة، التاريخ، المجتمع', 'رسوم الاختبار: 25 يورو'] },
  { icon: '📄', title: 'المستندات المطلوبة', items: ['جواز السفر', 'شهادة الميلاد (مترجمة ومصدّقة)', 'شهادة B1', 'شهادة Leben in Deutschland', 'عقد العمل أو إثبات الدخل', 'تأمين صحي'] },
  { icon: '💰', title: 'التكاليف', items: ['رسوم التجنس: 255 يورو للبالغين', '51 يورو للأطفال القاصرين', 'رسوم اختبار Leben: 25 يورو', 'تكاليف الترجمة والتصديق: متغيرة'] },
  { icon: '⏱️', title: 'المدة المتوقعة', items: ['تقديم الطلب: عدة أسابيع للتحضير', 'معالجة الطلب: 3-6 أشهر (قد تطول)', 'الحفل: بعد الموافقة مباشرة', 'المجموع: 6-12 شهر تقريباً'] },
];

export default function CitizenshipScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>دليل الجنسية الألمانية</Text>
      <Text style={styles.pageDesc}>
        كل ما تحتاج معرفته عن الحصول على الجنسية الألمانية — خطوة بخطوة.
      </Text>

      {steps.map((step, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.cardIcon}>{step.icon}</Text>
            <Text style={styles.cardTitle}>{step.title}</Text>
          </View>
          {step.items.map((item, i) => (
            <Text key={i} style={styles.listItem}>• {item}</Text>
          ))}
        </View>
      ))}

      <View style={styles.noteCard}>
        <Text style={styles.noteTitle}>📌 ملاحظة مهمة</Text>
        <Text style={styles.noteText}>
          منذ 2024، أصبح الحصول على الجنسية الألمانية ممكناً بعد 5 سنوات فقط (بدلاً من 8) في حالات خاصة. كما أصبح مسموحاً بازدواج الجنسية لجميع الجنسيات.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 20, lineHeight: 22 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: Colors.cardBorder },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: Colors.cardBorder },
  stepNumber: { width: 28, height: 28, borderRadius: 14, backgroundColor: Colors.green, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  stepNumberText: { color: Colors.white, fontWeight: '700', fontSize: 14 },
  cardIcon: { fontSize: 24, marginRight: 8 },
  cardTitle: { flex: 1, fontSize: 16, fontWeight: '700', color: Colors.ink, writingDirection: 'rtl', textAlign: 'right' },
  listItem: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 24, paddingRight: 4 },
  noteCard: { backgroundColor: '#fff8e1', borderRadius: 12, padding: 16, marginTop: 4, borderLeftWidth: 4, borderLeftColor: Colors.warning },
  noteTitle: { fontSize: 15, fontWeight: '700', color: Colors.warning, writingDirection: 'rtl', textAlign: 'right', marginBottom: 8 },
  noteText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
});
