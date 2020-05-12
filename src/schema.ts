import { gql } from 'apollo-server';

export enum Category {
  animal = 'animal',
  career = 'career',
  celebrity = 'celebrity',
  dev = 'dev',
  explicit = 'explicit',
  fashion = 'fashion',
  food = 'food',
  history = 'history',
  money = 'money',
  movie = 'movie',
  music = 'music',
  political = 'political',
  religion = 'religion',
  science = 'science',
  sport = 'sport',
  travel = 'travel'
}


export default gql`
  scalar GraphQLDateTime

  enum Category {
    animal
    career
    celebrity
    dev
    explicit
    fashion
    food
    history
    money
    movie
    music
    political
    religion
    science
    sport
    travel
  }

  type Joke {
    categories: [Category!]!
    created_at: GraphQLDateTime!
    icon_url: String!
    id: String!
    updated_at: GraphQLDateTime
    url: String!
    value: String!
  }

  type Query {
    random(category: Category): Joke
    categories: [Category]
  }
`;