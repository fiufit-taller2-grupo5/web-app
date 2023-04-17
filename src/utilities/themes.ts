import pink from '@mui/material/colors/pink';
import { defaultTheme } from 'react-admin';
import { createTheme } from '@mui/material';

export const mainTheme = {
  ...defaultTheme,
  palette: {
    primary: {
      main: '#FF5252',
    },
    secondary: pink,
  },
};

export const darkTheme = createTheme({
  palette: { mode: 'dark' },
});
