import { createTheme } from '@mui/material/styles';

enum Color {
  LightPurple = '#a491d3',
  LightBlue = '#90caf9',
  DarkBlue = '#2d5f70',
  LightGray = '#e0e0e0',
  Gray = '##9e9e9e',
  DarkGray = '#616161',
  Black = '#212121',
  White = '#fafafa',
}

export const theme = createTheme({
  spacing: 4,
  typography: {
    fontSize: 18,
    fontFamily: '"Space Grotesk"',
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 800,
    },
    h6: {
      fontSize: '16px',
    },
    subtitle1: {
      fontSize: '16px',
    },
    subtitle2: {
      fontSize: '14px',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
  palette: {
    gray: {
      main: Color.Gray,
      light: Color.LightGray,
      dark: Color.DarkGray,
    },
    blue: {
      light: Color.LightBlue,
      dark: Color.DarkBlue,
    },
    black: Color.Black,
    white: Color.White,
    primary: {
      main: Color.LightPurple,
    },
    secondary: {
      main: Color.LightBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: 20,
          fontWeight: 400,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '& a': {
            color: Color.LightPurple,
          },
        },
      },
    },
  },
});
