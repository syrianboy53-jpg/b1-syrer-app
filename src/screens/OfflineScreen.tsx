import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

export default function OfflineScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.heroEmoji}>📱</Text>
        <Text style={styles.heroTitle}>يعمل بدون إنترنت</Text>
        <Text style={styles.heroDesc}>
          جميع المحتويات محفوظة داخل التطبيق — لا تحتاج اتصال بالإنترنت!
        </Text>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>460+ سؤال Leben in Deutschland</Text>
          <Text style={styles.featureDesc}>جميع الأسئلة محفوظة محلياً</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>قواعد B1 كاملة</Text>
          <Text style={styles.featureDesc}>21 قاعدة مع شرح وأمثلة</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>350+ مفردة</Text>
          <Text style={styles.featureDesc}>مقسّمة حسب الموضوع</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>نماذج الكتابة</Text>
          <Text style={styles.featureDesc}>14 نموذج رسالة جاهز</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>اختبار تحديد المستوى</Text>
          <Text style={styles.featureDesc}>40 سؤال A1-B1</Text>
        </View>
      </View>

      <View style={styles.featureCard}>
        <Text style={styles.featureIcon}>✅</Text>
        <View style={styles.featureInfo}>
          <Text style={styles.featureTitle}>تتبع التقدم</Text>
          <Text style={styles.featureDesc}>نتائجك محفوظة على جهازك</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  heroCard: { backgroundColor: Colors.green, borderRadius: 16, padding: 30, alignItems: 'center', marginBottom: 20 },
  heroEmoji: { fontSize: 64, marginBottom: 16 },
  heroTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.white, marginBottom: 8 },
  heroDesc: { fontSize: 15, color: Colors.goldLight, textAlign: 'center', writingDirection: 'rtl', lineHeight: 24 },
  featureCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.card, borderRadius: 12, padding: 16, marginBottom: 8, borderWidth: 1, borderColor: Colors.cardBorder },
  featureIcon: { fontSize: 24, marginRight: 14 },
  featureInfo: { flex: 1 },
  featureTitle: { fontSize: 15, fontWeight: '600', color: Colors.ink, writingDirection: 'rtl', textAlign: 'right' },
  featureDesc: { fontSize: 12, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right', marginTop: 2 },
});
