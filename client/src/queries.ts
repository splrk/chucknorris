import { gql } from 'apollo-boost';

export interface CategoriesData {
  categories: string[];
}

export const GET_CATEGORIES = gql`
  {
    categories
  }
`;
