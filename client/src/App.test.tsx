import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Chuck Norris Jokes/i);
  expect(headerElement).toBeInTheDocument();
});
