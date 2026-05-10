import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from './src/i18n/LanguageContext';
import { SubscriptionProvider } from './src/contexts/SubscriptionContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { UpdateChecker } from './src/components/UpdateChecker';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <NavigationContainer>
            <StatusBar style="light" />
            <AppNavigator />
            <UpdateChecker />
          </NavigationContainer>
        </SubscriptionProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
