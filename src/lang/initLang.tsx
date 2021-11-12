import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './en.json';
import deTranslations from './de.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enTranslations,
    },
    de: {
      translation: deTranslations,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
