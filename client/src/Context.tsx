import React, { useReducer, Dispatch } from 'react';
import PropTypes from 'prop-types';
import types from './types';

interface ContextState {
  categoriesLoading: boolean;
  categories: string[];
  currentJoke: string;
}

interface ContextValue extends ContextState {
  dispatch: Dispatch<ContextState>
};

const defaultContextState: ContextState = {
  categoriesLoading: false,
  categories: [],
  currentJoke: '',
};

const defaultContextValue: ContextValue = {
  ...defaultContextState,
  dispatch: (state: ContextState) => state
};

const Context = React.createContext(defaultContextValue);

const reducer = (state: ContextState, action: any): ContextState => {
  switch (action.type) {
    case (types.CATEGORIES_START_REFRESH):
      return {
        ...state,
        categoriesLoading: true
      };
    case (types.CATEGORIES_LOAD_COMPLETE):
      const { categories } = action;

      return {
        ...state,
        categoriesLoading: false,
        categories
      };
    default:
      return state;
  }
}

const ContextProvider: React.SFC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContextState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node
};

export default Context;
export { ContextProvider };
