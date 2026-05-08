import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { writingTemplates } from '../data/writingTemplates';

export default function WritingTemplatesScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categoryIcons: Record<string, string> = {
    work: '💼',
    appointment: '📅',
    housing: '🏠',
    complaint: '📝',
    personal: '💌',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>نماذج الكتابة</Text>
      <Text style={styles.pageDesc}>
        نماذج رسائل جاهزة لامتحان B1 — احفظ العبارات الأساسية وتدرّب عليها.
      </Text>

      {writingTemplates.map((template) => (
        <TouchableOpacity
          key={template.id}
          style={styles.card}
          onPress={() =>
            setExpandedId(expandedId === template.id ? null : template.id)
          }
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>
              {categoryIcons[template.category] || '✍️'}
            </Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{template.titleDE}</Text>
              <Text style={styles.cardTitleAR}>{template.titleAR}</Text>
            </View>
            <Text style={styles.expandIcon}>
              {expandedId === template.id ? '▲' : '▼'}
            </Text>
          </View>

          {expandedId === template.id && (
            <View style={styles.expandedContent}>
              <View style={styles.templateBox}>
                <Text style={styles.templateText}>{template.template}</Text>
              </View>

              <View style={styles.tipsBox}>
                <Text style={styles.tipsTitle}>💡 نصائح:</Text>
                {template.tips.map((tip, i) => (
                  <Text key={i} style={styles.tipItem}>
                    • {tip}
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
  cardTitles: { flex: 1 },
  cardTitleDE: { fontSize: 16, fontWeight: '700', color: Colors.ink },
  cardTitleAR: { fontSize: 13, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right' },
  expandIcon: { fontSize: 12, color: Colors.muted, marginLeft: 8 },
  expandedContent: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  templateBox: { backgroundColor: '#f7f9f7', borderRadius: 8, padding: 14, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: Colors.green },
  templateText: { fontSize: 14, color: Colors.ink, lineHeight: 24, fontFamily: 'monospace' },
  tipsBox: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12 },
  tipsTitle: { fontSize: 14, fontWeight: '600', color: Colors.warning, writingDirection: 'rtl', textAlign: 'right', marginBottom: 6 },
  tipItem: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
});
