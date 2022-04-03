import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import snackbar from 'src/common/global/snackbarSlice';

const common = combineReducers({
  snackbar,
});

console.warn('process.env.NODE_ENV', process.env.NODE_ENV);

export const store = configureStore({
  reducer: {
    common,
  },

  // TODOS: cannot hidden logs for production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  // middleware:
  //   process.env.NODE_ENV === 'development'
  //     ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  //     : (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
