import {
  Layout,
  ToggleThemeButton,
  TitlePortal,
  AppBar,
  Menu,
  LayoutProps,
} from 'react-admin';
import { darkTheme, mainTheme } from '../utilities/themes';
import Box from '@mui/material/Box';

const AppBarAux = () => (
  <AppBar>
    <TitlePortal />
    <img src="/logo.svg" width="3%" height="3%" />
    <Box flex={6} />
    <ToggleThemeButton lightTheme={mainTheme} darkTheme={darkTheme} />
  </AppBar>
);

const MenuAux = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="admins" />
    <Menu.ResourceItem name="users" />
    <Menu.ResourceItem name="trainings" />
  </Menu>
);

export const PageLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout {...props} appBar={AppBarAux} menu={MenuAux} />
);
