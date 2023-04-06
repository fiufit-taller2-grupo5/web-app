import * as React from 'react';
import {
  defaultTheme,
  Layout,
  ToggleThemeButton,
  TitlePortal,
  AppBar,
  Resource,
  Sidebar,
  UserMenu,
  Logout,
  Menu,
  LayoutProps,
} from 'react-admin';
import { createTheme } from '@mui/material';
import pink from '@mui/material/colors/pink';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import UserIcon from '@mui/icons-material/Group';
import { AdminCreate, AdminList } from './admins';
import { UserList } from './users';
import { Dashboard } from './dashboard';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: { mode: 'dark' },
});

//Hacer un theme general porque tambien esta en app.tsx
const theme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#FF5252',
    },
    secondary: pink,
  },
};

const AppBarAux = () => (
  <AppBar>
    <TitlePortal />
    <img src="/logo.svg" width="3%" height="3%" />
    <Box flex={7} />
    <ToggleThemeButton lightTheme={theme} darkTheme={darkTheme} />
  </AppBar>
);

const MyUserMenu = () => (
  <UserMenu>
    <Logout />
  </UserMenu>
);

const MenuAux = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="admins" />
    <Menu.ResourceItem name="users" />
  </Menu>
);

export const PageLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout {...props} appBar={AppBarAux} menu={MenuAux} />
);
