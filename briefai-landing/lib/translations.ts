import { de } from '@/locales/de'
import { ar } from '@/locales/ar'

export type Locale = 'de' | 'ar'

const translations = { de, ar }

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

export function getFontClass(locale: Locale): string {
  return locale === 'ar' ? 'font-cairo' : 'font-inter'
}
