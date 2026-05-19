import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { sentencePairs, clozeItems } from '../data/levelTest';

export default function LevelTestScreen() {
  const [tab, setTab] = useState<'synonyms' | 'cloze'>('synonyms');
  const [revealedId, setRevealedId] = useState<string | null>(null);

  const freePairs = useMemo(() => sentencePairs.filter(p => p.free), []);
  const levelGroups = useMemo(() => {
    const groups: Record<string, typeof sentencePairs> = {};
    sentencePairs.forEach(p => {
      if (!groups[p.level]) groups[p.level] = [];
      groups[p.level].push(p);
    });
    return groups;
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>اختبار تحديد المستوى</Text>
      <Text style={styles.pageDesc}>
        {sentencePairs.length} زوج مترادفات و {clozeItems.length} تمرين إكمال — اكتشف مستواك!
      </Text>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, tab === 'synonyms' && styles.activeTab]}
          onPress={() => setTab('synonyms')}
        >
          <Text style={[styles.tabText, tab === 'synonyms' && styles.activeTabText]}>
            🔄 مترادفات ({sentencePairs.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'cloze' && styles.activeTab]}
          onPress={() => setTab('cloze')}
        >
          <Text style={[styles.tabText, tab === 'cloze' && styles.activeTabText]}>
            📝 إكمال ({clozeItems.length})
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'synonyms' && Object.entries(levelGroups).map(([level, pairs]) => (
        <View key={level}>
          <View style={styles.levelHeader}>
            <View style={[styles.levelBadge, {
              backgroundColor: level === 'A1' ? Colors.success : level === 'A2' ? Colors.info : Colors.warning
            }]}>
              <Text style={styles.levelText}>{level}</Text>
            </View>
            <Text style={styles.levelCount}>{pairs.length} زوج</Text>
          </View>
          {pairs.map((pair) => (
            <TouchableOpacity
              key={pair.id}
              style={styles.card}
              onPress={() => setRevealedId(revealedId === pair.id ? null : pair.id)}
              activeOpacity={0.7}
            >
              <View style={styles.pairRow}>
                <Text style={styles.wordA}>{pair.a}</Text>
                <Text style={styles.equalSign}>=</Text>
                <Text style={styles.wordB}>{pair.b}</Text>
              </View>
              {revealedId === pair.id && (
                <View style={styles.expandedContent}>
                  <Text style={styles.hintAr}>{pair.hintAr}</Text>
                  {pair.example ? <Text style={styles.exampleText}>{pair.example}</Text> : null}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {tab === 'cloze' && clozeItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => setRevealedId(revealedId === item.id ? null : item.id)}
          activeOpacity={0.7}
        >
          <View style={styles.clozeHeader}>
            <View style={[styles.levelBadge, {
              backgroundColor: item.level === 'A1' ? Colors.success : item.level === 'A2' ? Colors.info : Colors.warning
            }]}>
              <Text style={styles.levelText}>{item.level}</Text>
            </View>
            <Text style={styles.clozeTokens}>{item.tokens.join(' ')}</Text>
          </View>
          {revealedId === item.id && (
            <View style={styles.expandedContent}>
              <Text style={styles.hintAr}>{item.ar}</Text>
              {item.tipAr ? <Text style={styles.tipText}>{item.tipAr}</Text> : null}
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
  levelHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 12 },
  levelBadge: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4 },
  levelText: { color: Colors.white, fontSize: 13, fontWeight: '700' },
  levelCount: { fontSize: 13, color: Colors.muted, marginLeft: 8 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: Colors.cardBorder },
  pairRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  wordA: { fontSize: 16, fontWeight: '700', color: Colors.green },
  equalSign: { fontSize: 16, color: Colors.muted, marginHorizontal: 12 },
  wordB: { fontSize: 16, fontWeight: '700', color: Colors.info },
  expandedContent: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  hintAr: { fontSize: 14, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', marginBottom: 6 },
  exampleText: { fontSize: 13, color: Colors.muted, fontStyle: 'italic', lineHeight: 20 },
  tipText: { fontSize: 13, color: Colors.warning, writingDirection: 'rtl', textAlign: 'right', lineHeight: 20 },
  clozeHeader: { flexDirection: 'row', alignItems: 'center' },
  clozeTokens: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.ink, marginLeft: 10, lineHeight: 22 },
});
