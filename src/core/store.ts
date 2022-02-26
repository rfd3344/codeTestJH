import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import snackbar from 'src/core/snackbar/snackbarSlice';
import login from 'src/login/loginSlice';
import post from 'src/post/postSlice';

const common = combineReducers({
  snackbar,
});

export const store = configureStore({
  reducer: {
    login,
    post,
    common,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
      : (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
