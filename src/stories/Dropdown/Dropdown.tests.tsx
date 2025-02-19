import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  it('should be visible', () => {
    const { getByRole } = render(<Dropdown options={[{ label: 'Option 1', value: '1' }]} onChange={() => {}} />);
    expect(getByRole('combobox')).toBeVisible();
  });
}); 