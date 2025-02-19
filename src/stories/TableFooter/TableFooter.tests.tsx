import React from 'react';
import { render } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<TableFooter><tr><td>Test Footer</td></tr></TableFooter>);
    expect(getByText('Test Footer')).toBeVisible();
  });
}); 