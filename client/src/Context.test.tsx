import React, { ReactNode } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Context, { ContextProvider } from './Context';
import { GET_CATEGORIES, GET_RANDOM_JOKE } from './queries';

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
  {
    request: {
      query: GET_RANDOM_JOKE,
      variables: {
        category: '',
      },
    },
    result: {
      data: {
        random: {
          value: '',
        },
      },
    },
  },
  {
    request: {
      query: GET_RANDOM_JOKE,
      variables: {
        category: 'dev',
      },
    },
    result: {
      data: {
        random: {
          value: 'The class object inherits from Chuck Norris',
        },
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

test('renders a random joke from a graphql query', async () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ContextProvider>
        <Context.Consumer>
          {({ currentJoke, getRandomJoke }): ReactNode => (
            <>
              <button type="button" onClick={(): void => getRandomJoke('dev')}>
                Get Joke
              </button>
              <div>{currentJoke || 'No Joke'}</div>
            </>
          )}
        </Context.Consumer>
      </ContextProvider>
    </MockedProvider>
  );

  await waitFor(() => expect(getByText('No Joke')).toBeInTheDocument());
  fireEvent.click(getByText('Get Joke'));
  await waitFor(() => expect(getByText('The class object inherits from Chuck Norris')).toBeInTheDocument());
});
