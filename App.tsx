import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from './src/i18n/LanguageContext';
import { SubscriptionProvider } from './src/contexts/SubscriptionContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <LanguageProvider>
      <SubscriptionProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <AppNavigator />
        </NavigationContainer>
      </SubscriptionProvider>
    </LanguageProvider>
  );
}
