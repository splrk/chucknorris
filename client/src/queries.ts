import { gql } from 'apollo-boost';

export interface CategoriesData {
  categories: string[];
}

export const GET_CATEGORIES = gql`
  {
    categories
  }
`;

export const GET_RANDOM_JOKE = gql`
  query GetRandomJoke($category: Category) {
    random(category: $category) {
      value
    }
  }
`;
