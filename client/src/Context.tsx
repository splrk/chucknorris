import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES, GET_RANDOM_JOKE, CategoriesData } from './queries';

export interface ContextState {
  categoriesLoading: boolean;
  categories: string[];
  currentJoke: string;
}

export interface ContextValue extends ContextState {
  getRandomJoke: (category: string) => void;
}

export const defaultContextState: ContextValue = {
  categoriesLoading: false,
  categories: [],
  currentJoke: '',
  getRandomJoke() {
    throw new Error('uninitalized');
  },
};

const Context = React.createContext<ContextValue>(defaultContextState);

const ContextProvider: React.SFC = ({ children }) => {
  const { loading, data } = useQuery<CategoriesData>(GET_CATEGORIES);
  const [getRandomJoke, { data: randomJoke }] = useLazyQuery<{ random: { value: string } }>(GET_RANDOM_JOKE, {
    fetchPolicy: 'no-cache',
  });

  const categories = data ? data.categories : [];
  const currentJoke = randomJoke ? randomJoke.random.value : '';

  return (
    <Context.Provider
      value={{
        categoriesLoading: loading,
        categories,
        currentJoke,
        getRandomJoke: (category): void => getRandomJoke({ variables: { category } }),
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

ContextProvider.defaultProps = {
  children: null,
};

export default Context;
export { ContextProvider };
