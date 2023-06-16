import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import faTranslations from './fa.json';
import enTranslations from './en.json';
import arTranslations from './ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fa: { translation: faTranslations },
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: 'fa',
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
