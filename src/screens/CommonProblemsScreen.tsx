import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { commonMistakes, grammarQuizQuestions } from '../data/commonProblems';

export default function CommonProblemsScreen() {
  const [tab, setTab] = useState<'mistakes' | 'quiz'>('mistakes');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const currentQuiz = grammarQuizQuestions[quizIndex];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>أخطاء شائعة وتمارين</Text>
      <Text style={styles.pageDesc}>
        {commonMistakes.length} خطأ شائع و {grammarQuizQuestions.length} تمرين قواعد
      </Text>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, tab === 'mistakes' && styles.activeTab]}
          onPress={() => setTab('mistakes')}
        >
          <Text style={[styles.tabText, tab === 'mistakes' && styles.activeTabText]}>
            ❌ أخطاء شائعة ({commonMistakes.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'quiz' && styles.activeTab]}
          onPress={() => setTab('quiz')}
        >
          <Text style={[styles.tabText, tab === 'quiz' && styles.activeTabText]}>
            📝 تمارين ({grammarQuizQuestions.length})
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'mistakes' && commonMistakes.map((mistake) => (
        <TouchableOpacity
          key={mistake.id}
          style={styles.card}
          onPress={() => setExpandedId(expandedId === mistake.id ? null : mistake.id)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>⚠️</Text>
            <Text style={styles.cardTitle}>{mistake.titleAr}</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{mistake.level}</Text>
            </View>
          </View>

          {expandedId === mistake.id && (
            <View style={styles.expandedContent}>
              <View style={styles.problemBox}>
                <Text style={styles.boxLabel}>❌ خطأ:</Text>
                <Text style={styles.boxText}>{mistake.wrong}</Text>
              </View>

              <View style={styles.solutionBox}>
                <Text style={styles.boxLabel}>✅ صحيح:</Text>
                <Text style={styles.boxText}>{mistake.right}</Text>
              </View>

              <View style={styles.examplesBox}>
                <Text style={styles.boxLabel}>💡 لماذا؟</Text>
                <Text style={styles.boxText}>{mistake.whyAr}</Text>
              </View>

              {mistake.tipAr && (
                <View style={styles.tipBox}>
                  <Text style={styles.boxLabel}>📌 نصيحة:</Text>
                  <Text style={styles.boxText}>{mistake.tipAr}</Text>
                </View>
              )}
            </View>
          )}
        </TouchableOpacity>
      ))}

      {tab === 'quiz' && currentQuiz && (
        <View style={styles.quizCard}>
          <Text style={styles.quizCounter}>
            السؤال {quizIndex + 1} من {grammarQuizQuestions.length} | النتيجة: {quizScore}
          </Text>
          <View style={styles.quizLevelRow}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{currentQuiz.level}</Text>
            </View>
            <Text style={styles.quizCategory}>{currentQuiz.category}</Text>
          </View>
          <Text style={styles.quizContext}>{currentQuiz.context}</Text>

          {currentQuiz.options.map((opt: string, i: number) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.optionButton,
                quizAnswered && i === currentQuiz.correct && styles.correctOption,
                quizAnswered && i === quizSelected && i !== currentQuiz.correct && styles.wrongOption,
              ]}
              onPress={() => {
                if (quizAnswered) return;
                setQuizSelected(i);
                setQuizAnswered(true);
                if (i === currentQuiz.correct) setQuizScore(s => s + 1);
              }}
              disabled={quizAnswered}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}

          {quizAnswered && currentQuiz.explanation && (
            <View style={styles.explanationBox}>
              <Text style={styles.explanationText}>{currentQuiz.explanation}</Text>
            </View>
          )}

          {quizAnswered && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                if (quizIndex + 1 < grammarQuizQuestions.length) {
                  setQuizIndex(i => i + 1);
                  setQuizAnswered(false);
                  setQuizSelected(null);
                } else {
                  setQuizIndex(0);
                  setQuizScore(0);
                  setQuizAnswered(false);
                  setQuizSelected(null);
                }
              }}
            >
              <Text style={styles.nextButtonText}>
                {quizIndex + 1 >= grammarQuizQuestions.length ? 'إعادة من البداية' : 'التالي ←'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 16, lineHeight: 22 },
  tabRow: { flexDirection: 'row', marginBottom: 16, backgroundColor: '#e8ede8', borderRadius: 10, padding: 4 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  activeTab: { backgroundColor: Colors.white },
  tabText: { fontSize: 13, fontWeight: '600', color: Colors.muted },
  activeTabText: { color: Colors.green },
  card: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: { fontSize: 28, marginRight: 12 },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '700', color: Colors.ink, writingDirection: 'rtl', textAlign: 'right' },
  levelBadge: { backgroundColor: Colors.green, borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 },
  levelText: { color: Colors.white, fontSize: 11, fontWeight: '600' },
  expandedContent: { marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: Colors.cardBorder },
  problemBox: { backgroundColor: '#fce4ec', borderRadius: 8, padding: 12, marginBottom: 10 },
  solutionBox: { backgroundColor: '#e8f5e9', borderRadius: 8, padding: 12, marginBottom: 10 },
  examplesBox: { backgroundColor: '#f7f9f7', borderRadius: 8, padding: 12, marginBottom: 10 },
  tipBox: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12 },
  boxLabel: { fontSize: 14, fontWeight: '600', marginBottom: 6, writingDirection: 'rtl', textAlign: 'right' },
  boxText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
  quizCard: { backgroundColor: Colors.card, borderRadius: 12, padding: 20, borderWidth: 1, borderColor: Colors.cardBorder },
  quizCounter: { fontSize: 14, color: Colors.muted, textAlign: 'center', marginBottom: 12 },
  quizLevelRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  quizCategory: { fontSize: 13, color: Colors.muted, marginLeft: 8 },
  quizContext: { fontSize: 16, fontWeight: '600', color: Colors.ink, marginBottom: 16, lineHeight: 24 },
  optionButton: { backgroundColor: '#f7f9f7', borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1.5, borderColor: '#e5e8e5' },
  correctOption: { borderColor: Colors.success, backgroundColor: '#e8f5e9' },
  wrongOption: { borderColor: Colors.red, backgroundColor: '#fce4ec' },
  optionText: { fontSize: 14, color: Colors.ink, lineHeight: 20 },
  explanationBox: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12, marginTop: 8 },
  explanationText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 22 },
  nextButton: { backgroundColor: Colors.green, borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 16 },
  nextButtonText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
});
