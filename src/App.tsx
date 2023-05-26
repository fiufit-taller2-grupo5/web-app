import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserEdit, UserList } from './users/users';
import { AdminList } from './admins/admins';
import { TrainingEdit, TrainingList } from './trainings/trainings';
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
import { API_USER_URL, API_TRAININGS_URL } from '../config';
import { TrainingShow } from './trainings/trainings';
import CompositeDataProvider from './compositeDataProvider';
import { Dashboards } from './dashboard/dashboards';

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
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = new CompositeDataProvider([
  {
    dataProvider: jsonServerProvider(API_USER_URL, fetchJson),
    resources: ['admins', 'users'],
  },
  {
    dataProvider: jsonServerProvider(API_TRAININGS_URL, fetchJson),
    resources: ['trainings'],
  },
]);

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
      layout={PageLayout}
      dashboard={Dashboards}
      theme={mainTheme}
    >
      <Resource
        name="admins"
        list={AdminList}
        icon={AdminPanelSettingsIcon}
        create={AdminCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} />
      <Resource
        name="trainings"
        list={TrainingList}
        icon={FitnessCenterIcon}
        show={TrainingShow}
        edit={TrainingEdit}
      />
    </Admin>
  );
};

export default App;
