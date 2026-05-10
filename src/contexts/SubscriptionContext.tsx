import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type SubscriptionPlan = 'free' | 'premium';

interface SubscriptionContextType {
  plan: SubscriptionPlan;
  isPremium: boolean;
  subscribe: () => Promise<void>;
  unsubscribe: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  plan: 'free',
  isPremium: false,
  subscribe: async () => {},
  unsubscribe: async () => {},
});

export const useSubscription = () => useContext(SubscriptionContext);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plan, setPlan] = useState<SubscriptionPlan>('free');

  useEffect(() => {
    loadPlan();
  }, []);

  const loadPlan = async () => {
    try {
      const saved = await AsyncStorage.getItem('subscription_plan');
      if (saved === 'premium') setPlan('premium');
    } catch {}
  };

  const subscribe = async () => {
    // In production, this would integrate with Google Play Billing
    setPlan('premium');
    await AsyncStorage.setItem('subscription_plan', 'premium');
  };

  const unsubscribe = async () => {
    setPlan('free');
    await AsyncStorage.setItem('subscription_plan', 'free');
  };

  return (
    <SubscriptionContext.Provider
      value={{
        plan,
        isPremium: plan === 'premium',
        subscribe,
        unsubscribe,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
