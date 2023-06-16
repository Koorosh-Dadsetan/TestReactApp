import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">

      <div>
        <button onClick={() => handleChangeLanguage('ar')}>عربی</button>
        <button onClick={() => handleChangeLanguage('en')}>English</button>
        <button onClick={() => handleChangeLanguage('fa')}>فارسی</button>
        <p>{t('tableNames.63')}</p>
        <p>{t('labelTables.63.bbhcode')}</p>
        <p>{t('labelTables.63.bankBranchName')}</p>
        <p>{t('labelTables.63.bankName')}</p>
        <p>{t('labelTables.63.branchName')}</p>
        <p>{t('labelTables.63.bankBranchTypeName')}</p>
        <p>{t('labelTables.63.bankBrchManager')}</p>
        <p>{t('labelTables.63.bankBrchAssistant')}</p>
        <p>{t('labelTables.63.bankBrchAddress')}</p>
        <p>{t('labelTables.63.bankBrchDesc')}</p>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
