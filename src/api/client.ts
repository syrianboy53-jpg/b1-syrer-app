import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://family-lawyer-backend-puwkshpq.fly.dev';

const TOKEN_KEY = '@auth_token';

async function getToken(): Promise<string | null> {
  return AsyncStorage.getItem(TOKEN_KEY);
}

export async function saveToken(token: string): Promise<void> {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function clearToken(): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = await getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Network error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

// ─── Types ───
export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_premium: boolean;
  subscription_expires: string | null;
  language: string;
  created_at: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: UserData;
}

export interface SubscriptionStatus {
  is_premium: boolean;
  expires: string | null;
  plan: string;
}

export interface ConsultationData {
  id: number;
  topic: string;
  description: string;
  status: string;
  consultation_type: string;
  duration_minutes: number;
  price: number;
  is_paid: boolean;
  started_at: string | null;
  ended_at: string | null;
  created_at: string;
}

export interface ChatMessageData {
  id: number;
  sender: string;
  content: string;
  message_type: string;
  created_at: string;
}

export interface NotificationData {
  id: number;
  title_ar: string;
  title_de: string;
  body_ar: string;
  body_de: string;
  notification_type: string;
  is_read: boolean;
  created_at: string;
}

export interface AppVersionData {
  version: string;
  version_code: number;
  release_notes_ar: string;
  release_notes_de: string;
  is_mandatory: boolean;
  download_url: string;
}

// ─── Auth API ───
export const authAPI = {
  register: (data: {
    email: string;
    password: string;
    first_name: string;
    last_name?: string;
    phone?: string;
    language?: string;
  }) => request<AuthResponse>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  login: (email: string, password: string) =>
    request<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
};

// ─── User API ───
export const userAPI = {
  getProfile: () => request<UserData>('/api/user/me'),

  updateProfile: (data: {
    first_name?: string;
    last_name?: string;
    phone?: string;
    language?: string;
    push_token?: string;
  }) => request<UserData>('/api/user/me', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
};

// ─── Subscription API ───
export const subscriptionAPI = {
  getStatus: () => request<SubscriptionStatus>('/api/subscription'),

  subscribe: (months: number = 1) =>
    request<SubscriptionStatus>('/api/subscription/subscribe', {
      method: 'POST',
      body: JSON.stringify({ months }),
    }),

  cancel: () =>
    request<SubscriptionStatus>('/api/subscription/cancel', {
      method: 'POST',
    }),
};

// ─── Consultation API ───
export const consultationAPI = {
  create: (data: { topic: string; description?: string; consultation_type?: string }) =>
    request<ConsultationData>('/api/consultations', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  list: () => request<ConsultationData[]>('/api/consultations'),

  get: (id: number) => request<ConsultationData>(`/api/consultations/${id}`),

  sendMessage: (consultationId: number, content: string, messageType: string = 'text') =>
    request<ChatMessageData>(`/api/consultations/${consultationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content, message_type: messageType }),
    }),

  getMessages: (consultationId: number) =>
    request<ChatMessageData[]>(`/api/consultations/${consultationId}/messages`),
};

// ─── Notifications API ───
export const notificationAPI = {
  list: () => request<NotificationData[]>('/api/notifications'),

  markRead: (id: number) =>
    request<{ status: string }>(`/api/notifications/${id}/read`, { method: 'PUT' }),

  getUnreadCount: () => request<{ count: number }>('/api/notifications/unread-count'),
};

// ─── App Updates API ───
export const appAPI = {
  checkUpdate: (currentVersionCode: number) =>
    request<AppVersionData | null>('/api/app/check-update', {
      method: 'POST',
      body: JSON.stringify({ current_version_code: currentVersionCode }),
    }),
};
