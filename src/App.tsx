import { Admin, Resource, ListGuesser } from 'react-admin';
import { Dashboard } from './dashboard';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { AdminList } from './admins';
import UserIcon from '@mui/icons-material/Group';
import React from 'react';
import axios from 'axios';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import { FirebaseDataProvider } from 'react-admin-firebase';
import { config } from './firebaseConfig';
import { LoginPage } from './loginPage';
import pink from '@mui/material/colors/pink';
import { defaultTheme } from 'react-admin';
import { AdminCreate } from './admins';

const authProvider = FirebaseAuthProvider(config, {});
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataProvider = FirebaseDataProvider(config, {});

const theme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#FF5252',
    },
    secondary: pink,
  },
};

const App = () => {
  React.useEffect(() => {
    axios.get('/training-service/health').then((res) => {
      console.log(res);
    });
  });
  return (
    <Admin
      loginPage={LoginPage}
      theme={theme}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
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
