import { FC } from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { openSuccessBar, openErrorBar } from 'src/common/global/snackbarSlice';
import { InputField } from 'src/common/inputs/InputField';

export const Home: FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Go to Login Page
      </Button>
      <Button variant="contained" onClick={() => dispatch(openSuccessBar(''))}>
        openSuccessBar
      </Button>
      <Button variant="contained" onClick={() => dispatch(openErrorBar(''))}>
        openFailureBar
      </Button>
      <InputField name="name" />
    </Container>
  );
};
