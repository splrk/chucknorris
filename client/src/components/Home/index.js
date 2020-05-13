import React, { useContext } from 'react';
import Context from '../../Context';
import Home from './Home';

const connect = (Component) => () => {
  const { categories, currentJoke } = useContext(Context);

  return (
    <Component
      categories={categories}
      text={currentJoke || 'Click a category for a laugh'}
    />
  );
};

export default connect(Home);