import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSubscription } from '../contexts/SubscriptionContext';
import { theme } from '../utils/theme';

interface AdBannerProps {
  size?: 'banner' | 'largeBanner' | 'mediumRectangle';
}

export const AdBanner: React.FC<AdBannerProps> = ({ size = 'banner' }) => {
  const { isPremium } = useSubscription();

  if (isPremium) return null;

  // Placeholder for Google AdMob integration
  // In production, replace with:
  // import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
  // <BannerAd unitId="ca-app-pub-XXXXX/YYYYY" size={BannerAdSize.BANNER} />

  const heights: Record<string, number> = {
    banner: 50,
    largeBanner: 100,
    mediumRectangle: 250,
  };

  return (
    <View style={[styles.container, { height: heights[size] }]}>
      <View style={styles.adPlaceholder}>
        <Ionicons name="megaphone-outline" size={20} color={theme.colors.textLight} />
        <Text style={styles.adText}>إعلان - Google AdMob</Text>
        <Text style={styles.adSubtext}>اشترك لإزالة الإعلانات</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
  },
  adPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  adText: {
    fontSize: 12,
    color: theme.colors.textLight,
    marginTop: 4,
  },
  adSubtext: {
    fontSize: 10,
    color: theme.colors.textLight,
  },
});
