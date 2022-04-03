import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import snackbar from 'src/common/global/snackbarSlice';

const reducer = combineReducers({
  common: { snackbar },
});

console.warn('process.env.NODE_ENV', process.env.NODE_ENV);

export const store = configureStore({
  reducer,

  // TODOS: cannot hidden logs for production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  // middleware:
  //   process.env.NODE_ENV === 'development'
  //     ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  //     : (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
