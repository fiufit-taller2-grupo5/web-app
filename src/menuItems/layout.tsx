import {
  Layout,
  ToggleThemeButton,
  TitlePortal,
  Menu,
  LayoutProps,
} from 'react-admin';
import { darkTheme, mainTheme } from '../utilities/themes';
import Box from '@mui/material/Box';
import { AppBarAuxStyle } from '../styles';

const AppBarAux = () => (
  <AppBarAuxStyle>
    <TitlePortal />
    <img src="/logo.svg" width="3%" height="3%" />
    <Box flex={6} />
    <ToggleThemeButton lightTheme={mainTheme} darkTheme={darkTheme} />
  </AppBarAuxStyle>
);

const MenuAux = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="admins" />
    <Menu.ResourceItem name="users" />
    <Menu.ResourceItem name="trainings" />
    <Menu.ResourceItem name="metrics" />
  </Menu>
);

export const PageLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout {...props} appBar={AppBarAux} menu={MenuAux} />
);
