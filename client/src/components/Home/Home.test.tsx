import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import Context, { defaultContextState, ContextState } from '../../Context';
import Home from './index';

const theme = {
  breaks: {},
};

const renderHome = (overrideState: Partial<ContextState> = {}): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ ...defaultContextState, ...overrideState }}>
        <Home />
      </Context.Provider>
    </ThemeProvider>
  );

test('renders instructional Text', () => {
  const { getByText } = renderHome();
  const mainElement = getByText(/Click a category for a laugh/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders current joke', () => {
  const currentJoke = "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.";
  const { getByText } = renderHome({ currentJoke });
  const mainElement = getByText(currentJoke);
  expect(mainElement).toBeInTheDocument();
});

test('render categories', () => {
  const categories = ['animal', 'career', 'dev'];
  const { getByText } = renderHome({ categories });

  categories.forEach((category) => expect(getByText(category)).toBeInTheDocument());
});
