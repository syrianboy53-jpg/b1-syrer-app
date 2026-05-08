import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  I18nManager,
} from 'react-native';
import { Colors } from '../theme/colors';
import { features } from '../data/features';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function HomeScreen({ navigation }: any) {
  const handleFeaturePress = (featureId: string) => {
    const routeMap: Record<string, string> = {
      exam: 'ExamSections',
      leben: 'LebenQuiz',
      citizenship: 'Citizenship',
      grammar: 'Grammar',
      vocabulary: 'Vocabulary',
      writing: 'WritingTemplates',
      leveltest: 'LevelTest',
      problems: 'CommonProblems',
      stories: 'SuccessStories',
      planner: 'StudyPlanner',
      achievements: 'Achievements',
      offline: 'Offline',
      free: 'Free',
    };
    const route = routeMap[featureId];
    if (route) {
      navigation.navigate(route);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.greenDeep} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerEmoji}>🇩🇪</Text>
          <Text style={styles.headerTitle}>B1 Syrer</Text>
          <Text style={styles.headerSubtitle}>
            تطبيقك المجاني لتحضير امتحان B1 الألماني
          </Text>
          <Text style={styles.headerDesc}>
            كل ما تحتاجه للنجاح في امتحان B1 — مجاناً وبدون إعلانات
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>460+</Text>
            <Text style={styles.statLabel}>سؤال</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>نماذج امتحان</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>350+</Text>
            <Text style={styles.statLabel}>مفردة</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>مجاني</Text>
          </View>
        </View>

        {/* Feature Grid */}
        <View style={styles.grid}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.id}
              style={styles.featureCard}
              onPress={() => handleFeaturePress(feature.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDesc}>{feature.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            صُنع بـ ❤️ للسوريين في ألمانيا
          </Text>
          <Text style={styles.footerVersion}>الإصدار 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgLight,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: Colors.greenDeep,
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.gold,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  headerDesc: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: Colors.green,
    marginHorizontal: 16,
    marginTop: -15,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.gold,
  },
  statLabel: {
    fontSize: 11,
    color: Colors.white,
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  featureCard: {
    width: '47%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    margin: '1.5%',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.ink,
    marginBottom: 4,
    writingDirection: 'rtl',
    textAlign: 'right',
  },
  featureDesc: {
    fontSize: 12,
    color: Colors.muted,
    writingDirection: 'rtl',
    textAlign: 'right',
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: Colors.muted,
  },
  footerVersion: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
