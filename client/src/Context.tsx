import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES, CategoriesData } from './queries';

export interface ContextState {
  categoriesLoading: boolean;
  categories: string[];
  currentJoke: string;
}

export const defaultContextState: ContextState = {
  categoriesLoading: false,
  categories: [],
  currentJoke: '',
};

const Context = React.createContext(defaultContextState);

const ContextProvider: React.SFC = ({ children }) => {
  const { loading, data } = useQuery<CategoriesData>(GET_CATEGORIES);
  const categories = data ? data.categories : [];

  return (
    <Context.Provider value={{ categoriesLoading: loading, categories, currentJoke: '' }}>{children}</Context.Provider>
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
