import { gql } from 'apollo-server';

export interface Joke {
  category: string;
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
}

export default gql`
  scalar GraphQLDateTime

  type Joke {
    categories: [String!]!
    created_at: GraphQLDateTime!
    icon_url: String!
    id: String!
    updated_at: GraphQLDateTime
    url: String!
    value: String!
  }

  type Query {
    random(category: String): Joke
    categories: [String]
  }
`;
