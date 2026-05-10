import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAPI, userAPI, saveToken, clearToken, UserData } from '../api/client';

interface AuthContextType {
  user: UserData | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    first_name: string;
    last_name?: string;
    phone?: string;
    language?: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  refreshUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        const userData = await userAPI.getProfile();
        setUser(userData);
      }
    } catch {
      await clearToken();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const response = await authAPI.login(email, password);
    await saveToken(response.access_token);
    setUser(response.user);
  };

  const register = async (data: {
    email: string;
    password: string;
    first_name: string;
    last_name?: string;
    phone?: string;
    language?: string;
  }) => {
    const response = await authAPI.register(data);
    await saveToken(response.access_token);
    setUser(response.user);
  };

  const logout = async () => {
    await clearToken();
    setUser(null);
  };

  const refreshUser = async () => {
    try {
      const userData = await userAPI.getProfile();
      setUser(userData);
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
