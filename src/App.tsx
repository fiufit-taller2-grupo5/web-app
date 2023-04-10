import { Admin, Resource } from 'react-admin';
import { Dashboard } from './dashboard';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { AdminList } from './admins';
import { PageLayout } from './layout';
import UserIcon from '@mui/icons-material/Group';
import React from 'react';
import axios from 'axios';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import { config } from './firebaseConfig';
import { LoginPage } from './loginPage';
import { fetchUtils } from 'react-admin';
import { AdminCreate } from './admins';
import { mainTheme } from './themes';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';

// All options are optional
const options = {
  logging: true,
  persistence: 'local' as const,
};

const authProvider = FirebaseAuthProvider(config, options);

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const tokenKey = `firebase:authUser:${config.apiKey}:[DEFAULT]`;
  const token = JSON.parse(localStorage.getItem(tokenKey) as string);
  const customHeaders = (options.headers ||
    new Headers({
      Accept: 'application/json',
    })) as Headers;
  customHeaders.set(
    'Authorization',
    `Bearer ${token.stsTokenManager.accessToken}`
  );
  console.log(token.stsTokenManager.accessToken);
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://api-gateway/api', fetchJson);

const i18nProvider = polyglotI18nProvider(
  (locale) => englishMessages,
  'en', // Default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'es', name: 'Spanish' },
  ]
);

const App = () => {
  React.useEffect(() => {
    axios.get('/api-gateway/health-check').then((res) => {
      console.log('health check:', res);
    });
    axios
      .post('api-gateway/api/users?name=maria&email=maria@mail.com')
      .then((res) => {
        console.log('usuarios:', res);
      });
    axios.get('api-gateway/api/users').then((res) => {
      console.log('usuarios obtenidos:', res);
    });
  }, []);

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
      layout={PageLayout}
      dashboard={Dashboard}
      theme={mainTheme}
      i18nProvider={i18nProvider}
    >
      <Resource
        name="admins"
        list={AdminList}
        icon={AdminPanelSettingsIcon}
        create={AdminCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  );
};

export default App;
