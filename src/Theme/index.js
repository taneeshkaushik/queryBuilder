import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      
      main: '#3333ff',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#002699',
      
      contrastText: '#ffffff',
    }, 

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});