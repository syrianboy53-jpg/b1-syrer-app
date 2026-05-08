import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';

const studyPlan = [
  { day: 'الاثنين', tasks: ['قواعد: 30 دقيقة', 'مفردات: 20 كلمة', 'استماع: 15 دقيقة'] },
  { day: 'الثلاثاء', tasks: ['قراءة: نص + أسئلة', 'كتابة: نموذج رسالة', 'مراجعة مفردات'] },
  { day: 'الأربعاء', tasks: ['Leben in Deutschland: 30 سؤال', 'قواعد: تمارين', 'استماع: بودكاست'] },
  { day: 'الخميس', tasks: ['محادثة: تدريب موضوع', 'كتابة: تعبير عن رأي', 'مفردات: 20 كلمة'] },
  { day: 'الجمعة', tasks: ['امتحان تجريبي: قراءة', 'مراجعة أخطاء الأسبوع', 'استماع: 15 دقيقة'] },
  { day: 'السبت', tasks: ['امتحان تجريبي: كتابة + استماع', 'قواعد: مراجعة', 'Leben: 30 سؤال'] },
  { day: 'الأحد', tasks: ['راحة أو مراجعة خفيفة', 'مشاهدة فيلم ألماني', 'كتابة ملخص'] },
];

export default function StudyPlannerScreen() {
  const [examDate, setExamDate] = useState<string>('');
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (dayIndex: number, taskIndex: number) => {
    const key = `${dayIndex}-${taskIndex}`;
    setCompletedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const totalTasks = studyPlan.reduce((sum, day) => sum + day.tasks.length, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>خطة الدراسة</Text>
      <Text style={styles.pageDesc}>
        خطة أسبوعية مُنظّمة لتحضير امتحان B1 — التزم بها يومياً!
      </Text>

      {/* Progress */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>تقدمك هذا الأسبوع</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completedCount / totalTasks) * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {completedCount} / {totalTasks} مهمة مكتملة
        </Text>
      </View>

      {/* Daily Plan */}
      {studyPlan.map((day, dayIndex) => (
        <View key={dayIndex} style={styles.dayCard}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayName}>{day.day}</Text>
            <Text style={styles.dayCount}>
              {day.tasks.filter((_, ti) => completedTasks[`${dayIndex}-${ti}`]).length}/{day.tasks.length}
            </Text>
          </View>

          {day.tasks.map((task, taskIndex) => {
            const isCompleted = completedTasks[`${dayIndex}-${taskIndex}`];
            return (
              <TouchableOpacity
                key={taskIndex}
                style={styles.taskRow}
                onPress={() => toggleTask(dayIndex, taskIndex)}
              >
                <View style={[styles.checkbox, isCompleted && styles.checkboxChecked]}>
                  {isCompleted && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={[styles.taskText, isCompleted && styles.taskCompleted]}>
                  {task}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}

      {/* Tips */}
      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>💡 نصائح للدراسة الفعّالة</Text>
        <Text style={styles.tipItem}>• ادرس كل يوم حتى لو 20 دقيقة فقط</Text>
        <Text style={styles.tipItem}>• راجع أخطاءك أسبوعياً</Text>
        <Text style={styles.tipItem}>• تدرب على الامتحانات التجريبية</Text>
        <Text style={styles.tipItem}>• استمع للألمانية يومياً (بودكاست، أفلام)</Text>
        <Text style={styles.tipItem}>• اكتب رسالة واحدة على الأقل أسبوعياً</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgLight },
  content: { padding: 16, paddingBottom: 30 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.green, textAlign: 'right', writingDirection: 'rtl', marginBottom: 8 },
  pageDesc: { fontSize: 14, color: Colors.muted, textAlign: 'right', writingDirection: 'rtl', marginBottom: 20, lineHeight: 22 },
  progressCard: { backgroundColor: Colors.green, borderRadius: 12, padding: 16, marginBottom: 20 },
  progressTitle: { fontSize: 16, fontWeight: '600', color: Colors.white, textAlign: 'center', marginBottom: 12 },
  progressBar: { height: 8, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 4, marginBottom: 8 },
  progressFill: { height: 8, backgroundColor: Colors.gold, borderRadius: 4 },
  progressText: { fontSize: 13, color: Colors.goldLight, textAlign: 'center' },
  dayCard: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: Colors.cardBorder },
  dayHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: Colors.cardBorder },
  dayName: { fontSize: 16, fontWeight: '700', color: Colors.green },
  dayCount: { fontSize: 13, color: Colors.muted },
  taskRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: Colors.green, marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  checkboxChecked: { backgroundColor: Colors.green, borderColor: Colors.green },
  checkmark: { color: Colors.white, fontSize: 14, fontWeight: 'bold' },
  taskText: { flex: 1, fontSize: 14, color: Colors.ink, writingDirection: 'rtl', textAlign: 'right' },
  taskCompleted: { textDecorationLine: 'line-through', color: Colors.muted },
  tipsCard: { backgroundColor: '#f0f7f2', borderRadius: 12, padding: 16, marginTop: 10 },
  tipsTitle: { fontSize: 16, fontWeight: '600', color: Colors.green, writingDirection: 'rtl', textAlign: 'right', marginBottom: 10 },
  tipItem: { fontSize: 13, color: Colors.inkSoft, writingDirection: 'rtl', textAlign: 'right', lineHeight: 24 },
});
