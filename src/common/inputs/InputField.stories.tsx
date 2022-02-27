import { useState } from 'react';

import { InputField } from './InputField';

export default {
  title: 'Components/inputs/InputField',
  component: InputField,
  argTypes: {},
  args: {
    name: 'name',
    label: 'label',
    value: 'value',
  },
};

export const Default = (args: any) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const NoDebounce = (args: any) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputField
      value={value}
      debounce={false}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};
