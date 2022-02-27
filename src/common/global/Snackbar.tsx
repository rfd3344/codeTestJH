import React, { FC } from 'react';
import { Snackbar as SnackBarMui, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/core/store';

import { closeSnackbar } from './snackbarSlice';

export const Snackbar: FC = () => {
  const dispatch = useDispatch();
  const { snackbar } = useSelector((state: RootState) => state.common);

  const handleClose = (_e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    dispatch(closeSnackbar(''));
  };

  return (
    <SnackBarMui
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.isError ? 'error' : 'success'}
      >
        {snackbar.message}
      </Alert>
    </SnackBarMui>
  );
};
