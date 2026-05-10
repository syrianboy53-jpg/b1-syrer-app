import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { GradientHeader } from '../../components/GradientHeader';
import { AdBanner } from '../../components/AdBanner';

export const ConsultationScreen: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consultationType: 'free',
    topic: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    { value: 'family', label: t('familyLaw') },
    { value: 'child', label: t('childProtection') },
    { value: 'divorce', label: t('divorce') },
    { value: 'custody', label: t('custody') },
    { value: 'violence', label: t('domesticViolence') },
    { value: 'other', label: t('otherTopic') },
  ];

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email || !formData.topic) {
      Alert.alert(
        language === 'ar' ? 'تنبيه' : 'Hinweis',
        language === 'ar'
          ? 'يرجى ملء جميع الحقول المطلوبة'
          : 'Bitte füllen Sie alle Pflichtfelder aus'
      );
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.successContainer}>
        <View style={styles.successCard}>
          <View style={styles.successIcon}>
            <Ionicons name="checkmark-circle" size={80} color={colors.success} />
          </View>
          <Text style={styles.successTitle}>
            {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Erfolgreich gesendet!'}
          </Text>
          <Text style={styles.successMessage}>{t('bookingSuccess')}</Text>
          <TouchableOpacity style={styles.resetButton} onPress={() => {
            setSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              consultationType: 'free',
              topic: '',
              description: '',
            });
          }}>
            <Text style={styles.resetButtonText}>
              {language === 'ar' ? 'حجز استشارة أخرى' : 'Weitere Beratung buchen'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GradientHeader title={t('consultationTitle')} subtitle={t('consultationSubtitle')} />

      {/* Private Chat CTA */}
      <TouchableOpacity
        style={styles.chatCta}
        onPress={() => navigation?.navigate?.('ChatConsultation')}
        activeOpacity={0.8}
      >
        <View style={styles.chatCtaIcon}>
          <Ionicons name="chatbubbles" size={28} color="#fff" />
        </View>
        <View style={styles.chatCtaContent}>
          <Text style={[styles.chatCtaTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
            {language === 'ar' ? 'استشارة خاصة فورية' : 'Sofortige private Beratung'}
          </Text>
          <Text style={[styles.chatCtaDesc, { textAlign: isRTL ? 'right' : 'left' }]}>
            {language === 'ar' ? 'محادثة سرية (صوت + نص) - 5€ / 30 دقيقة' : 'Vertraulicher Chat (Sprache + Text) - 5€ / 30 Min.'}
          </Text>
        </View>
        <Ionicons name={isRTL ? 'chevron-back' : 'chevron-forward'} size={22} color="#fff" />
      </TouchableOpacity>

      <AdBanner />

      {/* Consultation Types */}
      <View style={styles.typeSection}>
        <TouchableOpacity
          style={[
            styles.typeCard,
            formData.consultationType === 'free' && styles.typeCardActive,
          ]}
          onPress={() => setFormData({ ...formData, consultationType: 'free' })}
        >
          <Ionicons
            name="gift"
            size={28}
            color={formData.consultationType === 'free' ? colors.primary : colors.textSecondary}
          />
          <Text
            style={[
              styles.typeTitle,
              formData.consultationType === 'free' && styles.typeTitleActive,
            ]}
          >
            {t('freeInitial')}
          </Text>
          <Text style={styles.typeDesc}>
            {language === 'ar' ? '15 دقيقة مجاناً' : '15 Minuten kostenlos'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeCard,
            formData.consultationType === 'paid' && styles.typeCardActive,
          ]}
          onPress={() => setFormData({ ...formData, consultationType: 'paid' })}
        >
          <Ionicons
            name="star"
            size={28}
            color={formData.consultationType === 'paid' ? colors.primary : colors.textSecondary}
          />
          <Text
            style={[
              styles.typeTitle,
              formData.consultationType === 'paid' && styles.typeTitleActive,
            ]}
          >
            {t('paidDetailed')}
          </Text>
          <Text style={styles.typeDesc}>
            {language === 'ar' ? '60 دقيقة - 89€' : '60 Minuten - 89€'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={[styles.formTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {language === 'ar' ? 'بياناتك الشخصية' : 'Ihre persönlichen Daten'}
        </Text>

        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
              {t('firstName')} *
            </Text>
            <TextInput
              style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              value={formData.firstName}
              onChangeText={(text) => setFormData({ ...formData, firstName: text })}
              placeholder={t('firstName')}
              placeholderTextColor={colors.textLight}
            />
          </View>
          <View style={styles.halfField}>
            <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
              {t('lastName')}
            </Text>
            <TextInput
              style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              value={formData.lastName}
              onChangeText={(text) => setFormData({ ...formData, lastName: text })}
              placeholder={t('lastName')}
              placeholderTextColor={colors.textLight}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('email')} *
          </Text>
          <TextInput
            style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder={t('email')}
            placeholderTextColor={colors.textLight}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.field}>
          <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('phone')}
          </Text>
          <TextInput
            style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            placeholder="+49..."
            placeholderTextColor={colors.textLight}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={[styles.formTitle, { textAlign: isRTL ? 'right' : 'left', marginTop: spacing.lg }]}>
          {t('selectTopic')} *
        </Text>

        <View style={styles.topicsGrid}>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.value}
              style={[
                styles.topicChip,
                formData.topic === topic.value && styles.topicChipActive,
              ]}
              onPress={() => setFormData({ ...formData, topic: topic.value })}
            >
              <Text
                style={[
                  styles.topicChipText,
                  formData.topic === topic.value && styles.topicChipTextActive,
                ]}
              >
                {topic.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
            {t('describeIssue')}
          </Text>
          <TextInput
            style={[styles.textArea, { textAlign: isRTL ? 'right' : 'left' }]}
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
            placeholder={language === 'ar' ? 'اكتب وصفاً موجزاً لمشكلتك...' : 'Beschreiben Sie Ihr Problem kurz...'}
            placeholderTextColor={colors.textLight}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="send" size={20} color={colors.textOnPrimary} />
          <Text style={styles.submitText}>{t('submitBooking')}</Text>
        </TouchableOpacity>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color={colors.info} />
          <Text style={[styles.infoText, { textAlign: isRTL ? 'right' : 'left' }]}>
            {language === 'ar'
              ? 'جميع البيانات محمية وفقاً لقوانين حماية البيانات الأوروبية (GDPR)'
              : 'Alle Daten sind gemäß DSGVO geschützt'}
          </Text>
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
  chatCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    margin: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    gap: 12,
  },
  chatCtaIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatCtaContent: {
    flex: 1,
  },
  chatCtaTitle: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold as any,
    color: '#fff',
    marginBottom: 2,
  },
  chatCtaDesc: {
    fontSize: fontSize.xs,
    color: 'rgba(255,255,255,0.8)',
  },
  successContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  successCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    width: '100%',
  },
  successIcon: {
    marginBottom: spacing.lg,
  },
  successTitle: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.success,
    marginBottom: spacing.md,
  },
  successMessage: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  resetButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
  },
  resetButtonText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  typeSection: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  typeCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  typeCardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '08',
  },
  typeTitle: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.text,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  typeTitleActive: {
    color: colors.primary,
  },
  typeDesc: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    marginTop: 4,
  },
  form: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  formTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  halfField: {
    flex: 1,
    marginBottom: spacing.md,
  },
  field: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: fontSize.md,
    color: colors.text,
  },
  textArea: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    color: colors.text,
    minHeight: 100,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  topicChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  topicChipActive: {
    backgroundColor: colors.primary + '15',
    borderColor: colors.primary,
  },
  topicChipText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  topicChipTextActive: {
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  submitButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md + 2,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  submitText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.info + '10',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  infoText: {
    flex: 1,
    fontSize: fontSize.xs,
    color: colors.info,
    lineHeight: 18,
  },
});
