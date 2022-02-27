import assert from 'assert';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { MockTheme } from 'src/utils/testUtils';

import { InputField } from './InputField';

describe('TextFieldHookForm', function () {
  it('should render TextFieldHookForm', async function () {
    let value = '';
    const handleChange = (e: any) => {
      value = e.target.value;
    };
    const { container, debug } = render(
      <MockTheme>
        <InputField
          name="name"
          label="labelTest"
          value="value"
          onChange={handleChange}
        />
      </MockTheme>
    );

    const label = container.querySelectorAll('.MuiInputLabel-root');
    const textField = container.querySelectorAll('.MuiInput-input');
    assert.equal(label.length, 1);
    assert.equal(textField.length, 1);
    fireEvent.change(textField[0], { target: { value: 'nextValue' } });

    await waitFor(() => {
      assert.equal(value, 'nextValue');
    });
  });
});
