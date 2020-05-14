import React, { ReactNode } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor } from '@testing-library/react';
import Context, { ContextProvider } from './Context';
import { GET_CATEGORIES } from './queries';

const mocks = [
  {
    request: {
      query: GET_CATEGORIES,
    },
    result: {
      data: {
        categories: ['animal', 'career', 'dev'],
      },
    },
  },
];

test('Renders categories from graphql request', async () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks}>
      <ContextProvider>
        <Context.Consumer>
          {({ categories }): ReactNode => (
            <>
              {categories.map((category) => (
                <div key={category}>{category}</div>
              ))}
            </>
          )}
        </Context.Consumer>
      </ContextProvider>
    </MockedProvider>
  );

  // After the first one appears the others should also appear
  await waitFor(() => expect(getByText(/^animal$/)).toBeInTheDocument());
  expect(getByText(/^career$/)).toBeInTheDocument();
  expect(getByText(/^dev$/)).toBeInTheDocument();
});
