import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { trimmedString } from 'src/utils/stringUtils';

const defaultErrorMessage = 'A server error occurred, please try again later.';
const defaultSuccessMessage = 'Scuccess';

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    isError: false,
    message: '',
  },
  reducers: {
    openSnackbar: (state, action) => {
      const { payload = {} } = action;
      if (payload.isError) {
        state.isError = true;
        state.message = payload.message || defaultErrorMessage;
      } else {
        state.isError = false;
        state.message = payload || defaultSuccessMessage;
      }
      state.open = true;
    },
    openErrorBar: (state, action) => {
      const { payload } = action;
      return {
        open: true,
        isError: true,
        message:
          trimmedString(payload) ||
          'A server error occurred, please try again later',
      };
    },
    closeSnackbar: (state, action) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, openErrorBar, closeSnackbar } =
  snackbarSlice.actions;
export default snackbarSlice.reducer;
