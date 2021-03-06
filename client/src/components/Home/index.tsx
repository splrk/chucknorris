import React, { useContext, ReactElement } from 'react';
import Context from '../../Context';
import Home, { HomeProps } from './Home';

const connect = (Component: React.ComponentType<HomeProps>): React.SFC => (): ReactElement => {
  const { jokeLoading, categories, currentJoke, getRandomJoke } = useContext(Context);

  return (
    <Component
      categories={categories}
      text={currentJoke || 'Click a category for a laugh'}
      getRandomJoke={getRandomJoke}
      jokeLoading={jokeLoading}
    />
  );
};

export default connect(Home);
