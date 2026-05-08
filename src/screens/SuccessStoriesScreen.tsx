import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';
import { successStories } from '../data/successStories';

export default function SuccessStoriesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>قصص نجاح</Text>
      <Text style={styles.pageDesc}>
        قصص حقيقية من سوريين نجحوا في امتحان B1 — خذ الإلهام منهم!
      </Text>

      {successStories.map((story) => (
        <View key={story.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{story.initial}</Text>
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.name}>{story.name}</Text>
              <Text style={styles.city}>📍 {story.city}</Text>
            </View>
            <View style={styles.resultBadge}>
              <Text style={styles.resultText}>{story.result}</Text>
            </View>
          </View>

          <Text style={styles.storyText}>{story.story}</Text>

          <View style={styles.tipBox}>
            <Text style={styles.tipLabel}>💡 نصيحة:</Text>
            <Text style={styles.tipText}>{story.tip}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 20, lineHeight: 22 },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: Colors.cardBorder, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: Colors.green, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: Colors.white, fontSize: 20, fontWeight: 'bold' },
  headerInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: Colors.ink },
  city: { fontSize: 12, color: Colors.muted, marginTop: 2 },
  resultBadge: { backgroundColor: Colors.gold, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  resultText: { color: Colors.white, fontSize: 11, fontWeight: '600' },
  storyText: { fontSize: 14, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 24, marginBottom: 12 },
  tipBox: { backgroundColor: '#f0f7f2', borderRadius: 8, padding: 12 },
  tipLabel: { fontSize: 13, fontWeight: '600', color: Colors.green, writingDirection: 'rtl', textAlign: 'right', marginBottom: 4 },
  tipText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
});
