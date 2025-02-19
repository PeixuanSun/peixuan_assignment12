import React from 'react';
import { render } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<TableRow><td>Test Row</td></TableRow>);
    expect(getByText('Test Row')).toBeVisible();
  });
}); 