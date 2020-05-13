import React from 'react';
import { render } from '@testing-library/react';
import Context from '../../Context';
import Home from './index';

test('renders instructional Text', () => {
  const { getByText } = render(
    <Context.Provider value={{ categories: [], currentJoke: '' }}>
      <Home />
    </Context.Provider>
  );
  const mainElement = getByText(/Click a category for a laugh/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders current joke', () => {
  const currentJoke = "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.";
  const { getByText } = render(
    <Context.Provider value={{ categories: [], currentJoke }}>
      <Home />
    </Context.Provider>
  );
  const mainElement = getByText(currentJoke);
  expect(mainElement).toBeInTheDocument();
});

test('render categories', () => {
  const categories = ['animal', 'career', 'dev'];
  const { getByText } = render(
    <Context.Provider value={{ categories }}>
      <Home />
    </Context.Provider>
  );

  categories.forEach(category =>
    expect(getByText(category)).toBeInTheDocument());
});
