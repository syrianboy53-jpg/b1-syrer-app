import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { examModels, hoerenModels, lesenModels, schreibenModels } from '../data/examSections';

export default function ExamSectionsScreen() {
  const [tab, setTab] = useState<'models' | 'hoeren' | 'lesen' | 'schreiben'>('models');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>أقسام الامتحان</Text>
      <Text style={styles.pageDesc}>
        امتحان B1 يتكون من 5 أقسام. تعرّف على كل قسم واستعد له جيداً.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll}>
        <View style={styles.tabRow}>
          {([
            { key: 'models' as const, label: '📝 نماذج' },
            { key: 'hoeren' as const, label: '🎧 استماع' },
            { key: 'lesen' as const, label: '📖 قراءة' },
            { key: 'schreiben' as const, label: '✍️ كتابة' },
          ]).map(t => (
            <TouchableOpacity
              key={t.key}
              style={[styles.tab, tab === t.key && styles.activeTab]}
              onPress={() => setTab(t.key)}
            >
              <Text style={[styles.tabText, tab === t.key && styles.activeTabText]}>
                {t.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {tab === 'models' && examModels.map((model) => (
        <View key={model.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{model.themeIcon}</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{model.titleDe}</Text>
              <Text style={styles.cardTitleAR}>{model.titleAr}</Text>
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>{model.durationMin} د</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>{model.descriptionAr}</Text>
          {model.highlights && model.highlights.length > 0 && (
            <View style={styles.tipsContainer}>
              <Text style={styles.tipsTitle}>📋 المحتوى:</Text>
              {model.highlights.map((h: string, i: number) => (
                <Text key={i} style={styles.tipItem}>• {h}</Text>
              ))}
            </View>
          )}
        </View>
      ))}

      {tab === 'hoeren' && hoerenModels.map((model) => (
        <View key={model.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🎧</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{model.title}</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>{model.description}</Text>
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>📋 الأجزاء: {model.parts.length}</Text>
            {model.parts.map((part: any, i: number) => (
              <Text key={i} style={styles.tipItem}>• {part.title}</Text>
            ))}
          </View>
        </View>
      ))}

      {tab === 'lesen' && lesenModels.map((model) => (
        <View key={model.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📖</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{model.title}</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>{model.description}</Text>
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>📋 الأجزاء: {model.parts.length}</Text>
            {model.parts.map((part: any, i: number) => (
              <Text key={i} style={styles.tipItem}>• {part.title}</Text>
            ))}
          </View>
        </View>
      ))}

      {tab === 'schreiben' && schreibenModels.map((model) => (
        <View key={model.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>✍️</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{model.title}</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>{model.description}</Text>
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>📋 المهام: {model.tasks.length}</Text>
            {model.tasks.map((task: any, i: number) => (
              <Text key={i} style={styles.tipItem}>• {task.title || task.titleAr || `مهمة ${i + 1}`}</Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgLight,
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.green,
    textAlign: 'right',
    marginBottom: 8,
    writingDirection: 'rtl',
  },
  pageDesc: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: 'right',
    writingDirection: 'rtl',
    marginBottom: 20,
    lineHeight: 22,
  },
  tabScroll: { marginBottom: 16 },
  tabRow: { flexDirection: 'row', backgroundColor: '#e8ede8', borderRadius: 10, padding: 4 },
  tab: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, marginRight: 4 },
  activeTab: { backgroundColor: Colors.white },
  tabText: { fontSize: 13, fontWeight: '600', color: Colors.muted },
  activeTabText: { color: Colors.green },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 36,
    marginLeft: 12,
  },
  cardTitles: {
    flex: 1,
  },
  cardTitleDE: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.green,
  },
  cardTitleAR: {
    fontSize: 14,
    color: Colors.muted,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  durationBadge: {
    backgroundColor: Colors.green,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  durationText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: '600',
  },
  cardDesc: {
    fontSize: 13,
    color: Colors.inkSoft,
    writingDirection: 'rtl',
    textAlign: 'right',
    lineHeight: 20,
    marginBottom: 12,
  },
  tipsContainer: {
    backgroundColor: '#f0f7f2',
    borderRadius: 8,
    padding: 12,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.green,
    writingDirection: 'rtl',
    textAlign: 'right',
    marginBottom: 6,
  },
  tipItem: {
    fontSize: 13,
    color: Colors.inkSoft,
    writingDirection: 'rtl',
    textAlign: 'right',
    lineHeight: 22,
  },
});
