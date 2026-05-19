import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { writingTopics, briefTemplates } from '../data/writingTemplates';

export default function WritingTemplatesScreen() {
  const [tab, setTab] = useState<'topics' | 'briefe'>('topics');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>نماذج الكتابة</Text>
      <Text style={styles.pageDesc}>
        {writingTopics.length} موضوع مقالة و {briefTemplates.length} نموذج رسالة — تدرّب عليها لامتحان B1.
      </Text>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, tab === 'topics' && styles.activeTab]}
          onPress={() => setTab('topics')}
        >
          <Text style={[styles.tabText, tab === 'topics' && styles.activeTabText]}>
            📝 مواضيع مقالات ({writingTopics.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'briefe' && styles.activeTab]}
          onPress={() => setTab('briefe')}
        >
          <Text style={[styles.tabText, tab === 'briefe' && styles.activeTabText]}>
            ✉️ رسائل ({briefTemplates.length})
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'topics' && writingTopics.map((topic) => (
        <TouchableOpacity
          key={topic.id}
          style={styles.card}
          onPress={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📝</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{topic.titleDe}</Text>
              <Text style={styles.cardTitleAR}>{topic.titleAr}</Text>
            </View>
            <Text style={styles.expandIcon}>
              {expandedId === topic.id ? '▲' : '▼'}
            </Text>
          </View>

          {expandedId === topic.id && (
            <View style={styles.expandedContent}>
              <View style={styles.templateBox}>
                <Text style={styles.templateLabel}>📌 السؤال:</Text>
                <Text style={styles.templateText}>{topic.promptDe}</Text>
                <Text style={styles.templateTextAr}>{topic.promptAr}</Text>
              </View>

              {topic.modelEssay && (
                <View style={styles.essayBox}>
                  <Text style={styles.templateLabel}>✍️ نموذج المقالة:</Text>
                  <Text style={styles.templateText}>{topic.modelEssay}</Text>
                </View>
              )}

              {topic.tips && topic.tips.length > 0 && (
                <View style={styles.tipsBox}>
                  <Text style={styles.tipsTitle}>💡 نصائح:</Text>
                  {topic.tips.map((tip: string, i: number) => (
                    <Text key={i} style={styles.tipItem}>• {tip}</Text>
                  ))}
                </View>
              )}
            </View>
          )}
        </TouchableOpacity>
      ))}

      {tab === 'briefe' && briefTemplates.map((brief) => (
        <TouchableOpacity
          key={brief.id}
          style={styles.card}
          onPress={() => setExpandedId(expandedId === brief.id ? null : brief.id)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>✉️</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{brief.titleDe}</Text>
              <Text style={styles.cardTitleAR}>{brief.titleAr}</Text>
            </View>
            <View style={styles.typBadge}>
              <Text style={styles.typText}>{brief.typ}</Text>
            </View>
          </View>

          {expandedId === brief.id && (
            <View style={styles.expandedContent}>
              <View style={styles.templateBox}>
                <Text style={styles.templateLabel}>📌 الموقف:</Text>
                <Text style={styles.templateTextAr}>{brief.scenario}</Text>
              </View>

              {brief.punkte && brief.punkte.length > 0 && (
                <View style={styles.punkteBox}>
                  <Text style={styles.templateLabel}>✅ النقاط المطلوبة:</Text>
                  {brief.punkte.map((p: string, i: number) => (
                    <Text key={i} style={styles.tipItem}>• {p}</Text>
                  ))}
                </View>
              )}

              {brief.body && (
                <View style={styles.essayBox}>
                  <Text style={styles.templateLabel}>✍️ نموذج الرسالة:</Text>
                  <Text style={styles.templateText}>{brief.body}</Text>
                </View>
              )}

              {brief.hinweise && brief.hinweise.length > 0 && (
                <View style={styles.tipsBox}>
                  <Text style={styles.tipsTitle}>💡 ملاحظات:</Text>
                  {brief.hinweise.map((h: string, i: number) => (
                    <Text key={i} style={styles.tipItem}>• {h}</Text>
                  ))}
                </View>
              )}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 16, lineHeight: 22 },
  tabRow: { flexDirection: 'row', marginBottom: 16, backgroundColor: '#e8ede8', borderRadius: 10, padding: 4 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  activeTab: { backgroundColor: Colors.white },
  tabText: { fontSize: 13, fontWeight: '600', color: Colors.muted },
  activeTabText: { color: Colors.green },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: { fontSize: 28, marginRight: 12 },
  cardTitles: { flex: 1 },
  cardTitleDE: { fontSize: 16, fontWeight: '700', color: Colors.ink },
  cardTitleAR: { fontSize: 13, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right' },
  expandIcon: { fontSize: 12, color: Colors.muted, marginLeft: 8 },
  typBadge: { backgroundColor: Colors.green, borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 },
  typText: { color: Colors.white, fontSize: 11, fontWeight: '600' },
  expandedContent: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  templateBox: { backgroundColor: '#f7f9f7', borderRadius: 8, padding: 14, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: Colors.green },
  templateLabel: { fontSize: 14, fontWeight: '600', color: Colors.green, marginBottom: 6, writingDirection: 'rtl', textAlign: 'right' },
  templateText: { fontSize: 14, color: Colors.ink, lineHeight: 24 },
  templateTextAr: { fontSize: 13, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22, marginTop: 6 },
  essayBox: { backgroundColor: '#e8f5e9', borderRadius: 8, padding: 14, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: Colors.success },
  punkteBox: { backgroundColor: '#e3f2fd', borderRadius: 8, padding: 12, marginBottom: 12 },
  tipsBox: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12 },
  tipsTitle: { fontSize: 14, fontWeight: '600', color: Colors.warning, writingDirection: 'rtl', textAlign: 'right', marginBottom: 6 },
  tipItem: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
});
