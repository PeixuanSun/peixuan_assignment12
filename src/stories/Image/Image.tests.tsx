import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('Image Component', () => {
  it('should be visible', () => {
    const { getByAltText } = render(<Image src="https://via.placeholder.com/150" alt="Test Image" />);
    expect(getByAltText('Test Image')).toBeVisible();
  });
}); 