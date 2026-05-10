import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../../utils/theme';
import { useLanguage } from '../../i18n/LanguageContext';
import { blogPosts } from '../../data/legalContent';

export const BlogDetailScreen: React.FC<{ route: any; navigation: any }> = ({ route }) => {
  const { language, isRTL, t } = useLanguage();
  const postId = route.params?.postId;
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <View style={styles.errorContainer}>
        <Text>{t('error')}</Text>
      </View>
    );
  }

  const title = language === 'ar' ? post.titleAr : post.titleDe;
  const content = language === 'ar' ? post.contentAr : post.contentDe;
  const category = language === 'ar' ? post.categoryAr : post.category;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <View style={styles.headerImage}>
        <Ionicons
          name={post.image === 'family' ? 'people' : post.image === 'legal' ? 'document-text' : post.image === 'money' ? 'cash' : 'happy'}
          size={60}
          color={colors.primary}
        />
      </View>

      <View style={styles.content}>
        {/* Meta */}
        <View style={styles.metaRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <View style={styles.metaInfo}>
            <Ionicons name="time-outline" size={14} color={colors.textLight} />
            <Text style={styles.metaText}>{post.readTimeMinutes} min</Text>
          </View>
          <Text style={styles.metaText}>{post.date}</Text>
        </View>

        {/* Title */}
        <Text style={[styles.title, { textAlign: isRTL ? 'right' : 'left' }]}>{title}</Text>

        {/* Author */}
        <View style={styles.authorRow}>
          <View style={styles.authorAvatar}>
            <Ionicons name="person" size={20} color={colors.primary} />
          </View>
          <Text style={styles.authorName}>{post.author}</Text>
        </View>

        {/* Content */}
        <Text style={[styles.bodyText, { textAlign: isRTL ? 'right' : 'left' }]}>{content}</Text>

        {/* Share */}
        <View style={styles.shareRow}>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={20} color={colors.primary} />
            <Text style={styles.shareText}>{t('shareArticle')}</Text>
          </TouchableOpacity>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 200,
    backgroundColor: colors.primaryLight + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: spacing.lg,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  categoryBadge: {
    backgroundColor: colors.primary + '15',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  categoryText: {
    fontSize: fontSize.xs,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: fontSize.xs,
    color: colors.textLight,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    lineHeight: 38,
    marginBottom: spacing.md,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  authorName: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    color: colors.text,
  },
  bodyText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    lineHeight: 28,
  },
  shareRow: {
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary + '10',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  shareText: {
    fontSize: fontSize.md,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
});
