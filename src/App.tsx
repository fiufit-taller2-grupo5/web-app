import { Admin, Resource } from 'react-admin';
import { Dashboard } from './dashboard/dashboard';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users/users';
import { AdminList } from './admins/admins';
import { TrainingList } from './trainings/trainings';
import { PageLayout } from './menuItems/layout';
import UserIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import { config } from './login/firebaseConfig';
import { LoginPage } from './login/loginPage';
import { fetchUtils } from 'react-admin';
import { AdminCreate } from './admins/admins';
import { mainTheme } from './utilities/themes';
import { API_URL } from '../config';
import { AdminShow } from './admins/admins';
import { TrainingShow } from './trainings/trainings';

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

const dataProvider = jsonServerProvider(API_URL, fetchJson);

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
      layout={PageLayout}
      dashboard={Dashboard}
      theme={mainTheme}
    >
      <Resource
        name="admins"
        list={AdminList}
        icon={AdminPanelSettingsIcon}
        create={AdminCreate}
        show={AdminShow}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource
        name="trainings"
        list={TrainingList}
        icon={FitnessCenterIcon}
        show={TrainingShow}
      />
    </Admin>
  );
};

export default App;
