import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { examSections } from '../data/examSections';

export default function ExamSectionsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>أقسام الامتحان</Text>
      <Text style={styles.pageDesc}>
        امتحان B1 يتكون من 5 أقسام. تعرّف على كل قسم واستعد له جيداً.
      </Text>

      {examSections.map((section) => (
        <View key={section.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{section.icon}</Text>
            <View style={styles.cardTitles}>
              <Text style={styles.cardTitleDE}>{section.titleDE}</Text>
              <Text style={styles.cardTitleAR}>{section.titleAR}</Text>
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>{section.duration}</Text>
            </View>
          </View>

          <Text style={styles.cardDesc}>{section.description}</Text>

          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>💡 نصائح:</Text>
            {section.tips.map((tip, index) => (
              <Text key={index} style={styles.tipItem}>
                • {tip}
              </Text>
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
