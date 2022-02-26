import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'src/core/theme';



export const MockTheme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
