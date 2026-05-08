import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { grammarRules, vocabCategories, VocabCategory } from '../data/grammar';

export default function GrammarScreen() {
  const [tab, setTab] = useState<'grammar' | 'vocab'>('grammar');
  const [expandedRule, setExpandedRule] = useState<number | null>(null);
  const [expandedVocab, setExpandedVocab] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>القواعد والمفردات</Text>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, tab === 'grammar' && styles.activeTab]}
          onPress={() => setTab('grammar')}
        >
          <Text style={[styles.tabText, tab === 'grammar' && styles.activeTabText]}>
            📚 القواعد
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'vocab' && styles.activeTab]}
          onPress={() => setTab('vocab')}
        >
          <Text style={[styles.tabText, tab === 'vocab' && styles.activeTabText]}>
            🔤 المفردات
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'grammar' && (
        <>
          <Text style={styles.sectionDesc}>
            {grammarRules.length} قاعدة أساسية لمستوى B1 مع شرح بالعربية
          </Text>
          {grammarRules.map((rule) => (
            <TouchableOpacity
              key={rule.id}
              style={styles.card}
              onPress={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <View style={styles.ruleNumber}>
                  <Text style={styles.ruleNumberText}>{rule.id}</Text>
                </View>
                <View style={styles.ruleTitles}>
                  <Text style={styles.ruleTitleDE}>{rule.titleDE}</Text>
                  <Text style={styles.ruleTitleAR}>{rule.titleAR}</Text>
                </View>
                <Text style={styles.expandIcon}>
                  {expandedRule === rule.id ? '▲' : '▼'}
                </Text>
              </View>

              {expandedRule === rule.id && (
                <View style={styles.expandedContent}>
                  <Text style={styles.explanation}>{rule.explanation}</Text>
                  <Text style={styles.examplesTitle}>أمثلة:</Text>
                  {rule.examples.map((ex, i) => (
                    <View key={i} style={styles.exampleItem}>
                      <Text style={styles.exampleDE}>{ex.de}</Text>
                      <Text style={styles.exampleAR}>{ex.ar}</Text>
                    </View>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </>
      )}

      {tab === 'vocab' && (
        <>
          <Text style={styles.sectionDesc}>
            350+ مفردة مهمة مقسّمة حسب الموضوع
          </Text>
          {vocabCategories.map((cat: VocabCategory) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.card}
              onPress={() => setExpandedVocab(expandedVocab === cat.id ? null : cat.id)}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.vocabIcon}>{cat.icon}</Text>
                <View style={styles.ruleTitles}>
                  <Text style={styles.ruleTitleDE}>{cat.name}</Text>
                </View>
                <View style={styles.wordCountBadge}>
                  <Text style={styles.wordCountText}>{cat.words.length}</Text>
                </View>
              </View>

              {expandedVocab === cat.id && (
                <View style={styles.expandedContent}>
                  {cat.words.map((word: { de: string; ar: string; example: string }, i: number) => (
                    <View key={i} style={styles.wordRow}>
                      <Text style={styles.wordDE}>{word.de}</Text>
                      <Text style={styles.wordAR}>{word.ar}</Text>
                    </View>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 16 },
  tabRow: { flexDirection: 'row', marginBottom: 16, backgroundColor: '#e8ede8', borderRadius: 10, padding: 4 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  activeTab: { backgroundColor: Colors.white },
  tabText: { fontSize: 15, fontWeight: '600', color: Colors.muted },
  activeTabText: { color: Colors.green },
  sectionDesc: { fontSize: 13, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 16 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  ruleNumber: { width: 32, height: 32, borderRadius: 16, backgroundColor: Colors.green, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  ruleNumberText: { color: Colors.white, fontWeight: '700', fontSize: 14 },
  ruleTitles: { flex: 1 },
  ruleTitleDE: { fontSize: 15, fontWeight: '700', color: Colors.ink },
  ruleTitleAR: { fontSize: 13, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right' },
  expandIcon: { fontSize: 12, color: Colors.muted, marginLeft: 8 },
  expandedContent: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  explanation: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22, marginBottom: 12 },
  examplesTitle: { fontSize: 14, fontWeight: '600', color: Colors.green, writingDirection: 'rtl', textAlign: 'right', marginBottom: 8 },
  exampleItem: { backgroundColor: '#f7f9f7', borderRadius: 8, padding: 10, marginBottom: 6 },
  exampleDE: { fontSize: 14, fontWeight: '500', color: Colors.ink, marginBottom: 4 },
  exampleAR: { fontSize: 13, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right' },
  vocabIcon: { fontSize: 28, marginRight: 12 },
  wordCountBadge: { backgroundColor: Colors.green, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 3 },
  wordCountText: { color: Colors.white, fontSize: 12, fontWeight: '600' },
  wordRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  wordDE: { fontSize: 14, fontWeight: '500', color: Colors.ink },
  wordAR: { fontSize: 14, color: Colors.muted, writingDirection: 'rtl' },
});
