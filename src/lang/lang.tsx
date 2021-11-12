import enTranslations from './en.json';
import duTranslations from './du.json';

export const getSupportedLanguages = () => {
    return [
        {
            label : 'English',
            value : 'en'
        },
        {
            label : 'Deutsch',
            value : 'du'
        }
    ]
};
