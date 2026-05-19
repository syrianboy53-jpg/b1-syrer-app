import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

export default function FreeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.heroEmoji}>💰</Text>
        <Text style={styles.heroTitle}>مجاني 100% — بدون إعلانات</Text>
        <Text style={styles.heroDesc}>
          هذا التطبيق مجاني بالكامل وبدون أي إعلانات. هدفنا مساعدة السوريين في ألمانيا.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardIcon}>🚫</Text>
        <Text style={styles.cardTitle}>بدون إعلانات مزعجة</Text>
        <Text style={styles.cardDesc}>لا إعلانات، لا نوافذ منبثقة، لا تشتيت — فقط تعلّم.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardIcon}>🔓</Text>
        <Text style={styles.cardTitle}>جميع الميزات مفتوحة</Text>
        <Text style={styles.cardDesc}>لا اشتراكات، لا محتوى مقفل. كل شيء متاح من اليوم الأول.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardIcon}>❤️</Text>
        <Text style={styles.cardTitle}>مشروع مجتمعي</Text>
        <Text style={styles.cardDesc}>صُنع بحب لمساعدة مجتمعنا السوري في ألمانيا على النجاح.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardIcon}>🔒</Text>
        <Text style={styles.cardTitle}>خصوصيتك محفوظة</Text>
        <Text style={styles.cardDesc}>لا نجمع بيانات شخصية. كل شيء يبقى على جهازك.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  heroCard: { backgroundColor: Colors.gold, borderRadius: 16, padding: 30, alignItems: 'center', marginBottom: 20 },
  heroEmoji: { fontSize: 64, marginBottom: 16 },
  heroTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.white, textAlign: 'center', marginBottom: 8 },
  heroDesc: { fontSize: 15, color: Colors.white, textAlign: 'center', writingDirection: 'rtl', lineHeight: 24, opacity: 0.9 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder, alignItems: 'center' },
  cardIcon: { fontSize: 36, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: Colors.ink, marginBottom: 6, writingDirection: 'rtl', textAlign: 'center' },
  cardDesc: { fontSize: 13, color: Colors.muted, textAlign: 'center', writingDirection: 'rtl', lineHeight: 22 },
});
