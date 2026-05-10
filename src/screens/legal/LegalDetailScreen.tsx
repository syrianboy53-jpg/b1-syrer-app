import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { LegalArticle } from '../../data/legalContent';
import { GradientHeader } from '../../components/GradientHeader';

interface LegalDetailScreenProps {
  article: LegalArticle;
  navigation: any;
}

export const LegalDetailScreen: React.FC<LegalDetailScreenProps> = ({ article, navigation }) => {
  const { language, isRTL, t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const title = language === 'ar' ? article.titleAr : article.titleDe;
  const subtitle = language === 'ar' ? article.subtitleAr : article.subtitleDe;
  const sections = article.sections;
  const faqs = language === 'ar' ? article.faqAr : article.faqDe;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GradientHeader title={title} subtitle={subtitle} />

      {/* Content Sections */}
      {sections.map((section, index) => {
        const sectionTitle = language === 'ar' ? section.titleAr : section.titleDe;
        const sectionContent = language === 'ar' ? section.contentAr : section.contentDe;

        return (
          <View key={index} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionNumber, { backgroundColor: article.color + '20' }]}>
                <Text style={[styles.sectionNumberText, { color: article.color }]}>
                  {index + 1}
                </Text>
              </View>
              <Text
                style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}
              >
                {sectionTitle}
              </Text>
            </View>
            <Text style={[styles.sectionContent, { textAlign: isRTL ? 'right' : 'left' }]}>
              {sectionContent}
            </Text>
          </View>
        );
      })}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <View style={styles.faqSection}>
          <Text style={[styles.faqTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('commonQuestions')}
          </Text>
          {faqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => setExpandedFaq(expandedFaq === index ? null : index)}
              activeOpacity={0.7}
            >
              <View style={[styles.faqQuestion, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <Text
                  style={[styles.faqQuestionText, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}
                >
                  {faq.question}
                </Text>
                <Ionicons
                  name={expandedFaq === index ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={colors.primary}
                />
              </View>
              {expandedFaq === index && (
                <Text style={[styles.faqAnswer, { textAlign: isRTL ? 'right' : 'left' }]}>
                  {faq.answer}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* CTA */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('ConsultationTab')}
        >
          <Ionicons name="chatbubbles" size={20} color={colors.textOnPrimary} />
          <Text style={styles.ctaText}>
            {language === 'ar' ? 'احجز استشارة حول هذا الموضوع' : 'Beratung zu diesem Thema buchen'}
          </Text>
        </TouchableOpacity>
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
  section: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  sectionNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionNumberText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.text,
  },
  sectionContent: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    lineHeight: 26,
  },
  faqSection: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  faqTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  faqItem: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  faqQuestion: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  faqQuestionText: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.text,
    lineHeight: 24,
  },
  faqAnswer: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 22,
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  ctaContainer: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  ctaText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
});
