import pink from '@mui/material/colors/pink';
import { defaultTheme } from 'react-admin';
import { createTheme } from '@mui/material';

export const mainTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: pink[600],
    },
    secondary: {
      main: '#d81b60',
    },
  },
};

export const darkTheme = createTheme({
  palette: { mode: 'dark' },
});
