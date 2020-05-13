import React from 'react';
import Home from './Home';

const connect = (Component) => () => {
  return (
    <Component text="Click a category for a laugh" />
  );
};

export default connect(Home);