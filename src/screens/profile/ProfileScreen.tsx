import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { useSubscription } from '../../contexts/SubscriptionContext';
import { useAuth } from '../../contexts/AuthContext';

export const ProfileScreen: React.FC = () => {
  const { t, isRTL, language, setLanguage } = useLanguage();
  const { isPremium, subscribe, unsubscribe } = useSubscription();
  const { user, isLoggedIn, isLoading: authLoading, login, register, logout } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '', firstName: '', lastName: '', confirmPassword: '' });

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      Alert.alert(
        language === 'ar' ? 'تنبيه' : 'Hinweis',
        language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Bitte füllen Sie alle Felder aus'
      );
      return;
    }
    setIsSubmitting(true);
    try {
      await login(loginData.email, loginData.password);
    } catch (err: any) {
      Alert.alert(
        language === 'ar' ? 'خطأ' : 'Fehler',
        err.message || (language === 'ar' ? 'فشل تسجيل الدخول' : 'Anmeldung fehlgeschlagen')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async () => {
    if (!loginData.email || !loginData.password || !loginData.firstName) {
      Alert.alert(
        language === 'ar' ? 'تنبيه' : 'Hinweis',
        language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Bitte füllen Sie alle Pflichtfelder aus'
      );
      return;
    }
    if (loginData.password !== loginData.confirmPassword) {
      Alert.alert(
        language === 'ar' ? 'خطأ' : 'Fehler',
        language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwörter stimmen nicht überein'
      );
      return;
    }
    setIsSubmitting(true);
    try {
      await register({
        email: loginData.email,
        password: loginData.password,
        first_name: loginData.firstName,
        last_name: loginData.lastName,
        language,
      });
    } catch (err: any) {
      Alert.alert(
        language === 'ar' ? 'خطأ' : 'Fehler',
        err.message || (language === 'ar' ? 'فشل إنشاء الحساب' : 'Registrierung fehlgeschlagen')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.authHeader}>
          <View style={styles.authIcon}>
            <Ionicons name="person-circle" size={80} color={colors.secondary} />
          </View>
          <Text style={styles.authTitle}>
            {isRegistering ? t('registerTitle') : t('loginTitle')}
          </Text>
          <Text style={styles.authSubtitle}>
            {language === 'ar'
              ? 'سجل دخولك للوصول إلى جميع الخدمات'
              : 'Melden Sie sich an, um alle Dienste zu nutzen'}
          </Text>
        </View>

        <View style={styles.authForm}>
          {isRegistering && (
            <View style={styles.row}>
              <View style={styles.halfField}>
                <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
                  {t('firstName')} *
                </Text>
                <TextInput
                  style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
                  value={loginData.firstName}
                  onChangeText={(text) => setLoginData({ ...loginData, firstName: text })}
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
                  value={loginData.lastName}
                  onChangeText={(text) => setLoginData({ ...loginData, lastName: text })}
                  placeholder={t('lastName')}
                  placeholderTextColor={colors.textLight}
                />
              </View>
            </View>
          )}

          <View style={styles.field}>
            <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
              {t('email')} *
            </Text>
            <TextInput
              style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              value={loginData.email}
              onChangeText={(text) => setLoginData({ ...loginData, email: text })}
              placeholder={t('email')}
              placeholderTextColor={colors.textLight}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
              {t('password')} *
            </Text>
            <TextInput
              style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              value={loginData.password}
              onChangeText={(text) => setLoginData({ ...loginData, password: text })}
              placeholder={t('password')}
              placeholderTextColor={colors.textLight}
              secureTextEntry
            />
          </View>

          {isRegistering && (
            <View style={styles.field}>
              <Text style={[styles.label, { textAlign: isRTL ? 'right' : 'left' }]}>
                {t('confirmPassword')} *
              </Text>
              <TextInput
                style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
                value={loginData.confirmPassword}
                onChangeText={(text) => setLoginData({ ...loginData, confirmPassword: text })}
                placeholder={t('confirmPassword')}
                placeholderTextColor={colors.textLight}
                secureTextEntry
              />
            </View>
          )}

          <TouchableOpacity
            style={[styles.submitButton, isSubmitting && { opacity: 0.7 }]}
            onPress={isRegistering ? handleRegister : handleLogin}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color={colors.textOnPrimary} />
            ) : (
              <Text style={styles.submitText}>
                {isRegistering ? t('register') : t('login')}
              </Text>
            )}
          </TouchableOpacity>

          {!isRegistering && (
            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText}>{t('forgotPassword')}</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.switchAuth}
            onPress={() => setIsRegistering(!isRegistering)}
          >
            <Text style={styles.switchText}>
              {isRegistering ? t('hasAccount') : t('noAccount')}{' '}
              <Text style={styles.switchLink}>
                {isRegistering ? t('login') : t('register')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarLarge}>
          <Ionicons name="person" size={50} color={colors.primary} />
        </View>
        <Text style={styles.profileName}>{user?.first_name || 'User'} {user?.last_name || ''}</Text>
        <Text style={styles.profileEmail}>{user?.email || ''}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        <Text style={[styles.menuTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {language === 'ar' ? 'حسابي' : 'Mein Konto'}
        </Text>

        {[
          { icon: 'chatbubbles', label: t('myConsultations'), badge: '3' },
          { icon: 'document-text', label: t('myDocuments'), badge: '5' },
          { icon: 'notifications', label: t('notifications'), badge: '2' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: colors.primary + '10' }]}>
              <Ionicons name={item.icon as any} size={22} color={colors.primary} />
            </View>
            <Text style={[styles.menuLabel, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}>
              {item.label}
            </Text>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <Ionicons
              name={isRTL ? 'chevron-back' : 'chevron-forward'}
              size={18}
              color={colors.textLight}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuSection}>
        <Text style={[styles.menuTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('settings')}
        </Text>

        {/* Language Toggle */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => setLanguage(language === 'ar' ? 'de' : 'ar')}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#3B82F610' }]}>
            <Ionicons name="globe" size={22} color="#3B82F6" />
          </View>
          <Text style={[styles.menuLabel, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}>
            {t('language')}
          </Text>
          <Text style={styles.languageValue}>{language === 'ar' ? 'العربية' : 'Deutsch'}</Text>
        </TouchableOpacity>

        {/* Notifications Toggle */}
        <View style={styles.menuItem}>
          <View style={[styles.menuIcon, { backgroundColor: '#F59E0B10' }]}>
            <Ionicons name="notifications" size={22} color="#F59E0B" />
          </View>
          <Text style={[styles.menuLabel, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}>
            {t('notifications')}
          </Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: colors.border, true: colors.primary + '50' }}
            thumbColor={notificationsEnabled ? colors.primary : colors.textLight}
          />
        </View>
      </View>

      {/* Subscription Section */}
      <View style={styles.menuSection}>
        <Text style={[styles.menuTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('subscriptionTitle')}
        </Text>

        <View style={styles.subscriptionCard}>
          <View style={[styles.subscriptionBadge, isPremium ? styles.premiumBadge : styles.freeBadge]}>
            <Ionicons
              name={isPremium ? 'diamond' : 'person'}
              size={18}
              color={isPremium ? '#C8A951' : colors.textLight}
            />
            <Text style={[styles.subscriptionBadgeText, isPremium && styles.premiumBadgeText]}>
              {isPremium ? t('premiumPlan') : t('freePlan')}
            </Text>
          </View>

          {!isPremium ? (
            <>
              <Text style={[styles.subscriptionDesc, { textAlign: isRTL ? 'right' : 'left' }]}>
                {t('subscriptionDesc')}
              </Text>
              <View style={styles.benefitsList}>
                {[t('premiumBenefit1'), t('premiumBenefit2'), t('premiumBenefit3'), t('premiumBenefit4')].map((benefit, i) => (
                  <View key={i} style={styles.benefitRow}>
                    <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                    <Text style={[styles.benefitText, { textAlign: isRTL ? 'right' : 'left' }]}>{benefit}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.pricingRow}>
                <Text style={styles.priceText}>4.99€</Text>
                <Text style={styles.priceUnit}>{t('perMonth')}</Text>
              </View>
              <TouchableOpacity style={styles.subscribeButton} onPress={subscribe}>
                <Ionicons name="diamond" size={18} color={colors.primary} />
                <Text style={styles.subscribeButtonText}>{t('subscribNow')}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={[styles.subscriptionDesc, { textAlign: isRTL ? 'right' : 'left' }]}>
                {language === 'ar'
                  ? 'أنت مشترك في الخطة المميزة. تتمتع بجميع المزايا.'
                  : 'Sie haben ein Premium-Abonnement mit allen Vorteilen.'}
              </Text>
              <TouchableOpacity
                style={[styles.subscribeButton, { backgroundColor: colors.error + '15' }]}
                onPress={() => {
                  Alert.alert(
                    language === 'ar' ? 'إلغاء الاشتراك' : 'Abonnement kündigen',
                    language === 'ar' ? 'هل أنت متأكد من إلغاء الاشتراك المميز؟' : 'Möchten Sie Ihr Premium-Abonnement wirklich kündigen?',
                    [
                      { text: t('cancel'), style: 'cancel' },
                      { text: language === 'ar' ? 'إلغاء الاشتراك' : 'Kündigen', style: 'destructive', onPress: unsubscribe },
                    ]
                  );
                }}
              >
                <Text style={[styles.subscribeButtonText, { color: colors.error }]}>
                  {language === 'ar' ? 'إلغاء الاشتراك' : 'Abonnement kündigen'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {/* Links */}
      <View style={styles.menuSection}>
        {[
          { icon: 'information-circle', label: t('aboutUs'), color: '#06B6D4' },
          { icon: 'shield-checkmark', label: t('privacyPolicy'), color: '#10B981' },
          { icon: 'document', label: t('termsOfService'), color: '#8B5CF6' },
          { icon: 'mail', label: t('contactUs'), color: '#EC4899' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: item.color + '10' }]}>
              <Ionicons name={item.icon as any} size={22} color={item.color} />
            </View>
            <Text style={[styles.menuLabel, { textAlign: isRTL ? 'right' : 'left', flex: 1 }]}>
              {item.label}
            </Text>
            <Ionicons
              name={isRTL ? 'chevron-back' : 'chevron-forward'}
              size={18}
              color={colors.textLight}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Ionicons name="log-out" size={20} color={colors.error} />
        <Text style={styles.logoutText}>{t('logout')}</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  authHeader: {
    backgroundColor: colors.primary,
    paddingTop: 80,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  authIcon: {
    marginBottom: spacing.md,
  },
  authTitle: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textOnPrimary,
    marginBottom: spacing.sm,
  },
  authSubtitle: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  authForm: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
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
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md + 2,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  submitText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  forgotButton: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
  forgotText: {
    fontSize: fontSize.sm,
    color: colors.primary,
  },
  switchAuth: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  switchText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  switchLink: {
    color: colors.primary,
    fontWeight: fontWeight.bold,
  },
  profileHeader: {
    backgroundColor: colors.primary,
    paddingTop: 70,
    paddingBottom: spacing.xl,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  avatarLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  profileName: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textOnPrimary,
  },
  profileEmail: {
    fontSize: fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  menuSection: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  menuTitle: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.textLight,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
    letterSpacing: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    gap: spacing.md,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    fontSize: fontSize.md,
    color: colors.text,
    fontWeight: fontWeight.medium,
  },
  badge: {
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    fontSize: 11,
    color: '#FFF',
    fontWeight: fontWeight.bold,
  },
  languageValue: {
    fontSize: fontSize.sm,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  subscriptionCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  subscriptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    gap: 6,
    marginBottom: spacing.md,
  },
  freeBadge: {
    backgroundColor: colors.border,
  },
  premiumBadge: {
    backgroundColor: '#C8A95120',
  },
  subscriptionBadgeText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.textLight,
  },
  premiumBadgeText: {
    color: '#C8A951',
  },
  subscriptionDesc: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  benefitsList: {
    marginBottom: spacing.md,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  benefitText: {
    fontSize: fontSize.md,
    color: colors.text,
    flex: 1,
  },
  pricingRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  priceText: {
    fontSize: 32,
    fontWeight: fontWeight.extrabold,
    color: colors.primary,
  },
  priceUnit: {
    fontSize: fontSize.md,
    color: colors.textLight,
    marginLeft: 4,
  },
  subscribeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8A95120',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  subscribeButtonText: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    color: '#C8A951',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.error,
    gap: spacing.sm,
  },
  logoutText: {
    fontSize: fontSize.md,
    color: colors.error,
    fontWeight: fontWeight.medium,
  },
});
