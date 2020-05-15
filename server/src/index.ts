import { ApolloServer } from 'apollo-server';
import axios from 'axios';
import { GraphQLDateTime } from 'graphql-iso-date';
import typeDefs, { Joke } from './schema';

type RandomJokeParams = {
  category?: string;
};

const resolvers = {
  GraphQLDateTime,

  Query: {
    random: async (_: any, { category }: RandomJokeParams): Promise<Joke> => {
      const params: RandomJokeParams = {};
      if (category) {
        params.category = category;
      }

      const res = await axios({
        url: `https://api.chucknorris.io/jokes/random`,
        params,
      });

      return res.data;
    },

    categories: (): Promise<{ categories: string[] }> =>
      axios('https://api.chucknorris.io/jokes/categories').then(({ data }) => data),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: { origin: '*', credentials: true },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
