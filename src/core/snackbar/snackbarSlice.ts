import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { trimmedString } from 'src/utils/stringUtils';

const errorMessage = 'A server error occurred, please try again later.';
const successMessage = 'Scuccess';

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    isError: false,
    message: '',
  },
  reducers: {
    openSuccessBar: (_state, action) => {
      const { payload = successMessage } = action;
      return {
        open: true,
        isError: false,
        message: trimmedString(payload),
      };
    },
    openErrorBar: (_state, action) => {
      const { payload = errorMessage } = action;
      return {
        open: true,
        isError: true,
        message: trimmedString(payload),
      };
    },
    closeSnackbar: (state, _action) => {
      state.open = false;
    },
  },
});

export const { openSuccessBar, openErrorBar, closeSnackbar } =
  snackbarSlice.actions;
export default snackbarSlice.reducer;
