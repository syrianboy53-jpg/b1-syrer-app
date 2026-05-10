import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../utils/theme';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogPost } from '../data/legalContent';

interface BlogCardProps {
  post: BlogPost;
  onPress: () => void;
}

const imageIcons: Record<string, string> = {
  family: 'people',
  legal: 'document-text',
  money: 'cash',
  children: 'happy',
};

export const BlogCard: React.FC<BlogCardProps> = ({ post, onPress }) => {
  const { language, isRTL, t } = useLanguage();
  const title = language === 'ar' ? post.titleAr : post.titleDe;
  const excerpt = language === 'ar' ? post.excerptAr : post.excerptDe;
  const category = language === 'ar' ? post.categoryAr : post.category;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Ionicons
          name={(imageIcons[post.image] || 'document') as any}
          size={40}
          color={colors.primary}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.metaRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Text style={styles.date}>{post.date}</Text>
        </View>
        <Text
          style={[styles.title, { textAlign: isRTL ? 'right' : 'left' }]}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          style={[styles.excerpt, { textAlign: isRTL ? 'right' : 'left' }]}
          numberOfLines={2}
        >
          {excerpt}
        </Text>
        <View style={styles.footer}>
          <View style={styles.authorRow}>
            <Ionicons name="person-circle" size={18} color={colors.textSecondary} />
            <Text style={styles.author}>{post.author}</Text>
          </View>
          <View style={styles.readTime}>
            <Ionicons name="time-outline" size={14} color={colors.textLight} />
            <Text style={styles.readTimeText}>{post.readTimeMinutes} min</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    height: 120,
    backgroundColor: colors.primaryLight + '10',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
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
  date: {
    fontSize: fontSize.xs,
    color: colors.textLight,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
    lineHeight: 26,
  },
  excerpt: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    marginLeft: 6,
  },
  readTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readTimeText: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    marginLeft: 4,
  },
});
