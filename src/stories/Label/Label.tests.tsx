import React from 'react';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<Label text="Test Label" htmlFor="input-id" />);
    expect(getByText('Test Label')).toBeVisible();
  });

  it('should change color when disabled', () => {
    const { getByText } = render(<Label text="Disabled Label" htmlFor="input-id" disabled />);
    const labelElement = getByText('Disabled Label');
    expect(labelElement).toHaveStyle('color: #aaa');
  });
}); 