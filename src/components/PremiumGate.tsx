import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSubscription } from '../contexts/SubscriptionContext';
import { useLanguage } from '../i18n/LanguageContext';
import { theme } from '../utils/theme';

interface PremiumGateProps {
  children: React.ReactNode;
}

export const PremiumGate: React.FC<PremiumGateProps> = ({ children }) => {
  const { isPremium, subscribe } = useSubscription();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  if (isPremium) return <>{children}</>;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.lockContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="lock-closed" size={48} color={theme.colors.secondary} />
        </View>
        <Text style={[styles.title, { textAlign: isAr ? 'right' : 'left' }]}>
          {isAr ? 'محتوى حصري للمشتركين' : 'Exklusiver Premium-Inhalt'}
        </Text>
        <Text style={[styles.subtitle, { textAlign: isAr ? 'right' : 'left' }]}>
          {isAr
            ? 'اشترك للوصول إلى هذا المحتوى وجميع الميزات المتقدمة'
            : 'Abonnieren Sie für Zugang zu diesem Inhalt und allen erweiterten Funktionen'}
        </Text>

        <View style={styles.features}>
          {[
            isAr ? 'جميع المقالات القانونية المتقدمة' : 'Alle erweiterten Rechtsartikel',
            isAr ? 'بدون إعلانات' : 'Werbefrei',
            isAr ? 'استشارات مخفضة' : 'Ermäßigte Beratungen',
            isAr ? 'تحديثات قانونية حصرية' : 'Exklusive Rechts-Updates',
          ].map((feature, i) => (
            <View key={i} style={styles.featureRow}>
              <Ionicons name="checkmark-circle" size={22} color={theme.colors.success} />
              <Text style={[styles.featureText, { textAlign: isAr ? 'right' : 'left' }]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>
            {isAr ? 'الاشتراك الشهري' : 'Monatliches Abonnement'}
          </Text>
          <Text style={styles.price}>4.99€</Text>
          <Text style={styles.priceNote}>
            {isAr ? '/ شهرياً' : '/ monatlich'}
          </Text>
        </View>

        <TouchableOpacity style={styles.subscribeBtn} onPress={subscribe} activeOpacity={0.8}>
          <Ionicons name="star" size={20} color={theme.colors.primaryDark} />
          <Text style={styles.subscribeBtnText}>
            {isAr ? 'اشترك الآن' : 'Jetzt abonnieren'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.restoreBtn}>
          <Text style={styles.restoreBtnText}>
            {isAr ? 'استعادة الاشتراك' : 'Abonnement wiederherstellen'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  lockContainer: {
    alignItems: 'center',
    paddingTop: 40,
    maxWidth: 400,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: `${theme.colors.secondary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    lineHeight: 24,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  features: {
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  featureText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    flex: 1,
  },
  priceBox: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
  },
  priceLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  price: {
    fontSize: 40,
    fontWeight: theme.fontWeights.extrabold as any,
    color: theme.colors.primary,
  },
  priceNote: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  subscribeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: theme.colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: theme.borderRadius.full,
    width: '100%',
    marginBottom: theme.spacing.md,
  },
  subscribeBtnText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.primaryDark,
  },
  restoreBtn: {
    padding: 12,
  },
  restoreBtnText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.semibold as any,
  },
});
