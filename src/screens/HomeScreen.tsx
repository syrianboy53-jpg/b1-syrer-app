import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../utils/theme';
import { useLanguage } from '../i18n/LanguageContext';
import { FeatureCard } from '../components/FeatureCard';
import { StatCard } from '../components/StatCard';
import { TestimonialCard } from '../components/TestimonialCard';

export const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t, isRTL, language, setLanguage } = useLanguage();

  const features = [
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

  const newFeatures = [
    {
      icon: 'mail',
      title: t('feature5Title'),
      desc: t('feature5Desc'),
      color: '#2563EB',
      screen: 'PoliceMailScreen',
    },
    {
      icon: 'alert-circle',
      title: t('feature6Title'),
      desc: t('feature6Desc'),
      color: '#DC2626',
      screen: 'FalseAccusationsScreen',
      premium: true,
    },
    {
      icon: 'hand-left',
      title: t('feature7Title'),
      desc: t('feature7Desc'),
      color: '#059669',
      screen: 'ChildRemovalScreen',
      premium: true,
    },
    {
      icon: 'home',
      title: t('feature8Title'),
      desc: t('feature8Desc'),
      color: '#DB2777',
      screen: 'FrauenhausScreen',
    },
    {
      icon: 'heart-half',
      title: t('feature9Title'),
      desc: t('feature9Desc'),
      color: '#7C3AED',
      screen: 'BeforeDivorceScreen',
      premium: true,
    },
    {
      icon: 'document-text',
      title: t('feature10Title'),
      desc: t('feature10Desc'),
      color: '#0891B2',
      screen: 'AfterDivorceScreen',
      premium: true,
    },
  ];

  const stats = [
    { icon: 'people', value: '5,000+', label: t('statsClients'), color: colors.primary },
    { icon: 'chatbubbles', value: '12,000+', label: t('statsConsultations'), color: '#3B82F6' },
    { icon: 'document-text', value: '200+', label: t('statsArticles'), color: '#10B981' },
    { icon: 'person', value: '25+', label: t('statsLawyers'), color: '#8B5CF6' },
  ];

  const testimonials = [
    { text: t('testimonial1'), author: t('testimonial1Author') },
    { text: t('testimonial2'), author: t('testimonial2Author') },
    { text: t('testimonial3'), author: t('testimonial3Author') },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroTopRow}>
          <TouchableOpacity
            style={styles.langButton}
            onPress={() => setLanguage(language === 'ar' ? 'de' : 'ar')}
          >
            <Ionicons name="globe-outline" size={18} color={colors.textOnPrimary} />
            <Text style={styles.langText}>{language === 'ar' ? 'DE' : 'عربي'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.heroIconContainer}>
          <Ionicons name="scale" size={60} color={colors.secondary} />
        </View>

        <Text style={[styles.heroTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('heroTitle')}
        </Text>
        <Text style={[styles.heroSubtitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('heroSubtitle')}
        </Text>
        <Text style={[styles.heroDescription, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('heroDescription')}
        </Text>

        <View style={styles.heroButtons}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('ConsultationTab')}
          >
            <Text style={styles.primaryButtonText}>{t('freeConsultation')}</Text>
            <Ionicons
              name={isRTL ? 'arrow-back' : 'arrow-forward'}
              size={18}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('LegalTab')}
          >
            <Text style={styles.secondaryButtonText}>{t('legalGuide')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.section}>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('featuresTitle')}
        </Text>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
            color={feature.color}
            onPress={() => navigation.navigate('LegalTab', { screen: feature.screen })}
          />
        ))}
      </View>

      {/* New Legal Topics */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('newTopicsTitle')}
        </Text>
        {newFeatures.map((feature, index) => (
          <FeatureCard
            key={`new-${index}`}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
            color={feature.color}
            premium={feature.premium}
            onPress={() => navigation.navigate('LegalTab', { screen: feature.screen })}
          />
        ))}
      </View>

      {/* Private Consultation CTA */}
      <View style={styles.section}>
        <View style={styles.consultCta}>
          <View style={styles.consultCtaIcon}>
            <Ionicons name="chatbubbles" size={36} color={colors.secondary} />
          </View>
          <Text style={[styles.consultCtaTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('privateConsultation')}
          </Text>
          <Text style={[styles.consultCtaDesc, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('privateConsultationDesc')}
          </Text>
          <View style={styles.consultCtaPricing}>
            <Text style={styles.consultCtaPrice}>5€</Text>
            <Text style={styles.consultCtaDuration}>/ 30 {language === 'ar' ? 'دقيقة' : 'Minuten'}</Text>
          </View>
          <TouchableOpacity
            style={styles.consultCtaButton}
            onPress={() => navigation.navigate('ConsultationTab')}
          >
            <Ionicons name="chatbubble-ellipses" size={20} color={colors.primary} />
            <Text style={styles.consultCtaButtonText}>{t('chatNow')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Testimonials Section */}
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            { textAlign: isRTL ? 'right' : 'left', paddingHorizontal: spacing.lg },
          ]}
        >
          {t('testimonialsTitle')}
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={testimonials}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: spacing.lg }}
          inverted={isRTL}
          renderItem={({ item }) => (
            <TestimonialCard text={item.text} author={item.author} />
          )}
        />
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Ionicons name="call" size={32} color={colors.secondary} />
          <Text style={[styles.ctaTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
            {language === 'ar'
              ? 'هل تحتاج مساعدة قانونية؟'
              : 'Brauchen Sie rechtliche Hilfe?'}
          </Text>
          <Text style={[styles.ctaDescription, { textAlign: isRTL ? 'right' : 'left' }]}>
            {language === 'ar'
              ? 'احجز استشارتك المجانية الأولى الآن وتحدث مع محامٍ متخصص'
              : 'Buchen Sie jetzt Ihre kostenlose Erstberatung'}
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('ConsultationTab')}
          >
            <Text style={styles.ctaButtonText}>{t('bookNow')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 {t('appName')}</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>{t('aboutUs')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>{t('privacyPolicy')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>{t('contactUs')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  hero: {
    backgroundColor: colors.primary,
    paddingTop: 60,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: spacing.lg,
  },
  langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  langText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    marginLeft: 6,
  },
  heroIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing.lg,
  },
  heroTitle: {
    fontSize: fontSize.hero,
    fontWeight: fontWeight.extrabold,
    color: colors.textOnPrimary,
    marginBottom: spacing.sm,
    lineHeight: 42,
  },
  heroSubtitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    color: colors.secondary,
    marginBottom: spacing.sm,
  },
  heroDescription: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  primaryButtonText: {
    color: colors.primaryDark,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  secondaryButtonText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
  },
  section: {
    paddingVertical: spacing.xl,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
  },
  consultCta: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    alignItems: 'center',
  },
  consultCtaIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  consultCtaTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textOnPrimary,
    marginBottom: spacing.sm,
  },
  consultCtaDesc: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  consultCtaPricing: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.lg,
  },
  consultCtaPrice: {
    fontSize: 36,
    fontWeight: fontWeight.extrabold,
    color: colors.secondary,
  },
  consultCtaDuration: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.7)',
    marginLeft: 4,
  },
  consultCtaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  consultCtaButtonText: {
    color: colors.primaryDark,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  ctaSection: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  ctaCard: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textOnPrimary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  ctaDescription: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
  },
  ctaButtonText: {
    color: colors.primaryDark,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  footer: {
    padding: spacing.xl,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerText: {
    fontSize: fontSize.sm,
    color: colors.textLight,
    marginBottom: spacing.md,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  footerLink: {
    fontSize: fontSize.sm,
    color: colors.primary,
  },
});
