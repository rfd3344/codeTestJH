import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import snackbar from 'src/common/global/snackbarSlice';

const common = combineReducers({
  snackbar,
});

export const store = configureStore({
  reducer: {
    common,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
