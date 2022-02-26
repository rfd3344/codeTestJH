import { Snackbar, Alert, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import { closeSnackbar } from './snackbarSlice';

export const GlobalSnackbar = () => {
  const dispatch = useDispatch();
  const snackbar =
    useSelector((state: RootState) => state.common?.snackbar) || {};

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;

    dispatch(closeSnackbar(''));
  };

  return (
    <Snackbar
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
    </Snackbar>
  );
};
