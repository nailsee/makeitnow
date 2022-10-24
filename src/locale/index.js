import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import zh from './zh-CN';
import en from  './en';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        zh: {
            translation: zh
        }
    },
    lng: localStorage.getItem('i18nLocal') || 'en',
    interpolation: {
        escapeValue: false // react already safes from xss
    }
})

export default i18n
