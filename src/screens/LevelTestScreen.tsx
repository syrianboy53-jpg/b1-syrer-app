import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';
import { levelTestQuestions } from '../data/levelTest';

export default function LevelTestScreen() {
  const [mode, setMode] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = levelTestQuestions[currentIndex];

  const handleAnswer = useCallback((index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: index }));
  }, [answered, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= levelTestQuestions.length) {
      setMode('result');
    } else {
      setCurrentIndex(prev => prev + 1);
      setAnswered(false);
      setSelectedOption(null);
    }
  }, [currentIndex]);

  const calculateResult = useCallback(() => {
    let a1 = 0, a2 = 0, b1 = 0;
    levelTestQuestions.forEach(q => {
      if (answers[q.id] === q.correctIndex) {
        if (q.level === 'A1') a1++;
        else if (q.level === 'A2') a2++;
        else b1++;
      }
    });
    const total = a1 + a2 + b1;
    const totalQuestions = levelTestQuestions.length;
    const percentage = Math.round((total / totalQuestions) * 100);

    let level = 'A1';
    if (percentage >= 75) level = 'B1';
    else if (percentage >= 50) level = 'A2';
    else if (percentage >= 25) level = 'A1+';

    return { a1, a2, b1, total, totalQuestions, percentage, level };
  }, [answers]);

  const resetTest = useCallback(() => {
    setMode('intro');
    setCurrentIndex(0);
    setAnswers({});
    setAnswered(false);
    setSelectedOption(null);
  }, []);

  if (mode === 'result') {
    const result = calculateResult();
    const levelColors: Record<string, string> = {
      'A1': Colors.red,
      'A1+': Colors.warning,
      'A2': Colors.info,
      'B1': Colors.success,
    };
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.resultCard}>
          <Text style={styles.resultEmoji}>🎯</Text>
          <Text style={styles.resultTitle}>نتيجة اختبار المستوى</Text>
          <View style={[styles.levelBadge, { backgroundColor: levelColors[result.level] || Colors.green }]}>
            <Text style={styles.levelText}>{result.level}</Text>
          </View>
          <Text style={styles.resultScore}>
            {result.total} / {result.totalQuestions} ({result.percentage}%)
          </Text>

          <View style={styles.breakdownRow}>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>A1</Text>
              <Text style={styles.breakdownValue}>{result.a1}/13</Text>
            </View>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>A2</Text>
              <Text style={styles.breakdownValue}>{result.a2}/14</Text>
            </View>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>B1</Text>
              <Text style={styles.breakdownValue}>{result.b1}/13</Text>
            </View>
          </View>

          <Text style={styles.resultAdvice}>
            {result.level === 'B1'
              ? '🎉 مستواك B1! أنت جاهز للامتحان. استمر بالتدريب!'
              : result.level === 'A2'
              ? '📚 مستواك A2. تحتاج مزيداً من التدريب على قواعد B1.'
              : '📖 مستواك A1. ننصحك بدورة B1 مكثفة قبل الامتحان.'}
          </Text>

          <TouchableOpacity style={styles.retryButton} onPress={resetTest}>
            <Text style={styles.retryButtonText}>إعادة الاختبار</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  if (mode === 'quiz' && currentQuestion) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${((currentIndex + 1) / levelTestQuestions.length) * 100}%` }]} />
        </View>
        <View style={styles.counterRow}>
          <Text style={styles.counter}>السؤال {currentIndex + 1} من {levelTestQuestions.length}</Text>
          <View style={[styles.levelTag, { backgroundColor: currentQuestion.level === 'A1' ? Colors.success : currentQuestion.level === 'A2' ? Colors.info : Colors.warning }]}>
            <Text style={styles.levelTagText}>{currentQuestion.level}</Text>
          </View>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <Text style={styles.questionTextAr}>{currentQuestion.questionAr}</Text>

          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answered && index === currentQuestion.correctIndex && styles.correctOption,
                answered && index === selectedOption && index !== currentQuestion.correctIndex && styles.wrongOption,
              ]}
              onPress={() => handleAnswer(index)}
              disabled={answered}
            >
              <Text style={styles.optionLetter}>{String.fromCharCode(65 + index)}</Text>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {answered && (
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.nextButtonText}>
                {currentIndex + 1 >= levelTestQuestions.length ? 'عرض النتيجة' : 'التالي ←'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }

  // Intro
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.introCard}>
        <Text style={styles.introEmoji}>🎯</Text>
        <Text style={styles.introTitle}>اختبار تحديد المستوى</Text>
        <Text style={styles.introDesc}>
          اكتشف مستواك الحالي في اللغة الألمانية! 40 سؤال من مستويات A1 و A2 و B1.
        </Text>
        <View style={styles.introDetails}>
          <Text style={styles.introDetail}>📝 40 سؤال</Text>
          <Text style={styles.introDetail}>⏱️ حوالي 15 دقيقة</Text>
          <Text style={styles.introDetail}>📊 نتيجة فورية</Text>
        </View>
        <TouchableOpacity style={styles.startButton} onPress={() => setMode('quiz')}>
          <Text style={styles.startButtonText}>ابدأ الاختبار</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  introCard: { backgroundColor: Colors.card, borderRadius: 16, padding: 30, alignItems: 'center', marginTop: 20 },
  introEmoji: { fontSize: 64, marginBottom: 16 },
  introTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, marginBottom: 12 },
  introDesc: { fontSize: 15, color: Colors.muted, textAlign: 'center', writingDirection: 'rtl', lineHeight: 24, marginBottom: 20 },
  introDetails: { marginBottom: 24 },
  introDetail: { fontSize: 14, color: Colors.inkSoft, textAlign: 'center', marginBottom: 6 },
  startButton: { backgroundColor: Colors.green, borderRadius: 12, paddingHorizontal: 40, paddingVertical: 14 },
  startButtonText: { color: Colors.white, fontSize: 18, fontWeight: '700' },
  progressBar: { height: 6, backgroundColor: '#e0e0e0', borderRadius: 3, marginBottom: 12 },
  progressFill: { height: 6, backgroundColor: Colors.green, borderRadius: 3 },
  counterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  counter: { fontSize: 14, color: Colors.muted },
  levelTag: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 3 },
  levelTagText: { color: Colors.white, fontSize: 12, fontWeight: '700' },
  questionCard: { backgroundColor: Colors.card, borderRadius: 12, padding: 20, borderWidth: 1, borderColor: Colors.cardBorder },
  questionText: { fontSize: 16, fontWeight: '600', color: Colors.ink, marginBottom: 8, lineHeight: 24 },
  questionTextAr: { fontSize: 14, color: Colors.muted, writingDirection: 'rtl', textAlign: 'right', marginBottom: 16, lineHeight: 22 },
  optionButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f7f9f7', borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1.5, borderColor: '#e5e8e5' },
  correctOption: { borderColor: Colors.success, backgroundColor: '#e8f5e9' },
  wrongOption: { borderColor: Colors.red, backgroundColor: '#fce4ec' },
  optionLetter: { width: 28, height: 28, borderRadius: 14, backgroundColor: Colors.green, color: Colors.white, textAlign: 'center', lineHeight: 28, fontWeight: '700', fontSize: 14, marginRight: 12, overflow: 'hidden' },
  optionText: { flex: 1, fontSize: 14, color: Colors.ink, lineHeight: 20 },
  nextButton: { backgroundColor: Colors.green, borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 16 },
  nextButtonText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
  resultCard: { backgroundColor: Colors.card, borderRadius: 16, padding: 30, alignItems: 'center', marginTop: 20 },
  resultEmoji: { fontSize: 64, marginBottom: 16 },
  resultTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.ink, marginBottom: 16 },
  levelBadge: { borderRadius: 20, paddingHorizontal: 24, paddingVertical: 8, marginBottom: 16 },
  levelText: { color: Colors.white, fontSize: 28, fontWeight: 'bold' },
  resultScore: { fontSize: 18, color: Colors.muted, marginBottom: 20 },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 },
  breakdownItem: { alignItems: 'center', backgroundColor: '#f7f9f7', borderRadius: 10, padding: 12, width: '28%' },
  breakdownLabel: { fontSize: 14, fontWeight: '700', color: Colors.green, marginBottom: 4 },
  breakdownValue: { fontSize: 16, fontWeight: '600', color: Colors.ink },
  resultAdvice: { fontSize: 14, color: Colors.inkSoft, textAlign: 'center', writingDirection: 'rtl', lineHeight: 22, marginBottom: 20 },
  retryButton: { backgroundColor: Colors.green, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 12 },
  retryButtonText: { color: Colors.white, fontSize: 16, fontWeight: '700' },
});
