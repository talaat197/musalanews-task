import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './en.json';
import duTranslations from './du.json';

const initLang = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslations,
      },
      du: {
        translation: duTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default initLang;
