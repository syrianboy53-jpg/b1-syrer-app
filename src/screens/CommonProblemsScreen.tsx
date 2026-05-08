import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { commonProblems } from '../data/commonProblems';

export default function CommonProblemsScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>أخطاء شائعة</Text>
      <Text style={styles.pageDesc}>
        أكثر الأخطاء شيوعاً عند متعلمي الألمانية — تعرّف عليها وتجنّبها.
      </Text>

      {commonProblems.map((problem) => (
        <TouchableOpacity
          key={problem.id}
          style={styles.card}
          onPress={() =>
            setExpandedId(expandedId === problem.id ? null : problem.id)
          }
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{problem.icon}</Text>
            <Text style={styles.cardTitle}>{problem.title}</Text>
            <Text style={styles.expandIcon}>
              {expandedId === problem.id ? '▲' : '▼'}
            </Text>
          </View>

          {expandedId === problem.id && (
            <View style={styles.expandedContent}>
              <View style={styles.problemBox}>
                <Text style={styles.boxLabel}>❌ المشكلة:</Text>
                <Text style={styles.boxText}>{problem.problem}</Text>
              </View>

              <View style={styles.solutionBox}>
                <Text style={styles.boxLabel}>✅ الحل:</Text>
                <Text style={styles.boxText}>{problem.solution}</Text>
              </View>

              <View style={styles.examplesBox}>
                <Text style={styles.boxLabel}>📝 أمثلة:</Text>
                {problem.examples.map((ex, i) => (
                  <Text key={i} style={styles.exampleItem}>
                    • {ex}
                  </Text>
                ))}
              </View>
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
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 20, lineHeight: 22 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: { fontSize: 28, marginRight: 12 },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '700', color: Colors.ink, writingDirection: 'rtl', textAlign: 'right' },
  expandIcon: { fontSize: 12, color: Colors.muted, marginLeft: 8 },
  expandedContent: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  problemBox: { backgroundColor: '#fce4ec', borderRadius: 8, padding: 12, marginBottom: 10 },
  solutionBox: { backgroundColor: '#e8f5e9', borderRadius: 8, padding: 12, marginBottom: 10 },
  examplesBox: { backgroundColor: '#f7f9f7', borderRadius: 8, padding: 12 },
  boxLabel: { fontSize: 14, fontWeight: '600', marginBottom: 6, writingDirection: 'rtl', textAlign: 'right' },
  boxText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
  exampleItem: { fontSize: 13, color: Colors.inkSoft, lineHeight: 22, marginBottom: 2 },
});
