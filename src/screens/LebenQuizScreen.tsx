import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Colors } from '../theme/colors';
import { lebenQuestions, lebenCategories } from '../data/lebenQuestions';

export default function LebenQuizScreen() {
  const [mode, setMode] = useState<'categories' | 'quiz' | 'result'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const filteredQuestions = selectedCategory === 'all'
    ? lebenQuestions
    : lebenQuestions.filter(q => {
        const cat = lebenCategories.find(c => c.id === selectedCategory);
        return cat ? q.category === cat.name : q.category === selectedCategory;
      });

  const currentQuestion = filteredQuestions[currentIndex];

  const startQuiz = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    setMode('quiz');
  }, []);

  const handleAnswer = useCallback((index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  }, [answered, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= filteredQuestions.length) {
      setMode('result');
    } else {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
      setSelectedOption(null);
    }
  }, [currentIndex, filteredQuestions.length]);

  const resetQuiz = useCallback(() => {
    setMode('categories');
    setSelectedCategory('');
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
  }, []);

  if (mode === 'result') {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    const passed = percentage >= 50;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.resultCard}>
          <Text style={styles.resultEmoji}>{passed ? '🎉' : '📚'}</Text>
          <Text style={styles.resultTitle}>
            {passed ? 'مبروك! نجحت!' : 'حاول مرة أخرى'}
          </Text>
          <Text style={styles.resultScore}>
            {score} / {filteredQuestions.length}
          </Text>
          <Text style={styles.resultPercent}>{percentage}%</Text>
          <Text style={styles.resultNote}>
            {passed
              ? 'أداء ممتاز! استمر بالتدريب للحصول على نتيجة أفضل.'
              : 'لا تيأس! راجع الأسئلة الخاطئة وحاول مرة أخرى.'}
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={resetQuiz}>
            <Text style={styles.retryButtonText}>العودة للأقسام</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  if (mode === 'quiz' && currentQuestion) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.counter}>
          السؤال {currentIndex + 1} من {filteredQuestions.length}
        </Text>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          {currentQuestion.options.map((option, index) => {
            let optionStyle = styles.optionButton;
            if (answered) {
              if (index === currentQuestion.correctIndex) {
                optionStyle = { ...styles.optionButton, ...styles.correctOption };
              } else if (index === selectedOption) {
                optionStyle = { ...styles.optionButton, ...styles.wrongOption };
              }
            }
            return (
              <TouchableOpacity
                key={index}
                style={[styles.optionButton, answered && index === currentQuestion.correctIndex && styles.correctOption, answered && index === selectedOption && index !== currentQuestion.correctIndex && styles.wrongOption]}
                onPress={() => handleAnswer(index)}
                disabled={answered}
              >
                <Text style={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </Text>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}


          {answered && (
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.nextButtonText}>
                {currentIndex + 1 >= filteredQuestions.length ? 'عرض النتيجة' : 'السؤال التالي ←'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }

  // Categories view
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Leben in Deutschland</Text>
      <Text style={styles.pageDesc}>
        اختبار الحياة في ألمانيا — 460 سؤال للتحضير لامتحان الجنسية
      </Text>

      <TouchableOpacity
        style={styles.allQuestionsCard}
        onPress={() => startQuiz('all')}
      >
        <Text style={styles.allQuestionsIcon}>🇩🇪</Text>
        <Text style={styles.allQuestionsTitle}>جميع الأسئلة</Text>
        <Text style={styles.allQuestionsCount}>{lebenQuestions.length} سؤال</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>حسب الولاية</Text>
      {lebenCategories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={styles.categoryCard}
          onPress={() => startQuiz(cat.id)}
        >
          <Text style={styles.categoryIcon}>{cat.icon || '📍'}</Text>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{cat.name}</Text>
            <Text style={styles.categoryNameAr}>{cat.name}</Text>
          </View>
          <View style={styles.categoryCountBadge}>
            <Text style={styles.categoryCount}>{cat.count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 20, lineHeight: 22 },
  allQuestionsCard: { backgroundColor: Colors.green, borderRadius: 12, padding: 20, alignItems: 'center', marginBottom: 20 },
  allQuestionsIcon: { fontSize: 40, marginBottom: 8 },
  allQuestionsTitle: { fontSize: 18, fontWeight: '700', color: Colors.white, marginBottom: 4 },
  allQuestionsCount: { fontSize: 14, color: Colors.goldLight },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.ink, textAlign: 'right', writingDirection: 'rtl', marginBottom: 12 },
  categoryCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.card, borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: Colors.cardBorder },
  categoryIcon: { fontSize: 24, marginLeft: 12 },
  categoryInfo: { flex: 1 },
  categoryName: { fontSize: 15, fontWeight: '600', color: Colors.ink },
  categoryNameAr: { fontSize: 12, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right' },
  categoryCountBadge: { backgroundColor: Colors.green, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 3 },
  categoryCount: { color: Colors.white, fontSize: 12, fontWeight: '600' },
  // Quiz styles
  progressBar: { height: 6, backgroundColor: '#e0e0e0', borderRadius: 3, marginBottom: 12 },
  progressFill: { height: 6, backgroundColor: Colors.green, borderRadius: 3 },
  counter: { fontSize: 14, color: Colors.muted, textAlign: 'center', marginBottom: 16 },
  questionCard: { backgroundColor: Colors.card, borderRadius: 12, padding: 20, borderWidth: 1, borderColor: Colors.cardBorder },
  questionText: { fontSize: 16, fontWeight: '600', color: Colors.ink, marginBottom: 8, lineHeight: 24 },
  questionTextAr: { fontSize: 14, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right', marginBottom: 16, lineHeight: 22 },
  optionButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f7f9f7', borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1.5, borderColor: '#e5e8e5' },
  correctOption: { borderColor: Colors.success, backgroundColor: '#e8f5e9' },
  wrongOption: { borderColor: Colors.red, backgroundColor: '#fce4ec' },
  optionLetter: { width: 28, height: 28, borderRadius: 14, backgroundColor: Colors.green, color: Colors.white, textAlign: 'center', lineHeight: 28, fontWeight: '700', fontSize: 14, marginRight: 12 },
  optionText: { flex: 1, fontSize: 14, color: Colors.ink, lineHeight: 20 },
  explanationBox: { backgroundColor: '#fff8e1', borderRadius: 8, padding: 12, marginTop: 12 },
  explanationTitle: { fontSize: 14, fontWeight: '600', color: Colors.warning, marginBottom: 4, writingDirection: 'rtl', textAlign: 'right' },
  explanationText: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 20 },
  nextButton: { backgroundColor: Colors.green, borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 16 },
  nextButtonText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
  // Result styles
  resultCard: { backgroundColor: Colors.card, borderRadius: 16, padding: 30, alignItems: 'center', marginTop: 20 },
  resultEmoji: { fontSize: 64, marginBottom: 16 },
  resultTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, marginBottom: 12 },
  resultScore: { fontSize: 36, fontWeight: 'bold', color: Colors.ink, marginBottom: 4 },
  resultPercent: { fontSize: 20, color: Colors.gold, fontWeight: '600', marginBottom: 16 },
  resultNote: { fontSize: 14, color: Colors.muted, textAlign: 'center', writingDirection: 'rtl', lineHeight: 22, marginBottom: 20 },
  retryButton: { backgroundColor: Colors.green, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 12 },
  retryButtonText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
});
