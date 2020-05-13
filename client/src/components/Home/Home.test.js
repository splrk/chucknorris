import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

test('renders instructional Text', () => {
  const { getByText } = render(<Home />);
  const mainElement = getByText(/Click a category for a laugh/i);
  expect(mainElement).toBeInTheDocument();
});
