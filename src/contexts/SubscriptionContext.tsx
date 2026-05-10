import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { subscriptionAPI } from '../api/client';

export type SubscriptionPlan = 'free' | 'premium';

interface SubscriptionContextType {
  plan: SubscriptionPlan;
  isPremium: boolean;
  expiresAt: string | null;
  subscribe: () => Promise<void>;
  unsubscribe: () => Promise<void>;
  refreshStatus: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  plan: 'free',
  isPremium: false,
  expiresAt: null,
  subscribe: async () => {},
  unsubscribe: async () => {},
  refreshStatus: async () => {},
});

export const useSubscription = () => useContext(SubscriptionContext);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plan, setPlan] = useState<SubscriptionPlan>('free');
  const [expiresAt, setExpiresAt] = useState<string | null>(null);

  useEffect(() => {
    loadPlan();
  }, []);

  const loadPlan = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        const status = await subscriptionAPI.getStatus();
        setPlan(status.is_premium ? 'premium' : 'free');
        setExpiresAt(status.expires);
      } else {
        const saved = await AsyncStorage.getItem('subscription_plan');
        if (saved === 'premium') setPlan('premium');
      }
    } catch {
      const saved = await AsyncStorage.getItem('subscription_plan');
      if (saved === 'premium') setPlan('premium');
    }
  };

  const subscribe = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        const status = await subscriptionAPI.subscribe(1);
        setPlan('premium');
        setExpiresAt(status.expires);
        await AsyncStorage.setItem('subscription_plan', 'premium');
      } else {
        setPlan('premium');
        await AsyncStorage.setItem('subscription_plan', 'premium');
      }
    } catch {
      setPlan('premium');
      await AsyncStorage.setItem('subscription_plan', 'premium');
    }
  };

  const unsubscribe = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        await subscriptionAPI.cancel();
      }
    } catch {
      // continue locally
    }
    setPlan('free');
    setExpiresAt(null);
    await AsyncStorage.setItem('subscription_plan', 'free');
  };

  const refreshStatus = async () => {
    await loadPlan();
  };

  return (
    <SubscriptionContext.Provider
      value={{
        plan,
        isPremium: plan === 'premium',
        expiresAt,
        subscribe,
        unsubscribe,
        refreshStatus,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
