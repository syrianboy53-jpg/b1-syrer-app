import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appAPI, AppVersionData } from '../api/client';
import { useLanguage } from '../i18n/LanguageContext';
import { colors, fontSize, fontWeight, spacing, borderRadius } from '../utils/theme';

const CURRENT_VERSION_CODE = 2;

export const UpdateChecker: React.FC = () => {
  const { language } = useLanguage();
  const [update, setUpdate] = useState<AppVersionData | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    checkForUpdate();
  }, []);

  const checkForUpdate = async () => {
    try {
      const result = await appAPI.checkUpdate(CURRENT_VERSION_CODE);
      if (result) {
        setUpdate(result);
        setVisible(true);
      }
    } catch {
      // silently fail
    }
  };

  if (!update || !visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name="arrow-up-circle" size={48} color={colors.primary} />
          </View>
          <Text style={styles.title}>
            {language === 'ar' ? 'تحديث جديد متاح!' : 'Neues Update verfügbar!'}
          </Text>
          <Text style={styles.version}>v{update.version}</Text>
          <Text style={styles.notes}>
            {language === 'ar' ? update.release_notes_ar : update.release_notes_de}
          </Text>
          {update.download_url ? (
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={() => Linking.openURL(update.download_url)}
            >
              <Ionicons name="download" size={20} color={colors.textOnPrimary} />
              <Text style={styles.updateBtnText}>
                {language === 'ar' ? 'تحديث الآن' : 'Jetzt aktualisieren'}
              </Text>
            </TouchableOpacity>
          ) : null}
          {!update.is_mandatory && (
            <TouchableOpacity style={styles.laterBtn} onPress={() => setVisible(false)}>
              <Text style={styles.laterBtnText}>
                {language === 'ar' ? 'لاحقاً' : 'Später'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  iconWrap: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  version: {
    fontSize: fontSize.md,
    color: colors.primary,
    fontWeight: fontWeight.semibold,
    marginBottom: spacing.md,
  },
  notes: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  updateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  updateBtnText: {
    color: colors.textOnPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  laterBtn: {
    paddingVertical: spacing.sm,
  },
  laterBtnText: {
    color: colors.textLight,
    fontSize: fontSize.md,
  },
});
