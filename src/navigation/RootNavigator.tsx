import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import ExamSectionsScreen from '../screens/ExamSectionsScreen';
import LebenQuizScreen from '../screens/LebenQuizScreen';
import GrammarScreen from '../screens/GrammarScreen';
import WritingTemplatesScreen from '../screens/WritingTemplatesScreen';
import LevelTestScreen from '../screens/LevelTestScreen';
import CommonProblemsScreen from '../screens/CommonProblemsScreen';
import SuccessStoriesScreen from '../screens/SuccessStoriesScreen';
import StudyPlannerScreen from '../screens/StudyPlannerScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import CitizenshipScreen from '../screens/CitizenshipScreen';
import OfflineScreen from '../screens/OfflineScreen';
import FreeScreen from '../screens/FreeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.greenDeep },
        headerTintColor: Colors.gold,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExamSections"
        component={ExamSectionsScreen}
        options={{ title: 'أقسام الامتحان' }}
      />
      <Stack.Screen
        name="LebenQuiz"
        component={LebenQuizScreen}
        options={{ title: 'Leben in Deutschland' }}
      />
      <Stack.Screen
        name="Grammar"
        component={GrammarScreen}
        options={{ title: 'القواعد والمفردات' }}
      />
      <Stack.Screen
        name="Vocabulary"
        component={GrammarScreen}
        options={{ title: 'المفردات' }}
      />
      <Stack.Screen
        name="WritingTemplates"
        component={WritingTemplatesScreen}
        options={{ title: 'نماذج الكتابة' }}
      />
      <Stack.Screen
        name="LevelTest"
        component={LevelTestScreen}
        options={{ title: 'اختبار المستوى' }}
      />
      <Stack.Screen
        name="CommonProblems"
        component={CommonProblemsScreen}
        options={{ title: 'أخطاء شائعة' }}
      />
      <Stack.Screen
        name="SuccessStories"
        component={SuccessStoriesScreen}
        options={{ title: 'قصص نجاح' }}
      />
      <Stack.Screen
        name="Citizenship"
        component={CitizenshipScreen}
        options={{ title: 'دليل الجنسية' }}
      />
      <Stack.Screen
        name="Offline"
        component={OfflineScreen}
        options={{ title: 'بدون إنترنت' }}
      />
      <Stack.Screen
        name="Free"
        component={FreeScreen}
        options={{ title: 'مجاني' }}
      />
    </Stack.Navigator>
  );
}

function LebenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.greenDeep },
        headerTintColor: Colors.gold,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="LebenMain"
        component={LebenQuizScreen}
        options={{ title: 'Leben in Deutschland' }}
      />
    </Stack.Navigator>
  );
}

function PlannerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.greenDeep },
        headerTintColor: Colors.gold,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="PlannerMain"
        component={StudyPlannerScreen}
        options={{ title: 'خطة الدراسة' }}
      />
    </Stack.Navigator>
  );
}

function AchievementsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.greenDeep },
        headerTintColor: Colors.gold,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="AchievementsMain"
        component={AchievementsScreen}
        options={{ title: 'الإنجازات' }}
      />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.muted,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.cardBorder,
          paddingBottom: 6,
          paddingTop: 6,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'الرئيسية',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="🏠" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Leben"
        component={LebenStack}
        options={{
          tabBarLabel: 'الجنسية',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="🇩🇪" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerStack}
        options={{
          tabBarLabel: 'الخطة',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="📅" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Achievements"
        component={AchievementsStack}
        options={{
          tabBarLabel: 'إنجازاتي',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="🏆" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { Text } from 'react-native';

function TabIcon({ emoji }: { emoji: string; color: string }) {
  return <Text style={{ fontSize: 22 }}>{emoji}</Text>;
}
