import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<Button label="Test Button" />);
    expect(getByText('Test Button')).toBeVisible();
  });

  it('should change color when disabled', () => {
    const { getByText } = render(<Button label="Disabled Button" disabled />);
    const buttonElement = getByText('Disabled Button');
    expect(buttonElement).toHaveStyle('background-color: #aaa');
    expect(buttonElement).toHaveStyle('color: #666');
  });
}); 