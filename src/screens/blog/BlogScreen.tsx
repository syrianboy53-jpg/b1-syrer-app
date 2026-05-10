import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, fontSize, fontWeight, spacing } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { GradientHeader } from '../../components/GradientHeader';
import { BlogCard } from '../../components/BlogCard';
import { blogPosts } from '../../data/legalContent';

export const BlogScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t, isRTL, language } = useLanguage();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GradientHeader title={t('blogTitle')} subtitle={t('blogSubtitle')} />

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { textAlign: isRTL ? 'right' : 'left' }]}>
          {t('latestArticles')}
        </Text>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onPress={() => navigation.navigate('BlogDetail', { postId: post.id })}
          />
        ))}
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
    paddingVertical: spacing.lg,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
});
