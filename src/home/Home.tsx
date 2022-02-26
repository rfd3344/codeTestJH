import { FC } from 'react';
import { Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { openSuccessBar, openErrorBar } from 'src/core/snackbar/snackbarSlice';

export const Home: FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Go to Login Page
      </Button>
      <Button onClick={() => dispatch(openSuccessBar(''))}>
        openSuccessBar
      </Button>
      <Button onClick={() => dispatch(openErrorBar(''))}>openFailureBar</Button>
    </Container>
  );
};
