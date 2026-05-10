import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { FeatureCard } from '../../components/FeatureCard';
import { GradientHeader } from '../../components/GradientHeader';

export const LegalListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t, isRTL, language } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState('');

  const topics = [
    {
      icon: 'shield-checkmark',
      title: t('feature1Title'),
      desc: t('feature1Desc'),
      color: '#3B82F6',
      screen: 'PoliceScreen',
    },
    {
      icon: 'people',
      title: t('feature2Title'),
      desc: t('feature2Desc'),
      color: '#10B981',
      screen: 'JugendamtScreen',
    },
    {
      icon: 'cash',
      title: t('feature3Title'),
      desc: t('feature3Desc'),
      color: '#F59E0B',
      screen: 'FinesScreen',
    },
    {
      icon: 'briefcase',
      title: t('feature4Title'),
      desc: t('feature4Desc'),
      color: '#8B5CF6',
      screen: 'ProsecutorScreen',
    },
  ];

  const additionalTopics = [
    {
      icon: 'heart',
      title: language === 'ar' ? 'الزواج والطلاق' : 'Ehe und Scheidung',
      desc: language === 'ar' ? 'الإجراءات القانونية للزواج والطلاق في ألمانيا' : 'Rechtliche Verfahren für Ehe und Scheidung',
      color: '#EC4899',
      screen: 'PoliceScreen',
    },
    {
      icon: 'home',
      title: language === 'ar' ? 'حقوق السكن' : 'Wohnrechte',
      desc: language === 'ar' ? 'حقوقك كمستأجر والتعامل مع المؤجرين' : 'Ihre Rechte als Mieter',
      color: '#06B6D4',
      screen: 'PoliceScreen',
    },
    {
      icon: 'school',
      title: language === 'ar' ? 'التعليم والمدارس' : 'Bildung und Schulen',
      desc: language === 'ar' ? 'حقوق أطفالك في النظام التعليمي الألماني' : 'Die Rechte Ihrer Kinder im Bildungssystem',
      color: '#14B8A6',
      screen: 'PoliceScreen',
    },
  ];

  const filteredTopics = [...topics, ...additionalTopics].filter(topic =>
    searchQuery === '' || topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GradientHeader title={t('legalGuide')} subtitle={language === 'ar' ? 'معلومات قانونية شاملة وموثوقة' : 'Umfassende und zuverlässige Rechtsinformationen'} />

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <Ionicons name="search" size={20} color={colors.textLight} />
          <TextInput
            style={[styles.searchInput, { textAlign: isRTL ? 'right' : 'left' }]}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor={colors.textLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Topics */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {language === 'ar' ? 'المواضيع القانونية' : 'Rechtsthemen'}
        </Text>
        {filteredTopics.map((topic, index) => (
          <FeatureCard
            key={index}
            icon={topic.icon}
            title={topic.title}
            description={topic.desc}
            color={topic.color}
            onPress={() => navigation.navigate(topic.screen)}
          />
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Text style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left', paddingHorizontal: spacing.lg }]}>
          {language === 'ar' ? 'روابط سريعة' : 'Schnelllinks'}
        </Text>
        <View style={styles.quickGrid}>
          <View style={styles.quickItem}>
            <View style={[styles.quickIcon, { backgroundColor: '#3B82F620' }]}>
              <Ionicons name="download-outline" size={24} color="#3B82F6" />
            </View>
            <Text style={styles.quickLabel}>{t('downloadTemplate')}</Text>
          </View>
          <View style={styles.quickItem}>
            <View style={[styles.quickIcon, { backgroundColor: '#10B98120' }]}>
              <Ionicons name="help-circle-outline" size={24} color="#10B981" />
            </View>
            <Text style={styles.quickLabel}>{t('commonQuestions')}</Text>
          </View>
          <View style={styles.quickItem}>
            <View style={[styles.quickIcon, { backgroundColor: '#F59E0B20' }]}>
              <Ionicons name="call-outline" size={24} color="#F59E0B" />
            </View>
            <Text style={styles.quickLabel}>{t('contactUs')}</Text>
          </View>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    paddingHorizontal: spacing.lg,
    marginTop: -20,
    marginBottom: spacing.md,
  },
  searchBar: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    gap: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: fontSize.md,
    color: colors.text,
    paddingVertical: spacing.xs,
  },
  section: {
    paddingVertical: spacing.md,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  quickActions: {
    paddingVertical: spacing.md,
  },
  quickGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.lg,
  },
  quickItem: {
    alignItems: 'center',
    width: '30%',
  },
  quickIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  quickLabel: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
