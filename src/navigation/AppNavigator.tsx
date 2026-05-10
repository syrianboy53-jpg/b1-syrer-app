import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSize, fontWeight } from '../utils/theme';
import { useLanguage } from '../i18n/LanguageContext';

import { HomeScreen } from '../screens/HomeScreen';
import { LegalListScreen } from '../screens/legal/LegalListScreen';
import { PoliceScreen } from '../screens/legal/PoliceScreen';
import { JugendamtScreen } from '../screens/legal/JugendamtScreen';
import { FinesScreen } from '../screens/legal/FinesScreen';
import { ProsecutorScreen } from '../screens/legal/ProsecutorScreen';
import { PoliceMailScreen } from '../screens/legal/PoliceMailScreen';
import { FalseAccusationsScreen } from '../screens/legal/FalseAccusationsScreen';
import { ChildRemovalScreen } from '../screens/legal/ChildRemovalScreen';
import { FrauenhausScreen } from '../screens/legal/FrauenhausScreen';
import { BeforeDivorceScreen } from '../screens/legal/BeforeDivorceScreen';
import { AfterDivorceScreen } from '../screens/legal/AfterDivorceScreen';
import { ConsultationScreen } from '../screens/consultation/ConsultationScreen';
import { ChatConsultationScreen } from '../screens/consultation/ChatConsultationScreen';
import { BlogScreen } from '../screens/blog/BlogScreen';
import { BlogDetailScreen } from '../screens/blog/BlogDetailScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const headerOptions = (title: string) => ({
  headerShown: true,
  title,
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: '#fff',
});

const LegalStack = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LegalList" component={LegalListScreen} />
      <Stack.Screen name="PoliceScreen" component={PoliceScreen} options={headerOptions(isAr ? 'الشرطة' : 'Polizei')} />
      <Stack.Screen name="JugendamtScreen" component={JugendamtScreen} options={headerOptions('Jugendamt')} />
      <Stack.Screen name="FinesScreen" component={FinesScreen} options={headerOptions(isAr ? 'الغرامات' : 'Bußgelder')} />
      <Stack.Screen name="ProsecutorScreen" component={ProsecutorScreen} options={headerOptions(isAr ? 'النيابة العامة' : 'Staatsanwaltschaft')} />
      <Stack.Screen name="PoliceMailScreen" component={PoliceMailScreen} options={headerOptions(isAr ? 'بريد الشرطة' : 'Polizeipost')} />
      <Stack.Screen name="FalseAccusationsScreen" component={FalseAccusationsScreen} options={headerOptions(isAr ? 'الادعاءات الكيدية' : 'Falschbeschuldigungen')} />
      <Stack.Screen name="ChildRemovalScreen" component={ChildRemovalScreen} options={headerOptions(isAr ? 'سحب الأطفال' : 'Inobhutnahme')} />
      <Stack.Screen name="FrauenhausScreen" component={FrauenhausScreen} options={headerOptions('Frauenhaus')} />
      <Stack.Screen name="BeforeDivorceScreen" component={BeforeDivorceScreen} options={headerOptions(isAr ? 'قبل الطلاق' : 'Vor der Scheidung')} />
      <Stack.Screen name="AfterDivorceScreen" component={AfterDivorceScreen} options={headerOptions(isAr ? 'بعد الطلاق' : 'Nach der Scheidung')} />
    </Stack.Navigator>
  );
};

const ConsultationStack = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConsultationMain" component={ConsultationScreen} />
      <Stack.Screen name="ChatConsultation" component={ChatConsultationScreen} options={headerOptions(isAr ? 'استشارة خاصة' : 'Private Beratung')} />
    </Stack.Navigator>
  );
};

const BlogStack = () => {
  const { language } = useLanguage();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BlogList" component={BlogScreen} />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetailScreen}
        options={headerOptions(language === 'ar' ? 'المقال' : 'Artikel')}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  const { t } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'LegalTab':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'ConsultationTab':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'BlogTab':
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
            case 'ProfileTab':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: 85,
          paddingBottom: 20,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: fontWeight.medium,
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: t('home') }}
      />
      <Tab.Screen
        name="LegalTab"
        component={LegalStack}
        options={{ tabBarLabel: t('legalGuide') }}
      />
      <Tab.Screen
        name="ConsultationTab"
        component={ConsultationStack}
        options={{ tabBarLabel: t('consultation') }}
      />
      <Tab.Screen
        name="BlogTab"
        component={BlogStack}
        options={{ tabBarLabel: t('blog') }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ tabBarLabel: t('profile') }}
      />
    </Tab.Navigator>
  );
};
