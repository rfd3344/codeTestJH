import { FC } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';
import { store } from './store';
import { Router } from './Router';

import { Snackbar } from 'src/common/global/Snackbar';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Snackbar />

        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
