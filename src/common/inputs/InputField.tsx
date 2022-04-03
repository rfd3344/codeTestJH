import { FC } from 'react';
import { FormControl, TextField } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import _ from 'lodash';

// const useStyles = makeStyles((theme) => ({
//   textField: {
//     marginTop: theme.spacing(1),
//     '& .MuiInput-root': {
//       marginTop: theme.spacing(3),
//     },
//     '& .MuiInputLabel-root': {
//       fontSize: '22px',
//       color: 'black',
//     },
//   },
// }));

type Props = {
  name: string;
  value?: string;
  label?: string;
  onChange?: (e: any) => void;
  formObj?: any;
  debounce?: number;
};

/***
 * input field component
 * @param name - required
 * @param debounce - delay time to trigger onChange event
 *
 */
export const InputField: FC<Props> = ({
  name, // required
  value = '',
  label,
  onChange = (e) => {},
  formObj = {},
  debounce = 200, // time of debonce
  ...rest
}) => {
  const { register, errors } = formObj;
  if (!name) {
    console.error('InputField must have `name` prop');
    return null;
  }

  const handleChange = debounce
    ? _.debounce((e) => onChange(e), debounce)
    : (e: any) => onChange(e);

  return (
    <FormControl fullWidth>
      <TextField
        // className={classes.textField}
        sx={{
          marginTop: (theme) => theme.spacing(1),
          '& .MuiInput-root': {
            marginTop: (theme) => theme.spacing(3),
          },
          '& .MuiInputLabel-root': {
            fontSize: '22px',
            color: 'black',
          },
        }}
        name={name}
        label={label || `${_.capitalize(_.startCase(name))}`}
        variant="standard"
        focused
        InputProps={register && { ...register(name) }}
        defaultValue={value}
        onChange={(e) => handleChange(e)}
        error={_.has(errors, name)}
        helperText={_.get(errors, `${name}.message`)}
        {...rest}
      />
    </FormControl>
  );
};
