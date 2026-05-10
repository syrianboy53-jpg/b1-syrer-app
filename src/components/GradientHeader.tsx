import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize, fontWeight, spacing } from '../utils/theme';
import { useLanguage } from '../i18n/LanguageContext';

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
}

export const GradientHeader: React.FC<GradientHeaderProps> = ({ title, subtitle }) => {
  const { isRTL } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={[styles.title, { textAlign: isRTL ? 'right' : 'left' }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, { textAlign: isRTL ? 'right' : 'left' }]}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 60,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  overlay: {
    alignItems: 'stretch',
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textOnPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 24,
  },
});
