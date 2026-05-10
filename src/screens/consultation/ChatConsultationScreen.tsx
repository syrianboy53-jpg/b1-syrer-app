import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../../i18n/LanguageContext';
import { theme } from '../../utils/theme';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'advisor';
  type: 'text' | 'voice';
  timestamp: Date;
  voiceDuration?: number;
}

export const ChatConsultationScreen = ({ navigation }: any) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionPaid, setSessionPaid] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 min in seconds
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (sessionActive && timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSessionEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePayAndStart = () => {
    // In production, integrate with payment gateway
    Alert.alert(
      isAr ? 'تأكيد الدفع' : 'Zahlung bestätigen',
      isAr
        ? 'سيتم خصم 5 يورو مقابل جلسة استشارة خاصة مدتها 30 دقيقة. هل تريد المتابعة؟'
        : 'Es werden 5€ für eine 30-minütige private Beratungssitzung berechnet. Fortfahren?',
      [
        { text: isAr ? 'إلغاء' : 'Abbrechen', style: 'cancel' },
        {
          text: isAr ? 'ادفع وابدأ' : 'Bezahlen & Starten',
          onPress: () => {
            setSessionPaid(true);
            setSessionActive(true);
            setMessages([
              {
                id: '1',
                text: isAr
                  ? 'مرحباً بك في جلسة الاستشارة الخاصة. أنا مستشارك القانوني. كيف يمكنني مساعدتك اليوم؟ يمكنك الكتابة أو إرسال رسالة صوتية.'
                  : 'Willkommen zu Ihrer privaten Beratungssitzung. Ich bin Ihr Rechtsberater. Wie kann ich Ihnen heute helfen? Sie können schreiben oder eine Sprachnachricht senden.',
                sender: 'advisor',
                type: 'text',
                timestamp: new Date(),
              },
            ]);
          },
        },
      ]
    );
  };

  const handleSessionEnd = () => {
    setSessionActive(false);
    Alert.alert(
      isAr ? 'انتهت الجلسة' : 'Sitzung beendet',
      isAr ? 'شكراً لاستخدام خدمة الاستشارة. نتمنى أن نكون قد ساعدناك.' : 'Vielen Dank für die Nutzung unseres Beratungsservice.',
    );
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      type: 'text',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulate advisor response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: isAr
          ? 'شكراً لسؤالك. سأراجع التفاصيل وأقدم لك إجابة مفصلة. هل يمكنك تزويدي بمزيد من المعلومات حول حالتك؟'
          : 'Danke für Ihre Frage. Ich werde die Details prüfen und Ihnen eine ausführliche Antwort geben. Können Sie mir mehr Informationen zu Ihrem Fall geben?',
        sender: 'advisor',
        type: 'text',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      // Simulate sending voice message
      const voiceMsg: Message = {
        id: Date.now().toString(),
        text: isAr ? 'رسالة صوتية' : 'Sprachnachricht',
        sender: 'user',
        type: 'voice',
        timestamp: new Date(),
        voiceDuration: Math.floor(Math.random() * 20) + 5,
      };
      setMessages((prev) => [...prev, voiceMsg]);

      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: isAr
            ? 'استلمت رسالتك الصوتية. سأستمع إليها وأرد عليك فوراً.'
            : 'Ich habe Ihre Sprachnachricht erhalten. Ich höre sie mir an und antworte sofort.',
          sender: 'advisor',
          type: 'text',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      }, 2000);
    } else {
      setIsRecording(true);
    }
  };

  if (!sessionPaid) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.startContent}>
        <View style={styles.startHeader}>
          <View style={styles.chatIconCircle}>
            <Ionicons name="chatbubbles" size={48} color={theme.colors.primary} />
          </View>
          <Text style={[styles.startTitle, { textAlign: isAr ? 'right' : 'left' }]}>
            {isAr ? 'استشارة خاصة' : 'Private Beratung'}
          </Text>
          <Text style={[styles.startSubtitle, { textAlign: isAr ? 'right' : 'left' }]}>
            {isAr
              ? 'تحدث مع مستشار قانوني متخصص في محادثة سرية وآمنة'
              : 'Sprechen Sie mit einem spezialisierten Rechtsberater in einem vertraulichen und sicheren Chat'}
          </Text>
        </View>

        <View style={styles.infoCards}>
          <View style={styles.infoCard}>
            <Ionicons name="time" size={28} color={theme.colors.info} />
            <Text style={styles.infoCardTitle}>
              {isAr ? '30 دقيقة' : '30 Minuten'}
            </Text>
            <Text style={styles.infoCardDesc}>
              {isAr ? 'مدة الجلسة' : 'Sitzungsdauer'}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="lock-closed" size={28} color={theme.colors.success} />
            <Text style={styles.infoCardTitle}>
              {isAr ? 'سرية تامة' : 'Vertraulich'}
            </Text>
            <Text style={styles.infoCardDesc}>
              {isAr ? 'محادثة مشفرة' : 'Verschlüsselt'}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="mic" size={28} color={theme.colors.warning} />
            <Text style={styles.infoCardTitle}>
              {isAr ? 'صوت + نص' : 'Sprache + Text'}
            </Text>
            <Text style={styles.infoCardDesc}>
              {isAr ? 'أنت تختار' : 'Sie wählen'}
            </Text>
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.priceAmount}>5€</Text>
          <Text style={styles.pricePer}>
            {isAr ? '/ جلسة واحدة (30 دقيقة)' : '/ eine Sitzung (30 Min.)'}
          </Text>
        </View>

        <View style={styles.guarantees}>
          {[
            isAr ? 'مستشار قانوني متخصص' : 'Spezialisierter Rechtsberater',
            isAr ? 'رد فوري خلال دقائق' : 'Sofortige Antwort',
            isAr ? 'دعم صوتي ونصي' : 'Sprach- und Textunterstützung',
            isAr ? 'سرية كاملة - محادثة مشفرة' : 'Vollständige Vertraulichkeit',
          ].map((item, i) => (
            <View key={i} style={styles.guaranteeRow}>
              <Ionicons name="checkmark-circle" size={20} color={theme.colors.success} />
              <Text style={[styles.guaranteeText, { textAlign: isAr ? 'right' : 'left' }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.payBtn} onPress={handlePayAndStart} activeOpacity={0.8}>
          <Ionicons name="card" size={22} color="#fff" />
          <Text style={styles.payBtnText}>
            {isAr ? 'ادفع 5€ وابدأ الاستشارة' : '5€ bezahlen & Beratung starten'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.freeBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.freeBtnText}>
            {isAr ? 'العودة للاستشارة المجانية' : 'Zurück zur kostenlosen Beratung'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* Timer Header */}
      <View style={styles.timerBar}>
        <View style={styles.timerLeft}>
          <View style={[styles.statusDot, sessionActive && styles.statusDotActive]} />
          <Text style={styles.timerStatus}>
            {sessionActive
              ? isAr ? 'جلسة نشطة' : 'Aktive Sitzung'
              : isAr ? 'انتهت الجلسة' : 'Sitzung beendet'}
          </Text>
        </View>
        <View style={styles.timerRight}>
          <Ionicons name="time-outline" size={18} color={timeRemaining < 300 ? theme.colors.error : theme.colors.text} />
          <Text style={[styles.timerText, timeRemaining < 300 && styles.timerTextUrgent]}>
            {formatTime(timeRemaining)}
          </Text>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.sender === 'user' ? styles.userBubble : styles.advisorBubble,
            ]}
          >
            {msg.type === 'voice' ? (
              <View style={styles.voiceMessage}>
                <Ionicons name="play-circle" size={28} color={msg.sender === 'user' ? '#fff' : theme.colors.primary} />
                <View style={styles.voiceWave}>
                  {[...Array(12)].map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.waveBar,
                        {
                          height: Math.random() * 16 + 6,
                          backgroundColor: msg.sender === 'user' ? 'rgba(255,255,255,0.6)' : theme.colors.primaryLight,
                        },
                      ]}
                    />
                  ))}
                </View>
                <Text style={[styles.voiceDuration, msg.sender === 'user' && styles.userText]}>
                  0:{(msg.voiceDuration || 0).toString().padStart(2, '0')}
                </Text>
              </View>
            ) : (
              <Text style={[styles.messageText, msg.sender === 'user' && styles.userText, { textAlign: isAr ? 'right' : 'left' }]}>
                {msg.text}
              </Text>
            )}
            <Text style={[styles.messageTime, msg.sender === 'user' && styles.userTimeText]}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      {sessionActive && (
        <View style={styles.inputBar}>
          <TouchableOpacity
            style={[styles.voiceBtn, isRecording && styles.voiceBtnRecording]}
            onPress={toggleRecording}
          >
            <Ionicons
              name={isRecording ? 'stop' : 'mic'}
              size={22}
              color={isRecording ? '#fff' : theme.colors.primary}
            />
          </TouchableOpacity>

          <TextInput
            style={[styles.input, { textAlign: isAr ? 'right' : 'left' }]}
            placeholder={isAr ? 'اكتب رسالتك...' : 'Nachricht schreiben...'}
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={1000}
          />

          <TouchableOpacity
            style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]}
            onPress={sendMessage}
            disabled={!inputText.trim()}
          >
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  // Start screen styles
  startContent: {
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  startHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  chatIconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: `${theme.colors.primary}12`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  startTitle: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  startSubtitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  infoCards: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: theme.spacing.xl,
  },
  infoCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  infoCardTitle: {
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.text,
    marginTop: 8,
  },
  infoCardDesc: {
    fontSize: 11,
    color: theme.colors.textLight,
    marginTop: 2,
  },
  priceSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  priceAmount: {
    fontSize: 48,
    fontWeight: theme.fontWeights.extrabold as any,
    color: theme.colors.primary,
  },
  pricePer: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  guarantees: {
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
  guaranteeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  guaranteeText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    flex: 1,
  },
  payBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: theme.borderRadius.full,
    width: '100%',
    marginBottom: theme.spacing.md,
  },
  payBtnText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold as any,
    color: '#fff',
  },
  freeBtn: {
    padding: 12,
  },
  freeBtnText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.semibold as any,
  },
  // Timer bar
  timerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  timerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.textLight,
  },
  statusDotActive: {
    backgroundColor: theme.colors.success,
  },
  timerStatus: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
    fontWeight: theme.fontWeights.medium as any,
  },
  timerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timerText: {
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.bold as any,
    color: theme.colors.text,
  },
  timerTextUrgent: {
    color: theme.colors.error,
  },
  // Messages
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: theme.spacing.md,
    gap: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: theme.borderRadius.lg,
  },
  userBubble: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  advisorBubble: {
    backgroundColor: theme.colors.surface,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  messageText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
  },
  messageTime: {
    fontSize: 11,
    color: theme.colors.textLight,
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  userTimeText: {
    color: 'rgba(255,255,255,0.7)',
  },
  voiceMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  voiceWave: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    flex: 1,
  },
  waveBar: {
    width: 3,
    borderRadius: 2,
  },
  voiceDuration: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  // Input bar
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: theme.spacing.sm,
    paddingBottom: Platform.OS === 'ios' ? theme.spacing.lg : theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    gap: 8,
  },
  voiceBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: `${theme.colors.primary}12`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceBtnRecording: {
    backgroundColor: theme.colors.error,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: theme.fontSizes.md,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: theme.colors.textLight,
  },
});
