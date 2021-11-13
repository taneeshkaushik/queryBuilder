import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#5C61F0',
    
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#5C61F0',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },

    neutral: {
      main: '#5C61F0',
      contrastText: '#fff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});