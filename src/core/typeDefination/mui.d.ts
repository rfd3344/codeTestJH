import type { Theme } from '@mui/material/styles';
import type { PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/styles/defaultTheme' {

  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {

  export interface PaletteOptions {
    gray: {
      main: string;
      light: string;
      dark: string;
    };
    blue: {
      light: string;
      dark: string;
    };
    black: string;
    white: string;
  }
}
