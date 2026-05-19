import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  { id: 1, icon: '🌟', title: 'البداية', description: 'أكمل أول درس', unlocked: true },
  { id: 2, icon: '📖', title: 'قارئ نشيط', description: 'أكمل 10 تمارين قراءة', unlocked: false },
  { id: 3, icon: '🎧', title: 'مستمع ماهر', description: 'أكمل 10 تمارين استماع', unlocked: false },
  { id: 4, icon: '✍️', title: 'كاتب محترف', description: 'اكتب 5 رسائل', unlocked: false },
  { id: 5, icon: '🗣️', title: 'متحدث واثق', description: 'تدرب على 10 مواضيع محادثة', unlocked: false },
  { id: 6, icon: '🇩🇪', title: 'مواطن مستقبلي', description: 'أجب على 100 سؤال Leben', unlocked: false },
  { id: 7, icon: '🔥', title: 'مثابر', description: 'ادرس 7 أيام متتالية', unlocked: false },
  { id: 8, icon: '💯', title: 'متفوق', description: 'احصل على 100% في اختبار', unlocked: false },
  { id: 9, icon: '📚', title: 'عالم بالقواعد', description: 'ادرس جميع قواعد B1', unlocked: false },
  { id: 10, icon: '🏆', title: 'بطل B1', description: 'أكمل جميع الأقسام', unlocked: false },
  { id: 11, icon: '⚡', title: 'سريع البديهة', description: 'أجب على 20 سؤال بدون خطأ', unlocked: false },
  { id: 12, icon: '🎯', title: 'محدد المستوى', description: 'أكمل اختبار تحديد المستوى', unlocked: false },
];

export default function AchievementsScreen() {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const streak = 1;
  const totalQuestions = 0;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>الإنجازات</Text>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>🔥</Text>
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>أيام متتالية</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>🏆</Text>
          <Text style={styles.statValue}>{unlockedCount}/{achievements.length}</Text>
          <Text style={styles.statLabel}>إنجازات</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>📝</Text>
          <Text style={styles.statValue}>{totalQuestions}</Text>
          <Text style={styles.statLabel}>أسئلة مُجابة</Text>
        </View>
      </View>

      {/* Achievements Grid */}
      <Text style={styles.sectionTitle}>الشارات</Text>
      <View style={styles.grid}>
        {achievements.map((achievement) => (
          <View
            key={achievement.id}
            style={[styles.achievementCard, !achievement.unlocked && styles.lockedCard]}
          >
            <Text style={[styles.achievementIcon, !achievement.unlocked && styles.lockedIcon]}>
              {achievement.unlocked ? achievement.icon : '🔒'}
            </Text>
            <Text style={[styles.achievementTitle, !achievement.unlocked && styles.lockedText]}>
              {achievement.title}
            </Text>
            <Text style={styles.achievementDesc}>{achievement.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 16 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: { flex: 1, backgroundColor: Colors.card, borderRadius: 12, padding: 14, alignItems: 'center', marginHorizontal: 4, borderWidth: 1, borderColor: Colors.cardBorder },
  statEmoji: { fontSize: 28, marginBottom: 6 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: Colors.green },
  statLabel: { fontSize: 11, color: Colors.muted, marginTop: 4, writingDirection: 'rtl' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.ink, textAlign: 'right', writingDirection: 'rtl', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  achievementCard: { width: '47%', backgroundColor: Colors.card, borderRadius: 12, padding: 14, margin: '1.5%', alignItems: 'center', borderWidth: 1, borderColor: Colors.cardBorder },
  lockedCard: { backgroundColor: '#f5f5f5', borderColor: '#e0e0e0' },
  achievementIcon: { fontSize: 36, marginBottom: 8 },
  lockedIcon: { opacity: 0.5 },
  achievementTitle: { fontSize: 14, fontWeight: '700', color: Colors.ink, textAlign: 'center', marginBottom: 4 },
  lockedText: { color: Colors.muted },
  achievementDesc: { fontSize: 11, color: Colors.muted, textAlign: 'center', writingDirection: 'rtl', lineHeight: 16 },
});
