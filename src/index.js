import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.jsx';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


// i18next.init({
//   interpolation: {escapeValue: false},
//   lng: "fr",
//   fallbackLng: "en",
//   resources: {
//     en: {
//       global: global_en
//     },
//     fr: {
//       global: global_fr,
//     }
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
